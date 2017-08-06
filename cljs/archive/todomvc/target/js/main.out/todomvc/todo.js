// Compiled by ClojureScript 1.9.473 {}
goog.provide('todomvc.todo');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.model.core');
goog.require('tiltontec.util.core');
goog.require('tiltontec.tag.html');
todomvc.todo.TODO_LS_PREFIX = "todos-jLive.";
todomvc.todo.make_todo = (function todomvc$todo$make_todo(islots){
var net_slots = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("todomvc.todo","todo","todomvc.todo/todo",-738981674),new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(todomvc.todo.TODO_LS_PREFIX),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.util.core.uuidv4.call(null))].join(''),new cljs.core.Keyword(null,"created","created",-704993748),tiltontec.util.core.now.call(null)], null),islots,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),tiltontec.cell.core.c_in.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(islots)),new cljs.core.Keyword(null,"completed","completed",-486056503),tiltontec.cell.core.c_in.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$2(islots,false)),new cljs.core.Keyword(null,"deleted","deleted",-510100639),(function (){var or__7113__auto__ = new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(islots);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return tiltontec.cell.core.c_in.call(null,null);
}
})()], null));
var todo = cljs.core.apply.call(null,tiltontec.model.core.make,cljs.core.flatten.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,net_slots)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(islots))){
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"make-td-upsert-new!!","make-td-upsert-new!!",1918521366),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,todo)));

todomvc.todo.td_upsert.call(null,todo);
}

return todo;
});
todomvc.todo.td_title = (function todomvc$todo$td_title(td){
return tiltontec.model.core.md_get.call(null,td,new cljs.core.Keyword(null,"title","title",636505583));
});
todomvc.todo.td_id = (function todomvc$todo$td_id(td){
return tiltontec.model.core.md_get.call(null,td,new cljs.core.Keyword(null,"id","id",-1388402092));
});
todomvc.todo.td_completed = (function todomvc$todo$td_completed(td){
return tiltontec.model.core.md_get.call(null,td,new cljs.core.Keyword(null,"completed","completed",-486056503));
});
todomvc.todo.td_to_map = (function todomvc$todo$td_to_map(todo){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7901__auto__ = (function todomvc$todo$td_to_map_$_iter__17417(s__17418){
return (new cljs.core.LazySeq(null,(function (){
var s__17418__$1 = s__17418;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__17418__$1);
if(temp__4657__auto__){
var s__17418__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17418__$2)){
var c__7899__auto__ = cljs.core.chunk_first.call(null,s__17418__$2);
var size__7900__auto__ = cljs.core.count.call(null,c__7899__auto__);
var b__17420 = cljs.core.chunk_buffer.call(null,size__7900__auto__);
if((function (){var i__17419 = (0);
while(true){
if((i__17419 < size__7900__auto__)){
var k = cljs.core._nth.call(null,c__7899__auto__,i__17419);
cljs.core.chunk_append.call(null,b__17420,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tiltontec.model.core.md_get.call(null,todo,k)], null));

var G__17421 = (i__17419 + (1));
i__17419 = G__17421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17420),todomvc$todo$td_to_map_$_iter__17417.call(null,cljs.core.chunk_rest.call(null,s__17418__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17420),null);
}
} else {
var k = cljs.core.first.call(null,s__17418__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tiltontec.model.core.md_get.call(null,todo,k)], null),todomvc$todo$td_to_map_$_iter__17417.call(null,cljs.core.rest.call(null,s__17418__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7901__auto__.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"created","created",-704993748),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"deleted","deleted",-510100639)], null));
})());
});
todomvc.todo.td_to_json = (function todomvc$todo$td_to_json(todo){
return tiltontec.util.core.map_to_json.call(null,todomvc.todo.td_to_map.call(null,todo));
});
todomvc.todo.td_from_json = (function todomvc$todo$td_from_json(json){
return todomvc.todo.make_todo.call(null,cljs.core.assoc.call(null,tiltontec.util.core.json_to_map.call(null,json),new cljs.core.Keyword(null,"par","par",-61778778),new cljs.core.Keyword(null,"todo-42","todo-42",-778414513)));
});
todomvc.todo.td_upsert = (function todomvc$todo$td_upsert(td){
return tiltontec.tag.html.io_upsert.call(null,todomvc.todo.td_id.call(null,td),JSON.stringify(todomvc.todo.td_to_json.call(null,td)));
});
todomvc.todo.td_load = (function todomvc$todo$td_load(id){
return todomvc.todo.td_from_json.call(null,JSON.parse(tiltontec.tag.html.io_read.call(null,id)));
});
todomvc.todo.td_load_all = (function todomvc$todo$td_load_all(){
return tiltontec.model.core.make.call(null,new cljs.core.Keyword("todomvc.todo","todo-list","todomvc.todo/todo-list",639402914),new cljs.core.Keyword(null,"par","par",-61778778),new cljs.core.Keyword(null,"todo-42-top","todo-42-top",-1068075750),new cljs.core.Keyword(null,"items-raw","items-raw",153861709),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol(null,"doall","doall",988520834,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"td-load","td-load",1267562203,null),cljs.core.list(new cljs.core.Symbol(null,"io-find","io-find",-1556643764,null),new cljs.core.Symbol(null,"TODO_LS_PREFIX","TODO_LS_PREFIX",-134977255,null))))),new cljs.core.Keyword(null,"input?","input?",-1792843173),true,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_17424 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{return cljs.core.doall.call(null,cljs.core.map.call(null,todomvc.todo.td_load,tiltontec.tag.html.io_find.call(null,todomvc.todo.TODO_LS_PREFIX)));
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_17424;
}})),new cljs.core.Keyword(null,"items","items",1031954938),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"doall","doall",988520834,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__17422#","p1__17422#",-1682654012,null)], null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"p1__17422#","p1__17422#",-1682654012,null),new cljs.core.Keyword(null,"deleted","deleted",-510100639))),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"items-raw","items-raw",153861709))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return cljs.core.doall.call(null,cljs.core.remove.call(null,((function (me,cache){
return (function (p1__17422_SHARP_){
return tiltontec.model.core.md_get.call(null,p1__17422_SHARP_,new cljs.core.Keyword(null,"deleted","deleted",-510100639));
});})(me,cache))
,tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"items-raw","items-raw",153861709))));
})));
});
cljs.core._add_method.call(null,tiltontec.cell.observer.observe_by_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.todo","todo","todomvc.todo/todo",-738981674)], null),(function (slot,me,new_val,old_val,c){
if(cljs.core._EQ_.call(null,old_val,tiltontec.cell.base.unbound)){
return null;
} else {
return todomvc.todo.td_upsert.call(null,me);
}
}));
todomvc.todo.gTodo = cljs.core.atom.call(null,null);
todomvc.todo.gItems_raw = (function todomvc$todo$gItems_raw(){
return tiltontec.model.core.md_get.call(null,cljs.core.deref.call(null,todomvc.todo.gTodo),new cljs.core.Keyword(null,"items-raw","items-raw",153861709));
});
todomvc.todo.gTodo_items = (function todomvc$todo$gTodo_items(){
return tiltontec.model.core.md_get.call(null,cljs.core.deref.call(null,todomvc.todo.gTodo),new cljs.core.Keyword(null,"items","items",1031954938));
});
todomvc.todo.gTodo_lookup = (function todomvc$todo$gTodo_lookup(id){
var td = cljs.core.some.call(null,(function (td){
if(cljs.core._EQ_.call(null,id,todomvc.todo.td_id.call(null,td))){
return td;
} else {
return null;
}
}),todomvc.todo.gTodo_items.call(null));
if(cljs.core.truth_(td)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("gTodo-lookup cannot find "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("td")].join('')));
}

