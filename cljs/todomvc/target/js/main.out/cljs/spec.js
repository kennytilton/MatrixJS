// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
cljs.spec.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__7781__auto__ = (((spec == null))?null:spec);
var m__7782__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__7781__auto__)]);
if(!((m__7782__auto__ == null))){
return m__7782__auto__.call(null,spec,x);
} else {
var m__7782__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__7782__auto____$1 == null))){
return m__7782__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.unform_STAR_ = (function cljs$spec$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__7781__auto__ = (((spec == null))?null:spec);
var m__7782__auto__ = (cljs.spec.unform_STAR_[goog.typeOf(x__7781__auto__)]);
if(!((m__7782__auto__ == null))){
return m__7782__auto__.call(null,spec,y);
} else {
var m__7782__auto____$1 = (cljs.spec.unform_STAR_["_"]);
if(!((m__7782__auto____$1 == null))){
return m__7782__auto____$1.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__7781__auto__ = (((spec == null))?null:spec);
var m__7782__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__7781__auto__)]);
if(!((m__7782__auto__ == null))){
return m__7782__auto__.call(null,spec,path,via,in$,x);
} else {
var m__7782__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__7782__auto____$1 == null))){
return m__7782__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__7781__auto__ = (((spec == null))?null:spec);
var m__7782__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__7781__auto__)]);
if(!((m__7782__auto__ == null))){
return m__7782__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__7782__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__7782__auto____$1 == null))){
return m__7782__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__7781__auto__ = (((spec == null))?null:spec);
var m__7782__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__7781__auto__)]);
if(!((m__7782__auto__ == null))){
return m__7782__auto__.call(null,spec,gfn);
} else {
var m__7782__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__7782__auto____$1 == null))){
return m__7782__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__7781__auto__ = (((spec == null))?null:spec);
var m__7782__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__7781__auto__)]);
if(!((m__7782__auto__ == null))){
return m__7782__auto__.call(null,spec);
} else {
var m__7782__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__7782__auto____$1 == null))){
return m__7782__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.deep_resolve = (function cljs$spec$deep_resolve(reg,k){
var spec = k;
while(true){
if(cljs.core.ident_QMARK_.call(null,spec)){
var G__11551 = cljs.core.get.call(null,reg,spec);
spec = G__11551;
continue;
} else {
return spec;
}
break;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not ident
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var reg = cljs.core.deref.call(null,cljs.spec.registry_ref);
var spec = cljs.core.get.call(null,reg,k);
if(!(cljs.core.ident_QMARK_.call(null,spec))){
return spec;
} else {
return cljs.spec.deep_resolve.call(null,reg,spec);
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.reg_resolve_BANG_ = (function cljs$spec$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__7113__auto__ = cljs.spec.reg_resolve.call(null,k);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to resolve spec: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$Spec$)))?true:false):false)){
return x;
} else {
return null;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__7101__auto__ = new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__7101__auto__)){
return x;
} else {
return and__7101__auto__;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,spec))){
return cljs.core.assoc.call(null,spec,new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name));
} else {
return null;
}
}
}
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,spec))){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(spec);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__7113__auto__ = (function (){var and__7101__auto__ = cljs.core.ident_QMARK_.call(null,spec_or_k);
if(and__7101__auto__){
return cljs.spec.reg_resolve.call(null,spec_or_k);
} else {
return and__7101__auto__;
}
})();
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
var or__7113__auto____$1 = cljs.spec.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__7113__auto____$1)){
return or__7113__auto____$1;
} else {
var or__7113__auto____$2 = cljs.spec.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__7113__auto____$2)){
return or__7113__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,s))){
return cljs.spec.with_name.call(null,cljs.spec.regex_spec_impl.call(null,s,null),cljs.spec.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__7113__auto__ = cljs.spec.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
if(cljs.core.ident_QMARK_.call(null,spec_or_k)){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to resolve spec: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_or_k)].join('')));
} else {
return null;
}
}
});

/**
 * @interface
 */
cljs.spec.Specize = function(){};

cljs.spec.specize_STAR_ = (function cljs$spec$specize_STAR_(var_args){
var args11558 = [];
var len__8226__auto___11561 = arguments.length;
var i__8227__auto___11562 = (0);
while(true){
if((i__8227__auto___11562 < len__8226__auto___11561)){
args11558.push((arguments[i__8227__auto___11562]));

var G__11563 = (i__8227__auto___11562 + (1));
i__8227__auto___11562 = G__11563;
continue;
} else {
}
break;
}

var G__11560 = args11558.length;
switch (G__11560) {
case 1:
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11558.length)].join('')));

}
});

cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.cljs$spec$Specize$specize_STAR_$arity$1 == null)))){
return _.cljs$spec$Specize$specize_STAR_$arity$1(_);
} else {
var x__7781__auto__ = (((_ == null))?null:_);
var m__7782__auto__ = (cljs.spec.specize_STAR_[goog.typeOf(x__7781__auto__)]);
if(!((m__7782__auto__ == null))){
return m__7782__auto__.call(null,_);
} else {
var m__7782__auto____$1 = (cljs.spec.specize_STAR_["_"]);
if(!((m__7782__auto____$1 == null))){
return m__7782__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Specize.specize*",_);
}
}
}
});

cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,form){
if((!((_ == null))) && (!((_.cljs$spec$Specize$specize_STAR_$arity$2 == null)))){
return _.cljs$spec$Specize$specize_STAR_$arity$2(_,form);
} else {
var x__7781__auto__ = (((_ == null))?null:_);
var m__7782__auto__ = (cljs.spec.specize_STAR_[goog.typeOf(x__7781__auto__)]);
if(!((m__7782__auto__ == null))){
return m__7782__auto__.call(null,_,form);
} else {
var m__7782__auto____$1 = (cljs.spec.specize_STAR_["_"]);
if(!((m__7782__auto____$1 == null))){
return m__7782__auto____$1.call(null,_,form);
} else {
throw cljs.core.missing_protocol.call(null,"Specize.specize*",_);
}
}
}
});

cljs.spec.specize_STAR_.cljs$lang$maxFixedArity = 2;


cljs.core.Keyword.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (k){
var k__$1 = this;
return cljs.spec.specize_STAR_.call(null,cljs.spec.reg_resolve_BANG_.call(null,k__$1));
});

cljs.core.Keyword.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (k,_){
var k__$1 = this;
return cljs.spec.specize_STAR_.call(null,cljs.spec.reg_resolve_BANG_.call(null,k__$1));
});

cljs.core.Symbol.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.specize_STAR_.call(null,cljs.spec.reg_resolve_BANG_.call(null,s__$1));
});

cljs.core.Symbol.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var s__$1 = this;
return cljs.spec.specize_STAR_.call(null,cljs.spec.reg_resolve_BANG_.call(null,s__$1));
});

(cljs.spec.Specize["_"] = true);

(cljs.spec.specize_STAR_["_"] = (function() {
var G__11565 = null;
var G__11565__1 = (function (o){
return cljs.spec.spec_impl.call(null,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582),o,null,null);
});
var G__11565__2 = (function (o,form){
return cljs.spec.spec_impl.call(null,form,o,null,null);
});
G__11565 = function(o,form){
switch(arguments.length){
case 1:
return G__11565__1.call(this,o);
case 2:
return G__11565__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11565.cljs$core$IFn$_invoke$arity$1 = G__11565__1;
G__11565.cljs$core$IFn$_invoke$arity$2 = G__11565__2;
return G__11565;
})()
);
cljs.spec.specize = (function cljs$spec$specize(var_args){
var args11566 = [];
var len__8226__auto___11569 = arguments.length;
var i__8227__auto___11570 = (0);
while(true){
if((i__8227__auto___11570 < len__8226__auto___11569)){
args11566.push((arguments[i__8227__auto___11570]));

var G__11571 = (i__8227__auto___11570 + (1));
i__8227__auto___11570 = G__11571;
continue;
} else {
}
break;
}

var G__11568 = args11566.length;
switch (G__11568) {
case 1:
return cljs.spec.specize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.specize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11566.length)].join('')));

}
});

cljs.spec.specize.cljs$core$IFn$_invoke$arity$1 = (function (s){
var or__7113__auto__ = cljs.spec.spec_QMARK_.call(null,s);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return cljs.spec.specize_STAR_.call(null,s);
}
});

cljs.spec.specize.cljs$core$IFn$_invoke$arity$2 = (function (s,form){
var or__7113__auto__ = cljs.spec.spec_QMARK_.call(null,s);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return cljs.spec.specize_STAR_.call(null,s,form);
}
});

cljs.spec.specize.cljs$lang$maxFixedArity = 2;

/**
 * tests the validity of a conform return value
 */
cljs.spec.invalid_QMARK_ = (function cljs$spec$invalid_QMARK_(ret){
return cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret);
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.unform = (function cljs$spec$unform(spec,x){
return cljs.spec.unform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_.call(null,cljs.spec.specize.call(null,spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__7101__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__7101__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__7101__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1)))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__7101__auto__ = (form instanceof cljs.core.Symbol);
if(and__7101__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__7101__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev.call(null,cljs.spec.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.reg_resolve.call(null,spec);
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,spec__$1))){
return cljs.core.assoc.call(null,spec__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",-432034727),gen_fn);
} else {
return cljs.spec.with_gen_STAR_.call(null,cljs.spec.specize.call(null,spec__$1),gen_fn);
}
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__4657__auto__ = cljs.spec.explain_STAR_.call(null,cljs.spec.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__4657__auto__)){
var probs = temp__4657__auto__;
if(cljs.core.empty_QMARK_.call(null,probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),probs], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.explain_printer = (function cljs$spec$explain_printer(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.call(null,(function (){var sb__8107__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_11613_11653 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_11614_11654 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_11613_11653,_STAR_print_fn_STAR_11614_11654,sb__8107__auto__){
return (function (x__8108__auto__){
return sb__8107__auto__.append(x__8108__auto__);
});})(_STAR_print_newline_STAR_11613_11653,_STAR_print_fn_STAR_11614_11654,sb__8107__auto__))
;

try{var seq__11615_11655 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678).cljs$core$IFn$_invoke$arity$1(ed));
var chunk__11616_11656 = null;
var count__11617_11657 = (0);
var i__11618_11658 = (0);
while(true){
if((i__11618_11658 < count__11617_11657)){
var map__11619_11659 = cljs.core._nth.call(null,chunk__11616_11656,i__11618_11658);
var map__11619_11660__$1 = ((((!((map__11619_11659 == null)))?((((map__11619_11659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11619_11659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11619_11659):map__11619_11659);
var prob_11661 = map__11619_11660__$1;
var path_11662 = cljs.core.get.call(null,map__11619_11660__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_11663 = cljs.core.get.call(null,map__11619_11660__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_11664 = cljs.core.get.call(null,map__11619_11660__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_11665 = cljs.core.get.call(null,map__11619_11660__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_11666 = cljs.core.get.call(null,map__11619_11660__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_11667 = cljs.core.get.call(null,map__11619_11660__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_11667)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_11667),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_11664);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_11666)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_11666)));
}

if(cljs.core.empty_QMARK_.call(null,path_11662)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_11662));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.abbrev.call(null,pred_11663));

if(cljs.core.truth_(reason_11665)){
cljs.core.print.call(null,", ",reason_11665);
} else {
}

var seq__11621_11668 = cljs.core.seq.call(null,prob_11661);
var chunk__11622_11669 = null;
var count__11623_11670 = (0);
var i__11624_11671 = (0);
while(true){
if((i__11624_11671 < count__11623_11670)){
var vec__11625_11672 = cljs.core._nth.call(null,chunk__11622_11669,i__11624_11671);
var k_11673 = cljs.core.nth.call(null,vec__11625_11672,(0),null);
var v_11674 = cljs.core.nth.call(null,vec__11625_11672,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_11673))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_11673)," ");

cljs.core.pr.call(null,v_11674);
}

var G__11675 = seq__11621_11668;
var G__11676 = chunk__11622_11669;
var G__11677 = count__11623_11670;
var G__11678 = (i__11624_11671 + (1));
seq__11621_11668 = G__11675;
chunk__11622_11669 = G__11676;
count__11623_11670 = G__11677;
i__11624_11671 = G__11678;
continue;
} else {
var temp__4657__auto___11679 = cljs.core.seq.call(null,seq__11621_11668);
if(temp__4657__auto___11679){
var seq__11621_11680__$1 = temp__4657__auto___11679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11621_11680__$1)){
var c__7932__auto___11681 = cljs.core.chunk_first.call(null,seq__11621_11680__$1);
var G__11682 = cljs.core.chunk_rest.call(null,seq__11621_11680__$1);
var G__11683 = c__7932__auto___11681;
var G__11684 = cljs.core.count.call(null,c__7932__auto___11681);
var G__11685 = (0);
seq__11621_11668 = G__11682;
chunk__11622_11669 = G__11683;
count__11623_11670 = G__11684;
i__11624_11671 = G__11685;
continue;
} else {
var vec__11628_11686 = cljs.core.first.call(null,seq__11621_11680__$1);
var k_11687 = cljs.core.nth.call(null,vec__11628_11686,(0),null);
var v_11688 = cljs.core.nth.call(null,vec__11628_11686,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_11687))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_11687)," ");

cljs.core.pr.call(null,v_11688);
}

