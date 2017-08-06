// Compiled by ClojureScript 1.9.473 {}
goog.provide('todomvc.core');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('bide.core');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.model.core');
goog.require('tiltontec.tag.html');
goog.require('tiltontec.tag.gen');
goog.require('todomvc.todo');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello, World XIX! ");


todomvc.core.router = bide.core.router.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"All","All",-2078402587)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/active",new cljs.core.Keyword(null,"Active","Active",-2079032146)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/completed",new cljs.core.Keyword(null,"Completed","Completed",402352227)], null)], null));
todomvc.core.app = cljs.core.atom.call(null,null);
todomvc.core.iroute = cljs.core.atom.call(null,null);
todomvc.core.on_navigate = (function todomvc$core$on_navigate(route,params,query){
if(cljs.core.truth_(cljs.core.deref.call(null,todomvc.core.app))){
return tiltontec.model.core.md_reset_BANG_.call(null,tiltontec.model.core.fmi_w_class.call(null,cljs.core.first.call(null,cljs.core.deref.call(null,todomvc.core.app)),"filters"),new cljs.core.Keyword(null,"selection","selection",975998651),cljs.core.name.call(null,route));
} else {
return cljs.core.reset_BANG_.call(null,todomvc.core.iroute,cljs.core.name.call(null,route));

}
});
todomvc.core.dobam = (function todomvc$core$dobam(e){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"bam","bam",-1976081919),e.type);
});
todomvc.core.landing_page = (function todomvc$core$landing_page(){
bide.core.start_BANG_.call(null,todomvc.core.router,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("todo","all","todo/all",885471764),new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),todomvc.core.on_navigate], null));

cljs.core.reset_BANG_.call(null,todomvc.todo.gTodo,todomvc.todo.td_load_all.call(null));

