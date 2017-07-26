/*
 * The MIT License
 *
 * Copyright 2016 Kenneth Tilton.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

const TODO_LS_PREFIX = "todos-MatrixJS.";

/*
	This class was created so the to-do data could play along with the Cells-driven UI.
	It gets a lot of work because much of the GUI reflects the state of the data.
	Along the way we achieve a bit of transparent object persistence, so we can just
	manipulate JS proxies of the data and have localStorage kept in sync for us.

	The implementation exceeds the official TodoMVC spec two ways. First, it maintains
	items individually instead of writing them all out as a single blob. Second, it deletes logically
	instead of physically, and by records completion and deletion as timestamps of those actions rather than
	as mere booleans.

 */

class Todo extends Model {
	constructor(islots) {
		let netSlots = Object.assign(
			{dbKey: TODO_LS_PREFIX + uuidv4(),
			 created: Date.now()},
			islots,
			// flow:GLUE "box" certain islots in input Cells to support dataflow
			{ title: cI( islots.title ),
				completed: todoCompletedRule( islots.completed),
				deleted: islots.deleted || cI( null)});

		super(null, null, netSlots, false); // flow:GLUE: Model constructor does a *lot*

		if ( !islots.dbKey) { // ie, if not already stored, ie if being instantiated from DB
			// Transparent persistence begins here: a new TDo in memory
			// gets stored immediately.
			this.store();
		}
	}
	toJSON () {
		return  {dbKey: this.dbKey,
				 title: this.title,
				 created: this.created,
				 completed: this.completed,
				 deleted: this.deleted }
	}
	static fromJSON ( json) {
		return new Todo( json )
	}
	static load (dbKey) {
		return new Todo( localStorage.getObject( dbKey))
	}

	static obsTodoChange ( slot, todo, newv, priorv, c) {
		// no matter what changed, re-write the whole thing...
		todo.store();
	}

	// flow:GLUE Tell Cells about our observer
	slotObserverResolve(slot) {
		// in identifying to the Cells engine which slot observer to use, we
		// ignore which slot changed since localStorage does not support that granularity.
		return Todo.obsTodoChange }

	static loadAllItems() {
		// Load all items into a container model so various widgets can watch via Cell dependencies.
		// This generic instance is clearly headed for implementation as a dedicated JS class, but
		// leaving it as a generic instance illustrates how Cells makes OO less constraining (classes
		// simply do not dictate as much about an instance, so classes get more re-use).

		return mkm( null, 'Todo',
				// next Cell ('cI' is for 'input cell') loads localStorage immediately when
				// the itemsRaw value is evaluated. itemsRaw can then be assigned to as new items
				// are created (in this implementation we only logically delete) to effectively
				// kick off the propagation of the new item's existence.
				{ itemsRaw: cI( Object.keys(localStorage) //flow:INPUT
									.filter( k => k.startsWith(TODO_LS_PREFIX))
									.map( Todo.load)
									.sort( (a,b) => a.created < b.created ? -1 : 1) || []),

				// next Cell dynamically maintains a property that hides deleted items as soon as they are deleted
				// When recomputed, any other Cell that cares about the population of items will run again.
				items: cF( c => c.md.itemsRaw.filter( td => !td.deleted)),

				// here we have a twist, a so-called "ephemeral" Cell that will silently (without
				// triggering a propagation or observers) revert to nil after being assigned to.
				// The semantics here are a way to trigger changes to multiple Todos who
				// will have rules that watch this value. Our use case is the "completed" status
				// of a Todo: when "toggle all" is clicked, a bulk operation watched by the
				// formula for the completed status gets kicked off and all items get a new
				// status as part of a single so-called data pulse.
				txBulkOp: cIe( null)}) // flow::INPUT
	}
	store () {
		localStorage.setObject( this.dbKey, this.toJSON());
	}
	delete() {
		this.deleted = Date.now(); // flow:TRIGGER
	}
	static completionRevise (targets, action) {
		Todos.txBulkOp = {opCode: 'completion', targets: targets, action: action};
	}
}

function todoCompletedRule( initialValue) {
	// This is an example showing how complicated formulae can be broken out
	// as functions just to keep source manageable.

	return cF( c => {
		let tx = Todos.txBulkOp; // this creates the dependency, so this computation re-runs when txBulkOp gets assigned

		if ( tx && tx.opCode === 'completion' && tx.targets.indexOf( c.md) !== -1) {
			return tx.action === 'undo' ? null : (c.pv || Date.now()); // enforce not stomp on prior comp
		} else {
			// there is no tx (the model is coming to life) or this TD is not
			// affected by the bulk TX, so stick with current/initial value:
			if ( c.pv === kUnbound ) { // rule is running for first time
				return initialValue; // reloaded from localStorage
			} else {
				return c.pv; // initialValue only gets used initially
			}
			// Advanced Cells: we could use so-called synaptic Cells inside rules
			// when referencing the txBulkOp value to avoid this rule getting
			// re-evaluated unnecessarily (when opCode not completion or this md
			// not being on the target list).
		}
	})
}

