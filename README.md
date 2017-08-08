# Matrix
> ma·trix ˈmātriks *noun* an environment in which something else takes form. *Origin:* Latin, female animal used for breeding, parent plant, from *matr-*, *mater*

Welcome to Matrix, a family of simple but expressive and efficient web and mobile development frameworks. Current variants exist for [Javascript](https://github.com/kennytilton/MatrixJS/tree/master/js/matrixjs) and [ClojureScript](https://github.com/kennytilton/MatrixJS/tree/master/cljs/matrix). Follow those links to TodoMVC implementations using each. A React Native incarnation is in the works. All frameworks are driven at runtime by JS or CLJS ports of the [Cells](https://github.com/kennytilton/cells) dataflow/reactive engine.
#### A quick note on the name
In the movie, the matrix harnessed humans to suck energy from them. In English, a matrix provides the conditions for new things to come to life. The dataflow component of this library animates a proxy web page so it continuously, transparently, and incrementally drives an actual browser page in reaction to runtime events. Hence "matrix".

Here is a bit more on simplicity, expressive power, and run-time performance:

#### Simplicity
The first element of simplicity is that the page is generated as if it were conventional HTML, with a library of functions whose API closely parallels HTML.

Here is a bit of the HTML provided by the TodoMVC challenge as a starting point:
````html
<header class="header">
  <h1>todos</h1>
  <input class="new-todo" placeholder="What needs to be done?" autofocus>
</header>
````
And here is how that would be authored in MatrixJS:
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
Now of course those only look like mark-up. They are in fact neatly nested function calls producing *proxy* markup, and we are looking at simple JS/CLJS code, bringing us to our first bit of expressiveness: program-generated mark-up.

#### Expressiveness
Here is some more original TodoMVC HTML, a row of radio buttons specifying which kind of items to show (elsewhwere):
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
Now that is fine for the initial page load, but how will the `selected` class get moved about as the user triggers each route? The CLJS version is closer to the TodoMVC requirements and manifests that best:
````clojure
(ul {:class "filters"}
        (for [[label route] [["All", "#/"], ["Active","#/active"], ["Completed","#/completed"]]]
          (li {} (a {:href route
                      :class (c? (if (=== label (mx-route-label me))
                                   "selected" ""))} label))))
````
Whoa. What is `c?`?! That is short for "formulaic cell". (My fellow dataflow travelers over at [Hoplon/Javelin()](https://github.com/hoplon/javelin) use `cell=`.) How does that move the `selected` class about as the user works?

The enclosed code (as much JS/CLJS as we like) will run any time its dependencies change. Here, each time the user changes the route by clicking an item, all three buttons' formulas will be re-run to produce a new value for the `class` attribute. An `on-change` callback provided by the HTML component of Matrix will update the widgets' `classList`s. Super, but we left something out.

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


#### Where next?
 This repository contains several proof-of-concept frameworks. For now, all but Qxia have their own version of Cells, to make debugging easier during this proof-of-concept phase.
 * In the identically named `js/matrixjs` you will find a pure Javascript version of Cells and an implementation of TodoMVC. **Even ClojureScript developers should [start there](https://github.com/kennytilton/MatrixJS/tree/master/js/matrixjs).** An annotated albeit slightly out-of-date version of the main source for that might be helpful to some and can be [found here](https://github.com/kennytilton/MatrixJS/blob/master/js/matrixjs/js/app-annotated.js).
 * in `cljs/qxia` find a bit-rotten marriage of CLJS Cells and qooxdoo mobile, with random widgets serving no purpose
 * In `cljs/jlive` (soon to be renamed `matrix`) find a ClojureScript implementation of TodoMVC.
 
Other projects you find under `cljs` will come and go as I explore different CLJS build environments. (*lien mies* is in the lead with Boot coming up strong.)