var G__11689 = cljs.core.next.call(null,seq__11621_11680__$1);
var G__11690 = null;
var G__11691 = (0);
var G__11692 = (0);
seq__11621_11668 = G__11689;
chunk__11622_11669 = G__11690;
count__11623_11670 = G__11691;
i__11624_11671 = G__11692;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__11693 = seq__11615_11655;
var G__11694 = chunk__11616_11656;
var G__11695 = count__11617_11657;
var G__11696 = (i__11618_11658 + (1));
seq__11615_11655 = G__11693;
chunk__11616_11656 = G__11694;
count__11617_11657 = G__11695;
i__11618_11658 = G__11696;
continue;
} else {
var temp__4657__auto___11697 = cljs.core.seq.call(null,seq__11615_11655);
if(temp__4657__auto___11697){
var seq__11615_11698__$1 = temp__4657__auto___11697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11615_11698__$1)){
var c__7932__auto___11699 = cljs.core.chunk_first.call(null,seq__11615_11698__$1);
var G__11700 = cljs.core.chunk_rest.call(null,seq__11615_11698__$1);
var G__11701 = c__7932__auto___11699;
var G__11702 = cljs.core.count.call(null,c__7932__auto___11699);
var G__11703 = (0);
seq__11615_11655 = G__11700;
chunk__11616_11656 = G__11701;
count__11617_11657 = G__11702;
i__11618_11658 = G__11703;
continue;
} else {
var map__11631_11704 = cljs.core.first.call(null,seq__11615_11698__$1);
var map__11631_11705__$1 = ((((!((map__11631_11704 == null)))?((((map__11631_11704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11631_11704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11631_11704):map__11631_11704);
var prob_11706 = map__11631_11705__$1;
var path_11707 = cljs.core.get.call(null,map__11631_11705__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_11708 = cljs.core.get.call(null,map__11631_11705__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_11709 = cljs.core.get.call(null,map__11631_11705__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_11710 = cljs.core.get.call(null,map__11631_11705__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_11711 = cljs.core.get.call(null,map__11631_11705__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_11712 = cljs.core.get.call(null,map__11631_11705__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_11712)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_11712),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_11709);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_11711)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_11711)));
}

if(cljs.core.empty_QMARK_.call(null,path_11707)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_11707));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.abbrev.call(null,pred_11708));

if(cljs.core.truth_(reason_11710)){
cljs.core.print.call(null,", ",reason_11710);
} else {
}

var seq__11633_11713 = cljs.core.seq.call(null,prob_11706);
var chunk__11634_11714 = null;
var count__11635_11715 = (0);
var i__11636_11716 = (0);
while(true){
if((i__11636_11716 < count__11635_11715)){
var vec__11637_11717 = cljs.core._nth.call(null,chunk__11634_11714,i__11636_11716);
var k_11718 = cljs.core.nth.call(null,vec__11637_11717,(0),null);
var v_11719 = cljs.core.nth.call(null,vec__11637_11717,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_11718))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_11718)," ");

cljs.core.pr.call(null,v_11719);
}

var G__11720 = seq__11633_11713;
var G__11721 = chunk__11634_11714;
var G__11722 = count__11635_11715;
var G__11723 = (i__11636_11716 + (1));
seq__11633_11713 = G__11720;
chunk__11634_11714 = G__11721;
count__11635_11715 = G__11722;
i__11636_11716 = G__11723;
continue;
} else {
var temp__4657__auto___11724__$1 = cljs.core.seq.call(null,seq__11633_11713);
if(temp__4657__auto___11724__$1){
var seq__11633_11725__$1 = temp__4657__auto___11724__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11633_11725__$1)){
var c__7932__auto___11726 = cljs.core.chunk_first.call(null,seq__11633_11725__$1);
var G__11727 = cljs.core.chunk_rest.call(null,seq__11633_11725__$1);
var G__11728 = c__7932__auto___11726;
var G__11729 = cljs.core.count.call(null,c__7932__auto___11726);
var G__11730 = (0);
seq__11633_11713 = G__11727;
chunk__11634_11714 = G__11728;
count__11635_11715 = G__11729;
i__11636_11716 = G__11730;
continue;
} else {
var vec__11640_11731 = cljs.core.first.call(null,seq__11633_11725__$1);
var k_11732 = cljs.core.nth.call(null,vec__11640_11731,(0),null);
var v_11733 = cljs.core.nth.call(null,vec__11640_11731,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_11732))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_11732)," ");

cljs.core.pr.call(null,v_11733);
}

var G__11734 = cljs.core.next.call(null,seq__11633_11725__$1);
var G__11735 = null;
var G__11736 = (0);
var G__11737 = (0);
seq__11633_11713 = G__11734;
chunk__11634_11714 = G__11735;
count__11635_11715 = G__11736;
i__11636_11716 = G__11737;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__11738 = cljs.core.next.call(null,seq__11615_11698__$1);
var G__11739 = null;
var G__11740 = (0);
var G__11741 = (0);
seq__11615_11655 = G__11738;
chunk__11616_11656 = G__11739;
count__11617_11657 = G__11740;
i__11618_11658 = G__11741;
continue;
}
} else {
}
}
break;
}

var seq__11643_11742 = cljs.core.seq.call(null,ed);
var chunk__11644_11743 = null;
var count__11645_11744 = (0);
var i__11646_11745 = (0);
while(true){
if((i__11646_11745 < count__11645_11744)){
var vec__11647_11746 = cljs.core._nth.call(null,chunk__11644_11743,i__11646_11745);
var k_11747 = cljs.core.nth.call(null,vec__11647_11746,(0),null);
var v_11748 = cljs.core.nth.call(null,vec__11647_11746,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_11747))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_11747)," ");

cljs.core.pr.call(null,v_11748);

cljs.core.newline.call(null);
}

var G__11749 = seq__11643_11742;
var G__11750 = chunk__11644_11743;
var G__11751 = count__11645_11744;
var G__11752 = (i__11646_11745 + (1));
seq__11643_11742 = G__11749;
chunk__11644_11743 = G__11750;
count__11645_11744 = G__11751;
i__11646_11745 = G__11752;
continue;
} else {
var temp__4657__auto___11753 = cljs.core.seq.call(null,seq__11643_11742);
if(temp__4657__auto___11753){
var seq__11643_11754__$1 = temp__4657__auto___11753;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11643_11754__$1)){
var c__7932__auto___11755 = cljs.core.chunk_first.call(null,seq__11643_11754__$1);
var G__11756 = cljs.core.chunk_rest.call(null,seq__11643_11754__$1);
var G__11757 = c__7932__auto___11755;
var G__11758 = cljs.core.count.call(null,c__7932__auto___11755);
var G__11759 = (0);
seq__11643_11742 = G__11756;
chunk__11644_11743 = G__11757;
count__11645_11744 = G__11758;
i__11646_11745 = G__11759;
continue;
} else {
var vec__11650_11760 = cljs.core.first.call(null,seq__11643_11754__$1);
var k_11761 = cljs.core.nth.call(null,vec__11650_11760,(0),null);
var v_11762 = cljs.core.nth.call(null,vec__11650_11760,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_11761))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_11761)," ");

cljs.core.pr.call(null,v_11762);

cljs.core.newline.call(null);
}

var G__11763 = cljs.core.next.call(null,seq__11643_11754__$1);
var G__11764 = null;
var G__11765 = (0);
var G__11766 = (0);
seq__11643_11742 = G__11763;
chunk__11644_11743 = G__11764;
count__11645_11744 = G__11765;
i__11646_11745 = G__11766;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11614_11654;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_11613_11653;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8107__auto__)].join('');
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
cljs.spec._STAR_explain_out_STAR_ = cljs.spec.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
return cljs.spec._STAR_explain_out_STAR_.call(null,ed);
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out.call(null,cljs.spec.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__8107__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_11769_11771 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_11770_11772 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_11769_11771,_STAR_print_fn_STAR_11770_11772,sb__8107__auto__){
return (function (x__8108__auto__){
return sb__8107__auto__.append(x__8108__auto__);
});})(_STAR_print_newline_STAR_11769_11771,_STAR_print_fn_STAR_11770_11772,sb__8107__auto__))
;

try{cljs.spec.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11770_11772;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_11769_11771;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8107__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.specize.call(null,spec);
var temp__4655__auto__ = (function (){var or__7113__auto__ = (function (){var temp__4657__auto__ = (function (){var or__7113__auto__ = cljs.core.get.call(null,overrides,(function (){var or__7113__auto__ = cljs.spec.spec_name.call(null,spec__$1);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return cljs.core.get.call(null,overrides,path);
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var gfn = temp__4657__auto__;
return gfn.call(null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return cljs.spec.gen_STAR_.call(null,spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var g = temp__4655__auto__;
return cljs.spec.impl.gen.such_that.call(null,((function (g,temp__4655__auto__,spec__$1){
return (function (p1__11773_SHARP_){
return cljs.spec.valid_QMARK_.call(null,spec__$1,p1__11773_SHARP_);
});})(g,temp__4655__auto__,spec__$1))
,g,(100));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to construct gen at: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args11774 = [];
var len__8226__auto___11777 = arguments.length;
var i__8227__auto___11778 = (0);
while(true){
if((i__8227__auto___11778 < len__8226__auto___11777)){
args11774.push((arguments[i__8227__auto___11778]));

var G__11779 = (i__8227__auto___11778 + (1));
i__8227__auto___11778 = G__11779;
continue;
} else {
}
break;
}

var G__11776 = args11774.length;
switch (G__11776) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11774.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.call(null,spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086),cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__7101__auto__ = cljs.core.ident_QMARK_.call(null,k);
if(and__7101__auto__){
return cljs.core.namespace.call(null,k);
} else {
return and__7101__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("k must be namespaced keyword or resolveable symbol"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(c/and (ident? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__7113__auto__ = cljs.spec.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
var or__7113__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__7113__auto____$1)){
return or__7113__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.registry_ref),spec);
}
}
})())?spec:cljs.spec.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.registry_ref,cljs.core.assoc,k,cljs.spec.with_name.call(null,spec__$1,k));

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.registry = (function cljs$spec$registry(){
return cljs.core.deref.call(null,cljs.spec.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.get_spec = (function cljs$spec$get_spec(k){
return cljs.core.get.call(null,cljs.spec.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.__GT_sym.call(null,k)));
});
cljs.spec.macroexpand_check = (function cljs$spec$macroexpand_check(v,args){
var specs = cljs.spec.get_spec.call(null,v);
var temp__4657__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__4657__auto__)){
var arg_spec = temp__4657__auto__;
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cljs.spec.conform.call(null,arg_spec,args)))){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Call to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.__GT_sym.call(null,v)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" did not conform to spec:\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8107__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_11783_11785 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_11784_11786 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_11783_11785,_STAR_print_fn_STAR_11784_11786,sb__8107__auto__,ed,arg_spec,temp__4657__auto__,specs){
return (function (x__8108__auto__){
return sb__8107__auto__.append(x__8108__auto__);
});})(_STAR_print_newline_STAR_11783_11785,_STAR_print_fn_STAR_11784_11786,sb__8107__auto__,ed,arg_spec,temp__4657__auto__,specs))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11784_11786;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_11783_11785;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8107__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__7113__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args11787 = [];
var len__8226__auto___11790 = arguments.length;
var i__8227__auto___11791 = (0);
while(true){
if((i__8227__auto___11791 < len__8226__auto___11790)){
args11787.push((arguments[i__8227__auto___11791]));

var G__11792 = (i__8227__auto___11791 + (1));
i__8227__auto___11791 = G__11792;
continue;
} else {
}
break;
}

var G__11789 = args11787.length;
switch (G__11789) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11787.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.call(null,pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__4655__auto__ = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return cljs.spec.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,form)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args11794 = [];
var len__8226__auto___11797 = arguments.length;
var i__8227__auto___11798 = (0);
while(true){
if((i__8227__auto___11798 < len__8226__auto___11797)){
args11794.push((arguments[i__8227__auto___11798]));

var G__11799 = (i__8227__auto___11798 + (1));
i__8227__auto___11798 = G__11799;
continue;
} else {
}
break;
}

var G__11796 = args11794.length;
switch (G__11796) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11794.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
var spec__$1 = cljs.spec.specize.call(null,spec);
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cljs.spec.conform_STAR_.call(null,spec__$1,x)));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
var spec__$1 = cljs.spec.specize.call(null,spec,form);
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cljs.spec.conform_STAR_.call(null,spec__$1,x)));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * internal helper function that returns true when x is valid for spec.
 */
cljs.spec.pvalid_QMARK_ = (function cljs$spec$pvalid_QMARK_(var_args){
var args11801 = [];
var len__8226__auto___11804 = arguments.length;
var i__8227__auto___11805 = (0);
while(true){
if((i__8227__auto___11805 < len__8226__auto___11804)){
args11801.push((arguments[i__8227__auto___11805]));

var G__11806 = (i__8227__auto___11805 + (1));
i__8227__auto___11805 = G__11806;
continue;
} else {
}
break;
}

var G__11803 = args11801.length;
switch (G__11803) {
case 2:
return cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11801.length)].join('')));

}
});

cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cljs.spec.dt.call(null,pred,x,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582))));
});

cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cljs.spec.dt.call(null,pred,x,form)));
});

cljs.spec.pvalid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.explain_STAR_.call(null,pred__$1,path,(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form),new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__11811){
var map__11851 = p__11811;
var map__11851__$1 = ((((!((map__11851 == null)))?((((map__11851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11851.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11851):map__11851);
var argm = map__11851__$1;
var opt = cljs.core.get.call(null,map__11851__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__11851__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__11851__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__11851__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__11851__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var keys_pred = cljs.core.get.call(null,map__11851__$1,new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739));
var opt_keys = cljs.core.get.call(null,map__11851__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__11851__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__11851__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__11851__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__11851__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__11851__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__11808_SHARP_){
var or__7113__auto__ = k__GT_s.call(null,p1__11808_SHARP_);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return p1__11808_SHARP_;
}
});})(k__GT_s,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if(typeof cljs.spec.t_cljs$spec11853 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec11853 = (function (map__11851,keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,p__11811,req_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta11854){
this.map__11851 = map__11851;
this.keys__GT_specnames = keys__GT_specnames;
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.p__11811 = p__11811;
this.req_specs = req_specs;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta11854 = meta11854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec11853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_11855,meta11854__$1){
var self__ = this;
var _11855__$1 = this;
return (new cljs.spec.t_cljs$spec11853(self__.map__11851,self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.p__11811,self__.req_specs,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta11854__$1));
});})(k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec11853.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_11855){
var self__ = this;
var _11855__$1 = this;
return self__.meta11854;
});})(k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec11853.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec11853.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec11853.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec11853.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec11853.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__11862 = m;
var vec__11863 = G__11862;
var seq__11864 = cljs.core.seq.call(null,vec__11863);
var first__11865 = cljs.core.first.call(null,seq__11864);
var seq__11864__$1 = cljs.core.next.call(null,seq__11864);
var vec__11866 = first__11865;
var k = cljs.core.nth.call(null,vec__11866,(0),null);
var v = cljs.core.nth.call(null,vec__11866,(1),null);
var ks = seq__11864__$1;
var keys = vec__11863;
var ret__$1 = ret;
var G__11862__$1 = G__11862;
while(true){
var ret__$2 = ret__$1;
var vec__11869 = G__11862__$1;
var seq__11870 = cljs.core.seq.call(null,vec__11869);
var first__11871 = cljs.core.first.call(null,seq__11870);
var seq__11870__$1 = cljs.core.next.call(null,seq__11870);
var vec__11872 = first__11871;
var k__$1 = cljs.core.nth.call(null,vec__11872,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__11872,(1),null);
var ks__$1 = seq__11870__$1;
var keys__$1 = vec__11869;
if(cljs.core.truth_(keys__$1)){
var sname = self__.keys__GT_specnames.call(null,k__$1);
var temp__4655__auto__ = cljs.core.get.call(null,reg,sname);
if(cljs.core.truth_(temp__4655__auto__)){
var s = temp__4655__auto__;
var cv = cljs.spec.conform.call(null,s,v__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cv))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__11890 = (((cv === v__$1))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__11891 = ks__$1;
ret__$1 = G__11890;
G__11862__$1 = G__11891;
continue;
}
} else {
var G__11892 = ret__$2;
var G__11893 = ks__$1;
ret__$1 = G__11892;
G__11862__$1 = G__11893;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec11853.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__11878 = cljs.core.keys.call(null,m);
var vec__11879 = G__11878;
var seq__11880 = cljs.core.seq.call(null,vec__11879);
var first__11881 = cljs.core.first.call(null,seq__11880);
var seq__11880__$1 = cljs.core.next.call(null,seq__11880);
var k = first__11881;
var ks = seq__11880__$1;
var keys = vec__11879;
var ret__$1 = ret;
var G__11878__$1 = G__11878;
while(true){
var ret__$2 = ret__$1;
var vec__11882 = G__11878__$1;
var seq__11883 = cljs.core.seq.call(null,vec__11882);
var first__11884 = cljs.core.first.call(null,seq__11883);
var seq__11883__$1 = cljs.core.next.call(null,seq__11883);
var k__$1 = first__11884;
var ks__$1 = seq__11883__$1;
var keys__$1 = vec__11882;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.unform.call(null,self__.keys__GT_specnames.call(null,k__$1),cv);
var G__11894 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__11895 = ks__$1;
ret__$1 = G__11894;
G__11878__$1 = G__11895;
continue;
} else {
var G__11896 = ret__$2;
var G__11897 = ks__$1;
ret__$1 = G__11896;
G__11878__$1 = G__11897;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec11853.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var reg = cljs.spec.registry.call(null);
return cljs.core.apply.call(null,cljs.core.concat,(function (){var temp__4657__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return cljs.spec.abbrev.call(null,form);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__4657__auto__){
var probs = temp__4657__auto__;
return cljs.core.map.call(null,((function (probs,temp__4657__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__11809_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__11809_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
});})(probs,temp__4657__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__11885){
var vec__11886 = p__11885;
var k = cljs.core.nth.call(null,vec__11886,(0),null);
var v = cljs.core.nth.call(null,vec__11886,(1),null);
if(cljs.core.truth_((function (){var or__7113__auto__ = !(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k)));
if(or__7113__auto__){
return or__7113__auto__;
} else {
return cljs.spec.pvalid_QMARK_.call(null,self__.keys__GT_specnames.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1.call(null,self__.keys__GT_specnames.call(null,k),self__.keys__GT_specnames.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec11853.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
var gen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.call(null,gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,req_gens,opt_gens))){
var reqs = cljs.core.zipmap.call(null,self__.req_keys,req_gens);
var opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.call(null,cljs.spec.impl.gen.choose.call(null,(0),cljs.core.count.call(null,opts)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__11810_SHARP_){
var args = cljs.core.concat.call(null,cljs.core.seq.call(null,reqs),((cljs.core.seq.call(null,opts))?cljs.core.shuffle.call(null,cljs.core.seq.call(null,opts)):null));
return cljs.core.apply.call(null,cljs.spec.impl.gen.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,(p1__11810_SHARP_ + cljs.core.count.call(null,reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec11853.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec11853.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),(function (){var G__11889 = cljs.core.PersistentVector.EMPTY;
var G__11889__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__11889,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__11889);
var G__11889__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__11889__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__11889__$1);
var G__11889__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__11889__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__11889__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__11889__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__11889__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec11853.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map__11851","map__11851",-150174048,null),new cljs.core.Symbol(null,"keys->specnames","keys->specnames",1791294693,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"p__11811","p__11811",2082995181,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta11854","meta11854",710666743,null)], null);
});})(k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec11853.cljs$lang$type = true;

cljs.spec.t_cljs$spec11853.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec11853";

cljs.spec.t_cljs$spec11853.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__7724__auto__,writer__7725__auto__,opt__7726__auto__){
return cljs.core._write.call(null,writer__7725__auto__,"cljs.spec/t_cljs$spec11853");
});})(k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec11853 = ((function (k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec11853(map__11851__$2,keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,p__11811__$1,req_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta11854){
return (new cljs.spec.t_cljs$spec11853(map__11851__$2,keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,p__11811__$1,req_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta11854));
});})(k__GT_s,keys__GT_specnames,id,map__11851,map__11851__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec11853(map__11851__$1,keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,p__11811,req_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(var_args){
var args11898 = [];
var len__8226__auto___11906 = arguments.length;
var i__8227__auto___11907 = (0);
while(true){
if((i__8227__auto___11907 < len__8226__auto___11906)){
args11898.push((arguments[i__8227__auto___11907]));

var G__11908 = (i__8227__auto___11907 + (1));
i__8227__auto___11907 = G__11908;
continue;
} else {
}
break;
}

var G__11900 = args11898.length;
switch (G__11900) {
case 4:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11898.length)].join('')));

}
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred))){
var G__11901 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__11901,gfn);
} else {
return G__11901;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,pred))){
return cljs.spec.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.ident_QMARK_.call(null,pred)){
var G__11902 = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__11902,gfn);
} else {
return G__11902;
}
} else {
if(typeof cljs.spec.t_cljs$spec11903 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec11903 = (function (form,pred,gfn,cpred_QMARK_,unc,meta11904){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta11904 = meta11904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec11903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11905,meta11904__$1){
var self__ = this;
var _11905__$1 = this;
return (new cljs.spec.t_cljs$spec11903(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta11904__$1));
});

cljs.spec.t_cljs$spec11903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11905){
var self__ = this;
var _11905__$1 = this;
return self__.meta11904;
});

cljs.spec.t_cljs$spec11903.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec11903.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec11903.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec11903.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec11903.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = self__.pred.call(null,x);
if(cljs.core.truth_(self__.cpred_QMARK_)){
return ret;
} else {
if(cljs.core.truth_(ret)){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
});

cljs.spec.t_cljs$spec11903.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.t_cljs$spec11903.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
});

cljs.spec.t_cljs$spec11903.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.t_cljs$spec11903.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

cljs.spec.t_cljs$spec11903.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec11903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta11904","meta11904",-1537826564,null)], null);
});

cljs.spec.t_cljs$spec11903.cljs$lang$type = true;

cljs.spec.t_cljs$spec11903.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec11903";

cljs.spec.t_cljs$spec11903.cljs$lang$ctorPrWriter = (function (this__7724__auto__,writer__7725__auto__,opt__7726__auto__){
return cljs.core._write.call(null,writer__7725__auto__,"cljs.spec/t_cljs$spec11903");
});

cljs.spec.__GT_t_cljs$spec11903 = (function cljs$spec$__GT_t_cljs$spec11903(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta11904){
return (new cljs.spec.t_cljs$spec11903(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta11904));
});

}

return (new cljs.spec.t_cljs$spec11903(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args11915 = [];
var len__8226__auto___11929 = arguments.length;
var i__8227__auto___11930 = (0);
while(true){
if((i__8227__auto___11930 < len__8226__auto___11929)){
args11915.push((arguments[i__8227__auto___11930]));

var G__11931 = (i__8227__auto___11930 + (1));
i__8227__auto___11930 = G__11931;
continue;
} else {
}
break;
}

var G__11917 = args11915.length;
switch (G__11917) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11915.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__11910_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__7101__auto__ = cljs.core._get_method.call(null,mm,cljs.core._dispatch_fn.call(null,mm).call(null,p1__11910_SHARP_));
if(cljs.core.truth_(and__7101__auto__)){
return mm.call(null,p1__11910_SHARP_);
} else {
return and__7101__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__11911_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__11911_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__11912_SHARP_,p2__11913_SHARP_){
return cljs.core.assoc.call(null,p1__11912_SHARP_,retag,p2__11913_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec11918 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec11918 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta11919){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta11919 = meta11919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec11918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_11920,meta11919__$1){
var self__ = this;
var _11920__$1 = this;
return (new cljs.spec.t_cljs$spec11918(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta11919__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec11918.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_11920){
var self__ = this;
var _11920__$1 = this;
return self__.meta11919;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec11918.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec11918.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec11918.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec11918.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec11918.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec11918.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.unform.call(null,pred,x);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No method of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for dispatch value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.dval.call(null,x))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec11918.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec11918.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__11921){
var vec__11922 = p__11921;
var k = cljs.core.nth.call(null,vec__11922,(0),null);
var f = cljs.core.nth.call(null,vec__11922,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__11922,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (rmap__$1,p,vec__11922,k,f,___$1,id,predx,dval,tag){
return (function (p1__11914_SHARP_){
return self__.tag.call(null,p1__11914_SHARP_,k);
});})(rmap__$1,p,vec__11922,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,cljs.core._conj.call(null,(function (){var x__7955__auto__ = self__.form;
return cljs.core._conj.call(null,(function (){var x__7955__auto____$1 = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto____$1);
})(),x__7955__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null))));
});})(rmap__$1,p,vec__11922,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__11925){
var vec__11926 = p__11925;
var k = cljs.core.nth.call(null,vec__11926,(0),null);
return cljs.spec.invalid_QMARK_.call(null,k);
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec11918.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec11918.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","multi-spec","cljs.spec/multi-spec",-2053297814,null)),(function (){var x__7955__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = self__.retag;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec11918.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta11919","meta11919",1891172949,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec11918.cljs$lang$type = true;

cljs.spec.t_cljs$spec11918.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec11918";

cljs.spec.t_cljs$spec11918.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__7724__auto__,writer__7725__auto__,opt__7726__auto__){
return cljs.core._write.call(null,writer__7725__auto__,"cljs.spec/t_cljs$spec11918");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec11918 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec11918(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta11919){
return (new cljs.spec.t_cljs$spec11918(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta11919));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec11918(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args11933 = [];
var len__8226__auto___11939 = arguments.length;
var i__8227__auto___11940 = (0);
while(true){
if((i__8227__auto___11940 < len__8226__auto___11939)){
args11933.push((arguments[i__8227__auto___11940]));

var G__11941 = (i__8227__auto___11940 + (1));
i__8227__auto___11940 = G__11941;
continue;
} else {
}
break;
}

var G__11935 = args11933.length;
switch (G__11935) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11933.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.specize,preds,forms);
}),null));
var cnt = cljs.core.count.call(null,preds);
if(typeof cljs.spec.t_cljs$spec11936 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec11936 = (function (forms,preds,gfn,specs,cnt,meta11937){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
this.meta11937 = meta11937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec11936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_11938,meta11937__$1){
var self__ = this;
var _11938__$1 = this;
return (new cljs.spec.t_cljs$spec11936(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta11937__$1));
});})(specs,cnt))
;

