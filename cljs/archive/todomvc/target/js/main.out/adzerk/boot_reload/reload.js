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
return (function (p1__8729_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__8729_SHARP_),path);
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
var seq__8734 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__8735 = null;
var count__8736 = (0);
var i__8737 = (0);
while(true){
if((i__8737 < count__8736)){
var s = cljs.core._nth.call(null,chunk__8735,i__8737);
var temp__4657__auto___8738 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___8738)){
var sheet_8739 = temp__4657__auto___8738;
var temp__4657__auto___8740__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_8739.href,changed);
if(cljs.core.truth_(temp__4657__auto___8740__$1)){
var href_uri_8741 = temp__4657__auto___8740__$1;
sheet_8739.ownerNode.href = href_uri_8741.makeUnique().toString();
} else {
}
} else {
}

var G__8742 = seq__8734;
var G__8743 = chunk__8735;
var G__8744 = count__8736;
var G__8745 = (i__8737 + (1));
seq__8734 = G__8742;
chunk__8735 = G__8743;
count__8736 = G__8744;
i__8737 = G__8745;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8734);
if(temp__4657__auto__){
var seq__8734__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8734__$1)){
var c__7932__auto__ = cljs.core.chunk_first.call(null,seq__8734__$1);
var G__8746 = cljs.core.chunk_rest.call(null,seq__8734__$1);
var G__8747 = c__7932__auto__;
var G__8748 = cljs.core.count.call(null,c__7932__auto__);
var G__8749 = (0);
seq__8734 = G__8746;
chunk__8735 = G__8747;
count__8736 = G__8748;
i__8737 = G__8749;
continue;
} else {
var s = cljs.core.first.call(null,seq__8734__$1);
var temp__4657__auto___8750__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___8750__$1)){
var sheet_8751 = temp__4657__auto___8750__$1;
var temp__4657__auto___8752__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_8751.href,changed);
if(cljs.core.truth_(temp__4657__auto___8752__$2)){
var href_uri_8753 = temp__4657__auto___8752__$2;
sheet_8751.ownerNode.href = href_uri_8753.makeUnique().toString();
} else {
}
} else {
}

var G__8754 = cljs.core.next.call(null,seq__8734__$1);
var G__8755 = null;
var G__8756 = (0);
var G__8757 = (0);
seq__8734 = G__8754;
chunk__8735 = G__8755;
count__8736 = G__8756;
i__8737 = G__8757;
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
var seq__8762 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__8763 = null;
var count__8764 = (0);
var i__8765 = (0);
while(true){
if((i__8765 < count__8764)){
var s = cljs.core._nth.call(null,chunk__8763,i__8765);
var temp__4657__auto___8766 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___8766)){
var image_8767 = temp__4657__auto___8766;
var temp__4657__auto___8768__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_8767.src,changed);
if(cljs.core.truth_(temp__4657__auto___8768__$1)){
var href_uri_8769 = temp__4657__auto___8768__$1;
image_8767.src = href_uri_8769.makeUnique().toString();
} else {
}
} else {
}

var G__8770 = seq__8762;
var G__8771 = chunk__8763;
var G__8772 = count__8764;
var G__8773 = (i__8765 + (1));
seq__8762 = G__8770;
chunk__8763 = G__8771;
count__8764 = G__8772;
i__8765 = G__8773;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8762);
if(temp__4657__auto__){
var seq__8762__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8762__$1)){
var c__7932__auto__ = cljs.core.chunk_first.call(null,seq__8762__$1);
var G__8774 = cljs.core.chunk_rest.call(null,seq__8762__$1);
var G__8775 = c__7932__auto__;
var G__8776 = cljs.core.count.call(null,c__7932__auto__);
var G__8777 = (0);
seq__8762 = G__8774;
chunk__8763 = G__8775;
count__8764 = G__8776;
i__8765 = G__8777;
continue;
} else {
var s = cljs.core.first.call(null,seq__8762__$1);
var temp__4657__auto___8778__$1 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___8778__$1)){
var image_8779 = temp__4657__auto___8778__$1;
var temp__4657__auto___8780__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_8779.src,changed);
if(cljs.core.truth_(temp__4657__auto___8780__$2)){
var href_uri_8781 = temp__4657__auto___8780__$2;
image_8779.src = href_uri_8781.makeUnique().toString();
} else {
}
} else {
}

