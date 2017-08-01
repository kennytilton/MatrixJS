// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__7724__auto__,writer__7725__auto__,opt__7726__auto__){
return cljs.core._write.call(null,writer__7725__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11064 = arguments.length;
var i__8227__auto___11065 = (0);
while(true){
if((i__8227__auto___11065 < len__8226__auto___11064)){
args__8233__auto__.push((arguments[i__8227__auto___11065]));

var G__11066 = (i__8227__auto___11065 + (1));
i__8227__auto___11065 = G__11066;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq11063){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11063));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11068 = arguments.length;
var i__8227__auto___11069 = (0);
while(true){
if((i__8227__auto___11069 < len__8226__auto___11068)){
args__8233__auto__.push((arguments[i__8227__auto___11069]));

var G__11070 = (i__8227__auto___11069 + (1));
i__8227__auto___11069 = G__11070;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq11067){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11067));
});

var g_QMARK__11071 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_11072 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__11071){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__11071))
,null));
var mkg_11073 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__11071,g_11072){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__11071,g_11072))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__11071,g_11072,mkg_11073){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__11071).call(null,x);
});})(g_QMARK__11071,g_11072,mkg_11073))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__11071,g_11072,mkg_11073){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_11073).call(null,gfn);
});})(g_QMARK__11071,g_11072,mkg_11073))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__11071,g_11072,mkg_11073){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_11072).call(null,generator);
});})(g_QMARK__11071,g_11072,mkg_11073))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__11035__auto___11093 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__11035__auto___11093){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11094 = arguments.length;
var i__8227__auto___11095 = (0);
while(true){
if((i__8227__auto___11095 < len__8226__auto___11094)){
args__8233__auto__.push((arguments[i__8227__auto___11095]));

var G__11096 = (i__8227__auto___11095 + (1));
i__8227__auto___11095 = G__11096;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11035__auto___11093))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11035__auto___11093){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11035__auto___11093),args);
});})(g__11035__auto___11093))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__11035__auto___11093){
return (function (seq11074){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11074));
});})(g__11035__auto___11093))
;


var g__11035__auto___11097 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__11035__auto___11097){
return (function cljs$spec$impl$gen$list(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11098 = arguments.length;
var i__8227__auto___11099 = (0);
while(true){
if((i__8227__auto___11099 < len__8226__auto___11098)){
args__8233__auto__.push((arguments[i__8227__auto___11099]));

var G__11100 = (i__8227__auto___11099 + (1));
i__8227__auto___11099 = G__11100;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11035__auto___11097))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11035__auto___11097){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11035__auto___11097),args);
});})(g__11035__auto___11097))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__11035__auto___11097){
return (function (seq11075){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11075));
});})(g__11035__auto___11097))
;


var g__11035__auto___11101 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__11035__auto___11101){
return (function cljs$spec$impl$gen$map(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11102 = arguments.length;
var i__8227__auto___11103 = (0);
while(true){
if((i__8227__auto___11103 < len__8226__auto___11102)){
args__8233__auto__.push((arguments[i__8227__auto___11103]));

var G__11104 = (i__8227__auto___11103 + (1));
i__8227__auto___11103 = G__11104;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11035__auto___11101))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11035__auto___11101){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11035__auto___11101),args);
});})(g__11035__auto___11101))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__11035__auto___11101){
return (function (seq11076){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11076));
});})(g__11035__auto___11101))
;


var g__11035__auto___11105 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__11035__auto___11105){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11106 = arguments.length;
var i__8227__auto___11107 = (0);
while(true){
if((i__8227__auto___11107 < len__8226__auto___11106)){
args__8233__auto__.push((arguments[i__8227__auto___11107]));

var G__11108 = (i__8227__auto___11107 + (1));
i__8227__auto___11107 = G__11108;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11035__auto___11105))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11035__auto___11105){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11035__auto___11105),args);
});})(g__11035__auto___11105))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__11035__auto___11105){
return (function (seq11077){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11077));
});})(g__11035__auto___11105))
;


