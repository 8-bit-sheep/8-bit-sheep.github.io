goog.provide('vision_survey_8bs.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('free_form.core');
goog.require('free_form.bootstrap_3');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cemerick.url');
vision_survey_8bs.core.data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"service","service",-1963054559),cljs.core.vals(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(cemerick.url.url.cljs$core$IFn$_invoke$arity$1(window.location.href))),new cljs.core.Keyword(null,"submitted","submitted",-131658962),false,new cljs.core.Keyword(null,"tri-element-width","tri-element-width",-1578020988),(function (){var x__4027__auto__ = (250);
var y__4028__auto__ = ((window.innerWidth / (3)) | (0));
return ((x__4027__auto__ < y__4028__auto__) ? x__4027__auto__ : y__4028__auto__);
})()], null));
vision_survey_8bs.core.texts = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"analyze1","analyze1",-1303462976),new cljs.core.Keyword(null,"service","service",-1963054559),new cljs.core.Keyword(null,"validation-error","validation-error",1040492454),new cljs.core.Keyword(null,"january","january",-1839911577),new cljs.core.Keyword(null,"thank-you","thank-you",-1096552758),new cljs.core.Keyword(null,"triad-concepts4","triad-concepts4",1923400909),new cljs.core.Keyword(null,"respondent-placeholder","respondent-placeholder",1672972557),new cljs.core.Keyword(null,"send-label","send-label",-381931090),new cljs.core.Keyword(null,"triad-concepts3","triad-concepts3",-1256067024),new cljs.core.Keyword(null,"triad-concepts5","triad-concepts5",726466000),new cljs.core.Keyword(null,"triad-concepts2","triad-concepts2",-367496014),new cljs.core.Keyword(null,"respondent-label","respondent-label",1694567669),new cljs.core.Keyword(null,"main-header","main-header",1880318390),new cljs.core.Keyword(null,"placeholder-service","placeholder-service",-963501863),new cljs.core.Keyword(null,"triad-concepts1","triad-concepts1",-468035975),new cljs.core.Keyword(null,"utopia","utopia",919716125),new cljs.core.Keyword(null,"dystopia","dystopia",-38445697)],["Please pick a position in the triads. Balance the trade-offs regarding the concepts.","Company:","Please reply to all questions that have been marked with an asterix!","Describe a typical day at work in January 2019 as you imagine it today! (No more than 250 words)","Thank you!!",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Syncronized Swimming","Basketball / Miles Davis","Relay Race"], null),"Respondent name","Send",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["It's the Product!","It's the Exit, stupid!","It's Consulting FFS"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Highly Organized","Creative as Hell","Altruistic and Awesome"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chill, man, chill...","Dent in the Universe!","Feel The Baa, Luke!"], null),"Whats your name?","Vision Survey","8-bit-sheep",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mmm, Life Style Biz...","Moonshots!","Exiiiiiit!!!"], null),"Keeping in mind your choises above, write a short utopic story about 8-bit-sheep in five years. When your wildest dreams came true. What happened? How does 8-bit-sheep look then? (no more than 250 words)","Write a short dystopia about 8-bit-sheep in five years. We're effed. What happened? What went wrong from your perspective? (No more than 250 words)"]);
/**
 * Updating width in order to enable responsivity of the triangle
 */
vision_survey_8bs.core.window_resize_handler = (function vision_survey_8bs$core$window_resize_handler(event){
var w = (function (){var x__4027__auto__ = (250);
var y__4028__auto__ = ((window.innerWidth / (3)) | (0));
return ((x__4027__auto__ < y__4028__auto__) ? x__4027__auto__ : y__4028__auto__);
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(vision_survey_8bs.core.data,cljs.core.assoc,new cljs.core.Keyword(null,"tri-element-width","tri-element-width",-1578020988),w);
});
vision_survey_8bs.core.make_remote_call = (function vision_survey_8bs$core$make_remote_call(endpoint){
var c__25484__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25484__auto__){
return (function (){
var f__25485__auto__ = (function (){var switch__25439__auto__ = ((function (c__25484__auto__){
return (function (state_26668){
var state_val_26669 = (state_26668[(1)]);
if((state_val_26669 === (1))){
var inst_26659 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_26660 = [false];
var inst_26661 = cljs.core.PersistentHashMap.fromArrays(inst_26659,inst_26660);
var inst_26662 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(endpoint,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26661], 0));
var state_26668__$1 = state_26668;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26668__$1,(2),inst_26662);
} else {
if((state_val_26669 === (2))){
var inst_26664 = (state_26668[(2)]);
var inst_26665 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_26664);
var inst_26666 = console.log(inst_26665);
var state_26668__$1 = state_26668;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26668__$1,inst_26666);
} else {
return null;
}
}
});})(c__25484__auto__))
;
return ((function (switch__25439__auto__,c__25484__auto__){
return (function() {
var vision_survey_8bs$core$make_remote_call_$_state_machine__25440__auto__ = null;
var vision_survey_8bs$core$make_remote_call_$_state_machine__25440__auto____0 = (function (){
var statearr_26670 = [null,null,null,null,null,null,null];
(statearr_26670[(0)] = vision_survey_8bs$core$make_remote_call_$_state_machine__25440__auto__);

(statearr_26670[(1)] = (1));

return statearr_26670;
});
var vision_survey_8bs$core$make_remote_call_$_state_machine__25440__auto____1 = (function (state_26668){
while(true){
var ret_value__25441__auto__ = (function (){try{while(true){
var result__25442__auto__ = switch__25439__auto__(state_26668);
if(cljs.core.keyword_identical_QMARK_(result__25442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25442__auto__;
}
break;
}
}catch (e26671){if((e26671 instanceof Object)){
var ex__25443__auto__ = e26671;
var statearr_26672_26674 = state_26668;
(statearr_26672_26674[(5)] = ex__25443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26671;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26675 = state_26668;
state_26668 = G__26675;
continue;
} else {
return ret_value__25441__auto__;
}
break;
}
});
vision_survey_8bs$core$make_remote_call_$_state_machine__25440__auto__ = function(state_26668){
switch(arguments.length){
case 0:
return vision_survey_8bs$core$make_remote_call_$_state_machine__25440__auto____0.call(this);
case 1:
return vision_survey_8bs$core$make_remote_call_$_state_machine__25440__auto____1.call(this,state_26668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vision_survey_8bs$core$make_remote_call_$_state_machine__25440__auto__.cljs$core$IFn$_invoke$arity$0 = vision_survey_8bs$core$make_remote_call_$_state_machine__25440__auto____0;
vision_survey_8bs$core$make_remote_call_$_state_machine__25440__auto__.cljs$core$IFn$_invoke$arity$1 = vision_survey_8bs$core$make_remote_call_$_state_machine__25440__auto____1;
return vision_survey_8bs$core$make_remote_call_$_state_machine__25440__auto__;
})()
;})(switch__25439__auto__,c__25484__auto__))
})();
var state__25486__auto__ = (function (){var statearr_26673 = (f__25485__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25485__auto__.cljs$core$IFn$_invoke$arity$0() : f__25485__auto__.call(null));
(statearr_26673[(6)] = c__25484__auto__);

return statearr_26673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25486__auto__);
});})(c__25484__auto__))
);

return c__25484__auto__;
});
/**
 * Helper function for validation function.
 *   False if a field is empty
 */
vision_survey_8bs.core.submitted_QMARK_ = (function vision_survey_8bs$core$submitted_QMARK_(k,x){
return !(((k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(x) : k.call(null,x)) == null));
});
/**
 * Simple validation to allow posting an entry,
 *   goes through all required fields
 */
vision_survey_8bs.core.validate_submission = (function vision_survey_8bs$core$validate_submission(){
var submission = cljs.core.deref(vision_survey_8bs.core.data);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (submission){
return (function (p1__26676_SHARP_,p2__26677_SHARP_){
var and__3925__auto__ = p1__26676_SHARP_;
if(cljs.core.truth_(and__3925__auto__)){
return p2__26677_SHARP_;
} else {
return and__3925__auto__;
}
});})(submission))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (submission){
return (function (p1__26678_SHARP_){
return vision_survey_8bs.core.submitted_QMARK_(p1__26678_SHARP_,submission);
});})(submission))
,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"triad-values1","triad-values1",-967686863),new cljs.core.Keyword(null,"triad-values2","triad-values2",-1528117107),new cljs.core.Keyword(null,"triad-values3","triad-values3",622884597),new cljs.core.Keyword(null,"triad-values4","triad-values4",-697298285),new cljs.core.Keyword(null,"triad-values5","triad-values5",-257611650),new cljs.core.Keyword(null,"utopia","utopia",919716125),new cljs.core.Keyword(null,"dystopia","dystopia",-38445697),new cljs.core.Keyword(null,"january","january",-1839911577),new cljs.core.Keyword(null,"respondent","respondent",949130899)], null)));
});
vision_survey_8bs.core.format_entry = (function vision_survey_8bs$core$format_entry(entry){
var vec__26679 = new cljs.core.Keyword(null,"triad-values1","triad-values1",-967686863).cljs$core$IFn$_invoke$arity$1(entry);
var t1v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26679,(0),null);
var t1v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26679,(1),null);
var t1v3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26679,(2),null);
var vec__26682 = new cljs.core.Keyword(null,"triad-values2","triad-values2",-1528117107).cljs$core$IFn$_invoke$arity$1(entry);
var t2v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26682,(0),null);
var t2v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26682,(1),null);
var t2v3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26682,(2),null);
var vec__26685 = new cljs.core.Keyword(null,"triad-values3","triad-values3",622884597).cljs$core$IFn$_invoke$arity$1(entry);
var t3v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26685,(0),null);
var t3v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26685,(1),null);
var t3v3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26685,(2),null);
var vec__26688 = new cljs.core.Keyword(null,"triad-values4","triad-values4",-697298285).cljs$core$IFn$_invoke$arity$1(entry);
var t4v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26688,(0),null);
var t4v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26688,(1),null);
var t4v3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26688,(2),null);
var vec__26691 = new cljs.core.Keyword(null,"triad-values5","triad-values5",-257611650).cljs$core$IFn$_invoke$arity$1(entry);
var t5v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26691,(0),null);
var t5v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26691,(1),null);
var t5v3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26691,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(entry,new cljs.core.Keyword(null,"triad1value1","triad1value1",1562273067),t1v1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"triad1value2","triad1value2",2056265149),t1v2,new cljs.core.Keyword(null,"triad1value3","triad1value3",1519522730),t1v3,new cljs.core.Keyword(null,"triad2value1","triad2value1",993973309),t2v1,new cljs.core.Keyword(null,"triad2value2","triad2value2",1215076385),t2v2,new cljs.core.Keyword(null,"triad2value3","triad2value3",189925475),t2v3,new cljs.core.Keyword(null,"triad3value1","triad3value1",-408666011),t3v1,new cljs.core.Keyword(null,"triad3value2","triad3value2",1793616494),t3v2,new cljs.core.Keyword(null,"triad3value3","triad3value3",-420721059),t3v3,new cljs.core.Keyword(null,"triad4value1","triad4value1",1238018234),t4v1,new cljs.core.Keyword(null,"triad4value2","triad4value2",-1252444676),t4v2,new cljs.core.Keyword(null,"triad4value3","triad4value3",-1497180246),t4v3,new cljs.core.Keyword(null,"triad5value1","triad5value1",-1735900458),t5v1,new cljs.core.Keyword(null,"triad5value2","triad5value2",319488889),t5v2,new cljs.core.Keyword(null,"triad5value3","triad5value3",1222922682),t5v3], 0));
});
/**
 * Data collected 'serverless', submits to Google Docs
 */
