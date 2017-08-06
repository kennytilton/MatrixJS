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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__10434__auto__,writer__10435__auto__,opt__10436__auto__){
return cljs.core._write.call(null,writer__10435__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__10943__auto__ = [];
var len__10936__auto___13132 = arguments.length;
var i__10937__auto___13133 = (0);
while(true){
if((i__10937__auto___13133 < len__10936__auto___13132)){
args__10943__auto__.push((arguments[i__10937__auto___13133]));

var G__13134 = (i__10937__auto___13133 + (1));
i__10937__auto___13133 = G__13134;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq13131){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13131));
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
var args__10943__auto__ = [];
var len__10936__auto___13136 = arguments.length;
var i__10937__auto___13137 = (0);
while(true){
if((i__10937__auto___13137 < len__10936__auto___13136)){
args__10943__auto__.push((arguments[i__10937__auto___13137]));

var G__13138 = (i__10937__auto___13137 + (1));
i__10937__auto___13137 = G__13138;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq13135){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13135));
});

var g_QMARK__13139 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_13140 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__13139){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__13139))
,null));
var mkg_13141 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__13139,g_13140){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__13139,g_13140))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__13139,g_13140,mkg_13141){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__13139).call(null,x);
});})(g_QMARK__13139,g_13140,mkg_13141))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__13139,g_13140,mkg_13141){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_13141).call(null,gfn);
});})(g_QMARK__13139,g_13140,mkg_13141))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__13139,g_13140,mkg_13141){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_13140).call(null,generator);
});})(g_QMARK__13139,g_13140,mkg_13141))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__11028__auto___13161 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__11028__auto___13161){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13162 = arguments.length;
var i__10937__auto___13163 = (0);
while(true){
if((i__10937__auto___13163 < len__10936__auto___13162)){
args__10943__auto__.push((arguments[i__10937__auto___13163]));

var G__13164 = (i__10937__auto___13163 + (1));
i__10937__auto___13163 = G__13164;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11028__auto___13161))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11028__auto___13161){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11028__auto___13161),args);
});})(g__11028__auto___13161))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__11028__auto___13161){
return (function (seq13142){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13142));
});})(g__11028__auto___13161))
;


var g__11028__auto___13165 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__11028__auto___13165){
return (function cljs$spec$impl$gen$list(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13166 = arguments.length;
var i__10937__auto___13167 = (0);
while(true){
if((i__10937__auto___13167 < len__10936__auto___13166)){
args__10943__auto__.push((arguments[i__10937__auto___13167]));

var G__13168 = (i__10937__auto___13167 + (1));
i__10937__auto___13167 = G__13168;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11028__auto___13165))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11028__auto___13165){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11028__auto___13165),args);
});})(g__11028__auto___13165))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__11028__auto___13165){
return (function (seq13143){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13143));
});})(g__11028__auto___13165))
;


var g__11028__auto___13169 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__11028__auto___13169){
return (function cljs$spec$impl$gen$map(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13170 = arguments.length;
var i__10937__auto___13171 = (0);
while(true){
if((i__10937__auto___13171 < len__10936__auto___13170)){
args__10943__auto__.push((arguments[i__10937__auto___13171]));

var G__13172 = (i__10937__auto___13171 + (1));
i__10937__auto___13171 = G__13172;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11028__auto___13169))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11028__auto___13169){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11028__auto___13169),args);
});})(g__11028__auto___13169))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__11028__auto___13169){
return (function (seq13144){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13144));
});})(g__11028__auto___13169))
;


var g__11028__auto___13173 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__11028__auto___13173){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13174 = arguments.length;
var i__10937__auto___13175 = (0);
while(true){
if((i__10937__auto___13175 < len__10936__auto___13174)){
args__10943__auto__.push((arguments[i__10937__auto___13175]));

var G__13176 = (i__10937__auto___13175 + (1));
i__10937__auto___13175 = G__13176;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11028__auto___13173))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11028__auto___13173){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11028__auto___13173),args);
});})(g__11028__auto___13173))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__11028__auto___13173){
return (function (seq13145){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13145));
});})(g__11028__auto___13173))
;


