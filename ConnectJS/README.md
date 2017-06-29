# ciWeb
Welcome to ciWeb, a lightweight but powerful JS web development framework with Cells Inside(tm). Hence the "ci".

#### Our chops
We have done this before, and built enterprise applications this way. Here is [the latest](http://tiltonsalgebra.com/#).

[Cells](https://github.com/kennytilton/cells) is a mature, largely transparent databinding library that began in 1996 as a Common Lisp library and has since been ported to Clojure/ClojureScript as [Rube](https://github.com/kennytilton/rube) and now Javascript as [jCells](https://github.com/kennytilton/jCells). It has been used to drive application development frameworks wrapping Macintosh [QuickDraw](https://en.wikipedia.org/wiki/QuickDraw), Windows GDT, Tcl/Tk as [Celtk](https://github.com/kennytilton/celtk), OpenGL (you read that correctly) as [Cello](https://github.com/kennytilton/Cello), Gtk as [Cells-Gtk](https://github.com/Ramarren/cells-gtk3), qooxdoo as [qooxlisp](https://github.com/kennytilton/qooxlisp), and qooxdoo mobile as [Qxia](https://github.com/kennytilton/qxia).

#### The ciWeb Design Imperatives
 * HTML and CSS shall be wrapped so thinly that we will not have to document anything other than the databinding. This will be [the doc](https://developer.mozilla.org/en-US/docs/Web/API) for the rest;
 * no preprocessing. Stackless. Just Javascript and jCells (itself just JS);
 * transparent databinding, reaching across the entire application model, embracing model as well as view, indeed rejecting the distinction; 
 * declarative and dynamic (thanks to the formulaic databinding); and
 * fast, with the theoretical minimum of DOM manipulation, without the diffing.

#### Getting Acquainted
Before we dig into the magic of Cells and the nitty-gritty of ciWeb, the reader might want to just follow along as I evolve a trivial bit of web work*. After that we will get acquainted with Cells. They might make more sense after you have seen how they are applied.

> *The idea for this exercise came from an engineer at a company I had approached for work. Along the way I got into a rant on Cells vs ReactJS and its problem with interdependency in a UI and he asked how I would use Cells to, oh, highlight something in red if the user violated some data entry rule. He offered specifically that an exclamation mark might be disallowed in some text entry field, so we wanted something to turn red if the user entered said character in said field. 

Let us build that. 

> The code for each iteration to come is [here](https://github.com/kennytilton/ciWeb/blob/master/public/js/tutorial/hilited-error.js), in functions named `hilitedError[_n]`. Please note that your author is new to hardcore JS and welcomes any edification the cognoscenti care to offer.

### Step 1 - Launching the demo
FWIW, I develop with NetBeans, opening the ciWeb directory as a NetBeans project and testing with **Run Main Project** aka **F6** aka the little green triangle in the toolbar. You can also just navigate to `ciWeb/js/Sources/public` and open `index.html` in your browser, but then you will need to edit the index.html to switch between iterations.

Launching index.html should bring up a mildly functional:

![hilitedError_0 pageshot](https://github.com/kennytilton/ciWeb/blob/master/public/image/hilitedError_0.png)

If you see something else, I probably committed index.html with a later script operational. The script tag in the body should invoke `hilitedError_0` and look like this:
````
<script>hilitedError_0();</script>`.
````
Let us take a look at the code behind that mini-page:
````
    let jsDom =
        tag('section', {kids: cKids(c=> {
            return [ h1(`A Tiny Registration Panel`)
                    , div( {kids: cKids(c=>{
                        return [ label("Username:")
                                , input({ margin: '6px'
                                        , autofocus: true
                                        , placeholder: "No bangs, please."})
                                ];
                            })})
                    , button("Register", {
                        onclick: "(function () {alert('Registering!!');})"})
                    ];
            })});
    document.body.innerHTML = jsDom.toHTML();
````

The only things to note here are:
 * functions such as `h1`, `div` and `input` and properties such as `margin` and `onclick` do their best to make ciWeb seem like HTML, said impersonation being one of ciWeb's prime design principles. Each function aping a tag returns a JS object corresponding to a DOM element, and each DOM-related property becomes a property of the JS object whose value will be passed along to the DOM element;
 * the generic generator `tag` (called directly by the dedicated functions) is used to generate the `section` tag. ie, If you wish I had code up more tags, just use `tag`; and
 * the `kids` property and `cKids` function, mechanisms by which we will be able to build Web pages that change shape as the user works. No need to dig into those yet, but that is what they do.

### It's (barely) alive!
Now let us look at the barest minimum of dataflow. Modify the script tag in `index.html` body to call `errorHilite_1`, reload, and have open the NetBeans "output" window (or browser console) as you type a username. You should see something like this if you type "Ken":
````
obsDbg! val null  (14:08:52:508)
  at public/js/Cells.js:852
obsDbg! val null K (14:09:00:835)
  at public/js/Cells.js:852
obsDbg! val null Ke (14:09:01:096)
  at public/js/Cells.js:852
obsDbg! val null Ken (14:09:01:306)
  at public/js/Cells.js:852
````
What is up with that? Let us look at just the relevant code:
````
tag('section', {kids: cKids(c=> {
    return [ h1(`A Tiny Registration Panel`)
            , div( {kids: cKids(c=>{
                return [ label("Username:")
                        , input({ val: cI(""
                                    // use debug observer to confirm the action
                                    , {observer: obsDbg})
                                , oninput: 'unameGlue'
                                , margin: '6px'
                                , autofocus: true
                                , placeholder: "No bangs, please."})
                        ];
````
...and:
````
function unameGlue (dom, e) {
    let md = jsDom[dom.id]; // find the JS object matching the dom element
    md.val = dom.value; // move value from dom world to js world for dataflow
}
````
There is quite a bit going on:
 * The JS incarnation of the input element gets a new property, `val`. That one gets used allll the time so I like it short. I am new to JS so I also worry about collisions with the DOM `value` property if I call it that.
 * `val` is bound to a so-called "input" Cell (`cI` for short) which:
   * is initialized to the empty string;
   * given a generic so-called `observer` function `obsDbg` which writes useful information to the console for debugging; and
   * has nothing to do with "input" as a tag name; input Cells are how data gets into the Cell model (it cannot be formulas all the way down).
 * The `input` element is given an `onclick` handler that does nothing more than pipe data from the DOM element to its JS incarnation as the user types, kicking off the observer on the JS object's property `val`. ie, It's alive!

Well, it is alive, but only the console knows it. Let us turn "red", albeit taking only a baby step in that direction. 
### Turning Red
Modify the script tag to invoke `hilitedError_2`, reload, and type `Hi, Mom!`. The text you just typed should turn red when you type the bang (!). If the red text is too scary, just delete the bang. Now let us see the code behind that, again just the relevant snippet:
````
tag('section', {kids: cKids(c=> {
    return [ h1(`A Tiny Registration Panel`)
            , div( {kids: cKids(c=>{
                return [ label("Username:")
                        , input({ val: cI(""
                                    // use debug observer to confirm the action
                                    , {observer: obsDbg})
                                , userError: cF(c=>{
                                    return (c.md.val.indexOf("!") !==-1);
                                })
                                , color: cF(c=>{
                                    return c.md.userError ? 'red':'black';
                                }) ...etc
````
The only new bits are at the end, two new properties `userError` and `color` on the JS input object. Here are the noteworthy bits in that code:
 * `cF` translates to "formulaic Cell";
 * the argument to our formula will be the Cell object, which knows inter alia the JS object (aka "model", alias "md") whose property it mediates. We call this parameter `c`, and the JS object is `c.md`;
 * our computed `userError` is not very informative just yet, merely `true` (meaning yes, there is an error) or `false`; and
 * our algorithm to compute `color` is straightforward.

But that is the boring stuff. Here is the fun stuff:
 * the DOM text color changes when the JS property `color` changes because ciWeb has built-in observers that pipe JS object state changes to their associated DOM elements; and
 * no visible wiring is needed to arrange for a formula to be re-run. The `userError` formula simply reads the `val` property, the `color` property simply reads the `userError` property, and shazzam! the dependencies are established. We did not harp on it at the time, but looking back at `unameGlue`, the simple assignment `md.val = dom.value` suffices to kick off a cascade of dataflow. Magic? Nah, just JS getters and setters you can find in [the Model ](https://github.com/kennytilton/ciWeb/blob/master/public/js/Model.js) at about line 70.

OK, not bad, but our curious engineer wanted to see dataflow *between objects* and above we just have simple dataflow between properties of the same input element. Baby steps.
### No object is an island
Please now modify the script tag to invoke `hilitedError_3`, reload, and again give Mom a shout-out, "Hi, Mom!". That's one small difference for our page...:

![hilitedError_0 pageshot](https://github.com/kennytilton/ciWeb/blob/master/public/image/hilitedError_3.png)

...one giant leap for dynamic web pages and better U/Xes. 

First, no big deal, a more helpful error:
````
    , userError: cF(c=>{
        return (c.md.val.indexOf("!") === -1)? null:
                "&lt;ahem&gt; No bangs, please.";
    })    
````
but now the salient beef:
````
    , div( {margin:'9px'
        , kids: cKids(c=>{
            let uerr = c.fm('uname').userError;
            return uerr ? [label(uerr)]:[];})})
````
We could just make the label visible when there is an error to be displayed (and in this case that would be preferable to avoid the elements jumping about) but I just wanted to make the point (and was too lazy to think up a valid use case*): we can dynamically alter the very population of our models/UIs as state changes, not merely the properties of those models.

> *Well, a valid use case would be erecting a huge wodge of DOM that is needed only after the user has done something to indicate we need that DOM, and we do not want to get into all that.

> Wondering about the extra `div` wrapping our conditionally extant error label? This gets a little technical jCells-wise, but that snippet makes the `div` the third child of a larger `div` holding the label and input fields. We do not want to regenerate all that dom (clearing the input field!) when the user makes an error, so we need to provide structural granularity yielding dependency granularity. This is about as non-transparent as `ciWeb` gets.

### All In the Family
The sharp-eyed reader will have noticed the expression `c.fm('uname').userError`. You can read that as "search my extended family (hence `fm`) of objects for the nearest named 'uname' and read its `userError`". The idea is simple: for me to depend on a property of something else I must first track down the thing in which I am interested, then ask it for its property value. We will dig into the substantial "family" API as needed, but for now think "CSS selector"*, ie, a flexible way to reference other things by some quality so we are not hard-coding things like "the second child of my parent's next sibling". 

* One could indeed use CSS selectors to locate DOM objects and their JS correlates to then dependently access Cell-mediated properties. It depends on the use case. For example, often I am writing code for a widget that will be spawned in groups, one per a list of data items. In that case, I want the widget of a given name or widget *local to my group* so the search is outwards from myself to the first match. ie, we need something more controllable than CSS selectors.

OK, not too shabby, but have you noticed something about the "Register" button? It is always active! Terrible U/X. Let us attend to that.
### What a Tangled Web We Weave...
We turn to our final version, modifying the script tag to invoke our final version, simply `hilitedError`. Reloading the page, we see the "Register" button is disabled if the Username is blank or faulty. The code looks like this:
````
    , button("Register", {
        disabled: cF(c=>{let unm = c.fm('uname');
                    return (unm.val.length===0) || unm.userError;})
        , onclick: "(function () {alert('Registering!!');})"})
````
Two points of information in re the above:
 * a bit of jCells internal-ese, and just a curiosity: until the user has typed something, the second test for an error will be short-circuited by the behavior of Javascript's `or` and no dependency will be established on the `userError` property. ie, Dependencies are determined dynamically when a value is read, not lexically as in frameworks that work by code "lifting".
 * another approach here would be to leave the button enabled all the time and have the userError formula generate an error "Username cannot be blank." if they transgress. This way instead of the button mysteriously being disabled they can click it and get a full explanation of the problem. Just sayin. 
 
There is, methinks, quite a moral or two here, explaining the obscure "tangled web" reference:
 * even simple examples naturally lead to dependency upon dependency, and they do so exponentially as our UIs become richer: the more elements we have, the more likely it is they will need to cooperate;
 * when state dependency is easily expressed, U/X niceties are easily implemented and more likely to be delivered.

### Summary
With no tooling or preprocessing we have full access to anything a browser can do (via untrammeled access to HTML and CSS) in a pure JS framework extended by mostly transparent databinding. The fine granularity of the dependency tracking behind said databinding lets us update the DOM minimally, without diffing. 

More importantly, the databinding provides a declarative paradigm that decomposes the complexity of sophisticated UIs such that the usual exponential explosion of state dependency remains linear. U/X designers and developers move from struggling to express trivial interactions to implementation as trivial and fast. We build better apps and bring Web app development within the reach of graphic designers.

Lets go for beers.