var g__11035__auto___11109 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__11035__auto___11109){
return (function cljs$spec$impl$gen$set(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11110 = arguments.length;
var i__8227__auto___11111 = (0);
while(true){
if((i__8227__auto___11111 < len__8226__auto___11110)){
args__8233__auto__.push((arguments[i__8227__auto___11111]));

var G__11112 = (i__8227__auto___11111 + (1));
i__8227__auto___11111 = G__11112;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11035__auto___11109))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11035__auto___11109){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11035__auto___11109),args);
});})(g__11035__auto___11109))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__11035__auto___11109){
return (function (seq11078){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11078));
});})(g__11035__auto___11109))
;


var g__11035__auto___11113 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__11035__auto___11113){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11114 = arguments.length;
var i__8227__auto___11115 = (0);
while(true){
if((i__8227__auto___11115 < len__8226__auto___11114)){
args__8233__auto__.push((arguments[i__8227__auto___11115]));

var G__11116 = (i__8227__auto___11115 + (1));
i__8227__auto___11115 = G__11116;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11035__auto___11113))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11035__auto___11113){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11035__auto___11113),args);
});})(g__11035__auto___11113))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__11035__auto___11113){
return (function (seq11079){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11079));
});})(g__11035__auto___11113))
;


var g__11035__auto___11117 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__11035__auto___11117){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11118 = arguments.length;
var i__8227__auto___11119 = (0);
while(true){
if((i__8227__auto___11119 < len__8226__auto___11118)){
args__8233__auto__.push((arguments[i__8227__auto___11119]));

var G__11120 = (i__8227__auto___11119 + (1));
i__8227__auto___11119 = G__11120;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11035__auto___11117))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11035__auto___11117){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11035__auto___11117),args);
});})(g__11035__auto___11117))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__11035__auto___11117){
return (function (seq11080){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11080));
});})(g__11035__auto___11117))
;


var g__11035__auto___11121 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__11035__auto___11121){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11122 = arguments.length;
var i__8227__auto___11123 = (0);
while(true){
if((i__8227__auto___11123 < len__8226__auto___11122)){
args__8233__auto__.push((arguments[i__8227__auto___11123]));

var G__11124 = (i__8227__auto___11123 + (1));
i__8227__auto___11123 = G__11124;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11035__auto___11121))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11035__auto___11121){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11035__auto___11121),args);
});})(g__11035__auto___11121))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__11035__auto___11121){
return (function (seq11081){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11081));
});})(g__11035__auto___11121))
;


var g__11035__auto___11125 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__11035__auto___11125){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11126 = arguments.length;
var i__8227__auto___11127 = (0);
while(true){
if((i__8227__auto___11127 < len__8226__auto___11126)){
args__8233__auto__.push((arguments[i__8227__auto___11127]));

var G__11128 = (i__8227__auto___11127 + (1));
i__8227__auto___11127 = G__11128;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11035__auto___11125))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11035__auto___11125){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11035__auto___11125),args);
});})(g__11035__auto___11125))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__11035__auto___11125){
return (function (seq11082){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11082));
});})(g__11035__auto___11125))
;


var g__11035__auto___11129 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__11035__auto___11129){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11130 = arguments.length;
var i__8227__auto___11131 = (0);
while(true){
if((i__8227__auto___11131 < len__8226__auto___11130)){
args__8233__auto__.push((arguments[i__8227__auto___11131]));

var G__11132 = (i__8227__auto___11131 + (1));
i__8227__auto___11131 = G__11132;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11035__auto___11129))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11035__auto___11129){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11035__auto___11129),args);
});})(g__11035__auto___11129))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__11035__auto___11129){
return (function (seq11083){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11083));
});})(g__11035__auto___11129))
;