vision_survey_8bs.core.submit = (function vision_survey_8bs$core$submit(entry){
if(cljs.core.truth_(vision_survey_8bs.core.validate_submission())){
vision_survey_8bs.core.make_remote_call([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cemerick.url.url.cljs$core$IFn$_invoke$arity$1("https://script.google.com/macros/s/AKfycbyKllDV1vZ2Uo6m1AsFm544AiNRQVsPD-Cxh6r0StFhUXojtBlT/exec"),new cljs.core.Keyword(null,"query","query",-1288509510),vision_survey_8bs.core.format_entry(entry)))].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(vision_survey_8bs.core.data,cljs.core.assoc,new cljs.core.Keyword(null,"submitted","submitted",-131658962),true);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(vision_survey_8bs.core.data,cljs.core.assoc,new cljs.core.Keyword(null,"validation-error","validation-error",1040492454),true);

}
});
/**
 * Helper function to figure out geometrics of the triangle.
 *   Calculates the triangle height based on the side length
 */
vision_survey_8bs.core.tri_height = (function vision_survey_8bs$core$tri_height(size){
var G__26694 = ((size * size) - ((size / (2)) * (size / (2))));
return Math.sqrt(G__26694);
});
/**
 * Needed to build the triangle svg. Generates path coordinates
 *   based on triangle size (side lenght)
 */
