# matrix

[MatrixJS](https://github.com/kennytilton/MatrixJS) for ClojureScript.

## Overview

Matrix combines ClojureScript, a thin HTML generator, and the CLJS version of Cells to produce a simple but powerful and efficient CLJS Web/mobile development framework. A sister project of the pure JS [js/matrixjs](https://github.com/kennytilton/MatrixJS/tree/master/js/matrixjs) framework.

## Setup 

This project was created from David Nolen's excellent [mies template](https://github.com/swannodette/mies). Here we reproduce the critical elements of the setup instructions from that template:

> Most of the following scripts require [rlwrap](http://utopia.knoware.nl/~hlub/uck/rlwrap/) (on OS X installable via brew).
>
> Build your project once in dev mode with the following script and then open `index.html` in your browser.
>
>    ./scripts/build
>
> To auto build your project in dev mode:
>
>    ./scripts/watch

Now just open matrix/index.html in Chrome or Safari on Mac OS X. Other environments have not been tested.

## Documentation

We will start by adding a walkthrough of the TodoMVC code over in the pure JS [js/matrixjs](https://github.com/kennytilton/MatrixJS/tree/master/js/matrixjs) framework, so head over there to get started. That closely parallels the CLJS TodoMVC. 

What will be different are the property readers and writers needed for the dataflow engine to work. In JS we are able to hide that glue behind custom property accessors, In CLJS we will have to develop macros to provide accessors that hide the Cells wiring. Also, the "family" navigation functions that stand in for standard CSS selectors in ways vital to the dataflow lifecycle have yet to be standardized between the JS and CLJS versions, so brace for differences there.

## License

Copyright © 2017 by Kenneth Tilton

Distributed under the MIT license.