var g__11035__auto___11133 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__11035__auto___11133){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11134 = arguments.length;
var i__8227__auto___11135 = (0);
while(true){
if((i__8227__auto___11135 < len__8226__auto___11134)){
args__8233__auto__.push((arguments[i__8227__auto___11135]));

var G__11136 = (i__8227__auto___11135 + (1));
i__8227__auto___11135 = G__11136;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11035__auto___11133))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11035__auto___11133){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11035__auto___11133),args);
});})(g__11035__auto___11133))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__11035__auto___11133){
return (function (seq11084){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11084));
});})(g__11035__auto___11133))
;


var g__11035__auto___11137 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__11035__auto___11137){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11138 = arguments.length;
var i__8227__auto___11139 = (0);
while(true){
if((i__8227__auto___11139 < len__8226__auto___11138)){
args__8233__auto__.push((arguments[i__8227__auto___11139]));

var G__11140 = (i__8227__auto___11139 + (1));
i__8227__auto___11139 = G__11140;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11035__auto___11137))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11035__auto___11137){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11035__auto___11137),args);
});})(g__11035__auto___11137))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__11035__auto___11137){
return (function (seq11085){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11085));
});})(g__11035__auto___11137))
;


var g__11035__auto___11141 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__11035__auto___11141){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11142 = arguments.length;
var i__8227__auto___11143 = (0);
while(true){
if((i__8227__auto___11143 < len__8226__auto___11142)){
args__8233__auto__.push((arguments[i__8227__auto___11143]));

var G__11144 = (i__8227__auto___11143 + (1));
i__8227__auto___11143 = G__11144;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11035__auto___11141))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11035__auto___11141){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11035__auto___11141),args);
});})(g__11035__auto___11141))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__11035__auto___11141){
return (function (seq11086){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11086));
});})(g__11035__auto___11141))
;


var g__11035__auto___11145 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__11035__auto___11145){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11146 = arguments.length;
var i__8227__auto___11147 = (0);
while(true){
if((i__8227__auto___11147 < len__8226__auto___11146)){
args__8233__auto__.push((arguments[i__8227__auto___11147]));

var G__11148 = (i__8227__auto___11147 + (1));
i__8227__auto___11147 = G__11148;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11035__auto___11145))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11035__auto___11145){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11035__auto___11145),args);
});})(g__11035__auto___11145))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__11035__auto___11145){
return (function (seq11087){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11087));
});})(g__11035__auto___11145))
;


var g__11035__auto___11149 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__11035__auto___11149){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11150 = arguments.length;
var i__8227__auto___11151 = (0);
while(true){
if((i__8227__auto___11151 < len__8226__auto___11150)){
args__8233__auto__.push((arguments[i__8227__auto___11151]));

var G__11152 = (i__8227__auto___11151 + (1));
i__8227__auto___11151 = G__11152;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11035__auto___11149))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11035__auto___11149){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11035__auto___11149),args);
});})(g__11035__auto___11149))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__11035__auto___11149){
return (function (seq11088){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11088));
});})(g__11035__auto___11149))
;


var g__11035__auto___11153 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__11035__auto___11153){
return (function cljs$spec$impl$gen$return(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11154 = arguments.length;
var i__8227__auto___11155 = (0);
while(true){
if((i__8227__auto___11155 < len__8226__auto___11154)){
args__8233__auto__.push((arguments[i__8227__auto___11155]));

var G__11156 = (i__8227__auto___11155 + (1));
i__8227__auto___11155 = G__11156;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11035__auto___11153))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11035__auto___11153){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11035__auto___11153),args);
});})(g__11035__auto___11153))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__11035__auto___11153){
return (function (seq11089){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11089));
});})(g__11035__auto___11153))
;


var g__11035__auto___11157 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__11035__auto___11157){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11158 = arguments.length;
var i__8227__auto___11159 = (0);
while(true){
if((i__8227__auto___11159 < len__8226__auto___11158)){
args__8233__auto__.push((arguments[i__8227__auto___11159]));

var G__11160 = (i__8227__auto___11159 + (1));
i__8227__auto___11159 = G__11160;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11035__auto___11157))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11035__auto___11157){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11035__auto___11157),args);
});})(g__11035__auto___11157))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__11035__auto___11157){
return (function (seq11090){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11090));
});})(g__11035__auto___11157))
;


