// Compiled by ClojureScript 1.9.473 {}
goog.provide('tiltontec.model.core');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.base');
tiltontec.model.core.md_name = (function tiltontec$model$core$md_name(me){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
});
tiltontec.model.core.md_get = (function tiltontec$model$core$md_get(me,slot){
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,me))){
var temp__4655__auto__ = tiltontec.model.base.md_cell.call(null,me,slot);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
return tiltontec.cell.evaluate.c_get.call(null,c);
} else {
return slot.call(null,cljs.core.deref.call(null,me));
}
} else {
return null;
}
});
tiltontec.model.core.md_getx = (function tiltontec$model$core$md_getx(tag,me,slot){
return tiltontec.model.core.md_get.call(null,me,slot);
});
tiltontec.model.core._STAR_par_STAR_ = null;
tiltontec.model.core.md_reset_BANG_ = (function tiltontec$model$core$md_reset_BANG_(me,slot,new_value){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

var temp__4655__auto__ = tiltontec.model.base.md_cell.call(null,me,slot);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
return tiltontec.cell.core.c_reset_BANG_.call(null,c,new_value);
} else {
cljs.core.println.call(null,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.meta.call(null,me));

cljs.core.println.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me)));

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,me),slot)){
return tiltontec.util.core.err.call(null,cljs.core.str,"change not mediated by cell ",slot,"/",tiltontec.cell.base.ia_type.call(null,me));
} else {
return tiltontec.util.core.err.call(null,cljs.core.str,"change to slot not mediated by cell and map lacks slot ",slot,"\n         ;; but has ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys.call(null,cljs.core.deref.call(null,me)))].join(''));
}
}
});
tiltontec.model.core.backdoor_reset_BANG__QMARK_ = (function tiltontec$model$core$backdoor_reset_BANG__QMARK_(me,slot,new_value){
var temp__4655__auto__ = tiltontec.model.base.md_cell.call(null,me,slot);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
return tiltontec.cell.core.c_reset_BANG_.call(null,c,new_value);
} else {
return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),new_value);
}
});
tiltontec.model.core.backdoor_reset_BANG_ = (function tiltontec$model$core$backdoor_reset_BANG_(me,slot,new_value){
return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),new_value);
});
tiltontec.model.core.make = (function tiltontec$model$core$make(var_args){
var args__8233__auto__ = [];
var len__8226__auto___17179 = arguments.length;
var i__8227__auto___17180 = (0);
while(true){
if((i__8227__auto___17180 < len__8226__auto___17179)){
args__8233__auto__.push((arguments[i__8227__auto___17180]));

var G__17181 = (i__8227__auto___17180 + (1));
i__8227__auto___17180 = G__17181;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});

tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic = (function (arg_list){
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,arg_list))){
return cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),arg_list);
} else {
var iargs = cljs.core.apply.call(null,cljs.core.hash_map,arg_list);
var me = cljs.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"par","par",-61778778),tiltontec.model.core._STAR_par_STAR_], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (iargs){
return (function (p__17167){
var vec__17168 = p__17167;
var k = cljs.core.nth.call(null,vec__17168,(0),null);
var v = cljs.core.nth.call(null,vec__17168,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,v))?tiltontec.cell.base.unbound:v)],null));
});})(iargs))
,cljs.core.filter.call(null,((function (iargs){
return (function (p__17171){
var vec__17172 = p__17171;
var slot = cljs.core.nth.call(null,vec__17172,(0),null);
var v = cljs.core.nth.call(null,vec__17172,(1),null);
return !(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348),slot));
});})(iargs))
,cljs.core.partition.call(null,(2),arg_list))))),new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"nascent","nascent",443401807)], null),cljs.core.select_keys.call(null,iargs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348)], null))));
if(cljs.core.truth_(cljs.core.meta.call(null,me))){
} else {
throw (new Error("Assert failed: (meta me)"));
}

tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cz","cz",1670864932),me], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.filter.call(null,((function (iargs,me){
return (function (p__17175){
var vec__17176 = p__17175;
var slot = cljs.core.nth.call(null,vec__17176,(0),null);
var v = cljs.core.nth.call(null,vec__17176,(1),null);
return tiltontec.model.base.md_install_cell.call(null,me,slot,v);
});})(iargs,me))
,cljs.core.partition.call(null,(2),arg_list)))));

tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"awaken","awaken",-1899628152),me,((function (iargs,me){
return (function (opcode,defer_info){
return tiltontec.model.base.md_awaken.call(null,me);
});})(iargs,me))
);

return me;

}
});

tiltontec.model.core.make.cljs$lang$maxFixedArity = (0);

tiltontec.model.core.make.cljs$lang$applyTo = (function (seq17166){
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17166));
});

tiltontec.model.core.mm_obj = Object;
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.model.core","family","tiltontec.model.core/family",-623513184)], null),(function (_,___$1,newk,oldk,___$2){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
return null;
} else {
var lostks = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks)){
return null;
} else {
var seq__17182 = cljs.core.seq.call(null,lostks);
var chunk__17183 = null;
var count__17184 = (0);
var i__17185 = (0);
while(true){
if((i__17185 < count__17184)){
var k = cljs.core._nth.call(null,chunk__17183,i__17185);
tiltontec.cell.evaluate.not_to_be.call(null,k);

var G__17186 = seq__17182;
var G__17187 = chunk__17183;
var G__17188 = count__17184;
var G__17189 = (i__17185 + (1));
seq__17182 = G__17186;
chunk__17183 = G__17187;
count__17184 = G__17188;
i__17185 = G__17189;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__17182);
if(temp__4657__auto__){
var seq__17182__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17182__$1)){
var c__7932__auto__ = cljs.core.chunk_first.call(null,seq__17182__$1);
var G__17190 = cljs.core.chunk_rest.call(null,seq__17182__$1);
var G__17191 = c__7932__auto__;
var G__17192 = cljs.core.count.call(null,c__7932__auto__);
var G__17193 = (0);
seq__17182 = G__17190;
chunk__17183 = G__17191;
count__17184 = G__17192;
i__17185 = G__17193;
continue;
} else {
var k = cljs.core.first.call(null,seq__17182__$1);
tiltontec.cell.evaluate.not_to_be.call(null,k);

var G__17194 = cljs.core.next.call(null,seq__17182__$1);
var G__17195 = null;
var G__17196 = (0);
var G__17197 = (0);
seq__17182 = G__17194;
chunk__17183 = G__17195;
count__17184 = G__17196;
i__17185 = G__17197;
continue;
}
} else {
return null;
}
}
break;
}
}
}
}));
tiltontec.model.core.qx_par = (function tiltontec$model$core$qx_par(me){
return new cljs.core.Keyword(null,"par","par",-61778778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
});
tiltontec.model.core.fget_EQ_ = (function tiltontec$model$core$fget_EQ_(seek,poss){
if(cljs.core.truth_((function (){var or__7113__auto__ = tiltontec.util.core.any_ref_QMARK_.call(null,poss);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return typeof poss === 'string';
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("poss not ref "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(typeof poss === 'string')].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (any-ref? poss) (string? poss))")].join('')));
}

if(cljs.core.not.call(null,tiltontec.util.core.any_ref_QMARK_.call(null,poss))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"fget=bailnotref","fget=bailnotref",-1507107200),poss);

return false;
} else {
if(cljs.core.fn_QMARK_.call(null,seek)){
return seek.call(null,poss);
} else {
if((seek instanceof cljs.core.Keyword)){
return (cljs.core._EQ_.call(null,seek,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,poss)))) || (cljs.core.isa_QMARK_.call(null,tiltontec.cell.base.ia_type.call(null,poss),seek));
} else {
tiltontec.util.base.call_trc.call(null,":fget=-else-pplain=!",seek);

return cljs.core._EQ_.call(null,seek,poss);

}
}
}
});
tiltontec.model.core.fasc = (function tiltontec$model$core$fasc(var_args){
var args__8233__auto__ = [];
var len__8226__auto___17202 = arguments.length;
var i__8227__auto___17203 = (0);
while(true){
if((i__8227__auto___17203 < len__8226__auto___17202)){
args__8233__auto__.push((arguments[i__8227__auto___17203]));

var G__17204 = (i__8227__auto___17203 + (1));
i__8227__auto___17203 = G__17204;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((2) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8234__auto__);
});

tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic = (function (what,where,options){
if(cljs.core.truth_((function (){var and__7101__auto__ = where;
if(cljs.core.truth_(and__7101__auto__)){
return what;
} else {
return and__7101__auto__;
}
})())){
var options__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"wocd?","wocd?",-195637516),true], null),cljs.core.apply.call(null,cljs.core.hash_map,options));
var _STAR_depender_STAR_17201 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = (cljs.core.truth_(new cljs.core.Keyword(null,"wocd?","wocd?",-195637516).cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);

try{var or__7113__auto__ = (function (){var and__7101__auto__ = new cljs.core.Keyword(null,"me?","me?",-625404259).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__7101__auto__)){
var and__7101__auto____$1 = tiltontec.model.core.fget_EQ_.call(null,what,where);
if(cljs.core.truth_(and__7101__auto____$1)){
return where;
} else {
return and__7101__auto____$1;
}
} else {
return and__7101__auto__;
}
})();
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
var or__7113__auto____$1 = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"par","par",-61778778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where));
if(cljs.core.truth_(temp__4657__auto__)){
var par = temp__4657__auto__;
return tiltontec.model.core.fasc.call(null,what,par,new cljs.core.Keyword(null,"me?","me?",-625404259),true);
} else {
return null;
}
})();
if(cljs.core.truth_(or__7113__auto____$1)){
return or__7113__auto____$1;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"must?","must?",1639898554).cljs$core$IFn$_invoke$arity$1(options__$1))){
return tiltontec.util.core.err.call(null,new cljs.core.Keyword(null,"fasc-must-failed","fasc-must-failed",845302164),what,where,options__$1);
} else {
return null;
}
}
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_17201;
}} else {
return null;
}
});

