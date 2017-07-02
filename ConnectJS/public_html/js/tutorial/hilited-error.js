/*
 * The MIT License
 *
 * Copyright 2016 Kenneth Tilton.
 *
 */

/* global tag, obsDbg, jsDom */

function hilitedError_0() {
    return section( {padding: "36px"}, c=>{return [
        h3(`Registration Panel Zero`)
        , div({}, c => { return [
            label("Username:")
            , input({margin: '6px'
                , autofocus: true
                , placeholder: "No bangs, please."
            })
        ]})
        , button("Register", { class: "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                            , onclick: "(function () {alert('Registering!!');})"})
        ]
    })
}

function hilitedError_1() {
    return section({}, c => {return [
            h2(`Registration Panel One`)
            , div( {}, c => {return [
                    label("Username:")
                    , input({
                        val: cI(""
                            // use debug observer to confirm the action
                            , {observer: obsDbg})
                        , oninput: 'unameGlue'
                        , margin: '6px'
                        , autofocus: true
                        , placeholder: "No bangs, please."
                    })
                    , button("Register", {
                        onclick: "(function () {alert('Registering!!');})"
                    })
                ]
            })
        ]
    })
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
                                , input({ val: cI("")
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
            return [ h1(`Registration Panel`, {margin: "36px", padding: "12px"})
                    , div( {marginLeft: "48px"
                        , kids: cKids(c=>{
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
                                        , oninput: 'unameGlue'
                                        , margin: '6px'
                                        , autofocus: true
                                        , placeholder: "No bangs, please."})
                                ];
                            })})
                    , div( {margin:'9px'
                        , id: 42
                        , kids: cKids(c=>{
                            let uerr = c.fm('uname').userError;
                            clg('uerr? '+uerr);
                            return uerr ? [label(uerr)]:[];})})
                    , button("Register", {
                        class: "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                        , onclick: "(function () {alert('Registering!!');})"})
                    ];
            })}).toHTML();
}

function he3(hostId) {
    return tagx('section'
            , {name: "section42"}
            , c=> {return [
                divx( { name: "div.uname", marginLeft: "48px"}, c=>{return [
                    input({ name: 'uname'
                        , val: cI("")
                        , userError: cF(c=>{
                            return (c.md.val.indexOf("!") === -1)? null:
                                "&lt;ahem&gt; No bangs, please.";
                        })
                        , color: cF(c=>{return c.md.userError ? 'red':'black';})
                        , oninput: 'unameGlue'
                        , margin: '6px'
                        , autofocus: true
                        , placeholder: "No bangs, please."})
                ];})
                , divx( {name: "div.uerr", margin:'9px'}, c=>{
                    let uerr = c.fm('uname').userError;
                    // dynamic model!
                    clg('uerr? '+uerr);
                    return uerr ? [label(uerr, {name: "uerr"})]:[];
                })
            ];
    })
}


function hilitedError(hostId) {
    document.body.innerHTML =
        section( { padding: "36px"}
            , c=>{ return [
                h2(`A Registration Panel`)
                , divx({ class: "mdl-textfield mdl-js-textfield"} 
                    , c=>{ return [
                            input({
                                class: "mdl-textfield__input"
                                , type: "text"
                                , id: "sample1"
                                //, name: 'uname'
                            })
                            , label("Text...", {
                                class: "mdl-textfield__label"
                                , for: "sample1"
                            })
                        ]})
                , divx( {}
                    , c=>{ return [
                            label("Username:")
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
                                    , oninput: 'unameGlue'
                                    , margin: '6px'
                                    , autofocus: true
                                    , placeholder: "No bangs, please."})
                                ];
                            })
                , divx( {margin:'9px'}
                    , c=>{
                        clg('oops '+c.md.id);
                        clg('oops par '+c.md.par);
                        let uerr = c.fm('uname').userError;
                        clg('uerr? '+uerr);
                        return uerr ? [label(uerr)]:[];})
                , button("Register", {
                        class: "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                        , onclick: "(function () {alert('Registering!!');})"})
                ];
            }).toHTML();
}