cljs.spec.t_cljs$spec11936.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_11938){
var self__ = this;
var _11938__$1 = this;
return self__.meta11937;
});})(specs,cnt))
;

cljs.spec.t_cljs$spec11936.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec11936.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.t_cljs$spec11936.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.t_cljs$spec11936.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec11936.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var specs__$1 = cljs.core.deref.call(null,self__.specs);
if(!((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),self__.cnt)))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,self__.cnt)){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,i),v);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cv))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__11943 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__11944 = (i + (1));
ret = G__11943;
i = G__11944;
continue;
}
}
break;
}
}
});})(specs,cnt))
;

cljs.spec.t_cljs$spec11936.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.unform.call(null,self__.preds.call(null,i),cv);
var G__11945 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__11946 = (i + (1));
ret = G__11945;
i = G__11946;
continue;
}
break;
}
});})(specs,cnt))
;

cljs.spec.t_cljs$spec11936.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = cljs.core.count.call(null,self__.preds);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1,specs,cnt){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1,specs,cnt))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});})(specs,cnt))
;

cljs.spec.t_cljs$spec11936.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,specs,cnt){
return (function (i,p,f){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1,specs,cnt))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});})(specs,cnt))
;

cljs.spec.t_cljs$spec11936.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});})(specs,cnt))
;

cljs.spec.t_cljs$spec11936.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","tuple","cljs.spec/tuple",500419708,null)),self__.forms)));
});})(specs,cnt))
;

cljs.spec.t_cljs$spec11936.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"meta11937","meta11937",-839019055,null)], null);
});})(specs,cnt))
;

cljs.spec.t_cljs$spec11936.cljs$lang$type = true;

cljs.spec.t_cljs$spec11936.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec11936";

cljs.spec.t_cljs$spec11936.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__7724__auto__,writer__7725__auto__,opt__7726__auto__){
return cljs.core._write.call(null,writer__7725__auto__,"cljs.spec/t_cljs$spec11936");
});})(specs,cnt))
;

cljs.spec.__GT_t_cljs$spec11936 = ((function (specs,cnt){
return (function cljs$spec$__GT_t_cljs$spec11936(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta11937){
return (new cljs.spec.t_cljs$spec11936(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta11937));
});})(specs,cnt))
;

}

return (new cljs.spec.t_cljs$spec11936(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.tagged_ret = (function cljs$spec$tagged_ret(v){
var x11948 = v;
x11948.cljs$core$IMapEntry$ = cljs.core.PROTOCOL_SENTINEL;

x11948.cljs$core$IMapEntry$_key$arity$1 = ((function (x11948){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(0));
});})(x11948))
;

x11948.cljs$core$IMapEntry$_val$arity$1 = ((function (x11948){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(1));
});})(x11948))
;

return x11948;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var specs = (new cljs.core.Delay(((function (id,kps){
return (function (){
return cljs.core.mapv.call(null,cljs.spec.specize,preds,forms);
});})(id,kps))
,null));
var cform = (function (){var G__11957 = cljs.core.count.call(null,preds);
switch (G__11957) {
case (2):
return ((function (G__11957,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
var ret__$1 = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(1)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(1)),ret__$1], null));
}
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(0)),ret], null));
}
});
;})(G__11957,id,kps,specs))

break;
case (3):
return ((function (G__11957,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
var ret__$1 = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(1)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
var ret__$2 = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(2)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$2))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(2)),ret__$2], null));
}
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(1)),ret__$1], null));
}
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(0)),ret], null));
}
});
;})(G__11957,id,kps,specs))

break;
default:
return ((function (G__11957,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var spec = specs__$1.call(null,i);
var ret = cljs.spec.conform_STAR_.call(null,spec,x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
var G__11966 = (i + (1));
i = G__11966;
continue;
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,i),ret], null));
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
break;
}
});
;})(G__11957,id,kps,specs))

}
})();
if(typeof cljs.spec.t_cljs$spec11958 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec11958 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta11959){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
this.meta11959 = meta11959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec11958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_11960,meta11959__$1){
var self__ = this;
var _11960__$1 = this;
return (new cljs.spec.t_cljs$spec11958(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta11959__$1));
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec11958.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_11960){
var self__ = this;
var _11960__$1 = this;
return self__.meta11959;
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec11958.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec11958.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec11958.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec11958.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec11958.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec11958.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__11961){
var self__ = this;
var vec__11962 = p__11961;
var k = cljs.core.nth.call(null,vec__11962,(0),null);
var x = cljs.core.nth.call(null,vec__11962,(1),null);
var ___$1 = this;
return cljs.spec.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec11958.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (this$__$1,id,kps,specs,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,kps,specs,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec11958.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,kps,specs,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,specs,cform){
return (function (){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,specs,cform))
,null)));
}
});})(___$1,id,kps,specs,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gs);
}
}
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec11958.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec11958.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec11958.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta11959","meta11959",-1453648840,null)], null);
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec11958.cljs$lang$type = true;

cljs.spec.t_cljs$spec11958.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec11958";

cljs.spec.t_cljs$spec11958.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__7724__auto__,writer__7725__auto__,opt__7726__auto__){
return cljs.core._write.call(null,writer__7725__auto__,"cljs.spec/t_cljs$spec11958");
});})(id,kps,specs,cform))
;

cljs.spec.__GT_t_cljs$spec11958 = ((function (id,kps,specs,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec11958(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta11959){
return (new cljs.spec.t_cljs$spec11958(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta11959));
});})(id,kps,specs,cform))
;

}

return (new cljs.spec.t_cljs$spec11958(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__11993 = preds;
var vec__11995 = G__11993;
var seq__11996 = cljs.core.seq.call(null,vec__11995);
var first__11997 = cljs.core.first.call(null,seq__11996);
var seq__11996__$1 = cljs.core.next.call(null,seq__11996);
var pred = first__11997;
var preds__$1 = seq__11996__$1;
var G__11994 = forms;
var vec__11998 = G__11994;
var seq__11999 = cljs.core.seq.call(null,vec__11998);
var first__12000 = cljs.core.first.call(null,seq__11999);
var seq__11999__$1 = cljs.core.next.call(null,seq__11999);
var form = first__12000;
var forms__$1 = seq__11999__$1;
var ret__$1 = ret;
var G__11993__$1 = G__11993;
var G__11994__$1 = G__11994;
while(true){
var ret__$2 = ret__$1;
var vec__12001 = G__11993__$1;
var seq__12002 = cljs.core.seq.call(null,vec__12001);
var first__12003 = cljs.core.first.call(null,seq__12002);
var seq__12002__$1 = cljs.core.next.call(null,seq__12002);
var pred__$1 = first__12003;
var preds__$2 = seq__12002__$1;
var vec__12004 = G__11994__$1;
var seq__12005 = cljs.core.seq.call(null,vec__12004);
var first__12006 = cljs.core.first.call(null,seq__12005);
var seq__12005__$1 = cljs.core.next.call(null,seq__12005);
var form__$1 = first__12006;
var forms__$2 = seq__12005__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,nret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__12007 = nret;
var G__12008 = preds__$2;
var G__12009 = forms__$2;
ret__$1 = G__12007;
G__11993__$1 = G__12008;
G__11994__$1 = G__12009;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__12036 = forms;
var vec__12038 = G__12036;
var seq__12039 = cljs.core.seq.call(null,vec__12038);
var first__12040 = cljs.core.first.call(null,seq__12039);
var seq__12039__$1 = cljs.core.next.call(null,seq__12039);
var form = first__12040;
var forms__$1 = seq__12039__$1;
var G__12037 = preds;
var vec__12041 = G__12037;
var seq__12042 = cljs.core.seq.call(null,vec__12041);
var first__12043 = cljs.core.first.call(null,seq__12042);
var seq__12042__$1 = cljs.core.next.call(null,seq__12042);
var pred = first__12043;
var preds__$1 = seq__12042__$1;
var ret__$1 = ret;
var G__12036__$1 = G__12036;
var G__12037__$1 = G__12037;
while(true){
var ret__$2 = ret__$1;
var vec__12044 = G__12036__$1;
var seq__12045 = cljs.core.seq.call(null,vec__12044);
var first__12046 = cljs.core.first.call(null,seq__12045);
var seq__12045__$1 = cljs.core.next.call(null,seq__12045);
var form__$1 = first__12046;
var forms__$2 = seq__12045__$1;
var vec__12047 = G__12037__$1;
var seq__12048 = cljs.core.seq.call(null,vec__12047);
var first__12049 = cljs.core.first.call(null,seq__12048);
var seq__12048__$1 = cljs.core.next.call(null,seq__12048);
var pred__$1 = first__12049;
var preds__$2 = seq__12048__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,nret))){
return cljs.spec.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
} else {
var G__12050 = nret;
var G__12051 = forms__$2;
var G__12052 = preds__$2;
ret__$1 = G__12050;
G__12036__$1 = G__12051;
G__12037__$1 = G__12052;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.specize,preds,forms);
}),null));
var cform = (function (){var G__12059 = cljs.core.count.call(null,preds);
switch (G__12059) {
case (2):
return ((function (G__12059,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
}
});
;})(G__12059,specs))

break;
case (3):
return ((function (G__12059,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret__$1 = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(2)),ret__$1);
}
}
});
;})(G__12059,specs))

break;
default:
return ((function (G__12059,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = x;
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var nret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,i),ret);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__12064 = nret;
var G__12065 = (i + (1));
ret = G__12064;
i = G__12065;
continue;
}
} else {
return ret;
}
break;
}
});
;})(G__12059,specs))

}
})();
if(typeof cljs.spec.t_cljs$spec12060 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12060 = (function (forms,preds,gfn,specs,cform,meta12061){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
this.meta12061 = meta12061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_12062,meta12061__$1){
var self__ = this;
var _12062__$1 = this;
return (new cljs.spec.t_cljs$spec12060(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta12061__$1));
});})(specs,cform))
;

cljs.spec.t_cljs$spec12060.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_12062){
var self__ = this;
var _12062__$1 = this;
return self__.meta12061;
});})(specs,cform))
;

cljs.spec.t_cljs$spec12060.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12060.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.t_cljs$spec12060.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.t_cljs$spec12060.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12060.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(specs,cform))
;

cljs.spec.t_cljs$spec12060.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1,specs,cform){
return (function (p1__12054_SHARP_,p2__12053_SHARP_){
return cljs.spec.unform.call(null,p2__12053_SHARP_,p1__12054_SHARP_);
});})(___$1,specs,cform))
,x,cljs.core.reverse.call(null,self__.preds));
});})(specs,cform))
;

cljs.spec.t_cljs$spec12060.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});})(specs,cform))
;

cljs.spec.t_cljs$spec12060.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});})(specs,cform))
;

cljs.spec.t_cljs$spec12060.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});})(specs,cform))
;

cljs.spec.t_cljs$spec12060.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",-7296553,null)),self__.forms)));
});})(specs,cform))
;

