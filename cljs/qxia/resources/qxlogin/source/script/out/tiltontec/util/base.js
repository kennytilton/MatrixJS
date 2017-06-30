// Compiled by ClojureScript 1.9.36 {}
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
return [cljs.core.str(s),cljs.core.str(": "),cljs.core.str([cljs.core.str(bits)].join(''))].join('');
});
tiltontec.util.base.call_trc = (function tiltontec$util$base$call_trc(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18383 = arguments.length;
var i__7286__auto___18384 = (0);
while(true){
if((i__7286__auto___18384 < len__7285__auto___18383)){
args__7292__auto__.push((arguments[i__7286__auto___18384]));

var G__18385 = (i__7286__auto___18384 + (1));
i__7286__auto___18384 = G__18385;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((1) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((1)),(0),null)):null);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7293__auto__);
});

tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic = (function (s,os){
if(cljs.core.truth_(tiltontec.util.base._STAR_trx_QMARK__STAR_)){
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

tiltontec.util.base.call_trc.cljs$lang$applyTo = (function (seq18381){
var G__18382 = cljs.core.first.call(null,seq18381);
var seq18381__$1 = cljs.core.next.call(null,seq18381);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(G__18382,seq18381__$1);
});

tiltontec.util.base.trx = (function tiltontec$util$base$trx(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18390 = arguments.length;
var i__7286__auto___18391 = (0);
while(true){
if((i__7286__auto___18391 < len__7285__auto___18390)){
args__7292__auto__.push((arguments[i__7286__auto___18391]));

var G__18392 = (i__7286__auto___18391 + (1));
i__7286__auto___18391 = G__18392;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,label,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","call-trc","tiltontec.util.base/call-trc",242817092,null)),(function (){var x__7044__auto__ = ((!((label == null)))?[cljs.core.str(label)].join(''):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),vals)));
});

tiltontec.util.base.trx.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.trx.cljs$lang$applyTo = (function (seq18386){
var G__18387 = cljs.core.first.call(null,seq18386);
var seq18386__$1 = cljs.core.next.call(null,seq18386);
var G__18388 = cljs.core.first.call(null,seq18386__$1);
var seq18386__$2 = cljs.core.next.call(null,seq18386__$1);
var G__18389 = cljs.core.first.call(null,seq18386__$2);
var seq18386__$3 = cljs.core.next.call(null,seq18386__$2);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic(G__18387,G__18388,G__18389,seq18386__$3);
});


tiltontec.util.base.trx.cljs$lang$macro = true;
tiltontec.util.base.call_wtrx = (function tiltontec$util$base$call_wtrx(fn,lo,hi,trxargs){
var _STAR_trxdepth_STAR_18394 = tiltontec.util.base._STAR_trxdepth_STAR_;
tiltontec.util.base._STAR_trxdepth_STAR_ = (tiltontec.util.base._STAR_trxdepth_STAR_ + (1));

try{if(((lo <= tiltontec.util.base._STAR_trxdepth_STAR_)) && ((tiltontec.util.base._STAR_trxdepth_STAR_ <= hi))){
cljs.core.apply.call(null,tiltontec.util.base.call_trc,trxargs);
} else {
if((tiltontec.util.base._STAR_trxdepth_STAR_ > hi)){
throw (new Error([cljs.core.str("wtrx exceeded max depth "),cljs.core.str(hi),cljs.core.str(":"),cljs.core.str(cljs.core.apply.call(null,tiltontec.util.base.call_trc$,cljs.core.first.call(null,trxargs),cljs.core.rest.call(null,trxargs)))].join('')));
} else {
}
}

return fn.call(null);
}finally {tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR_18394;
}});
tiltontec.util.base.wtrx = (function tiltontec$util$base$wtrx(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18403 = arguments.length;
var i__7286__auto___18404 = (0);
while(true){
if((i__7286__auto___18404 < len__7285__auto___18403)){
args__7292__auto__.push((arguments[i__7286__auto___18404]));

var G__18405 = (i__7286__auto___18404 + (1));
i__7286__auto___18404 = G__18405;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__18399,body){
var vec__18400 = p__18399;
var seq__18401 = cljs.core.seq.call(null,vec__18400);
var first__18402 = cljs.core.first.call(null,seq__18401);
var seq__18401__$1 = cljs.core.next.call(null,seq__18401);
var lo = first__18402;
var first__18402__$1 = cljs.core.first.call(null,seq__18401__$1);
var seq__18401__$2 = cljs.core.next.call(null,seq__18401__$1);
var hi = first__18402__$1;
var trxargs = seq__18401__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","call-wtrx","tiltontec.util.base/call-wtrx",-151750095,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = lo;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = hi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),trxargs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.util.base.wtrx.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.wtrx.cljs$lang$applyTo = (function (seq18395){
var G__18396 = cljs.core.first.call(null,seq18395);
var seq18395__$1 = cljs.core.next.call(null,seq18395);
var G__18397 = cljs.core.first.call(null,seq18395__$1);
var seq18395__$2 = cljs.core.next.call(null,seq18395__$1);
var G__18398 = cljs.core.first.call(null,seq18395__$2);
var seq18395__$3 = cljs.core.next.call(null,seq18395__$2);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic(G__18396,G__18397,G__18398,seq18395__$3);
});


tiltontec.util.base.wtrx.cljs$lang$macro = true;
tiltontec.util.base.prog1 = (function tiltontec$util$base$prog1(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18410 = arguments.length;
var i__7286__auto___18411 = (0);
while(true){
if((i__7286__auto___18411 < len__7285__auto___18410)){
args__7292__auto__.push((arguments[i__7286__auto___18411]));

var G__18412 = (i__7286__auto___18411 + (1));
i__7286__auto___18411 = G__18412;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__18406__auto__","result__18406__auto__",300505637,null)),(function (){var x__7044__auto__ = cljs.core.first.call(null,body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core.rest.call(null,body),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__18406__auto__","result__18406__auto__",300505637,null)))));
});

tiltontec.util.base.prog1.cljs$lang$maxFixedArity = (2);

tiltontec.util.base.prog1.cljs$lang$applyTo = (function (seq18407){
var G__18408 = cljs.core.first.call(null,seq18407);
var seq18407__$1 = cljs.core.next.call(null,seq18407);
var G__18409 = cljs.core.first.call(null,seq18407__$1);
var seq18407__$2 = cljs.core.next.call(null,seq18407__$1);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic(G__18408,G__18409,seq18407__$2);
});


tiltontec.util.base.prog1.cljs$lang$macro = true;
tiltontec.util.base.b_when = (function tiltontec$util$base$b_when(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18418 = arguments.length;
var i__7286__auto___18419 = (0);
while(true){
if((i__7286__auto___18419 < len__7285__auto___18418)){
args__7292__auto__.push((arguments[i__7286__auto___18419]));

var G__18420 = (i__7286__auto___18419 + (1));
i__7286__auto___18419 = G__18420;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,var$,form,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",-2049838349,null)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7044__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),body)));
});

tiltontec.util.base.b_when.cljs$lang$maxFixedArity = (4);

tiltontec.util.base.b_when.cljs$lang$applyTo = (function (seq18413){
var G__18414 = cljs.core.first.call(null,seq18413);
var seq18413__$1 = cljs.core.next.call(null,seq18413);
var G__18415 = cljs.core.first.call(null,seq18413__$1);
var seq18413__$2 = cljs.core.next.call(null,seq18413__$1);
var G__18416 = cljs.core.first.call(null,seq18413__$2);
var seq18413__$3 = cljs.core.next.call(null,seq18413__$2);
var G__18417 = cljs.core.first.call(null,seq18413__$3);
var seq18413__$4 = cljs.core.next.call(null,seq18413__$3);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic(G__18414,G__18415,G__18416,G__18417,seq18413__$4);
});


tiltontec.util.base.b_when.cljs$lang$macro = true;
tiltontec.util.base.unless = (function tiltontec$util$base$unless(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18425 = arguments.length;
var i__7286__auto___18426 = (0);
while(true){
if((i__7286__auto___18426 < len__7285__auto___18425)){
args__7292__auto__.push((arguments[i__7286__auto___18426]));

var G__18427 = (i__7286__auto___18426 + (1));
i__7286__auto___18426 = G__18427;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__7044__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),body)));
});

tiltontec.util.base.unless.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.unless.cljs$lang$applyTo = (function (seq18421){
var G__18422 = cljs.core.first.call(null,seq18421);
var seq18421__$1 = cljs.core.next.call(null,seq18421);
var G__18423 = cljs.core.first.call(null,seq18421__$1);
var seq18421__$2 = cljs.core.next.call(null,seq18421__$1);
var G__18424 = cljs.core.first.call(null,seq18421__$2);
var seq18421__$3 = cljs.core.next.call(null,seq18421__$2);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic(G__18422,G__18423,G__18424,seq18421__$3);
});


tiltontec.util.base.unless.cljs$lang$macro = true;
tiltontec.util.base.def_rmap_slots = (function tiltontec$util$base$def_rmap_slots(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18432 = arguments.length;
var i__7286__auto___18433 = (0);
while(true){
if((i__7286__auto___18433 < len__7285__auto___18432)){
args__7292__auto__.push((arguments[i__7286__auto___18433]));

var G__18434 = (i__7286__auto___18433 + (1));
i__7286__auto___18433 = G__18434;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,slots){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (slot_SHARP_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null)),(function (){var x__7044__auto__ = cljs.core.symbol.call(null,[cljs.core.str((function (){var or__6210__auto__ = reader_prefix;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return "";
}
})()),cljs.core.str(slot_SHARP_)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7044__auto__ = cljs.core.keyword.call(null,slot_SHARP_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
}),slots))));
});

tiltontec.util.base.def_rmap_slots.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.def_rmap_slots.cljs$lang$applyTo = (function (seq18428){
var G__18429 = cljs.core.first.call(null,seq18428);
var seq18428__$1 = cljs.core.next.call(null,seq18428);
var G__18430 = cljs.core.first.call(null,seq18428__$1);
var seq18428__$2 = cljs.core.next.call(null,seq18428__$1);
var G__18431 = cljs.core.first.call(null,seq18428__$2);
var seq18428__$3 = cljs.core.next.call(null,seq18428__$2);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic(G__18429,G__18430,G__18431,seq18428__$3);
});


tiltontec.util.base.def_rmap_slots.cljs$lang$macro = true;
tiltontec.util.base.def_rmap_meta_slots = (function tiltontec$util$base$def_rmap_meta_slots(var_args){
var args__7292__auto__ = [];
var len__7285__auto___18439 = arguments.length;
var i__7286__auto___18440 = (0);
while(true){
if((i__7286__auto___18440 < len__7285__auto___18439)){
args__7292__auto__.push((arguments[i__7286__auto___18440]));

var G__18441 = (i__7286__auto___18440 + (1));
i__7286__auto___18440 = G__18441;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,slots){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (slot_SHARP_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null)),(function (){var x__7044__auto__ = cljs.core.symbol.call(null,[cljs.core.str((function (){var or__6210__auto__ = reader_prefix;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return "";
}
})()),cljs.core.str(slot_SHARP_)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7044__auto__ = cljs.core.keyword.call(null,slot_SHARP_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
}),slots))));
});

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$applyTo = (function (seq18435){
var G__18436 = cljs.core.first.call(null,seq18435);
var seq18435__$1 = cljs.core.next.call(null,seq18435);
var G__18437 = cljs.core.first.call(null,seq18435__$1);
var seq18435__$2 = cljs.core.next.call(null,seq18435__$1);
var G__18438 = cljs.core.first.call(null,seq18435__$2);
var seq18435__$3 = cljs.core.next.call(null,seq18435__$2);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic(G__18436,G__18437,G__18438,seq18435__$3);
});


tiltontec.util.base.def_rmap_meta_slots.cljs$lang$macro = true;
