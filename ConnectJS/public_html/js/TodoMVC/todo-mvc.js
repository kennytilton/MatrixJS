 // --- Our database: transparent persistence! -----------------------

 localStorage.clear();

 const TODO_LS_PREFIX = "todos-ConnectJS.";

 class Todo extends Model {
    constructor(islots) {
        let netSlots = Object.assign({dbKey: TODO_LS_PREFIX+uuidv4()
                                        , text: cI("")
                                        , created: Date.now()
                                        , completed: cI(null)
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
    Todos.items = Todos.items.concat( new Todo( {text: e.target.value}));
    e.target.value = null; // Is this OK? Mebbe not....
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
                                , ul({class: "todo-list", name: "todo-list"}
                                    , c =>  todoLines( c.pv, Todos.items.filter( td => !td.deleted)))])
                        , todoFooter(c)]
                })
            , footer({class: "info"}
                , c => [p({}, 'Double-click to edit a todo')
                        , p({}, 'Created by... <a href="http://tiltontec.com">Kenneth Tilton')
                        , p({}, 'Part of <a href="http://todomvc.com">TodoMVC</a>')])]
    })
}

function todoLines( plis, items ) {
    // todo generalize this optimization
    return items.map( todo => {
        plix = (plis === kUnbound) ? -1 : plis.findIndex(pli => pli.todo === todo);
        if (plix !== -1) {
            return plis[plix];
        } else {
            return li({ todo: todo
                    , class: cF(c => (todo.completed ? "completed" : ""))
                    , display: cF(c => todoSelectMatches(todo, c.md) ? "block" : "none")}
                , c => [div({class: "view"}, c => [
                            input({class: "toggle"
                                    , type: "checkbox", checked: true
                                    , onclick: 'todoToggleComplete'})
                            , label(todo.text)
                            , button(null, {
                                class: "destroy"
                                , onclick: 'todoDelete'
                            })])
                        , input({class: "edit", value: "Create a TodoMVC template"})])}
    })
}

 function todoSelectMatches( todo, me) {
     let selector = me.fmUp('filters');
     ast(selector, "Filters not found");
     switch (selector.selection) {
         case 'All':
             return true;
         case 'Completed':
             return todo.completed !== null;
         case 'Active':
             return todo.completed === null;
         default:
             console.error( `Invalid filter value [${selector.selection}`);
     }
 }

 function todoToggleComplete (dom, e) {
    let md = jsDom[dom.id] // find the "shadow" JS object matching the event dom
        , li = md.fmTag('li');
    clg(`togglecomplete li!!!!! ${li?li.tag:"li not found"}`);
    clg('tog completed start '+li.todo.completed);
    li.todo.completed = (li.todo.completed ? null : Date.now());
    clg('tog completed after '+li.todo.completed);

}

function todoDelete (dom, e) {
    clg('delete!!!!!');
    let md = jsDom[dom.id] // find the "shadow" JS object matching the event dom
        , li = md.fmTag('li');
    clg(`togglecomplete li!!!!! ${li?li.tag:"li not found"}`);
    clg('tog deleted start '+li.todo.deleted);
    li.todo.deleted = (li.todo.deleted ? null : Date.now());
    clg('tog deleted after '+li.todo.deleted);
}

function todosReselect (dom, e) {
    clg('select!!!!');
    let li = jsDom[dom.id]; // find the "shadow" JS object matching the event dom
    clg(`toggleReselect li!!!!! ${li?li.content:"li not found"}`);
    li.fmTag('ul').selection = li.content;
}

// --- footer -------------------------------------------------------------

function todoFooter (c) {
    return footer({class: "footer"}, c => [
            span({ class: "todo-count"
                , content: cF(c => {
                        // clg('footer checking counts');
                        let remCt = Todos.items.filter(todo => !(todo.completed || todo.deleted)).length;
                        return `<strong>${remCt}</strong> item${remCt === 1 ? '' : 's'} remaining`;})})
            , ul( {class: "filters"
                    , name: "filters"
                    , selection: cI("All")}
                , c => ["All", "Active","Completed"].map( which =>
                    li({}, c=> [a({content: which
                                    , selected: cF( c => c.md.content === c.md.fmTag('ul').selection)
                                    , class: cF( c => c.md.selected ? "selected":"")
                                    , onclick: 'todosReselect'})])))
            , button("Clear completed", {
                class: "clear-completed"
                , hidden: cF(c => Todos.items.filter(todo => todo.completed).length === 0)})])}

