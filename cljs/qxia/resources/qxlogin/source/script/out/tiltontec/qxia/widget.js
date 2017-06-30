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
var seq__19249_19257 = cljs.core.seq.call(null,old);
var chunk__19250_19258 = null;
var count__19251_19259 = (0);
var i__19252_19260 = (0);
while(true){
if((i__19252_19260 < count__19251_19259)){
var page_19261 = cljs.core._nth.call(null,chunk__19250_19258,i__19252_19260);
var temp__4425__auto___19262 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_19261));
if(cljs.core.truth_(temp__4425__auto___19262)){
var ept_19263 = temp__4425__auto___19262;
routing.remove(ept_19263);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_19261));

var G__19264 = seq__19249_19257;
var G__19265 = chunk__19250_19258;
var G__19266 = count__19251_19259;
var G__19267 = (i__19252_19260 + (1));
seq__19249_19257 = G__19264;
chunk__19250_19258 = G__19265;
count__19251_19259 = G__19266;
i__19252_19260 = G__19267;
continue;
} else {
var temp__4425__auto___19268 = cljs.core.seq.call(null,seq__19249_19257);
if(temp__4425__auto___19268){
var seq__19249_19269__$1 = temp__4425__auto___19268;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19249_19269__$1)){
var c__7021__auto___19270 = cljs.core.chunk_first.call(null,seq__19249_19269__$1);
var G__19271 = cljs.core.chunk_rest.call(null,seq__19249_19269__$1);
var G__19272 = c__7021__auto___19270;
var G__19273 = cljs.core.count.call(null,c__7021__auto___19270);
var G__19274 = (0);
seq__19249_19257 = G__19271;
chunk__19250_19258 = G__19272;
count__19251_19259 = G__19273;
i__19252_19260 = G__19274;
continue;
} else {
var page_19275 = cljs.core.first.call(null,seq__19249_19269__$1);
var temp__4425__auto___19276__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_19275));
if(cljs.core.truth_(temp__4425__auto___19276__$1)){
var ept_19277 = temp__4425__auto___19276__$1;
routing.remove(ept_19277);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_19275));

var G__19278 = cljs.core.next.call(null,seq__19249_19269__$1);
var G__19279 = null;
var G__19280 = (0);
var G__19281 = (0);
seq__19249_19257 = G__19278;
chunk__19250_19258 = G__19279;
count__19251_19259 = G__19280;
i__19252_19260 = G__19281;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__19253 = cljs.core.seq.call(null,new$);
var chunk__19254 = null;
var count__19255 = (0);
var i__19256 = (0);
while(true){
if((i__19256 < count__19255)){
var page = cljs.core._nth.call(null,chunk__19254,i__19256);
var qx_page_19282 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_19282);

var temp__4425__auto___19283 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___19283)){
var ept_19284 = temp__4425__auto___19283;
routing.onGet(ept_19284,shower,qx_page_19282);
} else {
}

var G__19285 = seq__19253;
var G__19286 = chunk__19254;
var G__19287 = count__19255;
var G__19288 = (i__19256 + (1));
seq__19253 = G__19285;
chunk__19254 = G__19286;
count__19255 = G__19287;
i__19256 = G__19288;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19253);
if(temp__4425__auto__){
var seq__19253__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19253__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__19253__$1);
var G__19289 = cljs.core.chunk_rest.call(null,seq__19253__$1);
var G__19290 = c__7021__auto__;
var G__19291 = cljs.core.count.call(null,c__7021__auto__);
var G__19292 = (0);
seq__19253 = G__19289;
chunk__19254 = G__19290;
count__19255 = G__19291;
i__19256 = G__19292;
continue;
} else {
var page = cljs.core.first.call(null,seq__19253__$1);
var qx_page_19293 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_19293);

var temp__4425__auto___19294__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___19294__$1)){
var ept_19295 = temp__4425__auto___19294__$1;
routing.onGet(ept_19295,shower,qx_page_19293);
} else {
}

