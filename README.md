# ConnectJS
Welcome to ConnectJS, lightweight but powerful Javascript/ES6 and CLJS web development frameworks, with Cells Inside(tm) providing the "connect".

Lightweight means you do not have to learn a new framework erected atop HTML/JS. Powerful means delivering a maximum of user functionality with a minimum of your programming effort.

You code declaratively thinking only about your application, ConnectJS does the rest. With no tooling or pre-processing.

As Buddha said 2500 years ago, everything is connected, especially in a highly usable computer application interface. Usability derives from interfaces that anticipate us, changing shape as we interact to provide just the information and controls we need. So as Buddha might have guessed, everything on the screen is connected to everything else. And as Fred Brooks pointed out, those connections grow exponentially with the number of elements in play at any one time. 

The classic TodoMVC with its simple "do list" and just a few controls does a fair job of demonstrating how a JS library works, but may not make clear how well that library scales to a real application such as an Electronic Medical Recods interface to be dealt with by a busy doctor at the patient's bedside.

Nowadays, every JS library tries to simplify Web development one way or another, almost all by providing a new framework *around* JS. With sufficient hand-wiring from the developer, that framework automates things nicely at run-time. But as the interface grows in complexity, the hand-wiring grows exponentially: the more elements on the screen, the more things each will depend on. Run-time still gets automated nicely but the hand-wiring never ends.

ConnectJS goes in the other direction, rewiring Javascript to change what happens when we read or set state with standard JS syntax. Declarative DOM/event scripts thus come to life, re-running automatically and minimally as events unfold to decide new attributes and new DOM. Behind the scenes, CJS glue isomorphically mirrors the changing JS model to the actual DOM and back from events. We now can build dynamic, optimally efficient interfaces by writing only the application code -- ConnectJS does the rest.

All in pure ES6.

#### Our chops
We have done this before, and built enterprise applications this way. Here is [the latest](http://tiltonsalgebra.com/#).

[Cells](https://github.com/kennytilton/cells) is a mature, largely transparent databinding library that began in 1996 as a Common Lisp library and has since been ported to Clojure/ClojureScript as [Rube](https://github.com/kennytilton/rube) and now Javascript as (for now) internal components of [this repo](https://github.com/kennytilton/ConnectJS/blob/master/ConnectJS/public_html/js/Cells.js). It has been used to drive application development frameworks wrapping Macintosh [QuickDraw](https://en.wikipedia.org/wiki/QuickDraw), Windows GDT, Tcl/Tk as [Celtk](https://github.com/kennytilton/celtk), OpenGL (you read that correctly) as [Cello](https://github.com/kennytilton/Cello), Gtk as [Cells-Gtk](https://github.com/Ramarren/cells-gtk3), qooxdoo as [qooxlisp](https://github.com/kennytilton/qooxlisp), and qooxdoo mobile as [Qxia](https://github.com/kennytilton/qxia).

#### The ConnectJS Design Imperatives
 * HTML and CSS shall be wrapped so thinly that we will not have to document anything other than the databinding. This will be [the doc](https://developer.mozilla.org/en-US/docs/Web/API) for the rest;
 * no preprocessing. Stackless. Just Javascript and Cells (itself just JS or CLJS);
 * transparent databinding, reaching across the entire application model, embracing model as well as view, indeed rejecting the distinction; 
 * declarative and dynamic (thanks to the formulaic databinding); and
 * fast, with the theoretical minimum of DOM manipulation, without the diffing and without re-running renderers unnecessarily.
 
 #### Where next?
 This repository contains three frameworks (well, two now, a third RSN). In the identically named ConnectJS you will find a pure Javascript version of Cells and a bit of an HTML/JS framework to be evolved over the next week or two. Under connect_cljs we will then develop a ClojureScript Web framework using [Rube](https://github.com/kennytilton/rube) for the dataflow and then largely mimicking the JS version in re the client DOM and events. If you want to get an idea of how that will look out, check out [Qxia](https://github.com/kennytilton/ConnectJS/tree/master/cljs/qxia). Qxia drives [qooxdoo mobile](http://www.qooxdoo.org/5.0.2/pages/mobile.html) with Rube.
 
 And now I am headed for the JS directory to sharpen my ES6, Material Design, and HTML5 skills.
