goog.provide('free_form.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('free_form.extension');
goog.require('free_form.util');
free_form.core.extract_attributes = (function free_form$core$extract_attributes(node,key){
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,free_form.util.attributes_index);
var re_attributes = (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(attributes) : key.call(null,attributes));
var attributes__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attributes,key);
var keys = (function (){var or__3936__auto__ = new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(re_attributes);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(re_attributes)], null);
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [attributes__$1,re_attributes,keys], null);
});
free_form.core.input_QMARK_ = (function free_form$core$input_QMARK_(node){
return ((cljs.core.coll_QMARK_(node)) && (cljs.core.contains_QMARK_(cljs.core.second(node),new cljs.core.Keyword("free-form","input","free-form/input",228451328))));
});
free_form.core.js_event_value = (function free_form$core$js_event_value(event){
var target = event.target;
var G__25778 = target.type;
switch (G__25778) {
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
var args__4521__auto__ = [];
var len__4518__auto___25805 = arguments.length;
var i__4519__auto___25806 = (0);
while(true){
if((i__4519__auto___25806 < len__4518__auto___25805)){
args__4521__auto__.push((arguments[i__4519__auto___25806]));

var G__25810 = (i__4519__auto___25806 + (1));
i__4519__auto___25806 = G__25810;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((0) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((0)),(0),null)):null);
return free_form.core.first_non_nil.cljs$core$IFn$_invoke$arity$variadic(argseq__4522__auto__);
});

free_form.core.first_non_nil.cljs$core$IFn$_invoke$arity$variadic = (function (coll){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),coll));
});

free_form.core.first_non_nil.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
free_form.core.first_non_nil.cljs$lang$applyTo = (function (seq25787){
var self__4506__auto__ = this;
return self__4506__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25787));
});