var G__19296 = cljs.core.next.call(null,seq__19253__$1);
var G__19297 = null;
var G__19298 = (0);
var G__19299 = (0);
seq__19253 = G__19296;
chunk__19254 = G__19297;
count__19255 = G__19298;
i__19256 = G__19299;
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
var seq__19300_19310 = cljs.core.seq.call(null,old);
var chunk__19301_19311 = null;
var count__19302_19312 = (0);
var i__19303_19313 = (0);
while(true){
if((i__19303_19313 < count__19302_19312)){
var k_19314 = cljs.core._nth.call(null,chunk__19301_19311,i__19303_19313);
var qxk_19315 = tiltontec.qxia.base.qxme.call(null,k_19314);
var label_19316 = tiltontec.model.core.md_get.call(null,k_19314,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_19315);

var G__19317 = seq__19300_19310;
var G__19318 = chunk__19301_19311;
var G__19319 = count__19302_19312;
var G__19320 = (i__19303_19313 + (1));
seq__19300_19310 = G__19317;
chunk__19301_19311 = G__19318;
count__19302_19312 = G__19319;
i__19303_19313 = G__19320;
continue;
} else {
var temp__4425__auto___19321 = cljs.core.seq.call(null,seq__19300_19310);
if(temp__4425__auto___19321){
var seq__19300_19322__$1 = temp__4425__auto___19321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19300_19322__$1)){
var c__7021__auto___19323 = cljs.core.chunk_first.call(null,seq__19300_19322__$1);
var G__19324 = cljs.core.chunk_rest.call(null,seq__19300_19322__$1);
var G__19325 = c__7021__auto___19323;
var G__19326 = cljs.core.count.call(null,c__7021__auto___19323);
var G__19327 = (0);
seq__19300_19310 = G__19324;
chunk__19301_19311 = G__19325;
count__19302_19312 = G__19326;
i__19303_19313 = G__19327;
continue;
} else {
var k_19328 = cljs.core.first.call(null,seq__19300_19322__$1);
var qxk_19329 = tiltontec.qxia.base.qxme.call(null,k_19328);
var label_19330 = tiltontec.model.core.md_get.call(null,k_19328,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_19329);

var G__19331 = cljs.core.next.call(null,seq__19300_19322__$1);
var G__19332 = null;
var G__19333 = (0);
var G__19334 = (0);
seq__19300_19310 = G__19331;
chunk__19301_19311 = G__19332;
count__19302_19312 = G__19333;
i__19303_19313 = G__19334;
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
var seq__19304 = cljs.core.seq.call(null,kids);
var chunk__19305 = null;
var count__19306 = (0);
var i__19307 = (0);
while(true){
if((i__19307 < count__19306)){
var k = cljs.core._nth.call(null,chunk__19305,i__19307);
var G__19308_19335 = (((tiltontec.cell.base.ia_type.call(null,k) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,k).fqn:null);
switch (G__19308_19335) {
case "tiltontec.qxia.types/m.RadioGroupStub":
tiltontec.qxia.base.form_build_radio_group_stub.call(null,me,k);

break;
default:
var qxk_19337 = tiltontec.qxia.base.qxme.call(null,k);
var label_19338 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_19337,label_19338);

}

var G__19339 = seq__19304;
var G__19340 = chunk__19305;
var G__19341 = count__19306;
var G__19342 = (i__19307 + (1));
seq__19304 = G__19339;
chunk__19305 = G__19340;
count__19306 = G__19341;
i__19307 = G__19342;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__19304);
if(temp__4425__auto____$1){
var seq__19304__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19304__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__19304__$1);
var G__19343 = cljs.core.chunk_rest.call(null,seq__19304__$1);
var G__19344 = c__7021__auto__;
var G__19345 = cljs.core.count.call(null,c__7021__auto__);
var G__19346 = (0);
seq__19304 = G__19343;
chunk__19305 = G__19344;
count__19306 = G__19345;
i__19307 = G__19346;
continue;
} else {
var k = cljs.core.first.call(null,seq__19304__$1);
var G__19309_19347 = (((tiltontec.cell.base.ia_type.call(null,k) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,k).fqn:null);
switch (G__19309_19347) {
case "tiltontec.qxia.types/m.RadioGroupStub":
tiltontec.qxia.base.form_build_radio_group_stub.call(null,me,k);

break;
default:
var qxk_19349 = tiltontec.qxia.base.qxme.call(null,k);
var label_19350 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_19349,label_19350);

}

var G__19351 = cljs.core.next.call(null,seq__19304__$1);
var G__19352 = null;
var G__19353 = (0);
var G__19354 = (0);
seq__19304 = G__19351;
chunk__19305 = G__19352;
count__19306 = G__19353;
i__19307 = G__19354;
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

var temp__4425__auto___19359 = tiltontec.model.core.md_getx.call(null,new cljs.core.Keyword(null,"ini-nav","ini-nav",1436917737),page,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto___19359)){
var kids_19360 = temp__4425__auto___19359;
var content_19361 = qx_page.getContent();
var seq__19355_19362 = cljs.core.seq.call(null,kids_19360);
var chunk__19356_19363 = null;
var count__19357_19364 = (0);
var i__19358_19365 = (0);
while(true){
if((i__19358_19365 < count__19357_19364)){
var k_19366 = cljs.core._nth.call(null,chunk__19356_19363,i__19358_19365);
var qxk_19367 = tiltontec.qxia.base.qxme.call(null,k_19366);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"navpage-initialize-add","navpage-initialize-add",1958684224),tiltontec.cell.base.ia_type.call(null,k_19366));

content_19361.add(qxk_19367);

var G__19368 = seq__19355_19362;
var G__19369 = chunk__19356_19363;
var G__19370 = count__19357_19364;
var G__19371 = (i__19358_19365 + (1));
seq__19355_19362 = G__19368;
chunk__19356_19363 = G__19369;
count__19357_19364 = G__19370;
i__19358_19365 = G__19371;
continue;
} else {
var temp__4425__auto___19372__$1 = cljs.core.seq.call(null,seq__19355_19362);
if(temp__4425__auto___19372__$1){
var seq__19355_19373__$1 = temp__4425__auto___19372__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19355_19373__$1)){
var c__7021__auto___19374 = cljs.core.chunk_first.call(null,seq__19355_19373__$1);
var G__19375 = cljs.core.chunk_rest.call(null,seq__19355_19373__$1);
var G__19376 = c__7021__auto___19374;
var G__19377 = cljs.core.count.call(null,c__7021__auto___19374);
var G__19378 = (0);
seq__19355_19362 = G__19375;
chunk__19356_19363 = G__19376;
count__19357_19364 = G__19377;
i__19358_19365 = G__19378;
continue;
} else {
var k_19379 = cljs.core.first.call(null,seq__19355_19373__$1);
var qxk_19380 = tiltontec.qxia.base.qxme.call(null,k_19379);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"navpage-initialize-add","navpage-initialize-add",1958684224),tiltontec.cell.base.ia_type.call(null,k_19379));

content_19361.add(qxk_19380);

var G__19381 = cljs.core.next.call(null,seq__19355_19373__$1);
var G__19382 = null;
var G__19383 = (0);
var G__19384 = (0);
seq__19355_19362 = G__19381;
chunk__19356_19363 = G__19382;
count__19357_19364 = G__19383;
i__19358_19365 = G__19384;
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

var seq__19385 = cljs.core.seq.call(null,newk);
var chunk__19386 = null;
var count__19387 = (0);
var i__19388 = (0);
while(true){
if((i__19388 < count__19387)){
var k = cljs.core._nth.call(null,chunk__19386,i__19388);
var qxk_19389 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_19389);

var G__19390 = seq__19385;
var G__19391 = chunk__19386;
var G__19392 = count__19387;
var G__19393 = (i__19388 + (1));
seq__19385 = G__19390;
chunk__19386 = G__19391;
count__19387 = G__19392;
i__19388 = G__19393;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19385);
if(temp__4425__auto__){
var seq__19385__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19385__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__19385__$1);
var G__19394 = cljs.core.chunk_rest.call(null,seq__19385__$1);
var G__19395 = c__7021__auto__;
var G__19396 = cljs.core.count.call(null,c__7021__auto__);
var G__19397 = (0);
seq__19385 = G__19394;
chunk__19386 = G__19395;
count__19387 = G__19396;
i__19388 = G__19397;
continue;
} else {
var k = cljs.core.first.call(null,seq__19385__$1);
var qxk_19398 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_19398);

