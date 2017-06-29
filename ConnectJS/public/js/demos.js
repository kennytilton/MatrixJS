
/* global kUnbound, XobsDbg, jsDom */

var kSelMgr = Symbol("selMgr");

function ciSandbox(hostId) {
    console.assert(typeof hostId !== 'number'
        ,"Please use string IDs for hosts, ciWeb uses numbers internally. Thx.");
        
    let host = document.getElementById(hostId);
    console.assert(host, `Host ID ${hostId} not found via getElementById`);
    
    let jsDom =
        tag('section', {
            name: 'ciWeb '+ host.id
            , id: hostId
            , backgroundColor: '#ff0'
            , padding: '6px'
            , kids: cKids(c=> {
                return [ h1(`Beezelbub!`, { name: 'beezer'
                            , click: cIe(null)
                            , onclick: 'setClick' // the name, not the fn!
                            , color: cF(c=>{ return c.md.clickCt < 2 ?
                                                        'blue':'red';})
                            , clickCt: cF(c=> {
                                let clk = c.md.click
                                , clr = c.fmUp('clearer').click;
                                return clr ? 0 : (c.pv===kUnbound? 2 : c.pv) +
                                                 (clk ? (clk.shiftKey ? -1 : 1) : 0);
                            })})
                        , div(null, {
                            name: 'dateSocket'
                            , showdater: cI(false)
                            , kids: cKids(c=>{
                                let ks = [];
                                ks.push( label('When?', {onclick: 'dateMe', name: 'whennnn'}));
                                if (c.md.showdater) {
                                    ks.push( datePicker({name:'dapicker!!!'}));
                                }
                                return ks;
                            })})
                        , label( cF(c=>{
                            let b = c.fmUp('beezer');
                            return 'Beezy Clicks so far '+b.clickCt;
                        }))
                        , button('Clear', { name: 'clearer'
                            , click: cIe(null)
                            , onclick: 'setClick(this,event)'
                            , marginLeft: '16px'
                            , disabled: cF(c=>{
                                // redecide disablement when clickCt changes
                                let ct = c.fmUp('beezer').clickCt
                                , dis = ct > 0 ? false:true;
                                return dis;
                            })})
                        , div(null, {
                            stash: {}
                            , mdType: kSelMgr
                            , name: 'clicksRow'
                            , kids: cF(c=>{
                                let ks=[], kct=c.fmUp('beezer').clickCt;
                                // cleverly avoid regenerating existing DOM
                                // an observer on the 'kids' property does
                                // the heavy lifting to get new ones in in
                                // the right order as well.
                                for (x=0; x < kct;++x) {
                                    let sx = c.md.stash[x];
                                    if (!sx) {
                                        c.md.stash[x] = sx =
                                            labelOption(c.md, x);
                                    }
                                    ks[x] = sx;
                                }
                                return ks;
                            })})
                        ];
            })});

    let ih = jsDom.toHTML();
    clg('ihtml top '+ih);
    host.innerHTML = ih;
}

function labelOption (par, x) {
    clg('labelopt par='+par);
    return label(`click-${x}`, {
        model: x
        , marginLeft: "16px"
        , onclick: 'optClick'
    }, par);
}

function dateMe (mdom, event) {
    let md = jsDom[mdom.id];
    md.par.showdater = !md.par.showdater;
}

function optClick (mdom, event) {
    let md = jsDom[mdom.id];
    ast(md);
    clg('cooloption '+Object.keys(md));
    let mgr = md.fmUp(kSelMgr,{},'selMgr');
    if (mgr) {
        clg(`yo mgr ${mgr}`);
        clg(mgr);
    }
    console.assert(mgr);
}