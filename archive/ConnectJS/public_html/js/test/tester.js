/**
 * Created by Kenneth on 9/5/2016.
 */



//@formatter:off

function find(x,y) {
    if (y.indexOf(x) !== -1) {
        return x;
    }
}
function clg() {console.log(Array.from(arguments).join(","));}
function ast (test, msg) {console.assert(test,msg);}

var testName = '???';
var diag = null;
function setDiag(d) { diag = d? d.toString():'nada';}

function izz(fn) {
    diag = null;
    if (!fn()) {
        console.log(`${testName} FAIL:\n ${fn.toString()}\nDIAG: ${diag}`);
        throw 'boom';
    } else clg('cool: ', fn.toString());
}

var test = {};

function deftest(name,fn) {
    test[name] = fn;
}

function testRun(name) {
    if (!test[name]) throw `no such test as ${name}`;
    testName=name;
    clg(`Testing ${name}`);
    cellsReset();
    test[name]();
}

function testRunAll() {
    for (let name of Object.keys(test))
        testRun(name);
}

function usedct(c) {return c.useds.size;}
function callerct(c) {return c.callers.size;}

//module.exports.clg = clg;
//module.exports.ast = ast;
//module.exports.find=find;
//module.exports.diag = diag;
//module.exports.setDiag = setDiag;
//module.exports.izz = izz;
//module.exports.deftest = deftest;
//module.exports.testRun = testRun;
//module.exports.testRunAll = testRunAll;
//module.exports.usedct = usedct;
//module.exports.callerct = callerct;
