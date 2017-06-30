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
var seq__14435_14443 = cljs.core.seq.call(null,old);
var chunk__14436_14444 = null;
var count__14437_14445 = (0);
var i__14438_14446 = (0);
while(true){
if((i__14438_14446 < count__14437_14445)){
var page_14447 = cljs.core._nth.call(null,chunk__14436_14444,i__14438_14446);
var temp__4425__auto___14448 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_14447));
if(cljs.core.truth_(temp__4425__auto___14448)){
var ept_14449 = temp__4425__auto___14448;
routing.remove(ept_14449);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_14447));

var G__14450 = seq__14435_14443;
var G__14451 = chunk__14436_14444;
var G__14452 = count__14437_14445;
var G__14453 = (i__14438_14446 + (1));
seq__14435_14443 = G__14450;
chunk__14436_14444 = G__14451;
count__14437_14445 = G__14452;
i__14438_14446 = G__14453;
continue;
} else {
var temp__4425__auto___14454 = cljs.core.seq.call(null,seq__14435_14443);
if(temp__4425__auto___14454){
var seq__14435_14455__$1 = temp__4425__auto___14454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14435_14455__$1)){
var c__7021__auto___14456 = cljs.core.chunk_first.call(null,seq__14435_14455__$1);
var G__14457 = cljs.core.chunk_rest.call(null,seq__14435_14455__$1);
var G__14458 = c__7021__auto___14456;
var G__14459 = cljs.core.count.call(null,c__7021__auto___14456);
var G__14460 = (0);
seq__14435_14443 = G__14457;
chunk__14436_14444 = G__14458;
count__14437_14445 = G__14459;
i__14438_14446 = G__14460;
continue;
} else {
var page_14461 = cljs.core.first.call(null,seq__14435_14455__$1);
var temp__4425__auto___14462__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_14461));
if(cljs.core.truth_(temp__4425__auto___14462__$1)){
var ept_14463 = temp__4425__auto___14462__$1;
routing.remove(ept_14463);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_14461));

var G__14464 = cljs.core.next.call(null,seq__14435_14455__$1);
var G__14465 = null;
var G__14466 = (0);
var G__14467 = (0);
seq__14435_14443 = G__14464;
chunk__14436_14444 = G__14465;
count__14437_14445 = G__14466;
i__14438_14446 = G__14467;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__14439 = cljs.core.seq.call(null,new$);
var chunk__14440 = null;
var count__14441 = (0);
var i__14442 = (0);
while(true){
if((i__14442 < count__14441)){
var page = cljs.core._nth.call(null,chunk__14440,i__14442);
var qx_page_14468 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_14468);

var temp__4425__auto___14469 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___14469)){
var ept_14470 = temp__4425__auto___14469;
routing.onGet(ept_14470,shower,qx_page_14468);
} else {
}

var G__14471 = seq__14439;
var G__14472 = chunk__14440;
var G__14473 = count__14441;
var G__14474 = (i__14442 + (1));
seq__14439 = G__14471;
chunk__14440 = G__14472;
count__14441 = G__14473;
i__14442 = G__14474;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14439);
if(temp__4425__auto__){
var seq__14439__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14439__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__14439__$1);
var G__14475 = cljs.core.chunk_rest.call(null,seq__14439__$1);
var G__14476 = c__7021__auto__;
var G__14477 = cljs.core.count.call(null,c__7021__auto__);
var G__14478 = (0);
seq__14439 = G__14475;
chunk__14440 = G__14476;
count__14441 = G__14477;
i__14442 = G__14478;
continue;
} else {
var page = cljs.core.first.call(null,seq__14439__$1);
var qx_page_14479 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_14479);

var temp__4425__auto___14480__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___14480__$1)){
var ept_14481 = temp__4425__auto___14480__$1;
routing.onGet(ept_14481,shower,qx_page_14479);
} else {
}

