// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12076){
var map__12101 = p__12076;
var map__12101__$1 = ((((!((map__12101 == null)))?((((map__12101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12101):map__12101);
var m = map__12101__$1;
var n = cljs.core.get.call(null,map__12101__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12101__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__12103_12125 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12104_12126 = null;
var count__12105_12127 = (0);
var i__12106_12128 = (0);
while(true){
if((i__12106_12128 < count__12105_12127)){
var f_12129 = cljs.core._nth.call(null,chunk__12104_12126,i__12106_12128);
cljs.core.println.call(null,"  ",f_12129);

var G__12130 = seq__12103_12125;
var G__12131 = chunk__12104_12126;
var G__12132 = count__12105_12127;
var G__12133 = (i__12106_12128 + (1));
seq__12103_12125 = G__12130;
chunk__12104_12126 = G__12131;
count__12105_12127 = G__12132;
i__12106_12128 = G__12133;
continue;
} else {
var temp__4657__auto___12134 = cljs.core.seq.call(null,seq__12103_12125);
if(temp__4657__auto___12134){
var seq__12103_12135__$1 = temp__4657__auto___12134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12103_12135__$1)){
var c__10642__auto___12136 = cljs.core.chunk_first.call(null,seq__12103_12135__$1);
var G__12137 = cljs.core.chunk_rest.call(null,seq__12103_12135__$1);
var G__12138 = c__10642__auto___12136;
var G__12139 = cljs.core.count.call(null,c__10642__auto___12136);
var G__12140 = (0);
seq__12103_12125 = G__12137;
chunk__12104_12126 = G__12138;
count__12105_12127 = G__12139;
i__12106_12128 = G__12140;
continue;
} else {
var f_12141 = cljs.core.first.call(null,seq__12103_12135__$1);
cljs.core.println.call(null,"  ",f_12141);

var G__12142 = cljs.core.next.call(null,seq__12103_12135__$1);
var G__12143 = null;
var G__12144 = (0);
var G__12145 = (0);
seq__12103_12125 = G__12142;
chunk__12104_12126 = G__12143;
count__12105_12127 = G__12144;
i__12106_12128 = G__12145;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12146 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__9823__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__9823__auto__)){
return or__9823__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12146);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12146)))?cljs.core.second.call(null,arglists_12146):arglists_12146));
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
var seq__12107_12147 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12108_12148 = null;
var count__12109_12149 = (0);
var i__12110_12150 = (0);
while(true){
if((i__12110_12150 < count__12109_12149)){
var vec__12111_12151 = cljs.core._nth.call(null,chunk__12108_12148,i__12110_12150);
var name_12152 = cljs.core.nth.call(null,vec__12111_12151,(0),null);
var map__12114_12153 = cljs.core.nth.call(null,vec__12111_12151,(1),null);
var map__12114_12154__$1 = ((((!((map__12114_12153 == null)))?((((map__12114_12153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12114_12153.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12114_12153):map__12114_12153);
var doc_12155 = cljs.core.get.call(null,map__12114_12154__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12156 = cljs.core.get.call(null,map__12114_12154__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12152);

cljs.core.println.call(null," ",arglists_12156);

if(cljs.core.truth_(doc_12155)){
cljs.core.println.call(null," ",doc_12155);
} else {
}

var G__12157 = seq__12107_12147;
var G__12158 = chunk__12108_12148;
var G__12159 = count__12109_12149;
var G__12160 = (i__12110_12150 + (1));
seq__12107_12147 = G__12157;
chunk__12108_12148 = G__12158;
count__12109_12149 = G__12159;
i__12110_12150 = G__12160;
continue;
} else {
var temp__4657__auto___12161 = cljs.core.seq.call(null,seq__12107_12147);
if(temp__4657__auto___12161){
var seq__12107_12162__$1 = temp__4657__auto___12161;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12107_12162__$1)){
var c__10642__auto___12163 = cljs.core.chunk_first.call(null,seq__12107_12162__$1);
var G__12164 = cljs.core.chunk_rest.call(null,seq__12107_12162__$1);
var G__12165 = c__10642__auto___12163;
var G__12166 = cljs.core.count.call(null,c__10642__auto___12163);
var G__12167 = (0);
seq__12107_12147 = G__12164;
chunk__12108_12148 = G__12165;
count__12109_12149 = G__12166;
i__12110_12150 = G__12167;
continue;
} else {
var vec__12116_12168 = cljs.core.first.call(null,seq__12107_12162__$1);
var name_12169 = cljs.core.nth.call(null,vec__12116_12168,(0),null);
var map__12119_12170 = cljs.core.nth.call(null,vec__12116_12168,(1),null);
var map__12119_12171__$1 = ((((!((map__12119_12170 == null)))?((((map__12119_12170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12119_12170.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12119_12170):map__12119_12170);
var doc_12172 = cljs.core.get.call(null,map__12119_12171__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12173 = cljs.core.get.call(null,map__12119_12171__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12169);

cljs.core.println.call(null," ",arglists_12173);

if(cljs.core.truth_(doc_12172)){
cljs.core.println.call(null," ",doc_12172);
} else {
}

var G__12174 = cljs.core.next.call(null,seq__12107_12162__$1);
var G__12175 = null;
var G__12176 = (0);
var G__12177 = (0);
seq__12107_12147 = G__12174;
chunk__12108_12148 = G__12175;
count__12109_12149 = G__12176;
i__12110_12150 = G__12177;
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

var seq__12121 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12122 = null;
var count__12123 = (0);
var i__12124 = (0);
while(true){
if((i__12124 < count__12123)){
var role = cljs.core._nth.call(null,chunk__12122,i__12124);
var temp__4657__auto___12178__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12178__$1)){
var spec_12179 = temp__4657__auto___12178__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_12179));
} else {
}

var G__12180 = seq__12121;
var G__12181 = chunk__12122;
var G__12182 = count__12123;
var G__12183 = (i__12124 + (1));
seq__12121 = G__12180;
chunk__12122 = G__12181;
count__12123 = G__12182;
i__12124 = G__12183;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__12121);
if(temp__4657__auto____$1){
var seq__12121__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12121__$1)){
var c__10642__auto__ = cljs.core.chunk_first.call(null,seq__12121__$1);
var G__12184 = cljs.core.chunk_rest.call(null,seq__12121__$1);
var G__12185 = c__10642__auto__;
var G__12186 = cljs.core.count.call(null,c__10642__auto__);
var G__12187 = (0);
seq__12121 = G__12184;
chunk__12122 = G__12185;
count__12123 = G__12186;
i__12124 = G__12187;
continue;
} else {
var role = cljs.core.first.call(null,seq__12121__$1);
var temp__4657__auto___12188__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12188__$2)){
var spec_12189 = temp__4657__auto___12188__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_12189));
} else {
}

var G__12190 = cljs.core.next.call(null,seq__12121__$1);
var G__12191 = null;
var G__12192 = (0);
var G__12193 = (0);
seq__12121 = G__12190;
chunk__12122 = G__12191;
count__12123 = G__12192;
i__12124 = G__12193;
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