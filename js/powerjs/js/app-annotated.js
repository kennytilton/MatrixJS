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

/*
 Doc is underway, but for now:

 - where you see cF(function), the Cells.js engine will evaluate the function (which can see the universe) to provide
 a value, and then re-run that function when its inputs change. Observers (think onchange event handlers) do things like
 propagate new values for "hidden" to the DOM. cF is short for "formulaic Cell".

 - where you see var=cI(initial value), when procedural code changes var any cF formulaic Cell that read it (directly or
 indirectly via a dynamic call chain) will be re-run.

 - https://github.com/kennytilton/ciWeb offers a step-by-step walkthrough of a much simpler example (with qooxdoo
 instead of HTML as the target renderer)

 */

/*
 First we load To Do items from localStorage into a Model instance will Cell-powered properties for
 itemsRaw and items, the lattering filtering out logically deleted items so the UI can pretend
 they do not exist.
 */

const Todos = Todo.loadAllItems();

/*

 We also load each JSON To Do into a Javavascript Todo class instance, again Cells-enabled so its dynamic
 slots (most of them, in fact) can drive the UI as the UI mutates that state. Let's look at our first detailed example:

 The "delete" widget sets the 'deleted' property to Date.now() (so we also get that history if ever needed).
 The deleted property of that To Do instance notifies the items property of the list of Todos to recalculate. It comes
 up with one less item and notifies most of the rest of the UI since almost everyone cares. eg, If we deleted the
 last active TD and completed ones have not been cleared, the "toggle all" button now should appear as "uncomplete"
 instead of "complete" all.

 Note that the developer did not have to do anything special for this flow to arise: they simply iterated over all the
 TDs to decide the icon and action of the toggle. Simply reading the property ("Todos.items.map(...)" established
 the dependency via Cells internals hidden by a Javascript custom property accessors. See:

 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

 More below on what happens when the "ul" of TDs decides one "li" needs to go, but here is a hint: how does the
 toggle-all image change? We could not get the CSS SVG to work so we changed its implementation to a simple "img".
 The "src" attribute has a formula that reads the (intended) "action" of the widget, an interim property not mirrored
 in the DOM. Here is the code needed to make this work:

 img({src: cF( c => `image/checkbox-multi-${c.md.action === "undo" ? "blank" : "marked"}.png`), etc...

 c is the Cell instance managing the "src" property, c.md is the Model instance (toggle-all image) the
 property describes. Mind you, at this level we are talking about JS instances mirroring DOM instances and properties.

 When the "action" changes (because we deleted the last active TD), the "src" attribute gets recomputed
 to be the location of the appropriate image. So far the DOM is unchanged, but now a generic observer on Tag properties
 (an "img" id just a Tag instance with "img" as its "tag" property) executes the JS to modify the "src" of
 the actual DOM "img".

 And that is part of what happens when the delete method on the Todo class executes:

 this.deleted = Date.now();

 The rest is that the "items remaining" count gets updated and the li itself disappears from the ul. As Buddha
 said, it's all connected.

 */

