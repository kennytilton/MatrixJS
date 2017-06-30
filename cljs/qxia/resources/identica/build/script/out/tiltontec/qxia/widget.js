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
var seq__12384_12392 = cljs.core.seq.call(null,old);
var chunk__12385_12393 = null;
var count__12386_12394 = (0);
var i__12387_12395 = (0);
while(true){
if((i__12387_12395 < count__12386_12394)){
var page_12396 = cljs.core._nth.call(null,chunk__12385_12393,i__12387_12395);
var temp__4425__auto___12397 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_12396));
if(cljs.core.truth_(temp__4425__auto___12397)){
var ept_12398 = temp__4425__auto___12397;
routing.remove(ept_12398);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_12396));

var G__12399 = seq__12384_12392;
var G__12400 = chunk__12385_12393;
var G__12401 = count__12386_12394;
var G__12402 = (i__12387_12395 + (1));
seq__12384_12392 = G__12399;
chunk__12385_12393 = G__12400;
count__12386_12394 = G__12401;
i__12387_12395 = G__12402;
continue;
} else {
var temp__4425__auto___12403 = cljs.core.seq.call(null,seq__12384_12392);
if(temp__4425__auto___12403){
var seq__12384_12404__$1 = temp__4425__auto___12403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12384_12404__$1)){
var c__7021__auto___12405 = cljs.core.chunk_first.call(null,seq__12384_12404__$1);
var G__12406 = cljs.core.chunk_rest.call(null,seq__12384_12404__$1);
var G__12407 = c__7021__auto___12405;
var G__12408 = cljs.core.count.call(null,c__7021__auto___12405);
var G__12409 = (0);
seq__12384_12392 = G__12406;
chunk__12385_12393 = G__12407;
count__12386_12394 = G__12408;
i__12387_12395 = G__12409;
continue;
} else {
var page_12410 = cljs.core.first.call(null,seq__12384_12404__$1);
var temp__4425__auto___12411__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_12410));
if(cljs.core.truth_(temp__4425__auto___12411__$1)){
var ept_12412 = temp__4425__auto___12411__$1;
routing.remove(ept_12412);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_12410));

var G__12413 = cljs.core.next.call(null,seq__12384_12404__$1);
var G__12414 = null;
var G__12415 = (0);
var G__12416 = (0);
seq__12384_12392 = G__12413;
chunk__12385_12393 = G__12414;
count__12386_12394 = G__12415;
i__12387_12395 = G__12416;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__12388 = cljs.core.seq.call(null,new$);
var chunk__12389 = null;
var count__12390 = (0);
var i__12391 = (0);
while(true){
if((i__12391 < count__12390)){
var page = cljs.core._nth.call(null,chunk__12389,i__12391);
var qx_page_12417 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_12417);

var temp__4425__auto___12418 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___12418)){
var ept_12419 = temp__4425__auto___12418;
routing.onGet(ept_12419,shower,qx_page_12417);
} else {
}

var G__12420 = seq__12388;
var G__12421 = chunk__12389;
var G__12422 = count__12390;
var G__12423 = (i__12391 + (1));
seq__12388 = G__12420;
chunk__12389 = G__12421;
count__12390 = G__12422;
i__12391 = G__12423;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12388);
if(temp__4425__auto__){
var seq__12388__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12388__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__12388__$1);
var G__12424 = cljs.core.chunk_rest.call(null,seq__12388__$1);
var G__12425 = c__7021__auto__;
var G__12426 = cljs.core.count.call(null,c__7021__auto__);
var G__12427 = (0);
seq__12388 = G__12424;
chunk__12389 = G__12425;
count__12390 = G__12426;
i__12391 = G__12427;
continue;
} else {
var page = cljs.core.first.call(null,seq__12388__$1);
var qx_page_12428 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_12428);

var temp__4425__auto___12429__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___12429__$1)){
var ept_12430 = temp__4425__auto___12429__$1;
routing.onGet(ept_12430,shower,qx_page_12428);
} else {
}

