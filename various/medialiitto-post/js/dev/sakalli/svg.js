// Compiled by ClojureScript 1.10.764 {}
goog.provide('sakalli.svg');
goog.require('cljs.core');
/**
 * Generate path string for svg
 */
sakalli.svg.tri_path_string = (function sakalli$svg$tri_path_string(coll){
var svg_path = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M"," "," L"," "," L"," "," Z"], null);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interleave.call(null,svg_path,coll));
});

//# sourceMappingURL=svg.js.map
