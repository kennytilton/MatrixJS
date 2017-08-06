// Compiled by ClojureScript 1.9.473 {}
goog.provide('tiltontec.util.base');
goog.require('cljs.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
tiltontec.util.base._STAR_trx_QMARK__STAR_ = true;
tiltontec.util.base._STAR_trc_ensure_STAR_ = null;
tiltontec.util.base._STAR_trx_path_id_STAR_ = null;
tiltontec.util.base._STAR_trxdepth_STAR_ = (0);
tiltontec.util.base.last_trc = cljs.core.atom.call(null,(0));
tiltontec.util.base.call_trc$ = (function tiltontec$util$base$call_trc$(s,bits){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(bits)].join(''))].join('');
});
tiltontec.util.base.call_trc = (function tiltontec$util$base$call_trc(var_args){
var args__8233__auto__ = [];
var len__8226__auto___16573 = arguments.length;
var i__8227__auto___16574 = (0);
while(true){
if((i__8227__auto___16574 < len__8226__auto___16573)){
args__8233__auto__.push((arguments[i__8227__auto___16574]));

var G__16575 = (i__8227__auto___16574 + (1));
i__8227__auto___16574 = G__16575;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((1) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((1)),(0),null)):null);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8234__auto__);
});

tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic = (function (s,os){
if(tiltontec.util.base._STAR_trx_QMARK__STAR_){
if(cljs.core.truth_(s)){
var path = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,tiltontec.util.base._STAR_trxdepth_STAR_,"."));
return cljs.core.println.call(null,path,tiltontec.util.base.call_trc$.call(null,s,os));
} else {
return null;
}
} else {
return null;
}
});

tiltontec.util.base.call_trc.cljs$lang$maxFixedArity = (1);

tiltontec.util.base.call_trc.cljs$lang$applyTo = (function (seq16571){
var G__16572 = cljs.core.first.call(null,seq16571);
var seq16571__$1 = cljs.core.next.call(null,seq16571);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(G__16572,seq16571__$1);
});

tiltontec.util.base.trx = (function tiltontec$util$base$trx(var_args){
var args__8233__auto__ = [];
var len__8226__auto___16580 = arguments.length;
var i__8227__auto___16581 = (0);
while(true){
if((i__8227__auto___16581 < len__8226__auto___16580)){
args__8233__auto__.push((arguments[i__8227__auto___16581]));

var G__16582 = (i__8227__auto___16581 + (1));
i__8227__auto___16581 = G__16582;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((3) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8234__auto__);
});

tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,label,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","call-trc","tiltontec.util.base/call-trc",242817092,null)),(function (){var x__7955__auto__ = ((!((label == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),vals)));
});

tiltontec.util.base.trx.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.trx.cljs$lang$applyTo = (function (seq16576){
var G__16577 = cljs.core.first.call(null,seq16576);
var seq16576__$1 = cljs.core.next.call(null,seq16576);
var G__16578 = cljs.core.first.call(null,seq16576__$1);
var seq16576__$2 = cljs.core.next.call(null,seq16576__$1);
var G__16579 = cljs.core.first.call(null,seq16576__$2);
var seq16576__$3 = cljs.core.next.call(null,seq16576__$2);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic(G__16577,G__16578,G__16579,seq16576__$3);
});


tiltontec.util.base.trx.cljs$lang$macro = true;
tiltontec.util.base.call_wtrx = (function tiltontec$util$base$call_wtrx(fn,lo,hi,trxargs){
var _STAR_trxdepth_STAR_16584 = tiltontec.util.base._STAR_trxdepth_STAR_;
tiltontec.util.base._STAR_trxdepth_STAR_ = (tiltontec.util.base._STAR_trxdepth_STAR_ + (1));

try{if(((lo <= tiltontec.util.base._STAR_trxdepth_STAR_)) && ((tiltontec.util.base._STAR_trxdepth_STAR_ <= hi))){
cljs.core.apply.call(null,tiltontec.util.base.call_trc,trxargs);
} else {
if((tiltontec.util.base._STAR_trxdepth_STAR_ > hi)){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("wtrx exceeded max depth "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hi),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,tiltontec.util.base.call_trc$,cljs.core.first.call(null,trxargs),cljs.core.rest.call(null,trxargs)))].join('')));
} else {
}
}

