// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('sakalli.page');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cemerick.url');
goog.require('free_form.core');
goog.require('free_form.bootstrap_3');
goog.require('reagent.core');
goog.require('sakalli.configuration');
goog.require('sakalli.elements');
goog.require('sakalli.intro');
goog.require('sakalli.point');
goog.require('sakalli.math');
goog.require('sakalli.submit');
goog.require('sakalli.triad');
sakalli.page.data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$service,cljs.core.vals(cemerick.url.url.cljs$core$IFn$_invoke$arity$1(window.location.href).query),cljs.core.cst$kw$submitted,false,cljs.core.cst$kw$tri_DASH_element_DASH_width,(function (){var x__4217__auto__ = (250);
var y__4218__auto__ = ((window.innerWidth / (3)) | (0));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})()], null));
/**
 * Updating width in order to enable responsivity of the triangle
 */
sakalli.page.window_resize_handler = (function sakalli$page$window_resize_handler(event){
var width = (function (){var x__4217__auto__ = (250);
var y__4218__auto__ = ((window.innerWidth / (3)) | (0));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sakalli.page.data,cljs.core.assoc,cljs.core.cst$kw$tri_DASH_element_DASH_width,width);
});
/**
 * Data collected 'serverless', submits to Google Docs
 */
sakalli.page.submit = (function sakalli$page$submit(entry){
sakalli.submit.make_remote_call(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cemerick.url.url.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(sakalli.configuration.conf)),cljs.core.cst$kw$query,sakalli.submit.format_entry(entry))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sakalli.page.data,cljs.core.assoc,cljs.core.cst$kw$submitted,true);

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["submitted"], 0));

});
sakalli.page.submit_button = (function sakalli$page$submit_button(app_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"black"], null),cljs.core.cst$kw$type,cljs.core.cst$kw$button,cljs.core.cst$kw$on_DASH_click,(function (_){
return sakalli.page.submit(app_state);
})], null),cljs.core.cst$kw$send_DASH_label.cljs$core$IFn$_invoke$arity$1(sakalli.configuration.texts)], null);
});
/**
 * Constructs a key for saving data to state
 */
sakalli.page.make_key = (function sakalli$page$make_key(keyname,id){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(keyname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
});
/**
 * Constructs a callback that updates the point in triad when clicked
 */
sakalli.page.on_click_callback = (function sakalli$page$on_click_callback(size,id,e){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.swap_BANG_,sakalli.page.data,sakalli.point.update_point,e,size,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18781_SHARP_){
return sakalli.page.make_key(p1__18781_SHARP_,id);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","triad-values",""], null))], 0));
});
/**
 * Builds the hiccup for a triad
 */
sakalli.page.new_build_triad = (function sakalli$page$new_build_triad(app_state,triad_conf){
var id = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(triad_conf);
var triad_size = cljs.core.cst$kw$tri_DASH_element_DASH_width.cljs$core$IFn$_invoke$arity$1(app_state);
var element_dimensions = sakalli.math.tri_element_size(triad_size);
var callback = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(sakalli.page.on_click_callback,triad_size,id)], null);
var style = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([callback,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(element_dimensions),cljs.core.cst$kw$height,cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(element_dimensions)], null)], 0));
var svg_path = sakalli.triad.tri_path_string(sakalli.math.tri_path_values(triad_size));
var point_selected_QMARK_ = (function (){var fexpr__18785 = sakalli.page.make_key("",id);
return (fexpr__18785.cljs$core$IFn$_invoke$arity$1 ? fexpr__18785.cljs$core$IFn$_invoke$arity$1(app_state) : fexpr__18785.call(null,app_state));
})();
var vec__18782 = (function (){var fexpr__18786 = sakalli.page.make_key("position",id);
return (fexpr__18786.cljs$core$IFn$_invoke$arity$1 ? fexpr__18786.cljs$core$IFn$_invoke$arity$1(app_state) : fexpr__18786.call(null,app_state));
})();
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18782,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18782,(1),null);
var question_label = cljs.core.cst$kw$question.cljs$core$IFn$_invoke$arity$1(triad_conf);
var top_label = cljs.core.cst$kw$triad_DASH_top.cljs$core$IFn$_invoke$arity$1(triad_conf);
var left_label = cljs.core.cst$kw$triad_DASH_left.cljs$core$IFn$_invoke$arity$1(triad_conf);
var right_label = cljs.core.cst$kw$triad_DASH_right.cljs$core$IFn$_invoke$arity$1(triad_conf);
var narrative = cljs.core.cst$kw$narrative.cljs$core$IFn$_invoke$arity$1(triad_conf);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,narrative], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,question_label], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,question_label], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$triangle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$tri_DASH_labels_DASH_top,top_label], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg$svg_DASH_style,style,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,svg_path], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$opacity,((point_selected_QMARK_ === true)?(100):(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"point1",cljs.core.cst$kw$cx,x,cljs.core.cst$kw$cy,y,cljs.core.cst$kw$r,(3)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tri_DASH_labels_DASH_bottom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,left_label], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,right_label], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(question_label),"-trd"].join('')], null))], null));
});
/**
 * Outputs the triad hiccup based on input
 *   signature: map with following keys
 *           `:selected-position`
 */