tiltontec.model.core.fasc.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.fasc.cljs$lang$applyTo = (function (seq17198){
var G__17199 = cljs.core.first.call(null,seq17198);
var seq17198__$1 = cljs.core.next.call(null,seq17198);
var G__17200 = cljs.core.first.call(null,seq17198__$1);
var seq17198__$2 = cljs.core.next.call(null,seq17198__$1);
return tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic(G__17199,G__17200,seq17198__$2);
});

tiltontec.model.core.fget = (function tiltontec$model$core$fget(var_args){
var args__8233__auto__ = [];
var len__8226__auto___17210 = arguments.length;
var i__8227__auto___17211 = (0);
while(true){
if((i__8227__auto___17211 < len__8226__auto___17210)){
args__8233__auto__.push((arguments[i__8227__auto___17211]));

var G__17212 = (i__8227__auto___17211 + (1));
i__8227__auto___17211 = G__17212;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((2) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8234__auto__);
});

tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic = (function (what,where,options){
if(cljs.core.truth_((function (){var and__7101__auto__ = where;
if(cljs.core.truth_(and__7101__auto__)){
var and__7101__auto____$1 = what;
if(cljs.core.truth_(and__7101__auto____$1)){
return tiltontec.util.core.any_ref_QMARK_.call(null,where);
} else {
return and__7101__auto____$1;
}
} else {
return and__7101__auto__;
}
})())){
var options__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"inside?","inside?",639243696),false,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"wocd?","wocd?",-195637516),true], null),cljs.core.apply.call(null,cljs.core.hash_map,options));
var _STAR_depender_STAR_17209 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = (cljs.core.truth_(new cljs.core.Keyword(null,"wocd?","wocd?",-195637516).cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);

try{if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,where))){
var or__7113__auto__ = (function (){var and__7101__auto__ = new cljs.core.Keyword(null,"me?","me?",-625404259).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__7101__auto__)){
var and__7101__auto____$1 = tiltontec.model.core.fget_EQ_.call(null,what,where);
if(cljs.core.truth_(and__7101__auto____$1)){
return where;
} else {
return and__7101__auto____$1;
}
} else {
return and__7101__auto__;
}
})();
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
var or__7113__auto____$1 = (function (){var and__7101__auto__ = new cljs.core.Keyword(null,"inside?","inside?",639243696).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__7101__auto__)){
var temp__4655__auto__ = tiltontec.model.core.md_get.call(null,where,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4655__auto__)){
var kids = temp__4655__auto__;
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"inside-kids!!!","inside-kids!!!",-988551250),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where)));