cljs.core.reset_BANG_.call(null,todomvc.core.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.tag.gen.make_tag.call(null,"section",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),"todoapp",new cljs.core.Keyword(null,"par","par",-61778778),new cljs.core.Keyword(null,"top","top",-1856271961)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"header","header",1759972661,null),cljs.core.list(new cljs.core.Keyword(null,"class","class",-2030961996),"header"),cljs.core.list(new cljs.core.Symbol(null,"h1","h1",-256355935,null),cljs.core.List.EMPTY,"todos!!"),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.list(new cljs.core.Keyword(null,"class","class",-2030961996),"new-todo",new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done???",new cljs.core.Keyword(null,"onkeypress","onkeypress",740819085),cljs.core.list(new cljs.core.Symbol("tiltontec.tag.gen","on-evt!","tiltontec.tag.gen/on-evt!",1719145427,null),new cljs.core.Symbol(null,"todomvc.core.todo-process-on-enter","todomvc.core.todo-process-on-enter",-733333176,null))))),cljs.core.list(new cljs.core.Symbol(null,"section","section",1340390001,null),cljs.core.list(new cljs.core.Keyword(null,"class","class",-2030961996),"main",new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"gTodo-items","gTodo-items",-2016305525,null)))))),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),"toggle-all",new cljs.core.Keyword(null,"class","class",-2030961996),"toggle-all",new cljs.core.Keyword(null,"input-type","input-type",856973840),"checkbox",new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"complement","complement",-913606051,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null)),cljs.core.list(new cljs.core.Symbol(null,"gTodo-items","gTodo-items",-2016305525,null))),new cljs.core.Keyword(null,"complete","complete",-500388775),new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822))),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"action","action",-811238024)),new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822))))),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.list(new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all",new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todomvc.core","td-completed-toggle-all","todomvc.core/td-completed-toggle-all",-124141611,null))),"Mark all as complete"),cljs.core.list(new cljs.core.Symbol(null,"ul","ul",291010124,null),cljs.core.list(new cljs.core.Keyword(null,"class","class",-2030961996),"todo-list",new cljs.core.Keyword(null,"kid-values","kid-values",575730341),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"gTodo-items","gTodo-items",-2016305525,null))),new cljs.core.Keyword(null,"kid-key","kid-key",-779444857),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__19272#","p1__19272#",544277317,null)], null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"p1__19272#","p1__19272#",544277317,null),new cljs.core.Keyword(null,"todo","todo",-1046442570))),new cljs.core.Keyword(null,"kid-factory","kid-factory",339890394),new cljs.core.Symbol(null,"mk-todo-item","mk-todo-item",-219115350,null)),cljs.core.list(new cljs.core.Symbol(null,"kid-values-kids","kid-values-kids",2028806910,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)))),cljs.core.list(new cljs.core.Symbol(null,"mk-dashboard","mk-dashboard",-308632428,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19305 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7955__auto__ = tiltontec.tag.gen.make_tag.call(null,"header",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"h1","h1",-256355935,null),cljs.core.List.EMPTY,"todos!!"),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.list(new cljs.core.Keyword(null,"class","class",-2030961996),"new-todo",new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done???",new cljs.core.Keyword(null,"onkeypress","onkeypress",740819085),cljs.core.list(new cljs.core.Symbol("tiltontec.tag.gen","on-evt!","tiltontec.tag.gen/on-evt!",1719145427,null),new cljs.core.Symbol(null,"todomvc.core.todo-process-on-enter","todomvc.core.todo-process-on-enter",-733333176,null)))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_19305,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19311 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7955__auto__ = tiltontec.tag.gen.make_tag.call(null,"h1",cljs.core.PersistentVector.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"todos!!")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_19311,me__$1,cache__$1,_STAR_par_STAR_19305,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19313 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"todos!!")));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19313;
}});})(_STAR_par_STAR_19311,me__$1,cache__$1,_STAR_par_STAR_19305,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7955__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"input",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),"new-todo",new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done???",new cljs.core.Keyword(null,"onkeypress","onkeypress",740819085),(function (){var fn_name__14813__auto__ = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"todomvc.core.todo-process-on-enter","todomvc.core.todo-process-on-enter",-733333176,null))].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.call(null,null,tiltontec.tag.gen.on_event_attr_template,fn_name__14813__auto__,cljs.core.List.EMPTY);
})()], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7955__auto__,_STAR_par_STAR_19311,me__$1,cache__$1,_STAR_par_STAR_19305,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19315 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.List.EMPTY));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19315;
}});})(x__7955__auto__,_STAR_par_STAR_19311,me__$1,cache__$1,_STAR_par_STAR_19305,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto____$1);
})(),x__7955__auto__);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19311;
}});})(_STAR_par_STAR_19305,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7955__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"section",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),"main",new cljs.core.Keyword(null,"hidden","hidden",-312506092),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"gTodo-items","gTodo-items",-2016305525,null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7955__auto__,_STAR_par_STAR_19305,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return (cljs.core.count.call(null,todomvc.todo.gTodo_items.call(null)) === (0));
});})(x__7955__auto__,_STAR_par_STAR_19305,me,cache))
)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),"toggle-all",new cljs.core.Keyword(null,"class","class",-2030961996),"toggle-all",new cljs.core.Keyword(null,"input-type","input-type",856973840),"checkbox",new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"complement","complement",-913606051,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null)),cljs.core.list(new cljs.core.Symbol(null,"gTodo-items","gTodo-items",-2016305525,null))),new cljs.core.Keyword(null,"complete","complete",-500388775),new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822))),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"action","action",-811238024)),new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822))))),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.list(new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all",new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todomvc.core","td-completed-toggle-all","todomvc.core/td-completed-toggle-all",-124141611,null))),"Mark all as complete"),cljs.core.list(new cljs.core.Symbol(null,"ul","ul",291010124,null),cljs.core.list(new cljs.core.Keyword(null,"class","class",-2030961996),"todo-list",new cljs.core.Keyword(null,"kid-values","kid-values",575730341),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"gTodo-items","gTodo-items",-2016305525,null))),new cljs.core.Keyword(null,"kid-key","kid-key",-779444857),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__19272#","p1__19272#",544277317,null)], null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"p1__19272#","p1__19272#",544277317,null),new cljs.core.Keyword(null,"todo","todo",-1046442570))),new cljs.core.Keyword(null,"kid-factory","kid-factory",339890394),new cljs.core.Symbol(null,"mk-todo-item","mk-todo-item",-219115350,null)),cljs.core.list(new cljs.core.Symbol(null,"kid-values-kids","kid-values-kids",2028806910,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Symbol(null,"cache","cache",403508473,null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7955__auto__,_STAR_par_STAR_19305,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19323 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7955__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"input",new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),"toggle-all",new cljs.core.Keyword(null,"class","class",-2030961996),"toggle-all",new cljs.core.Keyword(null,"input-type","input-type",856973840),"checkbox",new cljs.core.Keyword(null,"action","action",-811238024),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"complement","complement",-913606051,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null)),cljs.core.list(new cljs.core.Symbol(null,"gTodo-items","gTodo-items",-2016305525,null))),new cljs.core.Keyword(null,"complete","complete",-500388775),new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_19323,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19305,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.complement.call(null,todomvc.todo.td_completed),todomvc.todo.gTodo_items.call(null)))){
return new cljs.core.Keyword(null,"complete","complete",-500388775);
} else {
return new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822);
}
});})(_STAR_par_STAR_19323,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19305,me,cache))
),new cljs.core.Keyword(null,"checked","checked",-50955819),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"action","action",-811238024)),new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_19323,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19305,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
return cljs.core._EQ_.call(null,tiltontec.model.core.md_get.call(null,me__$2,new cljs.core.Keyword(null,"action","action",-811238024)),new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822));
});})(_STAR_par_STAR_19323,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19305,me,cache))
)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_19323,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19305,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19325 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.List.EMPTY));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19325;
}});})(_STAR_par_STAR_19323,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19305,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7955__auto____$2 = tiltontec.tag.gen.make_tag.call(null,"label",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all",new cljs.core.Keyword(null,"onclick","onclick",1297553739),(function (){var fn_name__14813__auto__ = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("todomvc.core","td-completed-toggle-all","todomvc.core/td-completed-toggle-all",-124141611,null))].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.call(null,null,tiltontec.tag.gen.on_event_attr_template,fn_name__14813__auto__,cljs.core.List.EMPTY);
})()], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Mark all as complete")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7955__auto____$1,_STAR_par_STAR_19323,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19305,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19327 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Mark all as complete")));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19327;
}});})(x__7955__auto____$1,_STAR_par_STAR_19323,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19305,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7955__auto____$3 = tiltontec.tag.gen.make_tag.call(null,"ul",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),"todo-list",new cljs.core.Keyword(null,"kid-values","kid-values",575730341),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"gTodo-items","gTodo-items",-2016305525,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7955__auto____$2,x__7955__auto____$1,_STAR_par_STAR_19323,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19305,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
return todomvc.todo.gTodo_items.call(null);
});})(x__7955__auto____$2,x__7955__auto____$1,_STAR_par_STAR_19323,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19305,me,cache))
),new cljs.core.Keyword(null,"kid-key","kid-key",-779444857),((function (x__7955__auto____$2,x__7955__auto____$1,_STAR_par_STAR_19323,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19305,me,cache){
return (function (p1__19272_SHARP_){
return tiltontec.model.core.md_get.call(null,p1__19272_SHARP_,new cljs.core.Keyword(null,"todo","todo",-1046442570));
});})(x__7955__auto____$2,x__7955__auto____$1,_STAR_par_STAR_19323,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19305,me,cache))
,new cljs.core.Keyword(null,"kid-factory","kid-factory",339890394),todomvc.core.mk_todo_item], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"kid-values-kids","kid-values-kids",2028806910,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7955__auto____$2,x__7955__auto____$1,_STAR_par_STAR_19323,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19305,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19329 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7955__auto____$3 = tiltontec.model.core.kid_values_kids.call(null,me__$2,cache__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto____$3);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19329;
}});})(x__7955__auto____$2,x__7955__auto____$1,_STAR_par_STAR_19323,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19305,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto____$3);
})(),x__7955__auto____$2);
})(),x__7955__auto____$1);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19323;
}});})(x__7955__auto__,_STAR_par_STAR_19305,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7955__auto____$2 = todomvc.core.mk_dashboard.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto____$2);
})(),x__7955__auto____$1);
})(),x__7955__auto__);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19305;
}}))),tiltontec.tag.gen.make_tag.call(null,"footer",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),"info"], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.List.EMPTY,"Double-click a todo to edit it."),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.List.EMPTY,"Created by <a href=\"http://tiltontec.com\">Kenneth Tilton</a>."),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.List.EMPTY,"Inspired by <a href=\"http://todomvc.com\">TodoMVC</a>."))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19330 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7955__auto__ = tiltontec.tag.gen.make_tag.call(null,"p",cljs.core.PersistentVector.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Double-click a todo to edit it.")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_19330,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19332 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Double-click a todo to edit it.")));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19332;
}});})(_STAR_par_STAR_19330,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7955__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"p",cljs.core.PersistentVector.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Created by <a href=\"http://tiltontec.com\">Kenneth Tilton</a>.")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7955__auto__,_STAR_par_STAR_19330,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19334 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Created by <a href=\"http://tiltontec.com\">Kenneth Tilton</a>.")));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19334;
}});})(x__7955__auto__,_STAR_par_STAR_19330,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7955__auto____$2 = tiltontec.tag.gen.make_tag.call(null,"p",cljs.core.PersistentVector.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Inspired by <a href=\"http://todomvc.com\">TodoMVC</a>.")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7955__auto____$1,x__7955__auto__,_STAR_par_STAR_19330,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19336 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Inspired by <a href=\"http://todomvc.com\">TodoMVC</a>.")));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19336;
}});})(x__7955__auto____$1,x__7955__auto__,_STAR_par_STAR_19330,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto____$2);
})(),x__7955__auto____$1);
})(),x__7955__auto__);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19330;
}})))], null));

