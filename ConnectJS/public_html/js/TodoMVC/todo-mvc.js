 // --- Our database: transparent persistence! -----------------------

 localStorage.clear();

 const TODO_LS_PREFIX = "todos-ConnectJS.";

 class Todo extends Model {
    constructor(islots) {
        let netSlots = Object.assign({dbKey: TODO_LS_PREFIX+uuidv4()
                                        , text: cI("")
                                        , created: Date.now()
                                        , "completed": cI(null)
                                        , deleted: cI(null)}
                                        , islots);

        super(null, null, netSlots, false);
        if ( !islots.dbKey) { // ie, if not being instantiated from DB JSON
            this.store();
        }
    }
    static fromJSON (j) {
        // only some properties should be changing after creation...
        return new Todo( Object.assign( j,
            { text: cI( j.text)
                , completed: cI(j.completed)
                , deleted: cI(j.deleted)}))
    }
    static load (dbKey) {
        return new Todo( localStorage.getObject( dbKey))
    }
    static obsTodoChange ( slot, todo, newv, priorv, c) {
        // no matter what changed, re-write the whole thing
        todo.store();
    }
    slotObserverResolve(slot) { return Todo.obsTodoChange }

    static mdLoadAll() { // load all into model property items for various widgets to watch via Cell dependencies
        return mkm( null, 'Todo'
            , { items: cI( Object.keys(localStorage)
                .filter( k => k.startsWith(TODO_LS_PREFIX))
                .map( Todo.load)) || []})
    }
    store () {
        clg('storing todo '+ this.dbKey);
        localStorage.setObject( this.dbKey, this.toJSON());
    }
    toJSON () {
        return  { dbKey: this.dbKey
                , text: this.text
                , created: this.created
                , completed: this.completed
                , deleted: this.deleted }
    }
}

const Todos = Todo.mdLoadAll();

function todoAdd (dom, e) {
    Todos.items = Todos.items.concat( new Todo( {text: e.target.value}))
}

// --- Our application -------------

function todoMVC() {
    return div({}, c => {
        return [
            label( Date.now()),
            section({ class: "todoapp", name: "todoapp"}
                , c => { return [
                        h1("todos")
                        , header({class: "header"}
                            , c => [input({
                                        class: "new-todo"
                                        , placeholder: "What needs doing?"
                                        , autofocus: true
                                        , onchange: 'todoAdd'})])

                        , section({class: "main", name: "mainsection"}, c => [
                                input({id: "toggle-all", class: "toggle-all", type: "checkbox"})
                                , label("Mark all as complete", {for: "toggle-all"})
                                // todo optimize so only new/lost lines handled
                                , ul({class: "todo-list", name: "todo-list"}, c => {
                                    return todoLines( Todos.items )})])
                        , todoFooter(c)]
                })
            , footer({class: "info"}
                , c => [p({}, 'Created by... <a href="http://tiltontec.com">Kenneth Tilton')])]
    })
}

function todoLines( items ) {
    // todo use cache to preserve existing dom and minimize output
    items.map( todo =>
        li({ todo: todo
           , class: cF( c => (todo.completed ? "completed" : ""))}
           , c => [ div({class: "view"}
                    , c => [ input({class: "toggle"
                            , type: "checkbox", checked: true
                            , onclick: 'todoToggleComplete'})
                        , label(todo.text)
                        , button(null, {class: "destroy"
                                        , onclick: 'todoDelete'})])
                        , input({class: "edit", value: "Create a TodoMVC template"})]))
}

function todoToggleComplete (dom, e) {
    let md = jsDom[dom.id] // find the "shadow" JS object matching the event dom
        , li = md.fmTag('li');
    clg(`togglecomplete li!!!!! ${li?li.tag:"li not found"}`);
    li.todo.completed = (li.completed ? null : Date.now());
}

function todoDelete (dom, e) {
    clg('delete!!!!!');
    let md = jsDom[dom.id] // find the "shadow" JS object matching the event dom
        , li = md.fmTag('li');
    clg(`togglecomplete li!!!!! ${li?li.tag:"li not found"}`);
    li.todo.deleted = (li.deleted ? null : Date.now());
}

function todosReselect (dom, e) {
    clg('select!!!!');
    let li = jsDom[dom.id]; // find the "shadow" JS object matching the event dom
    clg(`toggleReselect li!!!!! ${li?li.content:"li not found"}`);
    li.fmTag('ul').selection = li.todo;
}

// --- footer -------------------------------------------------------------

function todoFooter (c) {
    return footer({class: "footer"}, c => [
            span({ class: "todo-count"
                , content: cF(c => {
                        let remCt = Todos.items.filter(todo => !todo.completed).length;
                        return `<strong>${remCt}</strong> item${remCt === 1 ? '' : 's'} remaining`;})})
            , ul( {class: "filters"
                    , selection: cI("All")}
                , c => ["All", "Active","Completed"].map( which =>
                    li({}, c=> [a({content: which
                                    , selected: cF( c => c.md.content === c.md.fmTag('ul').selection)
                                    , class: cF( c => c.md.selected ? "selected":"")
                                    , onclick: 'todosReselect'})])))
            , button("Clear completed", {
                class: "clear-completed"
                , hidden: cF(c => Todos.items.filter(todo => todo.completed).length === 0)})])}

