# Matrix
> ma·trix ˈmātriks *noun* an environment in which something else takes form. *Origin:* Latin, female animal used for breeding, parent plant, from *matr-*, *mater*

Welcome to Matrix, a family of simple but expressive and efficient web and mobile development frameworks. Current variants exist for [Javascript](https://github.com/kennytilton/MatrixJS/tree/master/js/matrixjs) and [ClojureScript](https://github.com/kennytilton/MatrixJS/tree/master/cljs/matrix). Follow those links to TodoMVC implementations built with each. A React Native incarnation might be next. All frameworks are driven usefully by JS/CLJS ports of the [Cells](https://github.com/kennytilton/cells) dataflow/reactive engine.
#### A quick note on the name
Forget the movie. In the movie, the Matrix harnessed humans to suck energy from them. Not nice. In English, a matrix provides the conditions for new things to come to life. The dataflow component of this library drives a proxy web page that continuously, transparently, and incrementally builds and listens to an actual browser page. It brings our code to life. Hence, "Matrix".

#### It is just HTML
We generate the page as if it were conventional HTML, using a library of HTML-generating functions whose API closely parallels HTML. Where HTML has <*tag* *attributes*> *children* </*tag*>, Matrix HTML generators have JS *tag*(*attributes*, *child*, *child*) or CLJS (*tag* {*attributes*} *child* *child* ...). In all cases, your documentation is [over at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML).

Some examples. Here is a bit of the HTML provided by the TodoMVC challenge:
````html
<header class="header">
  <h1>todos</h1>
  <input class="new-todo" placeholder="What needs to be done?" autofocus>
</header>
````
And here is how that looks in MatrixJS
````javascript
header({class: "header"}, c => [
  h1("todos"),
  input({ class: "new-todo", placeholder: "What needs to be?", autofocus: true})])
````
And now in the ClojureScript version:
````clojure
(header {:class "header"}
   (h1 {} "todos")
   (input {:class "new-todo" placeholder "What needs to be done?" :autofocus true})))
````
Of course, those only *look* like mark-up. They are in fact neatly nested function calls, each producing a *proxy* DOM element. In other words, we are looking at conventionsl JS/CLJS code. Are you thinking what I am thinking?

#### Programmatic HTML
Because Matrix apps are just JS/CLJS functions, we can write wwhatever JS/CLJS code we like to generate our proxy DOM. Here for example is another example from the original TodoMVC HTML, a row of radio buttons specifying which kind of todo items the user would like to see:
````html
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
````
Fortunately, a short list, but still. And now the MatrixJS equivalent:
````javascript
ul( { class: "filters"}, c =>
  [["All", "#/"], ["Active","#/active"], ["Completed","#/completed"]]
      .map( which => {
          var [ label, route] = which;
          return li({}, c=> [a({href: route,
                                content: label,
                                class: (label==="All") ? "selected":"")})])}))
````
`ul`, `a`, and `li` are all functions provide by `Tag`, the HTML subcomponent of Matrix. They emulate the syntax of HTML tags and generate tag proxies to live in the matrix.

Great; HTML is not just rigid mark-up any more. But this merely gets our initial page built, with "All" selected. How do we move the `selected` class around as the user clicks different options?

#### Dataflow aka Databinding aka Reactive
Matrix also helps with page dynamism as the user interacts with the page. For example, as they click on each route/label above, the "selected" class needs to be assigned or removed to highlight the labels suitably. Here is the CLJS version:
````clojure
(ul {:class "filters"}
  (for [[label route] [["All", "#/"], ["Active","#/active"], ["Completed","#/completed"]]]
    (li {} (a {:href route
               :class (c? (when (=== label todoRoute.v) // see below for todoRoute.v
                             "selected"))} label))))
````
What is that `c?` creature? `c?` is short for "formulaic cell". The code body of `c?` will run initially and again when any of its dependencies change. Here, each time the user changes the filter/route by clicking an item, all three items' formulas will be re-evaluated to produce a new value for the `class` attribute of that item. An `on-change` callback provided by `Tag` will automatically update the corresponding DOM element's `classList`, completing the loop from user action to Matrix dataflow and back to the browser DOM.

But we left something out. Where did we subscribe to the route (and where is the route stored)? Second question first: it is stored in a global input Cell:
````javascript
const todoRoute = cI( 'All');
````                   
`cI` is short for "input cell". The models we build in Matrix involve run mostly (90%) on formulaic `c?` cells, but it cannot be formulae all the way down. Input cells allow procedural code to feed our models, just as on-change observers let our models act outside the matrix, if only to update the real browser DOM.

As for *where* we subscribed, nothing explicit is necessary: simply reading the value (`(=== label todoRoute.v)` above) transparently establishes the subscription. Speaking of transparency, let us complete the circle and see how the "input" route gets fed and published. Here is our routing code in its entirety:
````javascript
Router({'/completed': ()=> todoRoute.v = 'Completed',
        '/active': ()=>  todoRoute.v = 'Active',
        '/': ()=> todoRoute.v = 'All'}.init();
````
In other words, simply assigning to an input Cell with code like `todoRoute.v = 'All'` triggers the dependent routing buttons to recompute their DOM class attribute and, for those that change (to or from "selected"), for those changes to be propagated to the DOM `classList`s.

#### Efficiency
We mentioned efficiency at the outset as one of the virtues of Matrix UIs, but so far have only looked at the simplicity with which highly dynamic pages can be authored.

First, the initial page is generated all at once, without piecemeal assembly of individual parts. Second, dependencies and state change propagation happen at a logical maximum of granularity, requiring the logical minimum of recalculation and consequent DOM updates. 

For example, when a user clicks a button triggering a new route selection, Matrix automatic dependency tracking tells the engine exactly which formulaic Cells to kick off: each button re-decides if it should have the `selected` class. In code we have not yet visited, it also tells the Matrix model of the do-list which items are in play:
````js
routeItems: cF( c => {
                let selection = todoRoute.v;
                return c.md.items
                        .filter( td => selection==='All'
                                       || xor( selection==='Active', td.completed))
                        .sort( (a,b) => a.created < b.created ? -1 : 1)})
````                            
As you might imagine, that leads to even more reshaping of the application. Which brings us to the punch line.

#### The Punch Line
The example above in which the `selected` class tracked the user's clicking of the list filters showed just one step of dataflow. Let us look at what happens when: 
* there is just one to-do item in the list;
* that item has not yet been completed;
* the user has selected "active" as the filter; and
* then the user marks the one item as completed.

Here is the behavior dictated by the TodoMVC Challenge spec:
> The item is persisted as `completed` in `localStorage`. The `<LI>` element `classList` gains the "completed" class. The count of remaining items goes from 1 to 0 (and the word "item" becomes "items"). The "Clear Completed" control appears. The "toggle all" icon becomes `checked`, which means its semantics change from "mark all complete" to "mark all incomplete". And because the filter is "active only", the item disappears.

Momma don't let your babies grow up to be UI/UX programmers. But here is the on-click handler that makes all that happen:

````javascript
onclick: 'let todo = dom2js(this).todo;' +
         'todo.completed = !todo.completed'
````
Thanks to automatic dependency tracking and per-property on-change observers, the Matrix runtime has enough information to do the rest. And no special programmer effort was necessary, which we will review in TL;DR detail next.

#### The Set-UP
Let's start with persisting the change in the `completed` value to `localStorage`. How did that happen? An "on change" observer bound to proxy to-do items persists *any* change regardless of which property, because we happen to be storing to-dos as atoms:
````javascript
static obsTodoChange ( slot, todo, newv, priorv, c) {
        todo.store();
    }
````   
The `<LI>` classList gains "completed":
````js
class: cF(c => (todo.completed ? "completed" : ""))`. A library observer pushes that to the DOM.
````
The count `<span>` content (using the CLJS version to show off Common Lisp format `~P`):
````javascript
   :content (c? (pp/cl-format nil "<strong>~a</strong>  item~:P remaining"
                    (count (remove td-completed (mx-todo-items me)))))})
````
"Clear completed" appears:
````js
hidden: cF(c => Todos.items.filter(todo => todo.completed).length === 0)`
````
The "toggle all" semantics and CSS class update (still in CLJS):
````javascript
   :action (c? (if (some (complement td-completed) (mx-todo-items me))
                 :complete :uncomplete))
   :checked (c? (= (md-get me :action) :uncomplete))})
````      

The item disappears: 
````javascript
  :display (c? (let [route (mx-route me)]
                  (if (or (= route "All")
                          (xor (= route "Active")
                               (md-get td :completed)))
                      "block" "none")))
````
In other words, by simply stating how things should be, and without explicit pub-sub or state propagation mechanisms, the page runs by itself.

#### Where next?
 This repository contains several proof-of-concept frameworks. For now, all but Qxia have their own version of Cells, to make debugging easier during this proof-of-concept phase.
 * In the identically named `js/matrixjs` you will find a pure Javascript version of Cells and an implementation of TodoSSB ("single source of behavior", not "model-view-controller".) **Even ClojureScript developers should [start there](https://github.com/kennytilton/MatrixJS/tree/master/js/matrixjs).** 
 * In `cljs/matrix` find MatrixCLJS, a ClojureScript implementation of TodoSSB.
 * in `cljs/qxia` find a bit-rotten, deprecate marriage of CLJS Cells and qooxdoo mobile, with random widgets serving no purpose.
 * Coming soon: React Native wired up with the dataflow library from MatrixJS.

And you can always reach out to us at ken@tiltontec.com for questions, comments, or support.
