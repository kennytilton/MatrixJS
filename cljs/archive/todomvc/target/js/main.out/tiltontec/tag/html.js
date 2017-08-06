// Compiled by ClojureScript 1.9.473 {}
goog.provide('tiltontec.tag.html');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.pprint');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.model.core');
tiltontec.tag.html.tagfo = (function tiltontec$tag$html$tagfo(me){
return cljs.core.select_keys.call(null,cljs.core.deref.call(null,me),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"name","name",1843675177)], null));
});
tiltontec.tag.html.fm_asc_tag = (function tiltontec$tag$html$fm_asc_tag(me,tag){
return tiltontec.model.core.fasc.call(null,(function (visited){
return cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,visited)));
}),me);
});
tiltontec.tag.html.dom_has_class = (function tiltontec$tag$html$dom_has_class(dom,class$){
if(cljs.core.truth_(dom)){
var cs = dom.classList;
if(cljs.core.truth_(cs)){
return dom.classList.contains(class$);
} else {
return null;
}
} else {
return null;
}
});
tiltontec.tag.html.dom_ancestor_by_class = (function tiltontec$tag$html$dom_ancestor_by_class(dom,class$){
if(cljs.core.truth_(dom)){
var pn = dom.parentNode;
if(cljs.core.truth_(pn)){
if(cljs.core.truth_(tiltontec.tag.html.dom_has_class.call(null,pn,class$))){
return pn;
} else {
return tiltontec.tag.html.dom_ancestor_by_class.call(null,pn,class$);
}
} else {
return null;
}
} else {
return null;
}
});
tiltontec.tag.html.dom_ancestor_by_tag = (function tiltontec$tag$html$dom_ancestor_by_tag(dom,tag){
if(cljs.core.truth_(dom)){
var pn = dom.parentNode;
if(cljs.core.truth_(pn)){
if(cljs.core._EQ_.call(null,pn.tagName,clojure.string.upper_case.call(null,tag))){
return pn;
} else {
return tiltontec.tag.html.dom_ancestor_by_tag.call(null,pn,tag);
}
} else {
return null;
}
} else {
return null;
}
});
tiltontec.tag.html.to_html = (function tiltontec$tag$html$to_html(me){
if(typeof me === 'string'){
return me;
} else {
if(cljs.core.coll_QMARK_.call(null,me)){
var b$ = cljs.core.map.call(null,tiltontec.tag.html.to_html,me);
return cljs.core.apply.call(null,cljs.core.str,b$);
} else {
var h = cljs.pprint.cl_format.call(null,null,"<~a ~a>~@[~a~]~{~a~}</~0@*~a>",new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)),tiltontec.tag.html.to_attrs.call(null,me),tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"content","content",15833224)),cljs.core.map.call(null,tiltontec.tag.html.to_html,tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771))));
return h;

}
}
});
tiltontec.tag.html._PLUS_true_html_PLUS_ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-type","input-type",856973840),"type"], null);
tiltontec.tag.html.true_html = (function tiltontec$tag$html$true_html(keyword){
var or__7113__auto__ = keyword.call(null,tiltontec.tag.html._PLUS_true_html_PLUS_);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return cljs.core.name.call(null,keyword);
}
});
tiltontec.tag.html.to_attrs = (function tiltontec$tag$html$to_attrs(me){
var unblank = (function (s){
if((cljs.core.count.call(null,s) > (0))){
return s;
} else {
return null;
}
});
var attr_keys = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"onclick","onclick",1297553739),new cljs.core.Keyword(null,"ondblclick","ondblclick",1587196472),new cljs.core.Keyword(null,"onkeypress","onkeypress",740819085),new cljs.core.Keyword(null,"onblur","onblur",689939618),new cljs.core.Keyword(null,"onmouseover","onmouseover",-455386327),new cljs.core.Keyword(null,"onkeydown","onkeydown",859512715),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)], null);
var style_keys = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432)], null);
var ga = clojure.string.join.call(null," ",(function (){var iter__7901__auto__ = ((function (unblank,attr_keys,style_keys){
return (function tiltontec$tag$html$to_attrs_$_iter__17294(s__17295){
return (new cljs.core.LazySeq(null,((function (unblank,attr_keys,style_keys){
return (function (){
var s__17295__$1 = s__17295;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__17295__$1);
if(temp__4657__auto__){
var s__17295__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17295__$2)){
var c__7899__auto__ = cljs.core.chunk_first.call(null,s__17295__$2);
var size__7900__auto__ = cljs.core.count.call(null,c__7899__auto__);
var b__17297 = cljs.core.chunk_buffer.call(null,size__7900__auto__);
if((function (){var i__17296 = (0);
while(true){
if((i__17296 < size__7900__auto__)){
var vec__17304 = cljs.core._nth.call(null,c__7899__auto__,i__17296);
var k = cljs.core.nth.call(null,vec__17304,(0),null);
var v = cljs.core.nth.call(null,vec__17304,(1),null);
cljs.core.chunk_append.call(null,b__17297,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k], true),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"autofocus","autofocus",-712814732)], null)))?(cljs.core.truth_(v)?cljs.core.name.call(null,k):""):cljs.pprint.cl_format.call(null,null,"~a='~a'",tiltontec.tag.html.true_html.call(null,k),v)));

var G__17330 = (i__17296 + (1));
i__17296 = G__17330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17297),tiltontec$tag$html$to_attrs_$_iter__17294.call(null,cljs.core.chunk_rest.call(null,s__17295__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17297),null);
}
} else {
var vec__17307 = cljs.core.first.call(null,s__17295__$2);
var k = cljs.core.nth.call(null,vec__17307,(0),null);
var v = cljs.core.nth.call(null,vec__17307,(1),null);
return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k], true),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"autofocus","autofocus",-712814732)], null)))?(cljs.core.truth_(v)?cljs.core.name.call(null,k):""):cljs.pprint.cl_format.call(null,null,"~a='~a'",tiltontec.tag.html.true_html.call(null,k),v)),tiltontec$tag$html$to_attrs_$_iter__17294.call(null,cljs.core.rest.call(null,s__17295__$2)));
}
} else {
return null;
}
break;
}
});})(unblank,attr_keys,style_keys))
,null,null));
});})(unblank,attr_keys,style_keys))
;
return iter__7901__auto__.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__7901__auto____$1 = ((function (iter__7901__auto__,unblank,attr_keys,style_keys){
return (function tiltontec$tag$html$to_attrs_$_iter__17310(s__17311){
return (new cljs.core.LazySeq(null,((function (iter__7901__auto__,unblank,attr_keys,style_keys){
return (function (){
var s__17311__$1 = s__17311;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__17311__$1);
if(temp__4657__auto__){
var s__17311__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17311__$2)){
var c__7899__auto__ = cljs.core.chunk_first.call(null,s__17311__$2);
var size__7900__auto__ = cljs.core.count.call(null,c__7899__auto__);
var b__17313 = cljs.core.chunk_buffer.call(null,size__7900__auto__);
if((function (){var i__17312 = (0);
while(true){
if((i__17312 < size__7900__auto__)){
var k = cljs.core._nth.call(null,c__7899__auto__,i__17312);
cljs.core.chunk_append.call(null,b__17313,(function (){var v = tiltontec.model.core.md_get.call(null,me,k);
if(cljs.core.truth_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return null;
}
})());

var G__17331 = (i__17312 + (1));
i__17312 = G__17331;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17313),tiltontec$tag$html$to_attrs_$_iter__17310.call(null,cljs.core.chunk_rest.call(null,s__17311__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17313),null);
}
} else {
var k = cljs.core.first.call(null,s__17311__$2);
return cljs.core.cons.call(null,(function (){var v = tiltontec.model.core.md_get.call(null,me,k);
if(cljs.core.truth_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return null;
}
})(),tiltontec$tag$html$to_attrs_$_iter__17310.call(null,cljs.core.rest.call(null,s__17311__$2)));
}
} else {
return null;
}
break;
}
});})(iter__7901__auto__,unblank,attr_keys,style_keys))
,null,null));
});})(iter__7901__auto__,unblank,attr_keys,style_keys))
;
return iter__7901__auto____$1.call(null,attr_keys);
})()));
})());
var css = clojure.string.join.call(null,";",(function (){var iter__7901__auto__ = ((function (ga,unblank,attr_keys,style_keys){
return (function tiltontec$tag$html$to_attrs_$_iter__17314(s__17315){
return (new cljs.core.LazySeq(null,((function (ga,unblank,attr_keys,style_keys){
return (function (){
var s__17315__$1 = s__17315;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__17315__$1);
if(temp__4657__auto__){
var s__17315__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17315__$2)){
var c__7899__auto__ = cljs.core.chunk_first.call(null,s__17315__$2);
var size__7900__auto__ = cljs.core.count.call(null,c__7899__auto__);
var b__17317 = cljs.core.chunk_buffer.call(null,size__7900__auto__);
if((function (){var i__17316 = (0);
while(true){
if((i__17316 < size__7900__auto__)){
var vec__17324 = cljs.core._nth.call(null,c__7899__auto__,i__17316);
var k = cljs.core.nth.call(null,vec__17324,(0),null);
var v = cljs.core.nth.call(null,vec__17324,(1),null);
cljs.core.chunk_append.call(null,b__17317,cljs.pprint.cl_format.call(null,null,"~a:~a",cljs.core.name.call(null,k),v));

var G__17332 = (i__17316 + (1));
i__17316 = G__17332;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17317),tiltontec$tag$html$to_attrs_$_iter__17314.call(null,cljs.core.chunk_rest.call(null,s__17315__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17317),null);
}
} else {
var vec__17327 = cljs.core.first.call(null,s__17315__$2);
var k = cljs.core.nth.call(null,vec__17327,(0),null);
var v = cljs.core.nth.call(null,vec__17327,(1),null);
return cljs.core.cons.call(null,cljs.pprint.cl_format.call(null,null,"~a:~a",cljs.core.name.call(null,k),v),tiltontec$tag$html$to_attrs_$_iter__17314.call(null,cljs.core.rest.call(null,s__17315__$2)));
}
} else {
return null;
}
break;
}
});})(ga,unblank,attr_keys,style_keys))
,null,null));
});})(ga,unblank,attr_keys,style_keys))
;
return iter__7901__auto__.call(null,cljs.core.select_keys.call(null,cljs.core.deref.call(null,me),style_keys));
})());
var fa = cljs.pprint.cl_format.call(null,null,"~@[~a~]~@[ style='~a'~]",unblank.call(null,ga),unblank.call(null,css));
return fa;
});
tiltontec.tag.html.tag_dom = (function tiltontec$tag$html$tag_dom(me){
var id = tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(id)){
} else {
throw (new Error("Assert failed: id"));
}

var or__7113__auto__ = tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"dom-cache","dom-cache",-2036866857));
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
var dom = document.getElementById([cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
if(cljs.core.truth_(dom)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("tag-dom failed on id "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("dom")].join('')));
}

