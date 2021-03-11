// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('free_form.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('free_form.extension');
goog.require('free_form.util');
free_form.core.extract_attributes = (function free_form$core$extract_attributes(node,key){
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,free_form.util.attributes_index);
var re_attributes = (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(attributes) : key.call(null,attributes));
var attributes__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attributes,key);
var keys = (function (){var or__4126__auto__ = cljs.core.cst$kw$keys.cljs$core$IFn$_invoke$arity$1(re_attributes);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(re_attributes)], null);
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [attributes__$1,re_attributes,keys], null);
});
free_form.core.input_QMARK_ = (function free_form$core$input_QMARK_(node){
return ((cljs.core.coll_QMARK_(node)) && (cljs.core.contains_QMARK_(cljs.core.second(node),cljs.core.cst$kw$free_DASH_form_SLASH_input)));
});
free_form.core.js_event_value = (function free_form$core$js_event_value(event){
var target = event.target;
var G__18680 = target.type;
switch (G__18680) {
case "checkbox":
return target.checked;

break;
default:
return target.value;

}
});
free_form.core.extract_event_value = (function free_form$core$extract_event_value(event){
if(((cljs.core.boolean_QMARK_(event)) || (typeof event === 'string'))){
return event;
} else {
return free_form.core.js_event_value(event);
}
});
free_form.core.first_non_nil = (function free_form$core$first_non_nil(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18683 = arguments.length;
var i__4737__auto___18684 = (0);
while(true){
if((i__4737__auto___18684 < len__4736__auto___18683)){
args__4742__auto__.push((arguments[i__4737__auto___18684]));

var G__18685 = (i__4737__auto___18684 + (1));
i__4737__auto___18684 = G__18685;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return free_form.core.first_non_nil.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(free_form.core.first_non_nil.cljs$core$IFn$_invoke$arity$variadic = (function (coll){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),coll));
}));

(free_form.core.first_non_nil.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(free_form.core.first_non_nil.cljs$lang$applyTo = (function (seq18682){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18682));
}));

free_form.core.bind_input = (function free_form$core$bind_input(values,errors,on_change,node){
if((!(free_form.core.input_QMARK_(node)))){
return node;
} else {
var vec__18688 = free_form.core.extract_attributes(node,cljs.core.cst$kw$free_DASH_form_SLASH_input);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18688,(0),null);
var free_form_attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18688,(1),null);
var keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18688,(2),null);
var map__18691 = free_form_attributes;
var map__18691__$1 = (((((!((map__18691 == null))))?(((((map__18691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18691):map__18691);
var value_on = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18691__$1,cljs.core.cst$kw$value_DASH_on);
var error_on = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18691__$1,cljs.core.cst$kw$error_DASH_on);
var extra_error_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18691__$1,cljs.core.cst$kw$extra_DASH_error_DASH_keys);
var on_change_fn = (function (p1__18686_SHARP_){
var G__18693 = keys;
var G__18694 = free_form.core.extract_event_value(p1__18686_SHARP_);
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(G__18693,G__18694) : on_change.call(null,G__18693,G__18694));
});
var value_on__$1 = (function (){var or__4126__auto__ = value_on;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__18695 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(attributes);
var G__18695__$1 = (((G__18695 instanceof cljs.core.Keyword))?G__18695.fqn:null);
switch (G__18695__$1) {
case "checkbox":
case "radio":
return cljs.core.cst$kw$default_DASH_checked;

break;
default:
return cljs.core.cst$kw$value;

}
}
})();
var value = (function (){var G__18696 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(attributes);
var G__18696__$1 = (((G__18696 instanceof cljs.core.Keyword))?G__18696.fqn:null);
switch (G__18696__$1) {
case "checkbox":
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(values,keys));

break;
case "radio":
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(attributes),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(values,keys));

break;
default:
return free_form.core.first_non_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(values,keys),cljs.core.cst$kw$blank_DASH_value.cljs$core$IFn$_invoke$arity$1(free_form_attributes),""], 0));

}
})();
var input_errors = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(errors,keys);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,free_form.util.attributes_index,(function (){var G__18697 = attributes;
var G__18697__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18697,cljs.core.cst$kw$on_DASH_change,on_change_fn)
;
var G__18697__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18697__$1,value_on__$1,value)
;
var G__18697__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = error_on;
if(cljs.core.truth_(and__4115__auto__)){
return input_errors;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18697__$2,error_on,clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",input_errors)):G__18697__$2);
if(cljs.core.truth_((function (){var and__4115__auto__ = extra_error_keys;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.some((function (p1__18687_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(errors,p1__18687_SHARP_);
}),extra_error_keys);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18697__$3,error_on," ");
} else {
return G__18697__$3;
}
})());
}
});
/**
 * Tests whether the node should be marked with an error class should the field have an associated error.
 */