free_form.core.bind_input = (function free_form$core$bind_input(values,errors,on_change,node){
if(cljs.core.not(free_form.core.input_QMARK_(node))){
return node;
} else {
var vec__25815 = free_form.core.extract_attributes(node,new cljs.core.Keyword("free-form","input","free-form/input",228451328));
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25815,(0),null);
var free_form_attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25815,(1),null);
var keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25815,(2),null);
var map__25818 = free_form_attributes;
var map__25818__$1 = ((((!((map__25818 == null)))?(((((map__25818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25818):map__25818);
var value_on = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25818__$1,new cljs.core.Keyword(null,"value-on","value-on",793040241));
var error_on = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25818__$1,new cljs.core.Keyword(null,"error-on","error-on",-1977855177));
var extra_error_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25818__$1,new cljs.core.Keyword(null,"extra-error-keys","extra-error-keys",1784896497));
var on_change_fn = ((function (vec__25815,attributes,free_form_attributes,keys,map__25818,map__25818__$1,value_on,error_on,extra_error_keys){
return (function (p1__25811_SHARP_){
var G__25829 = keys;
var G__25830 = free_form.core.extract_event_value(p1__25811_SHARP_);
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(G__25829,G__25830) : on_change.call(null,G__25829,G__25830));
});})(vec__25815,attributes,free_form_attributes,keys,map__25818,map__25818__$1,value_on,error_on,extra_error_keys))
;
var value_on__$1 = (function (){var or__3936__auto__ = value_on;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
var G__25831 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(attributes);
var G__25831__$1 = (((G__25831 instanceof cljs.core.Keyword))?G__25831.fqn:null);
switch (G__25831__$1) {
case "checkbox":
case "radio":
return new cljs.core.Keyword(null,"default-checked","default-checked",1039965863);

break;
default:
return new cljs.core.Keyword(null,"value","value",305978217);

}
}
})();
var value = (function (){var G__25833 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(attributes);
var G__25833__$1 = (((G__25833 instanceof cljs.core.Keyword))?G__25833.fqn:null);
switch (G__25833__$1) {
case "checkbox":
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(values,keys));

break;
case "radio":
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(attributes),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(values,keys));

break;
default:
return free_form.core.first_non_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(values,keys),new cljs.core.Keyword(null,"blank-value","blank-value",-1213237793).cljs$core$IFn$_invoke$arity$1(free_form_attributes),""], 0));

}
})();
var input_errors = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(errors,keys);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,free_form.util.attributes_index,(function (){var G__25839 = attributes;
var G__25839__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25839,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change_fn)
;
var G__25839__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25839__$1,value_on__$1,value)
;
var G__25839__$3 = (cljs.core.truth_((function (){var and__3925__auto__ = error_on;
if(cljs.core.truth_(and__3925__auto__)){
return input_errors;
} else {
return and__3925__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25839__$2,error_on,clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",input_errors)):G__25839__$2);
if(cljs.core.truth_((function (){var and__3925__auto__ = extra_error_keys;
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.some(((function (and__3925__auto__,G__25839,G__25839__$1,G__25839__$2,G__25839__$3,vec__25815,attributes,free_form_attributes,keys,map__25818,map__25818__$1,value_on,error_on,extra_error_keys,on_change_fn,value_on__$1,value,input_errors){
return (function (p1__25814_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(errors,p1__25814_SHARP_);
});})(and__3925__auto__,G__25839,G__25839__$1,G__25839__$2,G__25839__$3,vec__25815,attributes,free_form_attributes,keys,map__25818,map__25818__$1,value_on,error_on,extra_error_keys,on_change_fn,value_on__$1,value,input_errors))
,extra_error_keys);
} else {
return and__3925__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25839__$3,error_on," ");
} else {
return G__25839__$3;
}
})());
}
});
/**
 * Tests whether the node should be marked with an error class should the field have an associated error.
 */
free_form.core.error_class_QMARK_ = (function free_form$core$error_class_QMARK_(node){
return ((cljs.core.coll_QMARK_(node)) && (cljs.core.contains_QMARK_(cljs.core.second(node),new cljs.core.Keyword("free-form","error-class","free-form/error-class",159754118))));
});
free_form.core.bind_error_class = (function free_form$core$bind_error_class(errors,node){
if(cljs.core.not(free_form.core.error_class_QMARK_(node))){
return node;
} else {
var vec__25897 = free_form.core.extract_attributes(node,new cljs.core.Keyword("free-form","error-class","free-form/error-class",159754118));
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25897,(0),null);
var re_attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25897,(1),null);
var keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25897,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,free_form.util.attributes_index,((cljs.core.not_any_QMARK_(((function (vec__25897,attributes,re_attributes,keys){
return (function (p1__25891_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(errors,p1__25891_SHARP_);
});})(vec__25897,attributes,re_attributes,keys))
,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"extra-keys","extra-keys",-1845607319).cljs$core$IFn$_invoke$arity$1(re_attributes),keys)))?attributes:cljs.core.update.cljs$core$IFn$_invoke$arity$3(attributes,new cljs.core.Keyword(null,"class","class",-2030961996),((function (vec__25897,attributes,re_attributes,keys){
return (function (p1__25892_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3936__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(re_attributes);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return "error";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25892_SHARP_)].join('');
});})(vec__25897,attributes,re_attributes,keys))
)));
}
});
free_form.core.error_messages_QMARK_ = (function free_form$core$error_messages_QMARK_(node){
return ((cljs.core.coll_QMARK_(node)) && (cljs.core.contains_QMARK_(cljs.core.second(node),new cljs.core.Keyword("free-form","error-message","free-form/error-message",-1957745210))));
});
free_form.core.bind_error_messages = (function free_form$core$bind_error_messages(errors,node){
if(cljs.core.not(free_form.core.error_messages_QMARK_(node))){
return node;
} else {
var vec__25916 = free_form.core.extract_attributes(node,new cljs.core.Keyword("free-form","error-message","free-form/error-message",-1957745210));
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25916,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25916,(1),null);
var keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25916,(2),null);
var temp__5455__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(errors,keys);
if(cljs.core.truth_(temp__5455__auto__)){
var errors__$1 = temp__5455__auto__;
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,free_form.util.attributes_index,attributes)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (errors__$1,temp__5455__auto__,vec__25916,attributes,_,keys){
return (function (p1__25914_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,(2)),p1__25914_SHARP_);
});})(errors__$1,temp__5455__auto__,vec__25916,attributes,_,keys))
,errors__$1)));
} else {
return null;
}
}
});
free_form.core.warn_of_leftovers = (function free_form$core$warn_of_leftovers(node){
var attrs_25924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,free_form.util.attributes_index);
if(cljs.core.truth_((function (){var and__3925__auto__ = cljs.core.map_QMARK_(attrs_25924);
if(and__3925__auto__){
return cljs.core.some(((function (and__3925__auto__,attrs_25924){
return (function (p1__25921_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("free-form",cljs.core.namespace(p1__25921_SHARP_));
});})(and__3925__auto__,attrs_25924))
,cljs.core.keys(attrs_25924));
} else {
return and__3925__auto__;
}
})())){
console.error("There are free-form-looking leftovers on",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0)));
} else {
}

