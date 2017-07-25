// Compiled by ClojureScript 1.9.473 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__8422_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__8422_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__4657__auto__)){
var changed__$1 = temp__4657__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__8427 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__8428 = null;
var count__8429 = (0);
var i__8430 = (0);
while(true){
if((i__8430 < count__8429)){
var s = cljs.core._nth.call(null,chunk__8428,i__8430);
var temp__4657__auto___8431 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___8431)){
var sheet_8432 = temp__4657__auto___8431;
var temp__4657__auto___8433__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_8432.href,changed);
if(cljs.core.truth_(temp__4657__auto___8433__$1)){
var href_uri_8434 = temp__4657__auto___8433__$1;
sheet_8432.ownerNode.href = href_uri_8434.makeUnique().toString();
} else {
}
} else {
}

var G__8435 = seq__8427;
var G__8436 = chunk__8428;
var G__8437 = count__8429;
var G__8438 = (i__8430 + (1));
seq__8427 = G__8435;
chunk__8428 = G__8436;
count__8429 = G__8437;
i__8430 = G__8438;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8427);
if(temp__4657__auto__){
var seq__8427__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8427__$1)){
var c__7932__auto__ = cljs.core.chunk_first.call(null,seq__8427__$1);
var G__8439 = cljs.core.chunk_rest.call(null,seq__8427__$1);
var G__8440 = c__7932__auto__;
var G__8441 = cljs.core.count.call(null,c__7932__auto__);
var G__8442 = (0);
seq__8427 = G__8439;
chunk__8428 = G__8440;
count__8429 = G__8441;
i__8430 = G__8442;
continue;
} else {
var s = cljs.core.first.call(null,seq__8427__$1);
var temp__4657__auto___8443__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___8443__$1)){
var sheet_8444 = temp__4657__auto___8443__$1;
var temp__4657__auto___8445__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_8444.href,changed);
if(cljs.core.truth_(temp__4657__auto___8445__$2)){
var href_uri_8446 = temp__4657__auto___8445__$2;
sheet_8444.ownerNode.href = href_uri_8446.makeUnique().toString();
} else {
}
} else {
}

var G__8447 = cljs.core.next.call(null,seq__8427__$1);
var G__8448 = null;
var G__8449 = (0);
var G__8450 = (0);
seq__8427 = G__8447;
chunk__8428 = G__8448;
count__8429 = G__8449;
i__8430 = G__8450;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__8455 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__8456 = null;
var count__8457 = (0);
var i__8458 = (0);
while(true){
if((i__8458 < count__8457)){
var s = cljs.core._nth.call(null,chunk__8456,i__8458);
var temp__4657__auto___8459 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___8459)){
var image_8460 = temp__4657__auto___8459;
var temp__4657__auto___8461__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_8460.src,changed);
if(cljs.core.truth_(temp__4657__auto___8461__$1)){
var href_uri_8462 = temp__4657__auto___8461__$1;
image_8460.src = href_uri_8462.makeUnique().toString();
} else {
}
} else {
}

var G__8463 = seq__8455;
var G__8464 = chunk__8456;
var G__8465 = count__8457;
var G__8466 = (i__8458 + (1));
seq__8455 = G__8463;
chunk__8456 = G__8464;
count__8457 = G__8465;
i__8458 = G__8466;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8455);
if(temp__4657__auto__){
var seq__8455__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8455__$1)){
var c__7932__auto__ = cljs.core.chunk_first.call(null,seq__8455__$1);
var G__8467 = cljs.core.chunk_rest.call(null,seq__8455__$1);
var G__8468 = c__7932__auto__;
var G__8469 = cljs.core.count.call(null,c__7932__auto__);
var G__8470 = (0);
seq__8455 = G__8467;
chunk__8456 = G__8468;
count__8457 = G__8469;
i__8458 = G__8470;
continue;
} else {
var s = cljs.core.first.call(null,seq__8455__$1);
var temp__4657__auto___8471__$1 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___8471__$1)){
var image_8472 = temp__4657__auto___8471__$1;
var temp__4657__auto___8473__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_8472.src,changed);
if(cljs.core.truth_(temp__4657__auto___8473__$2)){
var href_uri_8474 = temp__4657__auto___8473__$2;
image_8472.src = href_uri_8474.makeUnique().toString();
} else {
}
} else {
}

