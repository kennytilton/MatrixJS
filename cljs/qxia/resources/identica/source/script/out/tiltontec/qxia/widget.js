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
var seq__11458_11466 = cljs.core.seq.call(null,old);
var chunk__11459_11467 = null;
var count__11460_11468 = (0);
var i__11461_11469 = (0);
while(true){
if((i__11461_11469 < count__11460_11468)){
var page_11470 = cljs.core._nth.call(null,chunk__11459_11467,i__11461_11469);
var temp__4425__auto___11471 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_11470));
if(cljs.core.truth_(temp__4425__auto___11471)){
var ept_11472 = temp__4425__auto___11471;
routing.remove(ept_11472);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_11470));

var G__11473 = seq__11458_11466;
var G__11474 = chunk__11459_11467;
var G__11475 = count__11460_11468;
var G__11476 = (i__11461_11469 + (1));
seq__11458_11466 = G__11473;
chunk__11459_11467 = G__11474;
count__11460_11468 = G__11475;
i__11461_11469 = G__11476;
continue;
} else {
var temp__4425__auto___11477 = cljs.core.seq.call(null,seq__11458_11466);
if(temp__4425__auto___11477){
var seq__11458_11478__$1 = temp__4425__auto___11477;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11458_11478__$1)){
var c__7021__auto___11479 = cljs.core.chunk_first.call(null,seq__11458_11478__$1);
var G__11480 = cljs.core.chunk_rest.call(null,seq__11458_11478__$1);
var G__11481 = c__7021__auto___11479;
var G__11482 = cljs.core.count.call(null,c__7021__auto___11479);
var G__11483 = (0);
seq__11458_11466 = G__11480;
chunk__11459_11467 = G__11481;
count__11460_11468 = G__11482;
i__11461_11469 = G__11483;
continue;
} else {
var page_11484 = cljs.core.first.call(null,seq__11458_11478__$1);
var temp__4425__auto___11485__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_11484));
if(cljs.core.truth_(temp__4425__auto___11485__$1)){
var ept_11486 = temp__4425__auto___11485__$1;
routing.remove(ept_11486);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_11484));

var G__11487 = cljs.core.next.call(null,seq__11458_11478__$1);
var G__11488 = null;
var G__11489 = (0);
var G__11490 = (0);
seq__11458_11466 = G__11487;
chunk__11459_11467 = G__11488;
count__11460_11468 = G__11489;
i__11461_11469 = G__11490;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__11462 = cljs.core.seq.call(null,new$);
var chunk__11463 = null;
var count__11464 = (0);
var i__11465 = (0);
while(true){
if((i__11465 < count__11464)){
var page = cljs.core._nth.call(null,chunk__11463,i__11465);
var qx_page_11491 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_11491);

var temp__4425__auto___11492 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___11492)){
var ept_11493 = temp__4425__auto___11492;
routing.onGet(ept_11493,shower,qx_page_11491);
} else {
}

var G__11494 = seq__11462;
var G__11495 = chunk__11463;
var G__11496 = count__11464;
var G__11497 = (i__11465 + (1));
seq__11462 = G__11494;
chunk__11463 = G__11495;
count__11464 = G__11496;
i__11465 = G__11497;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11462);
if(temp__4425__auto__){
var seq__11462__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11462__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__11462__$1);
var G__11498 = cljs.core.chunk_rest.call(null,seq__11462__$1);
var G__11499 = c__7021__auto__;
var G__11500 = cljs.core.count.call(null,c__7021__auto__);
var G__11501 = (0);
seq__11462 = G__11498;
chunk__11463 = G__11499;
count__11464 = G__11500;
i__11465 = G__11501;
continue;
} else {
var page = cljs.core.first.call(null,seq__11462__$1);
var qx_page_11502 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_11502);

var temp__4425__auto___11503__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___11503__$1)){
var ept_11504 = temp__4425__auto___11503__$1;
routing.onGet(ept_11504,shower,qx_page_11502);
} else {
}

