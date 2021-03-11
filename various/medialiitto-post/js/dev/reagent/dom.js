// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__18853 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__18854 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__18854);

try{var G__18855 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__18856 = container;
var G__18857 = (function (){
var _STAR_always_update_STAR__orig_val__18858 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__18859 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__18859);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__18858);
}});
return reagent.dom.global$module$react_dom.render(G__18855,G__18856,G__18857);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__18853);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__18861 = arguments.length;
switch (G__18861) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__18862 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18862,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18862,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__18866_18882 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__18867_18883 = null;
var count__18868_18884 = (0);
var i__18869_18885 = (0);
while(true){
if((i__18869_18885 < count__18868_18884)){
var vec__18876_18886 = chunk__18867_18883.cljs$core$IIndexed$_nth$arity$2(null,i__18869_18885);
var container_18887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18876_18886,(0),null);
var comp_18888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18876_18886,(1),null);
reagent.dom.re_render_component(comp_18888,container_18887);


var G__18889 = seq__18866_18882;
var G__18890 = chunk__18867_18883;
var G__18891 = count__18868_18884;
var G__18892 = (i__18869_18885 + (1));
seq__18866_18882 = G__18889;
chunk__18867_18883 = G__18890;
count__18868_18884 = G__18891;
i__18869_18885 = G__18892;
continue;
} else {
var temp__5735__auto___18893 = cljs.core.seq(seq__18866_18882);
if(temp__5735__auto___18893){
var seq__18866_18894__$1 = temp__5735__auto___18893;
if(cljs.core.chunked_seq_QMARK_(seq__18866_18894__$1)){
var c__4556__auto___18895 = cljs.core.chunk_first(seq__18866_18894__$1);
var G__18896 = cljs.core.chunk_rest(seq__18866_18894__$1);
var G__18897 = c__4556__auto___18895;
var G__18898 = cljs.core.count(c__4556__auto___18895);
var G__18899 = (0);
seq__18866_18882 = G__18896;
chunk__18867_18883 = G__18897;
count__18868_18884 = G__18898;
i__18869_18885 = G__18899;
continue;
} else {
var vec__18879_18900 = cljs.core.first(seq__18866_18894__$1);
var container_18901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18879_18900,(0),null);
var comp_18902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18879_18900,(1),null);
reagent.dom.re_render_component(comp_18902,container_18901);


var G__18903 = cljs.core.next(seq__18866_18894__$1);
var G__18904 = null;
var G__18905 = (0);
var G__18906 = (0);
seq__18866_18882 = G__18903;
chunk__18867_18883 = G__18904;
count__18868_18884 = G__18905;
i__18869_18885 = G__18906;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
