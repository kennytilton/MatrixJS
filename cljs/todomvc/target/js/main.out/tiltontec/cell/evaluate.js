// Compiled by ClojureScript 1.9.473 {}
goog.provide('tiltontec.cell.evaluate');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.integrity');
cljs.core._STAR_print_level_STAR_ = (3);
tiltontec.cell.evaluate.ephemeral_reset = (function tiltontec$cell$evaluate$ephemeral_reset(rc){
if(cljs.core.truth_(tiltontec.cell.base.c_ephemeral_QMARK_.call(null,rc))){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"ephemeral-reset","ephemeral-reset",-1442676603),rc,(function (opcode,defer_info){
var temp__4657__auto___16813 = new cljs.core.Keyword(null,"me","me",-139006693).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rc));
if(cljs.core.truth_(temp__4657__auto___16813)){
var me_16814 = temp__4657__auto___16813;
cljs.core.swap_BANG_.call(null,me_16814,cljs.core.assoc,new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rc)),null);
} else {
}

return cljs.core.swap_BANG_.call(null,rc,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),null);
}));
} else {
return null;
}
});
tiltontec.cell.evaluate.record_dependency = (function tiltontec$cell$evaluate$record_dependency(used){
if(cljs.core.truth_(tiltontec.cell.base.c_optimized_away_QMARK_.call(null,used))){
return null;
} else {
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
} else {
throw (new Error("Assert failed: *depender*"));
}

tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"reco-dep!!!","reco-dep!!!",380319801),new cljs.core.Keyword(null,"used","used",-1414786177),tiltontec.cell.base.c_slot.call(null,used),new cljs.core.Keyword(null,"caller","caller",-1275362879),tiltontec.cell.base.c_slot.call(null,tiltontec.cell.base._STAR_depender_STAR_));

tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"useds","useds",621350967),tiltontec.cell.base._STAR_depender_STAR_], null),cljs.core.conj.call(null,tiltontec.cell.base.c_useds.call(null,tiltontec.cell.base._STAR_depender_STAR_),used));

return tiltontec.cell.base.caller_ensure.call(null,used,tiltontec.cell.base._STAR_depender_STAR_);
}
});
/**
 * The key to data integrity: recursively check the known dependency
 *   graph to decide if we are current, and if not kick off recalculation
 *   and propagation.
 */
tiltontec.cell.evaluate.ensure_value_is_current = (function tiltontec$cell$evaluate$ensure_value_is_current(c,debug_id,ensurer){
if(tiltontec.cell.base._STAR_not_to_be_STAR_){
if(cljs.core.truth_(tiltontec.cell.base.c_unbound_QMARK_.call(null,c))){
return tiltontec.util.core.err.call(null,"evic> unbound slot %s of model %s",tiltontec.cell.base.c_slot.call(null,c),tiltontec.cell.base.c_model.call(null,c));
} else {
if(cljs.core.truth_(tiltontec.cell.base.c_valid_QMARK_.call(null,c))){
return tiltontec.cell.base.c_value.call(null,c);
} else {
return null;
}
}
} else {
if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_.call(null,c))){
return tiltontec.cell.base.c_value.call(null,c);
} else {
if(cljs.core.truth_((function (){var and__7101__auto__ = tiltontec.cell.base.c_input_QMARK_.call(null,c);
if(cljs.core.truth_(and__7101__auto__)){
var and__7101__auto____$1 = tiltontec.cell.base.c_valid_QMARK_.call(null,c);
if(cljs.core.truth_(and__7101__auto____$1)){
return cljs.core.not.call(null,(function (){var and__7101__auto____$2 = tiltontec.cell.base.c_formula_QMARK_.call(null,c);
if(cljs.core.truth_(and__7101__auto____$2)){
return (cljs.core._EQ_.call(null,tiltontec.cell.base.c_optimize.call(null,c),new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336))) && ((tiltontec.cell.base.c_value.call(null,c) == null));
} else {
return and__7101__auto____$2;
}
})());
} else {
return and__7101__auto____$1;
}
} else {
return and__7101__auto__;
}
})())){
return tiltontec.cell.base.c_value.call(null,c);
} else {
if(cljs.core.truth_((function (){var temp__4657__auto__ = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(temp__4657__auto__)){
var md = temp__4657__auto__;
return tiltontec.cell.base.mdead_QMARK_.call(null,tiltontec.cell.base.c_model.call(null,c));
} else {
return null;
}
})())){
return tiltontec.util.core.err.call(null,cljs.core.str,"evic> model %s of cell %s is dead",tiltontec.cell.base.c_model.call(null,c),c);
} else {
if(cljs.core.truth_((function (){var or__7113__auto__ = cljs.core.not.call(null,tiltontec.cell.base.c_valid_QMARK_.call(null,c));
if(or__7113__auto__){
return or__7113__auto__;
} else {
var G__16848 = cljs.core.seq.call(null,tiltontec.cell.base.c_useds.call(null,c));
var vec__16849 = G__16848;
var seq__16850 = cljs.core.seq.call(null,vec__16849);
var first__16851 = cljs.core.first.call(null,seq__16850);
var seq__16850__$1 = cljs.core.next.call(null,seq__16850);
var used = first__16851;
var urest = seq__16850__$1;
var G__16848__$1 = G__16848;
while(true){
var vec__16852 = G__16848__$1;
var seq__16853 = cljs.core.seq.call(null,vec__16852);
var first__16854 = cljs.core.first.call(null,seq__16853);
var seq__16853__$1 = cljs.core.next.call(null,seq__16853);
var used__$1 = first__16854;
var urest__$1 = seq__16853__$1;
if(cljs.core.truth_(used__$1)){
tiltontec.cell.evaluate.ensure_value_is_current.call(null,used__$1,new cljs.core.Keyword(null,"nested","nested",18943849),c);

var or__7113__auto____$1 = (tiltontec.cell.base.c_pulse_last_changed.call(null,used__$1) > tiltontec.cell.base.c_pulse.call(null,c));
if(or__7113__auto____$1){
return or__7113__auto____$1;
} else {
var G__16855 = urest__$1;
G__16848__$1 = G__16855;
continue;
}
} else {
return null;
}
break;
}
}
})())){
if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_.call(null,c))){
} else {
tiltontec.cell.evaluate.calculate_and_set.call(null,c,new cljs.core.Keyword(null,"evic","evic",1309656753),ensurer);
}

return tiltontec.cell.base.c_value.call(null,c);
} else {
tiltontec.cell.integrity.c_pulse_update.call(null,c,new cljs.core.Keyword(null,"valid-uninfluenced","valid-uninfluenced",676756797));

return tiltontec.cell.base.c_value.call(null,c);

}
}
}
}
}
});
/**
 * The API for determing the value associated with a Cell.
 *   Ensures value is current, records any dependent, and
 *   notices if a standalone  cell has never been observed.
 */