var G__14482 = cljs.core.next.call(null,seq__14439__$1);
var G__14483 = null;
var G__14484 = (0);
var G__14485 = (0);
seq__14439 = G__14482;
chunk__14440 = G__14483;
count__14441 = G__14484;
i__14442 = G__14485;
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
var seq__14486_14496 = cljs.core.seq.call(null,old);
var chunk__14487_14497 = null;
var count__14488_14498 = (0);
var i__14489_14499 = (0);
while(true){
if((i__14489_14499 < count__14488_14498)){
var k_14500 = cljs.core._nth.call(null,chunk__14487_14497,i__14489_14499);
var qxk_14501 = tiltontec.qxia.base.qxme.call(null,k_14500);
var label_14502 = tiltontec.model.core.md_get.call(null,k_14500,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_14501);

var G__14503 = seq__14486_14496;
var G__14504 = chunk__14487_14497;
var G__14505 = count__14488_14498;
var G__14506 = (i__14489_14499 + (1));
seq__14486_14496 = G__14503;
chunk__14487_14497 = G__14504;
count__14488_14498 = G__14505;
i__14489_14499 = G__14506;
continue;
} else {
var temp__4425__auto___14507 = cljs.core.seq.call(null,seq__14486_14496);
if(temp__4425__auto___14507){
var seq__14486_14508__$1 = temp__4425__auto___14507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14486_14508__$1)){
var c__7021__auto___14509 = cljs.core.chunk_first.call(null,seq__14486_14508__$1);
var G__14510 = cljs.core.chunk_rest.call(null,seq__14486_14508__$1);
var G__14511 = c__7021__auto___14509;
var G__14512 = cljs.core.count.call(null,c__7021__auto___14509);
var G__14513 = (0);
seq__14486_14496 = G__14510;
chunk__14487_14497 = G__14511;
count__14488_14498 = G__14512;
i__14489_14499 = G__14513;
continue;
} else {
var k_14514 = cljs.core.first.call(null,seq__14486_14508__$1);
var qxk_14515 = tiltontec.qxia.base.qxme.call(null,k_14514);
var label_14516 = tiltontec.model.core.md_get.call(null,k_14514,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_14515);

var G__14517 = cljs.core.next.call(null,seq__14486_14508__$1);
var G__14518 = null;
var G__14519 = (0);
var G__14520 = (0);
seq__14486_14496 = G__14517;
chunk__14487_14497 = G__14518;
count__14488_14498 = G__14519;
i__14489_14499 = G__14520;
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
var seq__14490 = cljs.core.seq.call(null,kids);
var chunk__14491 = null;
var count__14492 = (0);
var i__14493 = (0);
while(true){
if((i__14493 < count__14492)){
var k = cljs.core._nth.call(null,chunk__14491,i__14493);
var G__14494_14521 = (((tiltontec.cell.base.ia_type.call(null,k) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,k).fqn:null);
switch (G__14494_14521) {
case "tiltontec.qxia.types/m.RadioGroupStub":
tiltontec.qxia.base.form_build_radio_group_stub.call(null,me,k);

break;
default:
var qxk_14523 = tiltontec.qxia.base.qxme.call(null,k);
var label_14524 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_14523,label_14524);

}

var G__14525 = seq__14490;
var G__14526 = chunk__14491;
var G__14527 = count__14492;
var G__14528 = (i__14493 + (1));
seq__14490 = G__14525;
chunk__14491 = G__14526;
count__14492 = G__14527;
i__14493 = G__14528;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__14490);
if(temp__4425__auto____$1){
var seq__14490__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14490__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__14490__$1);
var G__14529 = cljs.core.chunk_rest.call(null,seq__14490__$1);
var G__14530 = c__7021__auto__;
var G__14531 = cljs.core.count.call(null,c__7021__auto__);
var G__14532 = (0);
seq__14490 = G__14529;
chunk__14491 = G__14530;
count__14492 = G__14531;
i__14493 = G__14532;
continue;
} else {
var k = cljs.core.first.call(null,seq__14490__$1);
var G__14495_14533 = (((tiltontec.cell.base.ia_type.call(null,k) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,k).fqn:null);
switch (G__14495_14533) {
case "tiltontec.qxia.types/m.RadioGroupStub":
tiltontec.qxia.base.form_build_radio_group_stub.call(null,me,k);

break;
default:
var qxk_14535 = tiltontec.qxia.base.qxme.call(null,k);
var label_14536 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_14535,label_14536);

}

var G__14537 = cljs.core.next.call(null,seq__14490__$1);
var G__14538 = null;
var G__14539 = (0);
var G__14540 = (0);
seq__14490 = G__14537;
chunk__14491 = G__14538;
count__14492 = G__14539;
i__14493 = G__14540;
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

var temp__4425__auto___14545 = tiltontec.model.core.md_getx.call(null,new cljs.core.Keyword(null,"ini-nav","ini-nav",1436917737),page,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto___14545)){
var kids_14546 = temp__4425__auto___14545;
var content_14547 = qx_page.getContent();
var seq__14541_14548 = cljs.core.seq.call(null,kids_14546);
var chunk__14542_14549 = null;
var count__14543_14550 = (0);
var i__14544_14551 = (0);
while(true){
if((i__14544_14551 < count__14543_14550)){
var k_14552 = cljs.core._nth.call(null,chunk__14542_14549,i__14544_14551);
var qxk_14553 = tiltontec.qxia.base.qxme.call(null,k_14552);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"navpage-initialize-add","navpage-initialize-add",1958684224),tiltontec.cell.base.ia_type.call(null,k_14552));

content_14547.add(qxk_14553);

var G__14554 = seq__14541_14548;
var G__14555 = chunk__14542_14549;
var G__14556 = count__14543_14550;
var G__14557 = (i__14544_14551 + (1));
seq__14541_14548 = G__14554;
chunk__14542_14549 = G__14555;
count__14543_14550 = G__14556;
i__14544_14551 = G__14557;
continue;
} else {
var temp__4425__auto___14558__$1 = cljs.core.seq.call(null,seq__14541_14548);
if(temp__4425__auto___14558__$1){
var seq__14541_14559__$1 = temp__4425__auto___14558__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14541_14559__$1)){
var c__7021__auto___14560 = cljs.core.chunk_first.call(null,seq__14541_14559__$1);
var G__14561 = cljs.core.chunk_rest.call(null,seq__14541_14559__$1);
var G__14562 = c__7021__auto___14560;
var G__14563 = cljs.core.count.call(null,c__7021__auto___14560);
var G__14564 = (0);
seq__14541_14548 = G__14561;
chunk__14542_14549 = G__14562;
count__14543_14550 = G__14563;
i__14544_14551 = G__14564;
continue;
} else {
var k_14565 = cljs.core.first.call(null,seq__14541_14559__$1);
var qxk_14566 = tiltontec.qxia.base.qxme.call(null,k_14565);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"navpage-initialize-add","navpage-initialize-add",1958684224),tiltontec.cell.base.ia_type.call(null,k_14565));

content_14547.add(qxk_14566);

var G__14567 = cljs.core.next.call(null,seq__14541_14559__$1);
var G__14568 = null;
var G__14569 = (0);
var G__14570 = (0);
seq__14541_14548 = G__14567;
chunk__14542_14549 = G__14568;
count__14543_14550 = G__14569;
i__14544_14551 = G__14570;
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

var seq__14571 = cljs.core.seq.call(null,newk);
var chunk__14572 = null;
var count__14573 = (0);
var i__14574 = (0);
while(true){
if((i__14574 < count__14573)){
var k = cljs.core._nth.call(null,chunk__14572,i__14574);
var qxk_14575 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_14575);

var G__14576 = seq__14571;
var G__14577 = chunk__14572;
var G__14578 = count__14573;
var G__14579 = (i__14574 + (1));
seq__14571 = G__14576;
chunk__14572 = G__14577;
count__14573 = G__14578;
i__14574 = G__14579;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14571);
if(temp__4425__auto__){
var seq__14571__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14571__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__14571__$1);
var G__14580 = cljs.core.chunk_rest.call(null,seq__14571__$1);
var G__14581 = c__7021__auto__;
var G__14582 = cljs.core.count.call(null,c__7021__auto__);
var G__14583 = (0);
seq__14571 = G__14580;
chunk__14572 = G__14581;
count__14573 = G__14582;
i__14574 = G__14583;
continue;
} else {
var k = cljs.core.first.call(null,seq__14571__$1);
var qxk_14584 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_14584);