var g__11028__auto___13177 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__11028__auto___13177){
return (function cljs$spec$impl$gen$set(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13178 = arguments.length;
var i__10937__auto___13179 = (0);
while(true){
if((i__10937__auto___13179 < len__10936__auto___13178)){
args__10943__auto__.push((arguments[i__10937__auto___13179]));

var G__13180 = (i__10937__auto___13179 + (1));
i__10937__auto___13179 = G__13180;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11028__auto___13177))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11028__auto___13177){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11028__auto___13177),args);
});})(g__11028__auto___13177))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__11028__auto___13177){
return (function (seq13146){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13146));
});})(g__11028__auto___13177))
;


var g__11028__auto___13181 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__11028__auto___13181){
return (function cljs$spec$impl$gen$vector(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13182 = arguments.length;
var i__10937__auto___13183 = (0);
while(true){
if((i__10937__auto___13183 < len__10936__auto___13182)){
args__10943__auto__.push((arguments[i__10937__auto___13183]));

var G__13184 = (i__10937__auto___13183 + (1));
i__10937__auto___13183 = G__13184;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11028__auto___13181))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11028__auto___13181){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11028__auto___13181),args);
});})(g__11028__auto___13181))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__11028__auto___13181){
return (function (seq13147){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13147));
});})(g__11028__auto___13181))
;


var g__11028__auto___13185 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__11028__auto___13185){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13186 = arguments.length;
var i__10937__auto___13187 = (0);
while(true){
if((i__10937__auto___13187 < len__10936__auto___13186)){
args__10943__auto__.push((arguments[i__10937__auto___13187]));

var G__13188 = (i__10937__auto___13187 + (1));
i__10937__auto___13187 = G__13188;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11028__auto___13185))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11028__auto___13185){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11028__auto___13185),args);
});})(g__11028__auto___13185))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__11028__auto___13185){
return (function (seq13148){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13148));
});})(g__11028__auto___13185))
;


var g__11028__auto___13189 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__11028__auto___13189){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13190 = arguments.length;
var i__10937__auto___13191 = (0);
while(true){
if((i__10937__auto___13191 < len__10936__auto___13190)){
args__10943__auto__.push((arguments[i__10937__auto___13191]));

var G__13192 = (i__10937__auto___13191 + (1));
i__10937__auto___13191 = G__13192;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11028__auto___13189))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11028__auto___13189){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11028__auto___13189),args);
});})(g__11028__auto___13189))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__11028__auto___13189){
return (function (seq13149){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13149));
});})(g__11028__auto___13189))
;


var g__11028__auto___13193 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__11028__auto___13193){
return (function cljs$spec$impl$gen$elements(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13194 = arguments.length;
var i__10937__auto___13195 = (0);
while(true){
if((i__10937__auto___13195 < len__10936__auto___13194)){
args__10943__auto__.push((arguments[i__10937__auto___13195]));

var G__13196 = (i__10937__auto___13195 + (1));
i__10937__auto___13195 = G__13196;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11028__auto___13193))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11028__auto___13193){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11028__auto___13193),args);
});})(g__11028__auto___13193))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__11028__auto___13193){
return (function (seq13150){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13150));
});})(g__11028__auto___13193))
;


var g__11028__auto___13197 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__11028__auto___13197){
return (function cljs$spec$impl$gen$bind(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13198 = arguments.length;
var i__10937__auto___13199 = (0);
while(true){
if((i__10937__auto___13199 < len__10936__auto___13198)){
args__10943__auto__.push((arguments[i__10937__auto___13199]));

var G__13200 = (i__10937__auto___13199 + (1));
i__10937__auto___13199 = G__13200;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11028__auto___13197))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11028__auto___13197){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11028__auto___13197),args);
});})(g__11028__auto___13197))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__11028__auto___13197){
return (function (seq13151){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13151));
});})(g__11028__auto___13197))
;