cljs.spec.t_cljs$spec12060.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta12061","meta12061",1408007935,null)], null);
});})(specs,cform))
;

cljs.spec.t_cljs$spec12060.cljs$lang$type = true;

cljs.spec.t_cljs$spec12060.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12060";

cljs.spec.t_cljs$spec12060.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__7724__auto__,writer__7725__auto__,opt__7726__auto__){
return cljs.core._write.call(null,writer__7725__auto__,"cljs.spec/t_cljs$spec12060");
});})(specs,cform))
;

cljs.spec.__GT_t_cljs$spec12060 = ((function (specs,cform){
return (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec12060(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta12061){
return (new cljs.spec.t_cljs$spec12060(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta12061));
});})(specs,cform))
;

}

return (new cljs.spec.t_cljs$spec12060(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.coll_prob = (function cljs$spec$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__7113__auto__ = kfn;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__7113__auto__ = kform;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}
})();
if(cljs.core.not.call(null,cljs.spec.pvalid_QMARK_.call(null,pred,x))){
return cljs.spec.explain_1.call(null,kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__7101__auto__ = count;
if(cljs.core.truth_(and__7101__auto__)){
return cljs.core.not_EQ_.call(null,count,cljs.core.bounded_count.call(null,count,x));
} else {
return and__7101__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__7955__auto__ = count;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__7101__auto__ = (function (){var or__7113__auto__ = min_count;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__7101__auto__)){
return !((((function (){var or__7113__auto__ = min_count;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__7113__auto__ = max_count;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__7101__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null)),(function (){var x__7955__auto__ = (function (){var or__7113__auto__ = min_count;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return (0);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = (function (){var or__7113__auto__ = max_count;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return cljs.spec.MAX_INT;
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__7101__auto__ = distinct;
if(cljs.core.truth_(and__7101__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,x))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x)));
} else {
return and__7101__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.merge_spec_impl = (function cljs$spec$merge_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec12077 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12077 = (function (forms,preds,gfn,meta12078){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta12078 = meta12078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12079,meta12078__$1){
var self__ = this;
var _12079__$1 = this;
return (new cljs.spec.t_cljs$spec12077(self__.forms,self__.preds,self__.gfn,meta12078__$1));
});

cljs.spec.t_cljs$spec12077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12079){
var self__ = this;
var _12079__$1 = this;
return self__.meta12078;
});

cljs.spec.t_cljs$spec12077.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12077.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec12077.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec12077.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12077.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.call(null,((function (___$1){
return (function (p1__12066_SHARP_,p2__12067_SHARP_){
return cljs.spec.dt.call(null,p1__12066_SHARP_,x,p2__12067_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.spec.invalid_QMARK_,ms))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.core.apply.call(null,cljs.core.merge,ms);
}
});

cljs.spec.t_cljs$spec12077.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (p1__12068_SHARP_){
return cljs.spec.unform.call(null,p1__12068_SHARP_,x);
});})(___$1))
,cljs.core.reverse.call(null,self__.preds)));
});

cljs.spec.t_cljs$spec12077.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (p1__12069_SHARP_,p2__12070_SHARP_){
return cljs.spec.explain_1.call(null,p1__12069_SHARP_,p2__12070_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.t_cljs$spec12077.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.fmap.call(null,((function (___$1){
return (function (p1__12071_SHARP_){
return cljs.core.apply.call(null,cljs.core.merge,p1__12071_SHARP_);
});})(___$1))
,cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,cljs.core.map.call(null,((function (___$1){
return (function (p1__12072_SHARP_,p2__12073_SHARP_){
return cljs.spec.gensub.call(null,p1__12072_SHARP_,overrides,path,rmap,p2__12073_SHARP_);
});})(___$1))
,self__.preds,self__.forms)));
}
});

cljs.spec.t_cljs$spec12077.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec12077.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","merge","cljs.spec/merge",-838422687,null)),self__.forms)));
});

cljs.spec.t_cljs$spec12077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta12078","meta12078",177584176,null)], null);
});

cljs.spec.t_cljs$spec12077.cljs$lang$type = true;

cljs.spec.t_cljs$spec12077.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12077";

cljs.spec.t_cljs$spec12077.cljs$lang$ctorPrWriter = (function (this__7724__auto__,writer__7725__auto__,opt__7726__auto__){
return cljs.core._write.call(null,writer__7725__auto__,"cljs.spec/t_cljs$spec12077");
});

cljs.spec.__GT_t_cljs$spec12077 = (function cljs$spec$merge_spec_impl_$___GT_t_cljs$spec12077(forms__$1,preds__$1,gfn__$1,meta12078){
return (new cljs.spec.t_cljs$spec12077(forms__$1,preds__$1,gfn__$1,meta12078));
});

}

return (new cljs.spec.t_cljs$spec12077(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.every_impl = (function cljs$spec$every_impl(var_args){
var args12084 = [];
var len__8226__auto___12119 = arguments.length;
var i__8227__auto___12120 = (0);
while(true){
if((i__8227__auto___12120 < len__8226__auto___12119)){
args12084.push((arguments[i__8227__auto___12120]));

var G__12121 = (i__8227__auto___12120 + (1));
i__8227__auto___12120 = G__12121;
continue;
} else {
}
break;
}

var G__12086 = args12084.length;
switch (G__12086) {
case 3:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12084.length)].join('')));

}
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.every_impl.call(null,form,pred,opts,null);
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__12087,gfn){
var map__12088 = p__12087;
var map__12088__$1 = ((((!((map__12088 == null)))?((((map__12088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12088.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12088):map__12088);
var opts = map__12088__$1;
var max_count = cljs.core.get.call(null,map__12088__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kfn = cljs.core.get.call(null,map__12088__$1,new cljs.core.Keyword("cljs.spec","kfn","cljs.spec/kfn",293196937));
var gen_max = cljs.core.get.call(null,map__12088__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var conform_all = cljs.core.get.call(null,map__12088__$1,new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907));
var conform_keys = cljs.core.get.call(null,map__12088__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var distinct = cljs.core.get.call(null,map__12088__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kind_form = cljs.core.get.call(null,map__12088__$1,new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303));
var gen_into = cljs.core.get.call(null,map__12088__$1,new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY);
var count = cljs.core.get.call(null,map__12088__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.call(null,map__12088__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.call(null,map__12088__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var cpred = cljs.core.get.call(null,map__12088__$1,new cljs.core.Keyword("cljs.spec","cpred","cljs.spec/cpred",1439199454));
var conform_into = gen_into;
var spec = (new cljs.core.Delay(((function (conform_into,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (){
return cljs.spec.specize.call(null,pred);
});})(conform_into,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,null));
var check_QMARK_ = ((function (conform_into,spec,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__12080_SHARP_){
return cljs.spec.valid_QMARK_.call(null,cljs.core.deref.call(null,spec),p1__12080_SHARP_);
});})(conform_into,spec,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;
var kfn__$1 = (function (){var or__7113__auto__ = kfn;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return ((function (or__7113__auto__,conform_into,spec,check_QMARK_,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (i,v){
return i;
});
;})(or__7113__auto__,conform_into,spec,check_QMARK_,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
}
})();
var addcv = ((function (conform_into,spec,check_QMARK_,kfn__$1,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (ret,i,v,cv){
return cljs.core.conj.call(null,ret,cv);
});})(conform_into,spec,check_QMARK_,kfn__$1,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;
var vec__12090 = ((cljs.core.map_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null):((cljs.core.vector_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)], null):((cljs.core.list_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list_QMARK_,new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",-684796618,null)], null):((cljs.core.set_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set_QMARK_,new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seqable_QMARK_,new cljs.core.Symbol("cljs.core","seqable?","cljs.core/seqable?",-745394886,null)], null)
))));
var kindfn = cljs.core.nth.call(null,vec__12090,(0),null);
var kindform = cljs.core.nth.call(null,vec__12090,(1),null);
var cfns = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (x){
if((cljs.core.vector_QMARK_.call(null,x)) && ((cljs.core.not.call(null,conform_into)) || (cljs.core.vector_QMARK_.call(null,conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.call(null,ret,i,cv);
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__7101__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__7101__auto__){
var or__7113__auto__ = (function (){var and__7101__auto____$1 = kind;
if(cljs.core.truth_(and__7101__auto____$1)){
return cljs.core.not.call(null,conform_into);
} else {
return and__7101__auto____$1;
}
})();
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return cljs.core.map_QMARK_.call(null,conform_into);
}
} else {
return and__7101__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not.call(null,conform_keys))){
return ret;
} else {
return cljs.core.assoc.call(null,ret,cljs.core.nth.call(null,(cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.call(null,cv,(1)));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.core.identity], null);
} else {
if((cljs.core.list_QMARK_.call(null,conform_into)) || (cljs.core.seq_QMARK_.call(null,conform_into)) || ((cljs.core.not.call(null,conform_into)) && ((cljs.core.list_QMARK_.call(null,x)) || (cljs.core.seq_QMARK_.call(null,x))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__12081_SHARP_){
return cljs.core.empty.call(null,(function (){var or__7113__auto__ = conform_into;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return p1__12081_SHARP_;
}
})());
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,addcv,cljs.core.identity], null);

}
}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;
if(typeof cljs.spec.t_cljs$spec12093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12093 = (function (form,max_count,check_QMARK_,map__12088,gfn,gen_max,pred,cpred,kindform,conform_keys,kind_form,addcv,cfns,vec__12090,distinct,kindfn,spec,p__12087,kfn,gen_into,count,min_count,opts,kind,conform_all,conform_into,meta12094){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.map__12088 = map__12088;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.cpred = cpred;
this.kindform = kindform;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.vec__12090 = vec__12090;
this.distinct = distinct;
this.kindfn = kindfn;
this.spec = spec;
this.p__12087 = p__12087;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.meta12094 = meta12094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_12095,meta12094__$1){
var self__ = this;
var _12095__$1 = this;
return (new cljs.spec.t_cljs$spec12093(self__.form,self__.max_count,self__.check_QMARK_,self__.map__12088,self__.gfn,self__.gen_max,self__.pred,self__.cpred,self__.kindform,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.vec__12090,self__.distinct,self__.kindfn,self__.spec,self__.p__12087,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta12094__$1));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12093.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_12095){
var self__ = this;
var _12095__$1 = this;
return self__.meta12094;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12093.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12093.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12093.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12093.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12093.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = cljs.core.deref.call(null,self__.spec);
if(cljs.core.not.call(null,self__.cpred.call(null,x))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__12096 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__12096,(0),null);
var add = cljs.core.nth.call(null,vec__12096,(1),null);
var complete = cljs.core.nth.call(null,vec__12096,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__12102 = cljs.core.seq.call(null,x);
var vec__12103 = G__12102;
var seq__12104 = cljs.core.seq.call(null,vec__12103);
var first__12105 = cljs.core.first.call(null,seq__12104);
var seq__12104__$1 = cljs.core.next.call(null,seq__12104);
var v = first__12105;
var vs = seq__12104__$1;
var vseq = vec__12103;
var ret__$1 = ret;
var i__$1 = i;
var G__12102__$1 = G__12102;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__12106 = G__12102__$1;
var seq__12107 = cljs.core.seq.call(null,vec__12106);
var first__12108 = cljs.core.first.call(null,seq__12107);
var seq__12107__$1 = cljs.core.next.call(null,seq__12107);
var v__$1 = first__12108;
var vs__$1 = seq__12107__$1;
var vseq__$1 = vec__12106;
if(vseq__$1){
var cv = cljs.spec.conform_STAR_.call(null,spec__$1,v__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cv))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__12123 = add.call(null,ret__$2,i__$2,v__$1,cv);
var G__12124 = (i__$2 + (1));
var G__12125 = vs__$1;
ret__$1 = G__12123;
i__$1 = G__12124;
G__12102__$1 = G__12125;
continue;
}
} else {
return complete.call(null,ret__$2);
}
break;
}
} else {
if(cljs.core.indexed_QMARK_.call(null,x)){
var step = (function (){var x__7449__auto__ = (1);
var y__7450__auto__ = cljs.core.long$.call(null,(cljs.core.count.call(null,x) / cljs.spec._STAR_coll_check_limit_STAR_));
return ((x__7449__auto__ > y__7450__auto__) ? x__7449__auto__ : y__7450__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count.call(null,x))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec__$1,cljs.core.nth.call(null,x,i)))){
var G__12126 = (i + step);
i = G__12126;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
} else {
var limit = cljs.spec._STAR_coll_check_limit_STAR_;
var i = (0);
var G__12112 = cljs.core.seq.call(null,x);
var vec__12113 = G__12112;
var seq__12114 = cljs.core.seq.call(null,vec__12113);
var first__12115 = cljs.core.first.call(null,seq__12114);
var seq__12114__$1 = cljs.core.next.call(null,seq__12114);
var v = first__12115;
var vs = seq__12114__$1;
var vseq = vec__12113;
var i__$1 = i;
var G__12112__$1 = G__12112;
while(true){
var i__$2 = i__$1;
var vec__12116 = G__12112__$1;
var seq__12117 = cljs.core.seq.call(null,vec__12116);
var first__12118 = cljs.core.first.call(null,seq__12117);
var seq__12117__$1 = cljs.core.next.call(null,seq__12117);
var v__$1 = first__12118;
var vs__$1 = seq__12117__$1;
var vseq__$1 = vec__12116;
if(((vseq__$1 == null)) || (cljs.core._EQ_.call(null,i__$2,limit))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec__$1,v__$1))){
var G__12127 = (i__$2 + (1));
var G__12128 = vs__$1;
i__$1 = G__12127;
G__12112__$1 = G__12128;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);

}
}
break;
}
}

}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12093.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return x;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12093.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__7113__auto__ = cljs.spec.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.call(null,cljs.core.take,cljs.spec._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (or__7113__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.explain_1.call(null,self__.form,self__.pred,path,via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
});})(or__7113__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.core.range.call(null),x))));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12093.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var pgen = cljs.spec.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.impl.gen.bind.call(null,(cljs.core.truth_(self__.gen_into)?cljs.spec.impl.gen.return$.call(null,cljs.core.empty.call(null,self__.gen_into)):(cljs.core.truth_(self__.kind)?cljs.spec.impl.gen.fmap.call(null,((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__12082_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__12082_SHARP_)){
return p1__12082_SHARP_;
} else {
return cljs.core.empty.call(null,p1__12082_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.spec.gensub.call(null,self__.kind,overrides,path,rmap,self__.form)):cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY)
)),((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (init){
return cljs.spec.impl.gen.fmap.call(null,((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__12083_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__12083_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__12083_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)):cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__7113__auto__ = self__.min_count;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__7113__auto__ = self__.max_count;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
var x__7449__auto__ = self__.gen_max;
var y__7450__auto__ = ((2) * (function (){var or__7113__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__7113__auto____$1)){
return or__7113__auto____$1;
} else {
return (0);
}
})());
return ((x__7449__auto__ > y__7450__auto__) ? x__7449__auto__ : y__7450__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null))):(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector.call(null,pgen,self__.count):(cljs.core.truth_((function (){var or__7113__auto__ = self__.min_count;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.impl.gen.vector.call(null,pgen,(function (){var or__7113__auto__ = self__.min_count;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return (0);
}
})(),(function (){var or__7113__auto__ = self__.max_count;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
var x__7449__auto__ = self__.gen_max;
var y__7450__auto__ = ((2) * (function (){var or__7113__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__7113__auto____$1)){
return or__7113__auto____$1;
} else {
return (0);
}
})());
return ((x__7449__auto__ > y__7450__auto__) ? x__7449__auto__ : y__7450__auto__);
}
})()):cljs.spec.impl.gen.vector.call(null,pgen,(0),self__.gen_max)
))));
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
);
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12093.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12093.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","every","cljs.spec/every",-1899705480,null)),(function (){var x__7955__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts))));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12093.getBasis = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (){
return new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"map__12088","map__12088",-1291932281,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"cpred","cpred",-540353554,null),new cljs.core.Symbol(null,"kindform","kindform",839835536,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"vec__12090","vec__12090",-173763790,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"kindfn","kindfn",1062796440,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"p__12087","p__12087",-2119232167,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"meta12094","meta12094",809858476,null)], null);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12093.cljs$lang$type = true;

