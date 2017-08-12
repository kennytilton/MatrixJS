const todoSession = mkm( null, 'TodoSSBSession',
                        { routes: {'/completed': ()=> todoRoute.v = 'Completed',
                                    '/active': ()=>  todoRoute.v = 'Active',
                                    '/': ()=> todoRoute.v = 'All'}},
                        null, TagSession);

function todoSSB() {
    todoSession.init();

    let bits = [
        section({ class: "todoapp", name: "todoapp"},
            header({class: "header"},
                h1("todos"),
                todoEntry()),
            section({class: "main",
                        hidden: cF( c => Todos.empty)},
                input({ id: "toggle-all",
                        type: "checkbox",
                        class: "toggle-all",
                        checked: cF( c => (Todos.items.length === 0) ? false :
                                        (Todos.items.every( i => i.completed) ? true : false))}),
                label( "Mark all as complete",
                    { for: "toggle-all",
                        onclick: 'toggleAllCompletion( this)'}),
                ul({ class: "todo-list", name: "todo-list",
                         kidValues: cF( c=> Todos.routeItems),
                         kidKey: k => k.todo,
                         kidFactory: todoListItem},
                    c => c.kidValuesKids())),
            todoDashboard()),
        footer({class: "info"},
            ['Double-click a todo to edit it',
             'Created by... <a href="http://tiltontec.com">Kenneth Tilton',
             'Inspired by <a href="http://todomvc.com">TodoMVC</a>'].map( s => p({},s)))
    ];

    return "".concat(...bits.map( b=>b().toHTML()));
}

function toggleAllCompletion (dom) {
    let toggall = document.getElementById("toggle-all"),
        action = dom2js(toggall).checked ? 'undo':'do';

    Todos.items.filter( td => xor( td.completed, action === 'do'))
                .map( td => td.completed = (action === 'do'));
}

function todoEntry () {
    return input({ class: "new-todo", autofocus: true,
                    placeholder: "What needs doing?",
                    onkeypress: 'todoAddNewOnEnter'})
}

function todoAddNewOnEnter (dom, e) {
    if (e.key==='Enter') {
        let title = e.target.value.trim();
        if (title === '')
            alert("A reminder to do nothing? I like it! We should all slow down now and then. But, no.");
        else
            Todos.itemsRaw = Todos.itemsRaw.concat(new Todo({title: title}));
        e.target.value = null;
    }
}

function todoListItem( c, todo) {
    return li({ todo: todo,
                class: cF(c => (todo.completed ? "completed" : ""))},

            div({class: "view"},
                input({class: "toggle", type: "checkbox",
                        checked: cF( c=> todo.completed),
                        onclick: 'let todo = dom2js(this).fmTag(\'li\').todo;' +
                                    'todo.completed = !todo.completed',
                        title: cF( c=> `Mark ${todo.completed? "in" : ""}complete.`)}),
                label( cF( c => todo.title), // + '/' + todo.dbKey),
                    { todo: todo,
                      ondblclick: 'todoStartEditing'}),
                button(null, { class: "destroy",
                                todo: todo,
                                onclick: 'dom2js(this).todo.delete()'})),

            input({ name: "myEditor", class: "edit",
                    todo: todo,
                    value: cFI( c=> todo.title),
                    onblur: 'todoEdit',
                    onkeydown: 'todoEdit', // picks up Escape. Not needed in CLJS version... goog.closure?
                    onkeypress: 'todoEdit'}));
}

function todoStartEditing (dom,e) {
    let li = dom2js(dom).fmTag('li', 'myLi') // find overarching li, then...
        , edt = li.fmDown('myEditor');
    edt.dom.li = li; // avoid a little navigation later
    li.dom.classList.add("editing");
    edt.dom.focus();
    edt.dom.setSelectionRange(0, edt.dom.value.length);
}

function todoEdit ( edtdom, e) {
    let li = edtdom.li;
    if (li.dom.classList.contains("editing")) {
        if (e.type === 'blur' || ['Escape', 'Enter'].includes( e.key)) {
            if ( e.key === 'Escape') {
                e.target.value = li.todo.title;
            } else {
                let title = e.target.value.trim();
                if (title === '') {
                    li.todo.delete();
                } else {
                    li.todo.title = e.target.value = title;
                }
            }
            li.dom.classList.remove('editing');
        }
    }
}

function todoDashboard () {
    return footer({class: "footer",
                    hidden: cF( c => Todos.empty)},
                span({ class: "todo-count",
                        content: cF(c => { let remCt = Todos.items.filter(todo => !todo.completed).length;
                                        return `<strong>${remCt}</strong> item${remCt === 1 ? '' : 's'} remaining`;})}),

                ul( { class: "filters", name: "filters"},
                    [["All", "#/"], ["Active","#/active"], ["Completed","#/completed"]]
                        .map( which => { let [ label, route] = which;
                                        return li({},
                                                    a({href: route,
                                                        content: label, selector: label,
                                                        selected: cF( c => c.md.selector === todoRoute.v),
                                                        class: cF( c => c.md.selected ? "selected":"")}));})),

                button("Clear completed",
                    { class: "clear-completed",
                      hidden: cF(c => Todos.items.filter(todo => todo.completed).length === 0),
                      onclick: 'Todos.items.filter( td => td.completed ).map( td => td.delete())'}));
}