vision_survey_8bs.core.tri_path_values = (function vision_survey_8bs$core$tri_path_values(size){
var tx = (size / (2));
var ty = (0);
var lx = (size * (0));
var ly = vision_survey_8bs.core.tri_height(size);
var rx = (size * (1));
var ry = vision_survey_8bs.core.tri_height(size);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty,lx,ly,rx,ry,null], null);
});
/**
 * To quantify the triad measurement with respect to
 *   the corners. Calculates size for element containing triangle
 */
vision_survey_8bs.core.tri_element_size = (function vision_survey_8bs$core$tri_element_size(size){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(Math.round(size) * (1)),new cljs.core.Keyword(null,"height","height",1025178622),(function (){var G__26695 = (size * .95);
return Math.ceil(G__26695);
})()], null);
});
/**
 * Generate path string for svg
 */
vision_survey_8bs.core.tri_path_string = (function vision_survey_8bs$core$tri_path_string(coll){
var svg_path = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M"," "," L"," "," L"," "," Z"], null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(svg_path,coll));
});
/**
 * Helper function to calculate distances. Calculates
 *   line slope and incercept from two points
 *   line: y = mx + b
 */
vision_survey_8bs.core.get_slope_intercept = (function vision_survey_8bs$core$get_slope_intercept(p__26696){
var vec__26697 = p__26696;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26697,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26697,(1),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26697,(2),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26697,(3),null);
var m = ((y2 - y1) / (x2 - x1));
var b = (y1 - (m * x1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,b], null);
});
/**
 * Moves the point inside triad when user clicks outside
 */