tiltontec.cell.evaluate.c_get = (function tiltontec$cell$evaluate$c_get(c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
var result__8573__auto__ = tiltontec.cell.integrity.call_with_integrity.call(null,null,null,(function (opcode,defer_info){
var prior_value = tiltontec.cell.base.c_value.call(null,c);
var result__8573__auto__ = (function (){var ev = tiltontec.cell.evaluate.ensure_value_is_current.call(null,c,new cljs.core.Keyword(null,"c-read","c-read",-1481921085),null);
return ev;
})();
if(((tiltontec.cell.base.c_model.call(null,c) == null)) && (cljs.core._EQ_.call(null,tiltontec.cell.base.c_state.call(null,c),new cljs.core.Keyword(null,"nascent","nascent",443401807))) && ((cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed.call(null,c)))){
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),c], null),new cljs.core.Keyword(null,"awake","awake",1922840899));

tiltontec.cell.observer.c_observe.call(null,c,prior_value,new cljs.core.Keyword(null,"cget","cget",1794378742));

tiltontec.cell.evaluate.ephemeral_reset.call(null,c);
} else {
}

return result__8573__auto__;
}));
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
tiltontec.cell.evaluate.record_dependency.call(null,c);
} else {
}

return result__8573__auto__;
} else {
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,c))){
return cljs.core.deref.call(null,c);
} else {
return c;

}
}
});

/**
 * Calculate, link, record, and propagate.
 */
tiltontec.cell.evaluate.calculate_and_set = (function tiltontec$cell$evaluate$calculate_and_set(c,dbgid,dbgdata){
var raw_value = tiltontec.cell.evaluate.calculate_and_link.call(null,c);
if(cljs.core.truth_(tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c))){
return null;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,c))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("calc-n-set"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(map? (clojure.core/deref c))")].join('')));
}

return tiltontec.cell.evaluate.c_value_assume.call(null,c,raw_value,null);
}
});
/**
 * The name is accurate: we do no more than invoke the
 *   rule of a formula and return its value, but along the
 *   way the links between dependencies and dependents get
 *   determined anew.
 */
tiltontec.cell.evaluate.calculate_and_link = (function tiltontec$cell$evaluate$calculate_and_link(c){
var _STAR_call_stack_STAR_16859 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_depender_STAR_16860 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_defer_changes_STAR_16861 = tiltontec.cell.base._STAR_defer_changes_STAR_;
tiltontec.cell.base._STAR_call_stack_STAR_ = cljs.core.cons.call(null,c,tiltontec.cell.base._STAR_call_stack_STAR_);

tiltontec.cell.base._STAR_depender_STAR_ = c;

tiltontec.cell.base._STAR_defer_changes_STAR_ = true;

try{tiltontec.cell.evaluate.unlink_from_used.call(null,c,new cljs.core.Keyword(null,"pre-rule-clear","pre-rule-clear",258781380));

if(cljs.core.truth_(tiltontec.cell.base.c_rule.call(null,c))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No rule in %s type %s"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,cljs.core.deref.call(null,c)))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(c-rule c)")].join('')));
}

