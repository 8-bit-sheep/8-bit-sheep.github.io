// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('free_form.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
free_form.util.field_QMARK_ = (function free_form$util$field_QMARK_(node){
return ((cljs.core.coll_QMARK_(node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$free_DASH_form_SLASH_field,cljs.core.first(node))));
});
free_form.util.key__GT_keys = (function free_form$util$key__GT_keys(m){
if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$key)){
if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$keys)){
throw (new Error("key->keys expects a map with :key or :keys, not both"));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(m)], null));
}
} else {
return m;
}
});
/**
 * The second element in structure that represents an input is the attributes, as in :type, :key, etc.
 */
free_form.util.attributes_index = (1);