var g__11035__auto___11161 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__11035__auto___11161){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11162 = arguments.length;
var i__8227__auto___11163 = (0);
while(true){
if((i__8227__auto___11163 < len__8226__auto___11162)){
args__8233__auto__.push((arguments[i__8227__auto___11163]));

var G__11164 = (i__8227__auto___11163 + (1));
i__8227__auto___11163 = G__11164;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11035__auto___11161))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11035__auto___11161){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11035__auto___11161),args);
});})(g__11035__auto___11161))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__11035__auto___11161){
return (function (seq11091){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11091));
});})(g__11035__auto___11161))
;


var g__11035__auto___11165 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__11035__auto___11165){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11166 = arguments.length;
var i__8227__auto___11167 = (0);
while(true){
if((i__8227__auto___11167 < len__8226__auto___11166)){
args__8233__auto__.push((arguments[i__8227__auto___11167]));

var G__11168 = (i__8227__auto___11167 + (1));
i__8227__auto___11167 = G__11168;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11035__auto___11165))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11035__auto___11165){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11035__auto___11165),args);
});})(g__11035__auto___11165))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__11035__auto___11165){
return (function (seq11092){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11092));
});})(g__11035__auto___11165))
;

var g__11048__auto___11190 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__11048__auto___11190){
return (function cljs$spec$impl$gen$any(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11191 = arguments.length;
var i__8227__auto___11192 = (0);
while(true){
if((i__8227__auto___11192 < len__8226__auto___11191)){
args__8233__auto__.push((arguments[i__8227__auto___11192]));

var G__11193 = (i__8227__auto___11192 + (1));
i__8227__auto___11192 = G__11193;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11048__auto___11190))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11048__auto___11190){
return (function (args){
return cljs.core.deref.call(null,g__11048__auto___11190);
});})(g__11048__auto___11190))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__11048__auto___11190){
return (function (seq11169){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11169));
});})(g__11048__auto___11190))
;


var g__11048__auto___11194 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__11048__auto___11194){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11195 = arguments.length;
var i__8227__auto___11196 = (0);
while(true){
if((i__8227__auto___11196 < len__8226__auto___11195)){
args__8233__auto__.push((arguments[i__8227__auto___11196]));

var G__11197 = (i__8227__auto___11196 + (1));
i__8227__auto___11196 = G__11197;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11048__auto___11194))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11048__auto___11194){
return (function (args){
return cljs.core.deref.call(null,g__11048__auto___11194);
});})(g__11048__auto___11194))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__11048__auto___11194){
return (function (seq11170){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11170));
});})(g__11048__auto___11194))
;


var g__11048__auto___11198 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__11048__auto___11198){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11199 = arguments.length;
var i__8227__auto___11200 = (0);
while(true){
if((i__8227__auto___11200 < len__8226__auto___11199)){
args__8233__auto__.push((arguments[i__8227__auto___11200]));

var G__11201 = (i__8227__auto___11200 + (1));
i__8227__auto___11200 = G__11201;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11048__auto___11198))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11048__auto___11198){
return (function (args){
return cljs.core.deref.call(null,g__11048__auto___11198);
});})(g__11048__auto___11198))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__11048__auto___11198){
return (function (seq11171){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11171));
});})(g__11048__auto___11198))
;


var g__11048__auto___11202 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__11048__auto___11202){
return (function cljs$spec$impl$gen$char(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11203 = arguments.length;
var i__8227__auto___11204 = (0);
while(true){
if((i__8227__auto___11204 < len__8226__auto___11203)){
args__8233__auto__.push((arguments[i__8227__auto___11204]));

var G__11205 = (i__8227__auto___11204 + (1));
i__8227__auto___11204 = G__11205;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11048__auto___11202))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11048__auto___11202){
return (function (args){
return cljs.core.deref.call(null,g__11048__auto___11202);
});})(g__11048__auto___11202))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__11048__auto___11202){
return (function (seq11172){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11172));
});})(g__11048__auto___11202))
;


