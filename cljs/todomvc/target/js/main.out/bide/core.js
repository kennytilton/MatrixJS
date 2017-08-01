// Compiled by ClojureScript 1.9.473 {}
goog.provide('bide.core');
goog.require('cljs.core');
goog.require('bide.impl.router');
goog.require('bide.impl.helpers');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.history.Html5History');
goog.require('goog.history.EventType');

/**
 * @interface
 */
bide.core.IRouter = function(){};

bide.core._navigate = (function bide$core$_navigate(_,loc,params,query){
if((!((_ == null))) && (!((_.bide$core$IRouter$_navigate$arity$4 == null)))){
return _.bide$core$IRouter$_navigate$arity$4(_,loc,params,query);
} else {
var x__7781__auto__ = (((_ == null))?null:_);
var m__7782__auto__ = (bide.core._navigate[goog.typeOf(x__7781__auto__)]);
if(!((m__7782__auto__ == null))){
return m__7782__auto__.call(null,_,loc,params,query);
} else {
var m__7782__auto____$1 = (bide.core._navigate["_"]);
if(!((m__7782__auto____$1 == null))){
return m__7782__auto____$1.call(null,_,loc,params,query);
} else {
throw cljs.core.missing_protocol.call(null,"IRouter.-navigate",_);
}
}
}
});

bide.core._replace = (function bide$core$_replace(_,loc,params,query){
if((!((_ == null))) && (!((_.bide$core$IRouter$_replace$arity$4 == null)))){
return _.bide$core$IRouter$_replace$arity$4(_,loc,params,query);
} else {
var x__7781__auto__ = (((_ == null))?null:_);
var m__7782__auto__ = (bide.core._replace[goog.typeOf(x__7781__auto__)]);
if(!((m__7782__auto__ == null))){
return m__7782__auto__.call(null,_,loc,params,query);
} else {
var m__7782__auto____$1 = (bide.core._replace["_"]);
if(!((m__7782__auto____$1 == null))){
return m__7782__auto____$1.call(null,_,loc,params,query);
} else {
throw cljs.core.missing_protocol.call(null,"IRouter.-replace",_);
}
}
}
});


/**
 * Path parameters coercion protocol.
 * @interface
 */
bide.core.IPathRepr = function(){};

/**
 * Return a representation of object in path.
 */
bide.core._repr = (function bide$core$_repr(_){
if((!((_ == null))) && (!((_.bide$core$IPathRepr$_repr$arity$1 == null)))){
return _.bide$core$IPathRepr$_repr$arity$1(_);
} else {
var x__7781__auto__ = (((_ == null))?null:_);
var m__7782__auto__ = (bide.core._repr[goog.typeOf(x__7781__auto__)]);
if(!((m__7782__auto__ == null))){
return m__7782__auto__.call(null,_);
} else {
var m__7782__auto____$1 = (bide.core._repr["_"]);
if(!((m__7782__auto____$1 == null))){
return m__7782__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IPathRepr.-repr",_);
}
}
}
});

(bide.core.IPathRepr["null"] = true);

(bide.core._repr["null"] = (function (it){
return "";
}));

(bide.core.IPathRepr["object"] = true);

(bide.core._repr["object"] = (function (it){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(it)].join('');
}));

(bide.core.IPathRepr["number"] = true);

(bide.core._repr["number"] = (function (it){
return it;
}));

(bide.core.IPathRepr["string"] = true);

(bide.core._repr["string"] = (function (it){
return it;
}));

cljs.core.Keyword.prototype.bide$core$IPathRepr$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bide$core$IPathRepr$_repr$arity$1 = (function (it){
var it__$1 = this;
return cljs.core.name.call(null,it__$1);
});

