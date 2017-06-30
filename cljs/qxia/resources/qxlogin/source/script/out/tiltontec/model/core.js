// Compiled by ClojureScript 1.9.36 {}
goog.provide('tiltontec.model.core');
goog.require('cljs.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.base');
goog.require('tiltontec.cell.core');
goog.require('clojure.set');
goog.require('tiltontec.util.base');
goog.require('tiltontec.cell.integrity');
tiltontec.model.core.md_name = (function tiltontec$model$core$md_name(me){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
});
tiltontec.model.core.md_get = (function tiltontec$model$core$md_get(me,slot){
var temp__4423__auto__ = tiltontec.model.base.md_cell.call(null,me,slot);
if(cljs.core.truth_(temp__4423__auto__)){
var c = temp__4423__auto__;
return tiltontec.cell.evaluate.c_get.call(null,c);
} else {
return slot.call(null,cljs.core.deref.call(null,me));
}
});
tiltontec.model.core.md_getx = (function tiltontec$model$core$md_getx(tag,me,slot){
return tiltontec.model.core.md_get.call(null,me,slot);
});
tiltontec.model.core._STAR_par_STAR_ = null;
tiltontec.model.core.md_reset_BANG_ = (function tiltontec$model$core$md_reset_BANG_(me,slot,new_value){
var temp__4423__auto__ = tiltontec.model.base.md_cell.call(null,me,slot);
if(cljs.core.truth_(temp__4423__auto__)){
var c = temp__4423__auto__;
return tiltontec.cell.core.c_reset_BANG_.call(null,c,new_value);
} else {
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,me),slot)){
return tiltontec.util.core.err.call(null,cljs.core.str,"change not mediated by cell ",slot,"/",tiltontec.cell.base.ia_type.call(null,me));
} else {
return tiltontec.util.core.err.call(null,cljs.core.str,"change to slot not mediated by cell and map lacks slot",slot);
}
}
});
tiltontec.model.core.make = (function tiltontec$model$core$make(var_args){
var args__7292__auto__ = [];
var len__7285__auto___19017 = arguments.length;
var i__7286__auto___19018 = (0);
while(true){
if((i__7286__auto___19018 < len__7285__auto___19017)){
args__7292__auto__.push((arguments[i__7286__auto___19018]));

var G__19019 = (i__7286__auto___19018 + (1));
i__7286__auto___19018 = G__19019;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((0) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((0)),(0),null)):null);
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(argseq__7293__auto__);
});

tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic = (function (arg_list){
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,arg_list))){
return cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),arg_list);
} else {
var iargs = cljs.core.apply.call(null,cljs.core.hash_map,arg_list);
var me = cljs.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"par","par",-61778778),tiltontec.model.core._STAR_par_STAR_], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (iargs){
return (function (p__19005){
var vec__19006 = p__19005;
var k = cljs.core.nth.call(null,vec__19006,(0),null);
var v = cljs.core.nth.call(null,vec__19006,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,v))?tiltontec.cell.base.unbound:v)],null));
});})(iargs))
,cljs.core.filter.call(null,((function (iargs){
return (function (p__19009){
var vec__19010 = p__19009;
var slot = cljs.core.nth.call(null,vec__19010,(0),null);
var v = cljs.core.nth.call(null,vec__19010,(1),null);
return !(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348),slot));
});})(iargs))
,cljs.core.partition.call(null,(2),arg_list))))),new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"nascent","nascent",443401807)], null),cljs.core.select_keys.call(null,iargs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348)], null))));
if(cljs.core.truth_(cljs.core.meta.call(null,me))){
} else {
throw (new Error("Assert failed: (meta me)"));
}

tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cz","cz",1670864932),me], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.filter.call(null,((function (iargs,me){
return (function (p__19013){
var vec__19014 = p__19013;
var slot = cljs.core.nth.call(null,vec__19014,(0),null);
var v = cljs.core.nth.call(null,vec__19014,(1),null);
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

tiltontec.model.core.make.cljs$lang$applyTo = (function (seq19004){
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19004));
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
var seq__19020 = cljs.core.seq.call(null,lostks);
var chunk__19021 = null;
var count__19022 = (0);
var i__19023 = (0);
while(true){
if((i__19023 < count__19022)){
var k = cljs.core._nth.call(null,chunk__19021,i__19023);
tiltontec.cell.evaluate.not_to_be.call(null,k);

var G__19024 = seq__19020;
var G__19025 = chunk__19021;
var G__19026 = count__19022;
var G__19027 = (i__19023 + (1));
seq__19020 = G__19024;
chunk__19021 = G__19025;
count__19022 = G__19026;
i__19023 = G__19027;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19020);
if(temp__4425__auto__){
var seq__19020__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19020__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__19020__$1);
var G__19028 = cljs.core.chunk_rest.call(null,seq__19020__$1);
var G__19029 = c__7021__auto__;
var G__19030 = cljs.core.count.call(null,c__7021__auto__);
var G__19031 = (0);
seq__19020 = G__19028;
chunk__19021 = G__19029;
count__19022 = G__19030;
i__19023 = G__19031;
continue;
} else {
var k = cljs.core.first.call(null,seq__19020__$1);
tiltontec.cell.evaluate.not_to_be.call(null,k);

var G__19032 = cljs.core.next.call(null,seq__19020__$1);
var G__19033 = null;
var G__19034 = (0);
var G__19035 = (0);
seq__19020 = G__19032;
chunk__19021 = G__19033;
count__19022 = G__19034;
i__19023 = G__19035;
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
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,poss))){
} else {
throw (new Error("Assert failed: (any-ref? poss)"));
}

if(cljs.core.fn_QMARK_.call(null,seek)){
return seek.call(null,poss);
} else {
if((seek instanceof cljs.core.Keyword)){
return (cljs.core._EQ_.call(null,seek,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,poss)))) || (cljs.core.isa_QMARK_.call(null,tiltontec.cell.base.ia_type.call(null,poss),seek));
} else {
return cljs.core._EQ_.call(null,seek,poss);

}
}
});
tiltontec.model.core.fget = (function tiltontec$model$core$fget(var_args){
var args__7292__auto__ = [];
var len__7285__auto___19041 = arguments.length;
var i__7286__auto___19042 = (0);
while(true){
if((i__7286__auto___19042 < len__7285__auto___19041)){
args__7292__auto__.push((arguments[i__7286__auto___19042]));

var G__19043 = (i__7286__auto___19042 + (1));
i__7286__auto___19042 = G__19043;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic = (function (what,where,options){
if(cljs.core.truth_((function (){var and__6198__auto__ = where;
if(cljs.core.truth_(and__6198__auto__)){
return what;
} else {
return and__6198__auto__;
}
})())){
var options__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"inside?","inside?",639243696),false,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"wocd?","wocd?",-195637516),true], null),cljs.core.apply.call(null,cljs.core.hash_map,options));
var _STAR_depender_STAR_19040 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = (cljs.core.truth_(new cljs.core.Keyword(null,"wocd?","wocd?",-195637516).cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);

try{var or__6210__auto__ = (function (){var and__6198__auto__ = new cljs.core.Keyword(null,"me?","me?",-625404259).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = tiltontec.model.core.fget_EQ_.call(null,what,where);
if(cljs.core.truth_(and__6198__auto____$1)){
return where;
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})();
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
var or__6210__auto____$1 = (function (){var and__6198__auto__ = new cljs.core.Keyword(null,"inside?","inside?",639243696).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6198__auto__)){
var temp__4423__auto__ = tiltontec.model.core.md_get.call(null,where,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4423__auto__)){
var kids = temp__4423__auto__;
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"inside-kids!!!","inside-kids!!!",-988551250),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where)));

var temp__4423__auto____$1 = cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"skip","skip",602715391).cljs$core$IFn$_invoke$arity$1(options__$1)], true),kids);
if(cljs.core.truth_(temp__4423__auto____$1)){
var netkids = temp__4423__auto____$1;
return cljs.core.some.call(null,((function (netkids,temp__4423__auto____$1,kids,temp__4423__auto__,and__6198__auto__,or__6210__auto__,_STAR_depender_STAR_19040,options__$1){
return (function (p1__19036_SHARP_){
return tiltontec.model.core.fget.call(null,what,p1__19036_SHARP_,new cljs.core.Keyword(null,"me?","me?",-625404259),true,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"up?","up?",77854972),false);
});})(netkids,temp__4423__auto____$1,kids,temp__4423__auto__,and__6198__auto__,or__6210__auto__,_STAR_depender_STAR_19040,options__$1))
,netkids);
} else {
return tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"no-net-kids","no-net-kids",1963649640));
}
} else {
return tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"inside-no-kids","inside-no-kids",-1437068961),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where)));
}
} else {
return and__6198__auto__;
}
})();
if(cljs.core.truth_(or__6210__auto____$1)){
return or__6210__auto____$1;
} else {
var or__6210__auto____$2 = (function (){var and__6198__auto__ = new cljs.core.Keyword(null,"up?","up?",77854972).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6198__auto__)){
var temp__4425__auto__ = new cljs.core.Keyword(null,"par","par",-61778778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where));
if(cljs.core.truth_(temp__4425__auto__)){
var par = temp__4425__auto__;
return tiltontec.model.core.fget.call(null,what,par,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"me?","me?",-625404259),true,new cljs.core.Keyword(null,"skip","skip",602715391),where,new cljs.core.Keyword(null,"inside?","inside?",639243696),true);
} else {
return null;
}
} else {
return and__6198__auto__;
}
})();
if(cljs.core.truth_(or__6210__auto____$2)){
return or__6210__auto____$2;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"must?","must?",1639898554).cljs$core$IFn$_invoke$arity$1(options__$1))){
return tiltontec.util.core.err.call(null,new cljs.core.Keyword(null,"fget-must-failed","fget-must-failed",237242954),what,where,options__$1);
} else {
return null;
}
}
}
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_19040;
}} else {
return null;
}
});

