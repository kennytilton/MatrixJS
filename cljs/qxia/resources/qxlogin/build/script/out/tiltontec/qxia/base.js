// Compiled by ClojureScript 1.9.36 {}
goog.provide('tiltontec.qxia.base');
goog.require('cljs.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.util.core');
goog.require('tiltontec.qxia.types');
goog.require('tiltontec.model.base');
goog.require('tiltontec.model.core');
goog.require('clojure.set');
goog.require('tiltontec.util.base');

tiltontec.qxia.base.qxme = (function tiltontec$qxia$base$qxme(me){
return new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
});
cljs.core.enable_console_print_BANG_.call(null);
tiltontec.qxia.base.app_routing = (function tiltontec$qxia$base$app_routing(){
var app = qx.core.Init.getApplication();
if(cljs.core.truth_(app)){
} else {
throw (new Error("Assert failed: app"));
}

return app.getRouting();
});
tiltontec.qxia.base.qx_data_array = (function tiltontec$qxia$base$qx_data_array(items){
return (new qx.data.Array(cljs.core.clj__GT_js.call(null,items)));
});
if(typeof tiltontec.qxia.base.qxia_type_to_qx_class !== 'undefined'){
} else {
tiltontec.qxia.base.qxia_type_to_qx_class = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.qxia.base","qxia-type-to-qx-class"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.qxia.base.qxia_type_to_qx_class,new cljs.core.Keyword(null,"default","default",-1987822328),(function (type){
var G__14268 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14268) {
case "tiltontec.qxia.types/m.Drawer":
return qx.ui.mobile.container.Drawer;

break;
case "tiltontec.qxia.types/m.Canvas":
return qx.ui.mobile.embed.Canvas;

break;
case "tiltontec.qxia.types/m.Picker":
return qx.ui.mobile.control.Picker;

break;
case "tiltontec.qxia.types/m.PasswordField":
return qx.ui.mobile.form.PasswordField;

break;
case "tiltontec.qxia.types/Mobile":
return qx.application.Mobile;

break;
case "tiltontec.qxia.types/m.Title":
return qx.ui.mobile.form.Title;

break;
case "tiltontec.qxia.types/m.Button":
return qx.ui.mobile.form.Button;

break;
case "tiltontec.qxia.types/m.Atom":
return qx.ui.mobile.basic.Atom;

break;
case "tiltontec.qxia.types/m.Group":
return qx.ui.mobile.form.Group;

break;
case "tiltontec.qxia.types/m.NumberField":
return qx.ui.mobile.form.NumberField;

break;
case "tiltontec.qxia.types/m.SelectBox":
return qx.ui.mobile.form.SelectBox;

break;
case "tiltontec.qxia.types/m.TextArea":
return qx.ui.mobile.form.TextArea;

break;
case "tiltontec.qxia.types/m.Slider":
return qx.ui.mobile.form.Slider;

break;
case "tiltontec.qxia.types/m.Scroll":
return qx.ui.mobile.container.Scroll;

break;
case "tiltontec.qxia.types/m.Carousel":
return qx.ui.mobile.container.Carousel;

break;
case "tiltontec.qxia.types/m.Label":
return qx.ui.mobile.basic.Label;

break;
case "tiltontec.qxia.types/m.Popup":
return qx.ui.mobile.dialog.Popup;

break;
case "tiltontec.qxia.types/m.TextField":
return qx.ui.mobile.form.TextField;

break;
case "tiltontec.qxia.types/m.ToggleButton":
return qx.ui.mobile.form.ToggleButton;

break;
case "tiltontec.qxia.types/ml.VBox":
return qx.ui.mobile.layout.VBox;

break;
case "tiltontec.qxia.types/m.NavigationPage":
return qx.ui.mobile.page.NavigationPage;

break;
case "tiltontec.qxia.types/ml.HBox":
return qx.ui.mobile.layout.HBox;

break;
case "tiltontec.qxia.types/m.Form":
return qx.ui.mobile.form.Form;

break;
case "tiltontec.qxia.types/m.Html":
return qx.ui.mobile.embed.Html;

break;
case "tiltontec.qxia.types/m.Row":
return qx.ui.mobile.form.Row;

break;
case "tiltontec.qxia.types/m.BusyIndicator":
return qx.ui.mobile.dialog.BusyIndicator;

break;
case "tiltontec.qxia.types/m.Composite":
return qx.ui.mobile.container.Composite;

break;
case "tiltontec.qxia.types/m.Single":
return qx.ui.mobile.form.renderer.Single;

break;
case "tiltontec.qxia.types/m.Image":
return qx.ui.mobile.basic.Image;

break;
case "tiltontec.qxia.types/m.Menu":
return qx.ui.mobile.dialog.Menu;

break;
case "tiltontec.qxia.types/m.CheckBox":
return qx.ui.mobile.form.CheckBox;

break;
case "tiltontec.qxia.types/m.RadioButton":
return qx.ui.mobile.form.RadioButton;

break;
case "tiltontec.qxia.types/m.RadioGroup":
return qx.ui.mobile.form.RadioGroup;

break;
default:
cljs.core.println.call(null,new cljs.core.Keyword(null,"throwing-type-err","throwing-type-err",983540428),type);

throw (new Error([cljs.core.str("qxia-type-to-qx-class does not know about "),cljs.core.str(type)].join('')));

}
}));
tiltontec.qxia.base.qx_class_new = (function tiltontec$qxia$base$qx_class_new(type,iargs){
var G__14271 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14271) {
case "tiltontec.qxia.types/Mobile":
return null;

break;
case "tiltontec.qxia.types/m.Single":
return null;

break;
case "tiltontec.qxia.types/m.RadioGroupStub":
return null;

break;
default:
var temp__4423__auto__ = (function (){var or__6210__auto__ = ((cljs.core.contains_QMARK_.call(null,iargs,new cljs.core.Keyword(null,"qx-class","qx-class",701821141)))?(function (){var qx_class = new cljs.core.Keyword(null,"qx-class","qx-class",701821141).cljs$core$IFn$_invoke$arity$1(iargs);
if(cljs.core.truth_(qx_class)){
} else {
cljs.core.println.call(null,[cljs.core.str("ERROR! qx-class-new> key class specified but nil "),cljs.core.str("Do we need a new qx class mention in Application.")].join(''));

throw Error;
}

return qx_class;
})():null);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return tiltontec.qxia.base.qxia_type_to_qx_class.call(null,type);
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var qx_class = temp__4423__auto__;
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"making","making",-316301090),new cljs.core.Keyword(null,"qx!!!!!","qx!!!!!",1142008348),type,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(iargs),new cljs.core.Keyword(null,"finalclass","finalclass",1652107011),qx_class,new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952).cljs$core$IFn$_invoke$arity$1(iargs));

var or__6210__auto__ = cljs.core.apply.call(null,MyTerop.make,qx_class,new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952).cljs$core$IFn$_invoke$arity$1(iargs));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
throw (new Error([cljs.core.str("qx-class-new tried making "),cljs.core.str(qx_class),cljs.core.str(" but got back nada.")].join('')));
}
} else {
throw (new Error([cljs.core.str("qx-class-new does not know about "),cljs.core.str(type)].join('')));
}

}
});
cljs.core._add_method.call(null,tiltontec.model.base.md_awaken_before,new cljs.core.Keyword("tiltontec.qxia.types","m.RadioGroupStub","tiltontec.qxia.types/m.RadioGroupStub",-179001450),(function (me){
return null;
}));
cljs.core._add_method.call(null,tiltontec.model.base.md_awaken_before,new cljs.core.Keyword("tiltontec.qxia.types","qx.Object","tiltontec.qxia.types/qx.Object",-1295429520),(function (me){
if(cljs.core.truth_(tiltontec.qxia.base.qxia_type_to_qx_class.call(null,tiltontec.cell.base.ia_type.call(null,me)))){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"0-make-qx","0-make-qx",1229540278),me], null),(function (opcode,defer_info){
if((tiltontec.qxia.base.qxme.call(null,me) == null)){
cljs.core.swap_BANG_.call(null,me,cljs.core.assoc,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),tiltontec.qxia.base.qx_class_new.call(null,tiltontec.cell.base.ia_type.call(null,me),cljs.core.deref.call(null,me)));
} else {
}

if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,me,new cljs.core.Keyword("tiltontec.qxia.types","m.Single","tiltontec.qxia.types/m.Single",-602074724)))){
} else {
if(cljs.core.truth_(tiltontec.qxia.base.qxme.call(null,me))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("md-awaken-before failed to establish qxme "),cljs.core.str(tiltontec.cell.base.ia_type.call(null,me))].join('')),cljs.core.str("\n"),cljs.core.str("(qxme me)")].join('')));
}
}