cljs.spec.t_cljs$spec12093.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12093";

cljs.spec.t_cljs$spec12093.cljs$lang$ctorPrWriter = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (this__7724__auto__,writer__7725__auto__,opt__7726__auto__){
return cljs.core._write.call(null,writer__7725__auto__,"cljs.spec/t_cljs$spec12093");
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.__GT_t_cljs$spec12093 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function cljs$spec$__GT_t_cljs$spec12093(form__$1,max_count__$1,check_QMARK___$1,map__12088__$2,gfn__$1,gen_max__$1,pred__$1,cpred__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,vec__12090__$1,distinct__$1,kindfn__$1,spec__$1,p__12087__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta12094){
return (new cljs.spec.t_cljs$spec12093(form__$1,max_count__$1,check_QMARK___$1,map__12088__$2,gfn__$1,gen_max__$1,pred__$1,cpred__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,vec__12090__$1,distinct__$1,kindfn__$1,spec__$1,p__12087__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta12094));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12090,kindfn,kindform,cfns,map__12088,map__12088__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

}

return (new cljs.spec.t_cljs$spec12093(form,max_count,check_QMARK_,map__12088__$1,gfn,gen_max,pred,cpred,kindform,conform_keys,kind_form,addcv,cfns,vec__12090,distinct,kindfn,spec,p__12087,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__12129){
var map__12132 = p__12129;
var map__12132__$1 = ((((!((map__12132 == null)))?((((map__12132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12132):map__12132);
var op = cljs.core.get.call(null,map__12132__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__12134){
var map__12146 = p__12134;
var map__12146__$1 = ((((!((map__12146 == null)))?((((map__12146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12146):map__12146);
var vec__12147 = cljs.core.get.call(null,map__12146__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__12148 = cljs.core.seq.call(null,vec__12147);
var first__12149 = cljs.core.first.call(null,seq__12148);
var seq__12148__$1 = cljs.core.next.call(null,seq__12148);
var p1 = first__12149;
var pr = seq__12148__$1;
var ps = vec__12147;
var vec__12150 = cljs.core.get.call(null,map__12146__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__12151 = cljs.core.seq.call(null,vec__12150);
var first__12152 = cljs.core.first.call(null,seq__12151);
var seq__12151__$1 = cljs.core.next.call(null,seq__12151);
var k1 = first__12152;
var kr = seq__12151__$1;
var ks = vec__12150;
var vec__12153 = cljs.core.get.call(null,map__12146__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__12154 = cljs.core.seq.call(null,vec__12153);
var first__12155 = cljs.core.first.call(null,seq__12154);
var seq__12154__$1 = cljs.core.next.call(null,seq__12154);
var f1 = first__12155;
var fr = seq__12154__$1;
var forms = vec__12153;
var ret = cljs.core.get.call(null,map__12146__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__12146__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,rp]):rp));
if(pr){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__8233__auto__ = [];
var len__8226__auto___12158 = arguments.length;
var i__8227__auto___12159 = (0);
while(true){
if((i__8227__auto___12159 < len__8226__auto___12158)){
args__8233__auto__.push((arguments[i__8227__auto___12159]));

var G__12160 = (i__8227__auto___12159 + (1));
i__8227__auto___12159 = G__12160;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq12157){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12157));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7955__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),(function (){var x__7955__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null)),(function (){var x__7955__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__7113__auto__ = ks;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__12161_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__12161_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__7113__auto__ = cljs.core.seq.call(null,ks);
if(or__7113__auto__){
return or__7113__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__7113__auto__ = cljs.core.seq.call(null,forms);
if(or__7113__auto__){
return or__7113__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__12162_SHARP_){
return cljs.core.nth.call(null,p1__12162_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__12172 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__12175 = cljs.core.nth.call(null,vec__12172,(0),null);
var seq__12176 = cljs.core.seq.call(null,vec__12175);
var first__12177 = cljs.core.first.call(null,seq__12176);
var seq__12176__$1 = cljs.core.next.call(null,seq__12176);
var p1 = first__12177;
var pr = seq__12176__$1;
var ps__$1 = vec__12175;
var vec__12178 = cljs.core.nth.call(null,vec__12172,(1),null);
var k1 = cljs.core.nth.call(null,vec__12178,(0),null);
var ks__$1 = vec__12178;
var forms__$1 = cljs.core.nth.call(null,vec__12172,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.spec.accept.call(null,cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__8233__auto__ = [];
var len__8226__auto___12182 = arguments.length;
var i__8227__auto___12183 = (0);
while(true){
if((i__8227__auto___12183 < len__8226__auto___12182)){
args__8233__auto__.push((arguments[i__8227__auto___12183]));

var G__12184 = (i__8227__auto___12183 + (1));
i__8227__auto___12183 = G__12184;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq12181){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12181));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__7101__auto__ = p1;
if(cljs.core.truth_(and__7101__auto__)){
return p2;
} else {
return and__7101__auto__;
}
})())){
return cljs.spec.alts.call(null,p1,p2);
} else {
var or__7113__auto__ = p1;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept.call(null,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__7113__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718));
if(or__7113__auto__){
return or__7113__auto__;
} else {
var or__7113__auto____$1 = (function (){var and__7101__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),null], null), null).call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__7101__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__7101__auto__;
}
})();
if(cljs.core.truth_(or__7113__auto____$1)){
return or__7113__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__12188 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12188__$1 = ((((!((map__12188 == null)))?((((map__12188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12188):map__12188);
var p__$1 = map__12188__$1;
var op = cljs.core.get.call(null,map__12188__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__12188__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__12188__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__12188__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__12188__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__12190 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12190)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__12190)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12190)){
var and__7101__auto__ = cljs.spec.accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__7101__auto__)){
var or__7113__auto__ = cljs.spec.noret_QMARK_.call(null,p1,cljs.spec.preturn.call(null,p1));
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
var ret = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,ret));
}
} else {
return and__7101__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12190)){
var or__7113__auto__ = (p1 === p2);
if(or__7113__auto__){
return or__7113__auto__;
} else {
return cljs.spec.accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12190)){
return cljs.core.every_QMARK_.call(null,cljs.spec.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12190)){
return cljs.core.some.call(null,cljs.spec.accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__12209 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12209__$1 = ((((!((map__12209 == null)))?((((map__12209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12209.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12209):map__12209);
var p__$1 = map__12209__$1;
var vec__12210 = cljs.core.get.call(null,map__12209__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__12211 = cljs.core.seq.call(null,vec__12210);
var first__12212 = cljs.core.first.call(null,seq__12211);
var seq__12211__$1 = cljs.core.next.call(null,seq__12211);
var p0 = first__12212;
var pr = seq__12211__$1;
var ps = vec__12210;
var vec__12213 = cljs.core.get.call(null,map__12209__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__12213,(0),null);
var ks = vec__12213;
var op = cljs.core.get.call(null,map__12209__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__12209__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__12209__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__12209__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__12217 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12217)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__12217)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12217)){
var pret = cljs.spec.preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718);
} else {
return cljs.spec.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12217)){
return cljs.spec.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12217)){
return cljs.spec.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12217)){
var vec__12218 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__12221 = cljs.core.nth.call(null,vec__12218,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__12221,(0),null);
var vec__12224 = cljs.core.nth.call(null,vec__12218,(1),null);
var k0 = cljs.core.nth.call(null,vec__12224,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718):cljs.spec.preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.op_unform = (function cljs$spec$op_unform(p,x){
var map__12243 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12243__$1 = ((((!((map__12243 == null)))?((((map__12243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12243.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12243):map__12243);
var p__$1 = map__12243__$1;
var vec__12244 = cljs.core.get.call(null,map__12243__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__12245 = cljs.core.seq.call(null,vec__12244);
var first__12246 = cljs.core.first.call(null,seq__12245);
var seq__12245__$1 = cljs.core.next.call(null,seq__12245);
var p0 = first__12246;
var pr = seq__12245__$1;
var ps = vec__12244;
var vec__12247 = cljs.core.get.call(null,map__12243__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__12247,(0),null);
var ks = vec__12247;
var op = cljs.core.get.call(null,map__12243__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__12243__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__12243__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__12243__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__12243__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__12243__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__12251 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12251)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__12251)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12251)){
var px = cljs.core.reduce.call(null,((function (G__12251,map__12243,map__12243__$1,p__$1,vec__12244,seq__12245,first__12246,seq__12245__$1,p0,pr,ps,vec__12247,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__12228_SHARP_,p2__12227_SHARP_){
return cljs.spec.unform.call(null,p2__12227_SHARP_,p1__12228_SHARP_);
});})(G__12251,map__12243,map__12243__$1,p__$1,vec__12244,seq__12245,first__12246,seq__12245__$1,p0,pr,ps,vec__12247,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs.spec.op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12251)){
return cljs.core.mapcat.call(null,((function (G__12251,map__12243,map__12243__$1,p__$1,vec__12244,seq__12245,first__12246,seq__12245__$1,p0,pr,ps,vec__12247,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__12229_SHARP_){
return cljs.spec.op_unform.call(null,p1,p1__12229_SHARP_);
});})(G__12251,map__12243,map__12243__$1,p__$1,vec__12244,seq__12245,first__12246,seq__12245__$1,p0,pr,ps,vec__12247,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12251)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__12251,map__12243,map__12243__$1,p__$1,vec__12244,seq__12245,first__12246,seq__12245__$1,p0,pr,ps,vec__12247,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__12230_SHARP_){
return cljs.spec.op_unform.call(null,p0,p1__12230_SHARP_);
});})(G__12251,map__12243,map__12243__$1,p__$1,vec__12244,seq__12245,first__12246,seq__12245__$1,p0,pr,ps,vec__12247,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__12251,map__12243,map__12243__$1,p__$1,vec__12244,seq__12245,first__12246,seq__12245__$1,p0,pr,ps,vec__12247,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs.spec.op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
});})(G__12251,map__12243,map__12243__$1,p__$1,vec__12244,seq__12245,first__12246,seq__12245__$1,p0,pr,ps,vec__12247,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12251)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p0,x)], null);
} else {
var vec__12252 = x;
var k__$1 = cljs.core.nth.call(null,vec__12252,(0),null);
var v = cljs.core.nth.call(null,vec__12252,(1),null);
return cljs.spec.op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__12258 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12258__$1 = ((((!((map__12258 == null)))?((((map__12258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12258.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12258):map__12258);
var p__$1 = map__12258__$1;
var op = cljs.core.get.call(null,map__12258__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__12258__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__12258__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__12258,map__12258__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
});})(map__12258,map__12258__$1,p__$1,op,ps,splice))
;
var G__12260 = op;
if(cljs.core._EQ_.call(null,null,G__12260)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12260)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12260)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12260)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12260)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12260)){
return prop.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__12271 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12271__$1 = ((((!((map__12271 == null)))?((((map__12271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12271.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12271):map__12271);
var p__$1 = map__12271__$1;
var vec__12272 = cljs.core.get.call(null,map__12271__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__12273 = cljs.core.seq.call(null,vec__12272);
var first__12274 = cljs.core.first.call(null,seq__12273);
var seq__12273__$1 = cljs.core.next.call(null,seq__12273);
var p0 = first__12274;
var pr = seq__12273__$1;
var ps = vec__12272;
var vec__12275 = cljs.core.get.call(null,map__12271__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__12276 = cljs.core.seq.call(null,vec__12275);
var first__12277 = cljs.core.first.call(null,seq__12276);
var seq__12276__$1 = cljs.core.next.call(null,seq__12276);
var k0 = first__12277;
var kr = seq__12276__$1;
var ks = vec__12275;
var op = cljs.core.get.call(null,map__12271__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__12271__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__12271__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__12271__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__12271__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.call(null,map__12271__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__12279 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12279)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__12279)){
var ret__$1 = cljs.spec.dt.call(null,p__$1,x,p__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12279)){
var temp__4657__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__4657__auto__)){
var p1__$1 = temp__4657__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return cljs.spec.amp_impl.call(null,p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12279)){
return cljs.spec.alt2.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs.spec.deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p0))?cljs.spec.deriv.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12279)){
return cljs.spec.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__12279,map__12271,map__12271__$1,p__$1,vec__12272,seq__12273,first__12274,seq__12273__$1,p0,pr,ps,vec__12275,seq__12276,first__12277,seq__12276__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__12261_SHARP_){
return cljs.spec.deriv.call(null,p1__12261_SHARP_,x);
});})(G__12279,map__12271,map__12271__$1,p__$1,vec__12272,seq__12273,first__12274,seq__12273__$1,p0,pr,ps,vec__12275,seq__12276,first__12277,seq__12276__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12279)){
return cljs.spec.alt2.call(null,cljs.spec.rep_STAR_.call(null,cljs.spec.deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))?cljs.spec.deriv.call(null,cljs.spec.rep_STAR_.call(null,p2,p2,cljs.spec.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__12283 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12283__$1 = ((((!((map__12283 == null)))?((((map__12283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12283):map__12283);
var p__$1 = map__12283__$1;
var op = cljs.core.get.call(null,map__12283__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__12283__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__12283__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__12283__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__12283__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__12283__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.call(null,map__12283__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__12283__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
if(cljs.core.truth_(p__$1)){
var G__12285 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12285)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__12285)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12285)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("clojure.spec","&","clojure.spec/&",-770935491,null),cljs.spec.op_describe.call(null,p1),forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12285)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj.call(null,(function (){var x__7955__auto__ = rep_PLUS_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__7113__auto__ = cljs.core.seq.call(null,ks);
if(or__7113__auto__){
return or__7113__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12285)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj.call(null,(function (){var x__7955__auto__ = maybe;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","alt","cljs.spec/alt",157113396,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12285)){
var x__7955__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null):new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null));
return cljs.core._conj.call(null,(function (){var x__7955__auto____$1 = forms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto____$1);
})(),x__7955__auto__);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__12299 = input;
var x = cljs.core.nth.call(null,vec__12299,(0),null);
var input__$1 = vec__12299;
var map__12302 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12302__$1 = ((((!((map__12302 == null)))?((((map__12302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12302):map__12302);
var p__$1 = map__12302__$1;
var op = cljs.core.get.call(null,map__12302__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__12302__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__12302__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__12302__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__12302__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__12302__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__12302__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__12299,x,input__$1,map__12302,map__12302__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form__$1),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});})(vec__12299,x,input__$1,map__12302,map__12302__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__12304 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12304)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__12304)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12304)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1));
} else {
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p1));
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__4655__auto__)){
var p1__$1 = temp__4655__auto__;
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1__$1));
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12304)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__7113__auto__ = cljs.core.seq.call(null,ks);
if(or__7113__auto__){
return or__7113__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__7113__auto__ = cljs.core.seq.call(null,forms);
if(or__7113__auto__){
return or__7113__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__12305 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__12304,vec__12299,x,input__$1,map__12302,map__12302__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__12308){
var vec__12309 = p__12308;
var p__$2 = cljs.core.nth.call(null,vec__12309,(0),null);
return cljs.spec.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__12304,vec__12299,x,input__$1,map__12302,map__12302__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__12305,(0),null);
var k = cljs.core.nth.call(null,vec__12305,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__12305,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__7113__auto__ = form__$1;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})();
if((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs.spec.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12304)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (G__12304,vec__12299,x,input__$1,map__12302,map__12302__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs.spec.op_explain.call(null,(function (){var or__7113__auto__ = form__$1;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__12304,vec__12299,x,input__$1,map__12302,map__12302__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__7113__auto__ = cljs.core.seq.call(null,ks);
if(or__7113__auto__){
return or__7113__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__7113__auto__ = cljs.core.seq.call(null,forms);
if(or__7113__auto__){
return or__7113__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12304)){
return cljs.spec.op_explain.call(null,(((p1 === p2))?forms:cljs.spec.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__12318 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12318__$1 = ((((!((map__12318 == null)))?((((map__12318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12318.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12318):map__12318);
var p__$1 = map__12318__$1;
var ps = cljs.core.get.call(null,map__12318__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__12318__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__12318__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__12318__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__12318__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__12318__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__12318__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var gfn = cljs.core.get.call(null,map__12318__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",-432034727));
var id = cljs.core.get.call(null,map__12318__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var op = cljs.core.get.call(null,map__12318__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__12318,map__12318__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__12318,map__12318__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__7101__auto__ = rmap__$1;
if(cljs.core.truth_(and__7101__auto__)){
var and__7101__auto____$1 = id;
if(cljs.core.truth_(and__7101__auto____$1)){
var and__7101__auto____$2 = k;
if(cljs.core.truth_(and__7101__auto____$2)){
return cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__7101__auto____$2;
}
} else {
return and__7101__auto____$1;
}
} else {
return and__7101__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (map__12318,map__12318__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (){
return cljs.spec.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__7113__auto__ = f__$1;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return p__$2;
}
})());
});})(map__12318,map__12318__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
,null)));
} else {
return cljs.spec.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__7113__auto__ = f__$1;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__12318,map__12318__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__7113__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__7113__auto__){
return or__7113__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__7113__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__7113__auto__){
return or__7113__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__12318,map__12318__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
var or__7113__auto__ = (function (){var temp__4657__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
var G__12321 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__12321)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__12321)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
var or__7113__auto____$1 = (cljs.core.truth_(gfn)?gfn.call(null):null);
if(cljs.core.truth_(or__7113__auto____$1)){
return or__7113__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__12322 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12322)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.impl.gen.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__12322)){
var temp__4657__auto__ = cljs.spec.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12322)){
return cljs.spec.re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12322)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12322)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12322)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__4657__auto__ = cljs.spec.re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.impl.gen.fmap.call(null,((function (g,temp__4657__auto__,G__12322,or__7113__auto____$1,or__7113__auto__,map__12318,map__12318__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens){
return (function (p1__12312_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__12312_SHARP_);
});})(g,temp__4657__auto__,G__12322,or__7113__auto____$1,or__7113__auto__,map__12318,map__12318__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__12323){
while(true){
var vec__12327 = p__12323;
var seq__12328 = cljs.core.seq.call(null,vec__12327);
var first__12329 = cljs.core.first.call(null,seq__12328);
var seq__12328__$1 = cljs.core.next.call(null,seq__12328);
var x = first__12329;
var xs = seq__12328__$1;
var data = vec__12327;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p,x);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__12330 = dp;
var G__12331 = xs;
p = G__12330;
p__12323 = G__12331;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__12345 = input;
var vec__12346 = G__12345;
var seq__12347 = cljs.core.seq.call(null,vec__12346);
var first__12348 = cljs.core.first.call(null,seq__12347);
var seq__12347__$1 = cljs.core.next.call(null,seq__12347);
var x = first__12348;
var xs = seq__12347__$1;
var data = vec__12346;
var i = (0);
var p__$1 = p;
var G__12345__$1 = G__12345;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__12349 = G__12345__$1;
var seq__12350 = cljs.core.seq.call(null,vec__12349);
var first__12351 = cljs.core.first.call(null,seq__12350);
var seq__12350__$1 = cljs.core.next.call(null,seq__12350);
var x__$1 = first__12351;
var xs__$1 = seq__12350__$1;
var data__$1 = vec__12349;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__12352 = dp;
var G__12353 = xs__$1;
var G__12354 = (i__$2 + (1));
p__$1 = G__12352;
G__12345__$1 = G__12353;
i__$1 = G__12354;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p__$2))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649))){
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,re)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
} else {
var or__7113__auto__ = cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,p__$2)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec12358 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12358 = (function (re,gfn,meta12359){
this.re = re;
this.gfn = gfn;
this.meta12359 = meta12359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12360,meta12359__$1){
var self__ = this;
var _12360__$1 = this;
return (new cljs.spec.t_cljs$spec12358(self__.re,self__.gfn,meta12359__$1));
});

cljs.spec.t_cljs$spec12358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12360){
var self__ = this;
var _12360__$1 = this;
return self__.meta12359;
});

cljs.spec.t_cljs$spec12358.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12358.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec12358.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec12358.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12358.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});

cljs.spec.t_cljs$spec12358.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_unform.call(null,self__.re,x);
});