var temp__4655__auto____$1 = cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"skip","skip",602715391).cljs$core$IFn$_invoke$arity$1(options__$1)], true),kids);
if(cljs.core.truth_(temp__4655__auto____$1)){
var netkids = temp__4655__auto____$1;
return cljs.core.some.call(null,((function (netkids,temp__4655__auto____$1,kids,temp__4655__auto__,and__7101__auto__,or__7113__auto__,_STAR_depender_STAR_17209,options__$1){
return (function (p1__17205_SHARP_){
return tiltontec.model.core.fget.call(null,what,p1__17205_SHARP_,new cljs.core.Keyword(null,"me?","me?",-625404259),true,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"up?","up?",77854972),false);
});})(netkids,temp__4655__auto____$1,kids,temp__4655__auto__,and__7101__auto__,or__7113__auto__,_STAR_depender_STAR_17209,options__$1))
,netkids);
} else {
return tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"no-net-kids","no-net-kids",1963649640));
}
} else {
return tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"inside-no-kids","inside-no-kids",-1437068961),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where)));
}
} else {
return and__7101__auto__;
}
})();
if(cljs.core.truth_(or__7113__auto____$1)){
return or__7113__auto____$1;
} else {
var or__7113__auto____$2 = (function (){var and__7101__auto__ = new cljs.core.Keyword(null,"up?","up?",77854972).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__7101__auto__)){
var temp__4657__auto__ = new cljs.core.Keyword(null,"par","par",-61778778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where));
if(cljs.core.truth_(temp__4657__auto__)){
var par = temp__4657__auto__;
return tiltontec.model.core.fget.call(null,what,par,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"me?","me?",-625404259),true,new cljs.core.Keyword(null,"skip","skip",602715391),where,new cljs.core.Keyword(null,"inside?","inside?",639243696),true);
} else {
return null;
}
} else {
return and__7101__auto__;
}
})();
if(cljs.core.truth_(or__7113__auto____$2)){
return or__7113__auto____$2;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"must?","must?",1639898554).cljs$core$IFn$_invoke$arity$1(options__$1))){
return tiltontec.util.core.err.call(null,new cljs.core.Keyword(null,"fget-must-failed","fget-must-failed",237242954),what,where,options__$1);
} else {
return null;
}
}
}
}
} else {
return null;
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_17209;
}} else {
return null;
}
});

tiltontec.model.core.fget.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.fget.cljs$lang$applyTo = (function (seq17206){
var G__17207 = cljs.core.first.call(null,seq17206);
var seq17206__$1 = cljs.core.next.call(null,seq17206);
var G__17208 = cljs.core.first.call(null,seq17206__$1);
var seq17206__$2 = cljs.core.next.call(null,seq17206__$1);
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic(G__17207,G__17208,seq17206__$2);
});

tiltontec.model.core.fm_BANG_ = (function tiltontec$model$core$fm_BANG_(what,where){
return tiltontec.model.core.fget.call(null,what,where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"must?","must?",1639898554),true,new cljs.core.Keyword(null,"up?","up?",77854972),true);
});
tiltontec.model.core.mdv_BANG_ = (function tiltontec$model$core$mdv_BANG_(var_args){
var args__8233__auto__ = [];
var len__8226__auto___17222 = arguments.length;
var i__8227__auto___17223 = (0);
while(true){
if((i__8227__auto___17223 < len__8226__auto___17222)){
args__8233__auto__.push((arguments[i__8227__auto___17223]));

var G__17224 = (i__8227__auto___17223 + (1));
i__8227__auto___17223 = G__17224;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((4) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((4)),(0),null)):null);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8234__auto__);
});

tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,what,slot,p__17218){
var vec__17219 = p__17218;
var me = cljs.core.nth.call(null,vec__17219,(0),null);
var me__$1 = (function (){var or__7113__auto__ = me;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return new cljs.core.Symbol(null,"me","me",1501524834,null);
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","md-get","tiltontec.model.core/md-get",-1259532148,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","fm!","tiltontec.model.core/fm!",-726483993,null)),(function (){var x__7955__auto__ = what;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = me__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
});

tiltontec.model.core.mdv_BANG_.cljs$lang$maxFixedArity = (4);

tiltontec.model.core.mdv_BANG_.cljs$lang$applyTo = (function (seq17213){
var G__17214 = cljs.core.first.call(null,seq17213);
var seq17213__$1 = cljs.core.next.call(null,seq17213);
var G__17215 = cljs.core.first.call(null,seq17213__$1);
var seq17213__$2 = cljs.core.next.call(null,seq17213__$1);
var G__17216 = cljs.core.first.call(null,seq17213__$2);
var seq17213__$3 = cljs.core.next.call(null,seq17213__$2);
var G__17217 = cljs.core.first.call(null,seq17213__$3);
var seq17213__$4 = cljs.core.next.call(null,seq17213__$3);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17214,G__17215,G__17216,G__17217,seq17213__$4);
});


