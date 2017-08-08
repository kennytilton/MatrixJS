# Matrix
> ma·trix ˈmātriks *noun* an environment in which something else takes form. *Origin:* Latin, female animal used for breeding, parent plant, from *matr-*, *mater*

Welcome to Matrix, a family of simple but expressive and efficient web and mobile development frameworks. Current variants exist for [Javascript](https://github.com/kennytilton/MatrixJS/tree/master/js/matrixjs) and [ClojureScript](https://github.com/kennytilton/MatrixJS/tree/master/cljs/matrix). Follow those links to TodoMVC implementations built with each. A React Native incarnation is in the works. All frameworks are driven at runtime by JS or CLJS ports of the [Cells](https://github.com/kennytilton/cells) dataflow/reactive engine.
#### A quick note on the name
In the movie, the matrix harnessed humans to suck energy from them. In English, a matrix provides the conditions for new things to come to life. The dataflow component of this library animates a proxy web page so it continuously, transparently, and incrementally drives an actual browser page in reaction to runtime events. It brings our code to life.
#### Simplicity
The first element of simplicity is that the page is generated as if it were conventional HTML, with a library of functions whose API closely parallels HTML.

Here is a bit of the HTML provided by the TodoMVC challenge:
````html
<header class="header">
  <h1>todos</h1>
  <input class="new-todo" placeholder="What needs to be done?" autofocus>
</header>
````
And here is how that looks in MatrixJS:
````javascript
header({class: "header"}, c => [
  h1("todos"),
  input({ class: "new-todo", placeholder: "What needs to be?", autofocus: true})])
````
We plan to lose that anonymous function wrapper in the next release, by the way.

And now in the ClojureScript version:
````clojure
(header {:class "header"}
   (h1 {} "todos")
   (input {:class "new-todo" placeholder "What needs to be done?" :autofocus true})))
````
Of course, those only *look like* mark-up. They are in fact neatly nested function calls, each producing a *proxy* DOM element. In other words, we are looking at conventionsl JS/CLJS code which we can elaborate as needed to generate our proxy DOM. Next.

#### Expressiveness
Here is some more original TodoMVC HTML, a row of radio buttons specifying which kind of todo items to show (elsewhwere):
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
And now the MatrixJS equivalent:
````javascript
ul( { class: "filters"}, c =>
  [["All", "#/"], ["Active","#/active"], ["Completed","#/completed"]]
      .map( which => {
          var [ label, route] = which;
          return li({}, c=> [a({href: route,
                                content: label,
                                class: (label==="All") ? "selected":"")})])}))
````
HTML is not just mark-up any more. But that capability just gets our initial page built. How about dealing with user-generated events thereafter?

Matrix also helps with page dynamism as the user interacts with the page. For example, as they click on each route/label above, the "selected" class needs to be assigned/removed to highlight the label suitably. Here is the CLJS version:
````clojure
(ul {:class "filters"}
        (for [[label route] [["All", "#/"], ["Active","#/active"], ["Completed","#/completed"]]]
          (li {} (a {:href route
                     :class (c? (when (=== label (mx-route-label me))
                                   "selected"))} label))))
````
Whoa. What is `c?`?! That is short for "formulaic cell". The enclosed code  will run any time its dependencies change. Here, each time the user changes the route by clicking an item, all three buttons' formulas will be re-run to produce a new value for the `class` attribute. An `on-change` callback provided by the HTML component of Matrix will update the widgets' `classList`s. Super, but we left something out.

Where did we subscribe to the route (and where is it stored)? The current route is just a property on our root application object:
````clojure
(md/make ::todoApp
    :route (c-in nil))
````                   
`c-in` is short for "input cell". (My Javelin friends call it just `cell`, without the `=` suffix.) The models we build rely mostly on formulaic `c?` cells, but it cannot be formulas all the way down. Input cells allow procedural code to feed our models, just as the on-change observers allow our models to act outside themselves, if only to update the real browser DOM.

The function `mx-route-label` simply navigates from the `me` parameter (akin to `self` or `this`) to the app object and then simlply reads the property:
````clojurescript
function mxRouteMe( me) {
   return route( mxaFindType( me , :todoApp));
}
````
No explicit subscribe is necessary because more internals handle that transparently when we read (directly or indirectly thru function calls) a property initialize with a cell (formulaic or input).

Speaking of transparency, let us complete the circle and see how the "input" route gets fed and published, this time in the CLJS version where we do not have the transparency provided by the custom accessors of JS:
````clojure
(defn on-navigate [route params query]
    (md-reset! @matrix :route (name route)))
````
We simply set the app `route` to the new value. (`on-navigate` is the callback we provided to our routing library.) This triggers the routing buttons to recompute their DOM class attribute and, for those that change, the new value gets propagated to the dom.

To summarize, without explicit publish or subscribe we are able to have a web page dynamically adjust itself as the user works, with an internal engine seeing to it that each user gesture gets completely propagated thoughout the page, as directed by simple (or not so simple!) formulae declaratively defining how the page should look given other conditions on the page.

#### Run-time efficiency
We mentioned efficiency at the outset as one of the virtues of Matrix UIs, but so far have only looked at the simplicity which highly dynamic pages can be authored.

First, the initial page is generated all at once, without piecemeal assembly of individual parts. 

Some will have spotted the bigger win: dependencies and state change propagation happen at the logical maximum of granularity, requiring the logical minimum of recalculation and then DOM updates. For example, when a user clicks a button triggering a new route selection, the internal dependency tracking indicates exactly what needs attention: each button re-decides if it should have the `selected` class, and only those that change have new values propagated to the true browser DOM.

> ReactJS achieves excellent performance by minimizing DOM updates as well, but it does so by default by diffing a virtual DOM with the real DOM. This means the virtual DOM *always* gets rebuilt, and one change means the whole new chunk of DOM must be added. With more work we can track change ourselves and wave off the regeneration of the virtual DOM, but no help is offered with that determination.

#### Where next?
 This repository contains several proof-of-concept frameworks. For now, all but Qxia have their own version of Cells, to make debugging easier during this proof-of-concept phase.
 * In the identically named `js/matrixjs` you will find a pure Javascript version of Cells and an implementation of TodoSSB ("single source of behavior", not "model-view-controller".) **Even ClojureScript developers should [start there](https://github.com/kennytilton/MatrixJS/tree/master/js/matrixjs).** 
 * In `cljs/matrix` find MatrixCLJS, a ClojureScript implementation of TodoSSB.
 * in `cljs/qxia` find a bit-rotten, deprecate marriage of CLJS Cells and qooxdoo mobile, with random widgets serving no purpose.
 * Coming soon: React Native wired up with the dataflow library from MatrixJS.

And you can always reach out to us at ken@tiltontec.com for questions, comments, or support.