var G__14585 = cljs.core.next.call(null,seq__14571__$1);
var G__14586 = null;
var G__14587 = (0);
var G__14588 = (0);
seq__14571 = G__14585;
chunk__14572 = G__14586;
count__14573 = G__14587;
i__14574 = G__14588;
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
var G__14589 = (((tiltontec.cell.base.ia_type.call(null,me) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,me).fqn:null);
switch (G__14589) {
case "tiltontec.qxia.types/m.Single":
return null;

break;
case "tiltontec.qxia.types/m.RadioGroupStub":
return null;

break;
default:


return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),((function (G__14589){
return (function (opcode,defer_info){
return tiltontec.qxia.widget.kids_refresh.call(null,me,newk,oldk);
});})(G__14589))
);

}
}));
tiltontec.qxia.widget.kids_refresh = (function tiltontec$qxia$widget$kids_refresh(me,newk,oldk){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
} else {
var lostks_14607 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_14607)){
} else {
var seq__14599_14608 = cljs.core.seq.call(null,lostks_14607);
var chunk__14600_14609 = null;
var count__14601_14610 = (0);
var i__14602_14611 = (0);
while(true){
if((i__14602_14611 < count__14601_14610)){
var kid_14612 = cljs.core._nth.call(null,chunk__14600_14609,i__14602_14611);
var qxk_14613 = tiltontec.qxia.base.qxme.call(null,kid_14612);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_14612,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_14613);
}

qxk_14613.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_14612);

