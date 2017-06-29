# ConnectJS (formerly ciWeb)
Welcome to ConnectJS, lightweight but powerful JS and CLJS web development frameworks, with Cells Inside(tm) providing the "connect".

Lightweight means you do not have to learn a new framework erected atop HTML/JS. Powerful means delivering a maximum of user functionality with a minimum of programing effort, thanks to transparently coding highly connected UI elements in a purely declarative style.

As Buddha said 2500 years ago, everything is connected, especially in a highly usable computer application interface. Usability derives from interfaces that anticipate us, changing shape as we interact to provide just the information and controls we need. So as Buddha might have guessed, everything on the screen is connected to everything else. And as Fred Brooks pointed out, those connections grow exponentially with the number of elements in play at any one time. 

The classic TodoMVC with its simple "do list" and just a few controls does a fair job of demonstrating how a JS library works, but may not make clear how well that library scales to a real application such as an Electronic Medical Recods interface to be dealt with by a busy doctor at the patient's bedside.

Nowadays, every JS library tries to simplify Web development one way or another, usually by providing a new framework that, with sufficient hand-wiring from the developer, is able to automate things at run-time.

ConnectJS (thanks to Cells) goes in the other direction, inside the JS transparently changing what happens when we read or set state. With more transparent code propagating change from our JS application model to the DOm and from events, we achieve dynamic interfaces from declarative scripts, all with optimal efficiency.

#### Our chops
We have done this before, and built enterprise applications this way. Here is [the latest](http://tiltonsalgebra.com/#).

[Cells](https://github.com/kennytilton/cells) is a mature, largely transparent databinding library that began in 1996 as a Common Lisp library and has since been ported to Clojure/ClojureScript as [Rube](https://github.com/kennytilton/rube) and now Javascript as [jCells](https://github.com/kennytilton/jCells). It has been used to drive application development frameworks wrapping Macintosh [QuickDraw](https://en.wikipedia.org/wiki/QuickDraw), Windows GDT, Tcl/Tk as [Celtk](https://github.com/kennytilton/celtk), OpenGL (you read that correctly) as [Cello](https://github.com/kennytilton/Cello), Gtk as [Cells-Gtk](https://github.com/Ramarren/cells-gtk3), qooxdoo as [qooxlisp](https://github.com/kennytilton/qooxlisp), and qooxdoo mobile as [Qxia](https://github.com/kennytilton/qxia).

#### The ConnectJS Design Imperatives
 * HTML and CSS shall be wrapped so thinly that we will not have to document anything other than the databinding. This will be [the doc](https://developer.mozilla.org/en-US/docs/Web/API) for the rest;
 * no preprocessing. Stackless. Just Javascript and jCells (itself just JS);
 * transparent databinding, reaching across the entire application model, embracing model as well as view, indeed rejecting the distinction; 
 * declarative and dynamic (thanks to the formulaic databinding); and
 * fast, with the theoretical minimum of DOM manipulation, without the diffing and without re-running renderers unnecessarily.
 
 #### Where next?
 This repository contains two frameworks (well, one now, a second shortly). In the identically named ConnectJS you will find a pure Javascript version of Cells and a bit of a framework to be evolved over the next week or two. Under connect_cljs we will then develop a ClojureScript Web framework using [Rube](https://github.com/kennytilton/rube) for the dataflow and then largely mimicking the JS version in re the client DOM and events.
 
 And now I am headed for the JS directory to sharpen my ES6, Material Design, and HTML5 skills.