var G__19399 = cljs.core.next.call(null,seq__19385__$1);
var G__19400 = null;
var G__19401 = (0);
var G__19402 = (0);
seq__19385 = G__19399;
chunk__19386 = G__19400;
count__19387 = G__19401;
i__19388 = G__19402;
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
var G__19403 = (((tiltontec.cell.base.ia_type.call(null,me) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,me).fqn:null);
switch (G__19403) {
case "tiltontec.qxia.types/m.Single":
return null;

break;
case "tiltontec.qxia.types/m.RadioGroupStub":
return null;

break;
default:


return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),((function (G__19403){
return (function (opcode,defer_info){
return tiltontec.qxia.widget.kids_refresh.call(null,me,newk,oldk);
});})(G__19403))
);

}
}));
tiltontec.qxia.widget.kids_refresh = (function tiltontec$qxia$widget$kids_refresh(me,newk,oldk){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
} else {
var lostks_19421 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_19421)){
} else {
var seq__19413_19422 = cljs.core.seq.call(null,lostks_19421);
var chunk__19414_19423 = null;
var count__19415_19424 = (0);
var i__19416_19425 = (0);
while(true){
if((i__19416_19425 < count__19415_19424)){
var kid_19426 = cljs.core._nth.call(null,chunk__19414_19423,i__19416_19425);
var qxk_19427 = tiltontec.qxia.base.qxme.call(null,kid_19426);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_19426,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_19427);
}

qxk_19427.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_19426);