return tiltontec.cell.base.c_rule.call(null,c).call(null,c);
}finally {tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR_16861;

tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_16860;

tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR_16859;
}});
if(typeof tiltontec.cell.evaluate.c_awaken !== 'undefined'){
} else {
tiltontec.cell.evaluate.c_awaken = (function (){var method_table__8046__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8047__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8048__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8049__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8050__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.cell.evaluate","c-awaken"),((function (method_table__8046__auto__,prefer_table__8047__auto__,method_cache__8048__auto__,cached_hierarchy__8049__auto__,hierarchy__8050__auto__){
return (function (c){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,c));
});})(method_table__8046__auto__,prefer_table__8047__auto__,method_cache__8048__auto__,cached_hierarchy__8049__auto__,hierarchy__8050__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8050__auto__,method_table__8046__auto__,prefer_table__8047__auto__,method_cache__8048__auto__,cached_hierarchy__8049__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.cell.evaluate.c_awaken,new cljs.core.Keyword(null,"default","default",-1987822328),(function (c){
if(cljs.core.coll_QMARK_.call(null,c)){
return cljs.core.doall.call(null,(function (){var iter__7901__auto__ = (function tiltontec$cell$evaluate$iter__16862(s__16863){
return (new cljs.core.LazySeq(null,(function (){
var s__16863__$1 = s__16863;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16863__$1);
if(temp__4657__auto__){
var s__16863__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16863__$2)){
var c__7899__auto__ = cljs.core.chunk_first.call(null,s__16863__$2);
var size__7900__auto__ = cljs.core.count.call(null,c__7899__auto__);
var b__16865 = cljs.core.chunk_buffer.call(null,size__7900__auto__);
if((function (){var i__16864 = (0);
while(true){
if((i__16864 < size__7900__auto__)){
var ce = cljs.core._nth.call(null,c__7899__auto__,i__16864);
cljs.core.chunk_append.call(null,b__16865,tiltontec.cell.evaluate.c_awaken.call(null,ce));

var G__16866 = (i__16864 + (1));
i__16864 = G__16866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16865),tiltontec$cell$evaluate$iter__16862.call(null,cljs.core.chunk_rest.call(null,s__16863__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16865),null);
}
} else {
var ce = cljs.core.first.call(null,s__16863__$2);
return cljs.core.cons.call(null,tiltontec.cell.evaluate.c_awaken.call(null,ce),tiltontec$cell$evaluate$iter__16862.call(null,cljs.core.rest.call(null,s__16863__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7901__auto__.call(null,c);
})());
} else {
return cljs.core.println.call(null,new cljs.core.Keyword(null,"c-awaken-fall-thru","c-awaken-fall-thru",-2004606871),(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,c))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref-of","ref-of",1886926194),cljs.core.type.call(null,c),cljs.core.deref.call(null,c)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unref","unref",-1884894186),c,cljs.core.type.call(null,c)], null)));

}
}));
cljs.core._add_method.call(null,tiltontec.cell.evaluate.c_awaken,new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071),(function (c){
if(cljs.core.truth_(tiltontec.cell.base.c_input_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (c-input? c)"));
}

if((cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed.call(null,c))){
var temp__4657__auto___16867 = tiltontec.cell.base.c_me.call(null,c);
if(cljs.core.truth_(temp__4657__auto___16867)){
var me_16868 = temp__4657__auto___16867;
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_slot.call(null,c),me_16868], null),tiltontec.cell.base.c_value.call(null,c));
} else {
}

tiltontec.cell.observer.c_observe.call(null,c,new cljs.core.Keyword(null,"cell-awaken","cell-awaken",2137807704));

return tiltontec.cell.evaluate.ephemeral_reset.call(null,c);
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.evaluate.c_awaken,new cljs.core.Keyword("tiltontec.cell.base","c-formula","tiltontec.cell.base/c-formula",-1020749037),(function (c){
var _STAR_depender_STAR_16869 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_.call(null,c))){
return null;
} else {
return tiltontec.cell.evaluate.calculate_and_set.call(null,c,new cljs.core.Keyword(null,"fn-c-awaken","fn-c-awaken",1597115821),null);
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_16869;
}}));



tiltontec.cell.evaluate.md_slot_value_store = (function tiltontec$cell$evaluate$md_slot_value_store(me,slot,value){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,me))){
} else {
throw (new Error("Assert failed: (any-ref? me)"));
}

return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),value);
});
/**
 * The Cell assumes a new value at awakening, on c-reset!, or
 * after formula recalculation.
 * 
 *   We record the new value, set the Cell state to :awake, make
 *   its pulse current, check to see if a formula cell can be
 *   optimized away, and then propagate to any dependent formula
 *   cells.
 */
tiltontec.cell.evaluate.c_value_assume = (function tiltontec$cell$evaluate$c_value_assume(c,new_value,propagation_code){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

var result__8573__auto__ = new_value;
var _STAR_depender_STAR_16872_16874 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var prior_value_16875 = tiltontec.cell.base.c_value.call(null,c);
var prior_state_16876 = tiltontec.cell.base.c_value_state.call(null,c);
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),c], null),new_value);

tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),c], null),new cljs.core.Keyword(null,"awake","awake",1922840899));

if(cljs.core.truth_((function (){var and__7101__auto__ = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(and__7101__auto__)){
return cljs.core.not.call(null,tiltontec.cell.base.c_synaptic_QMARK_.call(null,c));
} else {
return and__7101__auto__;
}
})())){
tiltontec.cell.evaluate.md_slot_value_store.call(null,tiltontec.cell.base.c_model.call(null,c),tiltontec.cell.base.c_slot_name.call(null,c),new_value);
} else {
}

