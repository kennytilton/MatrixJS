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

function todoMVC() {
    return div( {}, c=> {
        return [
            section({class: "todoapp"}, c => {
                return [
                    h1("todos")
                    , header({class: "header"}
                        , c => {
                            return [
                                input({
                                    class: "new-todo"
                                    , placeholder: "What needs doing?"
                                    , autofocus: true
                                })
                            ]
                        })
                ]
            })
            , footer({ class: "info"}, c=>{ return [
                p({}, 'Created by <a href="http://tiltontec.com">Kenneth Tilton')
                ]})
        ]
    })
}
