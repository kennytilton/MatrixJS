// Compiled by ClojureScript 1.9.473 {}
goog.provide('weasel.repl');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.browser.event');
goog.require('clojure.browser.net');
goog.require('clojure.browser.repl');
goog.require('cljs.reader');
goog.require('weasel.impls.websocket');
weasel.repl.ws_connection = cljs.core.atom.call(null,null);
weasel.repl.alive_QMARK_ = (function weasel$repl$alive_QMARK_(){

return !((cljs.core.deref.call(null,weasel.repl.ws_connection) == null));
});
if(typeof weasel.repl.process_message !== 'undefined'){
} else {
weasel.repl.process_message = (function (){var method_table__8046__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8047__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8048__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8049__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8050__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"weasel.repl","process-message"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8050__auto__,method_table__8046__auto__,prefer_table__8047__auto__,method_cache__8048__auto__,cached_hierarchy__8049__auto__));
})();
}
cljs.core._add_method.call(null,weasel.repl.process_message,new cljs.core.Keyword(null,"error","error",-978969032),(function (message){
return console.error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Websocket REPL error "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(message))].join(''));
}));
cljs.core._add_method.call(null,weasel.repl.process_message,new cljs.core.Keyword(null,"eval-js","eval-js",760905924),(function (message){
var code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(message);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"value","value",305978217),(function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(eval(code))].join('')], null);
}catch (e13349){if((e13349 instanceof Error)){
var e = e13349;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], null);
} else {
var e = e13349;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null);

}
}})()], null);
}));
weasel.repl.repl_print = (function weasel$repl$repl_print(var_args){
var args__8233__auto__ = [];
var len__8226__auto___13351 = arguments.length;
var i__8227__auto___13352 = (0);
while(true){
if((i__8227__auto___13352 < len__8226__auto___13351)){
args__8233__auto__.push((arguments[i__8227__auto___13352]));

var G__13353 = (i__8227__auto___13352 + (1));
i__8227__auto___13352 = G__13353;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return weasel.repl.repl_print.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});

weasel.repl.repl_print.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var temp__4655__auto__ = cljs.core.deref.call(null,weasel.repl.ws_connection);
if(cljs.core.truth_(temp__4655__auto__)){
var conn = temp__4655__auto__;
return clojure.browser.net.transmit.call(null,cljs.core.deref.call(null,weasel.repl.ws_connection),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"print","print",1299562414),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.apply.call(null,cljs.core.pr_str,args)], null));
} else {
return null;
}
});

weasel.repl.repl_print.cljs$lang$maxFixedArity = (0);

weasel.repl.repl_print.cljs$lang$applyTo = (function (seq13350){
return weasel.repl.repl_print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13350));
});

weasel.repl.console_print = (function weasel$repl$console_print(var_args){
var args__8233__auto__ = [];
var len__8226__auto___13355 = arguments.length;
var i__8227__auto___13356 = (0);
while(true){
if((i__8227__auto___13356 < len__8226__auto___13355)){
args__8233__auto__.push((arguments[i__8227__auto___13356]));

var G__13357 = (i__8227__auto___13356 + (1));
i__8227__auto___13356 = G__13357;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return weasel.repl.console_print.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});

weasel.repl.console_print.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});

weasel.repl.console_print.cljs$lang$maxFixedArity = (0);

weasel.repl.console_print.cljs$lang$applyTo = (function (seq13354){
return weasel.repl.console_print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13354));
});

weasel.repl.print_fns = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"repl","repl",-35398667),weasel.repl.repl_print,new cljs.core.Keyword(null,"console","console",1228072057),weasel.repl.console_print,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repl","repl",-35398667),null,new cljs.core.Keyword(null,"console","console",1228072057),null], null), null),(function() { 
var G__13358__delegate = function (args){
cljs.core.apply.call(null,weasel.repl.console_print,args);

return cljs.core.apply.call(null,weasel.repl.repl_print,args);
};
var G__13358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13359__i = 0, G__13359__a = new Array(arguments.length -  0);
while (G__13359__i < G__13359__a.length) {G__13359__a[G__13359__i] = arguments[G__13359__i + 0]; ++G__13359__i;}
  args = new cljs.core.IndexedSeq(G__13359__a,0);
} 
return G__13358__delegate.call(this,args);};
G__13358.cljs$lang$maxFixedArity = 0;
G__13358.cljs$lang$applyTo = (function (arglist__13360){
var args = cljs.core.seq(arglist__13360);
return G__13358__delegate(args);
});
G__13358.cljs$core$IFn$_invoke$arity$variadic = G__13358__delegate;
return G__13358;
})()
]);
weasel.repl.connect = (function weasel$repl$connect(var_args){
var args__8233__auto__ = [];
var len__8226__auto___13368 = arguments.length;
var i__8227__auto___13369 = (0);
while(true){
if((i__8227__auto___13369 < len__8226__auto___13368)){
args__8233__auto__.push((arguments[i__8227__auto___13369]));

var G__13370 = (i__8227__auto___13369 + (1));
i__8227__auto___13369 = G__13370;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((1) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((1)),(0),null)):null);
return weasel.repl.connect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8234__auto__);
});