free_form.core.error_class_QMARK_ = (function free_form$core$error_class_QMARK_(node){
return ((cljs.core.coll_QMARK_(node)) && (cljs.core.contains_QMARK_(cljs.core.second(node),cljs.core.cst$kw$free_DASH_form_SLASH_error_DASH_class)));
});
free_form.core.bind_error_class = (function free_form$core$bind_error_class(errors,node){
if((!(free_form.core.error_class_QMARK_(node)))){
return node;
} else {
var vec__18702 = free_form.core.extract_attributes(node,cljs.core.cst$kw$free_DASH_form_SLASH_error_DASH_class);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18702,(0),null);
var re_attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18702,(1),null);
var keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18702,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,free_form.util.attributes_index,((cljs.core.not_any_QMARK_((function (p1__18700_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(errors,p1__18700_SHARP_);
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extra_DASH_keys.cljs$core$IFn$_invoke$arity$1(re_attributes),keys)))?attributes:cljs.core.update.cljs$core$IFn$_invoke$arity$3(attributes,cljs.core.cst$kw$class,(function (p1__18701_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(re_attributes);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "error";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18701_SHARP_)].join('');
}))));
}
});
free_form.core.error_messages_QMARK_ = (function free_form$core$error_messages_QMARK_(node){
return ((cljs.core.coll_QMARK_(node)) && (cljs.core.contains_QMARK_(cljs.core.second(node),cljs.core.cst$kw$free_DASH_form_SLASH_error_DASH_message)));
});
free_form.core.bind_error_messages = (function free_form$core$bind_error_messages(errors,node){
if((!(free_form.core.error_messages_QMARK_(node)))){
return node;
} else {
var vec__18706 = free_form.core.extract_attributes(node,cljs.core.cst$kw$free_DASH_form_SLASH_error_DASH_message);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18706,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18706,(1),null);
var keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18706,(2),null);
var temp__5733__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(errors,keys);
if(cljs.core.truth_(temp__5733__auto__)){
var errors__$1 = temp__5733__auto__;
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,free_form.util.attributes_index,attributes)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18705_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,(2)),p1__18705_SHARP_);
}),errors__$1)));
} else {
return null;
}
}
});
free_form.core.warn_of_leftovers = (function free_form$core$warn_of_leftovers(node){
var attrs_18710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,free_form.util.attributes_index);
if(cljs.core.truth_(((cljs.core.map_QMARK_(attrs_18710))?cljs.core.some((function (p1__18709_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("free-form",cljs.core.namespace(p1__18709_SHARP_));
}),cljs.core.keys(attrs_18710)):false))){
console.error("There are free-form-looking leftovers on",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0)));
} else {
}

return node;
});
free_form.core.form = (function free_form$core$form(var_args){
var G__18718 = arguments.length;
switch (G__18718) {
case 4:
return free_form.core.form.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return free_form.core.form.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(free_form.core.form.cljs$core$IFn$_invoke$arity$4 = (function (values,errors,on_change,html){
return free_form.core.form.cljs$core$IFn$_invoke$arity$5(values,errors,on_change,cljs.core.PersistentVector.EMPTY,html);
}));

(free_form.core.form.cljs$core$IFn$_invoke$arity$5 = (function (values,errors,on_change,extensions,html){
var errors__$1 = (function (){var or__4126__auto__ = errors;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var extensions__$1 = ((cljs.core.sequential_QMARK_(extensions))?extensions:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [extensions], null));
var inner_fn = (function (html__$1){
return clojure.walk.postwalk((function (p1__18713_SHARP_){
return free_form.core.bind_error_messages(errors__$1,p1__18713_SHARP_);
}),clojure.walk.postwalk((function (p1__18712_SHARP_){
return free_form.core.bind_error_class(errors__$1,p1__18712_SHARP_);
}),clojure.walk.postwalk((function (p1__18711_SHARP_){
return free_form.core.bind_input(values,errors__$1,on_change,p1__18711_SHARP_);
}),html__$1)));
});
return clojure.walk.postwalk((function (p1__18714_SHARP_){
return free_form.core.warn_of_leftovers(p1__18714_SHARP_);
}),(function (){var fexpr__18719 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__18716_SHARP_,p2__18715_SHARP_){
return (free_form.extension.extension.cljs$core$IFn$_invoke$arity$2 ? free_form.extension.extension.cljs$core$IFn$_invoke$arity$2(p2__18715_SHARP_,p1__18716_SHARP_) : free_form.extension.extension.call(null,p2__18715_SHARP_,p1__18716_SHARP_));
}),inner_fn,extensions__$1);
return (fexpr__18719.cljs$core$IFn$_invoke$arity$1 ? fexpr__18719.cljs$core$IFn$_invoke$arity$1(html) : fexpr__18719.call(null,html));
})());
}));

(free_form.core.form.cljs$lang$maxFixedArity = 5);

