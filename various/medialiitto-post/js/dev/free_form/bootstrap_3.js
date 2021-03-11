// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('free_form.bootstrap_3');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('free_form.util');
goog.require('free_form.extension');
free_form.bootstrap_3.expand_bootstrap_3_input = (function free_form$bootstrap_3$expand_bootstrap_3_input(id,keys,type,placeholder,options){
var G__18752 = type;
var G__18752__$1 = (((G__18752 instanceof cljs.core.Keyword))?G__18752.fqn:null);
switch (G__18752__$1) {
case "select":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select$form_DASH_control,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$free_DASH_form_SLASH_input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,keys], null),cljs.core.cst$kw$type,type,cljs.core.cst$kw$id,id,cljs.core.cst$kw$placeholder,placeholder], null),(function (){var generate_option = (function free_form$bootstrap_3$expand_bootstrap_3_input_$_generate_option(p__18757){
var vec__18758 = p__18757;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18758,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18758,(1),null);
if(cljs.core.sequential_QMARK_(name)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,value], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(free_form$bootstrap_3$expand_bootstrap_3_input_$_generate_option,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),name))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,value], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,value], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,value], null));
}
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(generate_option,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),options));
})()], null);

break;
case "textarea":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$free_DASH_form_SLASH_input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,keys], null),cljs.core.cst$kw$type,type,cljs.core.cst$kw$id,id], null)], null);

break;
case "checkbox":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$free_DASH_form_SLASH_input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,keys], null),cljs.core.cst$kw$type,type,cljs.core.cst$kw$id,id], null)], null);

break;
case "radio":
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18761){
var vec__18762 = p__18761;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18762,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18762,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$free_DASH_form_SLASH_input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,keys], null),cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,id,cljs.core.cst$kw$value,value], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name], null));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),options));

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$free_DASH_form_SLASH_input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,keys], null),cljs.core.cst$kw$type,type,cljs.core.cst$kw$id,id,cljs.core.cst$kw$placeholder,placeholder], null)], null);

}
});
free_form.bootstrap_3.expand_bootstrap_3_fields = (function free_form$bootstrap_3$expand_bootstrap_3_fields(node){
if(free_form.util.field_QMARK_(node)){
var map__18766 = free_form.util.key__GT_keys(cljs.core.second(node));
var map__18766__$1 = (((((!((map__18766 == null))))?(((((map__18766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18766):map__18766);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18766__$1,cljs.core.cst$kw$type);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18766__$1,cljs.core.cst$kw$keys);
var extra_validation_error_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18766__$1,cljs.core.cst$kw$extra_DASH_validation_DASH_error_DASH_keys);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18766__$1,cljs.core.cst$kw$label);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18766__$1,cljs.core.cst$kw$placeholder);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18766__$1,cljs.core.cst$kw$options);
var id = clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,keys));
var G__18768 = type;
var G__18768__$1 = (((G__18768 instanceof cljs.core.Keyword))?G__18768.fqn:null);
switch (G__18768__$1) {
case "checkbox":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$checkbox,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$free_DASH_form_SLASH_error_DASH_class,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$keys,keys,cljs.core.cst$kw$extra_DASH_keys,extra_validation_error_keys,cljs.core.cst$kw$error,"has-error"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,free_form.bootstrap_3.expand_bootstrap_3_input(id,keys,type,placeholder,options),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$text_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$free_DASH_form_SLASH_error_DASH_message,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,keys], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null)], null)], null);

break;
case "radio":
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$free_DASH_form_SLASH_error_DASH_class,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$keys,keys,cljs.core.cst$kw$extra_DASH_keys,extra_validation_error_keys,cljs.core.cst$kw$error,"has-error"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,label], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (input){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$radio,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,input,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(input))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[id,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$value], null)))].join('')], null));
}),free_form.bootstrap_3.expand_bootstrap_3_input(id,keys,type,placeholder,options)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$text_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$free_DASH_form_SLASH_error_DASH_message,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,keys], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null)], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$free_DASH_form_SLASH_error_DASH_class,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$keys,keys,cljs.core.cst$kw$extra_DASH_keys,extra_validation_error_keys,cljs.core.cst$kw$error,"has-error"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$control_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,id], null),label], null),free_form.bootstrap_3.expand_bootstrap_3_input(id,keys,type,placeholder,options),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$text_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$free_DASH_form_SLASH_error_DASH_message,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,keys], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null)], null)], null);

}
} else {
return node;
}
});
free_form.bootstrap_3.expand_bootstrap_3_horizontal_fields = (function free_form$bootstrap_3$expand_bootstrap_3_horizontal_fields(node){
if(free_form.util.field_QMARK_(node)){
var map__18770 = free_form.util.key__GT_keys(cljs.core.second(node));
var map__18770__$1 = (((((!((map__18770 == null))))?(((((map__18770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18770):map__18770);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18770__$1,cljs.core.cst$kw$type);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18770__$1,cljs.core.cst$kw$keys);
var extra_validation_error_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18770__$1,cljs.core.cst$kw$extra_DASH_validation_DASH_error_DASH_keys);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18770__$1,cljs.core.cst$kw$label);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18770__$1,cljs.core.cst$kw$placeholder);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18770__$1,cljs.core.cst$kw$options);
var id = clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,keys));
var G__18772 = type;
var G__18772__$1 = (((G__18772 instanceof cljs.core.Keyword))?G__18772.fqn:null);
switch (G__18772__$1) {
case "checkbox":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$free_DASH_form_SLASH_error_DASH_class,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$keys,keys,cljs.core.cst$kw$extra_DASH_keys,extra_validation_error_keys,cljs.core.cst$kw$error,"has-error"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_offset_DASH_2$col_DASH_sm_DASH_10,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$checkbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,free_form.bootstrap_3.expand_bootstrap_3_input(id,keys,type,placeholder,options),label], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$text_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$free_DASH_form_SLASH_error_DASH_message,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,keys], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null)], null)], null)], null);