tiltontec.cell.integrity.c_pulse_update.call(null,c,new cljs.core.Keyword(null,"slotv-assume","slotv-assume",-1071260275));

if(cljs.core.truth_((function (){var or__7113__auto__ = cljs.core._EQ_.call(null,propagation_code,new cljs.core.Keyword(null,"propagate","propagate",274376905));
if(or__7113__auto__){
return or__7113__auto__;
} else {
var or__7113__auto____$1 = cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([prior_state_16876], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"valid","valid",155614240),new cljs.core.Keyword(null,"uncurrent","uncurrent",-217246265)], null)));
if(or__7113__auto____$1){
return or__7113__auto____$1;
} else {
return tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_16875);
}
}
})())){
var callers_16877 = tiltontec.cell.base.c_callers.call(null,c);
var temp__4657__auto___16878 = (function (){var and__7101__auto__ = tiltontec.cell.base.c_formula_QMARK_.call(null,c);
if(cljs.core.truth_(and__7101__auto__)){
return tiltontec.cell.base.c_optimize.call(null,c);
} else {
return and__7101__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto___16878)){
var optimize_16879 = temp__4657__auto___16878;
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"wtf","wtf",-1581114577),optimize_16879);

var G__16873_16880 = optimize_16879;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336),G__16873_16880)){
if(cljs.core.truth_(tiltontec.cell.base.c_value.call(null,c))){
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336),tiltontec.cell.base.c_slot.call(null,c));

tiltontec.cell.evaluate.unlink_from_used.call(null,c,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336));
} else {
}
} else {
if(cljs.core._EQ_.call(null,true,G__16873_16880)){
tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.call(null,c,prior_value_16875);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(optimize_16879)].join('')));

}
}
} else {
}

if(cljs.core.truth_((function (){var or__7113__auto__ = cljs.core._EQ_.call(null,propagation_code,new cljs.core.Keyword(null,"no-propagate","no-propagate",-573850970));
if(or__7113__auto__){
return or__7113__auto__;
} else {
return tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c);
}
})())){
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,c))){
} else {
throw (new Error("Assert failed: (map? (clojure.core/deref c))"));
}