return tiltontec.tag.html.to_html.call(null,cljs.core.deref.call(null,todomvc.core.app));
});

todomvc.core.mk_todo_item = (function todomvc$core$mk_todo_item(me,td){
return tiltontec.tag.gen.make_tag.call(null,"li",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todo","todo",-1046442570),td,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"todo-li","todo-li",-324226635),new cljs.core.Keyword(null,"class","class",-2030961996),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),new cljs.core.Symbol(null,"td","td",-1174502416,null)),"completed","")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(todomvc.todo.td_completed.call(null,td))){
return "completed";
} else {
return "";
}
})),new cljs.core.Keyword(null,"display","display",242065432),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sel","sel",-45623280,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"fmu-w-class","fmu-w-class",890486623,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"filters"),new cljs.core.Keyword(null,"selection","selection",975998651))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"sel","sel",-45623280,null),"All"),cljs.core.list(new cljs.core.Symbol(null,"xor","xor",520589273,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"sel","sel",-45623280,null),"Active"),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"td","td",-1174502416,null),new cljs.core.Keyword(null,"completed","completed",-486056503)))),"block","none"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var sel = tiltontec.model.core.md_get.call(null,tiltontec.model.core.fmu_w_class.call(null,me__$1,"filters"),new cljs.core.Keyword(null,"selection","selection",975998651));
if(cljs.core.truth_((function (){var or__7113__auto__ = cljs.core._EQ_.call(null,sel,"All");
if(or__7113__auto__){
return or__7113__auto__;
} else {
return tiltontec.util.core.xor.call(null,cljs.core._EQ_.call(null,sel,"Active"),tiltontec.model.core.md_get.call(null,td,new cljs.core.Keyword(null,"completed","completed",-486056503)));
}
})())){
return "block";
} else {
return "none";
}
}))], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),cljs.core.list(new cljs.core.Keyword(null,"class","class",-2030961996),"view"),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.list(new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"input-type","input-type",856973840),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"td","td",-1174502416,null),new cljs.core.Keyword(null,"completed","completed",-486056503))),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todomvc.todo","td-toggle-completed","todomvc.todo/td-toggle-completed",2069211291,null),cljs.core.list(new cljs.core.Symbol(null,"td-id","td-id",-220247725,null),new cljs.core.Symbol(null,"td","td",-1174502416,null))))),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.list(new cljs.core.Keyword(null,"ondblclick","ondblclick",1587196472),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todomvc.core","todo-start-editing","todomvc.core/todo-start-editing",668985,null))),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"td","td",-1174502416,null))),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.list(new cljs.core.Keyword(null,"class","class",-2030961996),"destroy",new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todomvc.todo","td-delete-by-key","todomvc.todo/td-delete-by-key",1973026668,null),cljs.core.list(new cljs.core.Symbol(null,"td-id","td-id",-220247725,null),new cljs.core.Symbol(null,"td","td",-1174502416,null)))))),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.list(new cljs.core.Keyword(null,"class","class",-2030961996),"edit",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"c?n","c?n",231848553,null),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"td","td",-1174502416,null))),new cljs.core.Keyword(null,"onblur","onblur",689939618),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todomvc.core","todo-edit","todomvc.core/todo-edit",401178567,null),cljs.core.list(new cljs.core.Symbol(null,"td-id","td-id",-220247725,null),new cljs.core.Symbol(null,"td","td",-1174502416,null))),new cljs.core.Keyword(null,"onkeydown","onkeydown",859512715),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todomvc.core","todo-edit","todomvc.core/todo-edit",401178567,null),cljs.core.list(new cljs.core.Symbol(null,"td-id","td-id",-220247725,null),new cljs.core.Symbol(null,"td","td",-1174502416,null))))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19356 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7955__auto__ = tiltontec.tag.gen.make_tag.call(null,"div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),"view"], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.list(new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"input-type","input-type",856973840),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"td","td",-1174502416,null),new cljs.core.Keyword(null,"completed","completed",-486056503))),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todomvc.todo","td-toggle-completed","todomvc.todo/td-toggle-completed",2069211291,null),cljs.core.list(new cljs.core.Symbol(null,"td-id","td-id",-220247725,null),new cljs.core.Symbol(null,"td","td",-1174502416,null))))),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.list(new cljs.core.Keyword(null,"ondblclick","ondblclick",1587196472),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todomvc.core","todo-start-editing","todomvc.core/todo-start-editing",668985,null))),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"td","td",-1174502416,null))),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.list(new cljs.core.Keyword(null,"class","class",-2030961996),"destroy",new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todomvc.todo","td-delete-by-key","todomvc.todo/td-delete-by-key",1973026668,null),cljs.core.list(new cljs.core.Symbol(null,"td-id","td-id",-220247725,null),new cljs.core.Symbol(null,"td","td",-1174502416,null))))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_19356,me__$1,cache){
return (function (slot_c_SHARP___$1){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19364 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7955__auto__ = tiltontec.tag.gen.make_tag.call(null,"input",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"input-type","input-type",856973840),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"td","td",-1174502416,null),new cljs.core.Keyword(null,"completed","completed",-486056503))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_19364,me__$2,cache__$1,_STAR_par_STAR_19356,me__$1,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
return tiltontec.model.core.md_get.call(null,td,new cljs.core.Keyword(null,"completed","completed",-486056503));
});})(_STAR_par_STAR_19364,me__$2,cache__$1,_STAR_par_STAR_19356,me__$1,cache))
),new cljs.core.Keyword(null,"onclick","onclick",1297553739),(function (){var fn_name__14813__auto__ = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("todomvc.todo","td-toggle-completed","todomvc.todo/td-toggle-completed",2069211291,null))].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.call(null,null,tiltontec.tag.gen.on_event_attr_template,fn_name__14813__auto__,(function (){var x__7955__auto__ = todomvc.todo.td_id.call(null,td);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})());
})()], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_19364,me__$2,cache__$1,_STAR_par_STAR_19356,me__$1,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19366 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.List.EMPTY));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19366;
}});})(_STAR_par_STAR_19364,me__$2,cache__$1,_STAR_par_STAR_19356,me__$1,cache))
));
return cljs.core._conj.call(null,(function (){var x__7955__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"label",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ondblclick","ondblclick",1587196472),(function (){var fn_name__14813__auto__ = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("todomvc.core","todo-start-editing","todomvc.core/todo-start-editing",668985,null))].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.call(null,null,tiltontec.tag.gen.on_event_attr_template,fn_name__14813__auto__,cljs.core.List.EMPTY);
})()], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"td","td",-1174502416,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7955__auto__,_STAR_par_STAR_19364,me__$2,cache__$1,_STAR_par_STAR_19356,me__$1,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19368 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7955__auto____$1 = todomvc.todo.td_title.call(null,td);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto____$1);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19368;
}});})(x__7955__auto__,_STAR_par_STAR_19364,me__$2,cache__$1,_STAR_par_STAR_19356,me__$1,cache))
));
return cljs.core._conj.call(null,(function (){var x__7955__auto____$2 = tiltontec.tag.gen.make_tag.call(null,"button",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),"destroy",new cljs.core.Keyword(null,"onclick","onclick",1297553739),(function (){var fn_name__14813__auto__ = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("todomvc.todo","td-delete-by-key","todomvc.todo/td-delete-by-key",1973026668,null))].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.call(null,null,tiltontec.tag.gen.on_event_attr_template,fn_name__14813__auto__,(function (){var x__7955__auto____$2 = todomvc.todo.td_id.call(null,td);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto____$2);
})());
})()], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7955__auto____$1,x__7955__auto__,_STAR_par_STAR_19364,me__$2,cache__$1,_STAR_par_STAR_19356,me__$1,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19370 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.List.EMPTY));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19370;
}});})(x__7955__auto____$1,x__7955__auto__,_STAR_par_STAR_19364,me__$2,cache__$1,_STAR_par_STAR_19356,me__$1,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto____$2);
})(),x__7955__auto____$1);
})(),x__7955__auto__);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19364;
}});})(_STAR_par_STAR_19356,me__$1,cache))
));
return cljs.core._conj.call(null,(function (){var x__7955__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"input",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),"edit",new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"td","td",-1174502416,null))),new cljs.core.Keyword(null,"input?","input?",-1792843173),true,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7955__auto__,_STAR_par_STAR_19356,me__$1,cache){
return (function (slot_c_SHARP___$1){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var _STAR_depender_STAR_19373 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{return todomvc.todo.td_title.call(null,td);
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_19373;
}});})(x__7955__auto__,_STAR_par_STAR_19356,me__$1,cache))
),new cljs.core.Keyword(null,"onblur","onblur",689939618),(function (){var fn_name__14813__auto__ = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("todomvc.core","todo-edit","todomvc.core/todo-edit",401178567,null))].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.call(null,null,tiltontec.tag.gen.on_event_attr_template,fn_name__14813__auto__,(function (){var x__7955__auto____$1 = todomvc.todo.td_id.call(null,td);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto____$1);
})());
})(),new cljs.core.Keyword(null,"onkeydown","onkeydown",859512715),(function (){var fn_name__14813__auto__ = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("todomvc.core","todo-edit","todomvc.core/todo-edit",401178567,null))].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.call(null,null,tiltontec.tag.gen.on_event_attr_template,fn_name__14813__auto__,(function (){var x__7955__auto____$1 = todomvc.todo.td_id.call(null,td);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto____$1);
})());
})()], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7955__auto__,_STAR_par_STAR_19356,me__$1,cache){
return (function (slot_c_SHARP___$1){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19374 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.List.EMPTY));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19374;
}});})(x__7955__auto__,_STAR_par_STAR_19356,me__$1,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto____$1);
})(),x__7955__auto__);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19356;
}})));
});
todomvc.core.mk_dashboard = (function todomvc$core$mk_dashboard(){
return tiltontec.tag.gen.make_tag.call(null,"footer",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),"footer",new cljs.core.Keyword(null,"hidden","hidden",-312506092),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"gTodo-items","gTodo-items",-2016305525,null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return (cljs.core.count.call(null,todomvc.todo.gTodo_items.call(null)) === (0));
}))], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),cljs.core.list(new cljs.core.Keyword(null,"class","class",-2030961996),"todo-count",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol("pp","cl-format","pp/cl-format",-1229841582,null),null,"<strong>~a</strong>  item~:P remaining",cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),cljs.core.list(new cljs.core.Symbol(null,"gTodo-items","gTodo-items",-2016305525,null)))))))),cljs.core.list(new cljs.core.Symbol(null,"ul","ul",291010124,null),cljs.core.list(new cljs.core.Keyword(null,"class","class",-2030961996),"filters",new cljs.core.Keyword(null,"selection","selection",975998651),cljs.core.list(new cljs.core.Symbol(null,"c-in","c-in",517820292,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"iroute","iroute",-2094779295,null)),"All"))),cljs.core.list(new cljs.core.Symbol(null,"doall","doall",988520834,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Symbol(null,"route","route",1970422836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active","#/active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed","#/completed"], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"li","li",-1930876848,null),cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"fm-asc-tag","fm-asc-tag",-1695955000,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"ul"),new cljs.core.Keyword(null,"selection","selection",975998651)))),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"selected","selected",574897764)),"selected",""))),new cljs.core.Symbol(null,"label","label",-936024965,null)))))),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.list(new cljs.core.Keyword(null,"class","class",-2030961996),"clear-completed",new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),cljs.core.list(new cljs.core.Symbol(null,"gTodo-items","gTodo-items",-2016305525,null)))))),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todomvc.todo","td-clear-completed","todomvc.todo/td-clear-completed",727146457,null))),"Clear completed"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19494 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7955__auto__ = tiltontec.tag.gen.make_tag.call(null,"span",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),"todo-count",new cljs.core.Keyword(null,"content","content",15833224),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("pp","cl-format","pp/cl-format",-1229841582,null),null,"<strong>~a</strong>  item~:P remaining",cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),cljs.core.list(new cljs.core.Symbol(null,"gTodo-items","gTodo-items",-2016305525,null)))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_19494,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return cljs.pprint.cl_format.call(null,null,"<strong>~a</strong>  item~:P remaining",cljs.core.count.call(null,cljs.core.remove.call(null,todomvc.todo.td_completed,todomvc.todo.gTodo_items.call(null))));
});})(_STAR_par_STAR_19494,me,cache))
)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_19494,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19496 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.List.EMPTY));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19496;
}});})(_STAR_par_STAR_19494,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7955__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"ul",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),"filters",new cljs.core.Keyword(null,"selection","selection",975998651),tiltontec.cell.core.c_in.call(null,(function (){var or__7113__auto__ = cljs.core.deref.call(null,todomvc.core.iroute);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return "All";
}
})())], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"doall","doall",988520834,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Symbol(null,"route","route",1970422836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active","#/active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed","#/completed"], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"li","li",-1930876848,null),cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"fm-asc-tag","fm-asc-tag",-1695955000,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"ul"),new cljs.core.Keyword(null,"selection","selection",975998651)))),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"selected","selected",574897764)),"selected",""))),new cljs.core.Symbol(null,"label","label",-936024965,null))))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7955__auto__,_STAR_par_STAR_19494,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19554 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7955__auto____$1 = cljs.core.doall.call(null,(function (){var iter__7901__auto__ = ((function (_STAR_par_STAR_19554,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19494,me,cache){
return (function todomvc$core$mk_dashboard_$_iter__19583(s__19584){
return (new cljs.core.LazySeq(null,((function (_STAR_par_STAR_19554,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19494,me,cache){
return (function (){
var s__19584__$1 = s__19584;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19584__$1);
if(temp__4657__auto__){
var s__19584__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19584__$2)){
var c__7899__auto__ = cljs.core.chunk_first.call(null,s__19584__$2);
var size__7900__auto__ = cljs.core.count.call(null,c__7899__auto__);
var b__19586 = cljs.core.chunk_buffer.call(null,size__7900__auto__);
if((function (){var i__19585 = (0);
while(true){
if((i__19585 < size__7900__auto__)){
var vec__19599 = cljs.core._nth.call(null,c__7899__auto__,i__19585);
var label = cljs.core.nth.call(null,vec__19599,(0),null);
var route = cljs.core.nth.call(null,vec__19599,(1),null);
cljs.core.chunk_append.call(null,b__19586,tiltontec.tag.gen.make_tag.call(null,"li",cljs.core.PersistentVector.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"fm-asc-tag","fm-asc-tag",-1695955000,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"ul"),new cljs.core.Keyword(null,"selection","selection",975998651)))),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"selected","selected",574897764)),"selected",""))),new cljs.core.Symbol(null,"label","label",-936024965,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (i__19585,vec__19599,label,route,c__7899__auto__,size__7900__auto__,b__19586,s__19584__$2,temp__4657__auto__,_STAR_par_STAR_19554,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19494,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19602 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7955__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"a",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"href","href",-793805698),route,new cljs.core.Keyword(null,"selector","selector",762528866),label,new cljs.core.Keyword(null,"selected","selected",574897764),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"fm-asc-tag","fm-asc-tag",-1695955000,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"ul"),new cljs.core.Keyword(null,"selection","selection",975998651)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (i__19585,_STAR_par_STAR_19602,me__$2,cache__$2,vec__19599,label,route,c__7899__auto__,size__7900__auto__,b__19586,s__19584__$2,temp__4657__auto__,_STAR_par_STAR_19554,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19494,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me__$3)),tiltontec.model.core.md_get.call(null,tiltontec.tag.html.fm_asc_tag.call(null,me__$3,"ul"),new cljs.core.Keyword(null,"selection","selection",975998651)));
});})(i__19585,_STAR_par_STAR_19602,me__$2,cache__$2,vec__19599,label,route,c__7899__auto__,size__7900__auto__,b__19586,s__19584__$2,temp__4657__auto__,_STAR_par_STAR_19554,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19494,me,cache))
),new cljs.core.Keyword(null,"class","class",-2030961996),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"selected","selected",574897764)),"selected","")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (i__19585,_STAR_par_STAR_19602,me__$2,cache__$2,vec__19599,label,route,c__7899__auto__,size__7900__auto__,b__19586,s__19584__$2,temp__4657__auto__,_STAR_par_STAR_19554,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19494,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
if(cljs.core.truth_(tiltontec.model.core.md_get.call(null,me__$3,new cljs.core.Keyword(null,"selected","selected",574897764)))){
return "selected";
} else {
return "";
}
});})(i__19585,_STAR_par_STAR_19602,me__$2,cache__$2,vec__19599,label,route,c__7899__auto__,size__7900__auto__,b__19586,s__19584__$2,temp__4657__auto__,_STAR_par_STAR_19554,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19494,me,cache))
)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),new cljs.core.Symbol(null,"label","label",-936024965,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (i__19585,_STAR_par_STAR_19602,me__$2,cache__$2,vec__19599,label,route,c__7899__auto__,size__7900__auto__,b__19586,s__19584__$2,temp__4657__auto__,_STAR_par_STAR_19554,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19494,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19604 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7955__auto____$1 = label;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto____$1);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19604;
}});})(i__19585,_STAR_par_STAR_19602,me__$2,cache__$2,vec__19599,label,route,c__7899__auto__,size__7900__auto__,b__19586,s__19584__$2,temp__4657__auto__,_STAR_par_STAR_19554,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19494,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto____$1);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19602;
}});})(i__19585,vec__19599,label,route,c__7899__auto__,size__7900__auto__,b__19586,s__19584__$2,temp__4657__auto__,_STAR_par_STAR_19554,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19494,me,cache))
)));

