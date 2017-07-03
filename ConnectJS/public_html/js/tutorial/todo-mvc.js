function todoMVC() {
    return div({}, c => {
        return [
            section({ class: "todoapp"
                    , name: "todoapp"
                    , todos: cI(localStorage.getObject("todos-ConnectJS") || []
                                , {observer: todosPersist})}
                , c => { return [
                        h1("todos")
                        , header({class: "header"}
                            , c => { return [
                                    input({
                                        class: "new-todo"
                                        , placeholder: "What needs doing?"
                                        , autofocus: true
                                        , onchange: 'todoAdd'
                                    })]
                            })
                        , section({class: "main", name: "mainsection"}, c => { return [
                                input({id: "toggle-all", class: "toggle-all", type: "checkbox"})
                                , label("Mark all as complete", {for: "toggle-all"})
                                , ul({class: "todo-list"}, c => {
                                    return todoLines(c.fm('todoapp').todos)
                                })]
                        })
                        , todoFooter(c)]
                })
            , footer({class: "info"}
                , c => [p({}, 'Created by... <a href="http://tiltontec.com">Kenneth Tilton')])]
    })
}

function todoLines( todos) {
    return todos.map( (todo)=>{
        return li({val: todo
                , class: cF(c=>{ return c.md.val.complete ? "complete" : null})}
            , c => { return [
                div({class: "view"}, c => {
                    return [
                        input({class: "toggle complete" /*cF(c=>{ return "toggle" +
                                            (c.md.complete ? " complete":"")
                                        }) */
                            , type: "checkbox", checked: true
                            , complete: cI( todo.complete)
                            , onclick: 'todoToggleComplete'})
                        , label(todo.value)
                        , button(null, {class: "destroy"})]
                })
                , input({class: "edit", value: "Create a TodoMVC template"})]})})
}

function todoToggleComplete (dom, e) {
    clg('togglecomplete!!!!!');
    let md = jsDom[dom.id] // find the "shadow" JS object matching the event dom
        md.complete = !md.complete;
}

// --- footer -------------------------------------------------------------

function todoFooter (c) {
    return footer({class: "footer"}, c => {
        return [
            span({ class: "todo-count"
                , content: cF(c => {
                    let remCt = c.fm('todoapp').todos
                        .filter(todo => {
                            return !todo.completed;
                        }).length;
                    return `<strong>${remCt}</strong> item${remCt === 1 ? '' : 's'} remaining`
                })
            })
            , button("Clear completed", {
                class: "clear-completed"
                , hidden: cF(c => {
                    return c.fm('todoapp')
                            .todos
                            .filter(todo => { return todo.completed})
                            .length === 0
                })
            })]
    })
}
// --- persistence -------------------------------------------------------

function todosPersist (name, me, newv, priorv, c) {
    if ( priorv !== kUnbound) {
        localStorage.clear();
        localStorage.setObject("todos-ConnectJS", newv);
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