tiltontec.cell.evaluate.propagate.call(null,c,prior_value_16875,callers_16877);
}
} else {
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_16872_16874;
}
return result__8573__auto__;
});
tiltontec.cell.evaluate.unlink_from_used = (function tiltontec$cell$evaluate$unlink_from_used(c,why){

var iter__7901__auto___16889 = (function tiltontec$cell$evaluate$unlink_from_used_$_iter__16885(s__16886){
return (new cljs.core.LazySeq(null,(function (){
var s__16886__$1 = s__16886;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16886__$1);
if(temp__4657__auto__){
var s__16886__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16886__$2)){
var c__7899__auto__ = cljs.core.chunk_first.call(null,s__16886__$2);
var size__7900__auto__ = cljs.core.count.call(null,c__7899__auto__);
var b__16888 = cljs.core.chunk_buffer.call(null,size__7900__auto__);
if((function (){var i__16887 = (0);
while(true){
if((i__16887 < size__7900__auto__)){
var used = cljs.core._nth.call(null,c__7899__auto__,i__16887);
cljs.core.chunk_append.call(null,b__16888,tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callers","callers",-1991542784),used], null),cljs.core.disj.call(null,tiltontec.cell.base.c_callers.call(null,used),c)));

var G__16890 = (i__16887 + (1));
i__16887 = G__16890;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16888),tiltontec$cell$evaluate$unlink_from_used_$_iter__16885.call(null,cljs.core.chunk_rest.call(null,s__16886__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16888),null);
}
} else {
var used = cljs.core.first.call(null,s__16886__$2);
return cljs.core.cons.call(null,tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callers","callers",-1991542784),used], null),cljs.core.disj.call(null,tiltontec.cell.base.c_callers.call(null,used),c)),tiltontec$cell$evaluate$unlink_from_used_$_iter__16885.call(null,cljs.core.rest.call(null,s__16886__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__7901__auto___16889.call(null,tiltontec.cell.base.c_useds.call(null,c));

return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"useds","useds",621350967),c], null),cljs.core.PersistentHashSet.EMPTY);
});
tiltontec.cell.evaluate.md_cell_flush = (function tiltontec$cell$evaluate$md_cell_flush(c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

var temp__4657__auto__ = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(temp__4657__auto__)){
var me = temp__4657__auto__;
return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells-flushed","cells-flushed",-1653073949),me], null),cljs.core.conj.call(null,new cljs.core.Keyword(null,"cells-flushed","cells-flushed",-1653073949).cljs$core$IFn$_invoke$arity$1(me),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_slot.call(null,c),tiltontec.cell.base.c_pulse_observed.call(null,c)], null)));
} else {
return null;
}
});
/**
 * Optimizes away cells who turn out not to depend on anyone, 
 *   saving a lot of work at runtime. A caller/user will not bother
 *   establishing a link, and when we get to models cget will 
 *   find a non-cell in a slot and Just Use It.
 */
tiltontec.cell.evaluate.optimize_away_QMARK__BANG_ = (function tiltontec$cell$evaluate$optimize_away_QMARK__BANG_(c,prior_value){
if(cljs.core.truth_((function (){var and__7101__auto__ = tiltontec.cell.base.c_formula_QMARK_.call(null,c);
if(cljs.core.truth_(and__7101__auto__)){
var and__7101__auto____$1 = cljs.core.empty_QMARK_.call(null,tiltontec.cell.base.c_useds.call(null,c));
if(and__7101__auto____$1){
var and__7101__auto____$2 = tiltontec.cell.base.c_optimize.call(null,c);
if(cljs.core.truth_(and__7101__auto____$2)){
var and__7101__auto____$3 = cljs.core.not.call(null,tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c));
if(and__7101__auto____$3){
var and__7101__auto____$4 = tiltontec.cell.base.c_valid_QMARK_.call(null,c);
if(cljs.core.truth_(and__7101__auto____$4)){
return (cljs.core.not.call(null,tiltontec.cell.base.c_synaptic_QMARK_.call(null,c))) && (cljs.core.not.call(null,tiltontec.cell.base.c_input_QMARK_.call(null,c)));
} else {
return and__7101__auto____$4;
}
} else {
return and__7101__auto____$3;
}
} else {
return and__7101__auto____$2;
}
} else {
return and__7101__auto____$1;
}
} else {
return and__7101__auto__;
}
})())){
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),c], null),new cljs.core.Keyword(null,"optimized-away","optimized-away",876765856));

tiltontec.cell.observer.c_observe.call(null,c,prior_value,new cljs.core.Keyword(null,"opti-away","opti-away",1290785499));

var temp__4657__auto___16899 = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(temp__4657__auto___16899)){
var me_16900 = temp__4657__auto___16899;
tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cz","cz",1670864932),me_16900], null),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me_16900)),tiltontec.cell.base.c_slot.call(null,c),null));

tiltontec.cell.evaluate.md_cell_flush.call(null,c);
} else {
}

var seq__16895_16901 = cljs.core.seq.call(null,cljs.core.seq.call(null,tiltontec.cell.base.c_callers.call(null,c)));
var chunk__16896_16902 = null;
var count__16897_16903 = (0);
var i__16898_16904 = (0);
while(true){
if((i__16898_16904 < count__16897_16903)){
var caller_16905 = cljs.core._nth.call(null,chunk__16896_16902,i__16898_16904);
cljs.core.swap_BANG_.call(null,caller_16905,cljs.core.assoc,new cljs.core.Keyword(null,"useds","useds",621350967),cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c], true),tiltontec.cell.base.c_useds.call(null,caller_16905)));

tiltontec.cell.base.caller_drop.call(null,c,caller_16905);

tiltontec.cell.evaluate.ensure_value_is_current.call(null,caller_16905,new cljs.core.Keyword(null,"opti-used","opti-used",660350789),c);

var G__16906 = seq__16895_16901;
var G__16907 = chunk__16896_16902;
var G__16908 = count__16897_16903;
var G__16909 = (i__16898_16904 + (1));
seq__16895_16901 = G__16906;
chunk__16896_16902 = G__16907;
count__16897_16903 = G__16908;
i__16898_16904 = G__16909;
continue;
} else {
var temp__4657__auto___16910 = cljs.core.seq.call(null,seq__16895_16901);
if(temp__4657__auto___16910){
var seq__16895_16911__$1 = temp__4657__auto___16910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16895_16911__$1)){
var c__7932__auto___16912 = cljs.core.chunk_first.call(null,seq__16895_16911__$1);
var G__16913 = cljs.core.chunk_rest.call(null,seq__16895_16911__$1);
var G__16914 = c__7932__auto___16912;
var G__16915 = cljs.core.count.call(null,c__7932__auto___16912);
var G__16916 = (0);
seq__16895_16901 = G__16913;
chunk__16896_16902 = G__16914;
count__16897_16903 = G__16915;
i__16898_16904 = G__16916;
continue;
} else {
var caller_16917 = cljs.core.first.call(null,seq__16895_16911__$1);
cljs.core.swap_BANG_.call(null,caller_16917,cljs.core.assoc,new cljs.core.Keyword(null,"useds","useds",621350967),cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c], true),tiltontec.cell.base.c_useds.call(null,caller_16917)));

tiltontec.cell.base.caller_drop.call(null,c,caller_16917);

tiltontec.cell.evaluate.ensure_value_is_current.call(null,caller_16917,new cljs.core.Keyword(null,"opti-used","opti-used",660350789),c);