var G__11505 = cljs.core.next.call(null,seq__11462__$1);
var G__11506 = null;
var G__11507 = (0);
var G__11508 = (0);
seq__11462 = G__11505;
chunk__11463 = G__11506;
count__11464 = G__11507;
i__11465 = G__11508;
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
var seq__11509_11519 = cljs.core.seq.call(null,old);
var chunk__11510_11520 = null;
var count__11511_11521 = (0);
var i__11512_11522 = (0);
while(true){
if((i__11512_11522 < count__11511_11521)){
var k_11523 = cljs.core._nth.call(null,chunk__11510_11520,i__11512_11522);
var qxk_11524 = tiltontec.qxia.base.qxme.call(null,k_11523);
var label_11525 = tiltontec.model.core.md_get.call(null,k_11523,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_11524);

var G__11526 = seq__11509_11519;
var G__11527 = chunk__11510_11520;
var G__11528 = count__11511_11521;
var G__11529 = (i__11512_11522 + (1));
seq__11509_11519 = G__11526;
chunk__11510_11520 = G__11527;
count__11511_11521 = G__11528;
i__11512_11522 = G__11529;
continue;
} else {
var temp__4425__auto___11530 = cljs.core.seq.call(null,seq__11509_11519);
if(temp__4425__auto___11530){
var seq__11509_11531__$1 = temp__4425__auto___11530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11509_11531__$1)){
var c__7021__auto___11532 = cljs.core.chunk_first.call(null,seq__11509_11531__$1);
var G__11533 = cljs.core.chunk_rest.call(null,seq__11509_11531__$1);
var G__11534 = c__7021__auto___11532;
var G__11535 = cljs.core.count.call(null,c__7021__auto___11532);
var G__11536 = (0);
seq__11509_11519 = G__11533;
chunk__11510_11520 = G__11534;
count__11511_11521 = G__11535;
i__11512_11522 = G__11536;
continue;
} else {
var k_11537 = cljs.core.first.call(null,seq__11509_11531__$1);
var qxk_11538 = tiltontec.qxia.base.qxme.call(null,k_11537);
var label_11539 = tiltontec.model.core.md_get.call(null,k_11537,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_11538);

var G__11540 = cljs.core.next.call(null,seq__11509_11531__$1);
var G__11541 = null;
var G__11542 = (0);
var G__11543 = (0);
seq__11509_11519 = G__11540;
chunk__11510_11520 = G__11541;
count__11511_11521 = G__11542;
i__11512_11522 = G__11543;
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
var seq__11513 = cljs.core.seq.call(null,kids);
var chunk__11514 = null;
var count__11515 = (0);
var i__11516 = (0);
while(true){
if((i__11516 < count__11515)){
var k = cljs.core._nth.call(null,chunk__11514,i__11516);
var G__11517_11544 = (((tiltontec.cell.base.ia_type.call(null,k) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,k).fqn:null);
switch (G__11517_11544) {
case "tiltontec.qxia.types/m.RadioGroupStub":
tiltontec.qxia.base.form_build_radio_group_stub.call(null,me,k);

break;
default:
var qxk_11546 = tiltontec.qxia.base.qxme.call(null,k);
var label_11547 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_11546,label_11547);

}

var G__11548 = seq__11513;
var G__11549 = chunk__11514;
var G__11550 = count__11515;
var G__11551 = (i__11516 + (1));
seq__11513 = G__11548;
chunk__11514 = G__11549;
count__11515 = G__11550;
i__11516 = G__11551;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__11513);
if(temp__4425__auto____$1){
var seq__11513__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11513__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__11513__$1);
var G__11552 = cljs.core.chunk_rest.call(null,seq__11513__$1);
var G__11553 = c__7021__auto__;
var G__11554 = cljs.core.count.call(null,c__7021__auto__);
var G__11555 = (0);
seq__11513 = G__11552;
chunk__11514 = G__11553;
count__11515 = G__11554;
i__11516 = G__11555;
continue;
} else {
var k = cljs.core.first.call(null,seq__11513__$1);
var G__11518_11556 = (((tiltontec.cell.base.ia_type.call(null,k) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,k).fqn:null);
switch (G__11518_11556) {
case "tiltontec.qxia.types/m.RadioGroupStub":
tiltontec.qxia.base.form_build_radio_group_stub.call(null,me,k);

break;
default:
var qxk_11558 = tiltontec.qxia.base.qxme.call(null,k);
var label_11559 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_11558,label_11559);

}

var G__11560 = cljs.core.next.call(null,seq__11513__$1);
var G__11561 = null;
var G__11562 = (0);
var G__11563 = (0);
seq__11513 = G__11560;
chunk__11514 = G__11561;
count__11515 = G__11562;
i__11516 = G__11563;
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

var temp__4425__auto___11568 = tiltontec.model.core.md_getx.call(null,new cljs.core.Keyword(null,"ini-nav","ini-nav",1436917737),page,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto___11568)){
var kids_11569 = temp__4425__auto___11568;
var content_11570 = qx_page.getContent();
var seq__11564_11571 = cljs.core.seq.call(null,kids_11569);
var chunk__11565_11572 = null;
var count__11566_11573 = (0);
var i__11567_11574 = (0);
while(true){
if((i__11567_11574 < count__11566_11573)){
var k_11575 = cljs.core._nth.call(null,chunk__11565_11572,i__11567_11574);
var qxk_11576 = tiltontec.qxia.base.qxme.call(null,k_11575);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"navpage-initialize-add","navpage-initialize-add",1958684224),tiltontec.cell.base.ia_type.call(null,k_11575));

content_11570.add(qxk_11576);

var G__11577 = seq__11564_11571;
var G__11578 = chunk__11565_11572;
var G__11579 = count__11566_11573;
var G__11580 = (i__11567_11574 + (1));
seq__11564_11571 = G__11577;
chunk__11565_11572 = G__11578;
count__11566_11573 = G__11579;
i__11567_11574 = G__11580;
continue;
} else {
var temp__4425__auto___11581__$1 = cljs.core.seq.call(null,seq__11564_11571);
if(temp__4425__auto___11581__$1){
var seq__11564_11582__$1 = temp__4425__auto___11581__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11564_11582__$1)){
var c__7021__auto___11583 = cljs.core.chunk_first.call(null,seq__11564_11582__$1);
var G__11584 = cljs.core.chunk_rest.call(null,seq__11564_11582__$1);
var G__11585 = c__7021__auto___11583;
var G__11586 = cljs.core.count.call(null,c__7021__auto___11583);
var G__11587 = (0);
seq__11564_11571 = G__11584;
chunk__11565_11572 = G__11585;
count__11566_11573 = G__11586;
i__11567_11574 = G__11587;
continue;
} else {
var k_11588 = cljs.core.first.call(null,seq__11564_11582__$1);
var qxk_11589 = tiltontec.qxia.base.qxme.call(null,k_11588);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"navpage-initialize-add","navpage-initialize-add",1958684224),tiltontec.cell.base.ia_type.call(null,k_11588));

content_11570.add(qxk_11589);

var G__11590 = cljs.core.next.call(null,seq__11564_11582__$1);
var G__11591 = null;
var G__11592 = (0);
var G__11593 = (0);
seq__11564_11571 = G__11590;
chunk__11565_11572 = G__11591;
count__11566_11573 = G__11592;
i__11567_11574 = G__11593;
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

var seq__11594 = cljs.core.seq.call(null,newk);
var chunk__11595 = null;
var count__11596 = (0);
var i__11597 = (0);
while(true){
if((i__11597 < count__11596)){
var k = cljs.core._nth.call(null,chunk__11595,i__11597);
var qxk_11598 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_11598);

var G__11599 = seq__11594;
var G__11600 = chunk__11595;
var G__11601 = count__11596;
var G__11602 = (i__11597 + (1));
seq__11594 = G__11599;
chunk__11595 = G__11600;
count__11596 = G__11601;
i__11597 = G__11602;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11594);
if(temp__4425__auto__){
var seq__11594__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11594__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__11594__$1);
var G__11603 = cljs.core.chunk_rest.call(null,seq__11594__$1);
var G__11604 = c__7021__auto__;
var G__11605 = cljs.core.count.call(null,c__7021__auto__);
var G__11606 = (0);
seq__11594 = G__11603;
chunk__11595 = G__11604;
count__11596 = G__11605;
i__11597 = G__11606;
continue;
} else {
var k = cljs.core.first.call(null,seq__11594__$1);
var qxk_11607 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_11607);