var g__11028__auto___13201 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__11028__auto___13201){
return (function cljs$spec$impl$gen$choose(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13202 = arguments.length;
var i__10937__auto___13203 = (0);
while(true){
if((i__10937__auto___13203 < len__10936__auto___13202)){
args__10943__auto__.push((arguments[i__10937__auto___13203]));

var G__13204 = (i__10937__auto___13203 + (1));
i__10937__auto___13203 = G__13204;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11028__auto___13201))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11028__auto___13201){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11028__auto___13201),args);
});})(g__11028__auto___13201))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__11028__auto___13201){
return (function (seq13152){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13152));
});})(g__11028__auto___13201))
;


var g__11028__auto___13205 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__11028__auto___13205){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13206 = arguments.length;
var i__10937__auto___13207 = (0);
while(true){
if((i__10937__auto___13207 < len__10936__auto___13206)){
args__10943__auto__.push((arguments[i__10937__auto___13207]));

var G__13208 = (i__10937__auto___13207 + (1));
i__10937__auto___13207 = G__13208;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11028__auto___13205))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11028__auto___13205){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11028__auto___13205),args);
});})(g__11028__auto___13205))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__11028__auto___13205){
return (function (seq13153){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13153));
});})(g__11028__auto___13205))
;


var g__11028__auto___13209 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__11028__auto___13209){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13210 = arguments.length;
var i__10937__auto___13211 = (0);
while(true){
if((i__10937__auto___13211 < len__10936__auto___13210)){
args__10943__auto__.push((arguments[i__10937__auto___13211]));

var G__13212 = (i__10937__auto___13211 + (1));
i__10937__auto___13211 = G__13212;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11028__auto___13209))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11028__auto___13209){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11028__auto___13209),args);
});})(g__11028__auto___13209))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__11028__auto___13209){
return (function (seq13154){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13154));
});})(g__11028__auto___13209))
;


var g__11028__auto___13213 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__11028__auto___13213){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13214 = arguments.length;
var i__10937__auto___13215 = (0);
while(true){
if((i__10937__auto___13215 < len__10936__auto___13214)){
args__10943__auto__.push((arguments[i__10937__auto___13215]));

var G__13216 = (i__10937__auto___13215 + (1));
i__10937__auto___13215 = G__13216;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11028__auto___13213))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11028__auto___13213){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11028__auto___13213),args);
});})(g__11028__auto___13213))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__11028__auto___13213){
return (function (seq13155){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13155));
});})(g__11028__auto___13213))
;


var g__11028__auto___13217 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__11028__auto___13217){
return (function cljs$spec$impl$gen$sample(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13218 = arguments.length;
var i__10937__auto___13219 = (0);
while(true){
if((i__10937__auto___13219 < len__10936__auto___13218)){
args__10943__auto__.push((arguments[i__10937__auto___13219]));

var G__13220 = (i__10937__auto___13219 + (1));
i__10937__auto___13219 = G__13220;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11028__auto___13217))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11028__auto___13217){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11028__auto___13217),args);
});})(g__11028__auto___13217))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__11028__auto___13217){
return (function (seq13156){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13156));
});})(g__11028__auto___13217))
;


var g__11028__auto___13221 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__11028__auto___13221){
return (function cljs$spec$impl$gen$return(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13222 = arguments.length;
var i__10937__auto___13223 = (0);
while(true){
if((i__10937__auto___13223 < len__10936__auto___13222)){
args__10943__auto__.push((arguments[i__10937__auto___13223]));

var G__13224 = (i__10937__auto___13223 + (1));
i__10937__auto___13223 = G__13224;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11028__auto___13221))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11028__auto___13221){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11028__auto___13221),args);
});})(g__11028__auto___13221))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__11028__auto___13221){
return (function (seq13157){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13157));
});})(g__11028__auto___13221))
;