break;
case "radio":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$free_DASH_form_SLASH_error_DASH_class,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$keys,keys,cljs.core.cst$kw$extra_DASH_keys,extra_validation_error_keys,cljs.core.cst$kw$error,"has-error"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$col_DASH_sm_DASH_2$control_DASH_label,label], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_10], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (input){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$radio,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,input,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(input))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[id,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$value], null)))].join('')], null));
}),free_form.bootstrap_3.expand_bootstrap_3_input(id,keys,type,placeholder,options))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$text_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$free_DASH_form_SLASH_error_DASH_message,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,keys], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null)], null))], null);

break;
default:
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$free_DASH_form_SLASH_error_DASH_class,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$keys,keys,cljs.core.cst$kw$extra_DASH_keys,extra_validation_error_keys,cljs.core.cst$kw$error,"has-error"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$col_DASH_sm_DASH_2$control_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,id], null),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_10,free_form.bootstrap_3.expand_bootstrap_3_input(id,keys,type,placeholder,options),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$text_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$free_DASH_form_SLASH_error_DASH_message,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,keys], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null)], null)], null)], null);

}
} else {
return node;
}
});
free_form.bootstrap_3.expand_bootstrap_3_inline_fields = (function free_form$bootstrap_3$expand_bootstrap_3_inline_fields(node){
if(free_form.util.field_QMARK_(node)){
var map__18774 = free_form.util.key__GT_keys(cljs.core.second(node));
var map__18774__$1 = (((((!((map__18774 == null))))?(((((map__18774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18774):map__18774);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18774__$1,cljs.core.cst$kw$type);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18774__$1,cljs.core.cst$kw$keys);
var extra_validation_error_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18774__$1,cljs.core.cst$kw$extra_DASH_validation_DASH_error_DASH_keys);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18774__$1,cljs.core.cst$kw$label);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18774__$1,cljs.core.cst$kw$placeholder);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18774__$1,cljs.core.cst$kw$options);
var id = clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,keys));
var G__18776 = type;
var G__18776__$1 = (((G__18776 instanceof cljs.core.Keyword))?G__18776.fqn:null);
switch (G__18776__$1) {
case "checkbox":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$checkbox_DASH_inline,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$free_DASH_form_SLASH_error_DASH_class,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$keys,keys,cljs.core.cst$kw$extra_DASH_keys,extra_validation_error_keys,cljs.core.cst$kw$error,"has-error"], null)], null),free_form.bootstrap_3.expand_bootstrap_3_input(id,keys,type,placeholder,options),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$text_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$free_DASH_form_SLASH_error_DASH_message,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,keys], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null)], null)], null);

break;
case "radio":
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$free_DASH_form_SLASH_error_DASH_class,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$keys,keys,cljs.core.cst$kw$extra_DASH_keys,extra_validation_error_keys,cljs.core.cst$kw$error,"has-error"], null)], null),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,label], null):null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (input){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$radio_DASH_inline,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,input,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(input))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[id,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$value], null)))].join('')], null));
}),free_form.bootstrap_3.expand_bootstrap_3_input(id,keys,type,placeholder,options)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$text_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$free_DASH_form_SLASH_error_DASH_message,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,keys], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null)], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$free_DASH_form_SLASH_error_DASH_class,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$keys,keys,cljs.core.cst$kw$extra_DASH_keys,extra_validation_error_keys,cljs.core.cst$kw$error,"has-error"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$control_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,id], null),label], null)," ",free_form.bootstrap_3.expand_bootstrap_3_input(id,keys,type,placeholder,options)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$text_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$free_DASH_form_SLASH_error_DASH_message,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,keys], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null)], null)], null);

}
} else {
return node;
}
});
free_form.bootstrap_3.bootstrap_3_form_horizontal_QMARK_ = (function free_form$bootstrap_3$bootstrap_3_form_horizontal_QMARK_(node){
return ((cljs.core.coll_QMARK_(node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$form$form_DASH_horizontal,cljs.core.first(node))));
});
free_form.bootstrap_3.bootstrap_3_form_inline_QMARK_ = (function free_form$bootstrap_3$bootstrap_3_form_inline_QMARK_(node){
return ((cljs.core.coll_QMARK_(node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$form$form_DASH_inline,cljs.core.first(node))));
});
free_form.bootstrap_3.expand_bootstrap_3_form = (function free_form$bootstrap_3$expand_bootstrap_3_form(node){
if(free_form.bootstrap_3.bootstrap_3_form_horizontal_QMARK_(node)){
return clojure.walk.postwalk(free_form.bootstrap_3.expand_bootstrap_3_horizontal_fields,node);
} else {
if(free_form.bootstrap_3.bootstrap_3_form_inline_QMARK_(node)){
return clojure.walk.postwalk(free_form.bootstrap_3.expand_bootstrap_3_inline_fields,node);
} else {
return clojure.walk.postwalk(free_form.bootstrap_3.expand_bootstrap_3_fields,node);

}
}
});
free_form.extension.extension.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$bootstrap_DASH_3,(function (_extension_name,inner_fn){
return (function (html){
var G__18778 = clojure.walk.prewalk(free_form.bootstrap_3.expand_bootstrap_3_form,html);
return (inner_fn.cljs$core$IFn$_invoke$arity$1 ? inner_fn.cljs$core$IFn$_invoke$arity$1(G__18778) : inner_fn.call(null,G__18778));
});
}));