return tiltontec.model.core.backdoor_reset_BANG_.call(null,me,new cljs.core.Keyword(null,"dom-cache","dom-cache",-2036866857),dom);
}
});
tiltontec.tag.html.tag = (function tiltontec$tag$html$tag(me){
return tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"tag","tag",-1290361223));
});
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.tag.html","tag","tiltontec.tag.html/tag",1337322312)], null),(function (_,me,newv,oldv,___$1){
if(cljs.core._EQ_.call(null,oldv,tiltontec.cell.base.unbound)){
return null;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.tag.html.tag_dom.call(null,me).tagName], true),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["LABEL"], null)))){
return tiltontec.tag.html.tag_dom.call(null,me).innerHTML = tiltontec.tag.html.to_html.call(null,newv);
} else {
var seq__17333_17347 = cljs.core.seq.call(null,oldv);
var chunk__17334_17348 = null;
var count__17335_17349 = (0);
var i__17336_17350 = (0);
while(true){
if((i__17336_17350 < count__17335_17349)){
var oldk_17351 = cljs.core._nth.call(null,chunk__17334_17348,i__17336_17350);
if(typeof oldk_17351 === 'string'){
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([oldk_17351], true),newv))){
} else {
var kdom_17352 = tiltontec.tag.html.tag_dom.call(null,oldk_17351);
if(cljs.core.truth_(kdom_17352)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no kdom oldk"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("kdom")].join('')));
}

kdom_17352.parentNode.removeChild(kdom_17352);
}
}