tiltontec.model.core.fget.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.fget.cljs$lang$applyTo = (function (seq19037){
var G__19038 = cljs.core.first.call(null,seq19037);
var seq19037__$1 = cljs.core.next.call(null,seq19037);
var G__19039 = cljs.core.first.call(null,seq19037__$1);
var seq19037__$2 = cljs.core.next.call(null,seq19037__$1);
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic(G__19038,G__19039,seq19037__$2);
});

tiltontec.model.core.fm_BANG_ = (function tiltontec$model$core$fm_BANG_(what,where){
return tiltontec.model.core.fget.call(null,what,where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"must?","must?",1639898554),true,new cljs.core.Keyword(null,"up?","up?",77854972),true);
});
tiltontec.model.core.mdv_BANG_ = (function tiltontec$model$core$mdv_BANG_(var_args){
var args__7292__auto__ = [];
var len__7285__auto___19053 = arguments.length;
var i__7286__auto___19054 = (0);
while(true){
if((i__7286__auto___19054 < len__7285__auto___19053)){
args__7292__auto__.push((arguments[i__7286__auto___19054]));

var G__19055 = (i__7286__auto___19054 + (1));
i__7286__auto___19054 = G__19055;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,what,slot,p__19049){
var vec__19050 = p__19049;
var me = cljs.core.nth.call(null,vec__19050,(0),null);
var me__$1 = (function (){var or__6210__auto__ = me;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return new cljs.core.Symbol(null,"me","me",1501524834,null);
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","md-get","tiltontec.model.core/md-get",-1259532148,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","fm!","tiltontec.model.core/fm!",-726483993,null)),(function (){var x__7044__auto__ = what;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = me__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.model.core.mdv_BANG_.cljs$lang$maxFixedArity = (4);

tiltontec.model.core.mdv_BANG_.cljs$lang$applyTo = (function (seq19044){
var G__19045 = cljs.core.first.call(null,seq19044);
var seq19044__$1 = cljs.core.next.call(null,seq19044);
var G__19046 = cljs.core.first.call(null,seq19044__$1);
var seq19044__$2 = cljs.core.next.call(null,seq19044__$1);
var G__19047 = cljs.core.first.call(null,seq19044__$2);
var seq19044__$3 = cljs.core.next.call(null,seq19044__$2);
var G__19048 = cljs.core.first.call(null,seq19044__$3);
var seq19044__$4 = cljs.core.next.call(null,seq19044__$3);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19045,G__19046,G__19047,G__19048,seq19044__$4);
});


tiltontec.model.core.mdv_BANG_.cljs$lang$macro = true;
tiltontec.model.core.fval = (function tiltontec$model$core$fval(var_args){
var args__7292__auto__ = [];
var len__7285__auto___19065 = arguments.length;
var i__7286__auto___19066 = (0);
while(true){
if((i__7286__auto___19066 < len__7285__auto___19065)){
args__7292__auto__.push((arguments[i__7286__auto___19066]));

var G__19067 = (i__7286__auto___19066 + (1));
i__7286__auto___19066 = G__19067;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.model.core.fval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.model.core.fval.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,what,slot,p__19061){
var vec__19062 = p__19061;
var me = cljs.core.nth.call(null,vec__19062,(0),null);
var me__$1 = (function (){var or__6210__auto__ = me;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return new cljs.core.Symbol(null,"me","me",1501524834,null);
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","md-get","tiltontec.model.core/md-get",-1259532148,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","fget","tiltontec.model.core/fget",500278810,null)),(function (){var x__7044__auto__ = what;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = me__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.model.core.fval.cljs$lang$maxFixedArity = (4);

tiltontec.model.core.fval.cljs$lang$applyTo = (function (seq19056){
var G__19057 = cljs.core.first.call(null,seq19056);
var seq19056__$1 = cljs.core.next.call(null,seq19056);
var G__19058 = cljs.core.first.call(null,seq19056__$1);
var seq19056__$2 = cljs.core.next.call(null,seq19056__$1);
var G__19059 = cljs.core.first.call(null,seq19056__$2);
var seq19056__$3 = cljs.core.next.call(null,seq19056__$2);
var G__19060 = cljs.core.first.call(null,seq19056__$3);
var seq19056__$4 = cljs.core.next.call(null,seq19056__$3);
return tiltontec.model.core.fval.cljs$core$IFn$_invoke$arity$variadic(G__19057,G__19058,G__19059,G__19060,seq19056__$4);
});


tiltontec.model.core.fval.cljs$lang$macro = true;
tiltontec.model.core.the_kids = (function tiltontec$model$core$the_kids(var_args){
var args__7292__auto__ = [];
var len__7285__auto___19071 = arguments.length;
var i__7286__auto___19072 = (0);
while(true){
if((i__7286__auto___19072 < len__7285__auto___19071)){
args__7292__auto__.push((arguments[i__7286__auto___19072]));

var G__19073 = (i__7286__auto___19072 + (1));
i__7286__auto___19072 = G__19073;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tree){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","*par*","tiltontec.model.core/*par*",1276645059,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"me","me",1501524834,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","remove","cljs.core/remove",20102034,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","flatten","cljs.core/flatten",-237795822,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),tree)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.model.core.the_kids.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.the_kids.cljs$lang$applyTo = (function (seq19068){
var G__19069 = cljs.core.first.call(null,seq19068);
var seq19068__$1 = cljs.core.next.call(null,seq19068);
var G__19070 = cljs.core.first.call(null,seq19068__$1);
var seq19068__$2 = cljs.core.next.call(null,seq19068__$1);
return tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic(G__19069,G__19070,seq19068__$2);
});


tiltontec.model.core.the_kids.cljs$lang$macro = true;
tiltontec.model.core.c_QMARK_kids = (function tiltontec$model$core$c_QMARK_kids(var_args){
var args__7292__auto__ = [];
var len__7285__auto___19077 = arguments.length;
var i__7286__auto___19078 = (0);
while(true){
if((i__7286__auto___19078 < len__7285__auto___19077)){
args__7292__auto__.push((arguments[i__7286__auto___19078]));

var G__19079 = (i__7286__auto___19078 + (1));
i__7286__auto___19078 = G__19079;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.model.core.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tree){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?","tiltontec.model.core/c?",508213181,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null)),tree)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.model.core.c_QMARK_kids.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.c_QMARK_kids.cljs$lang$applyTo = (function (seq19074){
var G__19075 = cljs.core.first.call(null,seq19074);
var seq19074__$1 = cljs.core.next.call(null,seq19074);
var G__19076 = cljs.core.first.call(null,seq19074__$1);
var seq19074__$2 = cljs.core.next.call(null,seq19074__$1);
return tiltontec.model.core.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic(G__19075,G__19076,seq19074__$2);
});


tiltontec.model.core.c_QMARK_kids.cljs$lang$macro = true;