var G__19428 = seq__19413_19422;
var G__19429 = chunk__19414_19423;
var G__19430 = count__19415_19424;
var G__19431 = (i__19416_19425 + (1));
seq__19413_19422 = G__19428;
chunk__19414_19423 = G__19429;
count__19415_19424 = G__19430;
i__19416_19425 = G__19431;
continue;
} else {
var temp__4425__auto___19432 = cljs.core.seq.call(null,seq__19413_19422);
if(temp__4425__auto___19432){
var seq__19413_19433__$1 = temp__4425__auto___19432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19413_19433__$1)){
var c__7021__auto___19434 = cljs.core.chunk_first.call(null,seq__19413_19433__$1);
var G__19435 = cljs.core.chunk_rest.call(null,seq__19413_19433__$1);
var G__19436 = c__7021__auto___19434;
var G__19437 = cljs.core.count.call(null,c__7021__auto___19434);
var G__19438 = (0);
seq__19413_19422 = G__19435;
chunk__19414_19423 = G__19436;
count__19415_19424 = G__19437;
i__19416_19425 = G__19438;
continue;
} else {
var kid_19439 = cljs.core.first.call(null,seq__19413_19433__$1);
var qxk_19440 = tiltontec.qxia.base.qxme.call(null,kid_19439);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_19439,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_19440);
}

qxk_19440.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_19439);

var G__19441 = cljs.core.next.call(null,seq__19413_19433__$1);
var G__19442 = null;
var G__19443 = (0);
var G__19444 = (0);
seq__19413_19422 = G__19441;
chunk__19414_19423 = G__19442;
count__19415_19424 = G__19443;
i__19416_19425 = G__19444;
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