cljs.spec.t_cljs$spec12358.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,self__.re)),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

cljs.spec.t_cljs$spec12358.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.op_describe.call(null,self__.re));
}
});

cljs.spec.t_cljs$spec12358.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.t_cljs$spec12358.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe.call(null,self__.re);
});

cljs.spec.t_cljs$spec12358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta12359","meta12359",-661143310,null)], null);
});

cljs.spec.t_cljs$spec12358.cljs$lang$type = true;

cljs.spec.t_cljs$spec12358.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12358";

cljs.spec.t_cljs$spec12358.cljs$lang$ctorPrWriter = (function (this__7724__auto__,writer__7725__auto__,opt__7726__auto__){
return cljs.core._write.call(null,writer__7725__auto__,"cljs.spec/t_cljs$spec12358");
});

cljs.spec.__GT_t_cljs$spec12358 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec12358(re__$1,gfn__$1,meta12359){
return (new cljs.spec.t_cljs$spec12358(re__$1,gfn__$1,meta12359));
});

}

return (new cljs.spec.t_cljs$spec12358(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cargs))){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__7101__auto__ = cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cret));
if(and__7101__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.pvalid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__7101__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__12361_SHARP_){
return cljs.spec.call_valid_QMARK_.call(null,f,specs,p1__12361_SHARP_);
});})(g))
);
var ret = cljs.spec.impl.gen.quick_check.call(null,iters,prop);
var temp__4655__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__12365 = temp__4655__auto__;
var smallest = cljs.core.nth.call(null,vec__12365,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.t_cljs$spec12374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.t_cljs$spec12374 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta12375){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta12375 = meta12375;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_12376,meta12375__$1){
var self__ = this;
var _12376__$1 = this;
return (new cljs.spec.t_cljs$spec12374(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta12375__$1));
});})(specs))
;

