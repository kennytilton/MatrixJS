# MatrixJS

Sailboat designers say that one boat can have at most two out of the three virtues of speed, comfort, and low cost. 

MatrixJS shoots for all three: run-time efficiency, expressive power, and development simplicity. The secret? A custom dataflow engine we have re-christened "matrix" after finding out what that word really means. (Forget the movie.)

The source here consists of (a) the official version of MatrixJS and (b) an implementation of the TodoMVC challenge. TodoMVC is a do-list web app [specified here](https://github.com/tastejs/todomvc/blob/master/app-spec.md) by the good folks at [TodoMVC](http://todomvc.com). We are functionally conformant.

### So what do *we* mean by "matrix"?
We like this definition:
> ma·trix ˈmātriks *noun* an environment in which something else takes form. *Origin:* Latin, female animal used for breeding, parent plant, from *matr-*, *mater*

In the movie, the matrix harnessed humans to suck energy from them. In English, a matrix provides the conditions for new things to come to life.

### Matrix internals
[This section is a bit technical. Feel free to skip it and come back as soon as you regret doing so.]

The "matrix" in MatrixJS is just another dataflow/reactive/databinding library. Let's take a look from thirty thousand feet.

At run-time, a matrix is a simple tree of parent and children objects where children have just one parent and have a link to that parent. Meaning the entire matrix can be navigated starting from any object. It is all connected, as Buddha said.

Properties of objects might have fixed values or be mediated by so-called "cells" supplied when objects are specified. That means different objects of the same class can be mediated by different cells (nicely amping class re-use). 

Our shorthand for "a property mediated by a cell" is simply "cell". Formulaic `cF` cells calculate values for their properties from anonymous functions that take for input the object they qualify. These functions can use other properties of the same object or by navigating intelligently to other objects in the matrix consult any other property in the matrix. Cue Buddha, and yes this flies happily in the face of conventional wisdom on component isolation, separation of concerns, and even the MVC trifurcation itself. Do not get us started.

> Example: nuclear power plant control room dashboard background color is red or black depending on whether the core temperature reported by a sensor is greater or equal to a billion degrees.

Next. It cannot be formulae all the way down: `input cells` can be assigned to from outside the matrix by, say, event handlers or code monitoring a socket. From the perspective of the matrix, these are inputs.

> Example: software monitoring an actual thermometer assigns a stream of temperature values to the `temperature` input cell of the matrix object corresponding to the real sensor.

When a cell used in a computation changes in value, any rules that used that cell in their most recent computation are re-run to compute new values. Yes, Virginia, the dependency graph changes dynamically to minimize re-calculation. This propagation cascades recursively, stopping when a cell has no dependents or recomputes the same value as from the prior computation.

> Example (adding an intermediate cell to our example): the `coreStatus` property is "OK" or "not good" depending on the core temperature. The dashboard background color and a klaxon alarm derive their states from `coreStatus`. Suppose we are at one billion degrees and the dashboard is red and the klaxon is sounding. If the temperature increases to one billion and one, the `coreStatus` rule runs to consider the new value but again decides on "not good", so the formulae for the dashboard color and klaxon do not re-run.

Next. When cells change value, programmable observers manifest the changed matrix world to the real world (if only the browser DOM).

> Example: code in an observer on the `clanging` property of a matrix klaxon uses a real device's interface to turn it on or off. A different observer on the backgroundColor property executes `[dashboard DOM].style.backgroundColor = [new-value]`.

## So why "matrix"?
This dataflow library provides an environment in which the developer can arrange for a proxy nuclear powerplant to take form. The matrix powerplant runs by itself given:
* declaratively coded connective formulae;
* glue to feed data into the matrix from inputs; and
* more glue to pipe results back out.

Turning to a safer application, the input of a user pressing the Enter key in TodoMVC procedurally extends the list of to-do items. The matrix proxy of a `UL` list sees the list grow and grows a new matrix `LI`. MatrixJS observers add a new LI to the browser DOM.

Summary: the dataflow library is supporting a live proxy version of a web page, one that MatrixJS "delivers" continuously, transparently, and incrementally to the browser. Hence "matrix".

## Running TodoMVC
Pretty simple. In a terminal:
* git clone the [overarching repository](https://github.com/kennytilton/MatrixJS);
* open `MatrixJS/js/matrixjs/index.html` in Chrome or Safari on Mac OS X (be as brave as you like trying other platforms).
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
Super. Now take a look at the function `todoMVC` defined in [`app.js`](https://github.com/kennytilton/MatrixJS/blob/master/js/matrixjs/js/app.js) and compare it with the `<body>` in [the original HTML](https://github.com/kennytilton/MatrixJS/blob/master/js/matrixjs/todo-orig.html) supplied by the TodoMVC folks. Pretty close (except for the structure we have broken out into subroutines just to keep the source visually manageable). 

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
While the JS version may look like markup, in fact `header`, `h1`, and `input` are simple functions pretty much documented by my favorite reference: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). Where HTML syntax has `<*tag* *attrs\**> *children* </*tag*>, the MatrixJS syntax has `*tag( { attrs\* }, function-to-gen-children)*. The HTML `attrs` become identical MatrixJS attrs. Each MatrixJS returns a matrix proxy object for a browser DOM element.

> Why a function to create the children? The mechanics of the matrix require a parent to already exist and be available to any child when the child is created. When the parent is instantiated it will kick off all its formulaic cells to get them into the game ASAP -- these are potentially live additions to a running matrix! -- and these cells may care about the object's children, so the rule for children will invent those and then they... sorry you asked? Anyway, it works surprisingly smoothly.

So far we have seen:
* simplicity: we pretty much Just Code HTML(tm); and
* efficiency: the initial page load is of one block of HTML source (no piecemeal JS DOM assembly).
Now let's get into how the app fulfills the requirements.
## I do declare!
The first functional requirement from the TodoMVC challenge:
> When there are no todos, #main and #footer should be hidden.
And here is the code that will hide and show `#main` as to-dos come and go (`cF` is short for "make formulaic cell"):
```javascript
   section({class: "main",
            hidden: cF( c => Todos.empty)})
```
Sweet. `#footer` works the same. As the `empty` property toggles between truthy and not, `#main` and `#footer` will go from hidden and not. We will stare at the `empty` property state changes in the next section. For now: 

*Hey! The above just makes the `hidden` matrix property true or false. What actually updates the DOM?* 

Great question. Matrix internals invoke whatever observers we specify; in this case the MatrixJS HTML sub-component `Tag.js` has our back, `tag` being the JS class for all HTML element proxies in the matrix. Without getting too far into the weeds, here is how a change in the matrix `hidden` property makes it to the DOM, with a Tag-supplied universal slot observer (not shown) already having worked out that it needs to handle `hidden` as a global attribute observation:
```javascript
function obsAttrGlobal (property, md, newv, oldv, c) {
   if (oldv===kUnbound) {
      return; // on awaken (when the old value is unbound) all HTML is assembled at once; no need to maintain here
   } else {
     let trueAttr = AttrAliases.get(property) || property; // we might need to alias a DOM attr name to avoid collisions
     md.dom[trueAttr] = newv; // the matrix proxy DOM knows its browser DOM, so it can update it directly
   }
}
```
The matrix-to-DOM potential mystery turns out to be as simple as each proxy DOM element knowing its true DOM element (because it supplies the true element's `id`).
## Let the dataflow begin!
Above we saw how a new matrix property value (`hidden`) made it from the matrix to the browser. But recall the formula that produced that new value:
```javascript
   section({class: "main",
            hidden: cF( c => Todos.empty)})
```
What moves `empty` between true and false? We start with the inocuous first line of `app.js`:
```javascript
const Todos = Todo.loadAllItems();
```
The static method `loadAllItems` loads to-dos from browser `localStorage` into the matrix, ready for our view matrix objects to watch. Here is the `empty` property:
```javascript
empty: cF( c => c.md.items.length === 0),
```
Let's dissect `c.md.length`. In the technical bit you might have skipped we said formulaic cells were first-class functions of the object qualified by the property they mediated. We simplified. The input is the mediating cell itself, that stores the object qualified in an `md` property.

So what controls the `items` property? Well, we exceeded the spec and did logical deletion of to-dos so the `items` rule looks like this:
```javascript
items: cF( c => c.md.itemsEver.filter( td => !td.deleted))
```
We went beyond the spec, but in fact TodoMVC looks only at undeleted to-dos so we provided a filtered property for most code to use. Now how about `itemsEver`? Great question.
### Official spec line #2: New todos
> New todos are entered in the input at the top of the app... Pressing Enter creates the todo, appends it to the todo list, and clears the input. Make sure to .trim() the input and then check that it's not empty before creating a new todo.

We have reached the last turtle, an input cell fed by an event handler:
```javascript
function todoAddNewOnEnter (dom, e) {
    if (e.key==='Enter') {
        let title = e.target.value.trim();
        if (title === '') {
            alert("A reminder to do nothing? I like it! We should all slow things down now and then. But, no.");
        } else {
            Todos.itemsEver = Todos.itemsEver.concat(new Todo({title: title}));
        }
        e.target.value = null;
    }
}
```
Anyway, when the user hits Enter on a non-blank title, the above handler glue stores a new list with the new to-do in `Todos.itemsEver`. The `items` property recalculates and grows by one (the new to-do is undeleted) and then the `empty` property decides on `false` and then the `hidden` properties of `#main` and `#footer` decide on false. An observer then removes the `hidden` attribute from their DOM counterparts. (Much else happens as well, because almost all of the UI feeds off the list of to-dos.)

> Why not just destructively add to the existing array? Since you asked: matrix internals work off (a) assignment and (b) by comparing prior values with new. Mutating the list `itemsEver` neither assigns nor makes visible a prior value. We *could* extend the matrix engine to force propagation with an explicit `recomputeDependents`, and even extend it to have a cell silently maintain a "priorValue" copy. In fact, one user extended the original Lisp version to handle hash-table updates at the granularity of the key. Left as an exercise, so for now try to remember not to change the matrix by mutating property values.

> More to come