cljs.core.PersistentVector.prototype.bide$core$IPathRepr$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bide$core$IPathRepr$_repr$arity$1 = (function (it){
var it__$1 = this;
return cljs.core.into_array.call(null,cljs.core.map.call(null,bide.core._repr,it__$1));
});
bide.core.props__GT_js = (function bide$core$props__GT_js(params){
if(cljs.core.truth_(params)){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
(m[cljs.core.key__GT_js.call(null,k)] = bide.core._repr.call(null,v));

return m;
}),{},params);
} else {
return null;
}
});
bide.core.js__GT_props = (function bide$core$js__GT_props(params){
if(cljs.core.truth_(params)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (acc,key){
var value = (params[key]);
if(cljs.core.truth_(bide.impl.helpers.isArray.call(null,value))){
return cljs.core.assoc_BANG_.call(null,acc,cljs.core.keyword.call(null,key),cljs.core.vec.call(null,value));
} else {
return cljs.core.assoc_BANG_.call(null,acc,cljs.core.keyword.call(null,key),value);
}
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),bide.impl.helpers.keys.call(null,params)));
} else {
return null;
}
});
/**
 * Check if the `v` is a Router instance.
 */
bide.core.router_QMARK_ = (function bide$core$router_QMARK_(v){
return bide.impl.router.isRouter.call(null,v);
});
/**
 * Construct an empty router.
 */
bide.core.empty = (function bide$core$empty(){
return bide.impl.router.empty.call(null);
});
/**
 * Insert a new entry to the router.
 */
bide.core.insert = (function bide$core$insert(router,path,name){
return bide.impl.router.insert.call(null,router,path,name);
});
/**
 * Try to match a path to a specific route in the router, returns `nil`
 *   if the no match is found.
 */
bide.core.match = (function bide$core$match(router,path){
var vec__14687 = cljs.core.vec.call(null,bide.impl.router.match.call(null,router,path));
var name = cljs.core.nth.call(null,vec__14687,(0),null);
var params = cljs.core.nth.call(null,vec__14687,(1),null);
var query = cljs.core.nth.call(null,vec__14687,(2),null);
if(cljs.core.truth_(name)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,bide.core.js__GT_props.call(null,params),bide.core.js__GT_props.call(null,query)], null);
} else {
return null;
}
});
/**
 * A helper for compile a vector of routes in a router instance.
 */
bide.core.router = (function bide$core$router(routes){
if(cljs.core.vector_QMARK_.call(null,routes)){
} else {
throw (new Error("Assert failed: (vector? routes)"));
}

return cljs.core.reduce.call(null,(function (router,p__14694){
var vec__14695 = p__14694;
var path = cljs.core.nth.call(null,vec__14695,(0),null);
var name = cljs.core.nth.call(null,vec__14695,(1),null);
return bide.impl.router.insert.call(null,router,path,name);
}),bide.impl.router.empty.call(null),routes);
});
/**
 * Perform a url resolve operation.
 */
bide.core.resolve = (function bide$core$resolve(var_args){
var args14698 = [];
var len__8226__auto___14701 = arguments.length;
var i__8227__auto___14702 = (0);
while(true){
if((i__8227__auto___14702 < len__8226__auto___14701)){
args14698.push((arguments[i__8227__auto___14702]));

var G__14703 = (i__8227__auto___14702 + (1));
i__8227__auto___14702 = G__14703;
continue;
} else {
}
break;
}

var G__14700 = args14698.length;
switch (G__14700) {
case 2:
return bide.core.resolve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bide.core.resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return bide.core.resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14698.length)].join('')));

}
});

bide.core.resolve.cljs$core$IFn$_invoke$arity$2 = (function (router,name){
return bide.core.resolve.call(null,router,name,null,null);
});

bide.core.resolve.cljs$core$IFn$_invoke$arity$3 = (function (router,name,params){
return bide.core.resolve.call(null,router,name,params,null);
});

bide.core.resolve.cljs$core$IFn$_invoke$arity$4 = (function (router,name,params,query){
if(bide.core.router_QMARK_.call(null,router)){
} else {
throw (new Error("Assert failed: (router? router)"));
}

var params__$1 = bide.core.props__GT_js.call(null,params);
var query__$1 = bide.core.props__GT_js.call(null,query);
return bide.impl.router.resolve.call(null,router,name,params__$1,query__$1);
});

bide.core.resolve.cljs$lang$maxFixedArity = 4;

