const TODO_LS_PREFIX = "todos-ConnectJS.";

class Todo extends Model {
    constructor(islots) {
        ast( islots.title, 'new Todo: title property is required');
        let netSlots = Object.assign(
                        {dbKey: TODO_LS_PREFIX + uuidv4()
                        , created: Date.now()}
                        , islots
                        , { title: cI( islots.title )
                            , completed: cI( islots.completed || null)
                            , deleted: islots.deleted || cI( null)});

        super(null, null, netSlots, false);
        if ( !islots.dbKey) { // ie, if not being instantiated from DB JSON
            this.store();
        }
    }
    static nonCells () {return ['dbKey','created']}
    static fromJSON ( json) {
        return new Todo( json )
    }
    static load (dbKey) {
        return new Todo( localStorage.getObject( dbKey))
    }

    // no matter what changed, re-write the whole thing...
    // todo try with anon fn as obs
    static obsTodoChange ( slot, todo, newv, priorv, c) {
        todo.store();
    }

    slotObserverResolve(slot) { return Todo.obsTodoChange }

    static loadAllItems() {
        // load all items into model so various widgets can watch via Cell dependencies
        return mkm( null, 'Todo'
                , { itemsRaw: cI( Object.keys(localStorage)
                                    .filter( k => k.startsWith(TODO_LS_PREFIX))
                                    .map( Todo.load)
                    .sort( (a,b) => a.created < b.created ? -1 : 1) || [])
                    , items: cF( c => c.md.itemsRaw.filter( td => !td.deleted))})
    }
    store () {
        localStorage.setObject( this.dbKey, this.toJSON());
    }
    toJSON () {
        return  { dbKey: this.dbKey
            , title: this.title
            , created: this.created
            , completed: this.completed
            , deleted: this.deleted }
    }
}