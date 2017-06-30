// Compiled by ClojureScript 1.9.36 {}
goog.provide('tiltontec.cell.core');
goog.require('cljs.core');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.evaluate');
cljs.core._STAR_print_level_STAR_ = (3);
tiltontec.cell.core.make_cell = (function tiltontec$cell$core$make_cell(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18849 = arguments.length;
var i__7286__auto___18850 = (0);
while(true){
if((i__7286__auto___18850 < len__7285__auto___18849)){
args__7292__auto__.push((arguments[i__7286__auto___18850]));

var G__18851 = (i__7286__auto___18850 + (1));
i__7286__auto___18850 = G__18851;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((0) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__7293__auto__);
});

tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
var options = cljs.core.apply.call(null,cljs.core.hash_map,kvs);
return cljs.core.atom.call(null,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"callers","callers",-1991542784),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ephemeral?","ephemeral?",-311673012),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"pulse-observed","pulse-observed",595719633),new cljs.core.Keyword(null,"lazy","lazy",-424547181),new cljs.core.Keyword(null,"pulse-last-changed","pulse-last-changed",1035703380),new cljs.core.Keyword(null,"pulse","pulse",-244494476),new cljs.core.Keyword(null,"input?","input?",-1792843173)],[cljs.core.PersistentHashSet.EMPTY,tiltontec.cell.base.unbound,false,new cljs.core.Keyword(null,"nascent","nascent",443401807),(0),false,(0),(0),true]),options),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071)], null));
});

tiltontec.cell.core.make_cell.cljs$lang$maxFixedArity = (0);

tiltontec.cell.core.make_cell.cljs$lang$applyTo = (function (seq18848){
return tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18848));
});

tiltontec.cell.core.make_c_formula = (function tiltontec$cell$core$make_c_formula(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18853 = arguments.length;
var i__7286__auto___18854 = (0);
while(true){
if((i__7286__auto___18854 < len__7285__auto___18853)){
args__7292__auto__.push((arguments[i__7286__auto___18854]));

var G__18855 = (i__7286__auto___18854 + (1));
i__7286__auto___18854 = G__18855;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((0) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(argseq__7293__auto__);
});

tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
var options = cljs.core.apply.call(null,cljs.core.hash_map,kvs);
var rule = new cljs.core.Keyword(null,"rule","rule",729973257).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(rule)){
} else {
throw (new Error("Assert failed: rule"));
}

if(cljs.core.fn_QMARK_.call(null,rule)){
} else {
throw (new Error("Assert failed: (fn? rule)"));
}

return cljs.core.atom.call(null,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"callers","callers",-1991542784),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ephemeral?","ephemeral?",-311673012),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"pulse-observed","pulse-observed",595719633),new cljs.core.Keyword(null,"lazy","lazy",-424547181),new cljs.core.Keyword(null,"pulse-last-changed","pulse-last-changed",1035703380),new cljs.core.Keyword(null,"pulse","pulse",-244494476),new cljs.core.Keyword(null,"useds","useds",621350967),new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"input?","input?",-1792843173)],[cljs.core.PersistentHashSet.EMPTY,tiltontec.cell.base.unbound,false,new cljs.core.Keyword(null,"nascent","nascent",443401807),(0),false,(0),(0),cljs.core.PersistentHashSet.EMPTY,true,false]),options),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.cell.base","c-formula","tiltontec.cell.base/c-formula",-1020749037)], null));
});

tiltontec.cell.core.make_c_formula.cljs$lang$maxFixedArity = (0);

tiltontec.cell.core.make_c_formula.cljs$lang$applyTo = (function (seq18852){
return tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18852));
});