weasel.repl.connect.cljs$core$IFn$_invoke$arity$variadic = (function (repl_server_url,p__13363){
var map__13364 = p__13363;
var map__13364__$1 = ((((!((map__13364 == null)))?((((map__13364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13364):map__13364);
var verbose = cljs.core.get.call(null,map__13364__$1,new cljs.core.Keyword(null,"verbose","verbose",1694226060),true);
var on_open = cljs.core.get.call(null,map__13364__$1,new cljs.core.Keyword(null,"on-open","on-open",-1391088163));
var on_error = cljs.core.get.call(null,map__13364__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_close = cljs.core.get.call(null,map__13364__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var print = cljs.core.get.call(null,map__13364__$1,new cljs.core.Keyword(null,"print","print",1299562414),new cljs.core.Keyword(null,"repl","repl",-35398667));
var repl_connection = weasel.impls.websocket.websocket_connection.call(null);
cljs.core.swap_BANG_.call(null,weasel.repl.ws_connection,cljs.core.constantly.call(null,repl_connection));

clojure.browser.event.listen.call(null,repl_connection,new cljs.core.Keyword(null,"opened","opened",-1451743091),((function (repl_connection,map__13364,map__13364__$1,verbose,on_open,on_error,on_close,print){
return (function (evt){
cljs.core.set_print_fn_BANG_.call(null,((cljs.core.fn_QMARK_.call(null,print))?print:cljs.core.get.call(null,weasel.repl.print_fns,print)));

clojure.browser.net.transmit.call(null,repl_connection,cljs.core.pr_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"ready","ready",1086465795)], null)));

if(cljs.core.truth_(verbose)){
console.info("Opened Websocket REPL connection");
} else {
}

if(cljs.core.fn_QMARK_.call(null,on_open)){
return on_open.call(null);
} else {
return null;
}
});})(repl_connection,map__13364,map__13364__$1,verbose,on_open,on_error,on_close,print))
);

clojure.browser.event.listen.call(null,repl_connection,new cljs.core.Keyword(null,"message","message",-406056002),((function (repl_connection,map__13364,map__13364__$1,verbose,on_open,on_error,on_close,print){
return (function (evt){
var map__13366 = cljs.reader.read_string.call(null,evt.message);
var map__13366__$1 = ((((!((map__13366 == null)))?((((map__13366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13366):map__13366);
var message = map__13366__$1;
var op = cljs.core.get.call(null,map__13366__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var response = cljs.core.pr_str.call(null,weasel.repl.process_message.call(null,message));
return clojure.browser.net.transmit.call(null,repl_connection,response);
});})(repl_connection,map__13364,map__13364__$1,verbose,on_open,on_error,on_close,print))
);

clojure.browser.event.listen.call(null,repl_connection,new cljs.core.Keyword(null,"closed","closed",-919675359),((function (repl_connection,map__13364,map__13364__$1,verbose,on_open,on_error,on_close,print){
return (function (evt){
cljs.core.reset_BANG_.call(null,weasel.repl.ws_connection,null);

if(cljs.core.truth_(verbose)){
console.info("Closed Websocket REPL connection");
} else {
}

if(cljs.core.fn_QMARK_.call(null,on_close)){
return on_close.call(null);
} else {
return null;
}
});})(repl_connection,map__13364,map__13364__$1,verbose,on_open,on_error,on_close,print))
);

clojure.browser.event.listen.call(null,repl_connection,new cljs.core.Keyword(null,"error","error",-978969032),((function (repl_connection,map__13364,map__13364__$1,verbose,on_open,on_error,on_close,print){
return (function (evt){
if(cljs.core.truth_(verbose)){
console.error("WebSocket error",evt);
} else {
}

if(cljs.core.fn_QMARK_.call(null,on_error)){
return on_error.call(null,evt);
} else {
return null;
}
});})(repl_connection,map__13364,map__13364__$1,verbose,on_open,on_error,on_close,print))
);

clojure.browser.repl.bootstrap.call(null);

return clojure.browser.net.connect.call(null,repl_connection,repl_server_url);
});

weasel.repl.connect.cljs$lang$maxFixedArity = (1);

weasel.repl.connect.cljs$lang$applyTo = (function (seq13361){
var G__13362 = cljs.core.first.call(null,seq13361);
var seq13361__$1 = cljs.core.next.call(null,seq13361);
return weasel.repl.connect.cljs$core$IFn$_invoke$arity$variadic(G__13362,seq13361__$1);
});


//# sourceMappingURL=repl.js.map