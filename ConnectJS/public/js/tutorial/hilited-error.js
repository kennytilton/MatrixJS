/*
 * The MIT License
 *
 * Copyright 2016 Kenneth Tilton.
 *
 */

/* global tag, obsDbg, jsDom */

function hilitedError_0(hostId) {
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
    /*
     * In version _0 we will dump the HTML to the console for our
     * amusement and demonstrate that ciWeb can inject mid-document'\
     * if desired by specifying the Id of a dom element.
     */
    let ih = jsDom.toHTML()
        , host = hostId? document.getElementById(hostId) : document.body;
    clg('innerhtml: '+ih);
    
    if (host) {
        host.innerHTML = ih;
    } else {
        document.body.innerHTML = `<h4>Target DOM "${hostId}" not found.`;
    }
}

function hilitedError_1(hostId) {
    document.body.innerHTML =
        tag('section', {kids: cKids(c=> {
            return [ h1(`A Tiny Registration Panel`)
                    , div( {kids: cKids(c=>{
                        return [ label("Username:")
                                , input({ val: cI(""
                                            // use debug observer to confirm the action
                                            , {observer: obsDbg})
                                        , oninput: 'unameGlue'                                        , margin: '6px'
                                        , autofocus: true
                                        , placeholder: "No bangs, please."})
                                ];
                            })})
                    , button("Register", {
                        onclick: "(function () {alert('Registering!!');})"})
                    ];
            })}).toHTML();
}

function unameGlue (dom, e) {
    let md = jsDom[dom.id]; // find the "shadow" JS object matching the event dom
    md.val = dom.value; // move value from dom world to js world for dataflow
}

function hilitedError_2(hostId) {
    document.body.innerHTML =
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
                                        })
                                        , oninput: 'unameGlue'                                        , margin: '6px'
                                        , autofocus: true
                                        , placeholder: "No bangs, please."})
                                ];
                            })})
                    , button("Register", {
                        onclick: "(function () {alert('Registering!!');})"})
                    ];
            })}).toHTML();
}

function hilitedError_3(hostId) {
    document.body.innerHTML =
        tag('section', {kids: cKids(c=> {
            return [ h1(`A Tiny Registration Panel`)
                    , div( {kids: cKids(c=>{
                        return [ label("Username:")
                                , input({ name: 'uname'
                                        , val: cI(""
                                            // use debug observer to confirm the action
                                            , {observer: obsDbg})

                                        , userError: cF(c=>{
                                            return (c.md.val.indexOf("!") === -1)? null:
                                                    "&lt;ahem&gt; No bangs, please.";
                                        })                                        
                                        , color: cF(c=>{
                                            return c.md.userError ? 'red':'black';
                                        })
                                        , oninput: 'unameGlue'                                        , margin: '6px'
                                        , autofocus: true
                                        , placeholder: "No bangs, please."})
                                ];
                            })})
                    , div( {margin:'9px'
                        , kids: cKids(c=>{
                            let uerr = c.fm('uname').userError;
                            clg('uerr? '+uerr);
                            return uerr ? [label(uerr)]:[];})})
                    , button("Register", {
                        onclick: "(function () {alert('Registering!!');})"})
                    ];
            })}).toHTML();
}

function hilitedError(hostId) {
    document.body.innerHTML =
        tag('section', {kids: cKids(c=> {
            return [ h1(`A Tiny Registration Panel`)
                    , div( {kids: cKids(c=>{
                        return [ label("Username:")
                                , input({ name: 'uname'
                                        , val: cI(""
                                            // use debug observer to confirm the action
                                            , {observer: obsDbg})

                                        , userError: cF(c=>{
                                            return (c.md.val.indexOf("!") === -1)? null:
                                                    "&lt;ahem&gt; No bangs, please.";
                                        })                                        
                                        , color: cF(c=>{
                                            return c.md.userError ? 'red':'black';
                                        })
                                        , oninput: 'unameGlue'                                        , margin: '6px'
                                        , autofocus: true
                                        , placeholder: "No bangs, please."})
                                ];
                            })})
                    , div( {margin:'9px'
                        , kids: cKids(c=>{
                            let uerr = c.fm('uname').userError;
                            clg('uerr? '+uerr);
                            return uerr ? [label(uerr)]:[];})})
                    , button("Register", {
                        disabled: cF(c=>{let unm = c.fm('uname');
                                    return (unm.val.length===0) || unm.userError
                                    ;})
                        , onclick: "(function () {alert('Registering!!');})"})
                    ];
            })}).toHTML();
}