tiltontec.model.core.mdv_BANG_.cljs$lang$macro = true;
tiltontec.model.core.fmu_w_class = (function tiltontec$model$core$fmu_w_class(where,class$){
return tiltontec.model.core.fget.call(null,(function (p1__17225_SHARP_){
return cljs.core._EQ_.call(null,class$,tiltontec.model.core.md_get.call(null,p1__17225_SHARP_,new cljs.core.Keyword(null,"class","class",-2030961996)));
}),where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true);
});
tiltontec.model.core.fmi_w_class = (function tiltontec$model$core$fmi_w_class(where,class$){
return tiltontec.model.core.fget.call(null,(function (p1__17226_SHARP_){
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,p1__17226_SHARP_))){
return cljs.core._EQ_.call(null,class$,tiltontec.model.core.md_get.call(null,p1__17226_SHARP_,new cljs.core.Keyword(null,"class","class",-2030961996)));
} else {
return null;
}
}),where,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"up?","up?",77854972),false);
});
tiltontec.model.core.the_kids = (function tiltontec$model$core$the_kids(var_args){
var args__8233__auto__ = [];
var len__8226__auto___17230 = arguments.length;
var i__8227__auto___17231 = (0);
while(true){
if((i__8227__auto___17231 < len__8226__auto___17230)){
args__8233__auto__.push((arguments[i__8227__auto___17231]));

var G__17232 = (i__8227__auto___17231 + (1));
i__8227__auto___17231 = G__17232;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((2) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8234__auto__);
});

tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tree){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__7955__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","*par*","tiltontec.model.core/*par*",1276645059,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"me","me",1501524834,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","*par*","tiltontec.model.core/*par*",1276645059,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","remove","cljs.core/remove",20102034,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","flatten","cljs.core/flatten",-237795822,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),tree)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
});

tiltontec.model.core.the_kids.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.the_kids.cljs$lang$applyTo = (function (seq17227){
var G__17228 = cljs.core.first.call(null,seq17227);
var seq17227__$1 = cljs.core.next.call(null,seq17227);
var G__17229 = cljs.core.first.call(null,seq17227__$1);
var seq17227__$2 = cljs.core.next.call(null,seq17227__$1);
return tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic(G__17228,G__17229,seq17227__$2);
});


tiltontec.model.core.the_kids.cljs$lang$macro = true;
tiltontec.model.core.c_QMARK_kids = (function tiltontec$model$core$c_QMARK_kids(var_args){
var args__8233__auto__ = [];
var len__8226__auto___17236 = arguments.length;
var i__8227__auto___17237 = (0);
while(true){
if((i__8227__auto___17237 < len__8226__auto___17236)){
args__8233__auto__.push((arguments[i__8227__auto___17237]));

var G__17238 = (i__8227__auto___17237 + (1));
i__8227__auto___17237 = G__17238;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((2) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8234__auto__);
});

tiltontec.model.core.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tree){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?","tiltontec.model.core/c?",508213181,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"me","me",1501524834,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"no me for c?kids"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null)),tree)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
});

tiltontec.model.core.c_QMARK_kids.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.c_QMARK_kids.cljs$lang$applyTo = (function (seq17233){
var G__17234 = cljs.core.first.call(null,seq17233);
var seq17233__$1 = cljs.core.next.call(null,seq17233);
var G__17235 = cljs.core.first.call(null,seq17233__$1);
var seq17233__$2 = cljs.core.next.call(null,seq17233__$1);
return tiltontec.model.core.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic(G__17234,G__17235,seq17233__$2);
});


tiltontec.model.core.c_QMARK_kids.cljs$lang$macro = true;
tiltontec.model.core.kid_values_kids = (function tiltontec$model$core$kid_values_kids(me,x_kids){
var x_kids__$1 = ((cljs.core._EQ_.call(null,x_kids,tiltontec.cell.base.unbound))?cljs.core.PersistentVector.EMPTY:x_kids);
var k_key = tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"kid-key","kid-key",-779444857));
var k_factory = tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"kid-factory","kid-factory",339890394));
if(cljs.core.truth_(k_key)){
} else {
throw (new Error("Assert failed: (and k-key)"));
}

if(cljs.core.truth_(k_factory)){
} else {
throw (new Error("Assert failed: (and k-factory)"));
}

return cljs.core.doall.call(null,(function (){var iter__7901__auto__ = ((function (x_kids__$1,k_key,k_factory){
return (function tiltontec$model$core$kid_values_kids_$_iter__17247(s__17248){
return (new cljs.core.LazySeq(null,((function (x_kids__$1,k_key,k_factory){
return (function (){
var s__17248__$1 = s__17248;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__17248__$1);
if(temp__4657__auto__){
var s__17248__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17248__$2)){
var c__7899__auto__ = cljs.core.chunk_first.call(null,s__17248__$2);
var size__7900__auto__ = cljs.core.count.call(null,c__7899__auto__);
var b__17250 = cljs.core.chunk_buffer.call(null,size__7900__auto__);
if((function (){var i__17249 = (0);
while(true){
if((i__17249 < size__7900__auto__)){
var kid_value = cljs.core._nth.call(null,c__7899__auto__,i__17249);
cljs.core.chunk_append.call(null,b__17250,(function (){var or__7113__auto__ = cljs.core.some.call(null,((function (i__17249,kid_value,c__7899__auto__,size__7900__auto__,b__17250,s__17248__$2,temp__4657__auto__,x_kids__$1,k_key,k_factory){
return (function (x_kid){
if(cljs.core._EQ_.call(null,kid_value,k_key.call(null,x_kid))){
return x_kid;
} else {
return null;
}
});})(i__17249,kid_value,c__7899__auto__,size__7900__auto__,b__17250,s__17248__$2,temp__4657__auto__,x_kids__$1,k_key,k_factory))
,x_kids__$1);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
var _STAR_par_STAR_17253 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return k_factory.call(null,me,kid_value);
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_17253;
}}
})());

var G__17255 = (i__17249 + (1));
i__17249 = G__17255;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17250),tiltontec$model$core$kid_values_kids_$_iter__17247.call(null,cljs.core.chunk_rest.call(null,s__17248__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17250),null);
}
} else {
var kid_value = cljs.core.first.call(null,s__17248__$2);
return cljs.core.cons.call(null,(function (){var or__7113__auto__ = cljs.core.some.call(null,((function (kid_value,s__17248__$2,temp__4657__auto__,x_kids__$1,k_key,k_factory){
return (function (x_kid){
if(cljs.core._EQ_.call(null,kid_value,k_key.call(null,x_kid))){
return x_kid;
} else {
return null;
}
});})(kid_value,s__17248__$2,temp__4657__auto__,x_kids__$1,k_key,k_factory))
,x_kids__$1);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
var _STAR_par_STAR_17254 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return k_factory.call(null,me,kid_value);
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_17254;
}}
})(),tiltontec$model$core$kid_values_kids_$_iter__17247.call(null,cljs.core.rest.call(null,s__17248__$2)));
}
} else {
return null;
}
break;
}
});})(x_kids__$1,k_key,k_factory))
,null,null));
});})(x_kids__$1,k_key,k_factory))
;
return iter__7901__auto__.call(null,tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"kid-values","kid-values",575730341)));
})());
});

//# sourceMappingURL=core.js.map