function todoMVC() {
	let bits = [
		/*
		 The first thing to notice is that the app is generated with a structure reminiscent of HTML. (Soon though
		 we will shuttle detailed structure off into conventional JS functions just to make the volume of code
		 manageable.)

		 The functions 'section', 'header', and 'h1' all do what they suggest, and like HTML tags they begin
		 with a JS object dedicated to HTML attributes and/or style attribute components. (Tag.js sorts those out
		 for us (a decision we might revisit if it hurst more than helps)).

		 */

		/*
		 Our first bit of Cells, although it is so universal we can safely hide most of the boilerplate inside the API.
		 (With languages such as Lisp and Clojure, we can hide *all* the boilerplate in homoiconic macros.) What are we
		 hiding? Any tag that can have children takes as its third parameter those children. Without getting into the
		 weeds too soon, Cells does a great job of bringing active models in and out of the model hierarchy (one parent
		 to many children) but we do have to work with the Model class and provide a function to compute those children,
		 even if the list will never be recomputed. So in all cases below the second parameter to a tag function is
		 a function of a Cell to manage the children generated by the function. Enough weeds.
		 */
		section({ class: "todoapp", name: "todoapp"}, c => { return [
			header({class: "header"}, c => [
				h1("todos"),
				input({ class: "new-todo", autofocus: true,
					placeholder: "What needs doing?",
					onkeypress: 'todoAddNewOnEnter'})
			]),

	section({class: "main",
		// our first real rule! Like the spec says, hide #main if no items remain. Recall that we diverged
		// from the spec and logically deleted, but the 'items' property filters those out.

		hidden: cF( c => Todos.items.length===0)}, c=> [  // flow:DEPEND

		// See that flow:DEPEND tag above? I am experimenting with a way to make it easy for my reader to
		// surf the dependencies and state change points in the code. Let's see how that goes. They will
		// all begin with flow:, anyway.

		// Starting next we see normal JS functions can be used to avoid open-coding too much UI all
		// in one shot. Mileages on "too much" will vary, so just as with any code we devs will suit
		// ourselves in carving things up. One nice thing here is that we are not forced into breaking
		// up our UIs in a manner so granular that the larger picture is hard to see.

		// In this case I left the header above as open-coded because it is manageable, and below I open-coded
		// the upcoming key 'ul' list of TDs because it is again manageable and lets us see that there is nothing
		// too magical about the list itself.

		mkToggleAll(),

		// Next we have our only dynamically added/removed elements. Everything else is hidden/unhidden, and
		// that would suffice in fact for an app to be used only for framework evaluation, but hey, we are
		// evaluating here, lets see the population of our dom changing under the control of Cells.

		// Note by the way, that ReactJS addresses the same problem similarly. The problem ReactJS has is that
		// it does not know *which* renderers need to be re-run after the global state is changed, so it
		// runs them all by default then still has to diff the results to get to the point where it can
		// update the DOM efficiently "on its own". To solve the last problem, the app can offer a "key" for
		// list items as a hint as to which items must go through the diff after rendering. To solve the other
		// problem it has a life-cycle hook to waive off rendering.

		// Cells/Model works a little differently: we just code a separate "keyValues" formula (no rendering yet,
		// just deciding some values that are in or out) then the accurately but frighteningly named
		// function "kidValuesKids" takes care of the rest, using the "kidFactory" to generate kids for
		// new "keyValues".

		ul({ class: "todo-list", name: "todo-list",
			kidValues: cF( c=> Todos.items), // flow:DEPEND
		kidKey: k => k.todo,
		kidFactory: mkTodoItem},
	c =>  c.kidValuesKids())]),

	mkDashboard()]}),

	mkAcknowledgments()];

	// the landing page goes out in one wodge of HTML, which I hear is quicker.
	// From here on all dom and attributes are "point" maintained via JS.
	return "".concat(...bits.map( b=>b.toHTML()));
}

/// ---todoapp section support functions -----------------

function todoAddNewOnEnter (dom, e) {
	if (e.key==='Enter') {
		let title = e.target.value.trim();

		if (title === '') {
			alert("A reminder to do nothing? I like it! We should all slow things down now and then. But, no.");
		} else {
			// a new To do is born, and is added to the seminal itemsRaw property.
			// Why the glue token next? I will start adding those wherever the Cells wiring shows,
			// ie, wherever the magic comes up short. In this case, using a destructive operation on
			// 'itemsRaw' would bypass the Cells state propagation machinery, which relies on comparing before
			// and after versions of Cell values to decide if propagation of change in one Cell needs to
			// be propagated to the next. I probably should have mentioned that optimization when
			// chewing the scenery about "fast", right?
			Todos.itemsRaw = Todos.itemsRaw.concat(new Todo({title: title})); // flow:GLUE, flow:TRIGGER
		}
		e.target.value = null;
	}
}

/// --- toggle all icon --------------------------

