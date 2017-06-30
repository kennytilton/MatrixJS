// Compiled by ClojureScript 1.9.36 {}
goog.provide('tiltontec.qxia.widget');
goog.require('cljs.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.qxia.types');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.core');
goog.require('tiltontec.model.macros');
goog.require('clojure.set');
goog.require('tiltontec.qxia.base');
goog.require('tiltontec.cell.integrity');
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","Mobile","tiltontec.qxia.types/Mobile",-143490810)], null),(function (_,me,new$,old,c){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
var app = new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
var shower = new cljs.core.Keyword(null,"shower","shower",-1731894586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
var pager = new cljs.core.Keyword(null,"pager","pager",1850229940).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
var routing = app.getRouting();
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
var seq__11997_12005 = cljs.core.seq.call(null,old);
var chunk__11998_12006 = null;
var count__11999_12007 = (0);
var i__12000_12008 = (0);
while(true){
if((i__12000_12008 < count__11999_12007)){
var page_12009 = cljs.core._nth.call(null,chunk__11998_12006,i__12000_12008);
var temp__4425__auto___12010 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_12009));
if(cljs.core.truth_(temp__4425__auto___12010)){
var ept_12011 = temp__4425__auto___12010;
routing.remove(ept_12011);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_12009));

var G__12012 = seq__11997_12005;
var G__12013 = chunk__11998_12006;
var G__12014 = count__11999_12007;
var G__12015 = (i__12000_12008 + (1));
seq__11997_12005 = G__12012;
chunk__11998_12006 = G__12013;
count__11999_12007 = G__12014;
i__12000_12008 = G__12015;
continue;
} else {
var temp__4425__auto___12016 = cljs.core.seq.call(null,seq__11997_12005);
if(temp__4425__auto___12016){
var seq__11997_12017__$1 = temp__4425__auto___12016;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11997_12017__$1)){
var c__7021__auto___12018 = cljs.core.chunk_first.call(null,seq__11997_12017__$1);
var G__12019 = cljs.core.chunk_rest.call(null,seq__11997_12017__$1);
var G__12020 = c__7021__auto___12018;
var G__12021 = cljs.core.count.call(null,c__7021__auto___12018);
var G__12022 = (0);
seq__11997_12005 = G__12019;
chunk__11998_12006 = G__12020;
count__11999_12007 = G__12021;
i__12000_12008 = G__12022;
continue;
} else {
var page_12023 = cljs.core.first.call(null,seq__11997_12017__$1);
var temp__4425__auto___12024__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_12023));
if(cljs.core.truth_(temp__4425__auto___12024__$1)){
var ept_12025 = temp__4425__auto___12024__$1;
routing.remove(ept_12025);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_12023));

var G__12026 = cljs.core.next.call(null,seq__11997_12017__$1);
var G__12027 = null;
var G__12028 = (0);
var G__12029 = (0);
seq__11997_12005 = G__12026;
chunk__11998_12006 = G__12027;
count__11999_12007 = G__12028;
i__12000_12008 = G__12029;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__12001 = cljs.core.seq.call(null,new$);
var chunk__12002 = null;
var count__12003 = (0);
var i__12004 = (0);
while(true){
if((i__12004 < count__12003)){
var page = cljs.core._nth.call(null,chunk__12002,i__12004);
var qx_page_12030 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_12030);

var temp__4425__auto___12031 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___12031)){
var ept_12032 = temp__4425__auto___12031;
routing.onGet(ept_12032,shower,qx_page_12030);
} else {
}

var G__12033 = seq__12001;
var G__12034 = chunk__12002;
var G__12035 = count__12003;
var G__12036 = (i__12004 + (1));
seq__12001 = G__12033;
chunk__12002 = G__12034;
count__12003 = G__12035;
i__12004 = G__12036;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12001);
if(temp__4425__auto__){
var seq__12001__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12001__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__12001__$1);
var G__12037 = cljs.core.chunk_rest.call(null,seq__12001__$1);
var G__12038 = c__7021__auto__;
var G__12039 = cljs.core.count.call(null,c__7021__auto__);
var G__12040 = (0);
seq__12001 = G__12037;
chunk__12002 = G__12038;
count__12003 = G__12039;
i__12004 = G__12040;
continue;
} else {
var page = cljs.core.first.call(null,seq__12001__$1);
var qx_page_12041 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_12041);