var g__11028__auto___13225 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__11028__auto___13225){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13226 = arguments.length;
var i__10937__auto___13227 = (0);
while(true){
if((i__10937__auto___13227 < len__10936__auto___13226)){
args__10943__auto__.push((arguments[i__10937__auto___13227]));

var G__13228 = (i__10937__auto___13227 + (1));
i__10937__auto___13227 = G__13228;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11028__auto___13225))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11028__auto___13225){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11028__auto___13225),args);
});})(g__11028__auto___13225))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__11028__auto___13225){
return (function (seq13158){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13158));
});})(g__11028__auto___13225))
;


var g__11028__auto___13229 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__11028__auto___13229){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13230 = arguments.length;
var i__10937__auto___13231 = (0);
while(true){
if((i__10937__auto___13231 < len__10936__auto___13230)){
args__10943__auto__.push((arguments[i__10937__auto___13231]));

var G__13232 = (i__10937__auto___13231 + (1));
i__10937__auto___13231 = G__13232;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11028__auto___13229))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11028__auto___13229){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11028__auto___13229),args);
});})(g__11028__auto___13229))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__11028__auto___13229){
return (function (seq13159){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13159));
});})(g__11028__auto___13229))
;


var g__11028__auto___13233 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__11028__auto___13233){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13234 = arguments.length;
var i__10937__auto___13235 = (0);
while(true){
if((i__10937__auto___13235 < len__10936__auto___13234)){
args__10943__auto__.push((arguments[i__10937__auto___13235]));

var G__13236 = (i__10937__auto___13235 + (1));
i__10937__auto___13235 = G__13236;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11028__auto___13233))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11028__auto___13233){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11028__auto___13233),args);
});})(g__11028__auto___13233))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__11028__auto___13233){
return (function (seq13160){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13160));
});})(g__11028__auto___13233))
;

var g__11041__auto___13258 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__11041__auto___13258){
return (function cljs$spec$impl$gen$any(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13259 = arguments.length;
var i__10937__auto___13260 = (0);
while(true){
if((i__10937__auto___13260 < len__10936__auto___13259)){
args__10943__auto__.push((arguments[i__10937__auto___13260]));

var G__13261 = (i__10937__auto___13260 + (1));
i__10937__auto___13260 = G__13261;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11041__auto___13258))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13258){
return (function (args){
return cljs.core.deref.call(null,g__11041__auto___13258);
});})(g__11041__auto___13258))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__11041__auto___13258){
return (function (seq13237){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13237));
});})(g__11041__auto___13258))
;


var g__11041__auto___13262 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__11041__auto___13262){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13263 = arguments.length;
var i__10937__auto___13264 = (0);
while(true){
if((i__10937__auto___13264 < len__10936__auto___13263)){
args__10943__auto__.push((arguments[i__10937__auto___13264]));

var G__13265 = (i__10937__auto___13264 + (1));
i__10937__auto___13264 = G__13265;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11041__auto___13262))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13262){
return (function (args){
return cljs.core.deref.call(null,g__11041__auto___13262);
});})(g__11041__auto___13262))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__11041__auto___13262){
return (function (seq13238){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13238));
});})(g__11041__auto___13262))
;


var g__11041__auto___13266 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__11041__auto___13266){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13267 = arguments.length;
var i__10937__auto___13268 = (0);
while(true){
if((i__10937__auto___13268 < len__10936__auto___13267)){
args__10943__auto__.push((arguments[i__10937__auto___13268]));

var G__13269 = (i__10937__auto___13268 + (1));
i__10937__auto___13268 = G__13269;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11041__auto___13266))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13266){
return (function (args){
return cljs.core.deref.call(null,g__11041__auto___13266);
});})(g__11041__auto___13266))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__11041__auto___13266){
return (function (seq13239){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13239));
});})(g__11041__auto___13266))
;


var g__11041__auto___13270 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__11041__auto___13270){
return (function cljs$spec$impl$gen$char(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13271 = arguments.length;
var i__10937__auto___13272 = (0);
while(true){
if((i__10937__auto___13272 < len__10936__auto___13271)){
args__10943__auto__.push((arguments[i__10937__auto___13272]));

var G__13273 = (i__10937__auto___13272 + (1));
i__10937__auto___13272 = G__13273;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11041__auto___13270))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13270){
return (function (args){
return cljs.core.deref.call(null,g__11041__auto___13270);
});})(g__11041__auto___13270))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__11041__auto___13270){
return (function (seq13240){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13240));
});})(g__11041__auto___13270))
;