var G__16918 = cljs.core.next.call(null,seq__16895_16911__$1);
var G__16919 = null;
var G__16920 = (0);
var G__16921 = (0);
seq__16895_16901 = G__16918;
chunk__16896_16902 = G__16919;
count__16897_16903 = G__16920;
i__16898_16904 = G__16921;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,c,tiltontec.cell.base.c_value.call(null,c));
} else {
return null;
}
});
tiltontec.cell.evaluate.c_quiesce = (function tiltontec$cell$evaluate$c_quiesce(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

tiltontec.cell.base.unlink_from_callers.call(null,c);

tiltontec.cell.evaluate.unlink_from_used.call(null,c,new cljs.core.Keyword(null,"quiesce","quiesce",-798294121));

return cljs.core.reset_BANG_.call(null,c,new cljs.core.Keyword(null,"dead-c","dead-c",385485497));
});
if(typeof tiltontec.cell.evaluate.not_to_be !== 'undefined'){
} else {
tiltontec.cell.evaluate.not_to_be = (function (){var method_table__8046__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8047__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8048__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8049__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8050__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.cell.evaluate","not-to-be"),((function (method_table__8046__auto__,prefer_table__8047__auto__,method_cache__8048__auto__,cached_hierarchy__8049__auto__,hierarchy__8050__auto__){
return (function (me){
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_.call(null,me))){
} else {
throw (new Error("Assert failed: (md-ref? me)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.type.call(null,(cljs.core.truth_(me)?cljs.core.deref.call(null,me):null))], null);
});})(method_table__8046__auto__,prefer_table__8047__auto__,method_cache__8048__auto__,cached_hierarchy__8049__auto__,hierarchy__8050__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8050__auto__,method_table__8046__auto__,prefer_table__8047__auto__,method_cache__8048__auto__,cached_hierarchy__8049__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.cell.evaluate.not_to_be,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
var seq__16922_16926 = cljs.core.seq.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me))));
var chunk__16923_16927 = null;
var count__16924_16928 = (0);
var i__16925_16929 = (0);
while(true){
if((i__16925_16929 < count__16924_16928)){
var c_16930 = cljs.core._nth.call(null,chunk__16923_16927,i__16925_16929);
if(cljs.core.truth_(c_16930)){
tiltontec.cell.evaluate.c_quiesce.call(null,c_16930);
} else {
}

var G__16931 = seq__16922_16926;
var G__16932 = chunk__16923_16927;
var G__16933 = count__16924_16928;
var G__16934 = (i__16925_16929 + (1));
seq__16922_16926 = G__16931;
chunk__16923_16927 = G__16932;
count__16924_16928 = G__16933;
i__16925_16929 = G__16934;
continue;
} else {
var temp__4657__auto___16935 = cljs.core.seq.call(null,seq__16922_16926);
if(temp__4657__auto___16935){
var seq__16922_16936__$1 = temp__4657__auto___16935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16922_16936__$1)){
var c__7932__auto___16937 = cljs.core.chunk_first.call(null,seq__16922_16936__$1);
var G__16938 = cljs.core.chunk_rest.call(null,seq__16922_16936__$1);
var G__16939 = c__7932__auto___16937;
var G__16940 = cljs.core.count.call(null,c__7932__auto___16937);
var G__16941 = (0);
seq__16922_16926 = G__16938;
chunk__16923_16927 = G__16939;
count__16924_16928 = G__16940;
i__16925_16929 = G__16941;
continue;
} else {
var c_16942 = cljs.core.first.call(null,seq__16922_16936__$1);
if(cljs.core.truth_(c_16942)){
tiltontec.cell.evaluate.c_quiesce.call(null,c_16942);
} else {
}

var G__16943 = cljs.core.next.call(null,seq__16922_16936__$1);
var G__16944 = null;
var G__16945 = (0);
var G__16946 = (0);
seq__16922_16926 = G__16943;
chunk__16923_16927 = G__16944;
count__16924_16928 = G__16945;
i__16925_16929 = G__16946;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,me,null);

return tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),me], null),new cljs.core.Keyword(null,"dead","dead",-1946604091));
}));
if(typeof tiltontec.cell.evaluate.unchanged_test !== 'undefined'){
} else {
/**
 * Cells does not propagate when nothing changes. By default, the
 *   test is =, but cells can inject a different test, and when we get
 *   to models it will be possible for a slot to have associated
 *   with it a different test.
 */
tiltontec.cell.evaluate.unchanged_test = (function (){var method_table__8046__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8047__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8048__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8049__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8050__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.cell.evaluate","unchanged-test"),((function (method_table__8046__auto__,prefer_table__8047__auto__,method_cache__8048__auto__,cached_hierarchy__8049__auto__,hierarchy__8050__auto__){
return (function (me,slot){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(me)?cljs.core.type.call(null,cljs.core.deref.call(null,me)):null),slot], null);
});})(method_table__8046__auto__,prefer_table__8047__auto__,method_cache__8048__auto__,cached_hierarchy__8049__auto__,hierarchy__8050__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8050__auto__,method_table__8046__auto__,prefer_table__8047__auto__,method_cache__8048__auto__,cached_hierarchy__8049__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.cell.evaluate.unchanged_test,new cljs.core.Keyword(null,"default","default",-1987822328),(function (self,slotname){
return cljs.core._EQ_;
}));
tiltontec.cell.evaluate.c_value_changed_QMARK_ = (function tiltontec$cell$evaluate$c_value_changed_QMARK_(c,new_value,old_value){
return cljs.core.not.call(null,(function (){var or__7113__auto__ = new cljs.core.Keyword(null,"unchanged-if","unchanged-if",-923210106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c));
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return tiltontec.cell.evaluate.unchanged_test.call(null,tiltontec.cell.base.c_model.call(null,c),tiltontec.cell.base.c_slot.call(null,c));
}
})().call(null,new_value,old_value));
});
tiltontec.cell.evaluate._STAR_custom_propagater_STAR_ = null;

