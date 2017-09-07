# Matrix
> ma·trix ˈmātriks *noun* an environment in which something else takes form. *Origin:* Latin, female animal used for breeding, parent plant, from *matr-*, *mater*

Welcome to Matrix, a family of simple but expressive and efficient web development frameworks. Current variants exist for [Javascript](https://github.com/kennytilton/MatrixJS/tree/master/js/matrixjs) and [ClojureScript](https://github.com/kennytilton/MatrixJS/tree/master/cljs/matrix). Follow those links to classic TodoMVC implementations built with each (but renameded TodoFRP for *funcional reactive programming*). All frameworks are driven usefully by JS/CLJS ports of the [Cells](https://github.com/kennytilton/cells) dataflow/reactive engine.

#### A quick note on the name
Forget the movie. In the movie, the Matrix harnessed humans to suck energy from them. Not nice. In English, a matrix provides the conditions for new things to come to life. Nice! 

The dataflow component of this library drives a proxy web page that continuously, transparently, and incrementally builds and responds to an actual browser page. It thus brings a declaratively specified web page to life in the browser. Hence, "Matrix".

### Key Features
Let us look at the key features of MatrixJS, the most interesting being Matrix, the dataflow component. Unfortunately, one thing that makes Matrix interesting is that it is largely transparent, with neither explicit subscribe nor publish. We will highlight those for the reader as we go.

> Two kindred frameworks also feature powerful dataflow components: [binding.Scala](https://github.com/ThoughtWorksInc/todo) and [Hoplon/Javelin](https://github.com/lynaghk/todoFRP/tree/master/todo/javelin), with Javelin also excelling at transparency. 

#### The Un-Framework: It is just HTML
JS frameworks are tough. They are powerful, but they are harder to master than a new programming language. And there are sixty of them over at [TodoMVC](https://github.com/tastejs/todomvc), so mastering one does not have the portability of mastering a general-purpose language.

MatrixJS pages are authored as if we were coding conventional HTML, using a library of HTML-generating functions whose API parallels HTML. Where HTML has <*tag* *attributes*> *children*... </*tag*>, Matrix HTML generators have JS *tag*(*attributes*, *child*, *child*, ...) or CLJS (*tag* {*attributes*} *child* *child* ...). In all cases, your documentation is [over at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML).

An example. Here is a bit of the HTML provided by [the TodoMVC challenge](https://github.com/tastejs/todomvc/blob/master/app-spec.md):
````html

<header class="header">
  <h1>todos</h1>
  <input class="new-todo" placeholder="What needs to be done?" autofocus>
</header>
````

Nice, and most UI frameworks try to stick close to HTML. Here is some ReactJS:

```js
<header className="header">
    <h1>todos</h1>
    <input className="new-todo"
            placeholder="What needs to be done?"
            value={that.state.name}
            autoFocus={true}
    />
</header>    
```

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
Of course, those only *look* like mark-up. They are in fact neatly nested function calls, each producing a *proxy* DOM element. In other words, we are looking at conventionsl JS/CLJS code. Are you thinking what we are thinking?

#### Programmatic HTML
Because Matrix apps are just JS/CLJS functions, we can write whatever JS/CLJS code we like to generate our proxy DOM. Here for example is another example from the original TodoMVC HTML, a row of radio buttons specifying which kind of to-do items the user would like to see:
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
`ul`, `a`, and `li` are all functions provide by `Tag`, the HTML subcomponent of Matrix. They emulate the syntax of HTML tags and generate tag proxies for the matrix. But because this is all just JS, of course it is trivial to generate HTML programatically.

> Other frameworks such as [JSX](https://facebook.github.io/jsx/)] support "JS in HTML" differently, though JSX for one then requires supportive tooling to build runnable JS.

Great, HTML is not just rigid mark-up any more. But the above merely gets a static initial page built, with "All" selected. How do we move the `selected` class around as the user clicks different options?

#### Page dynamism: Reactive HTML
Matrix lets us specify *dynamic* HTML regenerated as the user interacts with the page. For example, as they click on each route/label above, the "selected" class needs to be assigned or removed to highlight the labels suitably. Here is the CLJS version:
````clojure
(ul {:class "filters"}
  (for [[label route] [["All", "#/"], ["Active","#/active"], ["Completed","#/completed"]]]
    (li {} (a {:href route
               :class (c? (when (=== label todoRoute.v) // see below for todoRoute.v
                             "selected"))} label))))
````
What is that `c?` creature? `c?` is short for "formulaic cell". The code body of `c?` will run initially and then again when any of its dependencies change. After each run, optional observer callbacks are invoked to handle new results and dependent formulae if any are recursively re-evaluated.

Here, each time the user changes the filter/route by clicking an item, all three items' formulae will be re-evaluated to decide if the "selected" class is appropriate. An `on-change` observer callback provided by `Tag` will automatically update the corresponding DOM element's `classList`, completing the loop from user action to Matrix dataflow and back to the browser DOM.

But we left something out. Where did we subscribe to the route (and where is the route stored)? Second question first: it is stored in a global input Cell:
````javascript
const todoRoute = cI( 'All');
````                   
`cI` is short for "input cell". The models we build in Matrix run mostly (90%) on formulaic `c?` cells, but it cannot be formulae all the way down. Input cells allow procedural code to feed our models, just as on-change observers let our models act outside the matrix, if only to update the real browser DOM.

As for *where* we subscribed, nothing explicit is necessary: simply reading the value (as in `(=== label todoRoute.v)` above) transparently establishes the subscription. Speaking of transparency, let us complete the circle and see how the "input" route gets fed into the matrix. Here is our routing code:
````javascript
Router({'/completed': ()=> todoRoute.v = 'Completed',
        '/active': ()=>  todoRoute.v = 'Active',
        '/': ()=> todoRoute.v = 'All'}.init();
````
In other words, simply assigning to an input Cell with code such as `todoRoute.v = 'All'` triggers the dependent routing buttons to recompute their DOM class attribute and, for those that change (to or from "selected"), for those changes to be propagated to the DOM `classList`s.

#### Efficiency
Any complex JS framework runs the risk of working harder than hand-crafted HTML/JS to maintain a page dynamically, just as before you were born humans shifted better than automatic transmissions and wrote better machine language than compilers. We digress.

MatrixJS addresses efficiency two ways. First, a no-brainer: the initial page is generated all at once as one wodge of HTML. No piecemeal assembly of individual parts. 

Second, dependencies and state change propagation happen at maximal granularity, requiring the logical minimum of recalculation and consequent DOM updates. This is possible because data dependency is tracked property by property.

For example, when a user clicks a filtering button triggering a new route, Matrix's automatic dependency tracking tells the engine exactly which formulaic Cells to re-evaluate, so each button re-decides if it should have the `selected` class. 

In code we have not yet visited, it also tells the Matrix incarnation of the do-lists (the model in MVC) which items are in play:
````js
routeItems: cF( c => {
                let selection = todoRoute.v;
                return c.md.items
                        .filter( td => selection==='All' || xor( selection==='Active', td.completed))
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
* The item is persisted as `completed` in `localStorage`;
* the `<LI>` element gains the "completed" class;
* the count of remaining items goes from 1 to 0 and...
* the word "item" becomes "items";
* the "Clear Completed" control appears;
* the "toggle all" icon becomes `checked`, which means its semantics change from "mark all complete" to "mark all incomplete"; and 
* because the filter is "active only", the item disappears.

Momma don't let your babies grow up to be UI/UX programmers. But here is the on-click handler that makes all that happen:

````javascript
onclick: 'let todo = dom2mx(this).todo;' + // navigate from dom to matrix to find to-do model item
         'todo.completed = !todo.completed'
````
The matrix does the rest. In the next tl;dr section we will see how in detail.

#### The Set-UP
Let's start with persisting the change in the `completed` value to `localStorage`. How did that happen? The Matrix framework dynamically queries any instance of a class inheriting from the Matrix `model` class what function to call when it sees a change in value of a property. Our `Todo` class answers with he "on change" observer shown below. This is a dumb observer that ignores the property which changed and rewrites the whole Todo to `localStorage`. (Most TodoMVC implementations rewrite the entire collection as one blob.):
````javascript
static obsTodoChange ( slot, todo, newv, priorv, c) {
        todo.store();
    }
````   
Next, the `<LI>` classList gains "completed":
````js
class: cF(c => (todo.completed ? "completed" : ""))
````
The Tag library supplies observers for pushing all proxy HTML changes such as the classList to the actual browser DOM.
  
Next. The count `<span>` content (using the CLJS version to show off Common Lisp format `~P`):
````javascript
   :content (c? (pp/cl-format nil "<strong>~a</strong>  item~:P remaining"
                    (count (remove td-completed (mx-todo-items me)))))})
````
Something of importance above which differentiates Matrix dependency management from other reactive systems that work by "lifting" lexical references to other state: the functions `td-completed` and `mx-todo-items` are the ones that actually read the `completed` and `todos` attributes. ie, The dependencies need not be lexically apparent. The larger point is that Matrix scales as our models become more complex and we need to divided up our code (and semantics) with functions.

Next. The "Clear completed" button appears:
````js
hidden: cF(c => Todos.items.filter(todo => todo.completed).length === 0)`
````
Again, the Tag library provides observers to push the `hidden` attribute to the browser DOM.

Next up. The "toggle all" semantics and CSS class change to "Make all uncompleted". Still in CLJS:
````clojurescript
   :action (c? (if (some (complement td-completed) (mx-todo-items me))
                 :complete :uncomplete))
   :checked (c? (= (md-get me :action) :uncomplete))})
````      
Here we divide and conquer, first with an ad hoc property `action` to decide the semantics (a value to be applied by the on-click handler) and then back to the standard Tag/HTML "checked" global attribute what works off the intermediate `action`. (We will stop boring you here with how that `checked` attribute makes it over to the DOM.)

> This two-step dependency is a rarity in the TodoMVC solution, because all the UI complexity works off the `completed` attributes of Todos and the population itself of Todos. In our experience with real-world reactive UI/UX development the dataflow requirements are vastly more complex, and strain the developer exponentially more as functional requirements are added. Since the reactive power of a JS library is so important, a better framework test would do three things. First, add at least one other independent data source. Two, require submissions to have two tags, the first before the second source was added as a change request, the second after refactoring to support it (to expose the pub-sub rewiring demanded by the change). And third, require point updates to the DOM (if only via a virtual DOM solution). No we are not volunteering to undertake this `Todo+++` project (which also eschews MVC as a given).

Next. The item disappears (our original solution before learning the rules require filtering in the model, as shown above in the `routeItems` formulaic cell): 
````clojurescript
  :display (c? (let [route (mx-route me)]
                  (if (or (= route "All")
                          (xor (= route "Active")
                               (md-get td :completed)))
                      "block" "none")))
````
One interesting thing here is the `md-get` exposed Matrix wiring, something we can hide in ES6 thanks to `define_property` which lets us define custom getters and setters. One thing we could do for CLJS is introduce something like `defclass`, a macro that would accept a list of intended properties and expand into functions such as a `completed` function to hide the wiring. Left as an exercise.

##### Summary
MatrixJS works from our minalist declarative expression of a web app to make it happen in the browser. For our convenience, pub-sub is almost completely tansparent, meaning the original coding goes faster as well as the inevitable refactoring as requiremens evolve.
For efficiency there is true "point" reactivity: instead of repeatedly regenerating virtual DOM, Matrix uses an automatically derived dependency graph to point update the Matrix DOM and then the browser as specifically.

#### Where next?
 This repository contains several proof-of-concept frameworks. For now, all but Qxia have their own version of Cells, to make debugging easier during this proof-of-concept phase.
 * In the identically named `js/matrixjs` you will find a pure Javascript version of Cells and an implementation of TodoSSB ("single source of behavior", not "model-view-controller".) **Even ClojureScript developers should [start there](https://github.com/kennytilton/MatrixJS/tree/master/js/matrixjs).** 
 * In `cljs/matrix` find MatrixCLJS, a ClojureScript implementation of TodoSSB.
 * in `cljs/qxia` find a bit-rotten, deprecate marriage of CLJS Cells and qooxdoo mobile, with random widgets serving no purpose.
 * Coming soon: React Native wired up with the dataflow library from MatrixJS.

And you can always reach out to us at ken@tiltontec.com for questions, comments, or support.