var G__11608 = cljs.core.next.call(null,seq__11594__$1);
var G__11609 = null;
var G__11610 = (0);
var G__11611 = (0);
seq__11594 = G__11608;
chunk__11595 = G__11609;
count__11596 = G__11610;
i__11597 = G__11611;
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
var G__11612 = (((tiltontec.cell.base.ia_type.call(null,me) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,me).fqn:null);
switch (G__11612) {
case "tiltontec.qxia.types/m.Single":
return null;

break;
case "tiltontec.qxia.types/m.RadioGroupStub":
return null;

break;
default:


return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),((function (G__11612){
return (function (opcode,defer_info){
return tiltontec.qxia.widget.kids_refresh.call(null,me,newk,oldk);
});})(G__11612))
);

}
}));
tiltontec.qxia.widget.kids_refresh = (function tiltontec$qxia$widget$kids_refresh(me,newk,oldk){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
} else {
var lostks_11630 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_11630)){
} else {
var seq__11622_11631 = cljs.core.seq.call(null,lostks_11630);
var chunk__11623_11632 = null;
var count__11624_11633 = (0);
var i__11625_11634 = (0);
while(true){
if((i__11625_11634 < count__11624_11633)){
var kid_11635 = cljs.core._nth.call(null,chunk__11623_11632,i__11625_11634);
var qxk_11636 = tiltontec.qxia.base.qxme.call(null,kid_11635);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_11635,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_11636);
}

qxk_11636.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_11635);