var G__12431 = cljs.core.next.call(null,seq__12388__$1);
var G__12432 = null;
var G__12433 = (0);
var G__12434 = (0);
seq__12388 = G__12431;
chunk__12389 = G__12432;
count__12390 = G__12433;
i__12391 = G__12434;
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
var seq__12435_12445 = cljs.core.seq.call(null,old);
var chunk__12436_12446 = null;
var count__12437_12447 = (0);
var i__12438_12448 = (0);
while(true){
if((i__12438_12448 < count__12437_12447)){
var k_12449 = cljs.core._nth.call(null,chunk__12436_12446,i__12438_12448);
var qxk_12450 = tiltontec.qxia.base.qxme.call(null,k_12449);
var label_12451 = tiltontec.model.core.md_get.call(null,k_12449,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_12450);

var G__12452 = seq__12435_12445;
var G__12453 = chunk__12436_12446;
var G__12454 = count__12437_12447;
var G__12455 = (i__12438_12448 + (1));
seq__12435_12445 = G__12452;
chunk__12436_12446 = G__12453;
count__12437_12447 = G__12454;
i__12438_12448 = G__12455;
continue;
} else {
var temp__4425__auto___12456 = cljs.core.seq.call(null,seq__12435_12445);
if(temp__4425__auto___12456){
var seq__12435_12457__$1 = temp__4425__auto___12456;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12435_12457__$1)){
var c__7021__auto___12458 = cljs.core.chunk_first.call(null,seq__12435_12457__$1);
var G__12459 = cljs.core.chunk_rest.call(null,seq__12435_12457__$1);
var G__12460 = c__7021__auto___12458;
var G__12461 = cljs.core.count.call(null,c__7021__auto___12458);
var G__12462 = (0);
seq__12435_12445 = G__12459;
chunk__12436_12446 = G__12460;
count__12437_12447 = G__12461;
i__12438_12448 = G__12462;
continue;
} else {
var k_12463 = cljs.core.first.call(null,seq__12435_12457__$1);
var qxk_12464 = tiltontec.qxia.base.qxme.call(null,k_12463);
var label_12465 = tiltontec.model.core.md_get.call(null,k_12463,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_12464);

var G__12466 = cljs.core.next.call(null,seq__12435_12457__$1);
var G__12467 = null;
var G__12468 = (0);
var G__12469 = (0);
seq__12435_12445 = G__12466;
chunk__12436_12446 = G__12467;
count__12437_12447 = G__12468;
i__12438_12448 = G__12469;
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
var seq__12439 = cljs.core.seq.call(null,kids);
var chunk__12440 = null;
var count__12441 = (0);
var i__12442 = (0);
while(true){
if((i__12442 < count__12441)){
var k = cljs.core._nth.call(null,chunk__12440,i__12442);
var G__12443_12470 = (((tiltontec.cell.base.ia_type.call(null,k) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,k).fqn:null);
switch (G__12443_12470) {
case "tiltontec.qxia.types/m.RadioGroupStub":
tiltontec.qxia.base.form_build_radio_group_stub.call(null,me,k);

break;
default:
var qxk_12472 = tiltontec.qxia.base.qxme.call(null,k);
var label_12473 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_12472,label_12473);

}

var G__12474 = seq__12439;
var G__12475 = chunk__12440;
var G__12476 = count__12441;
var G__12477 = (i__12442 + (1));
seq__12439 = G__12474;
chunk__12440 = G__12475;
count__12441 = G__12476;
i__12442 = G__12477;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__12439);
if(temp__4425__auto____$1){
var seq__12439__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12439__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__12439__$1);
var G__12478 = cljs.core.chunk_rest.call(null,seq__12439__$1);
var G__12479 = c__7021__auto__;
var G__12480 = cljs.core.count.call(null,c__7021__auto__);
var G__12481 = (0);
seq__12439 = G__12478;
chunk__12440 = G__12479;
count__12441 = G__12480;
i__12442 = G__12481;
continue;
} else {
var k = cljs.core.first.call(null,seq__12439__$1);
var G__12444_12482 = (((tiltontec.cell.base.ia_type.call(null,k) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,k).fqn:null);
switch (G__12444_12482) {
case "tiltontec.qxia.types/m.RadioGroupStub":
tiltontec.qxia.base.form_build_radio_group_stub.call(null,me,k);

break;
default:
var qxk_12484 = tiltontec.qxia.base.qxme.call(null,k);
var label_12485 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_12484,label_12485);

}

var G__12486 = cljs.core.next.call(null,seq__12439__$1);
var G__12487 = null;
var G__12488 = (0);
var G__12489 = (0);
seq__12439 = G__12486;
chunk__12440 = G__12487;
count__12441 = G__12488;
i__12442 = G__12489;
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

var temp__4425__auto___12494 = tiltontec.model.core.md_getx.call(null,new cljs.core.Keyword(null,"ini-nav","ini-nav",1436917737),page,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto___12494)){
var kids_12495 = temp__4425__auto___12494;
var content_12496 = qx_page.getContent();
var seq__12490_12497 = cljs.core.seq.call(null,kids_12495);
var chunk__12491_12498 = null;
var count__12492_12499 = (0);
var i__12493_12500 = (0);
while(true){
if((i__12493_12500 < count__12492_12499)){
var k_12501 = cljs.core._nth.call(null,chunk__12491_12498,i__12493_12500);
var qxk_12502 = tiltontec.qxia.base.qxme.call(null,k_12501);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"navpage-initialize-add","navpage-initialize-add",1958684224),tiltontec.cell.base.ia_type.call(null,k_12501));

content_12496.add(qxk_12502);

var G__12503 = seq__12490_12497;
var G__12504 = chunk__12491_12498;
var G__12505 = count__12492_12499;
var G__12506 = (i__12493_12500 + (1));
seq__12490_12497 = G__12503;
chunk__12491_12498 = G__12504;
count__12492_12499 = G__12505;
i__12493_12500 = G__12506;
continue;
} else {
var temp__4425__auto___12507__$1 = cljs.core.seq.call(null,seq__12490_12497);
if(temp__4425__auto___12507__$1){
var seq__12490_12508__$1 = temp__4425__auto___12507__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12490_12508__$1)){
var c__7021__auto___12509 = cljs.core.chunk_first.call(null,seq__12490_12508__$1);
var G__12510 = cljs.core.chunk_rest.call(null,seq__12490_12508__$1);
var G__12511 = c__7021__auto___12509;
var G__12512 = cljs.core.count.call(null,c__7021__auto___12509);
var G__12513 = (0);
seq__12490_12497 = G__12510;
chunk__12491_12498 = G__12511;
count__12492_12499 = G__12512;
i__12493_12500 = G__12513;
continue;
} else {
var k_12514 = cljs.core.first.call(null,seq__12490_12508__$1);
var qxk_12515 = tiltontec.qxia.base.qxme.call(null,k_12514);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"navpage-initialize-add","navpage-initialize-add",1958684224),tiltontec.cell.base.ia_type.call(null,k_12514));

content_12496.add(qxk_12515);

var G__12516 = cljs.core.next.call(null,seq__12490_12508__$1);
var G__12517 = null;
var G__12518 = (0);
var G__12519 = (0);
seq__12490_12497 = G__12516;
chunk__12491_12498 = G__12517;
count__12492_12499 = G__12518;
i__12493_12500 = G__12519;
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

var seq__12520 = cljs.core.seq.call(null,newk);
var chunk__12521 = null;
var count__12522 = (0);
var i__12523 = (0);
while(true){
if((i__12523 < count__12522)){
var k = cljs.core._nth.call(null,chunk__12521,i__12523);
var qxk_12524 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_12524);

var G__12525 = seq__12520;
var G__12526 = chunk__12521;
var G__12527 = count__12522;
var G__12528 = (i__12523 + (1));
seq__12520 = G__12525;
chunk__12521 = G__12526;
count__12522 = G__12527;
i__12523 = G__12528;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12520);
if(temp__4425__auto__){
var seq__12520__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12520__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__12520__$1);
var G__12529 = cljs.core.chunk_rest.call(null,seq__12520__$1);
var G__12530 = c__7021__auto__;
var G__12531 = cljs.core.count.call(null,c__7021__auto__);
var G__12532 = (0);
seq__12520 = G__12529;
chunk__12521 = G__12530;
count__12522 = G__12531;
i__12523 = G__12532;
continue;
} else {
var k = cljs.core.first.call(null,seq__12520__$1);
var qxk_12533 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_12533);