var G__17353 = seq__17333_17347;
var G__17354 = chunk__17334_17348;
var G__17355 = count__17335_17349;
var G__17356 = (i__17336_17350 + (1));
seq__17333_17347 = G__17353;
chunk__17334_17348 = G__17354;
count__17335_17349 = G__17355;
i__17336_17350 = G__17356;
continue;
} else {
var temp__4657__auto___17357 = cljs.core.seq.call(null,seq__17333_17347);
if(temp__4657__auto___17357){
var seq__17333_17358__$1 = temp__4657__auto___17357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17333_17358__$1)){
var c__7932__auto___17359 = cljs.core.chunk_first.call(null,seq__17333_17358__$1);
var G__17360 = cljs.core.chunk_rest.call(null,seq__17333_17358__$1);
var G__17361 = c__7932__auto___17359;
var G__17362 = cljs.core.count.call(null,c__7932__auto___17359);
var G__17363 = (0);
seq__17333_17347 = G__17360;
chunk__17334_17348 = G__17361;
count__17335_17349 = G__17362;
i__17336_17350 = G__17363;
continue;
} else {
var oldk_17364 = cljs.core.first.call(null,seq__17333_17358__$1);
if(typeof oldk_17364 === 'string'){
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([oldk_17364], true),newv))){
} else {
var kdom_17365 = tiltontec.tag.html.tag_dom.call(null,oldk_17364);
if(cljs.core.truth_(kdom_17365)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no kdom oldk"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("kdom")].join('')));
}

kdom_17365.parentNode.removeChild(kdom_17365);
}
}