function mkToggleAll() {
	// mea culpa: I could not get their fancy CSS SVG+XML to work so I have reimplemented their "toggle all"
	// graphic with this. MC2: and I still need to do some more CSS to get the image just to the left
	// of the new To Do input field, but I think I will move it into the Dashboard anyway as long as I am
	// flunking out of the TodoMVC Challenge.
	return img({src: cF( c=> `image/checkbox-multi-${c.md.action === "undo" ? "blank" : "marked"}.png`),
		backgroundColor: "#e8e8e8",
		// they did not specify tooltips, but I like them:
		title: cF( c=> `Mark all ${c.md.action === "undo" ? "in" : ""}complete.`),
	height: "36px", width: "36px", scale: true,
		// wow, three dependencies (or is it two?) to decide the semantics of this widget.
		// I actually have some doubts on the U/X all around this widget, but my sense is
		// they just wanted to exercise UI frameworks throoughly and came up with some of this stuuf.
		action: cF( c => (Todos.items.length===0) ? "na" // flow:DEPEND
		: (Todos.items.every( i => i.completed) ? "undo" : "do")), // flow:DEPEND-2
	onclick: 'toggleAllCompleted'});
}

function toggleAllCompleted (dom,e) {
	// n.b! the official app.js code has been re-factored to avoid all this, which I leave here
	// for comparison. The refactoring had each TD have a rule for the completed property that
	// watched a "txBulkOp" property on the Todo class, so all TDs decided on a new 'completed'
	// state as part of the dataflow from a single assignment (to txBulkOP).

	// flow:GLUE: Amusing CELLS-necessitated hack: we pull the action into a local variable instead of accessing
	// the expression "dom2js(dom).action" in the mapped function because (hang on to your hat):
	// When all items are complete, the toggler action becomes "uncomplete all". But as soon as we uncomplete
	// the first, the toggler action becomes "complete all", because the state change propagates back to the toggle
	// widget immediately (and it decides it now means "complete all")! And the rest of the items get (re-)set to complete.

	// Yes, I found this the hard way. Interestingly, I have been coding heads down with Cells for twenty years and
	// never saw this one before. More cause for concern, I think, over this bit of UX design.

	let action = dom2js(dom).action;
	// a liitle cute: completed gets *time* completed as the truthy value, in case we need it some day
	Todos.items.map( td => td.completed = (action === "done" ? (td.completed || Date.now()) : null)); // flow:TRIGGER
}

// ---  the list items ---------------------------------

function mkTodoItem( c, todo) {
	return li({ todo: todo,
		class: cF(c => (todo.completed ? "completed" : "")), // flow:DEPEND

		display: cF(c => todoMatchesSelect(todo, c.fmUp('filters').selection) ? "block" : "none")}, // flow:DEPEND
	// Above, something new! fmUp? "fm" is short for "family". "Up" tells the family search utilities in what
	// direction to search for something named or tagged or id'ed "filters". What is this all about?
	// In the preamble above we talked about custom getters recording dependencies and custom setters
	// kicking off dataflow from any procedural mutation of input Cells. So fine, once we read a bit of data
	// we are connected to any change in that data and Buddha is happy, but how did we find that data in
	// the first place. Nature connects us in the real world, but in UI programming if I am a list that
	// should show only the items the user wants to see, I have to find out where they are indicating
	// that choice to do the initial read to establish the dependency from which all future state change
	// will originate.

	// So far we have been living in global heaven depending only on Todo.items and the properies we found
	// mapping over them. Now we need to complete Buddha's insight by finding other things so we can
	// connect to them. Hence a somewhat glue-is-showing set of fm* utilities an search options, "somewhat"
	// because the search hack actually makes UIs much less brittle (as we shuffle DOM about during
	// redesigns and refactoring) while still letting state reside where the user originated it. But it
	// is one area where I sometimes have to slow down and make sure I am not creating a circularity by
	// asking for state from a widget whose existence might be decided by information I will provide.
	// It happens, the engine detects it, and it provides the circular path to help me reconsider things.

	c => [div({class: "view"}, c => [
		// CSS not working on this one. Will ditch CSS anyway as violating "one origin" principle
		input({class: "toggle", type: "checkbox",
			checked: cF( c=> todo.completed),
		onclick: 'todoToggleComplete',
		title: cF( c=> `Mark ${todo.completed? "in" : ""}complete.`)}),

	label( cF( c => todo.title), // flow:DEPEND (after edit)
		{ todo: todo, // just to have it handy
			ondblclick: 'todoStartEditing'}),

	button(null, { class: "destroy", onclick: 'todoDelete'})]),

	input({name: "myEditor", class: "edit",
		todo: todo,
		value: cFI( c=> todo.title), // cFI means "formula (to get initial value) but then behave like Input cell
		onblur: 'todoEdit',
		onkeypress: 'todoEdit'})]);
}