tiltontec.qxia.base.qx_initialize.call(null,me);

return tiltontec.qxia.base.qx_initialize_all.call(null,me);
}));
} else {
return null;
}
}));
tiltontec.qxia.base._PLUS_qxl_client_task_priority_PLUS_ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"0-make-qx","0-make-qx",1229540278),new cljs.core.Keyword(null,"1-layout","1-layout",603251836),new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),new cljs.core.Keyword(null,"3-post-assembly","3-post-assembly",-607469254)], null);
tiltontec.qxia.base.qxia_q_handler = (function tiltontec$qxia$base$qxia_q_handler(user_q){
var seq__14299_14325 = cljs.core.seq.call(null,cljs.core.reverse.call(null,tiltontec.util.core.fifo_data.call(null,user_q)));
var chunk__14300_14326 = null;
var count__14301_14327 = (0);
var i__14302_14328 = (0);
while(true){
if((i__14302_14328 < count__14301_14327)){
var vec__14303_14329 = cljs.core._nth.call(null,chunk__14300_14326,i__14302_14328);
var vec__14306_14330 = cljs.core.nth.call(null,vec__14303_14329,(0),null);
var qx_defer_code_14331 = cljs.core.nth.call(null,vec__14306_14330,(0),null);
var me_14332 = cljs.core.nth.call(null,vec__14306_14330,(1),null);
var task_14333 = cljs.core.nth.call(null,vec__14303_14329,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([qx_defer_code_14331], true),tiltontec.qxia.base._PLUS_qxl_client_task_priority_PLUS_))){
} else {
throw Error;
}

var G__14334 = seq__14299_14325;
var G__14335 = chunk__14300_14326;
var G__14336 = count__14301_14327;
var G__14337 = (i__14302_14328 + (1));
seq__14299_14325 = G__14334;
chunk__14300_14326 = G__14335;
count__14301_14327 = G__14336;
i__14302_14328 = G__14337;
continue;
} else {
var temp__4425__auto___14338 = cljs.core.seq.call(null,seq__14299_14325);
if(temp__4425__auto___14338){
var seq__14299_14339__$1 = temp__4425__auto___14338;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14299_14339__$1)){
var c__7021__auto___14340 = cljs.core.chunk_first.call(null,seq__14299_14339__$1);
var G__14341 = cljs.core.chunk_rest.call(null,seq__14299_14339__$1);
var G__14342 = c__7021__auto___14340;
var G__14343 = cljs.core.count.call(null,c__7021__auto___14340);
var G__14344 = (0);
seq__14299_14325 = G__14341;
chunk__14300_14326 = G__14342;
count__14301_14327 = G__14343;
i__14302_14328 = G__14344;
continue;
} else {
var vec__14309_14345 = cljs.core.first.call(null,seq__14299_14339__$1);
var vec__14312_14346 = cljs.core.nth.call(null,vec__14309_14345,(0),null);
var qx_defer_code_14347 = cljs.core.nth.call(null,vec__14312_14346,(0),null);
var me_14348 = cljs.core.nth.call(null,vec__14312_14346,(1),null);
var task_14349 = cljs.core.nth.call(null,vec__14309_14345,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([qx_defer_code_14347], true),tiltontec.qxia.base._PLUS_qxl_client_task_priority_PLUS_))){
} else {
throw Error;
}

