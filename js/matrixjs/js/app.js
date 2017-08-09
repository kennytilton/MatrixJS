/*
 * The MIT License
 *
 * Copyright 2017 Kenneth Tilton.
 *
 */

const Todos = Todo.loadAllItems();

function todoMVC() {
    let bits = [
        section({ class: "todoapp", name: "todoapp"}, c => { return [
            header({class: "header"}, c => [
                h1("todos2"),
                input({ class: "new-todo", autofocus: true,
                        placeholder: "What needs doing?",
                        onkeypress: 'todoAddNewOnEnter'})]),

            section({class: "main",
                     hidden: cF( c => Todos.empty)}, c=> [
                input({ id: "toggle-all",
                        class: "toggle-all",
                        checked: cF( c => (Todos.items.length === 0) ? false :
                                    (Todos.items.every( i => i.completed) ? true : false)),

                        type: "checkbox"}),
                label( "Mark all as complete",
                        { for: "toggle-all",
                          onclick: 'toggleAllCompletion'}),
                ul({ class: "todo-list", name: "todo-list",
                        kidValues: cF( c=> Todos.items),
                        kidKey: k => k.todo,
                        kidFactory: mkTodoItem},
                    c =>  c.kidValuesKids())]),

            mkDashboard()]}),

        footer({class: "info"},
            c => ['Double-click a todo to edit it',
                  'Created by... <a href="http://tiltontec.com">Kenneth Tilton',
                  'Inspired by <a href="http://todomvc.com">TodoMVC</a>']
                    .map( s => p({},s)))];

    return "".concat(...bits.map( b=>b.toHTML()));
}

// -- toggle all

function toggleAllCompletion (dom,e) {
    let toggall = document.getElementById("toggle-all"),
        action = dom2js(toggall).checked ? 'undo':'do';
    // clg('togg all checked '+ dom2js(toggall).checked + ' act=' + action);
    Todos.items
        .filter( td => xor( td.completed, action === 'do'))
        .map( td => td.completed = (action === 'do'));
}

/// --- structure breakouts just to make page easier to digest --------------

function mkTodoItem( c, todo) {
    return li({ todo: todo,
                class: cF(c => (todo.completed ? "completed" : "")),
                display: cF(c => todoMatchesSelect(todo, c.fmUp('filters').selection) ? "block" : "none")}, c => [

                div({class: "view"}, c => [

                    input({class: "toggle", type: "checkbox",
                            checked: cF( c=> todo.completed),
                            onclick: 'todoToggleComplete',
                            title: cF( c=> `Mark ${todo.completed? "in" : ""}complete.`)}),

                    label( cF( c => todo.title),
                        { todo: todo,
                          ondblclick: 'todoStartEditing'}),

                    button(null, { class: "destroy", onclick: 'todoDelete'})]),

                input({ name: "myEditor", class: "edit",
                        todo: todo,
                        value: cFI( c=> todo.title),
                        onblur: 'todoEdit',
                        onkeydown: 'todoEdit', // hmmm. picks up Escape. Not needed in CLJS version... goog.closure?
                        onkeypress: 'todoEdit'})]);
}

// -- toggle one

function todoToggleComplete (dom, e) {
    let todo = dom2js(dom).fmTag('li').todo;
    todo.completed = !todo.completed;
}

function todoMatchesSelect( todo, selection) {
    return selection==='All'
        || (selection==='Completed' && todo.completed)
        || (selection==='Active' && !todo.completed);
}

function mkDashboard () {
    return footer({class: "footer",
                    hidden: cF( c => Todos.empty)}, c => [

                span({ class: "todo-count",
                        content: cF(c => {
                    let remCt = Todos.items.filter(todo => !todo.completed).length;
                    return `<strong>${remCt}</strong> item${remCt === 1 ? '' : 's'} remaining`;})}),

                ul( { class: "filters",
                      name: "filters",
                      selection: cI("All")}, c =>
                    [["All", "#/"], ["Active","#/active"], ["Completed","#/completed"]]
                        .map( which => {
                            var [ label, route] = which;
                            return li({}, c=> [a({href: route,
                                                  content: label, selector: label,
                                                  selected: cF( c => c.md.selector === c.md.fmTag('ul').selection),
                                                  class: cF( c => c.md.selected ? "selected":"")})])})),

                button("Clear completed",
                    { class: "clear-completed",
                      hidden: cF(c => Todos.items.filter(todo => todo.completed).length === 0),
                      onclick: 'todoCompletedDelete'})]);
}

/// --- on event handlers --------------------------------------------

// --- add new to-do

function todoAddNewOnEnter (dom, e) {
    if (e.key==='Enter') {
        let title = e.target.value.trim();
        if (title === '') {
            alert("A reminder to do nothing? I like it! We should all slow things down now and then. But, no.");
        } else {
            Todos.itemsRaw = Todos.itemsRaw.concat(new Todo({title: title}));
        }
        e.target.value = null;
    }
}

// -- delete to-do

function todoDelete (dom,e) {
    let todo = dom2js(dom).fmTag('li').todo;
    todo.delete(); // flow:TRIGGER
}

// -- editing event handlers

function todoStartEditing (dom,e) {
    let li = dom2js(dom).fmTag('li', 'myLi') // find overarching li, then...
        , edt = li.fmDown('myEditor'); // NAVIG
    edt.dom.li = li; // save a little navigation later
    li.dom.classList.add("editing");
    edt.dom.focus();
    edt.dom.setSelectionRange(0, edt.dom.value.length);
}

function todoEdit ( edtdom, e) {
    // this too can be simplified as part of the above exercise
    let li = edtdom.li,
        title = e.target.value.trim();

    if (e.type === 'blur' || e.key === 'Enter') {
        // editing a title to blank signifies deletion
        if (title==='')
            li.todo.delete();
        else
            li.todo.title = edtdom.value;

        li.dom.classList.remove('editing');
    } else if (e.key === 'Escape') {
        li.dom.classList.remove('editing');
    }
}

 // -- (logically) delete completed

function todoCompletedDelete( dom, e) {
    Todos.items.filter( td => td.completed ).map( td => td.delete());
}