vision_survey_8bs.core.move_inside = (function vision_survey_8bs$core$move_inside(p__26700,p__26701){
var vec__26702 = p__26700;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26702,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26702,(1),null);
var vec__26705 = p__26701;
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26705,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26705,(1),null);
var lx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26705,(2),null);
var ly = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26705,(3),null);
var rx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26705,(4),null);
var ry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26705,(5),null);
var vec__26708 = vision_survey_8bs.core.get_slope_intercept(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty,lx,ly], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26708,(0),null);
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26708,(1),null);
var vec__26711 = vision_survey_8bs.core.get_slope_intercept(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty,rx,ry], null));
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26711,(0),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26711,(1),null);
var boundry_x1 = ((y - b1) / m1);
var boundry_x2 = ((y - b2) / m2);
var new_x = (((x < boundry_x1))?boundry_x1:(((x > boundry_x2))?boundry_x2:x
));
var new_y = (((y < ty))?ty:(((y > ry))?ry:y
));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new_x | (0)),(new_y | (0))], null);
});
/**
 * Cause i can...
 */
vision_survey_8bs.core.abs = (function vision_survey_8bs$core$abs(n){
var x__4024__auto__ = n;
var y__4025__auto__ = (- n);
return ((x__4024__auto__ > y__4025__auto__) ? x__4024__auto__ : y__4025__auto__);
});
/**
 * Calculate point distance from the triad side
 *   pos  X Y
 *   line y = mx + b
 * 
 *   mx + -1y + b = 0
 *   Ax +  By + C = 0
 *   
 *     |AX + BY + C|
 *   d = ---------------
 *    sqrt(A^2 + B^2)
 */
vision_survey_8bs.core.distance = (function vision_survey_8bs$core$distance(p__26714,m,b,size){
var vec__26715 = p__26714;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26715,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26715,(1),null);
return (((100) * ((vision_survey_8bs.core.abs((((m * x) + ((-1) * y)) + b)) / (function (){var G__26718 = ((m * m) + (1));
return Math.sqrt(G__26718);
})()) / size)) | (0));
});
/**
 * To quantify the three dimensions / corner
 *   values within the triad.
 */