var G__14350 = cljs.core.next.call(null,seq__14299_14339__$1);
var G__14351 = null;
var G__14352 = (0);
var G__14353 = (0);
seq__14299_14325 = G__14350;
chunk__14300_14326 = G__14351;
count__14301_14327 = G__14352;
i__14302_14328 = G__14353;
continue;
}
} else {
}
}
break;
}

var sorted = (function (){var data = tiltontec.util.core.fifo_data.call(null,user_q);
return cljs.core.sort_by.call(null,cljs.core.ffirst,data);
})();
tiltontec.util.core.fifo_clear.call(null,user_q);

var seq__14315 = cljs.core.seq.call(null,sorted);
var chunk__14316 = null;
var count__14317 = (0);
var i__14318 = (0);
while(true){
if((i__14318 < count__14317)){
var vec__14319 = cljs.core._nth.call(null,chunk__14316,i__14318);
var defer_info = cljs.core.nth.call(null,vec__14319,(0),null);
var task = cljs.core.nth.call(null,vec__14319,(1),null);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"deffo","deffo",704035049),cljs.core.first.call(null,defer_info));

task.call(null,new cljs.core.Keyword(null,"client-q","client-q",-1752740110),defer_info);

var G__14354 = seq__14315;
var G__14355 = chunk__14316;
var G__14356 = count__14317;
var G__14357 = (i__14318 + (1));
seq__14315 = G__14354;
chunk__14316 = G__14355;
count__14317 = G__14356;
i__14318 = G__14357;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14315);
if(temp__4425__auto__){
var seq__14315__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14315__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__14315__$1);
var G__14358 = cljs.core.chunk_rest.call(null,seq__14315__$1);
var G__14359 = c__7021__auto__;
var G__14360 = cljs.core.count.call(null,c__7021__auto__);
var G__14361 = (0);
seq__14315 = G__14358;
chunk__14316 = G__14359;
count__14317 = G__14360;
i__14318 = G__14361;
continue;
} else {
var vec__14322 = cljs.core.first.call(null,seq__14315__$1);
var defer_info = cljs.core.nth.call(null,vec__14322,(0),null);
var task = cljs.core.nth.call(null,vec__14322,(1),null);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"deffo","deffo",704035049),cljs.core.first.call(null,defer_info));