var G__8782 = cljs.core.next.call(null,seq__8762__$1);
var G__8783 = null;
var G__8784 = (0);
var G__8785 = (0);
seq__8762 = G__8782;
chunk__8763 = G__8783;
count__8764 = G__8784;
i__8765 = G__8785;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__8788){
var map__8791 = p__8788;
var map__8791__$1 = ((((!((map__8791 == null)))?((((map__8791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8791):map__8791);
var on_jsload = cljs.core.get.call(null,map__8791__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__8791,map__8791__$1,on_jsload){
return (function (p1__8786_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__8786_SHARP_,".js");
});})(map__8791,map__8791__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__8791,map__8791__$1,on_jsload){
return (function (p1__8787_SHARP_){
return goog.Uri.parse(p1__8787_SHARP_).makeUnique();
});})(js_files,map__8791,map__8791__$1,on_jsload))
,js_files)),({"cleanupWhenDone": true})).addCallbacks(((function (js_files,map__8791,map__8791__$1,on_jsload){
return (function() { 
var G__8793__delegate = function (_){
return on_jsload.call(null);
};
var G__8793 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8794__i = 0, G__8794__a = new Array(arguments.length -  0);
while (G__8794__i < G__8794__a.length) {G__8794__a[G__8794__i] = arguments[G__8794__i + 0]; ++G__8794__i;}
  _ = new cljs.core.IndexedSeq(G__8794__a,0);
} 
return G__8793__delegate.call(this,_);};
G__8793.cljs$lang$maxFixedArity = 0;
G__8793.cljs$lang$applyTo = (function (arglist__8795){
var _ = cljs.core.seq(arglist__8795);
return G__8793__delegate(_);
});
G__8793.cljs$core$IFn$_invoke$arity$variadic = G__8793__delegate;
return G__8793;
})()
;})(js_files,map__8791,map__8791__$1,on_jsload))
,((function (js_files,map__8791,map__8791__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__8791,map__8791__$1,on_jsload))
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

var seq__8800_8804 = cljs.core.seq.call(null,things_to_log);
var chunk__8801_8805 = null;
var count__8802_8806 = (0);
var i__8803_8807 = (0);
while(true){
if((i__8803_8807 < count__8802_8806)){
var t_8808 = cljs.core._nth.call(null,chunk__8801_8805,i__8803_8807);
console.log(t_8808);

var G__8809 = seq__8800_8804;
var G__8810 = chunk__8801_8805;
var G__8811 = count__8802_8806;
var G__8812 = (i__8803_8807 + (1));
seq__8800_8804 = G__8809;
chunk__8801_8805 = G__8810;
count__8802_8806 = G__8811;
i__8803_8807 = G__8812;
continue;
} else {
var temp__4657__auto___8813 = cljs.core.seq.call(null,seq__8800_8804);
if(temp__4657__auto___8813){
var seq__8800_8814__$1 = temp__4657__auto___8813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8800_8814__$1)){
var c__7932__auto___8815 = cljs.core.chunk_first.call(null,seq__8800_8814__$1);
var G__8816 = cljs.core.chunk_rest.call(null,seq__8800_8814__$1);
var G__8817 = c__7932__auto___8815;
var G__8818 = cljs.core.count.call(null,c__7932__auto___8815);
var G__8819 = (0);
seq__8800_8804 = G__8816;
chunk__8801_8805 = G__8817;
count__8802_8806 = G__8818;
i__8803_8807 = G__8819;
continue;
} else {
var t_8820 = cljs.core.first.call(null,seq__8800_8814__$1);
console.log(t_8820);

var G__8821 = cljs.core.next.call(null,seq__8800_8814__$1);
var G__8822 = null;
var G__8823 = (0);
var G__8824 = (0);
seq__8800_8804 = G__8821;
chunk__8801_8805 = G__8822;
count__8802_8806 = G__8823;
i__8803_8807 = G__8824;
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
var changed_STAR_ = cljs.core.map.call(null,(function (p1__8825_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8825_SHARP_)].join('');
}),cljs.core.map.call(null,(function (p__8831){
var map__8832 = p__8831;
var map__8832__$1 = ((((!((map__8832 == null)))?((((map__8832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8832):map__8832);
var canonical_path = cljs.core.get.call(null,map__8832__$1,new cljs.core.Keyword(null,"canonical-path","canonical-path",-1891747854));
var web_path = cljs.core.get.call(null,map__8832__$1,new cljs.core.Keyword(null,"web-path","web-path",594590673));
if(cljs.core._EQ_.call(null,"file:",(function (){var G__8834 = window;
var G__8834__$1 = (((G__8834 == null))?null:G__8834.location);
if((G__8834__$1 == null)){
return null;
} else {
return G__8834__$1.protocol;
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
var G__8835 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__8835);

adzerk.boot_reload.reload.reload_css.call(null,G__8835);

adzerk.boot_reload.reload.reload_img.call(null,G__8835);

return G__8835;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map