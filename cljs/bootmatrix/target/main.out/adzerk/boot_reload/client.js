// Compiled by ClojureScript 1.9.473 {}
goog.provide('adzerk.boot_reload.client');
goog.require('cljs.core');
goog.require('adzerk.boot_reload.websocket');
goog.require('adzerk.boot_reload.reload');
goog.require('adzerk.boot_reload.display');
goog.require('adzerk.boot_reload.connection');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.Uri');
adzerk.boot_reload.client.patch_goog_base_BANG_ = (function adzerk$boot_reload$client$patch_goog_base_BANG_(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = (function (file){
if(cljs.core.truth_(goog.inHtmlDocument_())){
return goog.net.jsloader.load(file);
} else {
return null;
}
});
});
adzerk.boot_reload.client.resolve_url = (function adzerk$boot_reload$client$resolve_url(url,ws_host){
var passed_uri = (new goog.Uri(url));
var protocol = passed_uri.getScheme();
var hostname = (function (){var G__8748 = window;
var G__8748__$1 = (((G__8748 == null))?null:G__8748.location);
if((G__8748__$1 == null)){
return null;
} else {
return G__8748__$1.hostname;
}
})();
var host = (cljs.core.truth_(ws_host)?ws_host:((cljs.core.seq.call(null,hostname))?hostname:(function (){
console.warn("Both :ws-host and window.location.hostname are empty, using localhost as default.","This might happen if you are accessing the files directly instead of over http.","You should probably set :ws-host manually.");

return "localhost";
})()

));
var port = passed_uri.getPort();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join('');
});
if(typeof adzerk.boot_reload.client.handle !== 'undefined'){
} else {
adzerk.boot_reload.client.handle = (function (){var method_table__8046__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8047__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8048__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8049__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8050__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"adzerk.boot-reload.client","handle"),((function (method_table__8046__auto__,prefer_table__8047__auto__,method_cache__8048__auto__,cached_hierarchy__8049__auto__,hierarchy__8050__auto__){
return (function (msg,opts){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(msg);
});})(method_table__8046__auto__,prefer_table__8047__auto__,method_cache__8048__auto__,cached_hierarchy__8049__auto__,hierarchy__8050__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8050__auto__,method_table__8046__auto__,prefer_table__8047__auto__,method_cache__8048__auto__,cached_hierarchy__8049__auto__));
})();
}
cljs.core._add_method.call(null,adzerk.boot_reload.client.handle,new cljs.core.Keyword(null,"reload","reload",863702807),(function (p__8749,opts){
var map__8750 = p__8749;
var map__8750__$1 = ((((!((map__8750 == null)))?((((map__8750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8750):map__8750);
var files = cljs.core.get.call(null,map__8750__$1,new cljs.core.Keyword(null,"files","files",-472457450));
return adzerk.boot_reload.reload.reload.call(null,files,opts);
}));
cljs.core._add_method.call(null,adzerk.boot_reload.client.handle,new cljs.core.Keyword(null,"visual","visual",942787224),(function (state,opts){
if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
return adzerk.boot_reload.display.display.call(null,state,opts);
} else {
return null;
}
}));
adzerk.boot_reload.client.connect = (function adzerk$boot_reload$client$connect(var_args){
var args8752 = [];
var len__8226__auto___8755 = arguments.length;
var i__8227__auto___8756 = (0);
while(true){
if((i__8227__auto___8756 < len__8226__auto___8755)){
args8752.push((arguments[i__8227__auto___8756]));

var G__8757 = (i__8227__auto___8756 + (1));
i__8227__auto___8756 = G__8757;
continue;
} else {
}
break;
}

var G__8754 = args8752.length;
switch (G__8754) {
case 1:
return adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8752.length)].join('')));

}
});

adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$1 = (function (url){
return adzerk.boot_reload.client.connect.call(null,url,null);
});

adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$2 = (function (url,opts){
if((cljs.core.not.call(null,adzerk.boot_reload.connection.alive_QMARK_.call(null))) && (!((goog.dependencies_ == null)))){
var conn = adzerk.boot_reload.websocket.websocket_connection.call(null);
adzerk.boot_reload.client.patch_goog_base_BANG_.call(null);

cljs.core.reset_BANG_.call(null,adzerk.boot_reload.connection.ws_conn,conn);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"opened","opened",-1451743091),((function (conn){
return (function (evt){
return console.info("Reload websocket connected.");
});})(conn))
);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"message","message",-406056002),((function (conn){
return (function (evt){
var msg = cljs.reader.read_string.call(null,evt.message);
return adzerk.boot_reload.client.handle.call(null,msg,opts);
});})(conn))
);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"closed","closed",-919675359),((function (conn){
return (function (evt){
cljs.core.reset_BANG_.call(null,adzerk.boot_reload.connection.ws_conn,null);

return console.info("Reload websocket connection closed.");
});})(conn))
);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"error","error",-978969032),((function (conn){
return (function (evt){
return console.error("Reload websocket error:",evt);
});})(conn))
);

return clojure.browser.net.connect.call(null,conn,adzerk.boot_reload.client.resolve_url.call(null,url,new cljs.core.Keyword(null,"ws-host","ws-host",587956291).cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return null;
}
});

adzerk.boot_reload.client.connect.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=client.js.map