# ConnectJs TodoMVC

Welcome to the ConnectJS implementation of TodoMVC, a do-list app [specified here](https://github.com/tastejs/todomvc/blob/master/app-spec.md) by the good folks at [TodoMVC](http://todomvc.com). We are functionally in line with that specification but their CSS/SVG is kicking our nooby JS/CSS butts and anyway runs counter to the "single source of behavior" origin we invented because we could not figure out the CSS, so we will finish up by learning enough CSS to dump theirs.

> Caveat: ConnectJS is a port of our [qooxlisp](https://github.com/kennytilton/qooxlisp) Common Lisp+[qooxdoo](http://www.qooxdoo.org/) framework and qooxdoo was selected precisely so we would not have to learn (and especially make portable) HTML and CSS, so the ascent of those learning curves has just begun. That's our excuse, anyway. (And it is also our excuse for not doing yet the Crockford' "module" best practice, which we like and will get to RSN.)

[ConnectJS](https://github.com/kennytilton/ConnectJS) itself is an umbrella repo under which we are gradually collecting all Cells-driven UI frameworks. Cells itself has been ported from [Common Lisp](https://github.com/kennytilton/cells), to Clojure/ClojureScript as [Rube](https://github.com/kennytilton/rube), and now Javascript (with this repo for now holding the latest/greatest version). To date we have used Cells to drive: [qooxdoo](http://www.qooxdoo.org/) in the [qooxlisp](https://github.com/kennytilton/qooxlisp) repo (ask for a current version which I would need to carve out from a private repo), [qooxdoo mobile](http://www.qooxdoo.org/) (ClojureScript), and thinly wrapped HTML/CSS here. Well, OK, also Tcl/Tk, Gtk, Windows GDT, and OpenGL (yep).

#### Running the thing
[We have tested successfully on Mac OS X Chrome and Safari. FireFox does not like our ES2015; Babel might suffice.]

Clone this repo and then open ```index.html``` in Chrome or Safari. That should do it, modulo some cosmetic deviations and flaws occasioned by CSS issues confessed to below.

#### Doc
See the extensive comments in [annotated version](https://github.com/kennytilton/connectjs-todomvc/blob/master/js/app-annotated.js) of the app source.

#### Chewing the scenery
We believe this implementation of TodoMVC demonstrates that ConnectJS is faster, simpler, more powerful, more scalable, and more fun than the many other fine frameworks out there. 

> But if you like Scala, [this one seems close](http://todomvc.com/examples/binding-scala/#/) thanks to its own dataflow. The Binding.scala folks also offer a rant [beating up on other frameworks](https://github.com/ThoughtWorksInc/Binding.scala) much like the one we would write so we will spare you that here. Why CJS over Scala? CJS is Just Javascript(tm), including the dataflow hack that pretty much makes everything possible.

Let's go through those fabulous claims above one by one:

* Faster: Like ReactJS, we update just what needs updating. Unlike ReactJS, we do it without needlessly running renderers and without diffing their output. [React does have a workaround here, but it requires more wiring.] ConnectJS keeps track of exactly what derives from what, so it always knows exactly what needs updating.
* Simpler: The code is Just Javascript(tm), and just 170* lines of it, driving an HTML engine that works just like HTML. There is no framework to learn and no tooling required. The only new trick to learn is the Cells dataflow engine, but we get back to that under "more fun". * OK, the transparent persistence hack adds another 80, but that exceeds the requirements by updating individually.
* More powerful: as you will see in this TodoMVC demo, the Cells dataflow engine covers the model as well as the view. Checkout [Todo.js](https://github.com/kennytilton/connectjs-todomvc/blob/master/js/Todo.js) for a few lines of code that let the view dataflow pull from the data store (and throws in transparent persistence to boot). Cells also does better than conventional "lifting" reactive engines by seeing inside function calls and dynamically pruning dependency trees after each evaluation. Those make for better code organization and better performance.
* More scaleable: few reactive frameworks work transparently, meaning "without making the programmer hand-wire the dataflow". The best may be [Hoplon/Javelin](https://github.com/hoplon/javelin), modelled after some excellent Scheme hacks. Binding.scala, again, is good as well. In almost all other cases we see declarative code (yeahh!) ennervated by hand-wired (booo!) dataflow such as explicit publish/subscribe. Explicit dataflow wiring is fine in the small, but dependencies grow exponentially as datapoints increase in number so the hand-wiring drags on development exponentially. With CJS, one establishes a specific dependency of one variable on another simply by reading it. One kicks off recalculations by simply setting so-called "input" variables. (They are inputs to the reactive model.) The only syntax required is "var xyz = cF( <function> )" where cF wraps the function in the requisite machinery to have xyz calculated by <function>.
* More fun: programming with any transparent databinding engine is just plain fun. Functionality seems to come for free, with none of the heavy lifting we take for granted having always been the ones responsible for propagating state change. We simply state some wonderful interdependence and It Just Works(tm). Users get better interfaces because we reach higher and we have more time for beers.

#### The "Single source of behavior" Principle
We were frankly stumped at first by the [TodoMVC template](https://github.com/tastejs/todomvc-app-template/): where the Hell were some of those controls coming from? Like we said, CSS noobs here. Eventually we discovered just how much was being done in CSS. 

That is so cool for CSS, but here's the rub: some of my code to implement this widget is over here, and some of it is over there. When we invented qooxlisp we did so precisely so we could just sit there in our lovely [AllegroCL Common Lisp](https://franz.com/downloads/clp/survey) IDE (the Windows version works best) and concentrate on a rather intense [Algebra tutorial](http://tiltonsalgebra.com/#). With something that nasty, the last thing I wanted was to be bouncing back and forth between Lisp, Javascript, and HTML files to create one feature or track down one bug.

Yes, the absolute good of "separation of concerns" gets the act of programming absolutely wrong.

#### Next (documentation) steps
First, let's document the HTML generation by proclamation: it will work just like it says here in the [MDN doc](https://developer.mozilla.org/en-US/docs/Web/HTML). Where it comes up short, let us know and we will fix it. A couple of twists, though:
- Use "backgroundColor" to specify the in-line style "background-color"
- in-line style attributes can be specified as if they were tag attributes: the Tags engine sorts them out when generating the HTML. (We are not married to this choice, but we tossed a coin and opted for not making the programmer think too hard. We will hack up a new InlineStyle class if asked.)

Second, I have now annotated the source out the wazoo. Let me know at kentilton at gmail if you have nay questions or would like enough doc to get started Actually Programming with ConnectJS.


Created 2017 by Kenneth Tilton (http://tiltontec.com)