var g__11048__auto___11206 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__11048__auto___11206){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11207 = arguments.length;
var i__8227__auto___11208 = (0);
while(true){
if((i__8227__auto___11208 < len__8226__auto___11207)){
args__8233__auto__.push((arguments[i__8227__auto___11208]));

var G__11209 = (i__8227__auto___11208 + (1));
i__8227__auto___11208 = G__11209;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11048__auto___11206))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11048__auto___11206){
return (function (args){
return cljs.core.deref.call(null,g__11048__auto___11206);
});})(g__11048__auto___11206))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__11048__auto___11206){
return (function (seq11173){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11173));
});})(g__11048__auto___11206))
;


var g__11048__auto___11210 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__11048__auto___11210){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11211 = arguments.length;
var i__8227__auto___11212 = (0);
while(true){
if((i__8227__auto___11212 < len__8226__auto___11211)){
args__8233__auto__.push((arguments[i__8227__auto___11212]));

var G__11213 = (i__8227__auto___11212 + (1));
i__8227__auto___11212 = G__11213;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11048__auto___11210))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11048__auto___11210){
return (function (args){
return cljs.core.deref.call(null,g__11048__auto___11210);
});})(g__11048__auto___11210))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__11048__auto___11210){
return (function (seq11174){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11174));
});})(g__11048__auto___11210))
;


var g__11048__auto___11214 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__11048__auto___11214){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11215 = arguments.length;
var i__8227__auto___11216 = (0);
while(true){
if((i__8227__auto___11216 < len__8226__auto___11215)){
args__8233__auto__.push((arguments[i__8227__auto___11216]));

var G__11217 = (i__8227__auto___11216 + (1));
i__8227__auto___11216 = G__11217;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11048__auto___11214))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11048__auto___11214){
return (function (args){
return cljs.core.deref.call(null,g__11048__auto___11214);
});})(g__11048__auto___11214))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__11048__auto___11214){
return (function (seq11175){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11175));
});})(g__11048__auto___11214))
;


var g__11048__auto___11218 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__11048__auto___11218){
return (function cljs$spec$impl$gen$double(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11219 = arguments.length;
var i__8227__auto___11220 = (0);
while(true){
if((i__8227__auto___11220 < len__8226__auto___11219)){
args__8233__auto__.push((arguments[i__8227__auto___11220]));

var G__11221 = (i__8227__auto___11220 + (1));
i__8227__auto___11220 = G__11221;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11048__auto___11218))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11048__auto___11218){
return (function (args){
return cljs.core.deref.call(null,g__11048__auto___11218);
});})(g__11048__auto___11218))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__11048__auto___11218){
return (function (seq11176){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11176));
});})(g__11048__auto___11218))
;


var g__11048__auto___11222 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__11048__auto___11222){
return (function cljs$spec$impl$gen$int(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11223 = arguments.length;
var i__8227__auto___11224 = (0);
while(true){
if((i__8227__auto___11224 < len__8226__auto___11223)){
args__8233__auto__.push((arguments[i__8227__auto___11224]));

var G__11225 = (i__8227__auto___11224 + (1));
i__8227__auto___11224 = G__11225;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11048__auto___11222))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11048__auto___11222){
return (function (args){
return cljs.core.deref.call(null,g__11048__auto___11222);
});})(g__11048__auto___11222))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__11048__auto___11222){
return (function (seq11177){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11177));
});})(g__11048__auto___11222))
;


var g__11048__auto___11226 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__11048__auto___11226){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11227 = arguments.length;
var i__8227__auto___11228 = (0);
while(true){
if((i__8227__auto___11228 < len__8226__auto___11227)){
args__8233__auto__.push((arguments[i__8227__auto___11228]));

var G__11229 = (i__8227__auto___11228 + (1));
i__8227__auto___11228 = G__11229;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11048__auto___11226))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11048__auto___11226){
return (function (args){
return cljs.core.deref.call(null,g__11048__auto___11226);
});})(g__11048__auto___11226))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__11048__auto___11226){
return (function (seq11178){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11178));
});})(g__11048__auto___11226))
;


