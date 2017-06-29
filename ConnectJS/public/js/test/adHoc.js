
deftest('true-raw', x=>{
    let a = attrsBuild('style="background-color:#ff0;padding:6px"');
    izz(x=>{ return a === 'style="background-color:#ff0;padding:6px"';});
});

deftest('just-style-string', x=>{
    let tgt = 'style="color:#f00;background-color:#fff;margin:4px;"'
    , a = attrsBuild({style: 'color:#f00;background-color:#fff;margin:4px;'});
    izz(x=>{ setDiag(a); return tgt.length = a.length;});

    izz(x=>{ setDiag(a);
        return a === tgt;});         
});

deftest('multi-attr', x=>{
    let a = attrsBuild({onclick: "shazzam()"
                        , style: 'color:#f00;background-color:#fff;margin:4px'});
    izz(x=>{return a === 'onclick="shazzam()" style="color:#f00;background-color:#fff;margin:4px"';});         
});

deftest('monti-attr', x=>{
    let a = attrsBuild({onclick: "shazzam()"
                        , style: {color: '#f00'
                                , 'background-color' : '#fff'
                                , margin: '4px'}});
    izz(x=>{setDiag(a);
        return a === 'onclick="shazzam()" style="color:#f00;background-color:#fff;margin:4px"';});         
});
testRun('true-raw');
testRun('just-style-string');
testRun('multi-attr');
testRun('monti-attr');

/*
 *     for (x=0; x < a.length; ++x) {
        if (a[x]!==tgt[x]) {
            clg(`nope at ${x} with tgt ${tgt[x]} actual ${a[x]}`);
            break;
        }
    }
 */