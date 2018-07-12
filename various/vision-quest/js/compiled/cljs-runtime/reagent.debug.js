goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__34653__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__34653 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34654__i = 0, G__34654__a = new Array(arguments.length -  0);
while (G__34654__i < G__34654__a.length) {G__34654__a[G__34654__i] = arguments[G__34654__i + 0]; ++G__34654__i;}
  args = new cljs.core.IndexedSeq(G__34654__a,0,null);
} 
return G__34653__delegate.call(this,args);};
G__34653.cljs$lang$maxFixedArity = 0;
G__34653.cljs$lang$applyTo = (function (arglist__34655){
var args = cljs.core.seq(arglist__34655);
return G__34653__delegate(args);
});
G__34653.cljs$core$IFn$_invoke$arity$variadic = G__34653__delegate;
return G__34653;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__34656__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__34656 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34658__i = 0, G__34658__a = new Array(arguments.length -  0);
while (G__34658__i < G__34658__a.length) {G__34658__a[G__34658__i] = arguments[G__34658__i + 0]; ++G__34658__i;}
  args = new cljs.core.IndexedSeq(G__34658__a,0,null);
} 
return G__34656__delegate.call(this,args);};
G__34656.cljs$lang$maxFixedArity = 0;
G__34656.cljs$lang$applyTo = (function (arglist__34661){
var args = cljs.core.seq(arglist__34661);
return G__34656__delegate(args);
});
G__34656.cljs$core$IFn$_invoke$arity$variadic = G__34656__delegate;
return G__34656;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
