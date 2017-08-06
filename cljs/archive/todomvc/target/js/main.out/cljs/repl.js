// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13016){
var map__13041 = p__13016;
var map__13041__$1 = ((((!((map__13041 == null)))?((((map__13041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13041):map__13041);
var m = map__13041__$1;
var n = cljs.core.get.call(null,map__13041__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__13041__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13043_13065 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13044_13066 = null;
var count__13045_13067 = (0);
var i__13046_13068 = (0);
while(true){
if((i__13046_13068 < count__13045_13067)){
var f_13069 = cljs.core._nth.call(null,chunk__13044_13066,i__13046_13068);
cljs.core.println.call(null,"  ",f_13069);

var G__13070 = seq__13043_13065;
var G__13071 = chunk__13044_13066;
var G__13072 = count__13045_13067;
var G__13073 = (i__13046_13068 + (1));
seq__13043_13065 = G__13070;
chunk__13044_13066 = G__13071;
count__13045_13067 = G__13072;
i__13046_13068 = G__13073;
continue;
} else {
var temp__4657__auto___13074 = cljs.core.seq.call(null,seq__13043_13065);
if(temp__4657__auto___13074){
var seq__13043_13075__$1 = temp__4657__auto___13074;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13043_13075__$1)){
var c__7932__auto___13076 = cljs.core.chunk_first.call(null,seq__13043_13075__$1);
var G__13077 = cljs.core.chunk_rest.call(null,seq__13043_13075__$1);
var G__13078 = c__7932__auto___13076;
var G__13079 = cljs.core.count.call(null,c__7932__auto___13076);
var G__13080 = (0);
seq__13043_13065 = G__13077;
chunk__13044_13066 = G__13078;
count__13045_13067 = G__13079;
i__13046_13068 = G__13080;
continue;
} else {
var f_13081 = cljs.core.first.call(null,seq__13043_13075__$1);
cljs.core.println.call(null,"  ",f_13081);

var G__13082 = cljs.core.next.call(null,seq__13043_13075__$1);
var G__13083 = null;
var G__13084 = (0);
var G__13085 = (0);
seq__13043_13065 = G__13082;
chunk__13044_13066 = G__13083;
count__13045_13067 = G__13084;
i__13046_13068 = G__13085;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13086 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7113__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13086);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13086)))?cljs.core.second.call(null,arglists_13086):arglists_13086));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13047_13087 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13048_13088 = null;
var count__13049_13089 = (0);
var i__13050_13090 = (0);
while(true){
if((i__13050_13090 < count__13049_13089)){
var vec__13051_13091 = cljs.core._nth.call(null,chunk__13048_13088,i__13050_13090);
var name_13092 = cljs.core.nth.call(null,vec__13051_13091,(0),null);
var map__13054_13093 = cljs.core.nth.call(null,vec__13051_13091,(1),null);
var map__13054_13094__$1 = ((((!((map__13054_13093 == null)))?((((map__13054_13093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13054_13093.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13054_13093):map__13054_13093);
var doc_13095 = cljs.core.get.call(null,map__13054_13094__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13096 = cljs.core.get.call(null,map__13054_13094__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13092);

cljs.core.println.call(null," ",arglists_13096);

if(cljs.core.truth_(doc_13095)){
cljs.core.println.call(null," ",doc_13095);
} else {
}

var G__13097 = seq__13047_13087;
var G__13098 = chunk__13048_13088;
var G__13099 = count__13049_13089;
var G__13100 = (i__13050_13090 + (1));
seq__13047_13087 = G__13097;
chunk__13048_13088 = G__13098;
count__13049_13089 = G__13099;
i__13050_13090 = G__13100;
continue;
} else {
var temp__4657__auto___13101 = cljs.core.seq.call(null,seq__13047_13087);
if(temp__4657__auto___13101){
var seq__13047_13102__$1 = temp__4657__auto___13101;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13047_13102__$1)){
var c__7932__auto___13103 = cljs.core.chunk_first.call(null,seq__13047_13102__$1);
var G__13104 = cljs.core.chunk_rest.call(null,seq__13047_13102__$1);
var G__13105 = c__7932__auto___13103;
var G__13106 = cljs.core.count.call(null,c__7932__auto___13103);
var G__13107 = (0);
seq__13047_13087 = G__13104;
chunk__13048_13088 = G__13105;
count__13049_13089 = G__13106;
i__13050_13090 = G__13107;
continue;
} else {
var vec__13056_13108 = cljs.core.first.call(null,seq__13047_13102__$1);
var name_13109 = cljs.core.nth.call(null,vec__13056_13108,(0),null);
var map__13059_13110 = cljs.core.nth.call(null,vec__13056_13108,(1),null);
var map__13059_13111__$1 = ((((!((map__13059_13110 == null)))?((((map__13059_13110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13059_13110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13059_13110):map__13059_13110);
var doc_13112 = cljs.core.get.call(null,map__13059_13111__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13113 = cljs.core.get.call(null,map__13059_13111__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13109);

cljs.core.println.call(null," ",arglists_13113);

if(cljs.core.truth_(doc_13112)){
cljs.core.println.call(null," ",doc_13112);
} else {
}

var G__13114 = cljs.core.next.call(null,seq__13047_13102__$1);
var G__13115 = null;
var G__13116 = (0);
var G__13117 = (0);
seq__13047_13087 = G__13114;
chunk__13048_13088 = G__13115;
count__13049_13089 = G__13116;
i__13050_13090 = G__13117;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__13061 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__13062 = null;
var count__13063 = (0);
var i__13064 = (0);
while(true){
if((i__13064 < count__13063)){
var role = cljs.core._nth.call(null,chunk__13062,i__13064);
var temp__4657__auto___13118__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___13118__$1)){
var spec_13119 = temp__4657__auto___13118__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_13119));
} else {
}

var G__13120 = seq__13061;
var G__13121 = chunk__13062;
var G__13122 = count__13063;
var G__13123 = (i__13064 + (1));
seq__13061 = G__13120;
chunk__13062 = G__13121;
count__13063 = G__13122;
i__13064 = G__13123;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__13061);
if(temp__4657__auto____$1){
var seq__13061__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13061__$1)){
var c__7932__auto__ = cljs.core.chunk_first.call(null,seq__13061__$1);
var G__13124 = cljs.core.chunk_rest.call(null,seq__13061__$1);
var G__13125 = c__7932__auto__;
var G__13126 = cljs.core.count.call(null,c__7932__auto__);
var G__13127 = (0);
seq__13061 = G__13124;
chunk__13062 = G__13125;
count__13063 = G__13126;
i__13064 = G__13127;
continue;
} else {
var role = cljs.core.first.call(null,seq__13061__$1);
var temp__4657__auto___13128__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___13128__$2)){
var spec_13129 = temp__4657__auto___13128__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_13129));
} else {
}

var G__13130 = cljs.core.next.call(null,seq__13061__$1);
var G__13131 = null;
var G__13132 = (0);
var G__13133 = (0);
seq__13061 = G__13130;
chunk__13062 = G__13131;
count__13063 = G__13132;
i__13064 = G__13133;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map