var G__8475 = cljs.core.next.call(null,seq__8455__$1);
var G__8476 = null;
var G__8477 = (0);
var G__8478 = (0);
seq__8455 = G__8475;
chunk__8456 = G__8476;
count__8457 = G__8477;
i__8458 = G__8478;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__8481){
var map__8484 = p__8481;
var map__8484__$1 = ((((!((map__8484 == null)))?((((map__8484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8484.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8484):map__8484);
var on_jsload = cljs.core.get.call(null,map__8484__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__8484,map__8484__$1,on_jsload){
return (function (p1__8479_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__8479_SHARP_,".js");
});})(map__8484,map__8484__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__8484,map__8484__$1,on_jsload){
return (function (p1__8480_SHARP_){
return goog.Uri.parse(p1__8480_SHARP_).makeUnique();
});})(js_files,map__8484,map__8484__$1,on_jsload))
,js_files)),({"cleanupWhenDone": true})).addCallbacks(((function (js_files,map__8484,map__8484__$1,on_jsload){
return (function() { 
var G__8486__delegate = function (_){
return on_jsload.call(null);
};
var G__8486 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8487__i = 0, G__8487__a = new Array(arguments.length -  0);
while (G__8487__i < G__8487__a.length) {G__8487__a[G__8487__i] = arguments[G__8487__i + 0]; ++G__8487__i;}
  _ = new cljs.core.IndexedSeq(G__8487__a,0);
} 
return G__8486__delegate.call(this,_);};
G__8486.cljs$lang$maxFixedArity = 0;
G__8486.cljs$lang$applyTo = (function (arglist__8488){
var _ = cljs.core.seq(arglist__8488);
return G__8486__delegate(_);
});
G__8486.cljs$core$IFn$_invoke$arity$variadic = G__8486__delegate;
return G__8486;
})()
;})(js_files,map__8484,map__8484__$1,on_jsload))
,((function (js_files,map__8484,map__8484__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__8484,map__8484__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__8493_8497 = cljs.core.seq.call(null,things_to_log);
var chunk__8494_8498 = null;
var count__8495_8499 = (0);
var i__8496_8500 = (0);
while(true){
if((i__8496_8500 < count__8495_8499)){
var t_8501 = cljs.core._nth.call(null,chunk__8494_8498,i__8496_8500);
console.log(t_8501);

var G__8502 = seq__8493_8497;
var G__8503 = chunk__8494_8498;
var G__8504 = count__8495_8499;
var G__8505 = (i__8496_8500 + (1));
seq__8493_8497 = G__8502;
chunk__8494_8498 = G__8503;
count__8495_8499 = G__8504;
i__8496_8500 = G__8505;
continue;
} else {
var temp__4657__auto___8506 = cljs.core.seq.call(null,seq__8493_8497);
if(temp__4657__auto___8506){
var seq__8493_8507__$1 = temp__4657__auto___8506;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8493_8507__$1)){
var c__7932__auto___8508 = cljs.core.chunk_first.call(null,seq__8493_8507__$1);
var G__8509 = cljs.core.chunk_rest.call(null,seq__8493_8507__$1);
var G__8510 = c__7932__auto___8508;
var G__8511 = cljs.core.count.call(null,c__7932__auto___8508);
var G__8512 = (0);
seq__8493_8497 = G__8509;
chunk__8494_8498 = G__8510;
count__8495_8499 = G__8511;
i__8496_8500 = G__8512;
continue;
} else {
var t_8513 = cljs.core.first.call(null,seq__8493_8507__$1);
console.log(t_8513);

var G__8514 = cljs.core.next.call(null,seq__8493_8507__$1);
var G__8515 = null;
var G__8516 = (0);
var G__8517 = (0);
seq__8493_8497 = G__8514;
chunk__8494_8498 = G__8515;
count__8495_8499 = G__8516;
i__8496_8500 = G__8517;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__8518_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8518_SHARP_)].join('');
}),cljs.core.map.call(null,(function (p__8524){
var map__8525 = p__8524;
var map__8525__$1 = ((((!((map__8525 == null)))?((((map__8525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8525):map__8525);
var canonical_path = cljs.core.get.call(null,map__8525__$1,new cljs.core.Keyword(null,"canonical-path","canonical-path",-1891747854));
var web_path = cljs.core.get.call(null,map__8525__$1,new cljs.core.Keyword(null,"web-path","web-path",594590673));
if(cljs.core._EQ_.call(null,"file:",(function (){var G__8527 = window;
var G__8527__$1 = (((G__8527 == null))?null:G__8527.location);
if((G__8527__$1 == null)){
return null;
} else {
return G__8527__$1.protocol;
}
})())){
return canonical_path;
} else {
return web_path;
}
}),changed));
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__8528 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__8528);

adzerk.boot_reload.reload.reload_css.call(null,G__8528);

adzerk.boot_reload.reload.reload_img.call(null,G__8528);

return G__8528;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map