return fn.call(null);
}finally {tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR_16584;
}});
tiltontec.util.base.wtrx = (function tiltontec$util$base$wtrx(var_args){
var args__8233__auto__ = [];
var len__8226__auto___16593 = arguments.length;
var i__8227__auto___16594 = (0);
while(true){
if((i__8227__auto___16594 < len__8226__auto___16593)){
args__8233__auto__.push((arguments[i__8227__auto___16594]));

var G__16595 = (i__8227__auto___16594 + (1));
i__8227__auto___16594 = G__16595;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((3) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8234__auto__);
});

tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__16589,body){
var vec__16590 = p__16589;
var seq__16591 = cljs.core.seq.call(null,vec__16590);
var first__16592 = cljs.core.first.call(null,seq__16591);
var seq__16591__$1 = cljs.core.next.call(null,seq__16591);
var lo = first__16592;
var first__16592__$1 = cljs.core.first.call(null,seq__16591__$1);
var seq__16591__$2 = cljs.core.next.call(null,seq__16591__$1);
var hi = first__16592__$1;
var trxargs = seq__16591__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","call-wtrx","tiltontec.util.base/call-wtrx",-151750095,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__7955__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = lo;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = hi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),trxargs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
});

tiltontec.util.base.wtrx.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.wtrx.cljs$lang$applyTo = (function (seq16585){
var G__16586 = cljs.core.first.call(null,seq16585);
var seq16585__$1 = cljs.core.next.call(null,seq16585);
var G__16587 = cljs.core.first.call(null,seq16585__$1);
var seq16585__$2 = cljs.core.next.call(null,seq16585__$1);
var G__16588 = cljs.core.first.call(null,seq16585__$2);
var seq16585__$3 = cljs.core.next.call(null,seq16585__$2);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic(G__16586,G__16587,G__16588,seq16585__$3);
});


tiltontec.util.base.wtrx.cljs$lang$macro = true;
tiltontec.util.base.prog1 = (function tiltontec$util$base$prog1(var_args){
var args__8233__auto__ = [];
var len__8226__auto___16600 = arguments.length;
var i__8227__auto___16601 = (0);
while(true){
if((i__8227__auto___16601 < len__8226__auto___16600)){
args__8233__auto__.push((arguments[i__8227__auto___16601]));

var G__16602 = (i__8227__auto___16601 + (1));
i__8227__auto___16601 = G__16602;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((2) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((2)),(0),null)):null);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8234__auto__);
});

tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7955__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__16596__auto__","result__16596__auto__",-5710387,null)),(function (){var x__7955__auto__ = cljs.core.first.call(null,body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),cljs.core.rest.call(null,body),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__16596__auto__","result__16596__auto__",-5710387,null)))));
});

tiltontec.util.base.prog1.cljs$lang$maxFixedArity = (2);

tiltontec.util.base.prog1.cljs$lang$applyTo = (function (seq16597){
var G__16598 = cljs.core.first.call(null,seq16597);
var seq16597__$1 = cljs.core.next.call(null,seq16597);
var G__16599 = cljs.core.first.call(null,seq16597__$1);
var seq16597__$2 = cljs.core.next.call(null,seq16597__$1);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic(G__16598,G__16599,seq16597__$2);
});


tiltontec.util.base.prog1.cljs$lang$macro = true;
tiltontec.util.base.b_when = (function tiltontec$util$base$b_when(var_args){
var args__8233__auto__ = [];
var len__8226__auto___16608 = arguments.length;
var i__8227__auto___16609 = (0);
while(true){
if((i__8227__auto___16609 < len__8226__auto___16608)){
args__8233__auto__.push((arguments[i__8227__auto___16609]));

var G__16610 = (i__8227__auto___16609 + (1));
i__8227__auto___16609 = G__16610;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((4) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((4)),(0),null)):null);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8234__auto__);
});

tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,var$,form,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",-2049838349,null)),(function (){var x__7955__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7955__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),body)));
});

tiltontec.util.base.b_when.cljs$lang$maxFixedArity = (4);

tiltontec.util.base.b_when.cljs$lang$applyTo = (function (seq16603){
var G__16604 = cljs.core.first.call(null,seq16603);
var seq16603__$1 = cljs.core.next.call(null,seq16603);
var G__16605 = cljs.core.first.call(null,seq16603__$1);
var seq16603__$2 = cljs.core.next.call(null,seq16603__$1);
var G__16606 = cljs.core.first.call(null,seq16603__$2);
var seq16603__$3 = cljs.core.next.call(null,seq16603__$2);
var G__16607 = cljs.core.first.call(null,seq16603__$3);
var seq16603__$4 = cljs.core.next.call(null,seq16603__$3);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic(G__16604,G__16605,G__16606,G__16607,seq16603__$4);
});