var temp__4425__auto___12042__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___12042__$1)){
var ept_12043 = temp__4425__auto___12042__$1;
routing.onGet(ept_12043,shower,qx_page_12041);
} else {
}

var G__12044 = cljs.core.next.call(null,seq__12001__$1);
var G__12045 = null;
var G__12046 = (0);
var G__12047 = (0);
seq__12001 = G__12044;
chunk__12002 = G__12045;
count__12003 = G__12046;
i__12004 = G__12047;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163),(function (me){
var temp__4425__auto__ = new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(temp__4425__auto__)){
var lyo = temp__4425__auto__;
return tiltontec.qxia.base.qxme.call(null,me).setLayout(lyo);
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","m.Form","tiltontec.qxia.types/m.Form",-409217225)], null),(function (_,me,new$,old,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
var qx_form = tiltontec.qxia.base.qxme.call(null,me);
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
var seq__12048_12058 = cljs.core.seq.call(null,old);
var chunk__12049_12059 = null;
var count__12050_12060 = (0);
var i__12051_12061 = (0);
while(true){
if((i__12051_12061 < count__12050_12060)){
var k_12062 = cljs.core._nth.call(null,chunk__12049_12059,i__12051_12061);
var qxk_12063 = tiltontec.qxia.base.qxme.call(null,k_12062);
var label_12064 = tiltontec.model.core.md_get.call(null,k_12062,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_12063);

var G__12065 = seq__12048_12058;
var G__12066 = chunk__12049_12059;
var G__12067 = count__12050_12060;
var G__12068 = (i__12051_12061 + (1));
seq__12048_12058 = G__12065;
chunk__12049_12059 = G__12066;
count__12050_12060 = G__12067;
i__12051_12061 = G__12068;
continue;
} else {
var temp__4425__auto___12069 = cljs.core.seq.call(null,seq__12048_12058);
if(temp__4425__auto___12069){
var seq__12048_12070__$1 = temp__4425__auto___12069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12048_12070__$1)){
var c__7021__auto___12071 = cljs.core.chunk_first.call(null,seq__12048_12070__$1);
var G__12072 = cljs.core.chunk_rest.call(null,seq__12048_12070__$1);
var G__12073 = c__7021__auto___12071;
var G__12074 = cljs.core.count.call(null,c__7021__auto___12071);
var G__12075 = (0);
seq__12048_12058 = G__12072;
chunk__12049_12059 = G__12073;
count__12050_12060 = G__12074;
i__12051_12061 = G__12075;
continue;
} else {
var k_12076 = cljs.core.first.call(null,seq__12048_12070__$1);
var qxk_12077 = tiltontec.qxia.base.qxme.call(null,k_12076);
var label_12078 = tiltontec.model.core.md_get.call(null,k_12076,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_12077);

var G__12079 = cljs.core.next.call(null,seq__12048_12070__$1);
var G__12080 = null;
var G__12081 = (0);
var G__12082 = (0);
seq__12048_12058 = G__12079;
chunk__12049_12059 = G__12080;
count__12050_12060 = G__12081;
i__12051_12061 = G__12082;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__4425__auto__ = new$;
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
var seq__12052 = cljs.core.seq.call(null,kids);
var chunk__12053 = null;
var count__12054 = (0);
var i__12055 = (0);
while(true){
if((i__12055 < count__12054)){
var k = cljs.core._nth.call(null,chunk__12053,i__12055);
var G__12056_12083 = (((tiltontec.cell.base.ia_type.call(null,k) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,k).fqn:null);
switch (G__12056_12083) {
case "tiltontec.qxia.types/m.RadioGroupStub":
tiltontec.qxia.base.form_build_radio_group_stub.call(null,me,k);

break;
default:
var qxk_12085 = tiltontec.qxia.base.qxme.call(null,k);
var label_12086 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_12085,label_12086);

}

var G__12087 = seq__12052;
var G__12088 = chunk__12053;
var G__12089 = count__12054;
var G__12090 = (i__12055 + (1));
seq__12052 = G__12087;
chunk__12053 = G__12088;
count__12054 = G__12089;
i__12055 = G__12090;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__12052);
if(temp__4425__auto____$1){
var seq__12052__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12052__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__12052__$1);
var G__12091 = cljs.core.chunk_rest.call(null,seq__12052__$1);
var G__12092 = c__7021__auto__;
var G__12093 = cljs.core.count.call(null,c__7021__auto__);
var G__12094 = (0);
seq__12052 = G__12091;
chunk__12053 = G__12092;
count__12054 = G__12093;
i__12055 = G__12094;
continue;
} else {
var k = cljs.core.first.call(null,seq__12052__$1);
var G__12057_12095 = (((tiltontec.cell.base.ia_type.call(null,k) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,k).fqn:null);
switch (G__12057_12095) {
case "tiltontec.qxia.types/m.RadioGroupStub":
tiltontec.qxia.base.form_build_radio_group_stub.call(null,me,k);

break;
default:
var qxk_12097 = tiltontec.qxia.base.qxme.call(null,k);
var label_12098 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_12097,label_12098);

}

var G__12099 = cljs.core.next.call(null,seq__12052__$1);
var G__12100 = null;
var G__12101 = (0);
var G__12102 = (0);
seq__12052 = G__12099;
chunk__12053 = G__12100;
count__12054 = G__12101;
i__12055 = G__12102;
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
}));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","m.Single","tiltontec.qxia.types/m.Single",-602074724),(function (me){
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"qx-init-single-enqueues-qxme!!!!","qx-init-single-enqueues-qxme!!!!",-866757605));

