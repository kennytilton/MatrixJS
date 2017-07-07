//localStorage.clear();

const Todos = Todo.loadAllItems();

function todoMVC() {
    return div({}, c => {
        return [ section({ class: "todoapp", name: "todoapp"}
                    , c => { return [
                        h1("todos")
                            , header({class: "header"}
                                , c => [input({ class: "new-todo"
                                            , placeholder: "What needs doing?"
                                            , autofocus: true
                                            , onchange: 'todoAddNew'})])

                            , section({class: "main"
                                    , hidden: cF( c => Todos.items.length===0)}  // IN-FLOW
                                , c => [ mkToggleAllCompleted(c)
                                        , ul({class: "todo-list", name: "todo-list"}
                                                , c =>  todoLines( c, Todos.items))]) // IN-FLOW
                                        , mkTodoFooter(c)]
                    })
                , footer({class: "info"}
                    , c => [p({}, 'Double-click a todo to edit it')
                            , p({}, 'Created by... <a href="http://tiltontec.com">Kenneth Tilton')
                            , p({}, 'Part of <a href="http://todomvc.com">TodoMVC</a>')])]})
}

function todoAddNew (dom, e) {
    let title = e.target.value.trim();

    if (title==='')
        alert("A reminder to do nothing? I like it! We should all slow things down from time to time. But, no.");
    else
        Todos.itemsRaw = Todos.itemsRaw.concat( new Todo( {title: title})); // OUT-FLOW

    e.target.value = null;
}

// todo Try filter as property of global state along with Todos

function mkToggleAllCompleted (c) {
    return label( cF( c => c.md.optio) // IN-FLOW
                , { optio: cF( c => (Todos.items.length===0) ? "na" // IN-FLOW
                            : (Todos.items.every( i => i.completed) ? "undo" // IN_FLOW
                            : "done"))
        , onclick: 'toggleAllCompleted'})
}

function toggleAllCompleted (dom,e) {
    let action = dom2js(dom).optio; // CELLS hack: capture semantics before altering any state which changes semantics!
    Todos.items.map( td => td.completed = (action==="done" ? (td.completed || Date.now()) : null));
}

/* todo try to get this working
input({id: "toggle-all"
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

// todo write an array.difference to split into left, both, right

function todoLines( c, items ) {
    let existing = (c.pv === kUnbound? [] : c.pv); // pv = "prior value", ie prior formula calculation (to-do items)
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
                            , label( cF( c => todo.title) // IN-FLOW
                                    , { todo: todo
                                    , ondblclick: 'todoStartEditing'})
                            , button(null, { class: "destroy"
                                            , onclick: 'todoDelete'})])
                        , input({name: "myEditor"
                            , class: "edit"
                            , todo: todo
                            , value: cFI( c=> todo.title) // one-time load, so no need cFI/dataflow linkage
                            , onkeydown: 'todoEdit'
                            , onkeypress: 'todoEdit'})])}})
}

function todoMatchesSelect( todo, selection) {
    // note that the dependency here inside a function is detected.
    // "Lifting" FRPs do not allow this
    return selection==='All'
        || (selection==='Completed' && todo.completed) // IN-FLOW
        || (selection==='Active' && !todo.completed); // IN-FLOW
}

// todo write/use fmContained

function todoStartEditing (dom,e) {
    let li = dom2js(dom).fmTag('li', 'myLi') // find overarching li, then...
        , edt = li.fm('myEditor', {upp: false, insidep: true, mep: false}, 'edt'); // find its editor
    edt.dom.li = li; // save a little navigation later
    li.dom.classList.add("editing");
    edt.dom.focus();
    // todo actually, all text should be selected
    // edt.dom.value = edt.dom.value; // this hack leaves insertion point at end of text
    edt.dom.setSelectionRange(0, edt.dom.value.length);
}

// todo save on blur

function todoEdit ( edtdom, e) {
    let li = edtdom.li;
    if (e.key === 'Escape') {
        li.dom.classList.remove('editing');
    } else if (e.key === 'Enter') {
        li.todo.title = edtdom.value; // OUT-FLOW
        li.dom.classList.remove('editing');
    }
}

function todoToggleComplete (dom, e) {
    let todo = dom2js(dom).fmTag('li').todo;
    todo.completed = (todo.completed ? null : Date.now()); // OUT-FLOW
}

function todoDelete (dom, e) {
    let todo = dom2js(dom).fmTag('li').todo;
    todo.deleted = Date.now(); // OUT-FLOW
}

// --- footer -------------------------------------------------------------

function mkTodoFooter (c) {
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
                , onclick: 'todoCompletedDelete'})])
}

// --- footer control actions ---------------------------------

function todosFilterChange (dom, e) {
    // "fm" navigate to selection manager and reset current selection
    dom2js(dom).fmTag('ul').selection = li.content; // OUT-FLOW
}

function todoCompletedDelete( dom, e) {
    Todos.items.filter( td => td.completed ).map( td => td.deleted = Date.now()); // OUT-FLOW
}