task.call(null,new cljs.core.Keyword(null,"client-q","client-q",-1752740110),defer_info);

var G__14362 = cljs.core.next.call(null,seq__14315__$1);
var G__14363 = null;
var G__14364 = (0);
var G__14365 = (0);
seq__14315 = G__14362;
chunk__14316 = G__14363;
count__14317 = G__14364;
i__14318 = G__14365;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.core.reset_BANG_.call(null,tiltontec.cell.base._PLUS_client_q_handler_PLUS_,tiltontec.qxia.base.qxia_q_handler);
if(typeof tiltontec.qxia.base.qx_initialize !== 'undefined'){
} else {
tiltontec.qxia.base.qx_initialize = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.qxia.base","qx-initialize"),tiltontec.cell.base.ia_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
return null;
}));
tiltontec.qxia.base.qx_obj_properties = (function tiltontec$qxia$base$qx_obj_properties(me){
return cljs.core.map.call(null,cljs.core.keyword,qx.Class.getProperties((function (){var or__6210__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return tiltontec.qxia.base.qxia_type_to_qx_class.call(null,tiltontec.cell.base.ia_type.call(null,me));
}
})()));
});
if(typeof tiltontec.qxia.base.qx_initialize_all !== 'undefined'){
} else {
tiltontec.qxia.base.qx_initialize_all = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.qxia.base","qx-initialize-all"),tiltontec.cell.base.ia_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize_all,new cljs.core.Keyword("tiltontec.qxia.types","m.Single","tiltontec.qxia.types/m.Single",-602074724),(function (me){
return null;
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize_all,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
var temp__4425__auto___14380 = (function (){var iter__6990__auto__ = (function tiltontec$qxia$base$iter__14366(s__14367){
return (new cljs.core.LazySeq(null,(function (){
var s__14367__$1 = s__14367;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14367__$1);
if(temp__4425__auto__){
var s__14367__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14367__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__14367__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__14369 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__14368 = (0);
while(true){
if((i__14368 < size__6989__auto__)){
var k = cljs.core._nth.call(null,c__6988__auto__,i__14368);
var val = tiltontec.model.core.md_getx.call(null,new cljs.core.Keyword(null,"init-all","init-all",482505234),me,k);
if(!((val == null))){
cljs.core.chunk_append.call(null,b__14369,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null));

var G__14381 = (i__14368 + (1));
i__14368 = G__14381;
continue;
} else {
var G__14382 = (i__14368 + (1));
i__14368 = G__14382;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14369),tiltontec$qxia$base$iter__14366.call(null,cljs.core.chunk_rest.call(null,s__14367__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14369),null);
}
} else {
var k = cljs.core.first.call(null,s__14367__$2);
var val = tiltontec.model.core.md_getx.call(null,new cljs.core.Keyword(null,"init-all","init-all",482505234),me,k);
if(!((val == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null),tiltontec$qxia$base$iter__14366.call(null,cljs.core.rest.call(null,s__14367__$2)));
} else {
var G__14383 = cljs.core.rest.call(null,s__14367__$2);
s__14367__$1 = G__14383;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,tiltontec.qxia.base.qx_obj_properties.call(null,me));
})();
if(cljs.core.truth_(temp__4425__auto___14380)){
var inits_14384 = temp__4425__auto___14380;
var qx_14385 = tiltontec.qxia.base.qxme.call(null,me);
if(cljs.core.truth_(qx_14385)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("qx-initialize-all-def> no qxme "),cljs.core.str(tiltontec.cell.base.ia_type.call(null,me))].join('')),cljs.core.str("\n"),cljs.core.str("qx")].join('')));
}

qx_14385.set(cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,inits_14384)));
} else {
}