var G__19613 = (i__19585 + (1));
i__19585 = G__19613;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19586),todomvc$core$mk_dashboard_$_iter__19583.call(null,cljs.core.chunk_rest.call(null,s__19584__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19586),null);
}
} else {
var vec__19605 = cljs.core.first.call(null,s__19584__$2);
var label = cljs.core.nth.call(null,vec__19605,(0),null);
var route = cljs.core.nth.call(null,vec__19605,(1),null);
return cljs.core.cons.call(null,tiltontec.tag.gen.make_tag.call(null,"li",cljs.core.PersistentVector.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"fm-asc-tag","fm-asc-tag",-1695955000,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"ul"),new cljs.core.Keyword(null,"selection","selection",975998651)))),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"selected","selected",574897764)),"selected",""))),new cljs.core.Symbol(null,"label","label",-936024965,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (vec__19605,label,route,s__19584__$2,temp__4657__auto__,_STAR_par_STAR_19554,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19494,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19608 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7955__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"a",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"href","href",-793805698),route,new cljs.core.Keyword(null,"selector","selector",762528866),label,new cljs.core.Keyword(null,"selected","selected",574897764),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"fm-asc-tag","fm-asc-tag",-1695955000,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"ul"),new cljs.core.Keyword(null,"selection","selection",975998651)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_19608,me__$2,cache__$2,vec__19605,label,route,s__19584__$2,temp__4657__auto__,_STAR_par_STAR_19554,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19494,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me__$3)),tiltontec.model.core.md_get.call(null,tiltontec.tag.html.fm_asc_tag.call(null,me__$3,"ul"),new cljs.core.Keyword(null,"selection","selection",975998651)));
});})(_STAR_par_STAR_19608,me__$2,cache__$2,vec__19605,label,route,s__19584__$2,temp__4657__auto__,_STAR_par_STAR_19554,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19494,me,cache))
),new cljs.core.Keyword(null,"class","class",-2030961996),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"selected","selected",574897764)),"selected","")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_19608,me__$2,cache__$2,vec__19605,label,route,s__19584__$2,temp__4657__auto__,_STAR_par_STAR_19554,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19494,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
if(cljs.core.truth_(tiltontec.model.core.md_get.call(null,me__$3,new cljs.core.Keyword(null,"selected","selected",574897764)))){
return "selected";
} else {
return "";
}
});})(_STAR_par_STAR_19608,me__$2,cache__$2,vec__19605,label,route,s__19584__$2,temp__4657__auto__,_STAR_par_STAR_19554,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19494,me,cache))
)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),new cljs.core.Symbol(null,"label","label",-936024965,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_19608,me__$2,cache__$2,vec__19605,label,route,s__19584__$2,temp__4657__auto__,_STAR_par_STAR_19554,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19494,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19610 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7955__auto____$1 = label;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto____$1);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19610;
}});})(_STAR_par_STAR_19608,me__$2,cache__$2,vec__19605,label,route,s__19584__$2,temp__4657__auto__,_STAR_par_STAR_19554,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19494,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto____$1);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19608;
}});})(vec__19605,label,route,s__19584__$2,temp__4657__auto__,_STAR_par_STAR_19554,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19494,me,cache))
)),todomvc$core$mk_dashboard_$_iter__19583.call(null,cljs.core.rest.call(null,s__19584__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_par_STAR_19554,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19494,me,cache))
,null,null));
});})(_STAR_par_STAR_19554,me__$1,cache__$1,x__7955__auto__,_STAR_par_STAR_19494,me,cache))
;
return iter__7901__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active","#/active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed","#/completed"], null)], null));
})());
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto____$1);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19554;
}});})(x__7955__auto__,_STAR_par_STAR_19494,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7955__auto____$2 = tiltontec.tag.gen.make_tag.call(null,"button",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),"clear-completed",new cljs.core.Keyword(null,"hidden","hidden",-312506092),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),cljs.core.list(new cljs.core.Symbol(null,"gTodo-items","gTodo-items",-2016305525,null)))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7955__auto____$1,x__7955__auto__,_STAR_par_STAR_19494,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return (cljs.core.count.call(null,cljs.core.filter.call(null,todomvc.todo.td_completed,todomvc.todo.gTodo_items.call(null))) === (0));
});})(x__7955__auto____$1,x__7955__auto__,_STAR_par_STAR_19494,me,cache))
),new cljs.core.Keyword(null,"onclick","onclick",1297553739),(function (){var fn_name__14813__auto__ = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("todomvc.todo","td-clear-completed","todomvc.todo/td-clear-completed",727146457,null))].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.call(null,null,tiltontec.tag.gen.on_event_attr_template,fn_name__14813__auto__,cljs.core.List.EMPTY);
})()], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Clear completed")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7955__auto____$1,x__7955__auto__,_STAR_par_STAR_19494,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_19612 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Clear completed")));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19612;
}});})(x__7955__auto____$1,x__7955__auto__,_STAR_par_STAR_19494,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto____$2);
})(),x__7955__auto____$1);
})(),x__7955__auto__);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19494;
}})));
});
goog.exportSymbol('todomvc.core.mk_dashboard', todomvc.core.mk_dashboard);
todomvc.core.todo_process_on_enter = (function todomvc$core$todo_process_on_enter(e){
if(cljs.core._EQ_.call(null,e.key,"Enter")){
var raw = e.target.value;
var title = clojure.string.trim.call(null,raw);
if(cljs.core._EQ_.call(null,title,"")){
if((cljs.core.count.call(null,raw) > (0))){
window.alert("A reminder to do nothing? Are we relaxing yet? So, no.");
} else {
}
} else {
tiltontec.model.core.md_reset_BANG_.call(null,cljs.core.deref.call(null,todomvc.todo.gTodo),new cljs.core.Keyword(null,"items-raw","items-raw",153861709),cljs.core.conj.call(null,todomvc.todo.gItems_raw.call(null),todomvc.todo.make_todo.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null))));
}

return e.target.value = "";
} else {
return null;
}
});
todomvc.core.todo_start_editing = (function todomvc$core$todo_start_editing(e){
var lbl = tiltontec.tag.gen.dom_tag.call(null,e.target);
var li = tiltontec.tag.html.fm_asc_tag.call(null,lbl,"li");
var edt_dom = tiltontec.tag.html.tag_dom.call(null,li).getElementsByClassName("edit").item((0));
tiltontec.tag.html.tag_dom.call(null,li).classList.add("editing");

edt_dom.focus();

return edt_dom.setSelectionRange((0),edt_dom.value.length);
});
todomvc.core.todo_edit = (function todomvc$core$todo_edit(e,td_key){
if(tiltontec.cell.base._STAR_within_integrity_STAR_){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"event-handler-reentered!!!!!!!!!!!!","event-handler-reentered!!!!!!!!!!!!",1168849179));
} else {
var edom = e.target;
var title = clojure.string.trim.call(null,edom.value);
var td = todomvc.todo.gTodo_lookup.call(null,td_key);
var li_dom = tiltontec.tag.html.dom_ancestor_by_tag.call(null,edom,"li");
if(cljs.core.truth_((function (){var or__7113__auto__ = (function (){var and__7101__auto__ = cljs.core._EQ_.call(null,e.type,"blur");
if(and__7101__auto__){
return tiltontec.tag.html.dom_has_class.call(null,li_dom,"editing");
} else {
return and__7101__auto__;
}
})();
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return cljs.core._EQ_.call(null,e.key,"Enter");
}
})())){
if(cljs.core._EQ_.call(null,title,"")){
todomvc.todo.td_delete.call(null,td);
} else {
tiltontec.model.core.md_reset_BANG_.call(null,td,new cljs.core.Keyword(null,"title","title",636505583),title);
}

return li_dom.classList.remove("editing");
} else {
if(cljs.core._EQ_.call(null,e.key,"Escape")){
edom.value = todomvc.todo.td_title.call(null,td);

return li_dom.classList.remove("editing");
} else {
return null;
}
}
}
});
todomvc.core.td_completed_toggle_all = (function todomvc$core$td_completed_toggle_all(event){
var input = tiltontec.model.core.fmu_w_class.call(null,tiltontec.tag.gen.dom_tag.call(null,event.target),"toggle-all");
var action = tiltontec.model.core.md_get.call(null,input,new cljs.core.Keyword(null,"action","action",-811238024));
var seq__19618 = cljs.core.seq.call(null,todomvc.todo.gTodo_items.call(null));
var chunk__19619 = null;
var count__19620 = (0);
var i__19621 = (0);
while(true){
if((i__19621 < count__19620)){
var td = cljs.core._nth.call(null,chunk__19619,i__19621);
tiltontec.model.core.md_reset_BANG_.call(null,td,new cljs.core.Keyword(null,"completed","completed",-486056503),((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"complete","complete",-500388775)))?tiltontec.util.core.now.call(null):null));

var G__19622 = seq__19618;
var G__19623 = chunk__19619;
var G__19624 = count__19620;
var G__19625 = (i__19621 + (1));
seq__19618 = G__19622;
chunk__19619 = G__19623;
count__19620 = G__19624;
i__19621 = G__19625;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19618);
if(temp__4657__auto__){
var seq__19618__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19618__$1)){
var c__7932__auto__ = cljs.core.chunk_first.call(null,seq__19618__$1);
var G__19626 = cljs.core.chunk_rest.call(null,seq__19618__$1);
var G__19627 = c__7932__auto__;
var G__19628 = cljs.core.count.call(null,c__7932__auto__);
var G__19629 = (0);
seq__19618 = G__19626;
chunk__19619 = G__19627;
count__19620 = G__19628;
i__19621 = G__19629;
continue;
} else {
var td = cljs.core.first.call(null,seq__19618__$1);
tiltontec.model.core.md_reset_BANG_.call(null,td,new cljs.core.Keyword(null,"completed","completed",-486056503),((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"complete","complete",-500388775)))?tiltontec.util.core.now.call(null):null));

var G__19630 = cljs.core.next.call(null,seq__19618__$1);
var G__19631 = null;
var G__19632 = (0);
var G__19633 = (0);
seq__19618 = G__19630;
chunk__19619 = G__19631;
count__19620 = G__19632;
i__19621 = G__19633;
continue;
}
} else {
return null;
}
}
break;
}
});
var doc_19634 = document;
var root_19635 = doc_19634.getElementById("tagroot");
var landing_19636 = todomvc.core.landing_page.call(null);
root_19635.innerHTML = landing_19636;

//# sourceMappingURL=core.js.map