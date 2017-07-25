// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__10766){
var map__10791 = p__10766;
var map__10791__$1 = ((((!((map__10791 == null)))?((((map__10791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10791):map__10791);
var m = map__10791__$1;
var n = cljs.core.get.call(null,map__10791__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__10791__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__10793_10815 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10794_10816 = null;
var count__10795_10817 = (0);
var i__10796_10818 = (0);
while(true){
if((i__10796_10818 < count__10795_10817)){
var f_10819 = cljs.core._nth.call(null,chunk__10794_10816,i__10796_10818);
cljs.core.println.call(null,"  ",f_10819);

var G__10820 = seq__10793_10815;
var G__10821 = chunk__10794_10816;
var G__10822 = count__10795_10817;
var G__10823 = (i__10796_10818 + (1));
seq__10793_10815 = G__10820;
chunk__10794_10816 = G__10821;
count__10795_10817 = G__10822;
i__10796_10818 = G__10823;
continue;
} else {
var temp__4657__auto___10824 = cljs.core.seq.call(null,seq__10793_10815);
if(temp__4657__auto___10824){
var seq__10793_10825__$1 = temp__4657__auto___10824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10793_10825__$1)){
var c__7932__auto___10826 = cljs.core.chunk_first.call(null,seq__10793_10825__$1);
var G__10827 = cljs.core.chunk_rest.call(null,seq__10793_10825__$1);
var G__10828 = c__7932__auto___10826;
var G__10829 = cljs.core.count.call(null,c__7932__auto___10826);
var G__10830 = (0);
seq__10793_10815 = G__10827;
chunk__10794_10816 = G__10828;
count__10795_10817 = G__10829;
i__10796_10818 = G__10830;
continue;
} else {
var f_10831 = cljs.core.first.call(null,seq__10793_10825__$1);
cljs.core.println.call(null,"  ",f_10831);

var G__10832 = cljs.core.next.call(null,seq__10793_10825__$1);
var G__10833 = null;
var G__10834 = (0);
var G__10835 = (0);
seq__10793_10815 = G__10832;
chunk__10794_10816 = G__10833;
count__10795_10817 = G__10834;
i__10796_10818 = G__10835;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_10836 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7113__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_10836);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_10836)))?cljs.core.second.call(null,arglists_10836):arglists_10836));
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
var seq__10797_10837 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10798_10838 = null;
var count__10799_10839 = (0);
var i__10800_10840 = (0);
while(true){
if((i__10800_10840 < count__10799_10839)){
var vec__10801_10841 = cljs.core._nth.call(null,chunk__10798_10838,i__10800_10840);
var name_10842 = cljs.core.nth.call(null,vec__10801_10841,(0),null);
var map__10804_10843 = cljs.core.nth.call(null,vec__10801_10841,(1),null);
var map__10804_10844__$1 = ((((!((map__10804_10843 == null)))?((((map__10804_10843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10804_10843.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10804_10843):map__10804_10843);
var doc_10845 = cljs.core.get.call(null,map__10804_10844__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10846 = cljs.core.get.call(null,map__10804_10844__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10842);

cljs.core.println.call(null," ",arglists_10846);

if(cljs.core.truth_(doc_10845)){
cljs.core.println.call(null," ",doc_10845);
} else {
}

var G__10847 = seq__10797_10837;
var G__10848 = chunk__10798_10838;
var G__10849 = count__10799_10839;
var G__10850 = (i__10800_10840 + (1));
seq__10797_10837 = G__10847;
chunk__10798_10838 = G__10848;
count__10799_10839 = G__10849;
i__10800_10840 = G__10850;
continue;
} else {
var temp__4657__auto___10851 = cljs.core.seq.call(null,seq__10797_10837);
if(temp__4657__auto___10851){
var seq__10797_10852__$1 = temp__4657__auto___10851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10797_10852__$1)){
var c__7932__auto___10853 = cljs.core.chunk_first.call(null,seq__10797_10852__$1);
var G__10854 = cljs.core.chunk_rest.call(null,seq__10797_10852__$1);
var G__10855 = c__7932__auto___10853;
var G__10856 = cljs.core.count.call(null,c__7932__auto___10853);
var G__10857 = (0);
seq__10797_10837 = G__10854;
chunk__10798_10838 = G__10855;
count__10799_10839 = G__10856;
i__10800_10840 = G__10857;
continue;
} else {
var vec__10806_10858 = cljs.core.first.call(null,seq__10797_10852__$1);
var name_10859 = cljs.core.nth.call(null,vec__10806_10858,(0),null);
var map__10809_10860 = cljs.core.nth.call(null,vec__10806_10858,(1),null);
var map__10809_10861__$1 = ((((!((map__10809_10860 == null)))?((((map__10809_10860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10809_10860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10809_10860):map__10809_10860);
var doc_10862 = cljs.core.get.call(null,map__10809_10861__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10863 = cljs.core.get.call(null,map__10809_10861__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10859);

cljs.core.println.call(null," ",arglists_10863);

if(cljs.core.truth_(doc_10862)){
cljs.core.println.call(null," ",doc_10862);
} else {
}

var G__10864 = cljs.core.next.call(null,seq__10797_10852__$1);
var G__10865 = null;
var G__10866 = (0);
var G__10867 = (0);
seq__10797_10837 = G__10864;
chunk__10798_10838 = G__10865;
count__10799_10839 = G__10866;
i__10800_10840 = G__10867;
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

var seq__10811 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__10812 = null;
var count__10813 = (0);
var i__10814 = (0);
while(true){
if((i__10814 < count__10813)){
var role = cljs.core._nth.call(null,chunk__10812,i__10814);
var temp__4657__auto___10868__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___10868__$1)){
var spec_10869 = temp__4657__auto___10868__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_10869));
} else {
}

var G__10870 = seq__10811;
var G__10871 = chunk__10812;
var G__10872 = count__10813;
var G__10873 = (i__10814 + (1));
seq__10811 = G__10870;
chunk__10812 = G__10871;
count__10813 = G__10872;
i__10814 = G__10873;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__10811);
if(temp__4657__auto____$1){
var seq__10811__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10811__$1)){
var c__7932__auto__ = cljs.core.chunk_first.call(null,seq__10811__$1);
var G__10874 = cljs.core.chunk_rest.call(null,seq__10811__$1);
var G__10875 = c__7932__auto__;
var G__10876 = cljs.core.count.call(null,c__7932__auto__);
var G__10877 = (0);
seq__10811 = G__10874;
chunk__10812 = G__10875;
count__10813 = G__10876;
i__10814 = G__10877;
continue;
} else {
var role = cljs.core.first.call(null,seq__10811__$1);
var temp__4657__auto___10878__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___10878__$2)){
var spec_10879 = temp__4657__auto___10878__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_10879));
} else {
}

var G__10880 = cljs.core.next.call(null,seq__10811__$1);
var G__10881 = null;
var G__10882 = (0);
var G__10883 = (0);
seq__10811 = G__10880;
chunk__10812 = G__10881;
count__10813 = G__10882;
i__10814 = G__10883;
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