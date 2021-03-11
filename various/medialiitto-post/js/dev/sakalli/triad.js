// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('sakalli.triad');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sakalli.math');
/**
 * Generate path string for svg
 */
sakalli.triad.tri_path_string = (function sakalli$triad$tri_path_string(coll){
var svg_path = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M"," "," L"," "," L"," "," Z"], null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(svg_path,coll));
});
sakalli.triad.build_triad = (function sakalli$triad$build_triad(p__18219,visible,size,attrs,labels){
var vec__18220 = p__18219;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18220,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18220,(1),null);
var vec__18223 = sakalli.math.tri_path_values(size);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18223,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18223,(1),null);
var ly = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18223,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18223,(3),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18223,(4),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18223,(5),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$triangle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$tri_DASH_labels_DASH_top,cljs.core.cst$kw$triad_DASH_top.cljs$core$IFn$_invoke$arity$1(labels)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg$svg_DASH_style,cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(sakalli.math.tri_element_size(size)),cljs.core.cst$kw$height,cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(sakalli.math.tri_element_size(size))], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,sakalli.triad.tri_path_string(sakalli.math.tri_path_values(size))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$opacity,((visible === true)?(100):(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"point1",cljs.core.cst$kw$cx,x,cljs.core.cst$kw$cy,y,cljs.core.cst$kw$r,(3)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tri_DASH_labels_DASH_bottom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.cst$kw$triad_DASH_left.cljs$core$IFn$_invoke$arity$1(labels)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.cst$kw$triad_DASH_right.cljs$core$IFn$_invoke$arity$1(labels)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null)], null);
});
