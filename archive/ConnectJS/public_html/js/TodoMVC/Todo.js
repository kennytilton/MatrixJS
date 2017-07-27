const TODO_LS_PREFIX = "todos-ConnectJS.";

class Todo extends Model {
    constructor(islots) {
        ast( islots.title, 'new Todo: title property is required');
        let netSlots = Object.assign(
                        {dbKey: TODO_LS_PREFIX + uuidv4()
                        , created: Date.now()}
                        , islots
                        // CELLSGLUE "box" certain islots in input Cells to support dataflow
                        , { title: cI( islots.title )
                            , completed: cI( islots.completed || null)
                            , deleted: islots.deleted || cI( null)});

        super(null, null, netSlots, false); // CELLSGLUE: Model constructor does a *lot*
        if ( !islots.dbKey) { // ie, if not already stored, ie if being instantiated from DB
            this.store();
        }
    }
    toJSON () {
        return  { dbKey: this.dbKey
            , title: this.title
            , created: this.created
            , completed: this.completed
            , deleted: this.deleted }
    }
    static fromJSON ( json) {
        return new Todo( json )
    }
    static load (dbKey) {
        return new Todo( localStorage.getObject( dbKey))
    }

    // CELLSGLUE no matter what changed, re-write the whole thing...
    static obsTodoChange ( slot, todo, newv, priorv, c) {
        todo.store(); // FLOW OUTSIDE MODEL BY OBSERVER
    }
    slotObserverResolve(slot) {
        // ignore which slot chnaged since localStorage does not support that granularity
        return Todo.obsTodoChange }

    static loadAllItems() {
        // CELLSGLUE load all items into container model so various widgets can watch via Cell dependencies
        return mkm( null, 'Todo'
                , { itemsRaw: cI( Object.keys(localStorage)
                                    .filter( k => k.startsWith(TODO_LS_PREFIX))
                                    .map( Todo.load)
                    .sort( (a,b) => a.created < b.created ? -1 : 1) || [])
                    , items: cF( c => c.md.itemsRaw.filter( td => !td.deleted))}) // IN-FLOW
    }
    store () {
        localStorage.setObject( this.dbKey, this.toJSON());
    }
}