var g__11048__auto___11230 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__11048__auto___11230){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11231 = arguments.length;
var i__8227__auto___11232 = (0);
while(true){
if((i__8227__auto___11232 < len__8226__auto___11231)){
args__8233__auto__.push((arguments[i__8227__auto___11232]));

var G__11233 = (i__8227__auto___11232 + (1));
i__8227__auto___11232 = G__11233;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11048__auto___11230))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11048__auto___11230){
return (function (args){
return cljs.core.deref.call(null,g__11048__auto___11230);
});})(g__11048__auto___11230))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__11048__auto___11230){
return (function (seq11179){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11179));
});})(g__11048__auto___11230))
;


var g__11048__auto___11234 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__11048__auto___11234){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11235 = arguments.length;
var i__8227__auto___11236 = (0);
while(true){
if((i__8227__auto___11236 < len__8226__auto___11235)){
args__8233__auto__.push((arguments[i__8227__auto___11236]));

var G__11237 = (i__8227__auto___11236 + (1));
i__8227__auto___11236 = G__11237;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11048__auto___11234))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11048__auto___11234){
return (function (args){
return cljs.core.deref.call(null,g__11048__auto___11234);
});})(g__11048__auto___11234))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__11048__auto___11234){
return (function (seq11180){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11180));
});})(g__11048__auto___11234))
;


var g__11048__auto___11238 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__11048__auto___11238){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11239 = arguments.length;
var i__8227__auto___11240 = (0);
while(true){
if((i__8227__auto___11240 < len__8226__auto___11239)){
args__8233__auto__.push((arguments[i__8227__auto___11240]));

var G__11241 = (i__8227__auto___11240 + (1));
i__8227__auto___11240 = G__11241;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11048__auto___11238))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11048__auto___11238){
return (function (args){
return cljs.core.deref.call(null,g__11048__auto___11238);
});})(g__11048__auto___11238))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__11048__auto___11238){
return (function (seq11181){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11181));
});})(g__11048__auto___11238))
;


var g__11048__auto___11242 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__11048__auto___11242){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11243 = arguments.length;
var i__8227__auto___11244 = (0);
while(true){
if((i__8227__auto___11244 < len__8226__auto___11243)){
args__8233__auto__.push((arguments[i__8227__auto___11244]));

var G__11245 = (i__8227__auto___11244 + (1));
i__8227__auto___11244 = G__11245;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11048__auto___11242))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11048__auto___11242){
return (function (args){
return cljs.core.deref.call(null,g__11048__auto___11242);
});})(g__11048__auto___11242))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__11048__auto___11242){
return (function (seq11182){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11182));
});})(g__11048__auto___11242))
;


var g__11048__auto___11246 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__11048__auto___11246){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11247 = arguments.length;
var i__8227__auto___11248 = (0);
while(true){
if((i__8227__auto___11248 < len__8226__auto___11247)){
args__8233__auto__.push((arguments[i__8227__auto___11248]));

var G__11249 = (i__8227__auto___11248 + (1));
i__8227__auto___11248 = G__11249;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11048__auto___11246))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11048__auto___11246){
return (function (args){
return cljs.core.deref.call(null,g__11048__auto___11246);
});})(g__11048__auto___11246))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__11048__auto___11246){
return (function (seq11183){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11183));
});})(g__11048__auto___11246))
;


var g__11048__auto___11250 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__11048__auto___11250){
return (function cljs$spec$impl$gen$string(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11251 = arguments.length;
var i__8227__auto___11252 = (0);
while(true){
if((i__8227__auto___11252 < len__8226__auto___11251)){
args__8233__auto__.push((arguments[i__8227__auto___11252]));

var G__11253 = (i__8227__auto___11252 + (1));
i__8227__auto___11252 = G__11253;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11048__auto___11250))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11048__auto___11250){
return (function (args){
return cljs.core.deref.call(null,g__11048__auto___11250);
});})(g__11048__auto___11250))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__11048__auto___11250){
return (function (seq11184){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11184));
});})(g__11048__auto___11250))
;


