function todoMVC() {
    return div({}, c => {
        return [
            label( Date.now()),
            section({ class: "todoapp"
                    , name: "todoapp"
                    , todos: cI(localStorage.getObject("todos-ConnectJS") || []
                                , {observer: todosPersist})}
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
                                , ul({class: "todo-list", name: "todo-list"}, c => {
                                    return todoLines(c.fm('todoapp').todos)})])
                        , todoFooter(c)]
                })
            , footer({class: "info"}
                , c => [p({}, 'Created by... <a href="http://tiltontec.com">Kenneth Tilton')])]
    })
}

function todoLines( todos) {
    // todo use cache to preserve existing dom and minimize output
    return todos.map( todo=>
        li({val: todo
                , complete: cI( todo.complete, {observer: obsTodoComplete})
                , class: cF( function (c) {
                                //clg('todo line class rule runs! seeing complete '+c.md.complete);
                                return (c.md.complete ? "completed" : "dunno");
                            }//, {observer: obsDbg}
                            )
            }
          , c => [ div({class: "view"}
                    , c => [ input({class: "toggle"
                            , type: "checkbox", checked: true
                            , onclick: 'todoToggleComplete'})
                        , label(todo.value)
                        , button(null, {class: "destroy"
                                        , onclick: 'todoDelete'})])
                , input({class: "edit", value: "Create a TodoMVC template"})]))
}

function todoToggleComplete (dom, e) {
    let md = jsDom[dom.id] // find the "shadow" JS object matching the event dom
        , li = md.fmTag('li');
    clg(`togglecomplete li!!!!! ${li?li.tag:"li not found"}`);
    li.complete = !li.complete;
}

function todoDelete (dom, e) {
    clg('delete!!!!!');
    let md = jsDom[dom.id] // find the "shadow" JS object matching the event dom
}

function todosReselect (dom, e) {
    clg('delete!!!!!');
    let li = jsDom[dom.id] // find the "shadow" JS object matching the event dom
    clg(`toggleReselect li!!!!! ${li?li.content:"li not found"}`);
    li.fmTag('ul').selection = li.content;
}

// --- footer -------------------------------------------------------------

function todoFooter (c) {
    return footer({class: "footer"}, c => [
            span({ class: "todo-count"
                , content: cF(c => {
                        let remCt = c.fm('todo-list').kids.filter(todo => !todo.complete).length;
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
                , hidden: cF(c => c.fm('todo-list').kids.filter(todo => todo.complete).length === 0)})])}



/*
 <footer class="footer">
 <!-- This should be `0 items left` by default -->
 <span class="todo-count"><strong>0</strong> item left</span>
 <!-- Remove this if you don't implement routing -->
 <ul class="filters">
 <li>
 <a class="selected" href="#/">All</a>
 </li>
 <li>
 <a href="#/active">Active</a>
 </li>
 <li>
 <a href="#/completed">Completed</a>
 </li>
 </ul>
 <!-- Hidden if no completed items are left ↓ -->
 <button class="clear-completed">Clear completed</button>
 </footer>
 */

// --- persistence -------------------------------------------------------

function todosPersist (name, me, newv, priorv, c) {
    if ( priorv !== kUnbound) {
        localStorage.clear();
        localStorage.setObject("todos-ConnectJS", newv);
    }
}

function obsTodoComplete (name, me, newv, priorv, c) {
    if ( priorv !== kUnbound) {
        clg(`obscomp setting ${me.tag} todo from ${me.val.complete} to ${newv}`);
        me.val.complete = newv;
        let ul = me.fmTag('ul')
            , todos = [];
        ul.kids.map( li=> todos.push( li.val));
        clg(`culled todos ${todos.length}`);
        localStorage.clear();
        localStorage.setObject("todos-ConnectJS", todos);
    }
}

function mkTodo(text) {
    return {key: "todos-ConnectJS."+uuidv4(), value: text, created: Date.now(), complete: false}
}

function todoAdd (dom, e) {
    let md = jsDom[dom.id] // find the "shadow" JS object matching the event dom
        , appMd = md.fm('todoapp')
        , todos = appMd.todos.slice();
    todos.push( mkTodo(e.target.value));
    e.target.value = null; // todo not good, bypasses dataflow
    appMd.todos = todos;
}

