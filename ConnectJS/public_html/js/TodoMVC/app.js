//localStorage.clear();

const Todos = Todo.loadAllItems();

function todoAddNew (dom, e) {
    let title = e.target.value.trim();

    if (title==='')
        alert("A reminder to do nothing? I like it! We all need to remember to slow things down from time to time. But, no.");
    else
        Todos.itemsRaw = Todos.itemsRaw.concat( new Todo( {title: title})); // ===>

    // constructor will have written Todo to localStorage
    e.target.value = null;
}

function todoMVC() {
    return div({}, c => {
        return [
            section({ class: "todoapp", name: "todoapp"}
                , c => { return [
                    h1("todos3")
                        , header({class: "header"}
                            , c => [input({
                                        class: "new-todo"
                                        , placeholder: "What needs doing?"
                                        , autofocus: true
                                        , onchange: 'todoAddNew'})]) // ===>

                        , section({class: "main"
                                , name: "mainsection"
                                , hidden: cF( c => Todos.items.length===0)}, c => [ // IN-FLOW
                            labelx( { content: cF( c => c.md.optio) // IN-FLOW
                                    , optio: cF( c => (Todos.items.length===0) ? "na" // IN-FLOW
                                                    : (Todos.items.every( i => i.completed) ? "undo" : "done")) // IN-FLOW
                                    , onclick: 'toggleAllCompleted'}) // ===>
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
                                    , c =>  todoLines( c, Todos.items))]) // IN-FLOW
                            , todoFooter(c)]
                })
            , footer({class: "info"}
                , c => [p({}, 'Double-click a todo to edit it')
                        , p({}, 'Created by... <a href="http://tiltontec.com">Kenneth Tilton')
                        , p({}, 'Part of <a href="http://todomvc.com">TodoMVC</a>')])]
    })
}

function toggleAllCompleted (dom,e) {
    let md = jsDom[dom.id]
        , newCompleted = (md.optio==="done" ? Date.now():null);

    Todos.items.map( td => td.completed = newCompleted);
}

function todoLines( c, items ) {
    let existing = (c.pv === kUnbound? [] : c.pv); // internalese for "prior value"
    // todo generalize this optimization
    return items.map( todo => {
        existingIndex = existing.findIndex( li => li.todo === todo);
        if (existingIndex !== -1) {
            return existing[existingIndex];
        } else {
            let selector = c.md.fmUp('filters');

            return li({ todo: todo
                    , class: cF(c => (todo.completed ? "completed" : "")) // IN-FLOW
                    , display: cF(c => todoMatchesSelect(todo, selector.selection) ? "block" : "none")} // IN-FLOW
                , c => [div({class: "view"}, c => [
                            input({class: "toggle"
                                    , type: "checkbox", checked: true
                                    , onclick: 'todoToggleComplete'})
                            , labelx({content: cF( c => todo.title // IN-FLOW
                                    // , {observer: obsContentToDom}
                                    )
                                    , todo: todo
                                    , ondblclick: 'todoStartEditing'})
                            , button(null, {
                                class: "destroy"
                                , onclick: 'todoDelete'})])
                        , input({name: "myEditor"
                            , class: "edit"
                            , todo: todo
                            , value: cF( c => todo.title) // IN-FLOW
                            , onkeydown: 'todoEdit'
                            , onkeypress: 'todoEdit'})])}})

}

function todoMatchesSelect( todo, selection) {
    // note that dependency inside a function is detected. (No "lifting" required as in classic FRP.)
    return selection==='All'
        || (selection==='Completed' && todo.completed) // IN-FLOW
        || (selection==='Active' && !todo.completed); // IN-FLOW
}

function todoStartEditing (dom,e) {
    let li = jsDom[dom.id].fmTag('li', 'myLi');

    let edt = li.fm('myEditor', {upp: false, insidep: true, mep: false}, 'edt');
    edt.dom.li = li; // save a little navigation later
    li.dom.classList.add("editing");
    edt.dom.focus();
    edt.dom.value = edt.dom.value; // hack to put insertion point at end of text
}

function todoEdit ( edtdom, e) {
    let li = edtdom.li;
    if (e.key === 'Escape') {
        li.dom.classList.remove('editing');
    } else if (e.key === 'Enter') {
        li.todo.title = edtdom.value; // ===>
        li.dom.classList.remove('editing');
    }
}

function todoToggleComplete (dom, e) {
    let li = jsDom[dom.id].fmTag('li');
    li.todo.completed = (li.todo.completed ? null : Date.now()); // ===>
}

function todoDelete (dom, e) {
    let li = jsDom[dom.id].fmTag('li');
    li.todo.deleted = Date.now(); // ===>
}

function todosFilterChange (dom, e) {
    let li = jsDom[dom.id]; // find the "mirror" JS object matching the actual dom element
    li.fmTag('ul').selection = li.content; // ===>
}

// --- footer -------------------------------------------------------------

function todoFooter (c) {
    return footer({class: "footer"
                   , hidden: cF( c => Todos.items.length===0)} // IN-FLOW
        , c => [
            span({ class: "todo-count"
                , content: cF(c => {
                        let remCt = Todos.items.filter(todo => !todo.completed).length; // IN-FLOW
                        return `<strong>${remCt}</strong> item${remCt === 1 ? '' : 's'} remaining`;})})
            , ul( {class: "filters"
                    , name: "filters"
                    , selection: cI("All")}
                , c => ["All", "Active","Completed"].map( which =>
                    li({}, c=> [a({content: which
                                    , selected: cF( c => c.md.content === c.md.fmTag('ul').selection) // IN-FLOW
                                    , class: cF( c => c.md.selected ? "selected":"") // IN-FLOW
                                    , onclick: 'todosFilterChange'})])))
            , button("Clear completed", {
                class: "clear-completed"
                , hidden: cF(c => Todos.items.filter(todo => todo.completed).length === 0) // IN-FLOW
                , onclick: 'todoCompletedClear'})])
}

function todoCompletedClear( dom, e) {
    Todos.items.filter( td => td.completed ).map( td => td.deleted = Date.now()); // ===>
}

