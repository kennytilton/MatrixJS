# MatrixJS

Sailboat designers tell us we can have in one boat only two of the three virtues of speed, comfort, and low cost. 

MatrixJS strives for all three of development simplicity, expressive power, and run-time efficiency. The secret sauce? A generative custom dataflow engine we have newly christened "matrix" after finding out what that word really means. (Forget the movie.)

The project at this proof-of-concept stage consists of the official version of MatrixJS *and* an implementation of TodoMVC, a do-list app [specified here](https://github.com/tastejs/todomvc/blob/master/app-spec.md) by the good folks at [TodoMVC](http://todomvc.com). We are functionally conformant, anyway.

## What is *our* matrix?
We like this definition:
> ma·trix ˈmātriks *noun* an environment in which something else takes form. *Origin:* Latin, female animal used for breeding, parent plant, from *matr-*, *mater*

In the movie, the matrix harnessed humans to suck energy from them. In English, a matrix provides the conditions for new things to come to life.

## Matrix internals
[This section is a bit technical. Feel free to skip it and come back as soon as you regret doing so.]

The "matrix" in MatrixJS is just another dataflow/reactive/databinding library. At run-time, a matrix is just a simple tree of objects, parents and children where children have just one parent *and* have a pointer to that parent. Thus the entire matrix can be navigated starting from any object. It is all connected, as Buddha said.

Properties of objects might have fixed values or be mediated by so-called "cells". Formulaic cells calculate values for their properties from anonymous functions that take for input the object they qualify. These functions can use other properties of the same object or, by navigating intelligently to other objects in the matrix, rely on any other property in the matrix.

> Example: nuclear power plant control room dashboard background color is red or black depending on whether the core temperature reported by a sensor is over or under a billion degrees.

It cannot be formulae all the way down, so some cell-mediated properties (or "cells", for short) are so-called input cells. These can be assigned to by procedural code in event handlers or code monitoring a socket. 

> Example: software monitoring an actual thermometer assigns a stream of temperature values to the `temperature` property of the matrix object corresponding to the real sensor.

When any property used in a computation changes, any rules that used that property in their computation are re-run to compute new values. This propagation cascades recursively, stopping when a cell has no dependents or recomputes the same value it had from the prior computation.

> Example: the "plant status" property is "OK" or "not good" depending on the core temperature. The dashboard background color and a deafoning klaxon derive their states from the plant status. If the temperature changes from one billion to one billion and one, the plant status decides again on "not good" but the formulae for the dashboard color and klaxon are not re-run.

When cells change value, programmable observers execute procedural code to manifest the matrix world to the real one.

> Example: an observer on the `clanging` property of a matrix proxy klaxon turns an actual klaxon on or off via the device's interface.

## So why "matrix"?
We like the word matrix because the dataflow library provides an environment in which the developer can arrange for a proxy nuclear powerplant to take form. The matrix powerplant runs by itself once the developer has written the connective formulae and the code to feed the inputs. Valuable outputs such as a deafening klaxon arise from straightforward change observers doing the obvious with new values.

Turning to a safer application, the input from a user press of the Enter key in TodoMVC will procedurally extend the list of to-do items with a new incomplete to-do item. The matrix model of a `UL` list is watching that list and will grow a new matrix `LI`. Thanks again to straightforward observers provided by MatrixJS, the real client DOM UL will grow a new LI.

The matrix is supporting a live proxy version of the web page, one that MatrixJS propagates to -- gives birth to -- the browser.

Hence "matrix".

## A Gentle Walkthrough of TodoMVC
Let us take a walk through MatrixJS * TodoMVC keeping any eye out for:
* simplicity
* expressive power (declarative/reactive and transparent)
* dataflow/reactivity, transparent and efficient
* efficient DOM updates