tiltontec.util.base.b_when.cljs$lang$macro = true;
tiltontec.util.base.unless = (function tiltontec$util$base$unless(var_args){
var args__8233__auto__ = [];
var len__8226__auto___16615 = arguments.length;
var i__8227__auto___16616 = (0);
while(true){
if((i__8227__auto___16616 < len__8226__auto___16615)){
args__8233__auto__.push((arguments[i__8227__auto___16616]));

var G__16617 = (i__8227__auto___16616 + (1));
i__8227__auto___16616 = G__16617;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((3) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8234__auto__);
});

tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__7955__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),body)));
});

tiltontec.util.base.unless.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.unless.cljs$lang$applyTo = (function (seq16611){
var G__16612 = cljs.core.first.call(null,seq16611);
var seq16611__$1 = cljs.core.next.call(null,seq16611);
var G__16613 = cljs.core.first.call(null,seq16611__$1);
var seq16611__$2 = cljs.core.next.call(null,seq16611__$1);
var G__16614 = cljs.core.first.call(null,seq16611__$2);
var seq16611__$3 = cljs.core.next.call(null,seq16611__$2);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic(G__16612,G__16613,G__16614,seq16611__$3);
});


tiltontec.util.base.unless.cljs$lang$macro = true;
tiltontec.util.base.def_rmap_slots = (function tiltontec$util$base$def_rmap_slots(var_args){
var args__8233__auto__ = [];
var len__8226__auto___16622 = arguments.length;
var i__8227__auto___16623 = (0);
while(true){
if((i__8227__auto___16623 < len__8226__auto___16622)){
args__8233__auto__.push((arguments[i__8227__auto___16623]));

var G__16624 = (i__8227__auto___16623 + (1));
i__8227__auto___16623 = G__16624;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((3) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8234__auto__);
});

tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,slots){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (slot_SHARP_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null)),(function (){var x__7955__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__7113__auto__ = reader_prefix;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return "";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot_SHARP_)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7955__auto__ = cljs.core.keyword.call(null,slot_SHARP_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
}),slots))));
});

tiltontec.util.base.def_rmap_slots.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.def_rmap_slots.cljs$lang$applyTo = (function (seq16618){
var G__16619 = cljs.core.first.call(null,seq16618);
var seq16618__$1 = cljs.core.next.call(null,seq16618);
var G__16620 = cljs.core.first.call(null,seq16618__$1);
var seq16618__$2 = cljs.core.next.call(null,seq16618__$1);
var G__16621 = cljs.core.first.call(null,seq16618__$2);
var seq16618__$3 = cljs.core.next.call(null,seq16618__$2);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic(G__16619,G__16620,G__16621,seq16618__$3);
});


tiltontec.util.base.def_rmap_slots.cljs$lang$macro = true;
tiltontec.util.base.def_rmap_meta_slots = (function tiltontec$util$base$def_rmap_meta_slots(var_args){
var args__8233__auto__ = [];
var len__8226__auto___16629 = arguments.length;
var i__8227__auto___16630 = (0);
while(true){
if((i__8227__auto___16630 < len__8226__auto___16629)){
args__8233__auto__.push((arguments[i__8227__auto___16630]));

var G__16631 = (i__8227__auto___16630 + (1));
i__8227__auto___16630 = G__16631;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((3) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8234__auto__);
});

tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,slots){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (slot_SHARP_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null)),(function (){var x__7955__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__7113__auto__ = reader_prefix;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return "";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot_SHARP_)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7955__auto__ = cljs.core.keyword.call(null,slot_SHARP_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
}),slots))));
});

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$applyTo = (function (seq16625){
var G__16626 = cljs.core.first.call(null,seq16625);
var seq16625__$1 = cljs.core.next.call(null,seq16625);
var G__16627 = cljs.core.first.call(null,seq16625__$1);
var seq16625__$2 = cljs.core.next.call(null,seq16625__$1);
var G__16628 = cljs.core.first.call(null,seq16625__$2);
var seq16625__$3 = cljs.core.next.call(null,seq16625__$2);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic(G__16626,G__16627,G__16628,seq16625__$3);
});


tiltontec.util.base.def_rmap_meta_slots.cljs$lang$macro = true;

//# sourceMappingURL=base.js.map