return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"qx-init-single-does--qxme!!!!","qx-init-single-does--qxme!!!!",-770694528));

var kids = new cljs.core.Keyword(null,"kids","kids",1156670771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,kids))){
} else {
throw (new Error("Assert failed: (= 1 (count kids))"));
}

var form = cljs.core.first.call(null,kids);
var qx_form = tiltontec.qxia.base.qxme.call(null,form);
if(cljs.core.truth_(qx_form)){
} else {
throw (new Error("Assert failed: qx-form"));
}

tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"qx-init-single-gets-qxme!!!!","qx-init-single-gets-qxme!!!!",-168440823));

return cljs.core.swap_BANG_.call(null,me,cljs.core.assoc,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),(new qx.ui.mobile.form.renderer.Single(qx_form)));
}));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995),(function (page){
var qx_page = tiltontec.qxia.base.qxme.call(null,page);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"page-deferring","page-deferring",-18481214));

return qx_page.addListener("initialize",((function (qx_page){
return (function (){
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"page-fires","page-fires",-379326855));

var temp__4425__auto___12107 = tiltontec.model.core.md_getx.call(null,new cljs.core.Keyword(null,"ini-nav","ini-nav",1436917737),page,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto___12107)){
var kids_12108 = temp__4425__auto___12107;
var content_12109 = qx_page.getContent();
var seq__12103_12110 = cljs.core.seq.call(null,kids_12108);
var chunk__12104_12111 = null;
var count__12105_12112 = (0);
var i__12106_12113 = (0);
while(true){
if((i__12106_12113 < count__12105_12112)){
var k_12114 = cljs.core._nth.call(null,chunk__12104_12111,i__12106_12113);
var qxk_12115 = tiltontec.qxia.base.qxme.call(null,k_12114);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"navpage-initialize-add","navpage-initialize-add",1958684224),tiltontec.cell.base.ia_type.call(null,k_12114));

content_12109.add(qxk_12115);

var G__12116 = seq__12103_12110;
var G__12117 = chunk__12104_12111;
var G__12118 = count__12105_12112;
var G__12119 = (i__12106_12113 + (1));
seq__12103_12110 = G__12116;
chunk__12104_12111 = G__12117;
count__12105_12112 = G__12118;
i__12106_12113 = G__12119;
continue;
} else {
var temp__4425__auto___12120__$1 = cljs.core.seq.call(null,seq__12103_12110);
if(temp__4425__auto___12120__$1){
var seq__12103_12121__$1 = temp__4425__auto___12120__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12103_12121__$1)){
var c__7021__auto___12122 = cljs.core.chunk_first.call(null,seq__12103_12121__$1);
var G__12123 = cljs.core.chunk_rest.call(null,seq__12103_12121__$1);
var G__12124 = c__7021__auto___12122;
var G__12125 = cljs.core.count.call(null,c__7021__auto___12122);
var G__12126 = (0);
seq__12103_12110 = G__12123;
chunk__12104_12111 = G__12124;
count__12105_12112 = G__12125;
i__12106_12113 = G__12126;
continue;
} else {
var k_12127 = cljs.core.first.call(null,seq__12103_12121__$1);
var qxk_12128 = tiltontec.qxia.base.qxme.call(null,k_12127);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"navpage-initialize-add","navpage-initialize-add",1958684224),tiltontec.cell.base.ia_type.call(null,k_12127));

content_12109.add(qxk_12128);

var G__12129 = cljs.core.next.call(null,seq__12103_12121__$1);
var G__12130 = null;
var G__12131 = (0);
var G__12132 = (0);
seq__12103_12110 = G__12129;
chunk__12104_12111 = G__12130;
count__12105_12112 = G__12131;
i__12106_12113 = G__12132;
continue;
}
} else {
}
}
break;
}
} else {
}

