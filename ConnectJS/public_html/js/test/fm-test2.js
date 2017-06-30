console.log('fm test loading');



deftest('fm-2', xx=>{
    let u = mkm( null, 'uni', {}
            , md=>{ return [
                mkm( md, 'aa')
                , mkm( md, 'bb', {}
                    , md=>{return [
                            mkm( md, 'bba')
                            , mkm( md, 'bbb')];})];});
        ast(u);
        let bba = u.fm('bba', {insidep: true, mustp: true},'bba');
        izz(x=>{return bba && bba.name==='bba';});
        izz(x=>{return u.fm('yaya', {},'bba');});
        izz(x=>{return bba.fm('uni', {upp: true, insidep: true});});
        izz(x=>{return bba.fm('aa', {upp: true, insidep: false});});
        izz(x=>{return bba.fm('bb', {upp: true, insidep: true});});
        izz(x=>{return bba.fm('bbb', {upp: true, insidep: false});});
        });

function noNil(a){
    let nn = a.filter(e=> {return !!e;});
    clg('nonil rets', nn);
    return nn;
}

function obsKids(name, me, newv, priorv, c) {
    console.log('kids!!! '+me.name);
    console.log(newv);
    console.log(Array.from(arguments));
//    console.log(`OBS: ${name} now ${newv} (was ${priorv})`);
}
deftest('fm-3', xx=>{
  let u = mkm( null, 'uni', {
            u63: cF(c=>{ return c.fmd('aa').aa42 +
                                c.fmd('bb').bb21;})
            , kon: cI( false)
            , kids: cF(c=>{return noNil([
                    mkm(c.md, 'aa', {
                        aa42: cF(c=>{ return 2 * c.fm('bb').bb21;})
                        , aa3: cI(3)})
                    , (c.md.kon ? mkm(c.md, 'konzo', {kzo: cI(3)}) : null)
                    , mkm(c.md,'bb', {
                        bb21: cF(c=>{ return 7 * c.fm('aa').aa3;})
                    })]);})});
    clg('got u',u);
    izz(x=>{ return u.u63 === 63;});
    izz(x=>{ return u.fmd('aa').aa42 === 42;});
    izz(x=>{ return u.fmd('bb').bb21 === 21;});
    izz(x=>{ return !u.fmd('konzo','konzo',{mustp: false});});
    u.kon = true;
    izz(x=>{ return u.fmd('konzo');});

   });
   
deftest('fm-picker2',x=>{
  let u = mkm(null,'uni',{}
            , c=>{
                return [ mkm(c.md, 'picker'
                            , {value: cI(42)}
                            , c=>{return [
                                    mkm(c.md,'aax')
                                    , mkm(c.md,'bbx')];})
                            
                        , mkm(c.md,'dd'
                                , {kzo: cF(c=>{
                                        let p = c.fm('picker'
                                                ,{mustp: true
                                                  , upp: true
                                                  , insidep:false});
                                        return p.value;
                                    })})
                            ];});
    izz(xx=>{ return u.fmd('picker').value === 42;});
    izz(xx=>{ return u.fmd('dd');});
    izz(xx=>{ return u.fmd('dd').kzo === 42;});
    clg('picker ok');
});

//testRun('fm-2');
//testRun('fm-3');
//testRun('fm-picker2');
//clg('tests OK');