sakalli.page.build_triad = (function sakalli$page$build_triad(p__18787){
var map__18788 = p__18787;
var map__18788__$1 = (((((!((map__18788 == null))))?(((((map__18788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18788):map__18788);
var selected_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18788__$1,cljs.core.cst$kw$selected_DASH_position);
var point_selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18788__$1,cljs.core.cst$kw$point_DASH_selected_QMARK_);
var triad_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18788__$1,cljs.core.cst$kw$triad_DASH_width);
var on_click_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18788__$1,cljs.core.cst$kw$on_DASH_click_DASH_callback);
var triad_corner_labels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18788__$1,cljs.core.cst$kw$triad_DASH_corner_DASH_labels);
var vec__18790 = selected_position;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18790,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18790,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$triangle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$tri_DASH_labels_DASH_top,cljs.core.cst$kw$triad_DASH_top.cljs$core$IFn$_invoke$arity$1(triad_corner_labels)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg$svg_DASH_style,cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([on_click_callback,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(sakalli.math.tri_element_size(triad_width)),cljs.core.cst$kw$height,cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(sakalli.math.tri_element_size(triad_width))], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,sakalli.triad.tri_path_string(sakalli.math.tri_path_values(triad_width))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$opacity,((point_selected_QMARK_ === true)?(100):(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"point1",cljs.core.cst$kw$cx,x,cljs.core.cst$kw$cy,y,cljs.core.cst$kw$r,(3)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tri_DASH_labels_DASH_bottom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.cst$kw$triad_DASH_left.cljs$core$IFn$_invoke$arity$1(triad_corner_labels)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.cst$kw$triad_DASH_right.cljs$core$IFn$_invoke$arity$1(triad_corner_labels)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null)], null);
});
/**
 * render the triad hiccup
 * signature: 
 */
sakalli.page.triad_with_label = (function sakalli$page$triad_with_label(app_state,triad_size,question_key,seleced_pos_key,point_selected_QMARK__key,triad_key,labels){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,(question_key.cljs$core$IFn$_invoke$arity$1 ? question_key.cljs$core$IFn$_invoke$arity$1(labels) : question_key.call(null,labels))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(question_key.cljs$core$IFn$_invoke$arity$1 ? question_key.cljs$core$IFn$_invoke$arity$1(labels) : question_key.call(null,labels))], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sakalli.page.build_triad,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$selected_DASH_position,(seleced_pos_key.cljs$core$IFn$_invoke$arity$1 ? seleced_pos_key.cljs$core$IFn$_invoke$arity$1(app_state) : seleced_pos_key.call(null,app_state)),cljs.core.cst$kw$point_DASH_selected_QMARK_,(triad_key.cljs$core$IFn$_invoke$arity$1 ? triad_key.cljs$core$IFn$_invoke$arity$1(app_state) : triad_key.call(null,app_state)),cljs.core.cst$kw$triad_DASH_width,triad_size,cljs.core.cst$kw$on_DASH_click_DASH_callback,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sakalli.page.data,sakalli.point.update_point,e,triad_size,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([seleced_pos_key,point_selected_QMARK__key,triad_key], 0));
})], null),cljs.core.cst$kw$triad_DASH_corner_DASH_labels,labels], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((question_key.cljs$core$IFn$_invoke$arity$1 ? question_key.cljs$core$IFn$_invoke$arity$1(labels) : question_key.call(null,labels))),"-trd"].join('')], null))], null);
});
/**
 * get the triads from configureation file
 */
