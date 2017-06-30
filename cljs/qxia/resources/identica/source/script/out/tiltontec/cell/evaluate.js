// Compiled by ClojureScript 1.9.36 {}
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
var temp__4425__auto___10539 = new cljs.core.Keyword(null,"me","me",-139006693).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rc));
if(cljs.core.truth_(temp__4425__auto___10539)){
var me_10540 = temp__4425__auto___10539;
cljs.core.swap_BANG_.call(null,me_10540,cljs.core.assoc,new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rc)),null);
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
if(cljs.core.truth_(tiltontec.cell.base._STAR_not_to_be_STAR_)){
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
if(cljs.core.truth_((function (){var and__6198__auto__ = tiltontec.cell.base.c_input_QMARK_.call(null,c);
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = tiltontec.cell.base.c_valid_QMARK_.call(null,c);
if(cljs.core.truth_(and__6198__auto____$1)){
return cljs.core.not.call(null,(function (){var and__6198__auto____$2 = tiltontec.cell.base.c_formula_QMARK_.call(null,c);
if(cljs.core.truth_(and__6198__auto____$2)){
return (cljs.core._EQ_.call(null,tiltontec.cell.base.c_optimize.call(null,c),new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336))) && ((tiltontec.cell.base.c_value.call(null,c) == null));
} else {
return and__6198__auto____$2;
}
})());
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
return tiltontec.cell.base.c_value.call(null,c);
} else {
if(cljs.core.truth_((function (){var temp__4425__auto__ = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(temp__4425__auto__)){
var md = temp__4425__auto__;
return tiltontec.cell.base.mdead_QMARK_.call(null,tiltontec.cell.base.c_model.call(null,c));
} else {
return null;
}
})())){
return tiltontec.util.core.err.call(null,cljs.core.str,"evic> model %s of cell %s is dead",tiltontec.cell.base.c_model.call(null,c),c);
} else {
if(cljs.core.truth_((function (){var or__6210__auto__ = cljs.core.not.call(null,tiltontec.cell.base.c_valid_QMARK_.call(null,c));
if(or__6210__auto__){
return or__6210__auto__;
} else {
var G__10574 = cljs.core.seq.call(null,tiltontec.cell.base.c_useds.call(null,c));
var vec__10575 = G__10574;
var seq__10576 = cljs.core.seq.call(null,vec__10575);
var first__10577 = cljs.core.first.call(null,seq__10576);
var seq__10576__$1 = cljs.core.next.call(null,seq__10576);
var used = first__10577;
var urest = seq__10576__$1;
var G__10574__$1 = G__10574;
while(true){
var vec__10578 = G__10574__$1;
var seq__10579 = cljs.core.seq.call(null,vec__10578);
var first__10580 = cljs.core.first.call(null,seq__10579);
var seq__10579__$1 = cljs.core.next.call(null,seq__10579);
var used__$1 = first__10580;
var urest__$1 = seq__10579__$1;
if(cljs.core.truth_(used__$1)){
cljs.core.println.call(null,new cljs.core.Keyword(null,"pcell","pcell",-240144130),new cljs.core.Keyword(null,"cnset-evicing","cnset-evicing",380848352),tiltontec.cell.base.c_slot.call(null,used__$1),tiltontec.cell.base.c_state.call(null,used__$1));

tiltontec$cell$evaluate$ensure_value_is_current.call(null,used__$1,new cljs.core.Keyword(null,"nested","nested",18943849),c);

var or__6210__auto____$1 = (tiltontec.cell.base.c_pulse_last_changed.call(null,used__$1) > tiltontec.cell.base.c_pulse.call(null,c));
if(or__6210__auto____$1){
return or__6210__auto____$1;
} else {
var G__10581 = urest__$1;
G__10574__$1 = G__10581;
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
var result__8531__auto__ = tiltontec.cell.integrity.call_with_integrity.call(null,null,null,(function (opcode,defer_info){
var prior_value = tiltontec.cell.base.c_value.call(null,c);
var result__8531__auto__ = tiltontec.cell.evaluate.ensure_value_is_current.call(null,c,new cljs.core.Keyword(null,"c-read","c-read",-1481921085),null);
if(((tiltontec.cell.base.c_model.call(null,c) == null)) && (cljs.core._EQ_.call(null,tiltontec.cell.base.c_state.call(null,c),new cljs.core.Keyword(null,"nascent","nascent",443401807))) && ((cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed.call(null,c)))){
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),c], null),new cljs.core.Keyword(null,"awake","awake",1922840899));

tiltontec.cell.observer.c_observe.call(null,c,prior_value,new cljs.core.Keyword(null,"cget","cget",1794378742));

tiltontec.cell.evaluate.ephemeral_reset.call(null,c);
} else {
}

return result__8531__auto__;
}));
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
tiltontec.cell.evaluate.record_dependency.call(null,c);
} else {
}

return result__8531__auto__;
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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("calc-n-set"),cljs.core.str("\n"),cljs.core.str("(map? (clojure.core/deref c))")].join('')));
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
var _STAR_call_stack_STAR_10585 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_depender_STAR_10586 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_defer_changes_STAR_10587 = tiltontec.cell.base._STAR_defer_changes_STAR_;
tiltontec.cell.base._STAR_call_stack_STAR_ = cljs.core.cons.call(null,c,tiltontec.cell.base._STAR_call_stack_STAR_);

tiltontec.cell.base._STAR_depender_STAR_ = c;

tiltontec.cell.base._STAR_defer_changes_STAR_ = true;

try{tiltontec.cell.evaluate.unlink_from_used.call(null,c,new cljs.core.Keyword(null,"pre-rule-clear","pre-rule-clear",258781380));

if(cljs.core.truth_(tiltontec.cell.base.c_rule.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No rule in %s type %s"),cljs.core.str(new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(c)),cljs.core.str(cljs.core.type.call(null,cljs.core.deref.call(null,c)))].join('')),cljs.core.str("\n"),cljs.core.str("(c-rule c)")].join('')));
}

return tiltontec.cell.base.c_rule.call(null,c).call(null,c);
}finally {tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR_10587;

tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_10586;

tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR_10585;
}});
if(typeof tiltontec.cell.evaluate.c_awaken !== 'undefined'){
} else {
tiltontec.cell.evaluate.c_awaken = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.cell.evaluate","c-awaken"),((function (method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__){
return (function (c){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,c));
});})(method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.cell.evaluate.c_awaken,new cljs.core.Keyword(null,"default","default",-1987822328),(function (c){
if(cljs.core.coll_QMARK_.call(null,c)){
return cljs.core.doall.call(null,(function (){var iter__6990__auto__ = (function tiltontec$cell$evaluate$iter__10588(s__10589){
return (new cljs.core.LazySeq(null,(function (){
var s__10589__$1 = s__10589;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10589__$1);
if(temp__4425__auto__){
var s__10589__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10589__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__10589__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__10591 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__10590 = (0);
while(true){
if((i__10590 < size__6989__auto__)){
var ce = cljs.core._nth.call(null,c__6988__auto__,i__10590);
cljs.core.chunk_append.call(null,b__10591,tiltontec.cell.evaluate.c_awaken.call(null,ce));

var G__10592 = (i__10590 + (1));
i__10590 = G__10592;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10591),tiltontec$cell$evaluate$iter__10588.call(null,cljs.core.chunk_rest.call(null,s__10589__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10591),null);
}
} else {
var ce = cljs.core.first.call(null,s__10589__$2);
return cljs.core.cons.call(null,tiltontec.cell.evaluate.c_awaken.call(null,ce),tiltontec$cell$evaluate$iter__10588.call(null,cljs.core.rest.call(null,s__10589__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,c);
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
var temp__4425__auto___10593 = tiltontec.cell.base.c_me.call(null,c);
if(cljs.core.truth_(temp__4425__auto___10593)){
var me_10594 = temp__4425__auto___10593;
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_slot.call(null,c),me_10594], null),tiltontec.cell.base.c_value.call(null,c));
} else {
}

tiltontec.cell.observer.c_observe.call(null,c,new cljs.core.Keyword(null,"cell-awaken","cell-awaken",2137807704));

return tiltontec.cell.evaluate.ephemeral_reset.call(null,c);
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.evaluate.c_awaken,new cljs.core.Keyword("tiltontec.cell.base","c-formula","tiltontec.cell.base/c-formula",-1020749037),(function (c){
var _STAR_depender_STAR_10595 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_.call(null,c))){
return null;
} else {
return tiltontec.cell.evaluate.calculate_and_set.call(null,c,new cljs.core.Keyword(null,"fn-c-awaken","fn-c-awaken",1597115821),null);
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_10595;
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

var result__8531__auto__ = new_value;
var _STAR_depender_STAR_10598_10600 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var prior_value_10601 = tiltontec.cell.base.c_value.call(null,c);
var prior_state_10602 = tiltontec.cell.base.c_value_state.call(null,c);
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),c], null),new_value);

tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),c], null),new cljs.core.Keyword(null,"awake","awake",1922840899));

if(cljs.core.truth_((function (){var and__6198__auto__ = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core.not.call(null,tiltontec.cell.base.c_synaptic_QMARK_.call(null,c));
} else {
return and__6198__auto__;
}
})())){
tiltontec.cell.evaluate.md_slot_value_store.call(null,tiltontec.cell.base.c_model.call(null,c),tiltontec.cell.base.c_slot_name.call(null,c),new_value);
} else {
}

tiltontec.cell.integrity.c_pulse_update.call(null,c,new cljs.core.Keyword(null,"slotv-assume","slotv-assume",-1071260275));

if(cljs.core.truth_((function (){var or__6210__auto__ = cljs.core._EQ_.call(null,propagation_code,new cljs.core.Keyword(null,"propagate","propagate",274376905));
if(or__6210__auto__){
return or__6210__auto__;
} else {
var or__6210__auto____$1 = cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([prior_state_10602], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"valid","valid",155614240),new cljs.core.Keyword(null,"uncurrent","uncurrent",-217246265)], null)));
if(or__6210__auto____$1){
return or__6210__auto____$1;
} else {
return tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_10601);
}
}
})())){
var callers_10603 = tiltontec.cell.base.c_callers.call(null,c);
var temp__4425__auto___10604 = (function (){var and__6198__auto__ = tiltontec.cell.base.c_formula_QMARK_.call(null,c);
if(cljs.core.truth_(and__6198__auto__)){
return tiltontec.cell.base.c_optimize.call(null,c);
} else {
return and__6198__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto___10604)){
var optimize_10605 = temp__4425__auto___10604;
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"wtf","wtf",-1581114577),optimize_10605);

var G__10599_10606 = optimize_10605;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336),G__10599_10606)){
if(cljs.core.truth_(tiltontec.cell.base.c_value.call(null,c))){
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336),tiltontec.cell.base.c_slot.call(null,c));