if(cljs.core.truth_(tiltontec.qxia.base.qxme.call(null,me))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("no qx initall "),cljs.core.str(tiltontec.cell.base.ia_type.call(null,me))].join('')),cljs.core.str("\n"),cljs.core.str("(qxme me)")].join('')));
}

var seq__14370 = cljs.core.seq.call(null,tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"listeners","listeners",394544445)));
var chunk__14371 = null;
var count__14372 = (0);
var i__14373 = (0);
while(true){
if((i__14373 < count__14372)){
var vec__14374 = cljs.core._nth.call(null,chunk__14371,i__14373);
var name = cljs.core.nth.call(null,vec__14374,(0),null);
var handler = cljs.core.nth.call(null,vec__14374,(1),null);
var qxme_14386 = tiltontec.qxia.base.qxme.call(null,me);
qxme_14386.addListener(name,((function (seq__14370,chunk__14371,count__14372,i__14373,qxme_14386,vec__14374,name,handler){
return (function (event){
return handler.call(null,event,me);
});})(seq__14370,chunk__14371,count__14372,i__14373,qxme_14386,vec__14374,name,handler))
);

var G__14387 = seq__14370;
var G__14388 = chunk__14371;
var G__14389 = count__14372;
var G__14390 = (i__14373 + (1));
seq__14370 = G__14387;
chunk__14371 = G__14388;
count__14372 = G__14389;
i__14373 = G__14390;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14370);
if(temp__4425__auto__){
var seq__14370__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14370__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__14370__$1);
var G__14391 = cljs.core.chunk_rest.call(null,seq__14370__$1);
var G__14392 = c__7021__auto__;
var G__14393 = cljs.core.count.call(null,c__7021__auto__);
var G__14394 = (0);
seq__14370 = G__14391;
chunk__14371 = G__14392;
count__14372 = G__14393;
i__14373 = G__14394;
continue;
} else {
var vec__14377 = cljs.core.first.call(null,seq__14370__$1);
var name = cljs.core.nth.call(null,vec__14377,(0),null);
var handler = cljs.core.nth.call(null,vec__14377,(1),null);
var qxme_14395 = tiltontec.qxia.base.qxme.call(null,me);
qxme_14395.addListener(name,((function (seq__14370,chunk__14371,count__14372,i__14373,qxme_14395,vec__14377,name,handler,seq__14370__$1,temp__4425__auto__){
return (function (event){
return handler.call(null,event,me);
});})(seq__14370,chunk__14371,count__14372,i__14373,qxme_14395,vec__14377,name,handler,seq__14370__$1,temp__4425__auto__))
);

var G__14396 = cljs.core.next.call(null,seq__14370__$1);
var G__14397 = null;
var G__14398 = (0);
var G__14399 = (0);
seq__14370 = G__14396;
chunk__14371 = G__14397;
count__14372 = G__14398;
i__14373 = G__14399;
continue;
}
} else {
return null;
}
}
break;
}
}));
if(typeof tiltontec.qxia.base.qx_property_observe !== 'undefined'){
} else {
tiltontec.qxia.base.qx_property_observe = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.qxia.base","qx-property-observe"),((function (method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__){
return (function (slot,me,new$,old,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,tiltontec.cell.base.ia_type.call(null,me)], null);
});})(method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_property_observe,new cljs.core.Keyword(null,"default","default",-1987822328),(function (slot,me,new$,old,c){
var temp__4425__auto__ = tiltontec.qxia.base.qxme.call(null,me);
if(cljs.core.truth_(temp__4425__auto__)){
var qxme = temp__4425__auto__;
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
var sd = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,slot),new$], null)], null));
return qxme.set(cljs.core.clj__GT_js.call(null,sd));
} else {
return null;
}
} else {
return null;
}
}));
tiltontec.qxia.base.qx_observe_default = (function tiltontec$qxia$base$qx_observe_default(slot,me,new$,old,c){
if(cljs.core.truth_((function (){var and__6198__auto__ = !(cljs.core.isa_QMARK_.call(null,tiltontec.cell.base.ia_type.call(null,me),new cljs.core.Keyword("tiltontec.qxia.types","m.RadioGroupStub","tiltontec.qxia.types/m.RadioGroupStub",-179001450)));
if(and__6198__auto__){
var and__6198__auto____$1 = cljs.core.isa_QMARK_.call(null,tiltontec.cell.base.ia_type.call(null,me),new cljs.core.Keyword("tiltontec.qxia.types","qx.Object","tiltontec.qxia.types/qx.Object",-1295429520));
if(and__6198__auto____$1){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([slot], true),tiltontec.qxia.base.qx_obj_properties.call(null,me));
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
return tiltontec.qxia.base.qx_property_observe.call(null,slot,me,new$,old,c);
} else {
return null;
}
});
cljs.core.reset_BANG_.call(null,tiltontec.cell.observer._PLUS_observe_default_handler_PLUS_,tiltontec.qxia.base.qx_observe_default);
tiltontec.qxia.base.form_build_radio_group_stub = (function tiltontec$qxia$base$form_build_radio_group_stub(form,stub){
var qx_form = tiltontec.qxia.base.qxme.call(null,form);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,form,new cljs.core.Keyword("tiltontec.qxia.types","m.Form","tiltontec.qxia.types/m.Form",-409217225)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("radio groups must be added to ::m.Form's, not "),cljs.core.str(tiltontec.cell.base.ia_type.call(null,form))].join('')),cljs.core.str("\n"),cljs.core.str("(ia-type? form :tiltontec.qxia.types/m.Form)")].join('')));
}