var seq__19417 = cljs.core.seq.call(null,new_ks);
var chunk__19418 = null;
var count__19419 = (0);
var i__19420 = (0);
while(true){
if((i__19420 < count__19419)){
var k = cljs.core._nth.call(null,chunk__19418,i__19420);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newk-add","compo-newk-add",1109141498),tiltontec.cell.base.ia_type.call(null,me),tiltontec.cell.base.ia_type.call(null,k));

tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__19445 = seq__19417;
var G__19446 = chunk__19418;
var G__19447 = count__19419;
var G__19448 = (i__19420 + (1));
seq__19417 = G__19445;
chunk__19418 = G__19446;
count__19419 = G__19447;
i__19420 = G__19448;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19417);
if(temp__4425__auto__){
var seq__19417__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19417__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__19417__$1);
var G__19449 = cljs.core.chunk_rest.call(null,seq__19417__$1);
var G__19450 = c__7021__auto__;
var G__19451 = cljs.core.count.call(null,c__7021__auto__);
var G__19452 = (0);
seq__19417 = G__19449;
chunk__19418 = G__19450;
count__19419 = G__19451;
i__19420 = G__19452;
continue;
} else {
var k = cljs.core.first.call(null,seq__19417__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newk-add","compo-newk-add",1109141498),tiltontec.cell.base.ia_type.call(null,me),tiltontec.cell.base.ia_type.call(null,k));

tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__19453 = cljs.core.next.call(null,seq__19417__$1);
var G__19454 = null;
var G__19455 = (0);
var G__19456 = (0);
seq__19417 = G__19453;
chunk__19418 = G__19454;
count__19419 = G__19455;
i__19420 = G__19456;
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
var seq__19457_19465 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,old)));
var chunk__19458_19466 = null;
var count__19459_19467 = (0);
var i__19460_19468 = (0);
while(true){
if((i__19460_19468 < count__19459_19467)){
var n_19469 = cljs.core._nth.call(null,chunk__19458_19466,i__19460_19468);
p.removeSlot(n_19469);

var G__19470 = seq__19457_19465;
var G__19471 = chunk__19458_19466;
var G__19472 = count__19459_19467;
var G__19473 = (i__19460_19468 + (1));
seq__19457_19465 = G__19470;
chunk__19458_19466 = G__19471;
count__19459_19467 = G__19472;
i__19460_19468 = G__19473;
continue;
} else {
var temp__4425__auto___19474 = cljs.core.seq.call(null,seq__19457_19465);
if(temp__4425__auto___19474){
var seq__19457_19475__$1 = temp__4425__auto___19474;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19457_19475__$1)){
var c__7021__auto___19476 = cljs.core.chunk_first.call(null,seq__19457_19475__$1);
var G__19477 = cljs.core.chunk_rest.call(null,seq__19457_19475__$1);
var G__19478 = c__7021__auto___19476;
var G__19479 = cljs.core.count.call(null,c__7021__auto___19476);
var G__19480 = (0);
seq__19457_19465 = G__19477;
chunk__19458_19466 = G__19478;
count__19459_19467 = G__19479;
i__19460_19468 = G__19480;
continue;
} else {
var n_19481 = cljs.core.first.call(null,seq__19457_19475__$1);
p.removeSlot(n_19481);

var G__19482 = cljs.core.next.call(null,seq__19457_19475__$1);
var G__19483 = null;
var G__19484 = (0);
var G__19485 = (0);
seq__19457_19465 = G__19482;
chunk__19458_19466 = G__19483;
count__19459_19467 = G__19484;
i__19460_19468 = G__19485;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__19461 = cljs.core.seq.call(null,new$);
var chunk__19462 = null;
var count__19463 = (0);
var i__19464 = (0);
while(true){
if((i__19464 < count__19463)){
var sd = cljs.core._nth.call(null,chunk__19462,i__19464);
var da_19486 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_19486);

var G__19487 = seq__19461;
var G__19488 = chunk__19462;
var G__19489 = count__19463;
var G__19490 = (i__19464 + (1));
seq__19461 = G__19487;
chunk__19462 = G__19488;
count__19463 = G__19489;
i__19464 = G__19490;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19461);
if(temp__4425__auto__){
var seq__19461__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19461__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__19461__$1);
var G__19491 = cljs.core.chunk_rest.call(null,seq__19461__$1);
var G__19492 = c__7021__auto__;
var G__19493 = cljs.core.count.call(null,c__7021__auto__);
var G__19494 = (0);
seq__19461 = G__19491;
chunk__19462 = G__19492;
count__19463 = G__19493;
i__19464 = G__19494;
continue;
} else {
var sd = cljs.core.first.call(null,seq__19461__$1);
var da_19495 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_19495);

var G__19496 = cljs.core.next.call(null,seq__19461__$1);
var G__19497 = null;
var G__19498 = (0);
var G__19499 = (0);
seq__19461 = G__19496;
chunk__19462 = G__19497;
count__19463 = G__19498;
i__19464 = G__19499;
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