var G__17366 = cljs.core.next.call(null,seq__17333_17358__$1);
var G__17367 = null;
var G__17368 = (0);
var G__17369 = (0);
seq__17333_17347 = G__17366;
chunk__17334_17348 = G__17367;
count__17335_17349 = G__17368;
i__17336_17350 = G__17369;
continue;
}
} else {
}
}
break;
}

var G__17340 = newv;
var vec__17341 = G__17340;
var seq__17342 = cljs.core.seq.call(null,vec__17341);
var first__17343 = cljs.core.first.call(null,seq__17342);
var seq__17342__$1 = cljs.core.next.call(null,seq__17342);
var newk = first__17343;
var newkr = seq__17342__$1;
var priork = null;
var G__17340__$1 = G__17340;
var priork__$1 = priork;
while(true){
var vec__17344 = G__17340__$1;
var seq__17345 = cljs.core.seq.call(null,vec__17344);
var first__17346 = cljs.core.first.call(null,seq__17345);
var seq__17345__$1 = cljs.core.next.call(null,seq__17345);
var newk__$1 = first__17346;
var newkr__$1 = seq__17345__$1;
var priork__$2 = priork__$1;
if(cljs.core.truth_(newk__$1)){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([newk__$1], true),oldv))){
} else {
var incubator_17370 = document.createElement("div");
incubator_17370.innerHTML = tiltontec.tag.html.to_html.call(null,newk__$1);

tiltontec.model.core.backdoor_reset_BANG_.call(null,newk__$1,new cljs.core.Keyword(null,"dom-cache","dom-cache",-2036866857),incubator_17370.firstChild);

tiltontec.tag.html.tag_dom.call(null,me).insertBefore(tiltontec.tag.html.tag_dom.call(null,newk__$1),(cljs.core.truth_(priork__$2)?tiltontec.tag.html.tag_dom.call(null,priork__$2).nextSibling:null));
}