return qx_page;
});})(qx_page))
);
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995)], null),(function (_,page,newk,oldk,___$1){
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"nav-page-grabs-kids-obs","nav-page-grabs-kids-obs",2045747190));

if(cljs.core.not_EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),page], null),(function (opcode,defer_info){
var qx_page = tiltontec.qxia.base.qxme.call(null,page);
var content = qx_page.getContent();
content.removeAll();

var seq__12133 = cljs.core.seq.call(null,newk);
var chunk__12134 = null;
var count__12135 = (0);
var i__12136 = (0);
while(true){
if((i__12136 < count__12135)){
var k = cljs.core._nth.call(null,chunk__12134,i__12136);
var qxk_12137 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_12137);

var G__12138 = seq__12133;
var G__12139 = chunk__12134;
var G__12140 = count__12135;
var G__12141 = (i__12136 + (1));
seq__12133 = G__12138;
chunk__12134 = G__12139;
count__12135 = G__12140;
i__12136 = G__12141;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12133);
if(temp__4425__auto__){
var seq__12133__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12133__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__12133__$1);
var G__12142 = cljs.core.chunk_rest.call(null,seq__12133__$1);
var G__12143 = c__7021__auto__;
var G__12144 = cljs.core.count.call(null,c__7021__auto__);
var G__12145 = (0);
seq__12133 = G__12142;
chunk__12134 = G__12143;
count__12135 = G__12144;
i__12136 = G__12145;
continue;
} else {
var k = cljs.core.first.call(null,seq__12133__$1);
var qxk_12146 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_12146);

var G__12147 = cljs.core.next.call(null,seq__12133__$1);
var G__12148 = null;
var G__12149 = (0);
var G__12150 = (0);
seq__12133 = G__12147;
chunk__12134 = G__12148;
count__12135 = G__12149;
i__12136 = G__12150;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070),new cljs.core.Keyword("tiltontec.qxia.types","m.Input","tiltontec.qxia.types/m.Input",-509810846)], null),(function (_,me,new_fn,old,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
if(cljs.core.truth_(new_fn)){
var form = tiltontec.qxia.base.qxme.call(null,tiltontec.model.core.qx_par.call(null,me));
if(cljs.core.truth_(form)){
} else {
throw (new Error("Assert failed: form"));
}

var vmgr = form.getValidationManager();
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"validmgr-add","validmgr-add",101529472),tiltontec.cell.base.ia_type.call(null,me));

return vmgr.add(tiltontec.qxia.base.qxme.call(null,me),new_fn);
} else {
return null;
}
}));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_property_observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword("tiltontec.qxia.types","m.SelectBox","tiltontec.qxia.types/m.SelectBox",-663708114)], null),(function (_,me,new$,___$1,___$2){
if(cljs.core.truth_(new$)){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"3-post-assembly","3-post-assembly",-607469254),me], null),(function (opcode,defer_info){
if(cljs.core.truth_(tiltontec.qxia.base.qxme.call(null,me).getModel())){
} else {
throw (new Error("Assert failed: (.getModel (qxme me))"));
}

return tiltontec.qxia.base.qxme.call(null,me).setSelection(new$);
}));
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","qx.Object","tiltontec.qxia.types/qx.Object",-1295429520)], null),(function (_,me,newk,oldk,___$1){
var G__12151 = (((tiltontec.cell.base.ia_type.call(null,me) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,me).fqn:null);
switch (G__12151) {
case "tiltontec.qxia.types/m.Single":
return null;

break;
case "tiltontec.qxia.types/m.RadioGroupStub":
return null;

break;
default:


return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),((function (G__12151){
return (function (opcode,defer_info){
return tiltontec.qxia.widget.kids_refresh.call(null,me,newk,oldk);
});})(G__12151))
);

}
}));
tiltontec.qxia.widget.kids_refresh = (function tiltontec$qxia$widget$kids_refresh(me,newk,oldk){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
} else {
var lostks_12169 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_12169)){
} else {
var seq__12161_12170 = cljs.core.seq.call(null,lostks_12169);
var chunk__12162_12171 = null;
var count__12163_12172 = (0);
var i__12164_12173 = (0);
while(true){
if((i__12164_12173 < count__12163_12172)){
var kid_12174 = cljs.core._nth.call(null,chunk__12162_12171,i__12164_12173);
var qxk_12175 = tiltontec.qxia.base.qxme.call(null,kid_12174);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_12174,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_12175);
}

qxk_12175.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_12174);

