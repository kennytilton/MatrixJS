# MatrixJS

Sailboat designers tell us we can have in one boat only two of the three virtues of speed, comfort, and low cost. 

MatrixJS strives for all three of development simplicity, expressive power, and run-time efficiency. The secret sauce? A custom dataflow engine we have re-christened "matrix" after finding out what that word really means. (Forget the movie.)

The project at this proof-of-concept stage consists of the official version of MatrixJS *and* an implementation of TodoMVC, a do-list app [specified here](https://github.com/tastejs/todomvc/blob/master/app-spec.md) by the good folks at [TodoMVC](http://todomvc.com). We are functionally conformant, anyway.

## What is *our* matrix?
We like this definition:
> ma·trix ˈmātriks *noun* an environment in which something else takes form. *Origin:* Latin, female animal used for breeding, parent plant, from *matr-*, *mater*

In the movie, the matrix harnessed humans to suck energy from them. In English, a matrix provides the conditions for new things to come to life.

## Matrix internals
[This section is a bit technical. Feel free to skip it and come back as soon as you regret doing so.]

The "matrix" in MatrixJS is just another dataflow/reactive/databinding library. At run-time, a matrix is just a simple tree of objects, parents and children where children have just one parent (and have a link to that parent). Thus the entire matrix can be navigated starting from any object. It is all connected, as Buddha said.

Properties of objects might have fixed values or be mediated by so-called "cells". As shorthand we call "properties mediated by cells" simply "cells". Formulaic `cF` cells calculate values for their properties from anonymous functions that take for input the object they qualify. These functions can use other properties of the same object or, by navigating intelligently to other objects in the matrix, rely on any other property in the matrix. Cue Buddha, and yes, we consider stateless isolation, encapsulation, and the model-view dichotomy to miss the point of UI programming where everything is connected.

> Example: nuclear power plant control room dashboard background color is red or black depending on whether the core temperature reported by a sensor is greater or equal to a billion degrees.

It cannot be formulae all the way down, so some cells are so-called `input cells`, abbreviated `cI` or `cIe` in the code we will be reviewing. These can be assigned to by event handlers or code monitoring a socket. They are inputs for the matrix.

> Example: software monitoring an actual thermometer assigns a stream of temperature values to the `temperature` input cell of the matrix object corresponding to the real sensor.

When a cell used in a computation changes in value, any rules that used that cell in their own computation are re-run to compute new values. This propagation cascades recursively, stopping when a cell has no dependents or recomputes the same value as from the prior computation.

> Example (adding an intermediate cell to our example): the "core status" property is "OK" or "not good" depending on the core temperature. The dashboard background color and a klaxon alarm derive their states from the core status. Suppose we are at one billion degrees and the dashboard is red and the klaxon is sounding. If the temperature increases to one billion and one, the core status rule runs to handle the new value but again decides on "not good", so the formulae for the dashboard color and klaxon are not re-run.

When cells change value, programmable observers manifest the changed matrix world to the real world (if only the browser DOM).

> Example: code in an observer on the `clanging` property of a matrix klaxon uses a real device's interface to turn it on or off. A differnt observer on the background-color property executes `*element*.style.background-color = *new-value*`.

## So why "matrix"?
This dataflow library provides an environment in which the developer can arrange for a proxy nuclear powerplant to take form. The matrix powerplant runs by itself given declaratively coded connective formulae and glue to feed data from inputs and results back outside the application.

Turning to a safer application, the input of a user pressing the Enter key in TodoMVC procedurally extends the list of to-do items with a new item. The matrix proxy of a `UL` list sees the list grow and grows a new matrix `LI`. MatrixJS observers add a new LI to the browser DOM.

The dataflow library is supporting a live proxy version of the web page, one that MatrixJS propagates to -- gives birth to -- the browser. Hence "matrix".

## Running TodoMVC
Pretty simple. In a terminal:
* git clone the [overarching repository](https://github.com/kennytilton/MatrixJS);
* `cd MatrixJS/js/matrixjs`
* `scripts/build`
* now open `index.html` in Chrome or Safari on Mac OS X.
Please advise kentilton at gmail of any difficulties.

## A Gentle Walkthrough of TodoMVC
Let us take a walk through the source of `MatrixJS * TodoMVC` keeping any eye out for:
* simplicity
* expressive power (declarative/reactive and transparent)
* dataflow/reactivity, transparent and efficient
* efficient DOM updates

Starting with [`index.html`](https://github.com/kennytilton/MatrixJS/blob/master/js/matrixjs/index.html), aside from some diagnostic HTML the body is fairly obvious:
```html
<body>
  <script>
	  document.body.innerHTML = todoMVC();
  </script>
</body>
```
Now take a look at the function `todoMVC` defined in [`app.js`](https://github.com/kennytilton/MatrixJS/blob/master/js/matrixjs/js/app.js) and compare it with the `<body>` in [the original HTML](https://github.com/kennytilton/MatrixJS/blob/master/js/matrixjs/todo-orig.html) supplied by the TodoMVC folks. Pretty close (except for the structure broken out into subroutines just to keep the source visually manageable). 

Specifically, consider the two headers. First from the original HTML:
```html
<header class="header">
	<h1>todos</h1>
	<input class="new-todo" placeholder="What needs to be done?" autofocus>
</header>
```
And now from the MatrixJS implementation:
```javascript
header({class: "header"}, c => [
  h1("todos"),
  input({ class: "new-todo", autofocus: true,
          placeholder: "What needs doing?",
          onkeypress: 'todoAddNewOnEnter'})])
```
While the JS version may look like markup, in fact `header`, `h1`, and `input` are simple functions each returning a matrix proxy object  for a browser DOM element. Where HTML syntax has `<*tag* *attrs\**> *children* </*tag*>, the MatrixJS syntax has `*tag( { attrs\* }, function-to-gen-children)*. The HTML `attrs` become identical MatrixJS attrs. 
```
> Why a function to create the children? This has to do with the mechanics of the matrix, which require a parent to already exist and be available to any child when they are created.

So far we have seen:
* simplicity: we pretty much Just Code HTML(tm); and
* efficiency: the initial page load is of one block of HTML source (no piecemeal JS DOM assembly).


