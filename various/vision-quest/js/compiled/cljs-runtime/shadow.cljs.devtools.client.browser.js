goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return cljs.core._vreset_BANG_(shadow.cljs.devtools.client.browser.active_modules_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(shadow.cljs.devtools.client.browser.active_modules_ref),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4521__auto__ = [];
var len__4518__auto___36633 = arguments.length;
var i__4519__auto___36634 = (0);
while(true){
if((i__4519__auto___36634 < len__4518__auto___36633)){
args__4521__auto__.push((arguments[i__4519__auto___36634]));

var G__36635 = (i__4519__auto___36634 + (1));
i__4519__auto___36634 = G__36635;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36631){
var G__36632 = cljs.core.first(seq36631);
var seq36631__$1 = cljs.core.next(seq36631);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36632,seq36631__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__36636){
var map__36637 = p__36636;
var map__36637__$1 = ((((!((map__36637 == null)))?(((((map__36637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36637):map__36637);
var src = map__36637__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36637__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36637__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__3936__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__3936__auto__){
return or__3936__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36639 = cljs.core.seq(sources);
var chunk__36640 = null;
var count__36641 = (0);
var i__36642 = (0);
while(true){
if((i__36642 < count__36641)){
var map__36643 = chunk__36640.cljs$core$IIndexed$_nth$arity$2(null,i__36642);
var map__36643__$1 = ((((!((map__36643 == null)))?(((((map__36643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36643):map__36643);
var src = map__36643__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36643__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36643__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36643__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36643__$1,new cljs.core.Keyword(null,"js","js",1768080579));
SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__36647 = seq__36639;
var G__36648 = chunk__36640;
var G__36649 = count__36641;
var G__36650 = (i__36642 + (1));
seq__36639 = G__36647;
chunk__36640 = G__36648;
count__36641 = G__36649;
i__36642 = G__36650;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__36639);
if(temp__5457__auto__){
var seq__36639__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36639__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__36639__$1);
var G__36651 = cljs.core.chunk_rest(seq__36639__$1);
var G__36652 = c__4338__auto__;
var G__36653 = cljs.core.count(c__4338__auto__);
var G__36654 = (0);
seq__36639 = G__36651;
chunk__36640 = G__36652;
count__36641 = G__36653;
i__36642 = G__36654;
continue;
} else {
var map__36645 = cljs.core.first(seq__36639__$1);
var map__36645__$1 = ((((!((map__36645 == null)))?(((((map__36645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36645):map__36645);
var src = map__36645__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36645__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36645__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36645__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36645__$1,new cljs.core.Keyword(null,"js","js",1768080579));
SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__36655 = cljs.core.next(seq__36639__$1);
var G__36656 = null;
var G__36657 = (0);
var G__36658 = (0);
seq__36639 = G__36655;
chunk__36640 = G__36656;
count__36641 = G__36657;
i__36642 = G__36658;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36659 = cljs.core.seq(js_requires);
var chunk__36660 = null;
var count__36661 = (0);
var i__36662 = (0);
while(true){
if((i__36662 < count__36661)){
var js_ns = chunk__36660.cljs$core$IIndexed$_nth$arity$2(null,i__36662);
var require_str_36663 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36663);


var G__36664 = seq__36659;
var G__36665 = chunk__36660;
var G__36666 = count__36661;
var G__36667 = (i__36662 + (1));
seq__36659 = G__36664;
chunk__36660 = G__36665;
count__36661 = G__36666;
i__36662 = G__36667;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__36659);
if(temp__5457__auto__){
var seq__36659__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36659__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__36659__$1);
var G__36668 = cljs.core.chunk_rest(seq__36659__$1);
var G__36669 = c__4338__auto__;
var G__36670 = cljs.core.count(c__4338__auto__);
var G__36671 = (0);
seq__36659 = G__36668;
chunk__36660 = G__36669;
count__36661 = G__36670;
i__36662 = G__36671;
continue;
} else {
var js_ns = cljs.core.first(seq__36659__$1);
var require_str_36672 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36672);


var G__36673 = cljs.core.next(seq__36659__$1);
var G__36674 = null;
var G__36675 = (0);
var G__36676 = (0);
seq__36659 = G__36673;
chunk__36660 = G__36674;
count__36661 = G__36675;
i__36662 = G__36676;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__36677 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__36677) : callback.call(null,G__36677));
} else {
var G__36678 = shadow.cljs.devtools.client.env.files_url();
var G__36679 = ((function (G__36678){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__36678))
;
var G__36680 = "POST";
var G__36681 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__36682 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__36678,G__36679,G__36680,G__36681,G__36682);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__36684){
var map__36685 = p__36684;
var map__36685__$1 = ((((!((map__36685 == null)))?(((((map__36685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36685):map__36685);
var msg = map__36685__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36685__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36685__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__36687 = info;
var map__36687__$1 = ((((!((map__36687 == null)))?(((((map__36687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36687):map__36687);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36687__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36687__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4311__auto__ = ((function (map__36687,map__36687__$1,sources,compiled,map__36685,map__36685__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36689(s__36690){
return (new cljs.core.LazySeq(null,((function (map__36687,map__36687__$1,sources,compiled,map__36685,map__36685__$1,msg,info,reload_info){
return (function (){
var s__36690__$1 = s__36690;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__36690__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__36695 = cljs.core.first(xs__6012__auto__);
var map__36695__$1 = ((((!((map__36695 == null)))?(((((map__36695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36695):map__36695);
var src = map__36695__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36695__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36695__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4307__auto__ = ((function (s__36690__$1,map__36695,map__36695__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__36687,map__36687__$1,sources,compiled,map__36685,map__36685__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36689_$_iter__36691(s__36692){
return (new cljs.core.LazySeq(null,((function (s__36690__$1,map__36695,map__36695__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__36687,map__36687__$1,sources,compiled,map__36685,map__36685__$1,msg,info,reload_info){
return (function (){
var s__36692__$1 = s__36692;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__36692__$1);
if(temp__5457__auto____$1){
var s__36692__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36692__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__36692__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__36694 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__36693 = (0);
while(true){
if((i__36693 < size__4310__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__36693);
cljs.core.chunk_append(b__36694,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36714 = (i__36693 + (1));
i__36693 = G__36714;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36694),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36689_$_iter__36691(cljs.core.chunk_rest(s__36692__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36694),null);
}
} else {
var warning = cljs.core.first(s__36692__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36689_$_iter__36691(cljs.core.rest(s__36692__$2)));
}
} else {
return null;
}
break;
}
});})(s__36690__$1,map__36695,map__36695__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__36687,map__36687__$1,sources,compiled,map__36685,map__36685__$1,msg,info,reload_info))
,null,null));
});})(s__36690__$1,map__36695,map__36695__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__36687,map__36687__$1,sources,compiled,map__36685,map__36685__$1,msg,info,reload_info))
;
var fs__4308__auto__ = cljs.core.seq(iterys__4307__auto__(warnings));
if(fs__4308__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4308__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36689(cljs.core.rest(s__36690__$1)));
} else {
var G__36715 = cljs.core.rest(s__36690__$1);
s__36690__$1 = G__36715;
continue;
}
} else {
var G__36716 = cljs.core.rest(s__36690__$1);
s__36690__$1 = G__36716;
continue;
}
} else {
return null;
}
break;
}
});})(map__36687,map__36687__$1,sources,compiled,map__36685,map__36685__$1,msg,info,reload_info))
,null,null));
});})(map__36687,map__36687__$1,sources,compiled,map__36685,map__36685__$1,msg,info,reload_info))
;
return iter__4311__auto__(sources);
})()));
var seq__36697_36717 = cljs.core.seq(warnings);
var chunk__36698_36718 = null;
var count__36699_36719 = (0);
var i__36700_36720 = (0);
while(true){
if((i__36700_36720 < count__36699_36719)){
var map__36701_36721 = chunk__36698_36718.cljs$core$IIndexed$_nth$arity$2(null,i__36700_36720);
var map__36701_36722__$1 = ((((!((map__36701_36721 == null)))?(((((map__36701_36721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36701_36721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36701_36721):map__36701_36721);
var w_36723 = map__36701_36722__$1;
var msg_36724__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36701_36722__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36701_36722__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36701_36722__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36701_36722__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36727)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36725),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36726),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36724__$1)].join(''));


var G__36728 = seq__36697_36717;
var G__36729 = chunk__36698_36718;
var G__36730 = count__36699_36719;
var G__36731 = (i__36700_36720 + (1));
seq__36697_36717 = G__36728;
chunk__36698_36718 = G__36729;
count__36699_36719 = G__36730;
i__36700_36720 = G__36731;
continue;
} else {
var temp__5457__auto___36732 = cljs.core.seq(seq__36697_36717);
if(temp__5457__auto___36732){
var seq__36697_36733__$1 = temp__5457__auto___36732;
if(cljs.core.chunked_seq_QMARK_(seq__36697_36733__$1)){
var c__4338__auto___36734 = cljs.core.chunk_first(seq__36697_36733__$1);
var G__36735 = cljs.core.chunk_rest(seq__36697_36733__$1);
var G__36736 = c__4338__auto___36734;
var G__36737 = cljs.core.count(c__4338__auto___36734);
var G__36738 = (0);
seq__36697_36717 = G__36735;
chunk__36698_36718 = G__36736;
count__36699_36719 = G__36737;
i__36700_36720 = G__36738;
continue;
} else {
var map__36703_36739 = cljs.core.first(seq__36697_36733__$1);
var map__36703_36740__$1 = ((((!((map__36703_36739 == null)))?(((((map__36703_36739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36703_36739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36703_36739):map__36703_36739);
var w_36741 = map__36703_36740__$1;
var msg_36742__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36703_36740__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36703_36740__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36703_36740__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36703_36740__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36745)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36743),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36744),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36742__$1)].join(''));


var G__36746 = cljs.core.next(seq__36697_36733__$1);
var G__36747 = null;
var G__36748 = (0);
var G__36749 = (0);
seq__36697_36717 = G__36746;
chunk__36698_36718 = G__36747;
count__36699_36719 = G__36748;
i__36700_36720 = G__36749;
continue;
}
} else {
}
}
break;
}

if(!(shadow.cljs.devtools.client.env.autoload)){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__36687,map__36687__$1,sources,compiled,warnings,map__36685,map__36685__$1,msg,info,reload_info){
return (function (p__36705){
var map__36706 = p__36705;
var map__36706__$1 = ((((!((map__36706 == null)))?(((((map__36706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36706):map__36706);
var src = map__36706__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36706__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36706__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__36687,map__36687__$1,sources,compiled,warnings,map__36685,map__36685__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__36687,map__36687__$1,sources,compiled,warnings,map__36685,map__36685__$1,msg,info,reload_info){
return (function (p__36708){
var map__36709 = p__36708;
var map__36709__$1 = ((((!((map__36709 == null)))?(((((map__36709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36709):map__36709);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36709__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__36687,map__36687__$1,sources,compiled,warnings,map__36685,map__36685__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__36687,map__36687__$1,sources,compiled,warnings,map__36685,map__36685__$1,msg,info,reload_info){
return (function (p__36711){
var map__36712 = p__36711;
var map__36712__$1 = ((((!((map__36712 == null)))?(((((map__36712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36712):map__36712);
var rc = map__36712__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36712__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var or__3936__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format);
if(or__3936__auto__){
return or__3936__auto__;
} else {
return shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module);
}
});})(map__36687,map__36687__$1,sources,compiled,warnings,map__36685,map__36685__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__36687,map__36687__$1,sources,compiled,warnings,map__36685,map__36685__$1,msg,info,reload_info){
return (function (p1__36683_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36683_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__36687,map__36687__$1,sources,compiled,warnings,map__36685,map__36685__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__36750){
var map__36751 = p__36750;
var map__36751__$1 = ((((!((map__36751 == null)))?(((((map__36751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36751):map__36751);
var msg = map__36751__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36751__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36753 = cljs.core.seq(updates);
var chunk__36755 = null;
var count__36756 = (0);
var i__36757 = (0);
while(true){
if((i__36757 < count__36756)){
var path = chunk__36755.cljs$core$IIndexed$_nth$arity$2(null,i__36757);
if(clojure.string.ends_with_QMARK_(path,"css")){
var temp__5457__auto___36761 = document.querySelector(["link[href^=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"]"].join(''));
if(cljs.core.truth_(temp__5457__auto___36761)){
var node_36762 = temp__5457__auto___36761;
var new_link_36763 = (function (){var G__36759 = document.createElement("link");
G__36759.setAttribute("rel","stylesheet");

G__36759.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36759;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_36763,node_36762);

goog.dom.removeNode(node_36762);
} else {
}


var G__36764 = seq__36753;
var G__36765 = chunk__36755;
var G__36766 = count__36756;
var G__36767 = (i__36757 + (1));
seq__36753 = G__36764;
chunk__36755 = G__36765;
count__36756 = G__36766;
i__36757 = G__36767;
continue;
} else {
var G__36768 = seq__36753;
var G__36769 = chunk__36755;
var G__36770 = count__36756;
var G__36771 = (i__36757 + (1));
seq__36753 = G__36768;
chunk__36755 = G__36769;
count__36756 = G__36770;
i__36757 = G__36771;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__36753);
if(temp__5457__auto__){
var seq__36753__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36753__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__36753__$1);
var G__36772 = cljs.core.chunk_rest(seq__36753__$1);
var G__36773 = c__4338__auto__;
var G__36774 = cljs.core.count(c__4338__auto__);
var G__36775 = (0);
seq__36753 = G__36772;
chunk__36755 = G__36773;
count__36756 = G__36774;
i__36757 = G__36775;
continue;
} else {
var path = cljs.core.first(seq__36753__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var temp__5457__auto___36776__$1 = document.querySelector(["link[href^=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"]"].join(''));
if(cljs.core.truth_(temp__5457__auto___36776__$1)){
var node_36777 = temp__5457__auto___36776__$1;
var new_link_36778 = (function (){var G__36760 = document.createElement("link");
G__36760.setAttribute("rel","stylesheet");

G__36760.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36760;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_36778,node_36777);

goog.dom.removeNode(node_36777);
} else {
}


var G__36779 = cljs.core.next(seq__36753__$1);
var G__36780 = null;
var G__36781 = (0);
var G__36782 = (0);
seq__36753 = G__36779;
chunk__36755 = G__36780;
count__36756 = G__36781;
i__36757 = G__36782;
continue;
} else {
var G__36783 = cljs.core.next(seq__36753__$1);
var G__36784 = null;
var G__36785 = (0);
var G__36786 = (0);
seq__36753 = G__36783;
chunk__36755 = G__36784;
count__36756 = G__36785;
i__36757 = G__36786;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__36787){
var map__36788 = p__36787;
var map__36788__$1 = ((((!((map__36788 == null)))?(((((map__36788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36788):map__36788);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36788__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36788__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__36788,map__36788__$1,id,js){
return (function (){
return eval(js);
});})(map__36788,map__36788__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__36790){
var map__36791 = p__36790;
var map__36791__$1 = ((((!((map__36791 == null)))?(((((map__36791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36791):map__36791);
var msg = map__36791__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36791__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36791__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36791__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36791__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__36791,map__36791__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__36793){
var map__36794 = p__36793;
var map__36794__$1 = ((((!((map__36794 == null)))?(((((map__36794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36794):map__36794);
var src = map__36794__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36794__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__3925__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__3925__auto__;
}
});})(map__36791,map__36791__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__36791,map__36791__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__36791,map__36791__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__36796){
var map__36797 = p__36796;
var map__36797__$1 = ((((!((map__36797 == null)))?(((((map__36797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36797):map__36797);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36797__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36797__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(repl_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"ns","ns",441598760)], null)));

return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__36797,map__36797__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL init successful");
});})(map__36797,map__36797__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__36799){
var map__36800 = p__36799;
var map__36800__$1 = ((((!((map__36800 == null)))?(((((map__36800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36800):map__36800);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36800__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36800__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,ns);

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__36802){
var map__36803 = p__36802;
var map__36803__$1 = ((((!((map__36803 == null)))?(((((map__36803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36803):map__36803);
var msg = map__36803__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36803__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__36805 = type;
var G__36805__$1 = (((G__36805 instanceof cljs.core.Keyword))?G__36805.fqn:null);
switch (G__36805__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__36807 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__36808 = ((function (G__36807){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__36807))
;
var G__36809 = "POST";
var G__36810 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__36811 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__36807,G__36808,G__36809,G__36810,G__36811);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__3936__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___36812 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___36812)){
var s_36813 = temp__5457__auto___36812;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_36813.onclose = ((function (s_36813,temp__5457__auto___36812){
return (function (e){
return null;
});})(s_36813,temp__5457__auto___36812))
;

s_36813.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

shadow.cljs.devtools.client.browser.ws_connect();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
