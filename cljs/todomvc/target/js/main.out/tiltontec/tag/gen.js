// Compiled by ClojureScript 1.9.473 {}
goog.provide('tiltontec.tag.gen');
goog.require('cljs.core');
goog.require('tiltontec.model.core');
goog.require('cljs.pprint');
tiltontec.tag.gen.on_event_attr_template = "(function () { ~a(event~{,~s~})})()";
tiltontec.tag.gen.on_evt = (function tiltontec$tag$gen$on_evt(var_args){
var args__8233__auto__ = [];
var len__8226__auto___17389 = arguments.length;
var i__8227__auto___17390 = (0);
while(true){
if((i__8227__auto___17390 < len__8226__auto___17389)){
args__8233__auto__.push((arguments[i__8227__auto___17390]));

var G__17391 = (i__8227__auto___17390 + (1));
i__8227__auto___17390 = G__17391;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((3) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((3)),(0),null)):null);
return tiltontec.tag.gen.on_evt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8234__auto__);
});

tiltontec.tag.gen.on_evt.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fname,cb_args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7955__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn-name__17384__auto__","fn-name__17384__auto__",739868625,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("str","replace","str/replace",854058908,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("str","replace","str/replace",854058908,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","subs","cljs.core/subs",-1092266147,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.tag.gen","resolve","tiltontec.tag.gen/resolve",-1200412583,null)),(function (){var x__7955__auto__ = fname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"-"),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/"),cljs.core._conj.call(null,cljs.core.List.EMPTY,"."))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("pp","cl-format","pp/cl-format",-1229841582,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.tag.gen","on-event-attr-template","tiltontec.tag.gen/on-event-attr-template",-1349210742,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn-name__17384__auto__","fn-name__17384__auto__",739868625,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),cb_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
});

tiltontec.tag.gen.on_evt.cljs$lang$maxFixedArity = (3);

tiltontec.tag.gen.on_evt.cljs$lang$applyTo = (function (seq17385){
var G__17386 = cljs.core.first.call(null,seq17385);
var seq17385__$1 = cljs.core.next.call(null,seq17385);
var G__17387 = cljs.core.first.call(null,seq17385__$1);
var seq17385__$2 = cljs.core.next.call(null,seq17385__$1);
var G__17388 = cljs.core.first.call(null,seq17385__$2);
var seq17385__$3 = cljs.core.next.call(null,seq17385__$2);
return tiltontec.tag.gen.on_evt.cljs$core$IFn$_invoke$arity$variadic(G__17386,G__17387,G__17388,seq17385__$3);
});


tiltontec.tag.gen.on_evt.cljs$lang$macro = true;
tiltontec.tag.gen.on_evt_BANG_ = (function tiltontec$tag$gen$on_evt_BANG_(var_args){
var args__8233__auto__ = [];
var len__8226__auto___17397 = arguments.length;
var i__8227__auto___17398 = (0);
while(true){
if((i__8227__auto___17398 < len__8226__auto___17397)){
args__8233__auto__.push((arguments[i__8227__auto___17398]));

var G__17399 = (i__8227__auto___17398 + (1));
i__8227__auto___17398 = G__17399;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((3) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((3)),(0),null)):null);
return tiltontec.tag.gen.on_evt_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8234__auto__);
});

tiltontec.tag.gen.on_evt_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fname,cb_args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7955__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn-name__17392__auto__","fn-name__17392__auto__",-1729746648,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("str","replace","str/replace",854058908,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("str","replace","str/replace",854058908,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7955__auto__ = fname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"-"),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/"),cljs.core._conj.call(null,cljs.core.List.EMPTY,"."))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("pp","cl-format","pp/cl-format",-1229841582,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.tag.gen","on-event-attr-template","tiltontec.tag.gen/on-event-attr-template",-1349210742,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn-name__17392__auto__","fn-name__17392__auto__",-1729746648,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),cb_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
});

tiltontec.tag.gen.on_evt_BANG_.cljs$lang$maxFixedArity = (3);

tiltontec.tag.gen.on_evt_BANG_.cljs$lang$applyTo = (function (seq17393){
var G__17394 = cljs.core.first.call(null,seq17393);
var seq17393__$1 = cljs.core.next.call(null,seq17393);
var G__17395 = cljs.core.first.call(null,seq17393__$1);
var seq17393__$2 = cljs.core.next.call(null,seq17393__$1);
var G__17396 = cljs.core.first.call(null,seq17393__$2);
var seq17393__$3 = cljs.core.next.call(null,seq17393__$2);
return tiltontec.tag.gen.on_evt_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17394,G__17395,G__17396,seq17393__$3);
});


