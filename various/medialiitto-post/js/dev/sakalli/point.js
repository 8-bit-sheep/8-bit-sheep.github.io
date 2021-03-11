// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('sakalli.point');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sakalli.math');
/**
 * Mouse position in element to calculate triad point entry
 */
sakalli.point.position = (function sakalli$point$position(e){
var rect = e.target.getBoundingClientRect();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(e.clientX - rect.left),(e.clientY - rect.top)], null);
});
/**
 * Moves the point inside triad when user clicks outside
 */
sakalli.point.move_inside = (function sakalli$point$move_inside(p__18616,p__18617){
var vec__18618 = p__18616;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18618,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18618,(1),null);
var vec__18621 = p__18617;
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18621,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18621,(1),null);
var lx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18621,(2),null);
var ly = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18621,(3),null);
var rx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18621,(4),null);
var ry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18621,(5),null);
var vec__18624 = sakalli.math.get_slope_intercept(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty,lx,ly], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18624,(0),null);
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18624,(1),null);
var vec__18627 = sakalli.math.get_slope_intercept(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty,rx,ry], null));
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18627,(0),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18627,(1),null);
var boundry_x1 = ((y - b1) / m1);
var boundry_x2 = ((y - b2) / m2);
var new_x = (((x < boundry_x1))?boundry_x1:(((x > boundry_x2))?boundry_x2:x
));
var new_y = (((y < ty))?ty:(((y > ry))?ry:y
));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new_x | (0)),(new_y | (0))], null);
});
/**
 * Helper function to update triad values
 */
sakalli.point.update_point = (function sakalli$point$update_point(data,e,size,pos,triad_values,triad){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,pos,sakalli.point.move_inside(sakalli.point.position(e),sakalli.math.tri_path_values(size)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([triad_values,sakalli.math.get_distances(sakalli.point.move_inside(sakalli.point.position(e),sakalli.math.tri_path_values(size)),sakalli.math.tri_path_values(size)),triad,true], 0));
});