return td;
});
todomvc.todo.td_delete = (function todomvc$todo$td_delete(td){
return tiltontec.model.core.md_reset_BANG_.call(null,td,new cljs.core.Keyword(null,"deleted","deleted",-510100639),tiltontec.util.core.now.call(null));
});
todomvc.todo.td_toggle_completed = (function todomvc$todo$td_toggle_completed(event,id){
var td = cljs.core.some.call(null,(function (td){
if(cljs.core._EQ_.call(null,id,todomvc.todo.td_id.call(null,td))){
return td;
} else {
return null;
}
}),todomvc.todo.gTodo_items.call(null));
if(cljs.core.truth_(td)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("td-toggle-completed cannot find "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("td")].join('')));
}

return tiltontec.model.core.md_reset_BANG_.call(null,td,new cljs.core.Keyword(null,"completed","completed",-486056503),(cljs.core.truth_(todomvc.todo.td_completed.call(null,td))?null:tiltontec.util.core.now.call(null)));
});
todomvc.todo.td_clear_completed = (function todomvc$todo$td_clear_completed(e){
return cljs.core.doall.call(null,cljs.core.map.call(null,todomvc.todo.td_delete,cljs.core.filter.call(null,todomvc.todo.td_completed,todomvc.todo.gTodo_items.call(null))));
});
todomvc.todo.td_delete_by_key = (function todomvc$todo$td_delete_by_key(event,id){
return todomvc.todo.td_delete.call(null,todomvc.todo.gTodo_lookup.call(null,id));
});

//# sourceMappingURL=todo.js.map