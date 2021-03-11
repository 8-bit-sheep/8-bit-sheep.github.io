// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('sakalli.triads_front');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.dom');
goog.require('sakalli.page');
cljs.core.enable_console_print_BANG_();
sakalli.triads_front.mount = (function sakalli$triads_front$mount(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sakalli.page.page], null),document.getElementById("root"));
});
sakalli.triads_front.re_render = (function sakalli$triads_front$re_render(){
return sakalli.triads_front.mount();
});
if((typeof sakalli !== 'undefined') && (typeof sakalli.triads_front !== 'undefined') && (typeof sakalli.triads_front.start_up !== 'undefined')){
} else {
sakalli.triads_front.start_up = (function (){
sakalli.triads_front.mount();

return true;
})()
;
}