var G__14614 = seq__14599_14608;
var G__14615 = chunk__14600_14609;
var G__14616 = count__14601_14610;
var G__14617 = (i__14602_14611 + (1));
seq__14599_14608 = G__14614;
chunk__14600_14609 = G__14615;
count__14601_14610 = G__14616;
i__14602_14611 = G__14617;
continue;
} else {
var temp__4425__auto___14618 = cljs.core.seq.call(null,seq__14599_14608);
if(temp__4425__auto___14618){
var seq__14599_14619__$1 = temp__4425__auto___14618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14599_14619__$1)){
var c__7021__auto___14620 = cljs.core.chunk_first.call(null,seq__14599_14619__$1);
var G__14621 = cljs.core.chunk_rest.call(null,seq__14599_14619__$1);
var G__14622 = c__7021__auto___14620;
var G__14623 = cljs.core.count.call(null,c__7021__auto___14620);
var G__14624 = (0);
seq__14599_14608 = G__14621;
chunk__14600_14609 = G__14622;
count__14601_14610 = G__14623;
i__14602_14611 = G__14624;
continue;
} else {
var kid_14625 = cljs.core.first.call(null,seq__14599_14619__$1);
var qxk_14626 = tiltontec.qxia.base.qxme.call(null,kid_14625);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_14625,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_14626);
}

qxk_14626.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_14625);

var G__14627 = cljs.core.next.call(null,seq__14599_14619__$1);
var G__14628 = null;
var G__14629 = (0);
var G__14630 = (0);
seq__14599_14608 = G__14627;
chunk__14600_14609 = G__14628;
count__14601_14610 = G__14629;
i__14602_14611 = G__14630;
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

