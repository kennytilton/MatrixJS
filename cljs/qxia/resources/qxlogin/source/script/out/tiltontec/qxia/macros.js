// Compiled by ClojureScript 1.9.36 {}
goog.provide('tiltontec.qxia.macros');
goog.require('cljs.core');
tiltontec.qxia.macros.hbox = (function tiltontec$qxia$macros$hbox(var_args){
var args__7292__auto__ = [];
var len__7285__auto___19542 = arguments.length;
var i__7286__auto___19543 = (0);
while(true){
if((i__7286__auto___19543 < len__7285__auto___19542)){
args__7292__auto__.push((arguments[i__7286__auto___19543]));

var G__19544 = (i__7286__auto___19543 + (1));
i__7286__auto___19543 = G__19544;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.qxia.macros.hbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.hbox.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__19538,kids){
var vec__19539 = p__19538;
var seq__19540 = cljs.core.seq.call(null,vec__19539);
var hbox_args = seq__19540;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"layout","layout",-2120940921)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.layout.HBox","js/qx.ui.mobile.layout.HBox",499740199,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),hbox_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.hbox.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.hbox.cljs$lang$applyTo = (function (seq19534){
var G__19535 = cljs.core.first.call(null,seq19534);
var seq19534__$1 = cljs.core.next.call(null,seq19534);
var G__19536 = cljs.core.first.call(null,seq19534__$1);
var seq19534__$2 = cljs.core.next.call(null,seq19534__$1);
var G__19537 = cljs.core.first.call(null,seq19534__$2);
var seq19534__$3 = cljs.core.next.call(null,seq19534__$2);
return tiltontec.qxia.macros.hbox.cljs$core$IFn$_invoke$arity$variadic(G__19535,G__19536,G__19537,seq19534__$3);
});


tiltontec.qxia.macros.hbox.cljs$lang$macro = true;
tiltontec.qxia.macros.vbox = (function tiltontec$qxia$macros$vbox(var_args){
var args__7292__auto__ = [];
var len__7285__auto___19553 = arguments.length;
var i__7286__auto___19554 = (0);
while(true){
if((i__7286__auto___19554 < len__7285__auto___19553)){
args__7292__auto__.push((arguments[i__7286__auto___19554]));

var G__19555 = (i__7286__auto___19554 + (1));
i__7286__auto___19554 = G__19555;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.qxia.macros.vbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.vbox.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__19549,kids){
var vec__19550 = p__19549;
var seq__19551 = cljs.core.seq.call(null,vec__19550);
var hbox_args = seq__19551;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"layout","layout",-2120940921)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.layout.VBox","js/qx.ui.mobile.layout.VBox",-1527506437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),hbox_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.vbox.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.vbox.cljs$lang$applyTo = (function (seq19545){
var G__19546 = cljs.core.first.call(null,seq19545);
var seq19545__$1 = cljs.core.next.call(null,seq19545);
var G__19547 = cljs.core.first.call(null,seq19545__$1);
var seq19545__$2 = cljs.core.next.call(null,seq19545__$1);
var G__19548 = cljs.core.first.call(null,seq19545__$2);
var seq19545__$3 = cljs.core.next.call(null,seq19545__$2);
return tiltontec.qxia.macros.vbox.cljs$core$IFn$_invoke$arity$variadic(G__19546,G__19547,G__19548,seq19545__$3);
});


tiltontec.qxia.macros.vbox.cljs$lang$macro = true;
tiltontec.qxia.macros.group = (function tiltontec$qxia$macros$group(var_args){
var args__7292__auto__ = [];
var len__7285__auto___19564 = arguments.length;
var i__7286__auto___19565 = (0);
while(true){
if((i__7286__auto___19565 < len__7285__auto___19564)){
args__7292__auto__.push((arguments[i__7286__auto___19565]));

var G__19566 = (i__7286__auto___19565 + (1));
i__7286__auto___19565 = G__19566;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.qxia.macros.group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.group.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__19560,kids){
var vec__19561 = p__19560;
var seq__19562 = cljs.core.seq.call(null,vec__19561);
var my_args = seq__19562;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Group","tiltontec.qxia.types/m.Group",1395438636)),my_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.group.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.group.cljs$lang$applyTo = (function (seq19556){
var G__19557 = cljs.core.first.call(null,seq19556);
var seq19556__$1 = cljs.core.next.call(null,seq19556);
var G__19558 = cljs.core.first.call(null,seq19556__$1);
var seq19556__$2 = cljs.core.next.call(null,seq19556__$1);
var G__19559 = cljs.core.first.call(null,seq19556__$2);
var seq19556__$3 = cljs.core.next.call(null,seq19556__$2);
return tiltontec.qxia.macros.group.cljs$core$IFn$_invoke$arity$variadic(G__19557,G__19558,G__19559,seq19556__$3);
});


tiltontec.qxia.macros.group.cljs$lang$macro = true;
tiltontec.qxia.macros.navigation_page = (function tiltontec$qxia$macros$navigation_page(var_args){
var args__7292__auto__ = [];
var len__7285__auto___19580 = arguments.length;
var i__7286__auto___19581 = (0);
while(true){
if((i__7286__auto___19581 < len__7285__auto___19580)){
args__7292__auto__.push((arguments[i__7286__auto___19581]));

var G__19582 = (i__7286__auto___19581 + (1));
i__7286__auto___19581 = G__19582;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.qxia.macros.navigation_page.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.navigation_page.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__19572,p__19573,kids){
var vec__19574 = p__19572;
var title = cljs.core.nth.call(null,vec__19574,(0),null);
var end_point = cljs.core.nth.call(null,vec__19574,(1),null);
var vec__19577 = p__19573;
var seq__19578 = cljs.core.seq.call(null,vec__19577);
var top_args = seq__19578;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-point","end-point",-1147460885)),(function (){var x__7044__auto__ = end_point;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"title","title",636505583)),(function (){var x__7044__auto__ = title;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.navigation_page.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.navigation_page.cljs$lang$applyTo = (function (seq19567){
var G__19568 = cljs.core.first.call(null,seq19567);
var seq19567__$1 = cljs.core.next.call(null,seq19567);
var G__19569 = cljs.core.first.call(null,seq19567__$1);
var seq19567__$2 = cljs.core.next.call(null,seq19567__$1);
var G__19570 = cljs.core.first.call(null,seq19567__$2);
var seq19567__$3 = cljs.core.next.call(null,seq19567__$2);
var G__19571 = cljs.core.first.call(null,seq19567__$3);
var seq19567__$4 = cljs.core.next.call(null,seq19567__$3);
return tiltontec.qxia.macros.navigation_page.cljs$core$IFn$_invoke$arity$variadic(G__19568,G__19569,G__19570,G__19571,seq19567__$4);
});


tiltontec.qxia.macros.navigation_page.cljs$lang$macro = true;
tiltontec.qxia.macros.form = (function tiltontec$qxia$macros$form(var_args){
var args__7292__auto__ = [];
var len__7285__auto___19596 = arguments.length;
var i__7286__auto___19597 = (0);
while(true){
if((i__7286__auto___19597 < len__7285__auto___19596)){
args__7292__auto__.push((arguments[i__7286__auto___19597]));

var G__19598 = (i__7286__auto___19597 + (1));
i__7286__auto___19597 = G__19598;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.qxia.macros.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.form.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__19588,p__19589,kids){
var vec__19590 = p__19588;
var seq__19591 = cljs.core.seq.call(null,vec__19590);
var top_args = seq__19591;
var vec__19593 = p__19589;
var seq__19594 = cljs.core.seq.call(null,vec__19593);
var form_args = seq__19594;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.qxia.core","qx-make","tiltontec.qxia.core/qx-make",1185324900,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Single","tiltontec.qxia.types/m.Single",-602074724)),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.qxia.core","qx-make","tiltontec.qxia.core/qx-make",1185324900,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Form","tiltontec.qxia.types/m.Form",-409217225)),form_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.form.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.form.cljs$lang$applyTo = (function (seq19583){
var G__19584 = cljs.core.first.call(null,seq19583);
var seq19583__$1 = cljs.core.next.call(null,seq19583);
var G__19585 = cljs.core.first.call(null,seq19583__$1);
var seq19583__$2 = cljs.core.next.call(null,seq19583__$1);
var G__19586 = cljs.core.first.call(null,seq19583__$2);
var seq19583__$3 = cljs.core.next.call(null,seq19583__$2);
var G__19587 = cljs.core.first.call(null,seq19583__$3);
var seq19583__$4 = cljs.core.next.call(null,seq19583__$3);
return tiltontec.qxia.macros.form.cljs$core$IFn$_invoke$arity$variadic(G__19584,G__19585,G__19586,G__19587,seq19583__$4);
});


tiltontec.qxia.macros.form.cljs$lang$macro = true;
tiltontec.qxia.macros.carousel = (function tiltontec$qxia$macros$carousel(var_args){
var args__7292__auto__ = [];
var len__7285__auto___19607 = arguments.length;
var i__7286__auto___19608 = (0);
while(true){
if((i__7286__auto___19608 < len__7285__auto___19607)){
args__7292__auto__.push((arguments[i__7286__auto___19608]));

var G__19609 = (i__7286__auto___19608 + (1));
i__7286__auto___19608 = G__19609;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.qxia.macros.carousel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.carousel.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__19603,kids){
var vec__19604 = p__19603;
var seq__19605 = cljs.core.seq.call(null,vec__19604);
var top_args = seq__19605;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Carousel","tiltontec.qxia.types/m.Carousel",-1672753516)),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.carousel.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.carousel.cljs$lang$applyTo = (function (seq19599){
var G__19600 = cljs.core.first.call(null,seq19599);
var seq19599__$1 = cljs.core.next.call(null,seq19599);
var G__19601 = cljs.core.first.call(null,seq19599__$1);
var seq19599__$2 = cljs.core.next.call(null,seq19599__$1);
var G__19602 = cljs.core.first.call(null,seq19599__$2);
var seq19599__$3 = cljs.core.next.call(null,seq19599__$2);
return tiltontec.qxia.macros.carousel.cljs$core$IFn$_invoke$arity$variadic(G__19600,G__19601,G__19602,seq19599__$3);
});


tiltontec.qxia.macros.carousel.cljs$lang$macro = true;
tiltontec.qxia.macros.drawer = (function tiltontec$qxia$macros$drawer(var_args){
var args__7292__auto__ = [];
var len__7285__auto___19619 = arguments.length;
var i__7286__auto___19620 = (0);
while(true){
if((i__7286__auto___19620 < len__7285__auto___19619)){
args__7292__auto__.push((arguments[i__7286__auto___19620]));

var G__19621 = (i__7286__auto___19620 + (1));
i__7286__auto___19620 = G__19621;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.qxia.macros.drawer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,orientation,p__19615,kids){
var vec__19616 = p__19615;
var seq__19617 = cljs.core.seq.call(null,vec__19616);
var top_args = seq__19617;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-class","qx-class",701821141)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.container.Drawer","js/qx.ui.mobile.container.Drawer",-1115926667,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","*par*","tiltontec.model.core/*par*",1276645059,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"orientation","orientation",623557579)),(function (){var x__7044__auto__ = orientation;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.drawer.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.drawer.cljs$lang$applyTo = (function (seq19610){
var G__19611 = cljs.core.first.call(null,seq19610);
var seq19610__$1 = cljs.core.next.call(null,seq19610);
var G__19612 = cljs.core.first.call(null,seq19610__$1);
var seq19610__$2 = cljs.core.next.call(null,seq19610__$1);
var G__19613 = cljs.core.first.call(null,seq19610__$2);
var seq19610__$3 = cljs.core.next.call(null,seq19610__$2);
var G__19614 = cljs.core.first.call(null,seq19610__$3);
var seq19610__$4 = cljs.core.next.call(null,seq19610__$3);
return tiltontec.qxia.macros.drawer.cljs$core$IFn$_invoke$arity$variadic(G__19611,G__19612,G__19613,G__19614,seq19610__$4);
});


tiltontec.qxia.macros.drawer.cljs$lang$macro = true;
tiltontec.qxia.macros.collapsible = (function tiltontec$qxia$macros$collapsible(var_args){
var args__7292__auto__ = [];
var len__7285__auto___19631 = arguments.length;
var i__7286__auto___19632 = (0);
while(true){
if((i__7286__auto___19632 < len__7285__auto___19631)){
args__7292__auto__.push((arguments[i__7286__auto___19632]));

var G__19633 = (i__7286__auto___19632 + (1));
i__7286__auto___19632 = G__19633;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.qxia.macros.collapsible.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.collapsible.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,title,p__19627,kids){
var vec__19628 = p__19627;
var seq__19629 = cljs.core.seq.call(null,vec__19628);
var top_args = seq__19629;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-class","qx-class",701821141)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.container.Collapsible","js/qx.ui.mobile.container.Collapsible",1030659332,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7044__auto__ = title;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.collapsible.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.collapsible.cljs$lang$applyTo = (function (seq19622){
var G__19623 = cljs.core.first.call(null,seq19622);
var seq19622__$1 = cljs.core.next.call(null,seq19622);
var G__19624 = cljs.core.first.call(null,seq19622__$1);
var seq19622__$2 = cljs.core.next.call(null,seq19622__$1);
var G__19625 = cljs.core.first.call(null,seq19622__$2);
var seq19622__$3 = cljs.core.next.call(null,seq19622__$2);
var G__19626 = cljs.core.first.call(null,seq19622__$3);
var seq19622__$4 = cljs.core.next.call(null,seq19622__$3);
return tiltontec.qxia.macros.collapsible.cljs$core$IFn$_invoke$arity$variadic(G__19623,G__19624,G__19625,G__19626,seq19622__$4);
});


tiltontec.qxia.macros.collapsible.cljs$lang$macro = true;
