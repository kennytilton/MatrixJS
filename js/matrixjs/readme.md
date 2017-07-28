# MatrixJS

Sailboat designers say you can have only two of speed, comfort, and low cost. MatrixJS strives for all three of development simplicity, expressive power, and run-time efficiency. The secret sauce? A generative custom dataflow engine we have newly christened "matrix" after finding out what that word really means. (Forget the movie.)

This project at this proof-of-concept stage consists of the official version of MatrixJS *and* an implementation of TodoMVC, a do-list app [specified here](https://github.com/tastejs/todomvc/blob/master/app-spec.md) by the good folks at [TodoMVC](http://todomvc.com). We are functionally conformant, anyway.

## What is *our* matrix?
We like this definition:
> ma·trix ˈmātriks *noun* an environment in which something else takes form. *Origin:* Latin, female animal used for breeding, parent plant, from *matr-*, *mater*

Here, a matrix is a network of objects arranged pretty much in a simple tree of parents and children where children have just one parent and have a pointer to that parent. 

Properties of these objects can be mediated by so-called "cells" which most usefully allow property values to be expessed as code formulae that take the object quaified by the property as their input and return a value computed off other properties of the same object or of other objects found by navigating the matric using the parent and child links.

An example would be a nuclear power plant dashboard background color being red or black depending on whether the core temperature was over or under a billion degrees.

It cannot be formulas all the way down, so some cell-mediated properties (or just cells) are so-called input cells. These are free to be assigned to by procedural code hosting the matrix. 

An example would be software monitoring an actual temperature software assigning a stream of temperatures to the `temperature` property of the matrx object corresponding to the real sensor.

When cells change value, programmable observers are free to execute procedural code operating outside the matrix. An example would be `clanging` property of a matrix alarm object having an observer that turned an actual alarm on or off via its interface.

## So why "matrix"?
We like the word matrix because the dataflow library provides an environment in which the developer can arrange for a model of, say, a nuclear powerplant to form. The matrix powerplant runs by itself once the developer has written the connective formulae and a minimum of procedural inputs. Valuable outputs such as a deafoning klaxon arise from straightforward change observers doing the obvious with new values.

Turning to a safer application, the input from a user press of the Enter key in TodoMVC will procedurally extend the list of to-do items (mediated by an input cell) with a new incomplete one. The matrix model of the `UL` list is watching that cell and will grow a new `LI`, and, thanks to again straightforward observers, so will the real client DOM. The matrix is supporting a matrix version of the web page that gets manifested to -- gives birth to -- the actual browser page.

Hence "matrix".

## A Gentle Walkthrough of TodoMVC