tiltontec.cell.evaluate.unlink_from_used.call(null,c,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336));
} else {
}
} else {
if(cljs.core._EQ_.call(null,true,G__10599_10606)){
tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.call(null,c,prior_value_10601);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(optimize_10605)].join('')));

}
}
} else {
}

if(cljs.core.truth_((function (){var or__6210__auto__ = cljs.core._EQ_.call(null,propagation_code,new cljs.core.Keyword(null,"no-propagate","no-propagate",-573850970));
if(or__6210__auto__){
return or__6210__auto__;
} else {
return tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c);
}
})())){
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,c))){
} else {
throw (new Error("Assert failed: (map? (clojure.core/deref c))"));
}

tiltontec.cell.evaluate.propagate.call(null,c,prior_value_10601,callers_10603);
}
} else {
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_10598_10600;
}
return result__8531__auto__;
});
tiltontec.cell.evaluate.unlink_from_used = (function tiltontec$cell$evaluate$unlink_from_used(c,why){

var iter__6990__auto___10615 = (function tiltontec$cell$evaluate$unlink_from_used_$_iter__10611(s__10612){
return (new cljs.core.LazySeq(null,(function (){
var s__10612__$1 = s__10612;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10612__$1);
if(temp__4425__auto__){
var s__10612__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10612__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__10612__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__10614 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__10613 = (0);
while(true){
if((i__10613 < size__6989__auto__)){
var used = cljs.core._nth.call(null,c__6988__auto__,i__10613);
cljs.core.chunk_append.call(null,b__10614,tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callers","callers",-1991542784),used], null),cljs.core.disj.call(null,tiltontec.cell.base.c_callers.call(null,used),c)));

var G__10616 = (i__10613 + (1));
i__10613 = G__10616;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10614),tiltontec$cell$evaluate$unlink_from_used_$_iter__10611.call(null,cljs.core.chunk_rest.call(null,s__10612__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10614),null);
}
} else {
var used = cljs.core.first.call(null,s__10612__$2);
return cljs.core.cons.call(null,tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callers","callers",-1991542784),used], null),cljs.core.disj.call(null,tiltontec.cell.base.c_callers.call(null,used),c)),tiltontec$cell$evaluate$unlink_from_used_$_iter__10611.call(null,cljs.core.rest.call(null,s__10612__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__6990__auto___10615.call(null,tiltontec.cell.base.c_useds.call(null,c));

return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"useds","useds",621350967),c], null),cljs.core.PersistentHashSet.EMPTY);
});
tiltontec.cell.evaluate.md_cell_flush = (function tiltontec$cell$evaluate$md_cell_flush(c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

var temp__4425__auto__ = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(temp__4425__auto__)){
var me = temp__4425__auto__;
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
if(cljs.core.truth_((function (){var and__6198__auto__ = tiltontec.cell.base.c_formula_QMARK_.call(null,c);
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = cljs.core.empty_QMARK_.call(null,tiltontec.cell.base.c_useds.call(null,c));
if(and__6198__auto____$1){
var and__6198__auto____$2 = tiltontec.cell.base.c_optimize.call(null,c);
if(cljs.core.truth_(and__6198__auto____$2)){
var and__6198__auto____$3 = cljs.core.not.call(null,tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c));
if(and__6198__auto____$3){
var and__6198__auto____$4 = tiltontec.cell.base.c_valid_QMARK_.call(null,c);
if(cljs.core.truth_(and__6198__auto____$4)){
return (cljs.core.not.call(null,tiltontec.cell.base.c_synaptic_QMARK_.call(null,c))) && (cljs.core.not.call(null,tiltontec.cell.base.c_input_QMARK_.call(null,c)));
} else {
return and__6198__auto____$4;
}
} else {
return and__6198__auto____$3;
}
} else {
return and__6198__auto____$2;
}
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),c], null),new cljs.core.Keyword(null,"optimized-away","optimized-away",876765856));

tiltontec.cell.observer.c_observe.call(null,c,prior_value,new cljs.core.Keyword(null,"opti-away","opti-away",1290785499));

var temp__4425__auto___10625 = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(temp__4425__auto___10625)){
var me_10626 = temp__4425__auto___10625;
tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cz","cz",1670864932),me_10626], null),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me_10626)),tiltontec.cell.base.c_slot.call(null,c),null));

tiltontec.cell.evaluate.md_cell_flush.call(null,c);
} else {
}

var seq__10621_10627 = cljs.core.seq.call(null,cljs.core.seq.call(null,tiltontec.cell.base.c_callers.call(null,c)));
var chunk__10622_10628 = null;
var count__10623_10629 = (0);
var i__10624_10630 = (0);
while(true){
if((i__10624_10630 < count__10623_10629)){
var caller_10631 = cljs.core._nth.call(null,chunk__10622_10628,i__10624_10630);
cljs.core.swap_BANG_.call(null,caller_10631,cljs.core.assoc,new cljs.core.Keyword(null,"useds","useds",621350967),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([c], true),tiltontec.cell.base.c_useds.call(null,caller_10631)));

tiltontec.cell.base.caller_drop.call(null,c,caller_10631);

tiltontec.cell.evaluate.ensure_value_is_current.call(null,caller_10631,new cljs.core.Keyword(null,"opti-used","opti-used",660350789),c);

var G__10632 = seq__10621_10627;
var G__10633 = chunk__10622_10628;
var G__10634 = count__10623_10629;
var G__10635 = (i__10624_10630 + (1));
seq__10621_10627 = G__10632;
chunk__10622_10628 = G__10633;
count__10623_10629 = G__10634;
i__10624_10630 = G__10635;
continue;
} else {
var temp__4425__auto___10636 = cljs.core.seq.call(null,seq__10621_10627);
if(temp__4425__auto___10636){
var seq__10621_10637__$1 = temp__4425__auto___10636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10621_10637__$1)){
var c__7021__auto___10638 = cljs.core.chunk_first.call(null,seq__10621_10637__$1);
var G__10639 = cljs.core.chunk_rest.call(null,seq__10621_10637__$1);
var G__10640 = c__7021__auto___10638;
var G__10641 = cljs.core.count.call(null,c__7021__auto___10638);
var G__10642 = (0);
seq__10621_10627 = G__10639;
chunk__10622_10628 = G__10640;
count__10623_10629 = G__10641;
i__10624_10630 = G__10642;
continue;
} else {
var caller_10643 = cljs.core.first.call(null,seq__10621_10637__$1);
cljs.core.swap_BANG_.call(null,caller_10643,cljs.core.assoc,new cljs.core.Keyword(null,"useds","useds",621350967),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([c], true),tiltontec.cell.base.c_useds.call(null,caller_10643)));

tiltontec.cell.base.caller_drop.call(null,c,caller_10643);

tiltontec.cell.evaluate.ensure_value_is_current.call(null,caller_10643,new cljs.core.Keyword(null,"opti-used","opti-used",660350789),c);

var G__10644 = cljs.core.next.call(null,seq__10621_10637__$1);
var G__10645 = null;
var G__10646 = (0);
var G__10647 = (0);
seq__10621_10627 = G__10644;
chunk__10622_10628 = G__10645;
count__10623_10629 = G__10646;
i__10624_10630 = G__10647;
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
tiltontec.cell.evaluate.not_to_be = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.cell.evaluate","not-to-be"),((function (method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__){
return (function (me){
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_.call(null,me))){
} else {
throw (new Error("Assert failed: (md-ref? me)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.type.call(null,(cljs.core.truth_(me)?cljs.core.deref.call(null,me):null))], null);
});})(method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.cell.evaluate.not_to_be,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
var seq__10648_10652 = cljs.core.seq.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me))));
var chunk__10649_10653 = null;
var count__10650_10654 = (0);
var i__10651_10655 = (0);
while(true){
if((i__10651_10655 < count__10650_10654)){
var c_10656 = cljs.core._nth.call(null,chunk__10649_10653,i__10651_10655);
if(cljs.core.truth_(c_10656)){
tiltontec.cell.evaluate.c_quiesce.call(null,c_10656);
} else {
}

var G__10657 = seq__10648_10652;
var G__10658 = chunk__10649_10653;
var G__10659 = count__10650_10654;
var G__10660 = (i__10651_10655 + (1));
seq__10648_10652 = G__10657;
chunk__10649_10653 = G__10658;
count__10650_10654 = G__10659;
i__10651_10655 = G__10660;
continue;
} else {
var temp__4425__auto___10661 = cljs.core.seq.call(null,seq__10648_10652);
if(temp__4425__auto___10661){
var seq__10648_10662__$1 = temp__4425__auto___10661;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10648_10662__$1)){
var c__7021__auto___10663 = cljs.core.chunk_first.call(null,seq__10648_10662__$1);
var G__10664 = cljs.core.chunk_rest.call(null,seq__10648_10662__$1);
var G__10665 = c__7021__auto___10663;
var G__10666 = cljs.core.count.call(null,c__7021__auto___10663);
var G__10667 = (0);
seq__10648_10652 = G__10664;
chunk__10649_10653 = G__10665;
count__10650_10654 = G__10666;
i__10651_10655 = G__10667;
continue;
} else {
var c_10668 = cljs.core.first.call(null,seq__10648_10662__$1);
if(cljs.core.truth_(c_10668)){
tiltontec.cell.evaluate.c_quiesce.call(null,c_10668);
} else {
}

var G__10669 = cljs.core.next.call(null,seq__10648_10662__$1);
var G__10670 = null;
var G__10671 = (0);
var G__10672 = (0);
seq__10648_10652 = G__10669;
chunk__10649_10653 = G__10670;
count__10650_10654 = G__10671;
i__10651_10655 = G__10672;
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
tiltontec.cell.evaluate.unchanged_test = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.cell.evaluate","unchanged-test"),((function (method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__){
return (function (me,slot){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(me)?cljs.core.type.call(null,cljs.core.deref.call(null,me)):null),slot], null);
});})(method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.cell.evaluate.unchanged_test,new cljs.core.Keyword(null,"default","default",-1987822328),(function (self,slotname){
return cljs.core._EQ_;
}));
tiltontec.cell.evaluate.c_value_changed_QMARK_ = (function tiltontec$cell$evaluate$c_value_changed_QMARK_(c,new_value,old_value){
return cljs.core.not.call(null,(function (){var or__6210__auto__ = new cljs.core.Keyword(null,"unchanged-if","unchanged-if",-923210106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
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
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"propagate","propagate",274376905),new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c)));

if(cljs.core.truth_(tiltontec.cell.integrity._STAR_one_pulse_QMARK__STAR_)){
if(cljs.core.truth_(tiltontec.cell.evaluate._STAR_custom_propagater_STAR_)){
return tiltontec.cell.evaluate._STAR_custom_propagater_STAR_.call(null,c,prior_value);
} else {
return null;
}
} else {
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pulse-last-changed","pulse-last-changed",1035703380),c], null),cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_));

var _STAR_depender_STAR_10681 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_call_stack_STAR_10682 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_c_prop_depth_STAR_10683 = tiltontec.cell.base._STAR_c_prop_depth_STAR_;
var _STAR_defer_changes_STAR_10684 = tiltontec.cell.base._STAR_defer_changes_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

tiltontec.cell.base._STAR_call_stack_STAR_ = null;

tiltontec.cell.base._STAR_c_prop_depth_STAR_ = (tiltontec.cell.base._STAR_c_prop_depth_STAR_ + (1));

tiltontec.cell.base._STAR_defer_changes_STAR_ = true;

try{if(cljs.core.truth_((function (){var and__6198__auto__ = prior_value;
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(and__6198__auto____$1)){
return tiltontec.cell.base.md_slot_owning_QMARK_.call(null,cljs.core.type.call(null,tiltontec.cell.base.c_model.call(null,c)),tiltontec.cell.base.c_slot_name.call(null,c));
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
var temp__4425__auto___10689 = clojure.set.difference.call(null,tiltontec.util.core.set_ify.call(null,prior_value),tiltontec.util.core.set_ify.call(null,tiltontec.cell.base.c_value.call(null,c)));
if(cljs.core.truth_(temp__4425__auto___10689)){
var ownees_10690 = temp__4425__auto___10689;
var seq__10685_10691 = cljs.core.seq.call(null,ownees_10690);
var chunk__10686_10692 = null;
var count__10687_10693 = (0);
var i__10688_10694 = (0);
while(true){
if((i__10688_10694 < count__10687_10693)){
var ownee_10695 = cljs.core._nth.call(null,chunk__10686_10692,i__10688_10694);
tiltontec.cell.evaluate.not_to_be.call(null,ownee_10695);

var G__10696 = seq__10685_10691;
var G__10697 = chunk__10686_10692;
var G__10698 = count__10687_10693;
var G__10699 = (i__10688_10694 + (1));
seq__10685_10691 = G__10696;
chunk__10686_10692 = G__10697;
count__10687_10693 = G__10698;
i__10688_10694 = G__10699;
continue;
} else {
var temp__4425__auto___10700__$1 = cljs.core.seq.call(null,seq__10685_10691);
if(temp__4425__auto___10700__$1){
var seq__10685_10701__$1 = temp__4425__auto___10700__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10685_10701__$1)){
var c__7021__auto___10702 = cljs.core.chunk_first.call(null,seq__10685_10701__$1);
var G__10703 = cljs.core.chunk_rest.call(null,seq__10685_10701__$1);
var G__10704 = c__7021__auto___10702;
var G__10705 = cljs.core.count.call(null,c__7021__auto___10702);
var G__10706 = (0);
seq__10685_10691 = G__10703;
chunk__10686_10692 = G__10704;
count__10687_10693 = G__10705;
i__10688_10694 = G__10706;
continue;
} else {
var ownee_10707 = cljs.core.first.call(null,seq__10685_10701__$1);
tiltontec.cell.evaluate.not_to_be.call(null,ownee_10707);

var G__10708 = cljs.core.next.call(null,seq__10685_10701__$1);
var G__10709 = null;
var G__10710 = (0);
var G__10711 = (0);
seq__10685_10691 = G__10708;
chunk__10686_10692 = G__10709;
count__10687_10693 = G__10710;
i__10688_10694 = G__10711;
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

tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"obs-chkpulse!!!!!!!!","obs-chkpulse!!!!!!!!",498932923),cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_),tiltontec.cell.base.c_pulse_observed.call(null,c));

if(cljs.core.truth_((function (){var or__6210__auto__ = (cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed.call(null,c));
if(or__6210__auto__){
return or__6210__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([tiltontec.cell.base.c_lazy.call(null,c)], true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854),new cljs.core.Keyword(null,"always","always",-1772028770),true], null));
}
})())){
tiltontec.cell.observer.c_observe.call(null,c,prior_value,new cljs.core.Keyword(null,"propagate","propagate",274376905));
} else {
}

return tiltontec.cell.evaluate.ephemeral_reset.call(null,c);
}finally {tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR_10684;

tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR_10683;

tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR_10682;

tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_10681;
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
var _STAR_causation_STAR_10717 = tiltontec.cell.base._STAR_causation_STAR_;
tiltontec.cell.base._STAR_causation_STAR_ = causation;

try{var seq__10718 = cljs.core.seq.call(null,cljs.core.seq.call(null,callers));
var chunk__10719 = null;
var count__10720 = (0);
var i__10721 = (0);
while(true){
if((i__10721 < count__10720)){
var caller = cljs.core._nth.call(null,chunk__10719,i__10721);
if(cljs.core.truth_((function (){var or__6210__auto__ = cljs.core._EQ_.call(null,tiltontec.cell.base.c_state.call(null,caller),new cljs.core.Keyword(null,"quiesced","quiesced",421940903));
if(or__6210__auto__){
return or__6210__auto__;
} else {
var or__6210__auto____$1 = tiltontec.cell.integrity.c_current_QMARK_.call(null,caller);
if(cljs.core.truth_(or__6210__auto____$1)){
return or__6210__auto____$1;
} else {
var or__6210__auto____$2 = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([tiltontec.cell.base.c_lazy.call(null,caller)], true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.Keyword(null,"always","always",-1772028770),new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854)], null));
if(cljs.core.truth_(or__6210__auto____$2)){
return or__6210__auto____$2;
} else {
return (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([c], true),tiltontec.cell.base.c_useds.call(null,caller)))) && (cljs.core.not.call(null,tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c)));
}
}
}
})())){
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"not-propping","not-propping",438111539),tiltontec.cell.base.c_slot.call(null,c),new cljs.core.Keyword(null,"to","to",192099007),tiltontec.cell.base.c_slot.call(null,caller));
} else {
tiltontec.cell.evaluate.calculate_and_set.call(null,caller,new cljs.core.Keyword(null,"propagate","propagate",274376905),c);

}

