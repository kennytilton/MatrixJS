deftest('hello-model'
    , xx=>{
        let uni = mkm(null,'uni', {}
        , c=>{
            return [mkm(c.md,'visitor'
                        , {moniker: "World"
                        , action: cI(null, {ephemeral: true
                                            , observer: (slot, me, newv)=>{
                                                if (newv) {
                                                    clg(`visitor-did ${newv}`);
                                                }}})})
                    , mkm( c.md, 'resident'
                            , {action: cIe(null)
                            , location: cF(c=>{
                                switch (c.md.action) {
                                    case 'leave': return 'away';
                                    case 'return': return 'home';
                                    default: return 'missing';
                                }}, {obsever: (slot, me, newv)=>{
                                        if (newv)
                                            clg(`Honey, I'm ${newv}!`);}})
                            , response: cF(c=>{
                                if (c.md.location==='home') {
                                    let viz = c.fm('visitor');
                                    if (viz.action === 'knock-knock')
                                        return `Hello, ${viz.moniker}.`;
                                }}, {ephemeral: true
                                    , observer: (slot, me, newv)=>{
                                        if (newv) {
                                            clg(`Resident says, ${newv}`);
                                        }}})})
                    , mkm( c.md, 'alarm'
                        , {onOff: cF(c=>{
                                    return c.md.fm('resident').location==='home'? 'off':'on';
                            }, {observer: (s, m, newv)=>{
                                    clg(`Telling alarm API ${newv}`);
                            }})
                            , activity: cF(c=>{
                                if (c.md.onOff==='on') {
                                    let action = c.md.fm('visitor').action;
                                    switch (action) {
                                        case 'smashing-window':
                                            return 'call-police';
                                        default:
                                            return null;
                                    }
                                }
                            },{observer: (s, m, newv)=>{
                                    switch (newv) {
                                        case 'call-police':
                                            clg('auto-dialing 911');
                                    }
                            }})})];
                });

    let viz = uni.fmd('visitor')
        , rez = uni.fmd('resident');
        
        izz(x=>{return viz;});
        izz(x=>{return rez;});
        izz(x=>{return rez.location === 'missing';});
        viz.action='knock-knock';
        viz.action='smashing-window';
        rez.action = 'return';
        izz(x=>{return rez.location === 'home';});
        viz.action='knock-knock';
    });

//testRun('hello-model');
//
//clg('HelloModel OK!!!');