tiltontec.cell.core.c_fn_var = (function tiltontec$cell$core$c_fn_var(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18864 = arguments.length;
var i__7286__auto___18865 = (0);
while(true){
if((i__7286__auto___18865 < len__7285__auto___18864)){
args__7292__auto__.push((arguments[i__7286__auto___18865]));

var G__18866 = (i__7286__auto___18865 + (1));
i__7286__auto___18865 = G__18866;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__18860,body){
var vec__18861 = p__18860;
var c = cljs.core.nth.call(null,vec__18861,(0),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7044__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"me","me",1501524834,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-model","tiltontec.cell.base/c-model",566190580,null)),(function (){var x__7044__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cache","cache",403508473,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-value","tiltontec.cell.base/c-value",-808509395,null)),(function (){var x__7044__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.cell.core.c_fn_var.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_fn_var.cljs$lang$applyTo = (function (seq18856){
var G__18857 = cljs.core.first.call(null,seq18856);
var seq18856__$1 = cljs.core.next.call(null,seq18856);
var G__18858 = cljs.core.first.call(null,seq18856__$1);
var seq18856__$2 = cljs.core.next.call(null,seq18856__$1);
var G__18859 = cljs.core.first.call(null,seq18856__$2);
var seq18856__$3 = cljs.core.next.call(null,seq18856__$2);
return tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic(G__18857,G__18858,G__18859,seq18856__$3);
});


tiltontec.cell.core.c_fn_var.cljs$lang$macro = true;
tiltontec.cell.core.c_fn = (function tiltontec$cell$core$c_fn(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18870 = arguments.length;
var i__7286__auto___18871 = (0);
while(true){
if((i__7286__auto___18871 < len__7285__auto___18870)){
args__7292__auto__.push((arguments[i__7286__auto___18871]));

var G__18872 = (i__7286__auto___18871 + (1));
i__7286__auto___18871 = G__18872;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn-var","tiltontec.cell.core/c-fn-var",-1960595436,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"slot-c#","slot-c#",1084398166,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),body)));
});

tiltontec.cell.core.c_fn.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_fn.cljs$lang$applyTo = (function (seq18867){
var G__18868 = cljs.core.first.call(null,seq18867);
var seq18867__$1 = cljs.core.next.call(null,seq18867);
var G__18869 = cljs.core.first.call(null,seq18867__$1);
var seq18867__$2 = cljs.core.next.call(null,seq18867__$1);
return tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic(G__18868,G__18869,seq18867__$2);
});


tiltontec.cell.core.c_fn.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_ = (function tiltontec$cell$core$c_QMARK_(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18876 = arguments.length;
var i__7286__auto___18877 = (0);
while(true){
if((i__7286__auto___18877 < len__7285__auto___18876)){
args__7292__auto__.push((arguments[i__7286__auto___18877]));

var G__18878 = (i__7286__auto___18877 + (1));
i__7286__auto___18877 = G__18878;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.cell.core.c_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7044__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.cell.core.c_QMARK_.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_.cljs$lang$applyTo = (function (seq18873){
var G__18874 = cljs.core.first.call(null,seq18873);
var seq18873__$1 = cljs.core.next.call(null,seq18873);
var G__18875 = cljs.core.first.call(null,seq18873__$1);
var seq18873__$2 = cljs.core.next.call(null,seq18873__$1);
return tiltontec.cell.core.c_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__18874,G__18875,seq18873__$2);
});


tiltontec.cell.core.c_QMARK_.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK__PLUS_ = (function tiltontec$cell$core$c_QMARK__PLUS_(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18887 = arguments.length;
var i__7286__auto___18888 = (0);
while(true){
if((i__7286__auto___18888 < len__7285__auto___18887)){
args__7292__auto__.push((arguments[i__7286__auto___18888]));

var G__18889 = (i__7286__auto___18888 + (1));
i__7286__auto___18888 = G__18889;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_QMARK__PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.cell.core.c_QMARK__PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__18883,body){
var vec__18884 = p__18883;
var seq__18885 = cljs.core.seq.call(null,vec__18884);
var options = seq__18885;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),options,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7044__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.cell.core.c_QMARK__PLUS_.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_QMARK__PLUS_.cljs$lang$applyTo = (function (seq18879){
var G__18880 = cljs.core.first.call(null,seq18879);
var seq18879__$1 = cljs.core.next.call(null,seq18879);
var G__18881 = cljs.core.first.call(null,seq18879__$1);
var seq18879__$2 = cljs.core.next.call(null,seq18879__$1);
var G__18882 = cljs.core.first.call(null,seq18879__$2);
var seq18879__$3 = cljs.core.next.call(null,seq18879__$2);
return tiltontec.cell.core.c_QMARK__PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__18880,G__18881,G__18882,seq18879__$3);
});


tiltontec.cell.core.c_QMARK__PLUS_.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK__PLUS_n = (function tiltontec$cell$core$c_QMARK__PLUS_n(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18893 = arguments.length;
var i__7286__auto___18894 = (0);
while(true){
if((i__7286__auto___18894 < len__7285__auto___18893)){
args__7292__auto__.push((arguments[i__7286__auto___18894]));

var G__18895 = (i__7286__auto___18894 + (1));
i__7286__auto___18894 = G__18895;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK__PLUS_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.cell.core.c_QMARK__PLUS_n.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7044__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.cell.core.c_QMARK__PLUS_n.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK__PLUS_n.cljs$lang$applyTo = (function (seq18890){
var G__18891 = cljs.core.first.call(null,seq18890);
var seq18890__$1 = cljs.core.next.call(null,seq18890);
var G__18892 = cljs.core.first.call(null,seq18890__$1);
var seq18890__$2 = cljs.core.next.call(null,seq18890__$1);
return tiltontec.cell.core.c_QMARK__PLUS_n.cljs$core$IFn$_invoke$arity$variadic(G__18891,G__18892,seq18890__$2);
});


tiltontec.cell.core.c_QMARK__PLUS_n.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_n = (function tiltontec$cell$core$c_QMARK_n(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18899 = arguments.length;
var i__7286__auto___18900 = (0);
while(true){
if((i__7286__auto___18900 < len__7285__auto___18899)){
args__7292__auto__.push((arguments[i__7286__auto___18900]));

var G__18901 = (i__7286__auto___18900 + (1));
i__7286__auto___18900 = G__18901;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.cell.core.c_QMARK_n.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.cell.core.c_QMARK_n.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_n.cljs$lang$applyTo = (function (seq18896){
var G__18897 = cljs.core.first.call(null,seq18896);
var seq18896__$1 = cljs.core.next.call(null,seq18896);
var G__18898 = cljs.core.first.call(null,seq18896__$1);
var seq18896__$2 = cljs.core.next.call(null,seq18896__$1);
return tiltontec.cell.core.c_QMARK_n.cljs$core$IFn$_invoke$arity$variadic(G__18897,G__18898,seq18896__$2);
});


tiltontec.cell.core.c_QMARK_n.cljs$lang$macro = true;
tiltontec.cell.core.c__QMARK_n = (function tiltontec$cell$core$c__QMARK_n(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18905 = arguments.length;
var i__7286__auto___18906 = (0);
while(true){
if((i__7286__auto___18906 < len__7285__auto___18905)){
args__7292__auto__.push((arguments[i__7286__auto___18906]));

var G__18907 = (i__7286__auto___18906 + (1));
i__7286__auto___18906 = G__18907;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c__QMARK_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.cell.core.c__QMARK_n.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"until-asked","until-asked",-1449069768)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.cell.core.c__QMARK_n.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c__QMARK_n.cljs$lang$applyTo = (function (seq18902){
var G__18903 = cljs.core.first.call(null,seq18902);
var seq18902__$1 = cljs.core.next.call(null,seq18902);
var G__18904 = cljs.core.first.call(null,seq18902__$1);
var seq18902__$2 = cljs.core.next.call(null,seq18902__$1);
return tiltontec.cell.core.c__QMARK_n.cljs$core$IFn$_invoke$arity$variadic(G__18903,G__18904,seq18902__$2);
});


tiltontec.cell.core.c__QMARK_n.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_n_dbg = (function tiltontec$cell$core$c_QMARK_n_dbg(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18911 = arguments.length;
var i__7286__auto___18912 = (0);
while(true){
if((i__7286__auto___18912 < len__7285__auto___18911)){
args__7292__auto__.push((arguments[i__7286__auto___18912]));

var G__18913 = (i__7286__auto___18912 + (1));
i__7286__auto___18912 = G__18913;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_n_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.cell.core.c_QMARK_n_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"debug","debug",-1608172596)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.cell.core.c_QMARK_n_dbg.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_n_dbg.cljs$lang$applyTo = (function (seq18908){
var G__18909 = cljs.core.first.call(null,seq18908);
var seq18908__$1 = cljs.core.next.call(null,seq18908);
var G__18910 = cljs.core.first.call(null,seq18908__$1);
var seq18908__$2 = cljs.core.next.call(null,seq18908__$1);
return tiltontec.cell.core.c_QMARK_n_dbg.cljs$core$IFn$_invoke$arity$variadic(G__18909,G__18910,seq18908__$2);
});


tiltontec.cell.core.c_QMARK_n_dbg.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_n_until = (function tiltontec$cell$core$c_QMARK_n_until(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18918 = arguments.length;
var i__7286__auto___18919 = (0);
while(true){
if((i__7286__auto___18919 < len__7285__auto___18918)){
args__7292__auto__.push((arguments[i__7286__auto___18919]));

var G__18920 = (i__7286__auto___18919 + (1));
i__7286__auto___18919 = G__18920;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_n_until.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.cell.core.c_QMARK_n_until.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"optimize","optimize",-1912349448)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7044__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),args)));
});

tiltontec.cell.core.c_QMARK_n_until.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_QMARK_n_until.cljs$lang$applyTo = (function (seq18914){
var G__18915 = cljs.core.first.call(null,seq18914);
var seq18914__$1 = cljs.core.next.call(null,seq18914);
var G__18916 = cljs.core.first.call(null,seq18914__$1);
var seq18914__$2 = cljs.core.next.call(null,seq18914__$1);
var G__18917 = cljs.core.first.call(null,seq18914__$2);
var seq18914__$3 = cljs.core.next.call(null,seq18914__$2);
return tiltontec.cell.core.c_QMARK_n_until.cljs$core$IFn$_invoke$arity$variadic(G__18915,G__18916,G__18917,seq18914__$3);
});


tiltontec.cell.core.c_QMARK_n_until.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_once = (function tiltontec$cell$core$c_QMARK_once(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18924 = arguments.length;
var i__7286__auto___18925 = (0);
while(true){
if((i__7286__auto___18925 < len__7285__auto___18924)){
args__7292__auto__.push((arguments[i__7286__auto___18925]));

var G__18926 = (i__7286__auto___18925 + (1));
i__7286__auto___18925 = G__18926;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.cell.core.c_QMARK_once.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.cell.core.c_QMARK_once.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_once.cljs$lang$applyTo = (function (seq18921){
var G__18922 = cljs.core.first.call(null,seq18921);
var seq18921__$1 = cljs.core.next.call(null,seq18921);
var G__18923 = cljs.core.first.call(null,seq18921__$1);
var seq18921__$2 = cljs.core.next.call(null,seq18921__$1);
return tiltontec.cell.core.c_QMARK_once.cljs$core$IFn$_invoke$arity$variadic(G__18922,G__18923,seq18921__$2);
});


tiltontec.cell.core.c_QMARK_once.cljs$lang$macro = true;
tiltontec.cell.core.c_1 = (function tiltontec$cell$core$c_1(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18930 = arguments.length;
var i__7286__auto___18931 = (0);
while(true){
if((i__7286__auto___18931 < len__7285__auto___18930)){
args__7292__auto__.push((arguments[i__7286__auto___18931]));

var G__18932 = (i__7286__auto___18931 + (1));
i__7286__auto___18931 = G__18932;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.cell.core.c_1.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_1.cljs$lang$applyTo = (function (seq18927){
var G__18928 = cljs.core.first.call(null,seq18927);
var seq18927__$1 = cljs.core.next.call(null,seq18927);
var G__18929 = cljs.core.first.call(null,seq18927__$1);
var seq18927__$2 = cljs.core.next.call(null,seq18927__$1);
return tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic(G__18928,G__18929,seq18927__$2);
});


tiltontec.cell.core.c_1.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_1 = (function tiltontec$cell$core$c_QMARK_1(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18936 = arguments.length;
var i__7286__auto___18937 = (0);
while(true){
if((i__7286__auto___18937 < len__7285__auto___18936)){
args__7292__auto__.push((arguments[i__7286__auto___18937]));

var G__18938 = (i__7286__auto___18937 + (1));
i__7286__auto___18937 = G__18938;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.cell.core.c_QMARK_1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c?once","tiltontec.cell.core/c?once",88229667,null)),body)));
});

tiltontec.cell.core.c_QMARK_1.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_1.cljs$lang$applyTo = (function (seq18933){
var G__18934 = cljs.core.first.call(null,seq18933);
var seq18933__$1 = cljs.core.next.call(null,seq18933);
var G__18935 = cljs.core.first.call(null,seq18933__$1);
var seq18933__$2 = cljs.core.next.call(null,seq18933__$1);
return tiltontec.cell.core.c_QMARK_1.cljs$core$IFn$_invoke$arity$variadic(G__18934,G__18935,seq18933__$2);
});


tiltontec.cell.core.c_QMARK_1.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_dbg = (function tiltontec$cell$core$c_QMARK_dbg(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18942 = arguments.length;
var i__7286__auto___18943 = (0);
while(true){
if((i__7286__auto___18943 < len__7285__auto___18942)){
args__7292__auto__.push((arguments[i__7286__auto___18943]));

var G__18944 = (i__7286__auto___18943 + (1));
i__7286__auto___18943 = G__18944;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.cell.core.c_QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7044__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"debug","debug",-1608172596)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.cell.core.c_QMARK_dbg.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_dbg.cljs$lang$applyTo = (function (seq18939){
var G__18940 = cljs.core.first.call(null,seq18939);
var seq18939__$1 = cljs.core.next.call(null,seq18939);
var G__18941 = cljs.core.first.call(null,seq18939__$1);
var seq18939__$2 = cljs.core.next.call(null,seq18939__$1);
return tiltontec.cell.core.c_QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic(G__18940,G__18941,seq18939__$2);
});


tiltontec.cell.core.c_QMARK_dbg.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK__ = (function tiltontec$cell$core$c_QMARK__(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18953 = arguments.length;
var i__7286__auto___18954 = (0);
while(true){
if((i__7286__auto___18954 < len__7285__auto___18953)){
args__7292__auto__.push((arguments[i__7286__auto___18954]));

var G__18955 = (i__7286__auto___18954 + (1));
i__7286__auto___18954 = G__18955;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_QMARK__.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.cell.core.c_QMARK__.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__18949,body){
var vec__18950 = p__18949;
var seq__18951 = cljs.core.seq.call(null,vec__18950);
var options = seq__18951;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),options,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7044__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.cell.core.c_QMARK__.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_QMARK__.cljs$lang$applyTo = (function (seq18945){
var G__18946 = cljs.core.first.call(null,seq18945);
var seq18945__$1 = cljs.core.next.call(null,seq18945);
var G__18947 = cljs.core.first.call(null,seq18945__$1);
var seq18945__$2 = cljs.core.next.call(null,seq18945__$1);
var G__18948 = cljs.core.first.call(null,seq18945__$2);
var seq18945__$3 = cljs.core.next.call(null,seq18945__$2);
return tiltontec.cell.core.c_QMARK__.cljs$core$IFn$_invoke$arity$variadic(G__18946,G__18947,G__18948,seq18945__$3);
});


tiltontec.cell.core.c_QMARK__.cljs$lang$macro = true;
tiltontec.cell.core.c__QMARK_ = (function tiltontec$cell$core$c__QMARK_(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18964 = arguments.length;
var i__7286__auto___18965 = (0);
while(true){
if((i__7286__auto___18965 < len__7285__auto___18964)){
args__7292__auto__.push((arguments[i__7286__auto___18965]));

var G__18966 = (i__7286__auto___18965 + (1));
i__7286__auto___18965 = G__18966;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c__QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.cell.core.c__QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__18960,body){
var vec__18961 = p__18960;
var seq__18962 = cljs.core.seq.call(null,vec__18961);
var options = seq__18962;

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),options,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7044__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"until-asked","until-asked",-1449069768)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.cell.core.c__QMARK_.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c__QMARK_.cljs$lang$applyTo = (function (seq18956){
var G__18957 = cljs.core.first.call(null,seq18956);
var seq18956__$1 = cljs.core.next.call(null,seq18956);
var G__18958 = cljs.core.first.call(null,seq18956__$1);
var seq18956__$2 = cljs.core.next.call(null,seq18956__$1);
var G__18959 = cljs.core.first.call(null,seq18956__$2);
var seq18956__$3 = cljs.core.next.call(null,seq18956__$2);
return tiltontec.cell.core.c__QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__18957,G__18958,G__18959,seq18956__$3);
});


tiltontec.cell.core.c__QMARK_.cljs$lang$macro = true;
tiltontec.cell.core.c__QMARK_dbg = (function tiltontec$cell$core$c__QMARK_dbg(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18970 = arguments.length;
var i__7286__auto___18971 = (0);
while(true){
if((i__7286__auto___18971 < len__7285__auto___18970)){
args__7292__auto__.push((arguments[i__7286__auto___18971]));

var G__18972 = (i__7286__auto___18971 + (1));
i__7286__auto___18971 = G__18972;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c__QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.cell.core.c__QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7044__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"until-asked","until-asked",-1449069768)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"debug","debug",-1608172596)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
});

tiltontec.cell.core.c__QMARK_dbg.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c__QMARK_dbg.cljs$lang$applyTo = (function (seq18967){
var G__18968 = cljs.core.first.call(null,seq18967);
var seq18967__$1 = cljs.core.next.call(null,seq18967);
var G__18969 = cljs.core.first.call(null,seq18967__$1);
var seq18967__$2 = cljs.core.next.call(null,seq18967__$1);
return tiltontec.cell.core.c__QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic(G__18968,G__18969,seq18967__$2);
});


tiltontec.cell.core.c__QMARK_dbg.cljs$lang$macro = true;
tiltontec.cell.core.c_formula = (function tiltontec$cell$core$c_formula(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18981 = arguments.length;
var i__7286__auto___18982 = (0);
while(true){
if((i__7286__auto___18982 < len__7285__auto___18981)){
args__7292__auto__.push((arguments[i__7286__auto___18982]));

var G__18983 = (i__7286__auto___18982 + (1));
i__7286__auto___18982 = G__18983;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__18977,body){
var vec__18978 = p__18977;
var seq__18979 = cljs.core.seq.call(null,vec__18978);
var kvs = seq__18979;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7044__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core.keys)));
});

tiltontec.cell.core.c_formula.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_formula.cljs$lang$applyTo = (function (seq18973){
var G__18974 = cljs.core.first.call(null,seq18973);
var seq18973__$1 = cljs.core.next.call(null,seq18973);
var G__18975 = cljs.core.first.call(null,seq18973__$1);
var seq18973__$2 = cljs.core.next.call(null,seq18973__$1);
var G__18976 = cljs.core.first.call(null,seq18973__$2);
var seq18973__$3 = cljs.core.next.call(null,seq18973__$2);
return tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic(G__18974,G__18975,G__18976,seq18973__$3);
});


tiltontec.cell.core.c_formula.cljs$lang$macro = true;
tiltontec.cell.core.c_in = (function tiltontec$cell$core$c_in(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18986 = arguments.length;
var i__7286__auto___18987 = (0);
while(true){
if((i__7286__auto___18987 < len__7285__auto___18986)){
args__7292__auto__.push((arguments[i__7286__auto___18987]));

var G__18988 = (i__7286__auto___18987 + (1));
i__7286__auto___18987 = G__18988;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((1) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((1)),(0),null)):null);
return tiltontec.cell.core.c_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7293__auto__);
});

tiltontec.cell.core.c_in.cljs$core$IFn$_invoke$arity$variadic = (function (value,option_kvs){
return cljs.core.apply.call(null,tiltontec.cell.core.make_cell,cljs.core.list_STAR_.call(null,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"input?","input?",-1792843173),true,option_kvs));
});

tiltontec.cell.core.c_in.cljs$lang$maxFixedArity = (1);

tiltontec.cell.core.c_in.cljs$lang$applyTo = (function (seq18984){
var G__18985 = cljs.core.first.call(null,seq18984);
var seq18984__$1 = cljs.core.next.call(null,seq18984);
return tiltontec.cell.core.c_in.cljs$core$IFn$_invoke$arity$variadic(G__18985,seq18984__$1);
});

tiltontec.cell.core.c_reset_BANG_ = (function tiltontec$cell$core$c_reset_BANG_(c,new_value){

if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

if(cljs.core.truth_(tiltontec.cell.base._STAR_defer_changes_STAR_)){
throw (new Error("c-reset!> change to %s must be deferred by wrapping it in WITH-INTEGRITY",tiltontec.cell.base.c_slot.call(null,c)));
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([tiltontec.cell.base.c_lazy.call(null,c)], true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854),new cljs.core.Keyword(null,"always","always",-1772028770),true], null)))){
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);
} else {
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"change","change",-1163046502),tiltontec.cell.base.c_slot.call(null,c),(function (opcode,defer_info){
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);
}));

}
}
});
tiltontec.cell.core.c_reset_next_BANG_ = (function tiltontec$cell$core$c_reset_next_BANG_(_AMPERSAND_form,_AMPERSAND_env,f_c,f_new_value){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","*within-integrity*","tiltontec.cell.core/*within-integrity*",1558832389,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"c-reset-next!> deferred change to %s not under WITH-INTEGRITY supervision."),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-slot","tiltontec.cell.base/c-slot",1453031347,null)),(function (){var x__7044__auto__ = f_c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","ufb-add","tiltontec.cell.core/ufb-add",1421793642,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"c-reset-next!","c-reset-next!",-1735615308)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opcode","opcode",311089360,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defer-info","defer-info",-446799704,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__18989__auto__","c__18989__auto__",-1969019847,null)),(function (){var x__7044__auto__ = f_c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-value__18990__auto__","new-value__18990__auto__",1956781134,null)),(function (){var x__7044__auto__ = f_new_value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","call-c-reset-next!","tiltontec.cell.core/call-c-reset-next!",-970475516,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__18989__auto__","c__18989__auto__",-1969019847,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-value__18990__auto__","new-value__18990__auto__",1956781134,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.cell.core.c_reset_next_BANG_.cljs$lang$macro = true;
tiltontec.cell.core.call_c_reset_next_BANG_ = (function tiltontec$cell$core$call_c_reset_next_BANG_(c,new_value){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([tiltontec.cell.base.c_lazy.call(null,c)], true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854),new cljs.core.Keyword(null,"always","always",-1772028770),true], null)))){
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);
} else {
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);

}
});
