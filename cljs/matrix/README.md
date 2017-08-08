# MatrixCLJS

MatrixCLJS combines ClojureScript, a thin HTML generator, and the CLJS version of Cells to produce a simple but powerful and efficient CLJS Web development framework. Head to [the mother page](https://github.com/kennytilton/MatrixJS) for an overview, including motivation for the name "matrix". A sister project built of straight JS can be [found here](https://github.com/kennytilton/MatrixJS/tree/master/js/matrixjs) framework. 

This project is at once an implemention of the [TodoMVC classic](https://github.com/tastejs/todomvc-app-template) and (for now) the official version of both Matrix and Cells for CLJS. We call ours `TodoSSB` because our design imperative eschews exploding things along MVC lines in favor of keeping everything related to one application behavior together. "SSB" stands for "single source of behavior", with a nice pun in there because by "source" we mean a single block of lexical source.

## Setup 

This project was created from David Nolen's excellent [mies template](https://github.com/swannodette/mies). Follow these the critical elements of the setup instructions from that template:

> Most of the following scripts require [rlwrap](http://utopia.knoware.nl/~hlub/uck/rlwrap/) (on OS X installable via brew).
>
> Build your project once in dev mode with the following script and then open `index.html` in your browser.
>
>    ./scripts/build
>
> To auto build your project in dev mode:
>
>    ./scripts/watch

Now just open `matrix/index.html` in Chrome or Safari on Mac OS X. Other environments have not been tested.

## Documentation
A design goal is for the `Tag` html generator to work exactly like HTML, so much of the documentation is over [at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). As for the rest, we will start by adding a walkthrough of the TodoSSB code over in the pure JS [js/matrixjs](https://github.com/kennytilton/MatrixJS/tree/master/js/matrixjs) framework. Please use that to get started. It closely parallels the CLJS TodoSSB. 

What will be different are the property readers and writers needed for the dataflow engine to work. In JS we are able to hide that glue behind custom property accessors, In CLJS we will have to develop macros to provide accessors that hide the Cells wiring. Also, the "family" navigation functions that stand in for standard CSS selectors in ways vital to the dataflow lifecycle have yet to be standardized between the JS and CLJS versions, so brace for differences there.

## License

Copyright © 2017 by Kenneth Tilton

Distributed under the MIT license.
