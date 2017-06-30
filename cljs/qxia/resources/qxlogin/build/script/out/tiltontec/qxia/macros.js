// Compiled by ClojureScript 1.9.36 {}
goog.provide('tiltontec.qxia.macros');
goog.require('cljs.core');
tiltontec.qxia.macros.hbox = (function tiltontec$qxia$macros$hbox(var_args){
var args__7292__auto__ = [];
var len__7285__auto___14728 = arguments.length;
var i__7286__auto___14729 = (0);
while(true){
if((i__7286__auto___14729 < len__7285__auto___14728)){
args__7292__auto__.push((arguments[i__7286__auto___14729]));

var G__14730 = (i__7286__auto___14729 + (1));
i__7286__auto___14729 = G__14730;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.qxia.macros.hbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.hbox.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__14724,kids){
var vec__14725 = p__14724;
var seq__14726 = cljs.core.seq.call(null,vec__14725);
var hbox_args = seq__14726;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"layout","layout",-2120940921)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.layout.HBox","js/qx.ui.mobile.layout.HBox",499740199,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),hbox_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.hbox.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.hbox.cljs$lang$applyTo = (function (seq14720){
var G__14721 = cljs.core.first.call(null,seq14720);
var seq14720__$1 = cljs.core.next.call(null,seq14720);
var G__14722 = cljs.core.first.call(null,seq14720__$1);
var seq14720__$2 = cljs.core.next.call(null,seq14720__$1);
var G__14723 = cljs.core.first.call(null,seq14720__$2);
var seq14720__$3 = cljs.core.next.call(null,seq14720__$2);
return tiltontec.qxia.macros.hbox.cljs$core$IFn$_invoke$arity$variadic(G__14721,G__14722,G__14723,seq14720__$3);
});


tiltontec.qxia.macros.hbox.cljs$lang$macro = true;
tiltontec.qxia.macros.vbox = (function tiltontec$qxia$macros$vbox(var_args){
var args__7292__auto__ = [];
var len__7285__auto___14739 = arguments.length;
var i__7286__auto___14740 = (0);
while(true){
if((i__7286__auto___14740 < len__7285__auto___14739)){
args__7292__auto__.push((arguments[i__7286__auto___14740]));

var G__14741 = (i__7286__auto___14740 + (1));
i__7286__auto___14740 = G__14741;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.qxia.macros.vbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.vbox.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__14735,kids){
var vec__14736 = p__14735;
var seq__14737 = cljs.core.seq.call(null,vec__14736);
var hbox_args = seq__14737;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"layout","layout",-2120940921)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.layout.VBox","js/qx.ui.mobile.layout.VBox",-1527506437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),hbox_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.vbox.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.vbox.cljs$lang$applyTo = (function (seq14731){
var G__14732 = cljs.core.first.call(null,seq14731);
var seq14731__$1 = cljs.core.next.call(null,seq14731);
var G__14733 = cljs.core.first.call(null,seq14731__$1);
var seq14731__$2 = cljs.core.next.call(null,seq14731__$1);
var G__14734 = cljs.core.first.call(null,seq14731__$2);
var seq14731__$3 = cljs.core.next.call(null,seq14731__$2);
return tiltontec.qxia.macros.vbox.cljs$core$IFn$_invoke$arity$variadic(G__14732,G__14733,G__14734,seq14731__$3);
});


tiltontec.qxia.macros.vbox.cljs$lang$macro = true;
tiltontec.qxia.macros.group = (function tiltontec$qxia$macros$group(var_args){
var args__7292__auto__ = [];
var len__7285__auto___14750 = arguments.length;
var i__7286__auto___14751 = (0);
while(true){
if((i__7286__auto___14751 < len__7285__auto___14750)){
args__7292__auto__.push((arguments[i__7286__auto___14751]));

var G__14752 = (i__7286__auto___14751 + (1));
i__7286__auto___14751 = G__14752;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.qxia.macros.group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.group.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__14746,kids){
var vec__14747 = p__14746;
var seq__14748 = cljs.core.seq.call(null,vec__14747);
var my_args = seq__14748;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Group","tiltontec.qxia.types/m.Group",1395438636)),my_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.group.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.group.cljs$lang$applyTo = (function (seq14742){
var G__14743 = cljs.core.first.call(null,seq14742);
var seq14742__$1 = cljs.core.next.call(null,seq14742);
var G__14744 = cljs.core.first.call(null,seq14742__$1);
var seq14742__$2 = cljs.core.next.call(null,seq14742__$1);
var G__14745 = cljs.core.first.call(null,seq14742__$2);
var seq14742__$3 = cljs.core.next.call(null,seq14742__$2);
return tiltontec.qxia.macros.group.cljs$core$IFn$_invoke$arity$variadic(G__14743,G__14744,G__14745,seq14742__$3);
});


tiltontec.qxia.macros.group.cljs$lang$macro = true;
tiltontec.qxia.macros.navigation_page = (function tiltontec$qxia$macros$navigation_page(var_args){
var args__7292__auto__ = [];
var len__7285__auto___14766 = arguments.length;
var i__7286__auto___14767 = (0);
while(true){
if((i__7286__auto___14767 < len__7285__auto___14766)){
args__7292__auto__.push((arguments[i__7286__auto___14767]));

var G__14768 = (i__7286__auto___14767 + (1));
i__7286__auto___14767 = G__14768;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.qxia.macros.navigation_page.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.navigation_page.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__14758,p__14759,kids){
var vec__14760 = p__14758;
var title = cljs.core.nth.call(null,vec__14760,(0),null);
var end_point = cljs.core.nth.call(null,vec__14760,(1),null);
var vec__14763 = p__14759;
var seq__14764 = cljs.core.seq.call(null,vec__14763);
var top_args = seq__14764;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-point","end-point",-1147460885)),(function (){var x__7044__auto__ = end_point;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"title","title",636505583)),(function (){var x__7044__auto__ = title;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.navigation_page.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.navigation_page.cljs$lang$applyTo = (function (seq14753){
var G__14754 = cljs.core.first.call(null,seq14753);
var seq14753__$1 = cljs.core.next.call(null,seq14753);
var G__14755 = cljs.core.first.call(null,seq14753__$1);
var seq14753__$2 = cljs.core.next.call(null,seq14753__$1);
var G__14756 = cljs.core.first.call(null,seq14753__$2);
var seq14753__$3 = cljs.core.next.call(null,seq14753__$2);
var G__14757 = cljs.core.first.call(null,seq14753__$3);
var seq14753__$4 = cljs.core.next.call(null,seq14753__$3);
return tiltontec.qxia.macros.navigation_page.cljs$core$IFn$_invoke$arity$variadic(G__14754,G__14755,G__14756,G__14757,seq14753__$4);
});


tiltontec.qxia.macros.navigation_page.cljs$lang$macro = true;
tiltontec.qxia.macros.form = (function tiltontec$qxia$macros$form(var_args){
var args__7292__auto__ = [];
var len__7285__auto___14782 = arguments.length;
var i__7286__auto___14783 = (0);
while(true){
if((i__7286__auto___14783 < len__7285__auto___14782)){
args__7292__auto__.push((arguments[i__7286__auto___14783]));

var G__14784 = (i__7286__auto___14783 + (1));
i__7286__auto___14783 = G__14784;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.qxia.macros.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.form.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__14774,p__14775,kids){
var vec__14776 = p__14774;
var seq__14777 = cljs.core.seq.call(null,vec__14776);
var top_args = seq__14777;
var vec__14779 = p__14775;
var seq__14780 = cljs.core.seq.call(null,vec__14779);
var form_args = seq__14780;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.qxia.core","qx-make","tiltontec.qxia.core/qx-make",1185324900,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Single","tiltontec.qxia.types/m.Single",-602074724)),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.qxia.core","qx-make","tiltontec.qxia.core/qx-make",1185324900,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Form","tiltontec.qxia.types/m.Form",-409217225)),form_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.form.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.form.cljs$lang$applyTo = (function (seq14769){
var G__14770 = cljs.core.first.call(null,seq14769);
var seq14769__$1 = cljs.core.next.call(null,seq14769);
var G__14771 = cljs.core.first.call(null,seq14769__$1);
var seq14769__$2 = cljs.core.next.call(null,seq14769__$1);
var G__14772 = cljs.core.first.call(null,seq14769__$2);
var seq14769__$3 = cljs.core.next.call(null,seq14769__$2);
var G__14773 = cljs.core.first.call(null,seq14769__$3);
var seq14769__$4 = cljs.core.next.call(null,seq14769__$3);
return tiltontec.qxia.macros.form.cljs$core$IFn$_invoke$arity$variadic(G__14770,G__14771,G__14772,G__14773,seq14769__$4);
});


tiltontec.qxia.macros.form.cljs$lang$macro = true;
tiltontec.qxia.macros.carousel = (function tiltontec$qxia$macros$carousel(var_args){
var args__7292__auto__ = [];
var len__7285__auto___14793 = arguments.length;
var i__7286__auto___14794 = (0);
while(true){
if((i__7286__auto___14794 < len__7285__auto___14793)){
args__7292__auto__.push((arguments[i__7286__auto___14794]));

var G__14795 = (i__7286__auto___14794 + (1));
i__7286__auto___14794 = G__14795;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.qxia.macros.carousel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.carousel.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__14789,kids){
var vec__14790 = p__14789;
var seq__14791 = cljs.core.seq.call(null,vec__14790);
var top_args = seq__14791;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Carousel","tiltontec.qxia.types/m.Carousel",-1672753516)),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.carousel.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.carousel.cljs$lang$applyTo = (function (seq14785){
var G__14786 = cljs.core.first.call(null,seq14785);
var seq14785__$1 = cljs.core.next.call(null,seq14785);
var G__14787 = cljs.core.first.call(null,seq14785__$1);
var seq14785__$2 = cljs.core.next.call(null,seq14785__$1);
var G__14788 = cljs.core.first.call(null,seq14785__$2);
var seq14785__$3 = cljs.core.next.call(null,seq14785__$2);
return tiltontec.qxia.macros.carousel.cljs$core$IFn$_invoke$arity$variadic(G__14786,G__14787,G__14788,seq14785__$3);
});


tiltontec.qxia.macros.carousel.cljs$lang$macro = true;
tiltontec.qxia.macros.drawer = (function tiltontec$qxia$macros$drawer(var_args){
var args__7292__auto__ = [];
var len__7285__auto___14805 = arguments.length;
var i__7286__auto___14806 = (0);
while(true){
if((i__7286__auto___14806 < len__7285__auto___14805)){
args__7292__auto__.push((arguments[i__7286__auto___14806]));

var G__14807 = (i__7286__auto___14806 + (1));
i__7286__auto___14806 = G__14807;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.qxia.macros.drawer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,orientation,p__14801,kids){
var vec__14802 = p__14801;
var seq__14803 = cljs.core.seq.call(null,vec__14802);
var top_args = seq__14803;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-class","qx-class",701821141)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.container.Drawer","js/qx.ui.mobile.container.Drawer",-1115926667,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","*par*","tiltontec.model.core/*par*",1276645059,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"orientation","orientation",623557579)),(function (){var x__7044__auto__ = orientation;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.drawer.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.drawer.cljs$lang$applyTo = (function (seq14796){
var G__14797 = cljs.core.first.call(null,seq14796);
var seq14796__$1 = cljs.core.next.call(null,seq14796);
var G__14798 = cljs.core.first.call(null,seq14796__$1);
var seq14796__$2 = cljs.core.next.call(null,seq14796__$1);
var G__14799 = cljs.core.first.call(null,seq14796__$2);
var seq14796__$3 = cljs.core.next.call(null,seq14796__$2);
var G__14800 = cljs.core.first.call(null,seq14796__$3);
var seq14796__$4 = cljs.core.next.call(null,seq14796__$3);
return tiltontec.qxia.macros.drawer.cljs$core$IFn$_invoke$arity$variadic(G__14797,G__14798,G__14799,G__14800,seq14796__$4);
});


tiltontec.qxia.macros.drawer.cljs$lang$macro = true;
tiltontec.qxia.macros.collapsible = (function tiltontec$qxia$macros$collapsible(var_args){
var args__7292__auto__ = [];
var len__7285__auto___14817 = arguments.length;
var i__7286__auto___14818 = (0);
while(true){
if((i__7286__auto___14818 < len__7285__auto___14817)){
args__7292__auto__.push((arguments[i__7286__auto___14818]));

var G__14819 = (i__7286__auto___14818 + (1));
i__7286__auto___14818 = G__14819;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.qxia.macros.collapsible.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.collapsible.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,title,p__14813,kids){
var vec__14814 = p__14813;
var seq__14815 = cljs.core.seq.call(null,vec__14814);
var top_args = seq__14815;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-class","qx-class",701821141)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.container.Collapsible","js/qx.ui.mobile.container.Collapsible",1030659332,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7044__auto__ = title;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.collapsible.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.collapsible.cljs$lang$applyTo = (function (seq14808){
var G__14809 = cljs.core.first.call(null,seq14808);
var seq14808__$1 = cljs.core.next.call(null,seq14808);
var G__14810 = cljs.core.first.call(null,seq14808__$1);
var seq14808__$2 = cljs.core.next.call(null,seq14808__$1);
var G__14811 = cljs.core.first.call(null,seq14808__$2);
var seq14808__$3 = cljs.core.next.call(null,seq14808__$2);
var G__14812 = cljs.core.first.call(null,seq14808__$3);
var seq14808__$4 = cljs.core.next.call(null,seq14808__$3);
return tiltontec.qxia.macros.collapsible.cljs$core$IFn$_invoke$arity$variadic(G__14809,G__14810,G__14811,G__14812,seq14808__$4);
});


tiltontec.qxia.macros.collapsible.cljs$lang$macro = true;