var g__11041__auto___13274 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__11041__auto___13274){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13275 = arguments.length;
var i__10937__auto___13276 = (0);
while(true){
if((i__10937__auto___13276 < len__10936__auto___13275)){
args__10943__auto__.push((arguments[i__10937__auto___13276]));

var G__13277 = (i__10937__auto___13276 + (1));
i__10937__auto___13276 = G__13277;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11041__auto___13274))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13274){
return (function (args){
return cljs.core.deref.call(null,g__11041__auto___13274);
});})(g__11041__auto___13274))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__11041__auto___13274){
return (function (seq13241){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13241));
});})(g__11041__auto___13274))
;


var g__11041__auto___13278 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__11041__auto___13278){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13279 = arguments.length;
var i__10937__auto___13280 = (0);
while(true){
if((i__10937__auto___13280 < len__10936__auto___13279)){
args__10943__auto__.push((arguments[i__10937__auto___13280]));

var G__13281 = (i__10937__auto___13280 + (1));
i__10937__auto___13280 = G__13281;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11041__auto___13278))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13278){
return (function (args){
return cljs.core.deref.call(null,g__11041__auto___13278);
});})(g__11041__auto___13278))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__11041__auto___13278){
return (function (seq13242){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13242));
});})(g__11041__auto___13278))
;


var g__11041__auto___13282 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__11041__auto___13282){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13283 = arguments.length;
var i__10937__auto___13284 = (0);
while(true){
if((i__10937__auto___13284 < len__10936__auto___13283)){
args__10943__auto__.push((arguments[i__10937__auto___13284]));

var G__13285 = (i__10937__auto___13284 + (1));
i__10937__auto___13284 = G__13285;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11041__auto___13282))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13282){
return (function (args){
return cljs.core.deref.call(null,g__11041__auto___13282);
});})(g__11041__auto___13282))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__11041__auto___13282){
return (function (seq13243){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13243));
});})(g__11041__auto___13282))
;


var g__11041__auto___13286 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__11041__auto___13286){
return (function cljs$spec$impl$gen$double(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13287 = arguments.length;
var i__10937__auto___13288 = (0);
while(true){
if((i__10937__auto___13288 < len__10936__auto___13287)){
args__10943__auto__.push((arguments[i__10937__auto___13288]));

var G__13289 = (i__10937__auto___13288 + (1));
i__10937__auto___13288 = G__13289;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11041__auto___13286))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13286){
return (function (args){
return cljs.core.deref.call(null,g__11041__auto___13286);
});})(g__11041__auto___13286))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__11041__auto___13286){
return (function (seq13244){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13244));
});})(g__11041__auto___13286))
;


var g__11041__auto___13290 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__11041__auto___13290){
return (function cljs$spec$impl$gen$int(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13291 = arguments.length;
var i__10937__auto___13292 = (0);
while(true){
if((i__10937__auto___13292 < len__10936__auto___13291)){
args__10943__auto__.push((arguments[i__10937__auto___13292]));

var G__13293 = (i__10937__auto___13292 + (1));
i__10937__auto___13292 = G__13293;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11041__auto___13290))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13290){
return (function (args){
return cljs.core.deref.call(null,g__11041__auto___13290);
});})(g__11041__auto___13290))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__11041__auto___13290){
return (function (seq13245){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13245));
});})(g__11041__auto___13290))
;


var g__11041__auto___13294 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__11041__auto___13294){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13295 = arguments.length;
var i__10937__auto___13296 = (0);
while(true){
if((i__10937__auto___13296 < len__10936__auto___13295)){
args__10943__auto__.push((arguments[i__10937__auto___13296]));

var G__13297 = (i__10937__auto___13296 + (1));
i__10937__auto___13296 = G__13297;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11041__auto___13294))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13294){
return (function (args){
return cljs.core.deref.call(null,g__11041__auto___13294);
});})(g__11041__auto___13294))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__11041__auto___13294){
return (function (seq13246){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13246));
});})(g__11041__auto___13294))
;