cljs.spec.t_cljs$spec12374.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_12376){
var self__ = this;
var _12376__$1 = this;
return self__.meta12375;
});})(specs))
;

cljs.spec.t_cljs$spec12374.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

cljs.spec.t_cljs$spec12374.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;

cljs.spec.t_cljs$spec12374.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12374.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (specs){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.t_cljs$spec12374.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (specs){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.t_cljs$spec12374.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12374.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.validate_fn.call(null,f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(specs))
;

cljs.spec.t_cljs$spec12374.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.t_cljs$spec12374.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e12377){if((e12377 instanceof Error)){
var t = e12377;
return t;
} else {
throw e12377;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var cret = cljs.spec.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cret))){
return cljs.spec.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform.call(null,self__.argspec,args);
return cljs.spec.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(specs))
;

cljs.spec.t_cljs$spec12374.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.return$.call(null,((function (___$3,specs){
return (function() { 
var G__12380__delegate = function (args){
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8107__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_12378_12381 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_12379_12382 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_12378_12381,_STAR_print_fn_STAR_12379_12382,sb__8107__auto__,___$3,specs){
return (function (x__8108__auto__){
return sb__8107__auto__.append(x__8108__auto__);
});})(_STAR_print_newline_STAR_12378_12381,_STAR_print_fn_STAR_12379_12382,sb__8107__auto__,___$3,specs))
;

try{cljs.spec.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12379_12382;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_12378_12381;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8107__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(pvalid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate.call(null,cljs.spec.gen.call(null,self__.retspec,overrides));
};
var G__12380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12383__i = 0, G__12383__a = new Array(arguments.length -  0);
while (G__12383__i < G__12383__a.length) {G__12383__a[G__12383__i] = arguments[G__12383__i + 0]; ++G__12383__i;}
  args = new cljs.core.IndexedSeq(G__12383__a,0);
} 
return G__12380__delegate.call(this,args);};
G__12380.cljs$lang$maxFixedArity = 0;
G__12380.cljs$lang$applyTo = (function (arglist__12384){
var args = cljs.core.seq(arglist__12384);
return G__12380__delegate(args);
});
G__12380.cljs$core$IFn$_invoke$arity$variadic = G__12380__delegate;
return G__12380;
})()
;})(___$3,specs))
);
}
});})(specs))
;

cljs.spec.t_cljs$spec12374.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.t_cljs$spec12374.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",1315556576)),(function (){var x__7955__auto__ = self__.aform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ret","ret",-468222814)),(function (){var x__7955__auto__ = self__.rform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204)),(function (){var x__7955__auto__ = self__.fform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
});})(specs))
;

cljs.spec.t_cljs$spec12374.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta12375","meta12375",1572606168,null)], null);
});})(specs))
;

cljs.spec.t_cljs$spec12374.cljs$lang$type = true;

cljs.spec.t_cljs$spec12374.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12374";

cljs.spec.t_cljs$spec12374.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__7724__auto__,writer__7725__auto__,opt__7726__auto__){
return cljs.core._write.call(null,writer__7725__auto__,"cljs.spec/t_cljs$spec12374");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec12374 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec12374(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta12375){
return (new cljs.spec.t_cljs$spec12374(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta12375));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec12374(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","kvs->map","cljs.spec/kvs->map",-1189105441),cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__12385#","p1__12385#",-1213178128,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__12385#","p1__12385#",-1213178128,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__12385#","p1__12385#",-1213178128,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__12386#","p1__12386#",-1681490545,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__12386#","p1__12386#",-1681490545,null)))),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__12385#","p1__12385#",-1213178128,null)], null),cljs.core.list(new cljs.core.Symbol(null,"zipmap","zipmap",-690049687,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__12385#","p1__12385#",-1213178128,null)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__12385#","p1__12385#",-1213178128,null)))),(function (p1__12385_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),p1__12385_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),p1__12385_SHARP_));
}),null,true,(function (p1__12386_SHARP_){
return cljs.core.map.call(null,(function (p__12387){
var vec__12388 = p__12387;
var k = cljs.core.nth.call(null,vec__12388,(0),null);
var v = cljs.core.nth.call(null,vec__12388,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),k,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),v], null);
}),p1__12386_SHARP_);
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.nonconforming = (function cljs$spec$nonconforming(spec){
var spec__$1 = cljs.spec.specize.call(null,spec);
if(typeof cljs.spec.t_cljs$spec12394 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12394 = (function (spec,meta12395){
this.spec = spec;
this.meta12395 = meta12395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_12396,meta12395__$1){
var self__ = this;
var _12396__$1 = this;
return (new cljs.spec.t_cljs$spec12394(self__.spec,meta12395__$1));
});})(spec__$1))
;

cljs.spec.t_cljs$spec12394.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_12396){
var self__ = this;
var _12396__$1 = this;
return self__.meta12395;
});})(spec__$1))
;

cljs.spec.t_cljs$spec12394.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12394.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.t_cljs$spec12394.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.t_cljs$spec12394.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12394.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = cljs.spec.conform_STAR_.call(null,self__.spec,x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return x;
}
});})(spec__$1))
;

cljs.spec.t_cljs$spec12394.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.unform_STAR_.call(null,self__.spec,x);
});})(spec__$1))
;

cljs.spec.t_cljs$spec12394.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_STAR_.call(null,self__.spec,path,via,in$,x);
});})(spec__$1))
;

cljs.spec.t_cljs$spec12394.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.gen_STAR_.call(null,self__.spec,overrides,path,rmap);
});})(spec__$1))
;

cljs.spec.t_cljs$spec12394.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
return (function (_,gfn){
var self__ = this;
var ___$1 = this;
return cljs.spec.nonconforming.call(null,cljs.spec.with_gen_STAR_.call(null,self__.spec,gfn));
});})(spec__$1))
;

cljs.spec.t_cljs$spec12394.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","nonconforming","cljs.spec/nonconforming",1245350756,null)),(function (){var x__7955__auto__ = cljs.spec.describe_STAR_.call(null,self__.spec);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
});})(spec__$1))
;

cljs.spec.t_cljs$spec12394.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta12395","meta12395",-738890392,null)], null);
});})(spec__$1))
;

cljs.spec.t_cljs$spec12394.cljs$lang$type = true;

cljs.spec.t_cljs$spec12394.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12394";

cljs.spec.t_cljs$spec12394.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__7724__auto__,writer__7725__auto__,opt__7726__auto__){
return cljs.core._write.call(null,writer__7725__auto__,"cljs.spec/t_cljs$spec12394");
});})(spec__$1))
;

cljs.spec.__GT_t_cljs$spec12394 = ((function (spec__$1){
return (function cljs$spec$nonconforming_$___GT_t_cljs$spec12394(spec__$2,meta12395){
return (new cljs.spec.t_cljs$spec12394(spec__$2,meta12395));
});})(spec__$1))
;

}

return (new cljs.spec.t_cljs$spec12394(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.nilable_impl = (function cljs$spec$nilable_impl(form,pred,gfn){
var spec = cljs.spec.specize.call(null,pred,form);
if(typeof cljs.spec.t_cljs$spec12400 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12400 = (function (form,pred,gfn,spec,meta12401){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
this.meta12401 = meta12401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_12402,meta12401__$1){
var self__ = this;
var _12402__$1 = this;
return (new cljs.spec.t_cljs$spec12400(self__.form,self__.pred,self__.gfn,self__.spec,meta12401__$1));
});})(spec))
;

cljs.spec.t_cljs$spec12400.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_12402){
var self__ = this;
var _12402__$1 = this;
return self__.meta12401;
});})(spec))
;

cljs.spec.t_cljs$spec12400.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12400.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (spec){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.t_cljs$spec12400.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (spec){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.t_cljs$spec12400.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12400.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.conform_STAR_.call(null,self__.spec,x);
}
});})(spec))
;

cljs.spec.t_cljs$spec12400.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.unform_STAR_.call(null,self__.spec,x);
}
});})(spec))
;

cljs.spec.t_cljs$spec12400.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (spec){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var or__7113__auto__ = cljs.spec.pvalid_QMARK_.call(null,self__.spec,x);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return (x == null);
}
})())){
return null;
} else {
return cljs.core.conj.call(null,cljs.spec.explain_1.call(null,self__.form,self__.pred,cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec","pred","cljs.spec/pred",1523333614)),via,in$,x),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
}
});})(spec))
;

cljs.spec.t_cljs$spec12400.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (spec){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.impl.gen.return$.call(null,null);
});})(___$1,spec))
,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.gensub.call(null,self__.pred,overrides,cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec","pred","cljs.spec/pred",1523333614)),rmap,self__.form);
});})(___$1,spec))
,null)))], null)], null));
}
});})(spec))
;

cljs.spec.t_cljs$spec12400.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (spec){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.nilable_impl.call(null,self__.form,self__.pred,gfn__$1);
});})(spec))
;

cljs.spec.t_cljs$spec12400.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (spec){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","nilable","cljs.spec/nilable",-139722052,null)),(function (){var x__7955__auto__ = cljs.spec.describe_STAR_.call(null,self__.spec);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7955__auto__);
})())));
});})(spec))
;

cljs.spec.t_cljs$spec12400.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta12401","meta12401",225204801,null)], null);
});})(spec))
;

cljs.spec.t_cljs$spec12400.cljs$lang$type = true;

cljs.spec.t_cljs$spec12400.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12400";

cljs.spec.t_cljs$spec12400.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__7724__auto__,writer__7725__auto__,opt__7726__auto__){
return cljs.core._write.call(null,writer__7725__auto__,"cljs.spec/t_cljs$spec12400");
});})(spec))
;

cljs.spec.__GT_t_cljs$spec12400 = ((function (spec){
return (function cljs$spec$nilable_impl_$___GT_t_cljs$spec12400(form__$1,pred__$1,gfn__$1,spec__$1,meta12401){
return (new cljs.spec.t_cljs$spec12400(form__$1,pred__$1,gfn__$1,spec__$1,meta12401));
});})(spec))
;

}

return (new cljs.spec.t_cljs$spec12400(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args12404 = [];
var len__8226__auto___12407 = arguments.length;
var i__8227__auto___12408 = (0);
while(true){
if((i__8227__auto___12408 < len__8226__auto___12407)){
args12404.push((arguments[i__8227__auto___12408]));

var G__12409 = (i__8227__auto___12408 + (1));
i__8227__auto___12408 = G__12409;
continue;
} else {
}
break;
}

var G__12406 = args12404.length;
switch (G__12406) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12404.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.call(null,spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.call(null,spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__12403_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__12403_SHARP_,cljs.spec.conform.call(null,spec,p1__12403_SHARP_)],null));
}),cljs.spec.impl.gen.sample.call(null,cljs.spec.gen.call(null,spec,overrides),n));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.inst_in_range_QMARK_ = (function cljs$spec$inst_in_range_QMARK_(start,end,inst){
var and__7101__auto__ = cljs.core.inst_QMARK_.call(null,inst);
if(and__7101__auto__){
var t = cljs.core.inst_ms.call(null,inst);
return ((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end)));
} else {
return and__7101__auto__;
}
});
/**
 * Return true if start <= val and val < end
 */
cljs.spec.int_in_range_QMARK_ = (function cljs$spec$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__7101__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__7101__auto__)){
return val.lessThan(end);
} else {
return and__7101__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__7101__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__7101__auto__)){
return val.lessThan(end);
} else {
return and__7101__auto__;
}
} else {
return false;

}
}
}
});
if(typeof cljs.spec._STAR_compile_asserts_STAR_ !== 'undefined'){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec._STAR_compile_asserts_STAR_ = true;
}
if(typeof cljs.spec._STAR_runtime_asserts_STAR_ !== 'undefined'){
} else {
cljs.spec._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.check_asserts_QMARK_ = (function cljs$spec$check_asserts_QMARK_(){
return cljs.spec._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.check_asserts = (function cljs$spec$check_asserts(flag){
return cljs.spec._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.assert_STAR_ = (function cljs$spec$assert_STAR_(spec,x){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec,x))){
return x;
} else {
var ed = cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),new cljs.core.Keyword("cljs.spec","failure","cljs.spec/failure",1931120592),new cljs.core.Keyword(null,"assertion-failed","assertion-failed",-970534477)));
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Spec assertion failed\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8107__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_12413_12415 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_12414_12416 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_12413_12415,_STAR_print_fn_STAR_12414_12416,sb__8107__auto__,ed){
return (function (x__8108__auto__){
return sb__8107__auto__.append(x__8108__auto__);
});})(_STAR_print_newline_STAR_12413_12415,_STAR_print_fn_STAR_12414_12416,sb__8107__auto__,ed))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12414_12416;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_12413_12415;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8107__auto__)].join('');
})())].join('')));
}
});

//# sourceMappingURL=spec.js.map