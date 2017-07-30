# MatrixJS

Sailboat designers say any one boat can have at most two of the three virtues of speed, comfort, and low cost. 

MatrixJS delivers all three: run-time efficiency, expressive power, and development simplicity. The secret? A custom dataflow engine we have re-christened "matrix" after finding out what that word really means. (Forget the movie.)

The project at this proof-of-concept stage consists of the official version of MatrixJS *and* an implementation of TodoMVC, a do-list web app [specified here](https://github.com/tastejs/todomvc/blob/master/app-spec.md) by the good folks at [TodoMVC](http://todomvc.com). We are functionally conformant, anyway.

### So what do *we* mean by "matrix"?
We like this definition:
> ma·trix ˈmātriks *noun* an environment in which something else takes form. *Origin:* Latin, female animal used for breeding, parent plant, from *matr-*, *mater*

In the movie, the matrix harnessed humans to suck energy from them. In English, a matrix provides the conditions for new things to come to life.

### Matrix internals
[This section is a bit technical. Feel free to skip it and come back as soon as you regret doing so.]

The "matrix" in MatrixJS is just another dataflow/reactive/databinding library. At run-time, a matrix is just a simple tree of parent and children objects where children have just one parent (and have a link to that parent). Thus the entire matrix can be navigated starting from any object. It is all connected, as Buddha said.

Properties of objects might have fixed values or be mediated by so-called "cells". Our shorthand for "properties mediated by cells" is simply "cells". Formulaic `cF` cells calculate values for their properties from anonymous functions that take for input the object they qualify. These functions can use other properties of the same object or, by navigating intelligently to other objects in the matrix, rely on any other property in the matrix. Cue Buddha, and yes, we consider stateless isolation, encapsulation, and the model-view dichotomy to miss the point of UI programming, where interdependency abounds.

> Example: nuclear power plant control room dashboard background color is red or black depending on whether the core temperature reported by a sensor is greater or equal to a billion degrees.

It cannot be formulae all the way down: `input cells` can be assigned to from outside the matrix by, say, event handlers or code monitoring a socket. They are inputs for the matrix.

> Example: software monitoring an actual thermometer assigns a stream of temperature values to the `temperature` input cell of the matrix object corresponding to the real sensor.

When a cell used in a computation changes in value, any rules that used that cell in their most recent computation are re-run to compute new values. Yes, Virginia, the dependency graph changes dynamically to minimize re-calculation. This propagation cascades recursively, stopping when a cell has no dependents or recomputes the same value as from the prior computation.

> Example (adding an intermediate cell to our example): the "core status" property is "OK" or "not good" depending on the core temperature. The dashboard background color and a klaxon alarm derive their states from the core status. Suppose we are at one billion degrees and the dashboard is red and the klaxon is sounding. If the temperature increases to one billion and one, the core status rule runs to handle the new value but again decides on "not good", so the formulae for the dashboard color and klaxon are not re-run.

When cells change value, programmable observers manifest the changed matrix world to the real world (if only the browser DOM).

> Example: code in an observer on the `clanging` property of a matrix klaxon uses a real device's interface to turn it on or off. A differnt observer on the background-color property executes `[dashboard].style.backgroundColor = [new-value]`.

## So why "matrix"?
This dataflow library provides an environment in which the developer can arrange for a proxy nuclear powerplant to take form. The matrix powerplant runs by itself given: declaratively coded connective formulae; glue to feed data into the matrix from inputs; and glue to pipe results back out.

Turning to a safer application, the input of a user pressing the Enter key in TodoMVC procedurally extends the list of to-do items with a new item. The matrix proxy of a `UL` list sees the list grow and grows a new matrix `LI`. MatrixJS observers add a new LI to the browser DOM.

The dataflow library is supporting a live proxy version of the web page, one that MatrixJS "delivers" continuously and incrementally to the browser. Hence "matrix".

## Running TodoMVC
Pretty simple. In a terminal:
* git clone the [overarching repository](https://github.com/kennytilton/MatrixJS);
* open `MatrixJS/js/matrixjs/index.html` in Chrome or Safari on Mac OS X.
Please advise kentilton at gmail of any difficulties or deviations from [the spec](https://github.com/tastejs/todomvc/blob/master/app-spec.md) 

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
Now take a look at the function `todoMVC` defined in [`app.js`](https://github.com/kennytilton/MatrixJS/blob/master/js/matrixjs/js/app.js) and compare it with the `<body>` in [the original HTML](https://github.com/kennytilton/MatrixJS/blob/master/js/matrixjs/todo-orig.html) supplied by the TodoMVC folks. Pretty close (except for the structure we have broken out into subroutines just to keep the source visually manageable). 

> HTML "subroutines" in the form of simple JS subroutines are part of the expressive power of MatrixJS,

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
While the JS version may look like markup, in fact `header`, `h1`, and `input` are simple functions each returning a matrix proxy object  for a browser DOM element: where HTML syntax has `<*tag* *attrs\**> *children* </*tag*>, the MatrixJS syntax has `*tag( { attrs\* }, function-to-gen-children)*. The HTML `attrs` become identical MatrixJS attrs. 

> Why a function to create the children? The mechanics of the matrix require a parent to already exist and be available to any child when the child is created.

So far we have seen:
* simplicity: we pretty much Just Code HTML(tm); and
* efficiency: the initial page load is of one block of HTML source (no piecemeal JS DOM assembly).
Now let's get into how the app fulfills the requirements.
## I do declare!
The first functional requirement:
> When there are no todos, #main and #footer should be hidden.
And here is the code that will hide and show `#main` as to-dos come and go (recall that `cF` is short for "make formulaic cell"):
```javascript
   section({class: "main",
            hidden: cF( c => Todos.empty)})
```
Sweet. `#footer` works the same. But the above just makes the `hidden` matrix property true or false. What actually updates the DOM? 

Matrix internals invoke the observers we specify, but in this case the MatrixJS HTML sub-component `Tag.js` has our back. Without getting too far into the weeds, here is how a change in the matrix `hidden` property makes it to the DOM, with a Tag-supplied universal slot observer not shown already having worked out that it needs to handle `hidden` as a global attribute:
```javascript
function obsAttrGlobal (property, md, newv, oldv, c) {
   if (oldv===kUnbound) {
      return; // on awaken (when the old value is unbound) all HTML is assembled at once; no need to maintain here
   } else {
     let trueAttr = AttrAliases.get(property) || property;
     md.dom[trueAttr] = newv; // the matrix proxy DOM knows its browser DOM
   }
}
```
## Let the dataflow begin!
We said input cells are fed by glue code in, inter alia, browser event handlers. Let us look at how the `onkeypess` handler does that:
```javascript
function todoAddNewOnEnter (dom, e) {
    if (e.key==='Enter') {
        let title = e.target.value.trim();
        if (title === '') {
            alert("A reminder to do nothing? I like it! We should all slow things down now and then. But, no.");
        } else {
            Todos.itemsRaw = Todos.itemsRaw.concat(new Todo({title: title}));
        }
        e.target.value = null;
    }
}
```
`Todos.itemsRaw`? We skipped the first line of `app.js` in which the existing to-do items got loaded into the matrix:
```javascript
const Todos = Todo.loadAllItems();
```
That does not look like much, but it is. We will not dig into `loadAllItems`, but it loads all existing to-dos from `localStorage` into matrix proxies, and creates a proxy for the *list* of to-dos. That list proxy has a root input cell for `itemsRaw`, because this implementation goes the spec one better and does logical deletion (with a timestamp serving as `true` so we record that as well).

Anyway, when the user hits Enter on a non-blank title, the above handler glue stores a new list with the new to-do in `Todos.itemsRaw`.
> Why not just destructively add to the existing array? The matrix would not detect the change.

```


