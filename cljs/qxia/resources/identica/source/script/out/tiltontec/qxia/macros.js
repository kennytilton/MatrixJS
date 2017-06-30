// Compiled by ClojureScript 1.9.36 {}
goog.provide('tiltontec.qxia.macros');
goog.require('cljs.core');
tiltontec.qxia.macros.hbox = (function tiltontec$qxia$macros$hbox(var_args){
var args__7292__auto__ = [];
var len__7285__auto___41122 = arguments.length;
var i__7286__auto___41123 = (0);
while(true){
if((i__7286__auto___41123 < len__7285__auto___41122)){
args__7292__auto__.push((arguments[i__7286__auto___41123]));

var G__41124 = (i__7286__auto___41123 + (1));
i__7286__auto___41123 = G__41124;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.qxia.macros.hbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.hbox.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__41118,kids){
var vec__41119 = p__41118;
var seq__41120 = cljs.core.seq.call(null,vec__41119);
var hbox_args = seq__41120;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"layout","layout",-2120940921)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.layout.HBox","js/qx.ui.mobile.layout.HBox",499740199,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),hbox_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.hbox.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.hbox.cljs$lang$applyTo = (function (seq41114){
var G__41115 = cljs.core.first.call(null,seq41114);
var seq41114__$1 = cljs.core.next.call(null,seq41114);
var G__41116 = cljs.core.first.call(null,seq41114__$1);
var seq41114__$2 = cljs.core.next.call(null,seq41114__$1);
var G__41117 = cljs.core.first.call(null,seq41114__$2);
var seq41114__$3 = cljs.core.next.call(null,seq41114__$2);
return tiltontec.qxia.macros.hbox.cljs$core$IFn$_invoke$arity$variadic(G__41115,G__41116,G__41117,seq41114__$3);
});


tiltontec.qxia.macros.hbox.cljs$lang$macro = true;
tiltontec.qxia.macros.vbox = (function tiltontec$qxia$macros$vbox(var_args){
var args__7292__auto__ = [];
var len__7285__auto___41133 = arguments.length;
var i__7286__auto___41134 = (0);
while(true){
if((i__7286__auto___41134 < len__7285__auto___41133)){
args__7292__auto__.push((arguments[i__7286__auto___41134]));

var G__41135 = (i__7286__auto___41134 + (1));
i__7286__auto___41134 = G__41135;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.qxia.macros.vbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.vbox.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__41129,kids){
var vec__41130 = p__41129;
var seq__41131 = cljs.core.seq.call(null,vec__41130);
var hbox_args = seq__41131;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"layout","layout",-2120940921)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.layout.VBox","js/qx.ui.mobile.layout.VBox",-1527506437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),hbox_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.vbox.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.vbox.cljs$lang$applyTo = (function (seq41125){
var G__41126 = cljs.core.first.call(null,seq41125);
var seq41125__$1 = cljs.core.next.call(null,seq41125);
var G__41127 = cljs.core.first.call(null,seq41125__$1);
var seq41125__$2 = cljs.core.next.call(null,seq41125__$1);
var G__41128 = cljs.core.first.call(null,seq41125__$2);
var seq41125__$3 = cljs.core.next.call(null,seq41125__$2);
return tiltontec.qxia.macros.vbox.cljs$core$IFn$_invoke$arity$variadic(G__41126,G__41127,G__41128,seq41125__$3);
});


tiltontec.qxia.macros.vbox.cljs$lang$macro = true;
tiltontec.qxia.macros.group = (function tiltontec$qxia$macros$group(var_args){
var args__7292__auto__ = [];
var len__7285__auto___41144 = arguments.length;
var i__7286__auto___41145 = (0);
while(true){
if((i__7286__auto___41145 < len__7285__auto___41144)){
args__7292__auto__.push((arguments[i__7286__auto___41145]));

var G__41146 = (i__7286__auto___41145 + (1));
i__7286__auto___41145 = G__41146;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.qxia.macros.group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.group.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__41140,kids){
var vec__41141 = p__41140;
var seq__41142 = cljs.core.seq.call(null,vec__41141);
var my_args = seq__41142;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Group","tiltontec.qxia.types/m.Group",1395438636)),my_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.group.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.group.cljs$lang$applyTo = (function (seq41136){
var G__41137 = cljs.core.first.call(null,seq41136);
var seq41136__$1 = cljs.core.next.call(null,seq41136);
var G__41138 = cljs.core.first.call(null,seq41136__$1);
var seq41136__$2 = cljs.core.next.call(null,seq41136__$1);
var G__41139 = cljs.core.first.call(null,seq41136__$2);
var seq41136__$3 = cljs.core.next.call(null,seq41136__$2);
return tiltontec.qxia.macros.group.cljs$core$IFn$_invoke$arity$variadic(G__41137,G__41138,G__41139,seq41136__$3);
});


tiltontec.qxia.macros.group.cljs$lang$macro = true;
tiltontec.qxia.macros.navigation_page = (function tiltontec$qxia$macros$navigation_page(var_args){
var args__7292__auto__ = [];
var len__7285__auto___41160 = arguments.length;
var i__7286__auto___41161 = (0);
while(true){
if((i__7286__auto___41161 < len__7285__auto___41160)){
args__7292__auto__.push((arguments[i__7286__auto___41161]));

var G__41162 = (i__7286__auto___41161 + (1));
i__7286__auto___41161 = G__41162;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.qxia.macros.navigation_page.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.navigation_page.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__41152,p__41153,kids){
var vec__41154 = p__41152;
var title = cljs.core.nth.call(null,vec__41154,(0),null);
var end_point = cljs.core.nth.call(null,vec__41154,(1),null);
var vec__41157 = p__41153;
var seq__41158 = cljs.core.seq.call(null,vec__41157);
var top_args = seq__41158;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-point","end-point",-1147460885)),(function (){var x__7044__auto__ = end_point;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"title","title",636505583)),(function (){var x__7044__auto__ = title;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.navigation_page.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.navigation_page.cljs$lang$applyTo = (function (seq41147){
var G__41148 = cljs.core.first.call(null,seq41147);
var seq41147__$1 = cljs.core.next.call(null,seq41147);
var G__41149 = cljs.core.first.call(null,seq41147__$1);
var seq41147__$2 = cljs.core.next.call(null,seq41147__$1);
var G__41150 = cljs.core.first.call(null,seq41147__$2);
var seq41147__$3 = cljs.core.next.call(null,seq41147__$2);
var G__41151 = cljs.core.first.call(null,seq41147__$3);
var seq41147__$4 = cljs.core.next.call(null,seq41147__$3);
return tiltontec.qxia.macros.navigation_page.cljs$core$IFn$_invoke$arity$variadic(G__41148,G__41149,G__41150,G__41151,seq41147__$4);
});


tiltontec.qxia.macros.navigation_page.cljs$lang$macro = true;
tiltontec.qxia.macros.form = (function tiltontec$qxia$macros$form(var_args){
var args__7292__auto__ = [];
var len__7285__auto___41176 = arguments.length;
var i__7286__auto___41177 = (0);
while(true){
if((i__7286__auto___41177 < len__7285__auto___41176)){
args__7292__auto__.push((arguments[i__7286__auto___41177]));

var G__41178 = (i__7286__auto___41177 + (1));
i__7286__auto___41177 = G__41178;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.qxia.macros.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.form.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__41168,p__41169,kids){
var vec__41170 = p__41168;
var seq__41171 = cljs.core.seq.call(null,vec__41170);
var top_args = seq__41171;
var vec__41173 = p__41169;
var seq__41174 = cljs.core.seq.call(null,vec__41173);
var form_args = seq__41174;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.qxia.core","qx-make","tiltontec.qxia.core/qx-make",1185324900,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Single","tiltontec.qxia.types/m.Single",-602074724)),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.qxia.core","qx-make","tiltontec.qxia.core/qx-make",1185324900,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Form","tiltontec.qxia.types/m.Form",-409217225)),form_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.form.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.form.cljs$lang$applyTo = (function (seq41163){
var G__41164 = cljs.core.first.call(null,seq41163);
var seq41163__$1 = cljs.core.next.call(null,seq41163);
var G__41165 = cljs.core.first.call(null,seq41163__$1);
var seq41163__$2 = cljs.core.next.call(null,seq41163__$1);
var G__41166 = cljs.core.first.call(null,seq41163__$2);
var seq41163__$3 = cljs.core.next.call(null,seq41163__$2);
var G__41167 = cljs.core.first.call(null,seq41163__$3);
var seq41163__$4 = cljs.core.next.call(null,seq41163__$3);
return tiltontec.qxia.macros.form.cljs$core$IFn$_invoke$arity$variadic(G__41164,G__41165,G__41166,G__41167,seq41163__$4);
});


tiltontec.qxia.macros.form.cljs$lang$macro = true;
tiltontec.qxia.macros.carousel = (function tiltontec$qxia$macros$carousel(var_args){
var args__7292__auto__ = [];
var len__7285__auto___41187 = arguments.length;
var i__7286__auto___41188 = (0);
while(true){
if((i__7286__auto___41188 < len__7285__auto___41187)){
args__7292__auto__.push((arguments[i__7286__auto___41188]));

var G__41189 = (i__7286__auto___41188 + (1));
i__7286__auto___41188 = G__41189;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.qxia.macros.carousel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.carousel.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__41183,kids){
var vec__41184 = p__41183;
var seq__41185 = cljs.core.seq.call(null,vec__41184);
var top_args = seq__41185;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Carousel","tiltontec.qxia.types/m.Carousel",-1672753516)),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.carousel.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.carousel.cljs$lang$applyTo = (function (seq41179){
var G__41180 = cljs.core.first.call(null,seq41179);
var seq41179__$1 = cljs.core.next.call(null,seq41179);
var G__41181 = cljs.core.first.call(null,seq41179__$1);
var seq41179__$2 = cljs.core.next.call(null,seq41179__$1);
var G__41182 = cljs.core.first.call(null,seq41179__$2);
var seq41179__$3 = cljs.core.next.call(null,seq41179__$2);
return tiltontec.qxia.macros.carousel.cljs$core$IFn$_invoke$arity$variadic(G__41180,G__41181,G__41182,seq41179__$3);
});


tiltontec.qxia.macros.carousel.cljs$lang$macro = true;
tiltontec.qxia.macros.drawer = (function tiltontec$qxia$macros$drawer(var_args){
var args__7292__auto__ = [];
var len__7285__auto___41199 = arguments.length;
var i__7286__auto___41200 = (0);
while(true){
if((i__7286__auto___41200 < len__7285__auto___41199)){
args__7292__auto__.push((arguments[i__7286__auto___41200]));

var G__41201 = (i__7286__auto___41200 + (1));
i__7286__auto___41200 = G__41201;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.qxia.macros.drawer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,orientation,p__41195,kids){
var vec__41196 = p__41195;
var seq__41197 = cljs.core.seq.call(null,vec__41196);
var top_args = seq__41197;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-class","qx-class",701821141)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.container.Drawer","js/qx.ui.mobile.container.Drawer",-1115926667,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","*par*","tiltontec.model.core/*par*",1276645059,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"orientation","orientation",623557579)),(function (){var x__7044__auto__ = orientation;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.drawer.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.drawer.cljs$lang$applyTo = (function (seq41190){
var G__41191 = cljs.core.first.call(null,seq41190);
var seq41190__$1 = cljs.core.next.call(null,seq41190);
var G__41192 = cljs.core.first.call(null,seq41190__$1);
var seq41190__$2 = cljs.core.next.call(null,seq41190__$1);
var G__41193 = cljs.core.first.call(null,seq41190__$2);
var seq41190__$3 = cljs.core.next.call(null,seq41190__$2);
var G__41194 = cljs.core.first.call(null,seq41190__$3);
var seq41190__$4 = cljs.core.next.call(null,seq41190__$3);
return tiltontec.qxia.macros.drawer.cljs$core$IFn$_invoke$arity$variadic(G__41191,G__41192,G__41193,G__41194,seq41190__$4);
});


tiltontec.qxia.macros.drawer.cljs$lang$macro = true;
tiltontec.qxia.macros.collapsible = (function tiltontec$qxia$macros$collapsible(var_args){
var args__7292__auto__ = [];
var len__7285__auto___41211 = arguments.length;
var i__7286__auto___41212 = (0);
while(true){
if((i__7286__auto___41212 < len__7285__auto___41211)){
args__7292__auto__.push((arguments[i__7286__auto___41212]));

var G__41213 = (i__7286__auto___41212 + (1));
i__7286__auto___41212 = G__41213;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.qxia.macros.collapsible.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.collapsible.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,title,p__41207,kids){
var vec__41208 = p__41207;
var seq__41209 = cljs.core.seq.call(null,vec__41208);
var top_args = seq__41209;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-class","qx-class",701821141)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.container.Collapsible","js/qx.ui.mobile.container.Collapsible",1030659332,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7044__auto__ = title;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.collapsible.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.collapsible.cljs$lang$applyTo = (function (seq41202){
var G__41203 = cljs.core.first.call(null,seq41202);
var seq41202__$1 = cljs.core.next.call(null,seq41202);
var G__41204 = cljs.core.first.call(null,seq41202__$1);
var seq41202__$2 = cljs.core.next.call(null,seq41202__$1);
var G__41205 = cljs.core.first.call(null,seq41202__$2);
var seq41202__$3 = cljs.core.next.call(null,seq41202__$2);
var G__41206 = cljs.core.first.call(null,seq41202__$3);
var seq41202__$4 = cljs.core.next.call(null,seq41202__$3);
return tiltontec.qxia.macros.collapsible.cljs$core$IFn$_invoke$arity$variadic(G__41203,G__41204,G__41205,G__41206,seq41202__$4);
});


tiltontec.qxia.macros.collapsible.cljs$lang$macro = true;