var G__11637 = seq__11622_11631;
var G__11638 = chunk__11623_11632;
var G__11639 = count__11624_11633;
var G__11640 = (i__11625_11634 + (1));
seq__11622_11631 = G__11637;
chunk__11623_11632 = G__11638;
count__11624_11633 = G__11639;
i__11625_11634 = G__11640;
continue;
} else {
var temp__4425__auto___11641 = cljs.core.seq.call(null,seq__11622_11631);
if(temp__4425__auto___11641){
var seq__11622_11642__$1 = temp__4425__auto___11641;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11622_11642__$1)){
var c__7021__auto___11643 = cljs.core.chunk_first.call(null,seq__11622_11642__$1);
var G__11644 = cljs.core.chunk_rest.call(null,seq__11622_11642__$1);
var G__11645 = c__7021__auto___11643;
var G__11646 = cljs.core.count.call(null,c__7021__auto___11643);
var G__11647 = (0);
seq__11622_11631 = G__11644;
chunk__11623_11632 = G__11645;
count__11624_11633 = G__11646;
i__11625_11634 = G__11647;
continue;
} else {
var kid_11648 = cljs.core.first.call(null,seq__11622_11642__$1);
var qxk_11649 = tiltontec.qxia.base.qxme.call(null,kid_11648);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_11648,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_11649);
}

qxk_11649.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_11648);

var G__11650 = cljs.core.next.call(null,seq__11622_11642__$1);
var G__11651 = null;
var G__11652 = (0);
var G__11653 = (0);
seq__11622_11631 = G__11650;
chunk__11623_11632 = G__11651;
count__11624_11633 = G__11652;
i__11625_11634 = G__11653;
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