var G__10722 = seq__10718;
var G__10723 = chunk__10719;
var G__10724 = count__10720;
var G__10725 = (i__10721 + (1));
seq__10718 = G__10722;
chunk__10719 = G__10723;
count__10720 = G__10724;
i__10721 = G__10725;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__10718);
if(temp__4425__auto__){
var seq__10718__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10718__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__10718__$1);
var G__10726 = cljs.core.chunk_rest.call(null,seq__10718__$1);
var G__10727 = c__7021__auto__;
var G__10728 = cljs.core.count.call(null,c__7021__auto__);
var G__10729 = (0);
seq__10718 = G__10726;
chunk__10719 = G__10727;
count__10720 = G__10728;
i__10721 = G__10729;
continue;
} else {
var caller = cljs.core.first.call(null,seq__10718__$1);
if(cljs.core.truth_((function (){var or__6210__auto__ = cljs.core._EQ_.call(null,tiltontec.cell.base.c_state.call(null,caller),new cljs.core.Keyword(null,"quiesced","quiesced",421940903));
if(or__6210__auto__){
return or__6210__auto__;
} else {
var or__6210__auto____$1 = tiltontec.cell.integrity.c_current_QMARK_.call(null,caller);
if(cljs.core.truth_(or__6210__auto____$1)){
return or__6210__auto____$1;
} else {
var or__6210__auto____$2 = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([tiltontec.cell.base.c_lazy.call(null,caller)], true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.Keyword(null,"always","always",-1772028770),new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854)], null));
if(cljs.core.truth_(or__6210__auto____$2)){
return or__6210__auto____$2;
} else {
return (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([c], true),tiltontec.cell.base.c_useds.call(null,caller)))) && (cljs.core.not.call(null,tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c)));
}
}
}
})())){
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"not-propping","not-propping",438111539),tiltontec.cell.base.c_slot.call(null,c),new cljs.core.Keyword(null,"to","to",192099007),tiltontec.cell.base.c_slot.call(null,caller));
} else {
tiltontec.cell.evaluate.calculate_and_set.call(null,caller,new cljs.core.Keyword(null,"propagate","propagate",274376905),c);

}

var G__10730 = cljs.core.next.call(null,seq__10718__$1);
var G__10731 = null;
var G__10732 = (0);
var G__10733 = (0);
seq__10718 = G__10730;
chunk__10719 = G__10731;
count__10720 = G__10732;
i__10721 = G__10733;
continue;
}
} else {
return null;
}
}
break;
}
}finally {tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR_10717;
}}
});})(causation))
);
}
});