var seq__14603 = cljs.core.seq.call(null,new_ks);
var chunk__14604 = null;
var count__14605 = (0);
var i__14606 = (0);
while(true){
if((i__14606 < count__14605)){
var k = cljs.core._nth.call(null,chunk__14604,i__14606);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newk-add","compo-newk-add",1109141498),tiltontec.cell.base.ia_type.call(null,me),tiltontec.cell.base.ia_type.call(null,k));

tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__14631 = seq__14603;
var G__14632 = chunk__14604;
var G__14633 = count__14605;
var G__14634 = (i__14606 + (1));
seq__14603 = G__14631;
chunk__14604 = G__14632;
count__14605 = G__14633;
i__14606 = G__14634;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14603);
if(temp__4425__auto__){
var seq__14603__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14603__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__14603__$1);
var G__14635 = cljs.core.chunk_rest.call(null,seq__14603__$1);
var G__14636 = c__7021__auto__;
var G__14637 = cljs.core.count.call(null,c__7021__auto__);
var G__14638 = (0);
seq__14603 = G__14635;
chunk__14604 = G__14636;
count__14605 = G__14637;
i__14606 = G__14638;
continue;
} else {
var k = cljs.core.first.call(null,seq__14603__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newk-add","compo-newk-add",1109141498),tiltontec.cell.base.ia_type.call(null,me),tiltontec.cell.base.ia_type.call(null,k));

tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__14639 = cljs.core.next.call(null,seq__14603__$1);
var G__14640 = null;
var G__14641 = (0);
var G__14642 = (0);
seq__14603 = G__14639;
chunk__14604 = G__14640;
count__14605 = G__14641;
i__14606 = G__14642;
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
var seq__14643_14651 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,old)));
var chunk__14644_14652 = null;
var count__14645_14653 = (0);
var i__14646_14654 = (0);
while(true){
if((i__14646_14654 < count__14645_14653)){
var n_14655 = cljs.core._nth.call(null,chunk__14644_14652,i__14646_14654);
p.removeSlot(n_14655);

var G__14656 = seq__14643_14651;
var G__14657 = chunk__14644_14652;
var G__14658 = count__14645_14653;
var G__14659 = (i__14646_14654 + (1));
seq__14643_14651 = G__14656;
chunk__14644_14652 = G__14657;
count__14645_14653 = G__14658;
i__14646_14654 = G__14659;
continue;
} else {
var temp__4425__auto___14660 = cljs.core.seq.call(null,seq__14643_14651);
if(temp__4425__auto___14660){
var seq__14643_14661__$1 = temp__4425__auto___14660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14643_14661__$1)){
var c__7021__auto___14662 = cljs.core.chunk_first.call(null,seq__14643_14661__$1);
var G__14663 = cljs.core.chunk_rest.call(null,seq__14643_14661__$1);
var G__14664 = c__7021__auto___14662;
var G__14665 = cljs.core.count.call(null,c__7021__auto___14662);
var G__14666 = (0);
seq__14643_14651 = G__14663;
chunk__14644_14652 = G__14664;
count__14645_14653 = G__14665;
i__14646_14654 = G__14666;
continue;
} else {
var n_14667 = cljs.core.first.call(null,seq__14643_14661__$1);
p.removeSlot(n_14667);

var G__14668 = cljs.core.next.call(null,seq__14643_14661__$1);
var G__14669 = null;
var G__14670 = (0);
var G__14671 = (0);
seq__14643_14651 = G__14668;
chunk__14644_14652 = G__14669;
count__14645_14653 = G__14670;
i__14646_14654 = G__14671;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__14647 = cljs.core.seq.call(null,new$);
var chunk__14648 = null;
var count__14649 = (0);
var i__14650 = (0);
while(true){
if((i__14650 < count__14649)){
var sd = cljs.core._nth.call(null,chunk__14648,i__14650);
var da_14672 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_14672);

var G__14673 = seq__14647;
var G__14674 = chunk__14648;
var G__14675 = count__14649;
var G__14676 = (i__14650 + (1));
seq__14647 = G__14673;
chunk__14648 = G__14674;
count__14649 = G__14675;
i__14650 = G__14676;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14647);
if(temp__4425__auto__){
var seq__14647__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14647__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__14647__$1);
var G__14677 = cljs.core.chunk_rest.call(null,seq__14647__$1);
var G__14678 = c__7021__auto__;
var G__14679 = cljs.core.count.call(null,c__7021__auto__);
var G__14680 = (0);
seq__14647 = G__14677;
chunk__14648 = G__14678;
count__14649 = G__14679;
i__14650 = G__14680;
continue;
} else {
var sd = cljs.core.first.call(null,seq__14647__$1);
var da_14681 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_14681);

var G__14682 = cljs.core.next.call(null,seq__14647__$1);
var G__14683 = null;
var G__14684 = (0);
var G__14685 = (0);
seq__14647 = G__14682;
chunk__14648 = G__14683;
count__14649 = G__14684;
i__14650 = G__14685;
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
