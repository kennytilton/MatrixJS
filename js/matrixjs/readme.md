# MatrixJS

Sailboat designers tell us we can have only two of speed, comfort, and low cost. 

MatrixJS strives for all three of development simplicity, expressive power, and run-time efficiency. The secret sauce? A generative custom dataflow engine we have newly christened "matrix" after finding out what that word really means. (Forget the movie.)

The project at this proof-of-concept stage consists of the official version of MatrixJS *and* an implementation of TodoMVC, a do-list app [specified here](https://github.com/tastejs/todomvc/blob/master/app-spec.md) by the good folks at [TodoMVC](http://todomvc.com). We are functionally conformant, anyway.

## What is *our* matrix?
We like this definition:
> ma·trix ˈmātriks *noun* an environment in which something else takes form. *Origin:* Latin, female animal used for breeding, parent plant, from *matr-*, *mater*

In the movie, the matrix harnessed humans to draw energy from them. In English, a matrix provides the conditions for new things to come to life.

## More practically...
Let us take a walk through MatrixJS * TodoMVC keeping any eye out for:
* simplicity
* expressive power (the declarative/reactive thing)
* efficient DOM updates

## The mechanics
In this particular dataflow/reactive/databinding library, a matrix is just a network of objects arranged pretty much in a simple tree of parents and children where children have just one parent and have a pointer to that parent. 

Properties of these objects can be mediated by so-called "cells" which most usefully allow property values to be expessed as code formulae. These rules take for input the object they qualify and return a value computed from other properties of the same object or of other objects found by navigating the matrix using the parent and child links. When any property used in a computation changes, the rules that used it are re-run to compute new derived values.

> Example: nuclear power plant control room dashboard background color is red or black depending on whether the core temperature reported by a sensor is over or under a billion degrees.

It cannot be formulae all the way down, so some cell-mediated properties (or just cells) are so-called input cells. These are free to be assigned to by procedural code hosting the matrix. 

> Example: software monitoring an actual thermometer assigns a stream of temperature values to the `temperature` property of the matrix object corresponding to the real sensor.

When cells change value, programmable observers execute procedural code to manifest the matrix world to the real one.

> Example: an observer on the `clanging` property of a matrix alarm turns an actual alarm on or off via its interface.

## So why "matrix"?
We like the word matrix because the dataflow library provides an environment in which the developer can arrange for a model of, say, a nuclear powerplant to form. The matrix powerplant runs by itself once the developer has written the connective formulae and a minimum of procedural inputs. Valuable outputs such as a deafoning klaxon arise from straightforward change observers doing the obvious with new values.

Turning to a safer application, the input from a user press of the Enter key in TodoMVC will procedurally extend the list of to-do items (mediated by an input cell) with a new incomplete one. The matrix model of the `UL` list is watching that cell and will grow a new `LI`, and, thanks to again straightforward observers, so will the real client DOM. The matrix is supporting a matrix version of the web page that gets manifested to -- gives birth to -- the actual browser page.

Hence "matrix".

## A Gentle Walkthrough of TodoMVC
