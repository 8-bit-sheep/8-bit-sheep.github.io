// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__9490__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__9490 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9491__i = 0, G__9491__a = new Array(arguments.length -  0);
while (G__9491__i < G__9491__a.length) {G__9491__a[G__9491__i] = arguments[G__9491__i + 0]; ++G__9491__i;}
  args = new cljs.core.IndexedSeq(G__9491__a,0,null);
} 
return G__9490__delegate.call(this,args);};
G__9490.cljs$lang$maxFixedArity = 0;
G__9490.cljs$lang$applyTo = (function (arglist__9492){
var args = cljs.core.seq(arglist__9492);
return G__9490__delegate(args);
});
G__9490.cljs$core$IFn$_invoke$arity$variadic = G__9490__delegate;
return G__9490;
})()
);

(o.error = (function() { 
var G__9493__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__9493 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9494__i = 0, G__9494__a = new Array(arguments.length -  0);
while (G__9494__i < G__9494__a.length) {G__9494__a[G__9494__i] = arguments[G__9494__i + 0]; ++G__9494__i;}
  args = new cljs.core.IndexedSeq(G__9494__a,0,null);
} 
return G__9493__delegate.call(this,args);};
G__9493.cljs$lang$maxFixedArity = 0;
G__9493.cljs$lang$applyTo = (function (arglist__9495){
var args = cljs.core.seq(arglist__9495);
return G__9493__delegate(args);
});
G__9493.cljs$core$IFn$_invoke$arity$variadic = G__9493__delegate;
return G__9493;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