var G__17371 = newkr__$1;
var G__17372 = newk__$1;
G__17340__$1 = G__17371;
priork__$1 = G__17372;
continue;
} else {
return null;
}
break;
}

}
}
}));
tiltontec.tag.html._PLUS_global_attr_PLUS_ = cljs.core.set.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null));
tiltontec.tag.html._PLUS_inline_css_PLUS_ = cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432)], null));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe_by_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.tag.html","tag","tiltontec.tag.html/tag",1337322312)], null),(function (slot,me,newv,oldv,_){
if(cljs.core.not_EQ_.call(null,oldv,tiltontec.cell.base.unbound)){
if(cljs.core._EQ_.call(null,slot,new cljs.core.Keyword(null,"content","content",15833224))){
return tiltontec.tag.html.tag_dom.call(null,me).innerHTML = newv;
} else {
if(cljs.core.truth_(tiltontec.tag.html._PLUS_global_attr_PLUS_.call(null,slot))){
var G__17373 = (((slot instanceof cljs.core.Keyword))?slot.fqn:null);
switch (G__17373) {
case "hidden":
return tiltontec.tag.html.tag_dom.call(null,me).hidden = newv;

break;
case "class":
return tiltontec.tag.html.tag_dom.call(null,me).className = newv;

break;
case "checked":
return tiltontec.tag.html.tag_dom.call(null,me).checked = newv;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join('')));

}
} else {
if(cljs.core.truth_(tiltontec.tag.html._PLUS_inline_css_PLUS_.call(null,slot))){
var G__17374 = (((slot instanceof cljs.core.Keyword))?slot.fqn:null);
switch (G__17374) {
case "display":
return tiltontec.tag.html.tag_dom.call(null,me).style.display = newv;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join('')));

}
} else {
return null;
}
}
}
} else {
return null;
}
}));
tiltontec.tag.html.io_upsert = (function tiltontec$tag$html$io_upsert(key,val){
return window.localStorage.setItem(key,val);
});
tiltontec.tag.html.io_read = (function tiltontec$tag$html$io_read(key){
var raw = window.localStorage.getItem(key);
return raw;
});
tiltontec.tag.html.io_delete = (function tiltontec$tag$html$io_delete(key,val){
return window.localStorage.removeItem(key);
});
tiltontec.tag.html.io_clear_storage = (function tiltontec$tag$html$io_clear_storage(){
return window.localStorage.clear();
});
tiltontec.tag.html.io_all_keys = (function tiltontec$tag$html$io_all_keys(){
return Object.keys(window.localStorage);
});
tiltontec.tag.html.io_find = (function tiltontec$tag$html$io_find(key_prefix){
var keys = tiltontec.tag.html.io_all_keys.call(null);
var found = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,keys)){
var G__17377 = cljs.core.rest.call(null,keys);
var G__17378 = ((clojure.string.starts_with_QMARK_.call(null,cljs.core.first.call(null,keys),key_prefix))?cljs.core.conj.call(null,found,cljs.core.first.call(null,keys)):found);
keys = G__17377;
found = G__17378;
continue;
} else {
return found;
}
break;
}
});
tiltontec.tag.html.io_truncate = (function tiltontec$tag$html$io_truncate(key_prefix){
return cljs.core.doall.call(null,cljs.core.map.call(null,tiltontec.tag.html.io_delete,tiltontec.tag.html.io_find.call(null,key_prefix)));
});

//# sourceMappingURL=html.js.map