var temp__4425__auto___14408 = new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stub));
if(cljs.core.truth_(temp__4425__auto___14408)){
var h_14409 = temp__4425__auto___14408;
qx_form.addGroupHeader(h_14409);
} else {
}

var group = (new qx.ui.mobile.form.RadioGroup());
group.setAllowEmptySelection((function (){var or__6210__auto__ = new cljs.core.Keyword(null,"allowEmptySelection","allowEmptySelection",485851121).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stub));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return false;
}
})());

tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"3-post-assembly","3-post-assembly",-607469254),stub], null),((function (group,qx_form){
return (function (opcode,defer_info){
return group.addListener("changeSelection",((function (group,qx_form){
return (function (e){
var rb = cljs.core.first.call(null,cljs.core.js__GT_clj.call(null,e.getData()));
if(cljs.core.truth_(rb)){
return tiltontec.model.core.md_reset_BANG_.call(null,stub,new cljs.core.Keyword(null,"selection","selection",975998651),cljs.core.keyword.call(null,rb.getModel()));
} else {
return null;
}
});})(group,qx_form))
);
});})(group,qx_form))
);

var seq__14404_14410 = cljs.core.seq.call(null,tiltontec.model.core.md_get.call(null,stub,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__14405_14411 = null;
var count__14406_14412 = (0);
var i__14407_14413 = (0);
while(true){
if((i__14407_14413 < count__14406_14412)){
var rb_14414 = cljs.core._nth.call(null,chunk__14405_14411,i__14407_14413);
group.add(tiltontec.qxia.base.qxme.call(null,rb_14414));

qx_form.add(tiltontec.qxia.base.qxme.call(null,rb_14414),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rb_14414)));

var G__14415 = seq__14404_14410;
var G__14416 = chunk__14405_14411;
var G__14417 = count__14406_14412;
var G__14418 = (i__14407_14413 + (1));
seq__14404_14410 = G__14415;
chunk__14405_14411 = G__14416;
count__14406_14412 = G__14417;
i__14407_14413 = G__14418;
continue;
} else {
var temp__4425__auto___14419 = cljs.core.seq.call(null,seq__14404_14410);
if(temp__4425__auto___14419){
var seq__14404_14420__$1 = temp__4425__auto___14419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14404_14420__$1)){
var c__7021__auto___14421 = cljs.core.chunk_first.call(null,seq__14404_14420__$1);
var G__14422 = cljs.core.chunk_rest.call(null,seq__14404_14420__$1);
var G__14423 = c__7021__auto___14421;
var G__14424 = cljs.core.count.call(null,c__7021__auto___14421);
var G__14425 = (0);
seq__14404_14410 = G__14422;
chunk__14405_14411 = G__14423;
count__14406_14412 = G__14424;
i__14407_14413 = G__14425;
continue;
} else {
var rb_14426 = cljs.core.first.call(null,seq__14404_14420__$1);
group.add(tiltontec.qxia.base.qxme.call(null,rb_14426));

qx_form.add(tiltontec.qxia.base.qxme.call(null,rb_14426),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rb_14426)));