var g__11041__auto___13298 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__11041__auto___13298){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13299 = arguments.length;
var i__10937__auto___13300 = (0);
while(true){
if((i__10937__auto___13300 < len__10936__auto___13299)){
args__10943__auto__.push((arguments[i__10937__auto___13300]));

var G__13301 = (i__10937__auto___13300 + (1));
i__10937__auto___13300 = G__13301;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11041__auto___13298))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13298){
return (function (args){
return cljs.core.deref.call(null,g__11041__auto___13298);
});})(g__11041__auto___13298))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__11041__auto___13298){
return (function (seq13247){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13247));
});})(g__11041__auto___13298))
;


var g__11041__auto___13302 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__11041__auto___13302){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13303 = arguments.length;
var i__10937__auto___13304 = (0);
while(true){
if((i__10937__auto___13304 < len__10936__auto___13303)){
args__10943__auto__.push((arguments[i__10937__auto___13304]));

var G__13305 = (i__10937__auto___13304 + (1));
i__10937__auto___13304 = G__13305;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11041__auto___13302))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13302){
return (function (args){
return cljs.core.deref.call(null,g__11041__auto___13302);
});})(g__11041__auto___13302))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__11041__auto___13302){
return (function (seq13248){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13248));
});})(g__11041__auto___13302))
;


var g__11041__auto___13306 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__11041__auto___13306){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13307 = arguments.length;
var i__10937__auto___13308 = (0);
while(true){
if((i__10937__auto___13308 < len__10936__auto___13307)){
args__10943__auto__.push((arguments[i__10937__auto___13308]));

var G__13309 = (i__10937__auto___13308 + (1));
i__10937__auto___13308 = G__13309;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11041__auto___13306))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13306){
return (function (args){
return cljs.core.deref.call(null,g__11041__auto___13306);
});})(g__11041__auto___13306))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__11041__auto___13306){
return (function (seq13249){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13249));
});})(g__11041__auto___13306))
;


var g__11041__auto___13310 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__11041__auto___13310){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13311 = arguments.length;
var i__10937__auto___13312 = (0);
while(true){
if((i__10937__auto___13312 < len__10936__auto___13311)){
args__10943__auto__.push((arguments[i__10937__auto___13312]));

var G__13313 = (i__10937__auto___13312 + (1));
i__10937__auto___13312 = G__13313;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11041__auto___13310))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13310){
return (function (args){
return cljs.core.deref.call(null,g__11041__auto___13310);
});})(g__11041__auto___13310))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__11041__auto___13310){
return (function (seq13250){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13250));
});})(g__11041__auto___13310))
;


var g__11041__auto___13314 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__11041__auto___13314){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13315 = arguments.length;
var i__10937__auto___13316 = (0);
while(true){
if((i__10937__auto___13316 < len__10936__auto___13315)){
args__10943__auto__.push((arguments[i__10937__auto___13316]));

var G__13317 = (i__10937__auto___13316 + (1));
i__10937__auto___13316 = G__13317;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11041__auto___13314))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13314){
return (function (args){
return cljs.core.deref.call(null,g__11041__auto___13314);
});})(g__11041__auto___13314))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__11041__auto___13314){
return (function (seq13251){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13251));
});})(g__11041__auto___13314))
;


var g__11041__auto___13318 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__11041__auto___13318){
return (function cljs$spec$impl$gen$string(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13319 = arguments.length;
var i__10937__auto___13320 = (0);
while(true){
if((i__10937__auto___13320 < len__10936__auto___13319)){
args__10943__auto__.push((arguments[i__10937__auto___13320]));

var G__13321 = (i__10937__auto___13320 + (1));
i__10937__auto___13320 = G__13321;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11041__auto___13318))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13318){
return (function (args){
return cljs.core.deref.call(null,g__11041__auto___13318);
});})(g__11041__auto___13318))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__11041__auto___13318){
return (function (seq13252){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13252));
});})(g__11041__auto___13318))
;