var g__11048__auto___11254 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__11048__auto___11254){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11255 = arguments.length;
var i__8227__auto___11256 = (0);
while(true){
if((i__8227__auto___11256 < len__8226__auto___11255)){
args__8233__auto__.push((arguments[i__8227__auto___11256]));

var G__11257 = (i__8227__auto___11256 + (1));
i__8227__auto___11256 = G__11257;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11048__auto___11254))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11048__auto___11254){
return (function (args){
return cljs.core.deref.call(null,g__11048__auto___11254);
});})(g__11048__auto___11254))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__11048__auto___11254){
return (function (seq11185){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11185));
});})(g__11048__auto___11254))
;


var g__11048__auto___11258 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__11048__auto___11258){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11259 = arguments.length;
var i__8227__auto___11260 = (0);
while(true){
if((i__8227__auto___11260 < len__8226__auto___11259)){
args__8233__auto__.push((arguments[i__8227__auto___11260]));

var G__11261 = (i__8227__auto___11260 + (1));
i__8227__auto___11260 = G__11261;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11048__auto___11258))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11048__auto___11258){
return (function (args){
return cljs.core.deref.call(null,g__11048__auto___11258);
});})(g__11048__auto___11258))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__11048__auto___11258){
return (function (seq11186){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11186));
});})(g__11048__auto___11258))
;


var g__11048__auto___11262 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__11048__auto___11262){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11263 = arguments.length;
var i__8227__auto___11264 = (0);
while(true){
if((i__8227__auto___11264 < len__8226__auto___11263)){
args__8233__auto__.push((arguments[i__8227__auto___11264]));

var G__11265 = (i__8227__auto___11264 + (1));
i__8227__auto___11264 = G__11265;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11048__auto___11262))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11048__auto___11262){
return (function (args){
return cljs.core.deref.call(null,g__11048__auto___11262);
});})(g__11048__auto___11262))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__11048__auto___11262){
return (function (seq11187){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11187));
});})(g__11048__auto___11262))
;


var g__11048__auto___11266 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__11048__auto___11266){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11267 = arguments.length;
var i__8227__auto___11268 = (0);
while(true){
if((i__8227__auto___11268 < len__8226__auto___11267)){
args__8233__auto__.push((arguments[i__8227__auto___11268]));

var G__11269 = (i__8227__auto___11268 + (1));
i__8227__auto___11268 = G__11269;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11048__auto___11266))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11048__auto___11266){
return (function (args){
return cljs.core.deref.call(null,g__11048__auto___11266);
});})(g__11048__auto___11266))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__11048__auto___11266){
return (function (seq11188){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11188));
});})(g__11048__auto___11266))
;


var g__11048__auto___11270 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__11048__auto___11270){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11271 = arguments.length;
var i__8227__auto___11272 = (0);
while(true){
if((i__8227__auto___11272 < len__8226__auto___11271)){
args__8233__auto__.push((arguments[i__8227__auto___11272]));

var G__11273 = (i__8227__auto___11272 + (1));
i__8227__auto___11272 = G__11273;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__11048__auto___11270))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11048__auto___11270){
return (function (args){
return cljs.core.deref.call(null,g__11048__auto___11270);
});})(g__11048__auto___11270))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__11048__auto___11270){
return (function (seq11189){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11189));
});})(g__11048__auto___11270))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8233__auto__ = [];
var len__8226__auto___11276 = arguments.length;
var i__8227__auto___11277 = (0);
while(true){
if((i__8227__auto___11277 < len__8226__auto___11276)){
args__8233__auto__.push((arguments[i__8227__auto___11277]));

var G__11278 = (i__8227__auto___11277 + (1));
i__8227__auto___11277 = G__11278;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__11274_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__11274_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq11275){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11275));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__11279_SHARP_){
return (new Date(p1__11279_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map