tiltontec.tag.gen.on_evt_BANG_.cljs$lang$macro = true;
tiltontec.tag.gen.tag_dom_sid = cljs.core.atom.call(null,(-1));
tiltontec.tag.gen.id_js = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tiltontec.tag.gen.dom_tag = (function tiltontec$tag$gen$dom_tag(dom){
var tag = cljs.core.get.call(null,cljs.core.deref.call(null,tiltontec.tag.gen.id_js),dom.id);
if(cljs.core.truth_(tag)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("dom-tag did not find js for id "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dom.id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of dom "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dom)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("tag")].join('')));
}

return tag;
});
tiltontec.tag.gen.make_tag = (function tiltontec$tag$gen$make_tag(tag,attrs,c_QMARK_kids){
var dom_sid = cljs.core.swap_BANG_.call(null,tiltontec.tag.gen.tag_dom_sid,cljs.core.inc);
var js_obj = cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.tag.html","tag","tiltontec.tag.html/tag",1337322312),new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,cljs.core.conj.call(null,attrs,new cljs.core.Keyword(null,"id","id",-1388402092),dom_sid,new cljs.core.Keyword(null,"kids","kids",1156670771),c_QMARK_kids));
cljs.core.swap_BANG_.call(null,tiltontec.tag.gen.id_js,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dom_sid)].join(''),js_obj);

return js_obj;
});
tiltontec.tag.gen.deftag = (function tiltontec$tag$gen$deftag(_AMPERSAND_form,_AMPERSAND_env,tag){
var kids_sym = cljs.core.gensym.call(null,"kids");
var tag_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join('');
var attrs_sym = cljs.core.gensym.call(null,"attrs");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defmacro","cljs.core/defmacro",-1834053857,null)),(function (){var x__7955__auto__ = tag;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7955__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",-2144855648,null)),(function (){var x__7955__auto__ = attrs_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",-2144855648,null)),(function (){var x__7955__auto__ = kids_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.tag.gen","make-tag","tiltontec.tag.gen/make-tag",-893405104,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7955__auto__ = tag_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vec","cljs.core/vec",307622519,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__7955__auto__ = attrs_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = kids_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
});

tiltontec.tag.gen.deftag.cljs$lang$macro = true;
tiltontec.tag.gen.deftags = (function tiltontec$tag$gen$deftags(var_args){
var args__8233__auto__ = [];
var len__8226__auto___17407 = arguments.length;
var i__8227__auto___17408 = (0);
while(true){
if((i__8227__auto___17408 < len__8226__auto___17407)){
args__8233__auto__.push((arguments[i__8227__auto___17408]));

var G__17409 = (i__8227__auto___17408 + (1));
i__8227__auto___17408 = G__17409;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((2) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((2)),(0),null)):null);
return tiltontec.tag.gen.deftags.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8234__auto__);
});

tiltontec.tag.gen.deftags.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tags){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var iter__7901__auto__ = (function tiltontec$tag$gen$iter__17403(s__17404){
return (new cljs.core.LazySeq(null,(function (){
var s__17404__$1 = s__17404;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__17404__$1);
if(temp__4657__auto__){
var s__17404__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17404__$2)){
var c__7899__auto__ = cljs.core.chunk_first.call(null,s__17404__$2);
var size__7900__auto__ = cljs.core.count.call(null,c__7899__auto__);
var b__17406 = cljs.core.chunk_buffer.call(null,size__7900__auto__);
if((function (){var i__17405 = (0);
while(true){
if((i__17405 < size__7900__auto__)){
var tag = cljs.core._nth.call(null,c__7899__auto__,i__17405);
cljs.core.chunk_append.call(null,b__17406,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.tag.gen","deftag","tiltontec.tag.gen/deftag",-845346631,null)),(function (){var x__7955__auto__ = tag;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})()))));

var G__17410 = (i__17405 + (1));
i__17405 = G__17410;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17406),tiltontec$tag$gen$iter__17403.call(null,cljs.core.chunk_rest.call(null,s__17404__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17406),null);
}
} else {
var tag = cljs.core.first.call(null,s__17404__$2);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.tag.gen","deftag","tiltontec.tag.gen/deftag",-845346631,null)),(function (){var x__7955__auto__ = tag;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})()))),tiltontec$tag$gen$iter__17403.call(null,cljs.core.rest.call(null,s__17404__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7901__auto__.call(null,tags);
})())));
});

tiltontec.tag.gen.deftags.cljs$lang$maxFixedArity = (2);

tiltontec.tag.gen.deftags.cljs$lang$applyTo = (function (seq17400){
var G__17401 = cljs.core.first.call(null,seq17400);
var seq17400__$1 = cljs.core.next.call(null,seq17400);
var G__17402 = cljs.core.first.call(null,seq17400__$1);
var seq17400__$2 = cljs.core.next.call(null,seq17400__$1);
return tiltontec.tag.gen.deftags.cljs$core$IFn$_invoke$arity$variadic(G__17401,G__17402,seq17400__$2);
});


tiltontec.tag.gen.deftags.cljs$lang$macro = true;













tiltontec.tag.gen.deftags.call(null,tiltontec.tag.gen.section,tiltontec.tag.gen.label,tiltontec.tag.gen.header,tiltontec.tag.gen.footer,tiltontec.tag.gen.h1,tiltontec.tag.gen.input,tiltontec.tag.gen.p,tiltontec.tag.gen.span,tiltontec.tag.gen.a,tiltontec.tag.gen.img,tiltontec.tag.gen.ul,tiltontec.tag.gen.li,tiltontec.tag.gen.div,tiltontec.tag.gen.button);

//# sourceMappingURL=gen.js.map