/**
 * Starts the bide routing handling using the `goog.history.Html5History` API as
 *   browser history event watching mechanism.
 * 
 *   Accepts router and configuration map. Required configuration keys are
 *   `:on-navigate` and `:default`. `:on-navigate` is a function that would be
 *   called each time route is changed providing route id, params and query as
 *   arguments. `:default` used as default route id when URL doesn't match any
 *   route registered in router. Optional configuration keys are `:html5?` (`false`
 *   by default) and `:html5history` (new `goog.history.Html5History` instance by
 *   default). Passing anything that evaluates to logical false as value of
 *   `:html5?` would configure history to use fragment to store token. Pass factory
 *   function that returns instance of `goog.history.Html5History` to
 *   `:html5history` when you need to do some customizations to history instance
 *   used to manage history events.
 */
bide.core.start_BANG_ = (function bide$core$start_BANG_(router,p__14705){
var map__14723 = p__14705;
var map__14723__$1 = ((((!((map__14723 == null)))?((((map__14723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14723):map__14723);
var opts = map__14723__$1;
var on_navigate = cljs.core.get.call(null,map__14723__$1,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908));
var default$ = cljs.core.get.call(null,map__14723__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var html5_QMARK_ = cljs.core.get.call(null,map__14723__$1,new cljs.core.Keyword(null,"html5?","html5?",-1008298421),false);
var html5history = cljs.core.get.call(null,map__14723__$1,new cljs.core.Keyword(null,"html5history","html5history",-1921478143));
var default$__$1 = ((cljs.core.vector_QMARK_.call(null,default$))?default$:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,null], null));
var _on_navigate = ((function (default$__$1,map__14723,map__14723__$1,opts,on_navigate,default$,html5_QMARK_,html5history){
return (function bide$core$start_BANG__$__on_navigate(event){
var vec__14734 = _match.call(null,event.token);
var name = cljs.core.nth.call(null,vec__14734,(0),null);
var params = cljs.core.nth.call(null,vec__14734,(1),null);
var query = cljs.core.nth.call(null,vec__14734,(2),null);
return on_navigate.call(null,name,params,query);
});})(default$__$1,map__14723,map__14723__$1,opts,on_navigate,default$,html5_QMARK_,html5history))
;
var _match = ((function (default$__$1,map__14723,map__14723__$1,opts,on_navigate,default$,html5_QMARK_,html5history){
return (function bide$core$start_BANG__$__match(token){
var result = bide.core.match.call(null,router,token);
var or__7113__auto__ = result;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return default$__$1;
}
});})(default$__$1,map__14723,map__14723__$1,opts,on_navigate,default$,html5_QMARK_,html5history))
;
var _initial_token = ((function (default$__$1,map__14723,map__14723__$1,opts,on_navigate,default$,html5_QMARK_,html5history){
return (function bide$core$start_BANG__$__initial_token(history){
var token = history.getToken();
if(clojure.string.blank_QMARK_.call(null,token)){
var or__7113__auto__ = cljs.core.apply.call(null,bide.core.resolve,router,default$__$1);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return "/";
}
} else {
return token;
}
});})(default$__$1,map__14723,map__14723__$1,opts,on_navigate,default$,html5_QMARK_,html5history))
;
var html5history__$1 = ((cljs.core.fn_QMARK_.call(null,html5history))?html5history.call(null):(new goog.history.Html5History()));
var history = (cljs.core.truth_(html5_QMARK_)?(function (){var G__14737 = html5history__$1;
G__14737.setPathPrefix("");

G__14737.setUseFragment(false);

G__14737.setEnabled(true);

return G__14737;
})():(function (){var G__14738 = html5history__$1;
G__14738.setUseFragment(true);

G__14738.setEnabled(true);

return G__14738;
})());
var initial_token = _initial_token.call(null,history);
var initial_loc = _match.call(null,initial_token);
var lkey = goog.events.listen(history,goog.history.EventType.NAVIGATE,_on_navigate);
history.replaceToken(initial_token);

cljs.core.apply.call(null,on_navigate,initial_loc);

var x14739 = router;
x14739.close = ((function (x14739,html5history__$1,history,initial_token,initial_loc,lkey,default$__$1,map__14723,map__14723__$1,opts,on_navigate,default$,html5_QMARK_,html5history){
return (function (){
var _ = this;
goog.events.unlistenByKey(lkey);

return history.setEnabled(false);
});})(x14739,html5history__$1,history,initial_token,initial_loc,lkey,default$__$1,map__14723,map__14723__$1,opts,on_navigate,default$,html5_QMARK_,html5history))
;

x14739.bide$core$IRouter$ = cljs.core.PROTOCOL_SENTINEL;

x14739.bide$core$IRouter$_navigate$arity$4 = ((function (x14739,html5history__$1,history,initial_token,initial_loc,lkey,default$__$1,map__14723,map__14723__$1,opts,on_navigate,default$,html5_QMARK_,html5history){
return (function (_,id,params,query){
var ___$1 = this;
var temp__4657__auto__ = bide.core.resolve.call(null,router,id,params,query);
if(cljs.core.truth_(temp__4657__auto__)){
var path = temp__4657__auto__;
return history.setToken(path);
} else {
return null;
}
});})(x14739,html5history__$1,history,initial_token,initial_loc,lkey,default$__$1,map__14723,map__14723__$1,opts,on_navigate,default$,html5_QMARK_,html5history))
;

x14739.bide$core$IRouter$_replace$arity$4 = ((function (x14739,html5history__$1,history,initial_token,initial_loc,lkey,default$__$1,map__14723,map__14723__$1,opts,on_navigate,default$,html5_QMARK_,html5history){
return (function (_,id,params,query){
var ___$1 = this;
var temp__4657__auto__ = bide.core.resolve.call(null,router,id,params,query);
if(cljs.core.truth_(temp__4657__auto__)){
var path = temp__4657__auto__;
return history.replaceToken(path);
} else {
return null;
}
});})(x14739,html5history__$1,history,initial_token,initial_loc,lkey,default$__$1,map__14723,map__14723__$1,opts,on_navigate,default$,html5_QMARK_,html5history))
;

return x14739;
});
/**
 * Trigger a navigate event to a specific location.
 */
bide.core.navigate_BANG_ = (function bide$core$navigate_BANG_(var_args){
var args14740 = [];
var len__8226__auto___14743 = arguments.length;
var i__8227__auto___14744 = (0);
while(true){
if((i__8227__auto___14744 < len__8226__auto___14743)){
args14740.push((arguments[i__8227__auto___14744]));

var G__14745 = (i__8227__auto___14744 + (1));
i__8227__auto___14744 = G__14745;
continue;
} else {
}
break;
}

var G__14742 = args14740.length;
switch (G__14742) {
case 2:
return bide.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bide.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return bide.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14740.length)].join('')));

}
});

