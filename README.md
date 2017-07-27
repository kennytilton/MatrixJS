# MatrixJS
> ma·trix ˈmātriks *noun* an environment in which something else takes form. *Origin:* Latin, female animal used for breeding, parent plant, from *matr-*, *mater*

Welcome to MatrixJS and MatrixCLJS, two lightweight but powerful web development frameworks for Javascript and ClojureScript, enervated by native ports of the [Cells](https://github.com/kennytilton/cells) dataflow/reactive engine.

* Lightweight means not having to learn a new framework erected around HTML/JS (requiring tooling or pre-processing). Instead of wrapping JS/HTML from the outside, MatrixJS goes inside Javascript/CLJS to change what happens when we read or set properties.
* Powerful means having as much work done as efficiently as possible by MatrixJS. Matrix proxy DOM is specified declaratively and revised automagically as referenced properties change. Changes begin with procedural mutations made by conventional event handlers. Cells provides the motive force to cascade these initial changes throughout the matrix as if it were a spreadsheet. MatrixJS glue then mirrors revised attributes and new/lost proxy DOM to the actual client DOM. 

We build dynamic, efficient interfaces from standard JS/CLJS and thinly-wrapped HTML, free to concentrate on the application.

#### Our chops
We have done this before, and built enterprise applications this way. Here is [the latest](http://tiltonsalgebra.com/#).

[Cells](https://github.com/kennytilton/cells) is a mature, largely transparent databinding library that began in 1996 as a Common Lisp library and now has been ported to Clojure/ClojureScript. It has been used to drive application development frameworks wrapping Macintosh [QuickDraw](https://en.wikipedia.org/wiki/QuickDraw), Windows GDT, Tcl/Tk as [Celtk](https://github.com/kennytilton/celtk), OpenGL (you read that correctly) as [Cello](https://github.com/kennytilton/Cello), Gtk as [Cells-Gtk](https://github.com/Ramarren/cells-gtk3), and qooxdoo as [qooxlisp](https://github.com/kennytilton/qooxlisp).

 #### Where next?
 This repository contains several proof-of-concept frameworks. For now, all but Qxia have their own version of Cells.
 * In the identically named `js/matrixjs` you will find a pure Javascript version of Cells and an implementation of TodoMVC. Even ClojureScript developers should start there.
 * in `cljs/qxia` find a bit-rotten marriage of CLJS Cells and qooxdoo mobile, with random widgets serving no purpose
 * In `cljs/jlive` (soon to be renamed matrixcljs) find a ClojureScript implementation of TodoMVC.
 
Other projects you find under `cljs` will come and go as I explore different CLJS build environments. (*lien mies* is in the lead with Boot coming up strong.)
