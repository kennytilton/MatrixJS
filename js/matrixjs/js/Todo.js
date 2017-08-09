/*
 * The MIT License
 *
 * Copyright 2017 Kenneth Tilton.
 *
 */

const TODO_LS_PREFIX = "todos-MatrixJS.";

class Todo extends Model {
    constructor(islots) {
        let netSlots = Object.assign(
            {dbKey: TODO_LS_PREFIX + uuidv4(),
             created: Date.now()},
            islots,
            { title: cI( islots.title ),
              completed: cI( islots.completed || false),
              deleted: islots.deleted || cI( null)});

        super(null, null, netSlots, false);

        if ( !islots.dbKey) { // ie, if not already stored, ie if being instantiated from DB
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
        todo.store();
    }

    slotObserverResolve(slot) {
        // tell the Matrix engine our slot observer
        return Todo.obsTodoChange
    }

    static loadAllItems() {
        return mkm( null, 'Todo',
                { itemsRaw: cI( Object.keys(localStorage)
                                    .filter( k => k.startsWith(TODO_LS_PREFIX))
                                    .map( Todo.load)
                                    .sort( (a,b) => a.created < b.created ? -1 : 1) || []),

                items: cF( c => c.md.itemsRaw.filter( td => !td.deleted)),

                empty: cF( c => c.md.items.length === 0),

                bulkTx: cIe( null)})
    }
    store () {
        localStorage.setObject( this.dbKey, this.toJSON());
    }
    delete() {
        this.deleted = Date.now();
    }
}