vision_survey_8bs.core.get_distances = (function vision_survey_8bs$core$get_distances(pos,p__26719){
var vec__26720 = p__26719;
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26720,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26720,(1),null);
var lx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26720,(2),null);
var ly = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26720,(3),null);
var rx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26720,(4),null);
var ry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26720,(5),null);
var vec__26723 = pos;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26723,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26723,(1),null);
var vec__26726 = vision_survey_8bs.core.get_slope_intercept(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty,lx,ly], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26726,(0),null);
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26726,(1),null);
var vec__26729 = vision_survey_8bs.core.get_slope_intercept(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty,rx,ry], null));
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26729,(0),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26729,(1),null);
var m3 = (0);
var b3 = ly;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vision_survey_8bs.core.distance(pos,m1,b1,ly) / (1)),(vision_survey_8bs.core.distance(pos,m2,b2,ly) / (1)),(vision_survey_8bs.core.distance(pos,m3,b3,ly) / (1))], null);
});
/**
 * Mouse position in element to calculate triad point entry
 */
vision_survey_8bs.core.position = (function vision_survey_8bs$core$position(e){
var rect = e.target.getBoundingClientRect();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(e.clientX - rect.left),(e.clientY - rect.top)], null);
});
/**
 * Helper function to update triad values
 */
vision_survey_8bs.core.update_point = (function vision_survey_8bs$core$update_point(data,e,size,pos,triad_values,triad){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,pos,vision_survey_8bs.core.move_inside(vision_survey_8bs.core.position(e),vision_survey_8bs.core.tri_path_values(size)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([triad_values,vision_survey_8bs.core.get_distances(vision_survey_8bs.core.move_inside(vision_survey_8bs.core.position(e),vision_survey_8bs.core.tri_path_values(size)),vision_survey_8bs.core.tri_path_values(size)),triad,true], 0));
});
vision_survey_8bs.core.micronarrative_element = (function vision_survey_8bs$core$micronarrative_element(k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("free-form","field","free-form/field",-703377161),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"label","label",1718410804),(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts) : k.call(null,vision_survey_8bs.core.texts)),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"micro-placeholder","micro-placeholder",2140938954).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts)], null)], null);
});
vision_survey_8bs.core.build_triangle = (function vision_survey_8bs$core$build_triangle(p__26732,p__26733,visible,size,attrs){
var vec__26734 = p__26732;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26734,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26734,(1),null);
var vec__26737 = p__26733;
var triad_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26737,(0),null);
var triad_top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26737,(1),null);
var triad_right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26737,(2),null);
var vec__26740 = vision_survey_8bs.core.tri_path_values(size);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26740,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26740,(1),null);
var ly = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26740,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26740,(3),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26740,(4),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26740,(5),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.triangle","div.triangle",1701038841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),triad_top], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.svg-style","svg.svg-style",-166282104),cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.tri_element_size(size)),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.tri_element_size(size))], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),vision_survey_8bs.core.tri_path_string(vision_survey_8bs.core.tri_path_values(size))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),((visible === true)?(100):(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"point1",new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y,new cljs.core.Keyword(null,"r","r",-471384190),(3)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear","clear",1877104959),"both"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ly),"px"].join(''),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((- tx)),"px"].join('')], null)], null),triad_left], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ly),"px"].join(''),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tx),"px"].join('')], null)], null),triad_right], null)], null)], null);
});
vision_survey_8bs.core.triad_element = (function vision_survey_8bs$core$triad_element(app_state,size,analyze,pos,triad_concepts,triad_values,triad){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),(analyze.cljs$core$IFn$_invoke$arity$1 ? analyze.cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts) : analyze.call(null,vision_survey_8bs.core.texts))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [vision_survey_8bs.core.build_triangle,(pos.cljs$core$IFn$_invoke$arity$1 ? pos.cljs$core$IFn$_invoke$arity$1(app_state) : pos.call(null,app_state)),triad_concepts,(triad.cljs$core$IFn$_invoke$arity$1 ? triad.cljs$core$IFn$_invoke$arity$1(app_state) : triad.call(null,app_state)),size,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(vision_survey_8bs.core.data,vision_survey_8bs.core.update_point,e,size,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pos,triad_values,triad], 0));
})], null)], null)], null)], null);
});
vision_survey_8bs.core.respondent_element = (function vision_survey_8bs$core$respondent_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("free-form","field","free-form/field",-703377161),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"respondent","respondent",949130899),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"respondent-label","respondent-label",1694567669).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"respondent-placeholder","respondent-placeholder",1672972557).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts)], null)], null);
});
vision_survey_8bs.core.utopia_element = (function vision_survey_8bs$core$utopia_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("free-form","field","free-form/field",-703377161),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"utopia","utopia",919716125),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"utopia","utopia",919716125).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"utopia-placeholder","utopia-placeholder",2010430315).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts)], null)], null);
});
vision_survey_8bs.core.dystopia_element = (function vision_survey_8bs$core$dystopia_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("free-form","field","free-form/field",-703377161),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"dystopia","dystopia",-38445697),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"dystopia","dystopia",-38445697).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"dystopia","dystopia",-38445697).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts)], null)], null);
});
vision_survey_8bs.core.january_element = (function vision_survey_8bs$core$january_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("free-form","field","free-form/field",-703377161),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"january","january",-1839911577),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"january","january",-1839911577).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"january-placeholder","january-placeholder",751018601).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts)], null)], null);
});
vision_survey_8bs.core.render_years_list = (function vision_survey_8bs$core$render_years_list(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"choose","choose",1680203305),(new cljs.core.List(null,cljs.core.second(new cljs.core.Keyword(null,"gender-options","gender-options",-126992436).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts)),null,(1),null)),(2),null)),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26743_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26743_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3((2015),(1900),(-1))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.range.cljs$core$IFn$_invoke$arity$3((2015),(1900),(-1)))));
});
vision_survey_8bs.core.birth_year_element = (function vision_survey_8bs$core$birth_year_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("free-form","field","free-form/field",-703377161),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"birthyear-label","birthyear-label",2096184148).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"birthyear","birthyear",356764915),new cljs.core.Keyword(null,"options","options",99638489),vision_survey_8bs.core.render_years_list()], null)], null);
});
vision_survey_8bs.core.gender_element = (function vision_survey_8bs$core$gender_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("free-form","field","free-form/field",-703377161),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"gender-label","gender-label",1531834426).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"gender","gender",-733930727),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"gender-options","gender-options",-126992436).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts)], null)], null);
});
vision_survey_8bs.core.validation_error_element = (function vision_survey_8bs$core$validation_error_element(app_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"validation-error","validation-error",1040492454).cljs$core$IFn$_invoke$arity$1(app_state))?new cljs.core.Keyword(null,"validation-error","validation-error",1040492454).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts):""
)], null);
});
vision_survey_8bs.core.submit_button = (function vision_survey_8bs$core$submit_button(app_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return vision_survey_8bs.core.submit(app_state);
})], null),new cljs.core.Keyword(null,"send-label","send-label",-381931090).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts)], null);
});
vision_survey_8bs.core.thank_you_element = (function vision_survey_8bs$core$thank_you_element(app_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(new cljs.core.Keyword(null,"submitted","submitted",-131658962).cljs$core$IFn$_invoke$arity$1(app_state))?"block":"none"
)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"thank-you","thank-you",-1096552758).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts)], null)], null);
});
/**
 * Helper function to hide survey
 */