var G__12534 = cljs.core.next.call(null,seq__12520__$1);
var G__12535 = null;
var G__12536 = (0);
var G__12537 = (0);
seq__12520 = G__12534;
chunk__12521 = G__12535;
count__12522 = G__12536;
i__12523 = G__12537;
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
var G__12538 = (((tiltontec.cell.base.ia_type.call(null,me) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,me).fqn:null);
switch (G__12538) {
case "tiltontec.qxia.types/m.Single":
return null;

break;
case "tiltontec.qxia.types/m.RadioGroupStub":
return null;

break;
default:


return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),((function (G__12538){
return (function (opcode,defer_info){
return tiltontec.qxia.widget.kids_refresh.call(null,me,newk,oldk);
});})(G__12538))
);

}
}));
tiltontec.qxia.widget.kids_refresh = (function tiltontec$qxia$widget$kids_refresh(me,newk,oldk){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
} else {
var lostks_12556 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_12556)){
} else {
var seq__12548_12557 = cljs.core.seq.call(null,lostks_12556);
var chunk__12549_12558 = null;
var count__12550_12559 = (0);
var i__12551_12560 = (0);
while(true){
if((i__12551_12560 < count__12550_12559)){
var kid_12561 = cljs.core._nth.call(null,chunk__12549_12558,i__12551_12560);
var qxk_12562 = tiltontec.qxia.base.qxme.call(null,kid_12561);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_12561,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_12562);
}

qxk_12562.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_12561);