var seq__11626 = cljs.core.seq.call(null,new_ks);
var chunk__11627 = null;
var count__11628 = (0);
var i__11629 = (0);
while(true){
if((i__11629 < count__11628)){
var k = cljs.core._nth.call(null,chunk__11627,i__11629);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newk-add","compo-newk-add",1109141498),tiltontec.cell.base.ia_type.call(null,me),tiltontec.cell.base.ia_type.call(null,k));

tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__11654 = seq__11626;
var G__11655 = chunk__11627;
var G__11656 = count__11628;
var G__11657 = (i__11629 + (1));
seq__11626 = G__11654;
chunk__11627 = G__11655;
count__11628 = G__11656;
i__11629 = G__11657;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11626);
if(temp__4425__auto__){
var seq__11626__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11626__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__11626__$1);
var G__11658 = cljs.core.chunk_rest.call(null,seq__11626__$1);
var G__11659 = c__7021__auto__;
var G__11660 = cljs.core.count.call(null,c__7021__auto__);
var G__11661 = (0);
seq__11626 = G__11658;
chunk__11627 = G__11659;
count__11628 = G__11660;
i__11629 = G__11661;
continue;
} else {
var k = cljs.core.first.call(null,seq__11626__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newk-add","compo-newk-add",1109141498),tiltontec.cell.base.ia_type.call(null,me),tiltontec.cell.base.ia_type.call(null,k));

tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__11662 = cljs.core.next.call(null,seq__11626__$1);
var G__11663 = null;
var G__11664 = (0);
var G__11665 = (0);
seq__11626 = G__11662;
chunk__11627 = G__11663;
count__11628 = G__11664;
i__11629 = G__11665;
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
var seq__11666_11674 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,old)));
var chunk__11667_11675 = null;
var count__11668_11676 = (0);
var i__11669_11677 = (0);
while(true){
if((i__11669_11677 < count__11668_11676)){
var n_11678 = cljs.core._nth.call(null,chunk__11667_11675,i__11669_11677);
p.removeSlot(n_11678);

var G__11679 = seq__11666_11674;
var G__11680 = chunk__11667_11675;
var G__11681 = count__11668_11676;
var G__11682 = (i__11669_11677 + (1));
seq__11666_11674 = G__11679;
chunk__11667_11675 = G__11680;
count__11668_11676 = G__11681;
i__11669_11677 = G__11682;
continue;
} else {
var temp__4425__auto___11683 = cljs.core.seq.call(null,seq__11666_11674);
if(temp__4425__auto___11683){
var seq__11666_11684__$1 = temp__4425__auto___11683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11666_11684__$1)){
var c__7021__auto___11685 = cljs.core.chunk_first.call(null,seq__11666_11684__$1);
var G__11686 = cljs.core.chunk_rest.call(null,seq__11666_11684__$1);
var G__11687 = c__7021__auto___11685;
var G__11688 = cljs.core.count.call(null,c__7021__auto___11685);
var G__11689 = (0);
seq__11666_11674 = G__11686;
chunk__11667_11675 = G__11687;
count__11668_11676 = G__11688;
i__11669_11677 = G__11689;
continue;
} else {
var n_11690 = cljs.core.first.call(null,seq__11666_11684__$1);
p.removeSlot(n_11690);

var G__11691 = cljs.core.next.call(null,seq__11666_11684__$1);
var G__11692 = null;
var G__11693 = (0);
var G__11694 = (0);
seq__11666_11674 = G__11691;
chunk__11667_11675 = G__11692;
count__11668_11676 = G__11693;
i__11669_11677 = G__11694;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__11670 = cljs.core.seq.call(null,new$);
var chunk__11671 = null;
var count__11672 = (0);
var i__11673 = (0);
while(true){
if((i__11673 < count__11672)){
var sd = cljs.core._nth.call(null,chunk__11671,i__11673);
var da_11695 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_11695);

var G__11696 = seq__11670;
var G__11697 = chunk__11671;
var G__11698 = count__11672;
var G__11699 = (i__11673 + (1));
seq__11670 = G__11696;
chunk__11671 = G__11697;
count__11672 = G__11698;
i__11673 = G__11699;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11670);
if(temp__4425__auto__){
var seq__11670__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11670__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__11670__$1);
var G__11700 = cljs.core.chunk_rest.call(null,seq__11670__$1);
var G__11701 = c__7021__auto__;
var G__11702 = cljs.core.count.call(null,c__7021__auto__);
var G__11703 = (0);
seq__11670 = G__11700;
chunk__11671 = G__11701;
count__11672 = G__11702;
i__11673 = G__11703;
continue;
} else {
var sd = cljs.core.first.call(null,seq__11670__$1);
var da_11704 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_11704);

var G__11705 = cljs.core.next.call(null,seq__11670__$1);
var G__11706 = null;
var G__11707 = (0);
var G__11708 = (0);
seq__11670 = G__11705;
chunk__11671 = G__11706;
count__11672 = G__11707;
i__11673 = G__11708;
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