/**
 * A cell:
 *   - notifies its callers of its change;
 *   - calls any observer; and
 *   - if ephemeral, silently reverts to nil.
 */
tiltontec.cell.evaluate.propagate = (function tiltontec$cell$evaluate$propagate(c,prior_value,callers){
if(tiltontec.cell.integrity._STAR_one_pulse_QMARK__STAR_){
if(cljs.core.truth_(tiltontec.cell.evaluate._STAR_custom_propagater_STAR_)){
return tiltontec.cell.evaluate._STAR_custom_propagater_STAR_.call(null,c,prior_value);
} else {
return null;
}
} else {
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pulse-last-changed","pulse-last-changed",1035703380),c], null),cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_));

var _STAR_depender_STAR_16955 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_call_stack_STAR_16956 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_c_prop_depth_STAR_16957 = tiltontec.cell.base._STAR_c_prop_depth_STAR_;
var _STAR_defer_changes_STAR_16958 = tiltontec.cell.base._STAR_defer_changes_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

tiltontec.cell.base._STAR_call_stack_STAR_ = null;

tiltontec.cell.base._STAR_c_prop_depth_STAR_ = (tiltontec.cell.base._STAR_c_prop_depth_STAR_ + (1));

tiltontec.cell.base._STAR_defer_changes_STAR_ = true;

try{if(cljs.core.truth_((function (){var and__7101__auto__ = prior_value;
if(cljs.core.truth_(and__7101__auto__)){
var and__7101__auto____$1 = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(and__7101__auto____$1)){
return tiltontec.cell.base.md_slot_owning_QMARK_.call(null,cljs.core.type.call(null,tiltontec.cell.base.c_model.call(null,c)),tiltontec.cell.base.c_slot_name.call(null,c));
} else {
return and__7101__auto____$1;
}
} else {
return and__7101__auto__;
}
})())){
var temp__4657__auto___16963 = clojure.set.difference.call(null,tiltontec.util.core.set_ify.call(null,prior_value),tiltontec.util.core.set_ify.call(null,tiltontec.cell.base.c_value.call(null,c)));
if(cljs.core.truth_(temp__4657__auto___16963)){
var ownees_16964 = temp__4657__auto___16963;
var seq__16959_16965 = cljs.core.seq.call(null,ownees_16964);
var chunk__16960_16966 = null;
var count__16961_16967 = (0);
var i__16962_16968 = (0);
while(true){
if((i__16962_16968 < count__16961_16967)){
var ownee_16969 = cljs.core._nth.call(null,chunk__16960_16966,i__16962_16968);
tiltontec.cell.evaluate.not_to_be.call(null,ownee_16969);

var G__16970 = seq__16959_16965;
var G__16971 = chunk__16960_16966;
var G__16972 = count__16961_16967;
var G__16973 = (i__16962_16968 + (1));
seq__16959_16965 = G__16970;
chunk__16960_16966 = G__16971;
count__16961_16967 = G__16972;
i__16962_16968 = G__16973;
continue;
} else {
var temp__4657__auto___16974__$1 = cljs.core.seq.call(null,seq__16959_16965);
if(temp__4657__auto___16974__$1){
var seq__16959_16975__$1 = temp__4657__auto___16974__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16959_16975__$1)){
var c__7932__auto___16976 = cljs.core.chunk_first.call(null,seq__16959_16975__$1);
var G__16977 = cljs.core.chunk_rest.call(null,seq__16959_16975__$1);
var G__16978 = c__7932__auto___16976;
var G__16979 = cljs.core.count.call(null,c__7932__auto___16976);
var G__16980 = (0);
seq__16959_16965 = G__16977;
chunk__16960_16966 = G__16978;
count__16961_16967 = G__16979;
i__16962_16968 = G__16980;
continue;
} else {
var ownee_16981 = cljs.core.first.call(null,seq__16959_16975__$1);
tiltontec.cell.evaluate.not_to_be.call(null,ownee_16981);

var G__16982 = cljs.core.next.call(null,seq__16959_16975__$1);
var G__16983 = null;
var G__16984 = (0);
var G__16985 = (0);
seq__16959_16965 = G__16982;
chunk__16960_16966 = G__16983;
count__16961_16967 = G__16984;
i__16962_16968 = G__16985;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

tiltontec.cell.evaluate.propagate_to_callers.call(null,c,callers);

if(cljs.core.truth_((function (){var or__7113__auto__ = (cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed.call(null,c));
if(or__7113__auto__){
return or__7113__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy.call(null,c)], true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854),new cljs.core.Keyword(null,"always","always",-1772028770),true], null));
}
})())){
tiltontec.cell.observer.c_observe.call(null,c,prior_value,new cljs.core.Keyword(null,"propagate","propagate",274376905));
} else {
}

return tiltontec.cell.evaluate.ephemeral_reset.call(null,c);
}finally {tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR_16958;

tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR_16957;

tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR_16956;

tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_16955;
}
}
});
tiltontec.cell.evaluate.propagate_to_callers = (function tiltontec$cell$evaluate$propagate_to_callers(c,callers){
if(cljs.core.empty_QMARK_.call(null,callers)){
return null;
} else {
var causation = cljs.core.cons.call(null,c,tiltontec.cell.base._STAR_causation_STAR_);
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388),c,((function (causation){
return (function (opcode,defer_info){
if(cljs.core.truth_(tiltontec.cell.base.mdead_QMARK_.call(null,tiltontec.cell.base.c_model.call(null,c)))){
return tiltontec.util.base.call_trc.call(null,"WHOAA!!!! dead by time :tell-deps dispatched; bailing",c);
} else {
var _STAR_causation_STAR_16991 = tiltontec.cell.base._STAR_causation_STAR_;
tiltontec.cell.base._STAR_causation_STAR_ = causation;

try{var seq__16992 = cljs.core.seq.call(null,cljs.core.seq.call(null,callers));
var chunk__16993 = null;
var count__16994 = (0);
var i__16995 = (0);
while(true){
if((i__16995 < count__16994)){
var caller = cljs.core._nth.call(null,chunk__16993,i__16995);
if(cljs.core.truth_((function (){var or__7113__auto__ = cljs.core._EQ_.call(null,tiltontec.cell.base.c_state.call(null,caller),new cljs.core.Keyword(null,"quiesced","quiesced",421940903));
if(or__7113__auto__){
return or__7113__auto__;
} else {
var or__7113__auto____$1 = tiltontec.cell.integrity.c_current_QMARK_.call(null,caller);
if(cljs.core.truth_(or__7113__auto____$1)){
return or__7113__auto____$1;
} else {
var or__7113__auto____$2 = cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy.call(null,caller)], true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.Keyword(null,"always","always",-1772028770),new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854)], null));
if(cljs.core.truth_(or__7113__auto____$2)){
return or__7113__auto____$2;
} else {
return (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c], true),tiltontec.cell.base.c_useds.call(null,caller)))) && (cljs.core.not.call(null,tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c)));
}
}
}
})())){
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"not-propping","not-propping",438111539),tiltontec.cell.base.c_slot.call(null,c),new cljs.core.Keyword(null,"to","to",192099007),tiltontec.cell.base.c_slot.call(null,caller));
} else {
tiltontec.cell.evaluate.calculate_and_set.call(null,caller,new cljs.core.Keyword(null,"propagate","propagate",274376905),c);

}