var G__12563 = seq__12548_12557;
var G__12564 = chunk__12549_12558;
var G__12565 = count__12550_12559;
var G__12566 = (i__12551_12560 + (1));
seq__12548_12557 = G__12563;
chunk__12549_12558 = G__12564;
count__12550_12559 = G__12565;
i__12551_12560 = G__12566;
continue;
} else {
var temp__4425__auto___12567 = cljs.core.seq.call(null,seq__12548_12557);
if(temp__4425__auto___12567){
var seq__12548_12568__$1 = temp__4425__auto___12567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12548_12568__$1)){
var c__7021__auto___12569 = cljs.core.chunk_first.call(null,seq__12548_12568__$1);
var G__12570 = cljs.core.chunk_rest.call(null,seq__12548_12568__$1);
var G__12571 = c__7021__auto___12569;
var G__12572 = cljs.core.count.call(null,c__7021__auto___12569);
var G__12573 = (0);
seq__12548_12557 = G__12570;
chunk__12549_12558 = G__12571;
count__12550_12559 = G__12572;
i__12551_12560 = G__12573;
continue;
} else {
var kid_12574 = cljs.core.first.call(null,seq__12548_12568__$1);
var qxk_12575 = tiltontec.qxia.base.qxme.call(null,kid_12574);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_12574,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_12575);
}

qxk_12575.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_12574);

var G__12576 = cljs.core.next.call(null,seq__12548_12568__$1);
var G__12577 = null;
var G__12578 = (0);
var G__12579 = (0);
seq__12548_12557 = G__12576;
chunk__12549_12558 = G__12577;
count__12550_12559 = G__12578;
i__12551_12560 = G__12579;
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