// --- todolist support functions -------------------------------

function todoToggleComplete (dom, e) {
	let todo = dom2js(dom).fmTag('li').todo;
	todo.completed = (todo.completed ? null : Date.now()); // flow:TRIGGER
}

function todoMatchesSelect( todo, selection) {
	// Note that the dependency here inside a function is detected if (as in this case) the function
	// is called from a Cell formula.
	// "Lifting" FRPs do not allow this so of course cannot identify
	// dependencies arising from references not lexically visible in rules.
	// This in turn makes it impossible (?) to break up large wodges of UI code.

	return selection==='All'
		|| (selection==='Completed' && todo.completed) // flow:DEPEND
		|| (selection==='Active' && !todo.completed); // flow:DEPEND
}
function todoDelete (dom,e) {
	// in this case we demonstrate navigating about to find the relevant todo instance
	let todo = dom2js(dom).fmTag('li').todo;
	todo.delete(); // flow:TRIGGER
}

// --- item editing support functions -------------------------------------

function todoStartEditing (dom,e) {
	// I am leaving this as an exercise for the reader: instead of all this
	// detailed wiring, how could this be expressed more elegantly Cells.
	// Some hints (and ping kentilton at gmail for help):

	// We want the remaining code here to be
	// no more than: "dom2js(dom).editing = true"
	// Similarly, editing completion should be handle entirely
	// by setting the same property to false.

	// An observer on the editing property would handle most of the below.
	let li = dom2js(dom).fmTag('li', 'myLi') // find overarching li, then...
		, edt = li.fmDown('myEditor'); // NAVIG
	edt.dom.li = li; // save a little navigation later

	// The li class parameter should be in part a function of the editing property of the input widget.
	li.dom.classList.add("editing");

	edt.dom.focus();
	edt.dom.setSelectionRange(0, edt.dom.value.length);
}

function todoEdit ( edtdom, e) {
	let li = edtdom.li;
	if (e.type === 'blur' || e.key === 'Enter') {
		li.todo.title = edtdom.value; // flow:TRIGGER
		li.dom.classList.remove('editing');
	} else if (e.key === 'Escape') {
		li.dom.classList.remove('editing');
	}
}

// --- Dashboard -------------------------------------------------------------

function mkDashboard () {
	return footer({class: "footer",
		hidden: cF( c => Todos.items.length===0)}, c => [ // flow:DEPEND
		span({ class: "todo-count",
			content: cF(c => {
				let remCt = Todos.items.filter(todo => !todo.completed).length;
	return `<strong>${remCt}</strong> item${remCt === 1 ? '' : 's'} remaining`;})}),

	// use routing just as a required exercise, violating "single source" principle
	ul( {class: "filters", name: "filters",
		selection: cI("All")}, c =>
			[["All", "#/"], ["Active","#/active"], ["Completed","#/completed"]]
				.map( which => {
					var [ label, route] = which;

					return li({}, c=> [a({href: route,
							content: label, selector: label,
							selected: cF( c => c.md.selector === c.md.fmTag('ul').selection),
							class: cF( c => c.md.selected ? "selected":"")})])})),

	button("Clear completed", { class: "clear-completed",
		hidden: cF(c => Todos.items.filter(todo => todo.completed).length === 0),
	onclick: 'todoCompletedDelete'})]);
}

function todosFilterChange (dom, e) {
	let a = dom2js(dom);
	a.fmTag('ul').selection = a.selector; // flow:TRIGGER
}

function todoCompletedDelete( dom, e) {
	Todos.items.filter( td => td.completed ).map( td => td.delete()); // flow:TRIGGER
}

/// --- acknowledgments ---------------------------

function mkAcknowledgments() {
	return footer({class: "info"}
			, c => [p({}, 'Double-click a todo to edit it')
			, p({}, 'Created by... <a href="http://tiltontec.com">Kenneth Tilton')
			, p({}, 'Inspired by <a href="http://todomvc.com">TodoMVC</a>')]);
}

