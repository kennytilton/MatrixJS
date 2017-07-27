# MatrixJS
> ma·trix ˈmātriks *noun* an environment in which something else takes form. *Origin:* Latin, female animal used for breeding, parent plant, from matr-, mater

Welcome to MatrixJS and MatrixCLJS, two lightweight but powerful web development frameworks for Javascript and ClojureScript, driven crucially by native ports of the [Cells](https://github.com/kennytilton/cells) dataflow/reactive engine.

Lightweight means not having to learn a new framework erected around HTML/JS (requiring tooling or pre-processing). Instead of wrapping JS/HTML from the outside, MatrixJS goes inside Javascript/CLJS to change what happens when we read or set properties.

Powerful means having as much work done as efficiently as possible by MatrixJS. Matrix DOM is specified declaratively and re-executed automagically as conventional event handlers drive the matrix, with Cells providing the motive force to recompute matrix DOM only as necessary given any one event. Behind the scenes, MatrixJS mirrors the changing matrix model to the actual DOM. 

We build dynamic, optimally efficient interfaces by writing only the application code.

#### Our chops
We have done this before, and built enterprise applications this way. Here is [the latest](http://tiltonsalgebra.com/#).

[Cells](https://github.com/kennytilton/cells) is a mature, largely transparent databinding library that began in 1996 as a Common Lisp library and has since been ported to Clojure/ClojureScript as [Rube](https://github.com/kennytilton/rube) and now Javascript as (for now) internal components of [this repo](https://github.com/kennytilton/ConnectJS/blob/master/ConnectJS/public_html/js/Cells.js). It has been used to drive application development frameworks wrapping Macintosh [QuickDraw](https://en.wikipedia.org/wiki/QuickDraw), Windows GDT, Tcl/Tk as [Celtk](https://github.com/kennytilton/celtk), OpenGL (you read that correctly) as [Cello](https://github.com/kennytilton/Cello), Gtk as [Cells-Gtk](https://github.com/Ramarren/cells-gtk3), qooxdoo as [qooxlisp](https://github.com/kennytilton/qooxlisp), and qooxdoo mobile as [Qxia](https://github.com/kennytilton/qxia).

#### The MatrixJS Design Imperatives
 * HTML and CSS shall be wrapped so thinly that we will not have to document anything other than the databinding. This will be [the doc](https://developer.mozilla.org/en-US/docs/Web/API) for the rest;
 * no preprocessing. No stack. Just Javascript and Cells (itself just JS/CLJS);
 * transparent\* databinding, reaching across the entire application model, embracing model as well as view. \* No subscribe or publish; 
 * declarative and dynamic (thanks to the formulaic databinding); and
 * fast, with the theoretical minimum of DOM manipulation, without the diffing and without re-running renderers unnecessarily.
 
 #### Where next?
 This repository contains several proof-of-concept frameworks. For now, all but Qxia have their own version of Cells.
 * In the identically named js/matrixjs you will find a pure Javascript version of Cells and an implementation of TodoMVC.
 * in cljs/qxia is a bit-rotten marriage of CLJS Cells and qooxdoo mobile, with random widgets serving no purpose
 * In cljs/jlive (soon to be renamed matrixcljs) find a ClojureScript implementation of TodoMVC.
 
Other projects you find there will come and go as I explore different CLJS build environments. (*lien mies* is in the lead with Boot coming up strong.)
