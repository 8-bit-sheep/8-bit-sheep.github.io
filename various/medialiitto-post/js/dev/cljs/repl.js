// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__9267){
var map__9268 = p__9267;
var map__9268__$1 = (((((!((map__9268 == null))))?(((((map__9268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9268):map__9268);
var m = map__9268__$1;
var n = cljs.core.get.call(null,map__9268__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__9268__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9270_9302 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9271_9303 = null;
var count__9272_9304 = (0);
var i__9273_9305 = (0);
while(true){
if((i__9273_9305 < count__9272_9304)){
var f_9306 = cljs.core._nth.call(null,chunk__9271_9303,i__9273_9305);
cljs.core.println.call(null,"  ",f_9306);


var G__9307 = seq__9270_9302;
var G__9308 = chunk__9271_9303;
var G__9309 = count__9272_9304;
var G__9310 = (i__9273_9305 + (1));
seq__9270_9302 = G__9307;
chunk__9271_9303 = G__9308;
count__9272_9304 = G__9309;
i__9273_9305 = G__9310;
continue;
} else {
var temp__5735__auto___9311 = cljs.core.seq.call(null,seq__9270_9302);
if(temp__5735__auto___9311){
var seq__9270_9312__$1 = temp__5735__auto___9311;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9270_9312__$1)){
var c__4556__auto___9313 = cljs.core.chunk_first.call(null,seq__9270_9312__$1);
var G__9314 = cljs.core.chunk_rest.call(null,seq__9270_9312__$1);
var G__9315 = c__4556__auto___9313;
var G__9316 = cljs.core.count.call(null,c__4556__auto___9313);
var G__9317 = (0);
seq__9270_9302 = G__9314;
chunk__9271_9303 = G__9315;
count__9272_9304 = G__9316;
i__9273_9305 = G__9317;
continue;
} else {
var f_9318 = cljs.core.first.call(null,seq__9270_9312__$1);
cljs.core.println.call(null,"  ",f_9318);


var G__9319 = cljs.core.next.call(null,seq__9270_9312__$1);
var G__9320 = null;
var G__9321 = (0);
var G__9322 = (0);
seq__9270_9302 = G__9319;
chunk__9271_9303 = G__9320;
count__9272_9304 = G__9321;
i__9273_9305 = G__9322;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9323 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9323);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9323)))?cljs.core.second.call(null,arglists_9323):arglists_9323));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9274_9324 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9275_9325 = null;
var count__9276_9326 = (0);
var i__9277_9327 = (0);
while(true){
if((i__9277_9327 < count__9276_9326)){
var vec__9288_9328 = cljs.core._nth.call(null,chunk__9275_9325,i__9277_9327);
var name_9329 = cljs.core.nth.call(null,vec__9288_9328,(0),null);
var map__9291_9330 = cljs.core.nth.call(null,vec__9288_9328,(1),null);
var map__9291_9331__$1 = (((((!((map__9291_9330 == null))))?(((((map__9291_9330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9291_9330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9291_9330):map__9291_9330);
var doc_9332 = cljs.core.get.call(null,map__9291_9331__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9333 = cljs.core.get.call(null,map__9291_9331__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9329);

cljs.core.println.call(null," ",arglists_9333);

if(cljs.core.truth_(doc_9332)){
cljs.core.println.call(null," ",doc_9332);
} else {
}


var G__9334 = seq__9274_9324;
var G__9335 = chunk__9275_9325;
var G__9336 = count__9276_9326;
var G__9337 = (i__9277_9327 + (1));
seq__9274_9324 = G__9334;
chunk__9275_9325 = G__9335;
count__9276_9326 = G__9336;
i__9277_9327 = G__9337;
continue;
} else {
var temp__5735__auto___9338 = cljs.core.seq.call(null,seq__9274_9324);
if(temp__5735__auto___9338){
var seq__9274_9339__$1 = temp__5735__auto___9338;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9274_9339__$1)){
var c__4556__auto___9340 = cljs.core.chunk_first.call(null,seq__9274_9339__$1);
var G__9341 = cljs.core.chunk_rest.call(null,seq__9274_9339__$1);
var G__9342 = c__4556__auto___9340;
var G__9343 = cljs.core.count.call(null,c__4556__auto___9340);
var G__9344 = (0);
seq__9274_9324 = G__9341;
chunk__9275_9325 = G__9342;
count__9276_9326 = G__9343;
i__9277_9327 = G__9344;
continue;
} else {
var vec__9293_9345 = cljs.core.first.call(null,seq__9274_9339__$1);
var name_9346 = cljs.core.nth.call(null,vec__9293_9345,(0),null);
var map__9296_9347 = cljs.core.nth.call(null,vec__9293_9345,(1),null);
var map__9296_9348__$1 = (((((!((map__9296_9347 == null))))?(((((map__9296_9347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9296_9347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9296_9347):map__9296_9347);
var doc_9349 = cljs.core.get.call(null,map__9296_9348__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9350 = cljs.core.get.call(null,map__9296_9348__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9346);

cljs.core.println.call(null," ",arglists_9350);

if(cljs.core.truth_(doc_9349)){
cljs.core.println.call(null," ",doc_9349);
} else {
}


var G__9351 = cljs.core.next.call(null,seq__9274_9339__$1);
var G__9352 = null;
var G__9353 = (0);
var G__9354 = (0);
seq__9274_9324 = G__9351;
chunk__9275_9325 = G__9352;
count__9276_9326 = G__9353;
i__9277_9327 = G__9354;
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
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__9298 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__9299 = null;
var count__9300 = (0);
var i__9301 = (0);
while(true){
if((i__9301 < count__9300)){
var role = cljs.core._nth.call(null,chunk__9299,i__9301);
var temp__5735__auto___9355__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___9355__$1)){
var spec_9356 = temp__5735__auto___9355__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_9356));
} else {
}


var G__9357 = seq__9298;
var G__9358 = chunk__9299;
var G__9359 = count__9300;
var G__9360 = (i__9301 + (1));
seq__9298 = G__9357;
chunk__9299 = G__9358;
count__9300 = G__9359;
i__9301 = G__9360;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__9298);
if(temp__5735__auto____$1){
var seq__9298__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9298__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__9298__$1);
var G__9361 = cljs.core.chunk_rest.call(null,seq__9298__$1);
var G__9362 = c__4556__auto__;
var G__9363 = cljs.core.count.call(null,c__4556__auto__);
var G__9364 = (0);
seq__9298 = G__9361;
chunk__9299 = G__9362;
count__9300 = G__9363;
i__9301 = G__9364;
continue;
} else {
var role = cljs.core.first.call(null,seq__9298__$1);
var temp__5735__auto___9365__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___9365__$2)){
var spec_9366 = temp__5735__auto___9365__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_9366));
} else {
}


var G__9367 = cljs.core.next.call(null,seq__9298__$1);
var G__9368 = null;
var G__9369 = (0);
var G__9370 = (0);
seq__9298 = G__9367;
chunk__9299 = G__9368;
count__9300 = G__9369;
i__9301 = G__9370;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__9371 = cljs.core.conj.call(null,via,t);
var G__9372 = cljs.core.ex_cause.call(null,t);
via = G__9371;
t = G__9372;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__9375 = datafied_throwable;
var map__9375__$1 = (((((!((map__9375 == null))))?(((((map__9375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9375):map__9375);
var via = cljs.core.get.call(null,map__9375__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__9375__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__9375__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__9376 = cljs.core.last.call(null,via);
var map__9376__$1 = (((((!((map__9376 == null))))?(((((map__9376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9376):map__9376);
var type = cljs.core.get.call(null,map__9376__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__9376__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__9376__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__9377 = data;
var map__9377__$1 = (((((!((map__9377 == null))))?(((((map__9377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9377):map__9377);
var problems = cljs.core.get.call(null,map__9377__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__9377__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__9377__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__9378 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__9378__$1 = (((((!((map__9378 == null))))?(((((map__9378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9378):map__9378);
var top_data = map__9378__$1;
var source = cljs.core.get.call(null,map__9378__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__9383 = phase;
var G__9383__$1 = (((G__9383 instanceof cljs.core.Keyword))?G__9383.fqn:null);
switch (G__9383__$1) {
case "read-source":
var map__9384 = data;
var map__9384__$1 = (((((!((map__9384 == null))))?(((((map__9384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9384):map__9384);
var line = cljs.core.get.call(null,map__9384__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__9384__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__9386 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__9386__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__9386,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__9386);
var G__9386__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__9386__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__9386__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__9386__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__9386__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__9387 = top_data;
var G__9387__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__9387,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__9387);
var G__9387__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__9387__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__9387__$1);
var G__9387__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__9387__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__9387__$2);
var G__9387__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__9387__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__9387__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__9387__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__9387__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__9388 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__9388,(0),null);
var method = cljs.core.nth.call(null,vec__9388,(1),null);
var file = cljs.core.nth.call(null,vec__9388,(2),null);
var line = cljs.core.nth.call(null,vec__9388,(3),null);
var G__9391 = top_data;
var G__9391__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__9391,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__9391);
var G__9391__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__9391__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__9391__$1);
var G__9391__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__9391__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__9391__$2);
var G__9391__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__9391__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__9391__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__9391__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__9391__$4;
}

break;
case "execution":
var vec__9392 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__9392,(0),null);
var method = cljs.core.nth.call(null,vec__9392,(1),null);
var file = cljs.core.nth.call(null,vec__9392,(2),null);
var line = cljs.core.nth.call(null,vec__9392,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__9374_SHARP_){
var or__4126__auto__ = (p1__9374_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__9374_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__9395 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__9395__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__9395,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__9395);
var G__9395__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__9395__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__9395__$1);
var G__9395__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__9395__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__9395__$2);
var G__9395__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__9395__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__9395__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__9395__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__9395__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9383__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__9399){
var map__9400 = p__9399;
var map__9400__$1 = (((((!((map__9400 == null))))?(((((map__9400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9400):map__9400);
var triage_data = map__9400__$1;
var phase = cljs.core.get.call(null,map__9400__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__9400__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__9400__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__9400__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__9400__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__9400__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__9400__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__9400__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__9402 = phase;
var G__9402__$1 = (((G__9402 instanceof cljs.core.Keyword))?G__9402.fqn:null);
switch (G__9402__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__9403_9412 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__9404_9413 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__9405_9414 = true;
var _STAR_print_fn_STAR__temp_val__9406_9415 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__9405_9414);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__9406_9415);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__9397_SHARP_){
return cljs.core.dissoc.call(null,p1__9397_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__9404_9413);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__9403_9412);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__9407_9416 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__9408_9417 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__9409_9418 = true;
var _STAR_print_fn_STAR__temp_val__9410_9419 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__9409_9418);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__9410_9419);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__9398_SHARP_){
return cljs.core.dissoc.call(null,p1__9398_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__9408_9417);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__9407_9416);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9402__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