var G__12176 = seq__12161_12170;
var G__12177 = chunk__12162_12171;
var G__12178 = count__12163_12172;
var G__12179 = (i__12164_12173 + (1));
seq__12161_12170 = G__12176;
chunk__12162_12171 = G__12177;
count__12163_12172 = G__12178;
i__12164_12173 = G__12179;
continue;
} else {
var temp__4425__auto___12180 = cljs.core.seq.call(null,seq__12161_12170);
if(temp__4425__auto___12180){
var seq__12161_12181__$1 = temp__4425__auto___12180;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12161_12181__$1)){
var c__7021__auto___12182 = cljs.core.chunk_first.call(null,seq__12161_12181__$1);
var G__12183 = cljs.core.chunk_rest.call(null,seq__12161_12181__$1);
var G__12184 = c__7021__auto___12182;
var G__12185 = cljs.core.count.call(null,c__7021__auto___12182);
var G__12186 = (0);
seq__12161_12170 = G__12183;
chunk__12162_12171 = G__12184;
count__12163_12172 = G__12185;
i__12164_12173 = G__12186;
continue;
} else {
var kid_12187 = cljs.core.first.call(null,seq__12161_12181__$1);
var qxk_12188 = tiltontec.qxia.base.qxme.call(null,kid_12187);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_12187,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_12188);
}

qxk_12188.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_12187);

