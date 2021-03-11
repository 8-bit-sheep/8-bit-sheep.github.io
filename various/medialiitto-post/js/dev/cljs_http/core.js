// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__17441 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__17441.cljs$core$IFn$_invoke$arity$1 ? fexpr__17441.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__17441.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17442){
var vec__17443 = p__17442;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17443,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17443,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__17446 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__17446)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__17446)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__17446)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__17446)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__17446)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__17446)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17446)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__17447){
var map__17448 = p__17447;
var map__17448__$1 = (((((!((map__17448 == null))))?(((((map__17448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17448):map__17448);
var request = map__17448__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17448__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17448__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17448__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__4126__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__17450 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__17450,default_headers);

cljs_http.core.apply_response_type_BANG_(G__17450,response_type);

G__17450.setTimeoutInterval(timeout);

G__17450.setWithCredentials(send_credentials);

return G__17450;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__17451){
var map__17452 = p__17451;
var map__17452__$1 = (((((!((map__17452 == null))))?(((((map__17452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17452):map__17452);
var request = map__17452__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17452__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17452__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17452__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17452__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17452__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17452__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__17454 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__17454) : cljs_http.core.error_kw.call(null,G__17454));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_17478 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});
var G__17455_17479 = xhr;
G__17455_17479.setProgressEventsEnabled(true);

G__17455_17479.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_17478,cljs.core.cst$kw$upload));

G__17455_17479.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_17478,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__13423__auto___17480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13424__auto__ = (function (){var switch__13296__auto__ = (function (state_17466){
var state_val_17467 = (state_17466[(1)]);
if((state_val_17467 === (1))){
var state_17466__$1 = state_17466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17466__$1,(2),cancel);
} else {
if((state_val_17467 === (2))){
var inst_17457 = (state_17466[(2)]);
var inst_17458 = xhr.isComplete();
var inst_17459 = cljs.core.not(inst_17458);
var state_17466__$1 = (function (){var statearr_17468 = state_17466;
(statearr_17468[(7)] = inst_17457);

return statearr_17468;
})();
if(inst_17459){
var statearr_17469_17481 = state_17466__$1;
(statearr_17469_17481[(1)] = (3));

} else {
var statearr_17470_17482 = state_17466__$1;
(statearr_17470_17482[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17467 === (3))){
var inst_17461 = xhr.abort();
var state_17466__$1 = state_17466;
var statearr_17471_17483 = state_17466__$1;
(statearr_17471_17483[(2)] = inst_17461);

(statearr_17471_17483[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17467 === (4))){
var state_17466__$1 = state_17466;
var statearr_17472_17484 = state_17466__$1;
(statearr_17472_17484[(2)] = null);

(statearr_17472_17484[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17467 === (5))){
var inst_17464 = (state_17466[(2)]);
var state_17466__$1 = state_17466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17466__$1,inst_17464);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__13297__auto__ = null;
var cljs_http$core$xhr_$_state_machine__13297__auto____0 = (function (){
var statearr_17473 = [null,null,null,null,null,null,null,null];
(statearr_17473[(0)] = cljs_http$core$xhr_$_state_machine__13297__auto__);

(statearr_17473[(1)] = (1));

return statearr_17473;
});
var cljs_http$core$xhr_$_state_machine__13297__auto____1 = (function (state_17466){
while(true){
var ret_value__13298__auto__ = (function (){try{while(true){
var result__13299__auto__ = switch__13296__auto__(state_17466);
if(cljs.core.keyword_identical_QMARK_(result__13299__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13299__auto__;
}
break;
}
}catch (e17474){var ex__13300__auto__ = e17474;
var statearr_17475_17485 = state_17466;
(statearr_17475_17485[(2)] = ex__13300__auto__);


if(cljs.core.seq((state_17466[(4)]))){
var statearr_17476_17486 = state_17466;
(statearr_17476_17486[(1)] = cljs.core.first((state_17466[(4)])));

} else {
throw ex__13300__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13298__auto__,cljs.core.cst$kw$recur)){
var G__17487 = state_17466;
state_17466 = G__17487;
continue;
} else {
return ret_value__13298__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__13297__auto__ = function(state_17466){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__13297__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__13297__auto____1.call(this,state_17466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__13297__auto____0;
cljs_http$core$xhr_$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__13297__auto____1;
return cljs_http$core$xhr_$_state_machine__13297__auto__;
})()
})();
var state__13425__auto__ = (function (){var statearr_17477 = (f__13424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13424__auto__.cljs$core$IFn$_invoke$arity$0() : f__13424__auto__.call(null));
(statearr_17477[(6)] = c__13423__auto___17480);

return statearr_17477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13425__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__17488){
var map__17489 = p__17488;
var map__17489__$1 = (((((!((map__17489 == null))))?(((((map__17489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17489):map__17489);
var request = map__17489__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17489__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17489__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17489__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17489__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_17503 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_17503], null));

if(cljs.core.truth_(cancel)){
var c__13423__auto___17504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13424__auto__ = (function (){var switch__13296__auto__ = (function (state_17495){
var state_val_17496 = (state_17495[(1)]);
if((state_val_17496 === (1))){
var state_17495__$1 = state_17495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17495__$1,(2),cancel);
} else {
if((state_val_17496 === (2))){
var inst_17492 = (state_17495[(2)]);
var inst_17493 = jsonp.cancel(req_17503);
var state_17495__$1 = (function (){var statearr_17497 = state_17495;
(statearr_17497[(7)] = inst_17492);

return statearr_17497;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17495__$1,inst_17493);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__13297__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__13297__auto____0 = (function (){
var statearr_17498 = [null,null,null,null,null,null,null,null];
(statearr_17498[(0)] = cljs_http$core$jsonp_$_state_machine__13297__auto__);

(statearr_17498[(1)] = (1));

return statearr_17498;
});
var cljs_http$core$jsonp_$_state_machine__13297__auto____1 = (function (state_17495){
while(true){
var ret_value__13298__auto__ = (function (){try{while(true){
var result__13299__auto__ = switch__13296__auto__(state_17495);
if(cljs.core.keyword_identical_QMARK_(result__13299__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13299__auto__;
}
break;
}
}catch (e17499){var ex__13300__auto__ = e17499;
var statearr_17500_17505 = state_17495;
(statearr_17500_17505[(2)] = ex__13300__auto__);


if(cljs.core.seq((state_17495[(4)]))){
var statearr_17501_17506 = state_17495;
(statearr_17501_17506[(1)] = cljs.core.first((state_17495[(4)])));

} else {
throw ex__13300__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13298__auto__,cljs.core.cst$kw$recur)){
var G__17507 = state_17495;
state_17495 = G__17507;
continue;
} else {
return ret_value__13298__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__13297__auto__ = function(state_17495){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__13297__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__13297__auto____1.call(this,state_17495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__13297__auto____0;
cljs_http$core$jsonp_$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__13297__auto____1;
return cljs_http$core$jsonp_$_state_machine__13297__auto__;
})()
})();
var state__13425__auto__ = (function (){var statearr_17502 = (f__13424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13424__auto__.cljs$core$IFn$_invoke$arity$0() : f__13424__auto__.call(null));
(statearr_17502[(6)] = c__13423__auto___17504);

return statearr_17502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13425__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__17508){
var map__17509 = p__17508;
var map__17509__$1 = (((((!((map__17509 == null))))?(((((map__17509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17509):map__17509);
var request = map__17509__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17509__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
