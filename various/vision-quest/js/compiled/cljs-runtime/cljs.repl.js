goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32306){
var map__32308 = p__32306;
var map__32308__$1 = ((((!((map__32308 == null)))?(((((map__32308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32308):map__32308);
var m = map__32308__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32308__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32308__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32312_32390 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32313_32391 = null;
var count__32314_32392 = (0);
var i__32315_32393 = (0);
while(true){
if((i__32315_32393 < count__32314_32392)){
var f_32396 = chunk__32313_32391.cljs$core$IIndexed$_nth$arity$2(null,i__32315_32393);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_32396], 0));


var G__32397 = seq__32312_32390;
var G__32398 = chunk__32313_32391;
var G__32399 = count__32314_32392;
var G__32400 = (i__32315_32393 + (1));
seq__32312_32390 = G__32397;
chunk__32313_32391 = G__32398;
count__32314_32392 = G__32399;
i__32315_32393 = G__32400;
continue;
} else {
var temp__5457__auto___32403 = cljs.core.seq(seq__32312_32390);
if(temp__5457__auto___32403){
var seq__32312_32404__$1 = temp__5457__auto___32403;
if(cljs.core.chunked_seq_QMARK_(seq__32312_32404__$1)){
var c__4338__auto___32405 = cljs.core.chunk_first(seq__32312_32404__$1);
var G__32408 = cljs.core.chunk_rest(seq__32312_32404__$1);
var G__32409 = c__4338__auto___32405;
var G__32410 = cljs.core.count(c__4338__auto___32405);
var G__32411 = (0);
seq__32312_32390 = G__32408;
chunk__32313_32391 = G__32409;
count__32314_32392 = G__32410;
i__32315_32393 = G__32411;
continue;
} else {
var f_32413 = cljs.core.first(seq__32312_32404__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_32413], 0));


var G__32414 = cljs.core.next(seq__32312_32404__$1);
var G__32415 = null;
var G__32416 = (0);
var G__32417 = (0);
seq__32312_32390 = G__32414;
chunk__32313_32391 = G__32415;
count__32314_32392 = G__32416;
i__32315_32393 = G__32417;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32418 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3936__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_32418], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_32418)))?cljs.core.second(arglists_32418):arglists_32418)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32325_32429 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32326_32430 = null;
var count__32327_32431 = (0);
var i__32328_32432 = (0);
while(true){
if((i__32328_32432 < count__32327_32431)){
var vec__32329_32433 = chunk__32326_32430.cljs$core$IIndexed$_nth$arity$2(null,i__32328_32432);
var name_32434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32329_32433,(0),null);
var map__32332_32435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32329_32433,(1),null);
var map__32332_32436__$1 = ((((!((map__32332_32435 == null)))?(((((map__32332_32435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32332_32435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32332_32435):map__32332_32435);
var doc_32437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32332_32436__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32332_32436__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_32434], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_32438], 0));

if(cljs.core.truth_(doc_32437)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_32437], 0));
} else {
}


var G__32447 = seq__32325_32429;
var G__32448 = chunk__32326_32430;
var G__32449 = count__32327_32431;
var G__32450 = (i__32328_32432 + (1));
seq__32325_32429 = G__32447;
chunk__32326_32430 = G__32448;
count__32327_32431 = G__32449;
i__32328_32432 = G__32450;
continue;
} else {
var temp__5457__auto___32451 = cljs.core.seq(seq__32325_32429);
if(temp__5457__auto___32451){
var seq__32325_32452__$1 = temp__5457__auto___32451;
if(cljs.core.chunked_seq_QMARK_(seq__32325_32452__$1)){
var c__4338__auto___32454 = cljs.core.chunk_first(seq__32325_32452__$1);
var G__32455 = cljs.core.chunk_rest(seq__32325_32452__$1);
var G__32456 = c__4338__auto___32454;
var G__32457 = cljs.core.count(c__4338__auto___32454);
var G__32458 = (0);
seq__32325_32429 = G__32455;
chunk__32326_32430 = G__32456;
count__32327_32431 = G__32457;
i__32328_32432 = G__32458;
continue;
} else {
var vec__32340_32462 = cljs.core.first(seq__32325_32452__$1);
var name_32463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32340_32462,(0),null);
var map__32343_32464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32340_32462,(1),null);
var map__32343_32465__$1 = ((((!((map__32343_32464 == null)))?(((((map__32343_32464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32343_32464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32343_32464):map__32343_32464);
var doc_32466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32343_32465__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32343_32465__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_32463], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_32467], 0));

if(cljs.core.truth_(doc_32466)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_32466], 0));
} else {
}


var G__32470 = cljs.core.next(seq__32325_32452__$1);
var G__32471 = null;
var G__32472 = (0);
var G__32473 = (0);
seq__32325_32429 = G__32470;
chunk__32326_32430 = G__32471;
count__32327_32431 = G__32472;
i__32328_32432 = G__32473;
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
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__32350 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32351 = null;
var count__32352 = (0);
var i__32353 = (0);
while(true){
if((i__32353 < count__32352)){
var role = chunk__32351.cljs$core$IIndexed$_nth$arity$2(null,i__32353);
var temp__5457__auto___32477__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___32477__$1)){
var spec_32478 = temp__5457__auto___32477__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_32478)], 0));
} else {
}


var G__32479 = seq__32350;
var G__32480 = chunk__32351;
var G__32481 = count__32352;
var G__32482 = (i__32353 + (1));
seq__32350 = G__32479;
chunk__32351 = G__32480;
count__32352 = G__32481;
i__32353 = G__32482;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__32350);
if(temp__5457__auto____$1){
var seq__32350__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__32350__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__32350__$1);
var G__32483 = cljs.core.chunk_rest(seq__32350__$1);
var G__32484 = c__4338__auto__;
var G__32485 = cljs.core.count(c__4338__auto__);
var G__32486 = (0);
seq__32350 = G__32483;
chunk__32351 = G__32484;
count__32352 = G__32485;
i__32353 = G__32486;
continue;
} else {
var role = cljs.core.first(seq__32350__$1);
var temp__5457__auto___32488__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___32488__$2)){
var spec_32489 = temp__5457__auto___32488__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_32489)], 0));
} else {
}


var G__32491 = cljs.core.next(seq__32350__$1);
var G__32492 = null;
var G__32493 = (0);
var G__32494 = (0);
seq__32350 = G__32491;
chunk__32351 = G__32492;
count__32352 = G__32493;
i__32353 = G__32494;
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

//# sourceMappingURL=cljs.repl.js.map
