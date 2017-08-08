# Matrix
> ma·trix ˈmātriks *noun* an environment in which something else takes form. *Origin:* Latin, female animal used for breeding, parent plant, from *matr-*, *mater*

Welcome to Matrix, a family of simple but powerful and efficient web and mobile development frameworks. Current variants exist for [Javascript](https://github.com/kennytilton/MatrixJS/tree/master/js/matrixjs) and [ClojureScript](https://github.com/kennytilton/MatrixJS/tree/master/cljs/matrix). Follow those links to TodoMVC implementations using each. A React Native incarnation is in the works. All enjoy the simplifying power of of JS or CLJS ports of the [Cells](https://github.com/kennytilton/cells) dataflow/reactive engine.
#### A quick note on the name
In the movie, the matrix harnessed humans to suck energy from them. In English, a matrix provides the conditions for new things to come to life. 

As we will soon see, the dataflow component of this library supports a responsive proxy of a web page that continuously, transparently, and incrementally drives an actual browser page. Hence "matrix".

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

* Lightweight means not having to learn a new framework erected around HTML/JS (requiring tooling or pre-processing). Instead of wrapping JS/HTML from the outside, MatrixJS goes inside Javascript/CLJS to change what happens when we read or set properties.
* Powerful means having as much work done as efficiently as possible by MatrixJS. Matrix proxy DOM is specified declaratively and revised automagically as referenced properties change. Changes begin with procedural mutations made by conventional event handlers. Cells provides the motive force to cascade these initial changes throughout the matrix as if it were a spreadsheet. Application "model" and "view" live in the same flow so each readily reflect each other. 
* Efficiency comes from the fine granularity of dependents and dependencies: a theoretical minimum of the matrix DOM gets recalculated in response to a user gesture, and so a minimum of client DOM gets updated.

With MatrixJS we declaratively specify a matrix world that runs by itself thanks to a dataflow engine transparently detecting dependencies and automatically recalculating reality as the user generates events. This matrix world then propagates to the actual client DOM, again automatically.

We concentrate on the application.

#### Our chops
We have done this before, and built enterprise applications this way. Here is [the latest](http://tiltonsalgebra.com/#).

[Cells](https://github.com/kennytilton/cells) is a mature, largely transparent databinding library that began in 1996 as a Common Lisp library and now has been ported to Clojure/ClojureScript. It has been used to drive application development frameworks wrapping Macintosh [QuickDraw](https://en.wikipedia.org/wiki/QuickDraw), Windows GDT, Tcl/Tk as [Celtk](https://github.com/kennytilton/celtk), OpenGL (you read that correctly) as [Cello](https://github.com/kennytilton/Cello), Gtk as [Cells-Gtk](https://github.com/Ramarren/cells-gtk3), and qooxdoo as [qooxlisp](https://github.com/kennytilton/qooxlisp).

 #### Where next?
 This repository contains several proof-of-concept frameworks. For now, all but Qxia have their own version of Cells, to make debugging easier during this proof-of-concept phase.
 * In the identically named `js/matrixjs` you will find a pure Javascript version of Cells and an implementation of TodoMVC. **Even ClojureScript developers should [start there](https://github.com/kennytilton/MatrixJS/tree/master/js/matrixjs).** An annotated albeit slightly out-of-date version of the main source for that might be helpful to some and can be [found here](https://github.com/kennytilton/MatrixJS/blob/master/js/matrixjs/js/app-annotated.js).
 * in `cljs/qxia` find a bit-rotten marriage of CLJS Cells and qooxdoo mobile, with random widgets serving no purpose
 * In `cljs/jlive` (soon to be renamed `matrix`) find a ClojureScript implementation of TodoMVC.
 
Other projects you find under `cljs` will come and go as I explore different CLJS build environments. (*lien mies* is in the lead with Boot coming up strong.)