var G__12189 = cljs.core.next.call(null,seq__12161_12181__$1);
var G__12190 = null;
var G__12191 = (0);
var G__12192 = (0);
seq__12161_12170 = G__12189;
chunk__12162_12171 = G__12190;
count__12163_12172 = G__12191;
i__12164_12173 = G__12192;
continue;
}
} else {
}
}
break;
}
}
}

var new_ks = ((cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound))?newk:clojure.set.difference.call(null,cljs.core.set.call(null,newk),cljs.core.set.call(null,oldk)));
if(cljs.core.empty_QMARK_.call(null,new_ks)){
return null;
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newks!!!!!!!","compo-newks!!!!!!!",1607733632),tiltontec.cell.base.ia_type.call(null,me),cljs.core.count.call(null,new_ks));

var seq__12165 = cljs.core.seq.call(null,new_ks);
var chunk__12166 = null;
var count__12167 = (0);
var i__12168 = (0);
while(true){
if((i__12168 < count__12167)){
var k = cljs.core._nth.call(null,chunk__12166,i__12168);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newk-add","compo-newk-add",1109141498),tiltontec.cell.base.ia_type.call(null,me),tiltontec.cell.base.ia_type.call(null,k));

tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__12193 = seq__12165;
var G__12194 = chunk__12166;
var G__12195 = count__12167;
var G__12196 = (i__12168 + (1));
seq__12165 = G__12193;
chunk__12166 = G__12194;
count__12167 = G__12195;
i__12168 = G__12196;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12165);
if(temp__4425__auto__){
var seq__12165__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12165__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__12165__$1);
var G__12197 = cljs.core.chunk_rest.call(null,seq__12165__$1);
var G__12198 = c__7021__auto__;
var G__12199 = cljs.core.count.call(null,c__7021__auto__);
var G__12200 = (0);
seq__12165 = G__12197;
chunk__12166 = G__12198;
count__12167 = G__12199;
i__12168 = G__12200;
continue;
} else {
var k = cljs.core.first.call(null,seq__12165__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newk-add","compo-newk-add",1109141498),tiltontec.cell.base.ia_type.call(null,me),tiltontec.cell.base.ia_type.call(null,k));

tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__12201 = cljs.core.next.call(null,seq__12165__$1);
var G__12202 = null;
var G__12203 = (0);
var G__12204 = (0);
seq__12165 = G__12201;
chunk__12166 = G__12202;
count__12167 = G__12203;
i__12168 = G__12204;
continue;
}
} else {
return null;
}
}
break;
}
}
});
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slot-data","slot-data",1146367809),new cljs.core.Keyword("tiltontec.qxia.types","m.Picker","tiltontec.qxia.types/m.Picker",-1343372926)], null),(function (_,me,new$,old,c){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
var p = tiltontec.qxia.base.qxme.call(null,me);
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
var seq__12205_12213 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,old)));
var chunk__12206_12214 = null;
var count__12207_12215 = (0);
var i__12208_12216 = (0);
while(true){
if((i__12208_12216 < count__12207_12215)){
var n_12217 = cljs.core._nth.call(null,chunk__12206_12214,i__12208_12216);
p.removeSlot(n_12217);

var G__12218 = seq__12205_12213;
var G__12219 = chunk__12206_12214;
var G__12220 = count__12207_12215;
var G__12221 = (i__12208_12216 + (1));
seq__12205_12213 = G__12218;
chunk__12206_12214 = G__12219;
count__12207_12215 = G__12220;
i__12208_12216 = G__12221;
continue;
} else {
var temp__4425__auto___12222 = cljs.core.seq.call(null,seq__12205_12213);
if(temp__4425__auto___12222){
var seq__12205_12223__$1 = temp__4425__auto___12222;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12205_12223__$1)){
var c__7021__auto___12224 = cljs.core.chunk_first.call(null,seq__12205_12223__$1);
var G__12225 = cljs.core.chunk_rest.call(null,seq__12205_12223__$1);
var G__12226 = c__7021__auto___12224;
var G__12227 = cljs.core.count.call(null,c__7021__auto___12224);
var G__12228 = (0);
seq__12205_12213 = G__12225;
chunk__12206_12214 = G__12226;
count__12207_12215 = G__12227;
i__12208_12216 = G__12228;
continue;
} else {
var n_12229 = cljs.core.first.call(null,seq__12205_12223__$1);
p.removeSlot(n_12229);

var G__12230 = cljs.core.next.call(null,seq__12205_12223__$1);
var G__12231 = null;
var G__12232 = (0);
var G__12233 = (0);
seq__12205_12213 = G__12230;
chunk__12206_12214 = G__12231;
count__12207_12215 = G__12232;
i__12208_12216 = G__12233;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__12209 = cljs.core.seq.call(null,new$);
var chunk__12210 = null;
var count__12211 = (0);
var i__12212 = (0);
while(true){
if((i__12212 < count__12211)){
var sd = cljs.core._nth.call(null,chunk__12210,i__12212);
var da_12234 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_12234);

var G__12235 = seq__12209;
var G__12236 = chunk__12210;
var G__12237 = count__12211;
var G__12238 = (i__12212 + (1));
seq__12209 = G__12235;
chunk__12210 = G__12236;
count__12211 = G__12237;
i__12212 = G__12238;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12209);
if(temp__4425__auto__){
var seq__12209__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12209__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__12209__$1);
var G__12239 = cljs.core.chunk_rest.call(null,seq__12209__$1);
var G__12240 = c__7021__auto__;
var G__12241 = cljs.core.count.call(null,c__7021__auto__);
var G__12242 = (0);
seq__12209 = G__12239;
chunk__12210 = G__12240;
count__12211 = G__12241;
i__12212 = G__12242;
continue;
} else {
var sd = cljs.core.first.call(null,seq__12209__$1);
var da_12243 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_12243);

var G__12244 = cljs.core.next.call(null,seq__12209__$1);
var G__12245 = null;
var G__12246 = (0);
var G__12247 = (0);
seq__12209 = G__12244;
chunk__12210 = G__12245;
count__12211 = G__12246;
i__12212 = G__12247;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070),new cljs.core.Keyword("tiltontec.qxia.types","m.Input","tiltontec.qxia.types/m.Input",-509810846)], null),(function (_,me,new_fn,old,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
if(cljs.core.truth_(new_fn)){
var form = tiltontec.qxia.base.qxme.call(null,tiltontec.model.core.qx_par.call(null,me));
if(cljs.core.truth_(form)){
} else {
throw (new Error("Assert failed: form"));
}

var vmgr = form.getValidationManager();
return vmgr.add(tiltontec.qxia.base.qxme.call(null,me),new_fn);
} else {
return null;
}
}));
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("tiltontec.qxia.types","m.MValue","tiltontec.qxia.types/m.MValue",-994870885)], null),(function (_,me,new$,old,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
return tiltontec.qxia.base.qxme.call(null,me).setValue(new$);
}));
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drawing","drawing",1181749528),new cljs.core.Keyword("tiltontec.qxia.types","m.Canvas","tiltontec.qxia.types/m.Canvas",-1210794783)], null),(function (_,me,new_fn,___$1,___$2){
if(cljs.core.truth_(new_fn)){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
return new_fn.call(null,me);
}));
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword("tiltontec.qxia.types","m.Widget","tiltontec.qxia.types/m.Widget",2103465403)], null),(function (_,me,new_anchor,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
if(cljs.core.truth_(new_anchor)){
return tiltontec.qxia.base.qxme.call(null,me).setAnchor(tiltontec.qxia.base.qxme.call(null,new_anchor));
} else {
return null;
}
}));
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("tiltontec.qxia.types","TextField","tiltontec.qxia.types/TextField",953963089)], null),(function (_,me,new$,___$1,___$2){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-make-qx","post-make-qx",-332979639),me], null),(function (opcode,defer_info){
return tiltontec.qxia.base.qxme.call(null,me).setValue(new$);
}));
}));