var G__16996 = seq__16992;
var G__16997 = chunk__16993;
var G__16998 = count__16994;
var G__16999 = (i__16995 + (1));
seq__16992 = G__16996;
chunk__16993 = G__16997;
count__16994 = G__16998;
i__16995 = G__16999;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16992);
if(temp__4657__auto__){
var seq__16992__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16992__$1)){
var c__7932__auto__ = cljs.core.chunk_first.call(null,seq__16992__$1);
var G__17000 = cljs.core.chunk_rest.call(null,seq__16992__$1);
var G__17001 = c__7932__auto__;
var G__17002 = cljs.core.count.call(null,c__7932__auto__);
var G__17003 = (0);
seq__16992 = G__17000;
chunk__16993 = G__17001;
count__16994 = G__17002;
i__16995 = G__17003;
continue;
} else {
var caller = cljs.core.first.call(null,seq__16992__$1);
if(cljs.core.truth_((function (){var or__7113__auto__ = cljs.core._EQ_.call(null,tiltontec.cell.base.c_state.call(null,caller),new cljs.core.Keyword(null,"quiesced","quiesced",421940903));
if(or__7113__auto__){
return or__7113__auto__;
} else {
var or__7113__auto____$1 = tiltontec.cell.integrity.c_current_QMARK_.call(null,caller);
if(cljs.core.truth_(or__7113__auto____$1)){
return or__7113__auto____$1;
} else {
var or__7113__auto____$2 = cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy.call(null,caller)], true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.Keyword(null,"always","always",-1772028770),new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854)], null));
if(cljs.core.truth_(or__7113__auto____$2)){
return or__7113__auto____$2;
} else {
return (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c], true),tiltontec.cell.base.c_useds.call(null,caller)))) && (cljs.core.not.call(null,tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c)));
}
}
}
})())){
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"not-propping","not-propping",438111539),tiltontec.cell.base.c_slot.call(null,c),new cljs.core.Keyword(null,"to","to",192099007),tiltontec.cell.base.c_slot.call(null,caller));
} else {
tiltontec.cell.evaluate.calculate_and_set.call(null,caller,new cljs.core.Keyword(null,"propagate","propagate",274376905),c);

}

var G__17004 = cljs.core.next.call(null,seq__16992__$1);
var G__17005 = null;
var G__17006 = (0);
var G__17007 = (0);
seq__16992 = G__17004;
chunk__16993 = G__17005;
count__16994 = G__17006;
i__16995 = G__17007;
continue;
}
} else {
return null;
}
}
break;
}
}finally {tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR_16991;
}}
});})(causation))
);
}
});

//# sourceMappingURL=evaluate.js.map