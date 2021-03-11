// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('sakalli.math');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Cause i can...
 */
sakalli.math.abs = (function sakalli$math$abs(n){
var x__4214__auto__ = n;
var y__4215__auto__ = (- n);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
});
/**
 * Calculate the triangle height based on the side length
 */
sakalli.math.tri_height = (function sakalli$math$tri_height(size){
var G__18193 = ((size * size) - ((size / (2)) * (size / (2))));
return Math.sqrt(G__18193);
});
/**
 * Generate SVG path coordinates based on triangle size (side lenght)
 */
sakalli.math.tri_path_values = (function sakalli$math$tri_path_values(size){
var tx = ((size / (2)));
var ty = (0);
var lx = (size * (0));
var ly = sakalli.math.tri_height(size);
var rx = (size * (1));
var ry = sakalli.math.tri_height(size);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty,lx,ly,rx,ry,null], null);
});
/**
 * Calculate size for element containing triangle
 */
sakalli.math.tri_element_size = (function sakalli$math$tri_element_size(size){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(Math.round(size) * (1)),cljs.core.cst$kw$height,(function (){var G__18194 = (size * .95);
return Math.ceil(G__18194);
})()], null);
});
/**
 * Calculate line slope and incercept from two points
 *   line: y = mx + b. Needed for distance calculations.
 */
sakalli.math.get_slope_intercept = (function sakalli$math$get_slope_intercept(p__18195){
var vec__18196 = p__18195;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18196,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18196,(1),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18196,(2),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18196,(3),null);
var m = ((y2 - y1) / (x2 - x1));
var b = (y1 - (m * x1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,b], null);
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
sakalli.math.distance = (function sakalli$math$distance(p__18199,m,b,size){
var vec__18200 = p__18199;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18200,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18200,(1),null);
return (((100) * ((sakalli.math.abs((((m * x) + ((-1) * y)) + b)) / (function (){var G__18203 = ((m * m) + (1));
return Math.sqrt(G__18203);
})()) / size)) | (0));
});
/**
 * To quantify the three dimensions / corner
 *   values within the triad.
 */
sakalli.math.get_distances = (function sakalli$math$get_distances(pos,p__18204){
var vec__18205 = p__18204;
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18205,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18205,(1),null);
var lx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18205,(2),null);
var ly = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18205,(3),null);
var rx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18205,(4),null);
var ry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18205,(5),null);
var vec__18208 = pos;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18208,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18208,(1),null);
var vec__18211 = sakalli.math.get_slope_intercept(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty,lx,ly], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18211,(0),null);
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18211,(1),null);
var vec__18214 = sakalli.math.get_slope_intercept(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty,rx,ry], null));
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18214,(0),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18214,(1),null);
var m3 = (0);
var b3 = ly;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sakalli.math.distance(pos,m1,b1,ly) / (1)),(sakalli.math.distance(pos,m2,b2,ly) / (1)),(sakalli.math.distance(pos,m3,b3,ly) / (1))], null);
});