sakalli.page.triads_conf = (function sakalli$page$triads_conf(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sakalli.configuration.texts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$triads,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$service.cljs$core$IFn$_invoke$arity$1(app_state)))], null));
});
/**
 * render a map with triad elements
 */
sakalli.page.triad_map = (function sakalli$page$triad_map(app_state,width){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18793_SHARP_){
return sakalli.page.triad_with_label(app_state,width,cljs.core.cst$kw$question,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["position",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__18793_SHARP_))].join('')),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["triad-values",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__18793_SHARP_))].join('')),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["triad",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__18793_SHARP_))].join('')),p1__18793_SHARP_);
}),sakalli.page.triads_conf(app_state));
});
/**
 * select the triad hiccup per index
 */
sakalli.page.nth_triad = (function sakalli$page$nth_triad(n,app_state,width){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sakalli.page.triad_map(app_state,width),n));
});
/**
 * get the triad per index
 */
sakalli.page.triad_by_idx = (function sakalli$page$triad_by_idx(n,app_state,width){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.some((function (m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(m),n)){
return m;
} else {
return null;
}
}),sakalli.page.triad_map(app_state,width)));
});
sakalli.page.page = (function sakalli$page$page(){
var app_state = cljs.core.deref(sakalli.page.data);
var width = cljs.core.cst$kw$tri_DASH_element_DASH_width.cljs$core$IFn$_invoke$arity$1(app_state);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$main_DASH_header,cljs.core.cst$kw$main_DASH_header.cljs$core$IFn$_invoke$arity$1(sakalli.configuration.texts)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$plain_DASH_form,sakalli.elements.show_questionnaire_QMARK_(app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,cljs.core.cst$kw$service.cljs$core$IFn$_invoke$arity$1(sakalli.configuration.texts)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,cljs.core.cst$kw$service_DASH_header.cljs$core$IFn$_invoke$arity$1(sakalli.configuration.texts)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [free_form.core.form,app_state,cljs.core.cst$kw$_DASH_errors.cljs$core$IFn$_invoke$arity$1(app_state),(function (keys,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sakalli.page.data,(function (p1__18794_SHARP_){
return cljs.core.assoc_in(p1__18794_SHARP_,keys,value);
}));
}),cljs.core.cst$kw$bootstrap_DASH_3,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$noValidate,false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_offset_DASH_2$col_DASH_sm_DASH_10,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$free_DASH_form_SLASH_error_DASH_message,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$_DASH_general], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_danger], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Alla edellisess\u00E4 ty\u00F6pajassa kehitetyt ideat. Lue idean kuvaus l\u00E4pi ja arvioi ehdotukset triadien avulla."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"\n         Toimi jokaisen triadin kohdalla seuraavasti: Aseta\n         piste l\u00E4helle sit\u00E4 kulmaa, joka on sinusta t\u00E4rkein. Mik\u00E4li\n         kaksi kulmaa ovat yht\u00E4 t\u00E4rkeit\u00E4, aseta piste n\u00E4iden\n         puoliv\u00E4liin, jos taas koet kaikki yht\u00E4 relevanteiksi,\n         aseta piste silloin kolmion keskelle."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sakalli.page.new_build_triad,app_state),cljs.core.cst$kw$medialiitto.cljs$core$IFn$_invoke$arity$1(sakalli.configuration.triads)),sakalli.elements.validation_error_element(app_state),sakalli.elements.name_element(),sakalli.elements.company_element(),sakalli.elements.other_feedback_element(),sakalli.page.submit_button(app_state)], null)], null)], null),sakalli.elements.thank_you_element(app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),null,window.addEventListener("resize",sakalli.page.window_resize_handler)], null);
});