var G__14427 = cljs.core.next.call(null,seq__14404_14420__$1);
var G__14428 = null;
var G__14429 = (0);
var G__14430 = (0);
seq__14404_14410 = G__14427;
chunk__14405_14411 = G__14428;
count__14406_14412 = G__14429;
i__14407_14413 = G__14430;
continue;
}
} else {
}
}
break;
}

var temp__4423__auto__ = tiltontec.model.core.md_get.call(null,stub,new cljs.core.Keyword(null,"selection","selection",975998651));
if(cljs.core.truth_(temp__4423__auto__)){
var s = temp__4423__auto__;
var gs = cljs.core.filter.call(null,((function (s,temp__4423__auto__,group,qx_form){
return (function (rb){
return cljs.core._EQ_.call(null,s,new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rb)));
});})(s,temp__4423__auto__,group,qx_form))
,tiltontec.model.core.md_get.call(null,stub,new cljs.core.Keyword(null,"kids","kids",1156670771)));
return group.setSelection(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,tiltontec.qxia.base.qxme,gs)));
} else {
return group.resetSelection();
}
});
tiltontec.qxia.base.qx_add_kid = (function tiltontec$qxia$base$qx_add_kid(me,kid){
if(cljs.core.truth_(tiltontec.qxia.base.qxme.call(null,me))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("qx-add-kid>no qxme me"),cljs.core.str(tiltontec.cell.base.ia_type.call(null,me)),cljs.core.str(me)].join('')),cljs.core.str("\n"),cljs.core.str("(qxme me)")].join('')));
}

if(cljs.core.truth_(tiltontec.qxia.base.qxme.call(null,kid))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("qx-add-kid> no qxme kid"),cljs.core.str(tiltontec.cell.base.ia_type.call(null,me)),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me))),cljs.core.str(tiltontec.cell.base.ia_type.call(null,kid)),cljs.core.str(kid)].join('')),cljs.core.str("\n"),cljs.core.str("(qxme kid)")].join('')));
}

var temp__4423__auto__ = new cljs.core.Keyword(null,"flex","flex",-1425124628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,kid));
if(cljs.core.truth_(temp__4423__auto__)){
var flex = temp__4423__auto__;
return tiltontec.qxia.base.qxme.call(null,me).add(tiltontec.qxia.base.qxme.call(null,kid),{"flex": flex});
} else {
return tiltontec.qxia.base.qxme.call(null,me).add(tiltontec.qxia.base.qxme.call(null,kid));
}
});
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css-class","css-class",-919455334),new cljs.core.Keyword("tiltontec.qxia.types","qx.Object","tiltontec.qxia.types/qx.Object",-1295429520)], null),(function (_,me,new$,old,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
if(cljs.core._EQ_.call(null,old,tiltontec.cell.base.unbound)){
} else {
var oldv_14431 = tiltontec.util.core.ensure_vec.call(null,old);
var lost_14432 = (cljs.core.truth_(new$)?clojure.set.difference.call(null,cljs.core.set.call(null,oldv_14431),cljs.core.set.call(null,tiltontec.util.core.ensure_vec.call(null,new$))):oldv_14431);
if(cljs.core.empty_QMARK_.call(null,lost_14432)){
} else {
tiltontec.qxia.base.qxme.call(null,me).removeCssClasses(cljs.core.clj__GT_js.call(null,cljs.core.vec.call(null,lost_14432)));
}
}

if(cljs.core.truth_(new$)){
var newv = tiltontec.util.core.ensure_vec.call(null,new$);
var gained = ((cljs.core._EQ_.call(null,old,tiltontec.cell.base.unbound))?newv:clojure.set.difference.call(null,cljs.core.set.call(null,newv),cljs.core.set.call(null,tiltontec.util.core.ensure_vec.call(null,old))));
if(cljs.core.empty_QMARK_.call(null,gained)){
return null;
} else {
return tiltontec.qxia.base.qxme.call(null,me).addCssClasses(cljs.core.clj__GT_js.call(null,cljs.core.vec.call(null,gained)));
}
} else {
return null;
}
}));
}));
