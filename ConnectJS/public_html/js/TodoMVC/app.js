localStorage.clear();

const Todos = Todo.loadAllItems();

// Todos.items = ["aaa", "bbb", "ccc"].map( text => new Todo( {text: text}));

function todoAddNew (dom, e) {
    Todos.itemsRaw = Todos.itemsRaw.concat( new Todo( {text: e.target.value}));
    // constructor will have written Todo to localStorage
    e.target.value = null;
}

function todoMVC() {
    return div({}, c => {
        return [
            section({ class: "todoapp", name: "todoapp"}
                , c => { return [
                        h1("todos")
                        , header({class: "header"}
                            , c => [input({
                                        class: "new-todo"
                                        , placeholder: "What needs doing?"
                                        , autofocus: true
                                        , onchange: 'todoAddNew'})])

                        , section({class: "main", name: "mainsection"}, c => [
                            labelx( { content: cF( c => c.md.optio)
                                    , optio: cF( c => (Todos.items.length===0) ? "na"
                                                    : (Todos.items.every( i => i.completed) ? "undo" : "done")
                                                , {observer: obsDbg})
                                    , onclick: 'toggleAllCompleted'})
                            /* input({id: "toggle-all"
                                    , class: "toggle-all"
                                    , type: "checkbox"
                                    , onclick: 'toggleAllComplete'})
                                , label("Mark all as completed"
                                        , {for: "toggle-all"
                                        , checked: cF( c => Todo.items && Todo.items.every( i => i.completed)
                                                    , {observer: obsDbg})
                                        , class: cF( c=> c.md.checked? "checked":""
                                                    , {observer: obsDbg})
                                        , onclick: 'toggleAllCompleted'})*/

                            , ul({class: "todo-list", name: "todo-list"}
                                    , c =>  todoLines( c, Todos.items))])
                            , todoFooter(c)]
                })
            , footer({class: "info"}
                , c => [p({}, 'Double-click to edit a todo')
                        , p({}, 'Created by... <a href="http://tiltontec.com">Kenneth Tilton')
                        , p({}, 'Part of <a href="http://todomvc.com">TodoMVC</a>')])]
    })
}

function toggleAllCompleted (dom,e) {
    let md = jsDom[dom.id]
        , newCompleted = (md.optio==="done" ? Date.now():null);

    clg('toggle all compl applies ' + md.optio);

    Todos.items.map( td => td.completed = newCompleted);
}

function todoLines( c, items ) {
    let plis = c.pv;
    // todo generalize this optimization
    return items.map( todo => {
        plix = (plis === kUnbound) ? -1 : plis.findIndex(pli => pli.todo === todo);
        if (plix !== -1) {
            return plis[plix];
        } else {
            let selector = c.md.fmUp('filters');
            ast(selector, "Filters not found");

            return li({ todo: todo
                    , class: cF(c => (todo.completed ? "completed" : ""))
                    , display: cF(c => todoMatchesSelect(todo, selector.selection) ? "block" : "none")}
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

function todoMatchesSelect( todo, selection) {
    //clg(`match??? ${todo.text} ${todo.completed} ${selection}`);
    return selection==='All'
        || (selection==='Completed' && todo.completed)
        || (selection==='Active' && !todo.completed);
}

function todoToggleComplete (dom, e) {
    let md = jsDom[dom.id] // find the "shadow" JS object matching the event dom
        , li = md.fmTag('li');
    //clg(`togglecomplete li!!!!! ${li?li.tag:"li not found"}`);
    //('tog completed start '+li.todo.completed);
    li.todo.completed = (li.todo.completed ? null : Date.now());
    //clg('tog completed after '+li.todo.completed);
}

function todoDelete (dom, e) {
    let md = jsDom[dom.id] // find the "shadow" JS object matching the event dom
        , li = md.fmTag('li');
    li.todo.deleted = (li.todo.deleted ? null : Date.now());
}

function todosReselect (dom, e) {
    //clg('select!!!!');
    let li = jsDom[dom.id]; // find the "shadow" JS object matching the event dom
    //clg(`toggleReselect li!!!!! ${li?li.content:"li not found"}`);
    li.fmTag('ul').selection = li.content;
}

// --- footer -------------------------------------------------------------

function todoFooter (c) {
    return footer({class: "footer"
                   , hidden: cF( c => Todos.items.filter( td => !td.deleted ).length===0)}
        , c => [
            span({ class: "todo-count"
                , content: cF(c => {
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
                , disabled: cF(c => Todos.items.filter(todo => todo.completed).length === 0)
                , hidden: cF( c=> c.md.disabled )
                , onclick: 'todoCompletedClear'})])
}

function todoCompletedClear( dom, e) {
    Todos.items.filter( td => td.completed ).map( td => td.deleted = Date.now());
}

