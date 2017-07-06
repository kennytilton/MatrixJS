//localStorage.clear();

const Todos = Todo.loadAllItems();

function todoAddNew (dom, e) {
    let title = e.target.value.trim();

    if (title==='')
        alert("A reminder to do nothing? I like it! We all need to remember to slow things down from time to time. But, no.")
    else
        Todos.itemsRaw = Todos.itemsRaw.concat( new Todo( {title: title}));

    // constructor will have written Todo to localStorage
    e.target.value = null;
}

function todoMVC() {
    return div({}, c => {
        return [
            section({ class: "todoapp", name: "todoapp"}
                , c => { return [
                        button("Bam", {onclick: 'localStorage.clear();'})
                    , h1("todos3")
                        , header({class: "header"}
                            , c => [input({
                                        class: "new-todo"
                                        , placeholder: "What needs doing?"
                                        , autofocus: true
                                        , onchange: 'todoAddNew'})])

                        , section({class: "main"
                                , name: "mainsection"
                                , hidden: cF( c => Todos.items.length===0)}, c => [
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

// todo leverage classList handling

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
                            , labelx({content: cF( c=> { clg('lbl sees title '+ todo.title);
                                                        return todo.title}
                                                        , {observer: obsContentToDom})
                                    , todo: todo
                                    , ondblclick: 'todoStartEditing'})
                            , button(null, {
                                class: "destroy"
                                , onclick: 'todoDelete'})])
                        , input({name: "myEditor"
                            , class: "edit"
                            , todo: todo
                            , value: cF( c => todo.title)
                            , onkeydown: 'todoEdit'
                            , onkeypress: 'todoEdit'})])}})

}

function obsContentToDom ( slot, me, newv, priorv, c) {
    if (priorv !== kUnbound)
        me.dom.content = newv;
}
// stick todo in more places to reduce navigation

function todoStartEditing (dom,e) {
    clg('start edit!!!!');

    let md = jsDom[dom.id]
        , li = md.fmTag('li', 'myLi');

    // todo resolve redundancy of upp v insidep v mep
    let edt = li.fm('myEditor',{upp: false, insidep: true, mep: false}, 'edt');
    ast(edt);
    edt.dom.li = li;
    li.dom.classList.add("editing");
    edt.dom.focus();
    edt.dom.value = edt.dom.value; // hack to put insertion point at end of text
}
function todoEdit ( edt, e) {
    clg(`edit!!!! ${e.type} key ${e.key} li=${edt.li}`);
    switch (e.key) {
        case 'Escape':
            edt.li.dom.classList.remove('editing');
            break;
        case 'Enter':
            clg(`enter val ${edt.value}`);
            edt.li.todo.title = edt.value;
            edt.li.dom.classList.remove('editing');
            break;
    }
}


function todoMatchesSelect( todo, selection) {
    return selection==='All'
        || (selection==='Completed' && todo.completed)
        || (selection==='Active' && !todo.completed);
}

function todoToggleComplete (dom, e) {
    let md = jsDom[dom.id] // find the "shadow" JS object matching the event dom
        , li = md.fmTag('li');
    li.todo.completed = (li.todo.completed ? null : Date.now());
}

function todoDelete (dom, e) {
    let md = jsDom[dom.id] // find the "shadow" JS object matching the event dom
        , li = md.fmTag('li'); // now navigate to its containing li
    li.todo.deleted = Date.now(); // Bam!
}

function todosReselect (dom, e) {
    let li = jsDom[dom.id]; // find the "mirroe" JS object matching the actual dom element
    // todo: why the content and not the li?
    li.fmTag('ul').selection = li.content;
}

// --- footer -------------------------------------------------------------

function todoFooter (c) {
    return footer({class: "footer"
                   , hidden: cF( c => Todos.items.length===0)}
        , c => [
            span({ class: "todo-count"
                , content: cF(c => {
                        let remCt = Todos.items.filter(todo => !todo.completed).length;
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