var seq__12552 = cljs.core.seq.call(null,new_ks);
var chunk__12553 = null;
var count__12554 = (0);
var i__12555 = (0);
while(true){
if((i__12555 < count__12554)){
var k = cljs.core._nth.call(null,chunk__12553,i__12555);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newk-add","compo-newk-add",1109141498),tiltontec.cell.base.ia_type.call(null,me),tiltontec.cell.base.ia_type.call(null,k));

tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__12580 = seq__12552;
var G__12581 = chunk__12553;
var G__12582 = count__12554;
var G__12583 = (i__12555 + (1));
seq__12552 = G__12580;
chunk__12553 = G__12581;
count__12554 = G__12582;
i__12555 = G__12583;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12552);
if(temp__4425__auto__){
var seq__12552__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12552__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__12552__$1);
var G__12584 = cljs.core.chunk_rest.call(null,seq__12552__$1);
var G__12585 = c__7021__auto__;
var G__12586 = cljs.core.count.call(null,c__7021__auto__);
var G__12587 = (0);
seq__12552 = G__12584;
chunk__12553 = G__12585;
count__12554 = G__12586;
i__12555 = G__12587;
continue;
} else {
var k = cljs.core.first.call(null,seq__12552__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newk-add","compo-newk-add",1109141498),tiltontec.cell.base.ia_type.call(null,me),tiltontec.cell.base.ia_type.call(null,k));

tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__12588 = cljs.core.next.call(null,seq__12552__$1);
var G__12589 = null;
var G__12590 = (0);
var G__12591 = (0);
seq__12552 = G__12588;
chunk__12553 = G__12589;
count__12554 = G__12590;
i__12555 = G__12591;
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
var seq__12592_12600 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,old)));
var chunk__12593_12601 = null;
var count__12594_12602 = (0);
var i__12595_12603 = (0);
while(true){
if((i__12595_12603 < count__12594_12602)){
var n_12604 = cljs.core._nth.call(null,chunk__12593_12601,i__12595_12603);
p.removeSlot(n_12604);

var G__12605 = seq__12592_12600;
var G__12606 = chunk__12593_12601;
var G__12607 = count__12594_12602;
var G__12608 = (i__12595_12603 + (1));
seq__12592_12600 = G__12605;
chunk__12593_12601 = G__12606;
count__12594_12602 = G__12607;
i__12595_12603 = G__12608;
continue;
} else {
var temp__4425__auto___12609 = cljs.core.seq.call(null,seq__12592_12600);
if(temp__4425__auto___12609){
var seq__12592_12610__$1 = temp__4425__auto___12609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12592_12610__$1)){
var c__7021__auto___12611 = cljs.core.chunk_first.call(null,seq__12592_12610__$1);
var G__12612 = cljs.core.chunk_rest.call(null,seq__12592_12610__$1);
var G__12613 = c__7021__auto___12611;
var G__12614 = cljs.core.count.call(null,c__7021__auto___12611);
var G__12615 = (0);
seq__12592_12600 = G__12612;
chunk__12593_12601 = G__12613;
count__12594_12602 = G__12614;
i__12595_12603 = G__12615;
continue;
} else {
var n_12616 = cljs.core.first.call(null,seq__12592_12610__$1);
p.removeSlot(n_12616);

var G__12617 = cljs.core.next.call(null,seq__12592_12610__$1);
var G__12618 = null;
var G__12619 = (0);
var G__12620 = (0);
seq__12592_12600 = G__12617;
chunk__12593_12601 = G__12618;
count__12594_12602 = G__12619;
i__12595_12603 = G__12620;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__12596 = cljs.core.seq.call(null,new$);
var chunk__12597 = null;
var count__12598 = (0);
var i__12599 = (0);
while(true){
if((i__12599 < count__12598)){
var sd = cljs.core._nth.call(null,chunk__12597,i__12599);
var da_12621 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_12621);

var G__12622 = seq__12596;
var G__12623 = chunk__12597;
var G__12624 = count__12598;
var G__12625 = (i__12599 + (1));
seq__12596 = G__12622;
chunk__12597 = G__12623;
count__12598 = G__12624;
i__12599 = G__12625;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12596);
if(temp__4425__auto__){
var seq__12596__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12596__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__12596__$1);
var G__12626 = cljs.core.chunk_rest.call(null,seq__12596__$1);
var G__12627 = c__7021__auto__;
var G__12628 = cljs.core.count.call(null,c__7021__auto__);
var G__12629 = (0);
seq__12596 = G__12626;
chunk__12597 = G__12627;
count__12598 = G__12628;
i__12599 = G__12629;
continue;
} else {
var sd = cljs.core.first.call(null,seq__12596__$1);
var da_12630 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_12630);

var G__12631 = cljs.core.next.call(null,seq__12596__$1);
var G__12632 = null;
var G__12633 = (0);
var G__12634 = (0);
seq__12596 = G__12631;
chunk__12597 = G__12632;
count__12598 = G__12633;
i__12599 = G__12634;
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