return node;
});
free_form.core.form = (function free_form$core$form(var_args){
var G__25932 = arguments.length;
switch (G__25932) {
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

free_form.core.form.cljs$core$IFn$_invoke$arity$4 = (function (values,errors,on_change,html){
return free_form.core.form.cljs$core$IFn$_invoke$arity$5(values,errors,on_change,cljs.core.PersistentVector.EMPTY,html);
});

free_form.core.form.cljs$core$IFn$_invoke$arity$5 = (function (values,errors,on_change,extensions,html){
var errors__$1 = (function (){var or__3936__auto__ = errors;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var extensions__$1 = ((cljs.core.sequential_QMARK_(extensions))?extensions:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [extensions], null));
var inner_fn = ((function (errors__$1,extensions__$1){
return (function (html__$1){
return clojure.walk.postwalk(((function (errors__$1,extensions__$1){
return (function (p1__25927_SHARP_){
return free_form.core.bind_error_messages(errors__$1,p1__25927_SHARP_);
});})(errors__$1,extensions__$1))
,clojure.walk.postwalk(((function (errors__$1,extensions__$1){
return (function (p1__25926_SHARP_){
return free_form.core.bind_error_class(errors__$1,p1__25926_SHARP_);
});})(errors__$1,extensions__$1))
,clojure.walk.postwalk(((function (errors__$1,extensions__$1){
return (function (p1__25925_SHARP_){
return free_form.core.bind_input(values,errors__$1,on_change,p1__25925_SHARP_);
});})(errors__$1,extensions__$1))
,html__$1)));
});})(errors__$1,extensions__$1))
;
return clojure.walk.postwalk(((function (errors__$1,extensions__$1,inner_fn){
return (function (p1__25928_SHARP_){
return free_form.core.warn_of_leftovers(p1__25928_SHARP_);
});})(errors__$1,extensions__$1,inner_fn))
,(function (){var fexpr__25942 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (errors__$1,extensions__$1,inner_fn){
return (function (p1__25930_SHARP_,p2__25929_SHARP_){
return (free_form.extension.extension.cljs$core$IFn$_invoke$arity$2 ? free_form.extension.extension.cljs$core$IFn$_invoke$arity$2(p2__25929_SHARP_,p1__25930_SHARP_) : free_form.extension.extension.call(null,p2__25929_SHARP_,p1__25930_SHARP_));
});})(errors__$1,extensions__$1,inner_fn))
,inner_fn,extensions__$1);
return (fexpr__25942.cljs$core$IFn$_invoke$arity$1 ? fexpr__25942.cljs$core$IFn$_invoke$arity$1(html) : fexpr__25942.call(null,html));
})());
});

free_form.core.form.cljs$lang$maxFixedArity = 5;


//# sourceMappingURL=free_form.core.js.map
