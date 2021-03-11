// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('sakalli.submit');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cemerick.url');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('sakalli.configuration');
sakalli.submit.make_remote_call = (function sakalli$submit$make_remote_call(endpoint){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([endpoint], 0));

var c__13423__auto___18171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13424__auto__ = (function (){var switch__13296__auto__ = (function (state_18164){
var state_val_18165 = (state_18164[(1)]);
if((state_val_18165 === (1))){
var inst_18155 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_];
var inst_18156 = [false];
var inst_18157 = cljs.core.PersistentHashMap.fromArrays(inst_18155,inst_18156);
var inst_18158 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(endpoint,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18157], 0));
var state_18164__$1 = state_18164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18164__$1,(2),inst_18158);
} else {
if((state_val_18165 === (2))){
var inst_18160 = (state_18164[(2)]);
var inst_18161 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_18160);
var inst_18162 = console.log(inst_18161);
var state_18164__$1 = state_18164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18164__$1,inst_18162);
} else {
return null;
}
}
});
return (function() {
var sakalli$submit$make_remote_call_$_state_machine__13297__auto__ = null;
var sakalli$submit$make_remote_call_$_state_machine__13297__auto____0 = (function (){
var statearr_18166 = [null,null,null,null,null,null,null];
(statearr_18166[(0)] = sakalli$submit$make_remote_call_$_state_machine__13297__auto__);

(statearr_18166[(1)] = (1));

return statearr_18166;
});
var sakalli$submit$make_remote_call_$_state_machine__13297__auto____1 = (function (state_18164){
while(true){
var ret_value__13298__auto__ = (function (){try{while(true){
var result__13299__auto__ = switch__13296__auto__(state_18164);
if(cljs.core.keyword_identical_QMARK_(result__13299__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13299__auto__;
}
break;
}
}catch (e18167){var ex__13300__auto__ = e18167;
var statearr_18168_18172 = state_18164;
(statearr_18168_18172[(2)] = ex__13300__auto__);


if(cljs.core.seq((state_18164[(4)]))){
var statearr_18169_18173 = state_18164;
(statearr_18169_18173[(1)] = cljs.core.first((state_18164[(4)])));

} else {
throw ex__13300__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13298__auto__,cljs.core.cst$kw$recur)){
var G__18174 = state_18164;
state_18164 = G__18174;
continue;
} else {
return ret_value__13298__auto__;
}
break;
}
});
sakalli$submit$make_remote_call_$_state_machine__13297__auto__ = function(state_18164){
switch(arguments.length){
case 0:
return sakalli$submit$make_remote_call_$_state_machine__13297__auto____0.call(this);
case 1:
return sakalli$submit$make_remote_call_$_state_machine__13297__auto____1.call(this,state_18164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sakalli$submit$make_remote_call_$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$0 = sakalli$submit$make_remote_call_$_state_machine__13297__auto____0;
sakalli$submit$make_remote_call_$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$1 = sakalli$submit$make_remote_call_$_state_machine__13297__auto____1;
return sakalli$submit$make_remote_call_$_state_machine__13297__auto__;
})()
})();
var state__13425__auto__ = (function (){var statearr_18170 = (f__13424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13424__auto__.cljs$core$IFn$_invoke$arity$0() : f__13424__auto__.call(null));
(statearr_18170[(6)] = c__13423__auto___18171);

return statearr_18170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13425__auto__);
}));


return console.log(endpoint);
});
/**
 * Helper function for validation function.
 *   False if a field is empty
 */
sakalli.submit.submitted_QMARK_ = (function sakalli$submit$submitted_QMARK_(k,x){
var G__18176 = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(x) : k.call(null,x));
var fexpr__18175 = cljs.core.complement(cljs.core.nil_QMARK_);
return (fexpr__18175.cljs$core$IFn$_invoke$arity$1 ? fexpr__18175.cljs$core$IFn$_invoke$arity$1(G__18176) : fexpr__18175.call(null,G__18176));
});
/**
 * Simple validation to allow posting an entry,
 *   goes through all required fields
 */
sakalli.submit.validate_submission = (function sakalli$submit$validate_submission(submission){
var and__4115__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__18177_SHARP_,p2__18178_SHARP_){
var and__4115__auto__ = p1__18177_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return p2__18178_SHARP_;
} else {
return and__4115__auto__;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18179_SHARP_){
return sakalli.submit.submitted_QMARK_(p1__18179_SHARP_,submission);
}),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$micronarrative1,cljs.core.cst$kw$micronarrative2,cljs.core.cst$kw$triad_DASH_values1,cljs.core.cst$kw$triad_DASH_values2,cljs.core.cst$kw$birthyear,cljs.core.cst$kw$fave_DASH_app,cljs.core.cst$kw$gender,cljs.core.cst$kw$micronarrative1], null)));
if(cljs.core.truth_(and__4115__auto__)){
return (((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$birthyear.cljs$core$IFn$_invoke$arity$1(submission),cljs.core.second(cljs.core.cst$kw$gender_DASH_options.cljs$core$IFn$_invoke$arity$1(sakalli.configuration.texts)))))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$gender.cljs$core$IFn$_invoke$arity$1(submission),cljs.core.second(cljs.core.cst$kw$gender_DASH_options.cljs$core$IFn$_invoke$arity$1(sakalli.configuration.texts)))))));
} else {
return and__4115__auto__;
}
});
sakalli.submit.format_entry = (function sakalli$submit$format_entry(entry){
var vec__18180 = cljs.core.cst$kw$triad_DASH_values1.cljs$core$IFn$_invoke$arity$1(entry);
var t1v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18180,(0),null);
var t1v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18180,(1),null);
var t1v3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18180,(2),null);
var vec__18183 = cljs.core.cst$kw$triad_DASH_values2.cljs$core$IFn$_invoke$arity$1(entry);
var t2v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18183,(0),null);
var t2v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18183,(1),null);
var t2v3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18183,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(entry,cljs.core.cst$kw$triad1value1,t1v1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$triad1value2,t1v2,cljs.core.cst$kw$triad1value3,t1v3,cljs.core.cst$kw$triad2value1,t2v1,cljs.core.cst$kw$triad2value2,t2v2,cljs.core.cst$kw$triad2value3,t2v3], 0));
});