vision_survey_8bs.core.quest_QMARK_ = (function vision_survey_8bs$core$quest_QMARK_(app_state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"submitted","submitted",-131658962).cljs$core$IFn$_invoke$arity$1(app_state))){
return "none";
} else {
return "block";

}
});
/**
 * Hide survey when submitted
 */
vision_survey_8bs.core.show_questionnaire_QMARK_ = (function vision_survey_8bs$core$show_questionnaire_QMARK_(app_state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),vision_survey_8bs.core.quest_QMARK_(app_state)], null)], null);
});
/**
 * Show template service name if no service defined as
 *   get element
 */
vision_survey_8bs.core.show_service = (function vision_survey_8bs$core$show_service(app_state){
var s = new cljs.core.Keyword(null,"service","service",-1963054559).cljs$core$IFn$_invoke$arity$1(app_state);
if(!((s == null))){
return s;
} else {
return new cljs.core.Keyword(null,"placeholder-service","placeholder-service",-963501863).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts);

}
});
vision_survey_8bs.core.page = (function vision_survey_8bs$core$page(){
var app_state = cljs.core.deref(vision_survey_8bs.core.data);
var size = new cljs.core.Keyword(null,"tri-element-width","tri-element-width",-1578020988).cljs$core$IFn$_invoke$arity$1(app_state);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.main-header","h1.main-header",363328302),new cljs.core.Keyword(null,"main-header","main-header",1880318390).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plain-form","div.plain-form",-960869612),vision_survey_8bs.core.show_questionnaire_QMARK_(app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"service","service",-1963054559).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),vision_survey_8bs.core.show_service(app_state)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [free_form.core.form,app_state,new cljs.core.Keyword(null,"-errors","-errors",1378571364).cljs$core$IFn$_invoke$arity$1(app_state),((function (app_state,size){
return (function (keys,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(vision_survey_8bs.core.data,((function (app_state,size){
return (function (p1__26744_SHARP_){
return cljs.core.assoc_in(p1__26744_SHARP_,keys,value);
});})(app_state,size))
);
});})(app_state,size))
,new cljs.core.Keyword(null,"bootstrap-3","bootstrap-3",535840793),new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"noValidate","noValidate",1502261891),true], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,vision_survey_8bs.core.triad_element(app_state,size,new cljs.core.Keyword(null,"analyze1","analyze1",-1303462976),new cljs.core.Keyword(null,"position1","position1",9593367),new cljs.core.Keyword(null,"triad-concepts1","triad-concepts1",-468035975).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts),new cljs.core.Keyword(null,"triad-values1","triad-values1",-967686863),new cljs.core.Keyword(null,"triad1","triad1",525779005))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,vision_survey_8bs.core.triad_element(app_state,size,new cljs.core.Keyword(null,"analyze2","analyze2",-1164429521),new cljs.core.Keyword(null,"position2","position2",37920398),new cljs.core.Keyword(null,"triad-concepts2","triad-concepts2",-367496014).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts),new cljs.core.Keyword(null,"triad-values2","triad-values2",-1528117107),new cljs.core.Keyword(null,"triad2","triad2",150691070))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,vision_survey_8bs.core.triad_element(app_state,size,new cljs.core.Keyword(null,"analyze3","analyze3",1698497423),new cljs.core.Keyword(null,"position3","position3",-753409461),new cljs.core.Keyword(null,"triad-concepts3","triad-concepts3",-1256067024).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts),new cljs.core.Keyword(null,"triad-values3","triad-values3",622884597),new cljs.core.Keyword(null,"triad3","triad3",2017809184))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,vision_survey_8bs.core.triad_element(app_state,size,new cljs.core.Keyword(null,"analyze4","analyze4",-845358575),new cljs.core.Keyword(null,"position4","position4",1728856815),new cljs.core.Keyword(null,"triad-concepts4","triad-concepts4",1923400909).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts),new cljs.core.Keyword(null,"triad-values4","triad-values4",-697298285),new cljs.core.Keyword(null,"triad4","triad4",-978064236))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,vision_survey_8bs.core.triad_element(app_state,size,new cljs.core.Keyword(null,"analyze5","analyze5",-655376180),new cljs.core.Keyword(null,"position5","position5",1877239518),new cljs.core.Keyword(null,"triad-concepts5","triad-concepts5",726466000).cljs$core$IFn$_invoke$arity$1(vision_survey_8bs.core.texts),new cljs.core.Keyword(null,"triad-values5","triad-values5",-257611650),new cljs.core.Keyword(null,"triad5","triad5",1747857834))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),vision_survey_8bs.core.utopia_element(),vision_survey_8bs.core.dystopia_element(),vision_survey_8bs.core.january_element(),vision_survey_8bs.core.respondent_element(),vision_survey_8bs.core.validation_error_element(app_state),vision_survey_8bs.core.submit_button(app_state)], null)], null)], null),vision_survey_8bs.core.thank_you_element(app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),null,window.addEventListener("resize",vision_survey_8bs.core.window_resize_handler)], null);
});
vision_survey_8bs.core.start = (function vision_survey_8bs$core$start(){
var G__26745 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vision_survey_8bs.core.page], null);
var G__26746 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__26745,G__26746) : reagent.core.render_component.call(null,G__26745,G__26746));
});
vision_survey_8bs.core.init = (function vision_survey_8bs$core$init(){
return vision_survey_8bs.core.start();
});
goog.exportSymbol('vision_survey_8bs.core.init', vision_survey_8bs.core.init);
vision_survey_8bs.core.stop = (function vision_survey_8bs$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=vision_survey_8bs.core.js.map
