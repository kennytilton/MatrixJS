/**
 * Created by kennetht2 on 7/2/17.
 */
/*
 <!-- section class="todoapp">
 <header class="header">
 <h1>todos</h1>
 <input class="new-todo" placeholder="What needs to be done?" autofocus>
 </header>
 </section>
 <footer class="info">
 <p>Double-click to edit a todo</p>
 <p>Created by <a href="http://tiltontec.com">Kenneth Tilton</a></p>
 <p>Not Yet Part of <a href="http://todomvc.com">TodoMVC</a></p>
 </footer -->
*/
/*
 <section class="main">
 <input id="toggle-all" class="toggle-all" type="checkbox">
 <label for="toggle-all">Mark all as complete</label>
 </section>

 */

function todoGlue (dom, e) {
    clg( "onchg!!"+ dom.id);
    let md = jsDom[dom.id]; // find the "shadow" JS object matching the event dom
    console.log(`onchg md=${md.class} VAL=${e.target.value}`);
    let tdom=md.fm('todoapp')
        , todos = tdom.todos.slice();
    todos.push(e.target.value);
    e.target.value = null; // todo not good, bypasses dataflow
    clg('same? '+ (todos==tdom.todos));
    tdom.todos = todos;
}
/*
 <ul class="todo-list">
 <!-- These are here just to show the structure of the list items -->
 <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
 <li class="completed">
   <div class="view">
     <input class="toggle" type="checkbox" checked>
     <label>Taste JavaScript</label>
     <button class="destroy"></button>
   </div>
   <input class="edit" value="Create a TodoMVC template">
 </li>
 <li>
 <div class="view">
 <input class="toggle" type="checkbox">
 <label>Buy a unicorn</label>
 <button class="destroy"></button>
 </div>
 <input class="edit" value="Rule the web">
 </li>
 </ul>
 */
function todoLines( todos) {
    return todos.map( (todo)=> {
        return li({}, c => {
            return [
                div({class: "view"}, c => {
                    return [
                        input({class: "toggle", type: "checkbox", checked: true})
                        , label(todo)
                        , button(null, {class: "destroy"})]
                })
                , input({class: "edit", value: "Create a TodoMVC template"})
            ]
        })
    })
}

function todoMVC() {
    return div( {}, c=> {
        return [
            section({class: "todoapp"
                    , name: "todoapp"
                    , todos: cI( ["bingo", "booya"])}
                    , c => { return [
                        h1("todos")
                        , header({class: "header"}
                            , c => {
                                return [
                                    input({
                                        class: "new-todo"
                                        , placeholder: "What needs doing?"
                                        , autofocus: true
                                        , onchange: 'todoGlue'
                                    })
                                ]
                            })
                        , section( {class: "main", name: "mainsection"}, c=>{ return [
                            input( {id: "toggle-all", class: "toggle-all", type: "checkbox"})
                            , label("Mark all as complete", {for: "toggle-all"})
                            , ul({class: "todo-list"}, c=>{ return todoLines( c.fm('todoapp').todos )})
                            ]})
                    ]})
            , footer({ class: "info"}, c=>{ return [
                p({}, 'Created by <a href="http://tiltontec.com">Kenneth Tilton')
                ]})
        ]
    })
}