bide.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (router,id){
return bide.core.navigate_BANG_.call(null,router,id,null,null);
});

bide.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (router,id,params){
return bide.core.navigate_BANG_.call(null,router,id,params,null);
});

bide.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (router,id,params,query){
if(bide.core.router_QMARK_.call(null,router)){
} else {
throw (new Error("Assert failed: (router? router)"));
}

return bide.core._navigate.call(null,router,id,params,query);
});

bide.core.navigate_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Trigger a replace event to a specific location.
 */
bide.core.replace_BANG_ = (function bide$core$replace_BANG_(var_args){
var args14747 = [];
var len__8226__auto___14750 = arguments.length;
var i__8227__auto___14751 = (0);
while(true){
if((i__8227__auto___14751 < len__8226__auto___14750)){
args14747.push((arguments[i__8227__auto___14751]));

var G__14752 = (i__8227__auto___14751 + (1));
i__8227__auto___14751 = G__14752;
continue;
} else {
}
break;
}

var G__14749 = args14747.length;
switch (G__14749) {
case 2:
return bide.core.replace_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bide.core.replace_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return bide.core.replace_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14747.length)].join('')));

}
});

bide.core.replace_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (router,id){
return bide.core.replace_BANG_.call(null,router,id,null,null);
});

bide.core.replace_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (router,id,params){
return bide.core.replace_BANG_.call(null,router,id,params,null);
});

bide.core.replace_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (router,id,params,query){
if(bide.core.router_QMARK_.call(null,router)){
} else {
throw (new Error("Assert failed: (router? router)"));
}

return bide.core._replace.call(null,router,id,params,query);
});

bide.core.replace_BANG_.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=core.js.map