var g__11041__auto___13322 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__11041__auto___13322){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13323 = arguments.length;
var i__10937__auto___13324 = (0);
while(true){
if((i__10937__auto___13324 < len__10936__auto___13323)){
args__10943__auto__.push((arguments[i__10937__auto___13324]));

var G__13325 = (i__10937__auto___13324 + (1));
i__10937__auto___13324 = G__13325;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11041__auto___13322))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13322){
return (function (args){
return cljs.core.deref.call(null,g__11041__auto___13322);
});})(g__11041__auto___13322))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__11041__auto___13322){
return (function (seq13253){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13253));
});})(g__11041__auto___13322))
;


var g__11041__auto___13326 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__11041__auto___13326){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13327 = arguments.length;
var i__10937__auto___13328 = (0);
while(true){
if((i__10937__auto___13328 < len__10936__auto___13327)){
args__10943__auto__.push((arguments[i__10937__auto___13328]));

var G__13329 = (i__10937__auto___13328 + (1));
i__10937__auto___13328 = G__13329;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11041__auto___13326))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13326){
return (function (args){
return cljs.core.deref.call(null,g__11041__auto___13326);
});})(g__11041__auto___13326))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__11041__auto___13326){
return (function (seq13254){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13254));
});})(g__11041__auto___13326))
;


var g__11041__auto___13330 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__11041__auto___13330){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13331 = arguments.length;
var i__10937__auto___13332 = (0);
while(true){
if((i__10937__auto___13332 < len__10936__auto___13331)){
args__10943__auto__.push((arguments[i__10937__auto___13332]));

var G__13333 = (i__10937__auto___13332 + (1));
i__10937__auto___13332 = G__13333;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11041__auto___13330))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13330){
return (function (args){
return cljs.core.deref.call(null,g__11041__auto___13330);
});})(g__11041__auto___13330))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__11041__auto___13330){
return (function (seq13255){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13255));
});})(g__11041__auto___13330))
;


var g__11041__auto___13334 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__11041__auto___13334){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13335 = arguments.length;
var i__10937__auto___13336 = (0);
while(true){
if((i__10937__auto___13336 < len__10936__auto___13335)){
args__10943__auto__.push((arguments[i__10937__auto___13336]));

var G__13337 = (i__10937__auto___13336 + (1));
i__10937__auto___13336 = G__13337;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11041__auto___13334))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13334){
return (function (args){
return cljs.core.deref.call(null,g__11041__auto___13334);
});})(g__11041__auto___13334))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__11041__auto___13334){
return (function (seq13256){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13256));
});})(g__11041__auto___13334))
;


var g__11041__auto___13338 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__11041__auto___13338){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13339 = arguments.length;
var i__10937__auto___13340 = (0);
while(true){
if((i__10937__auto___13340 < len__10936__auto___13339)){
args__10943__auto__.push((arguments[i__10937__auto___13340]));

var G__13341 = (i__10937__auto___13340 + (1));
i__10937__auto___13340 = G__13341;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});})(g__11041__auto___13338))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13338){
return (function (args){
return cljs.core.deref.call(null,g__11041__auto___13338);
});})(g__11041__auto___13338))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__11041__auto___13338){
return (function (seq13257){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13257));
});})(g__11041__auto___13338))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__10943__auto__ = [];
var len__10936__auto___13344 = arguments.length;
var i__10937__auto___13345 = (0);
while(true){
if((i__10937__auto___13345 < len__10936__auto___13344)){
args__10943__auto__.push((arguments[i__10937__auto___13345]));

var G__13346 = (i__10937__auto___13345 + (1));
i__10937__auto___13345 = G__13346;
continue;
} else {
}
break;
}

var argseq__10944__auto__ = ((((0) < args__10943__auto__.length))?(new cljs.core.IndexedSeq(args__10943__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__10944__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__13342_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__13342_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq13343){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13343));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__13347_SHARP_){
return (new Date(p1__13347_SHARP_));
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