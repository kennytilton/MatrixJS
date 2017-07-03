/**
 * Created by kennetht2 on 7/2/17.
 */

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
}

function mkTodo(text) {
    return {key: "todos-ConnectJS."+uuidv4(), value: text, created: Date.now(), status: "undone"}
}

function todoGlue (dom, e) {
    let md = jsDom[dom.id] // find the "shadow" JS object matching the event dom
        , tdom=md.fm('todoapp')
        , todos = tdom.todos.slice();
    todos.push( mkTodo(e.target.value));
    e.target.value = null; // todo not good, bypasses dataflow
    tdom.todos = todos;
}

function todoLines( todos) {
    return todos.map( (todo)=>{
        return li({}, c => { return [
                div({class: "view"}, c => {
                    return [
                        input({class: "toggle", type: "checkbox", checked: true})
                        , label(todo.value)
                        , button(null, {class: "destroy"})]
                })
                , input({class: "edit", value: "Create a TodoMVC template"})]})
    })
}


function todosPersist (name, me, newv, priorv, c) {
    if ( priorv !== kUnbound) {
        localStorage.clear();
        localStorage.setObject("todos-ConnectJS", newv);
        //clg('pst ' + newv.toString());
        //console.log(`obsTodos!!!!!! ${String(name)} ${me? me.name:'noMd'} new=${newv} old=${priorv}`);
    }
}

function todoMVC() {
    return div( {}, c=> {return [
            section({class: "todoapp"
                    , name: "todoapp"
                    , todos: cI( localStorage.getObject( "todos-ConnectJS")
                    //, ["hello", "world"].map( v=>{ return mkTodo(v)}));
                    //[mkTodo("bingo"), mkTodo("booya")]
                                , {observer: todosPersist})}
                    , c=>{ return [
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
                ]})]})
}
