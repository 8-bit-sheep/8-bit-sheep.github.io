goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$IElement$_to_dom$arity$1 == null))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4230__auto__ = (((this$ == null))?null:this$);
var m__4231__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4231__auto__.call(null,this$));
} else {
var m__4231__auto____$1 = (shadow.dom._to_dom["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4231__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4230__auto__ = (((this$ == null))?null:this$);
var m__4231__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4231__auto__.call(null,this$));
} else {
var m__4231__auto____$1 = (shadow.dom._to_svg["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4231__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34760 = coll;
var G__34761 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34760,G__34761) : shadow.dom.lazy_native_coll_seq.call(null,G__34760,G__34761));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__3936__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)].join(''));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34787 = arguments.length;
switch (G__34787) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34790 = arguments.length;
switch (G__34790) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34796 = arguments.length;
switch (G__34796) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34803 = arguments.length;
switch (G__34803) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34807 = arguments.length;
switch (G__34807) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__34808 = document;
var G__34809 = shadow.dom.dom_node(el);
return goog.dom.contains(G__34808,G__34809);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__34810 = shadow.dom.dom_node(parent);
var G__34811 = shadow.dom.dom_node(el);
return goog.dom.contains(G__34810,G__34811);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__34813 = shadow.dom.dom_node(el);
var G__34814 = cls;
return goog.dom.classlist.add(G__34813,G__34814);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__34815 = shadow.dom.dom_node(el);
var G__34816 = cls;
return goog.dom.classlist.remove(G__34815,G__34816);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34818 = arguments.length;
switch (G__34818) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__34819 = shadow.dom.dom_node(el);
var G__34820 = cls;
return goog.dom.classlist.toggle(G__34819,G__34820);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__3936__auto__ = !((typeof document !== 'undefined'));
if(or__3936__auto__){
return or__3936__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34822){if((e34822 instanceof Object)){
var e = e34822;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34822;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__3936__auto__ = !((typeof document !== 'undefined'));
if(or__3936__auto__){
return or__3936__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34823 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34824 = null;
var count__34825 = (0);
var i__34826 = (0);
while(true){
if((i__34826 < count__34825)){
var el = chunk__34824.cljs$core$IIndexed$_nth$arity$2(null,i__34826);
var handler_34833__$1 = ((function (seq__34823,chunk__34824,count__34825,i__34826,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34823,chunk__34824,count__34825,i__34826,el))
;
var G__34827_34834 = el;
var G__34828_34835 = cljs.core.name(ev);
var G__34829_34836 = handler_34833__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__34827_34834,G__34828_34835,G__34829_34836) : shadow.dom.dom_listen.call(null,G__34827_34834,G__34828_34835,G__34829_34836));


var G__34837 = seq__34823;
var G__34838 = chunk__34824;
var G__34839 = count__34825;
var G__34840 = (i__34826 + (1));
seq__34823 = G__34837;
chunk__34824 = G__34838;
count__34825 = G__34839;
i__34826 = G__34840;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__34823);
if(temp__5457__auto__){
var seq__34823__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34823__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__34823__$1);
var G__34841 = cljs.core.chunk_rest(seq__34823__$1);
var G__34842 = c__4338__auto__;
var G__34843 = cljs.core.count(c__4338__auto__);
var G__34844 = (0);
seq__34823 = G__34841;
chunk__34824 = G__34842;
count__34825 = G__34843;
i__34826 = G__34844;
continue;
} else {
var el = cljs.core.first(seq__34823__$1);
var handler_34845__$1 = ((function (seq__34823,chunk__34824,count__34825,i__34826,el,seq__34823__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34823,chunk__34824,count__34825,i__34826,el,seq__34823__$1,temp__5457__auto__))
;
var G__34830_34846 = el;
var G__34831_34847 = cljs.core.name(ev);
var G__34832_34848 = handler_34845__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__34830_34846,G__34831_34847,G__34832_34848) : shadow.dom.dom_listen.call(null,G__34830_34846,G__34831_34847,G__34832_34848));


var G__34849 = cljs.core.next(seq__34823__$1);
var G__34850 = null;
var G__34851 = (0);
var G__34852 = (0);
seq__34823 = G__34849;
chunk__34824 = G__34850;
count__34825 = G__34851;
i__34826 = G__34852;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34854 = arguments.length;
switch (G__34854) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__34855 = shadow.dom.dom_node(el);
var G__34856 = cljs.core.name(ev);
var G__34857 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__34855,G__34856,G__34857) : shadow.dom.dom_listen.call(null,G__34855,G__34856,G__34857));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__34859 = shadow.dom.dom_node(el);
var G__34860 = cljs.core.name(ev);
var G__34861 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__34859,G__34860,G__34861) : shadow.dom.dom_listen_remove.call(null,G__34859,G__34860,G__34861));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34863 = cljs.core.seq(events);
var chunk__34864 = null;
var count__34865 = (0);
var i__34866 = (0);
while(true){
if((i__34866 < count__34865)){
var vec__34867 = chunk__34864.cljs$core$IIndexed$_nth$arity$2(null,i__34866);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34867,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34867,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34873 = seq__34863;
var G__34874 = chunk__34864;
var G__34875 = count__34865;
var G__34876 = (i__34866 + (1));
seq__34863 = G__34873;
chunk__34864 = G__34874;
count__34865 = G__34875;
i__34866 = G__34876;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__34863);
if(temp__5457__auto__){
var seq__34863__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34863__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__34863__$1);
var G__34877 = cljs.core.chunk_rest(seq__34863__$1);
var G__34878 = c__4338__auto__;
var G__34879 = cljs.core.count(c__4338__auto__);
var G__34880 = (0);
seq__34863 = G__34877;
chunk__34864 = G__34878;
count__34865 = G__34879;
i__34866 = G__34880;
continue;
} else {
var vec__34870 = cljs.core.first(seq__34863__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34870,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34870,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34881 = cljs.core.next(seq__34863__$1);
var G__34882 = null;
var G__34883 = (0);
var G__34884 = (0);
seq__34863 = G__34881;
chunk__34864 = G__34882;
count__34865 = G__34883;
i__34866 = G__34884;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34885 = cljs.core.seq(styles);
var chunk__34886 = null;
var count__34887 = (0);
var i__34888 = (0);
while(true){
if((i__34888 < count__34887)){
var vec__34889 = chunk__34886.cljs$core$IIndexed$_nth$arity$2(null,i__34888);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34889,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34889,(1),null);
var G__34892_34901 = dom;
var G__34893_34902 = cljs.core.name(k);
var G__34894_34903 = (((v == null))?"":v);
goog.style.setStyle(G__34892_34901,G__34893_34902,G__34894_34903);


var G__34904 = seq__34885;
var G__34905 = chunk__34886;
var G__34906 = count__34887;
var G__34907 = (i__34888 + (1));
seq__34885 = G__34904;
chunk__34886 = G__34905;
count__34887 = G__34906;
i__34888 = G__34907;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__34885);
if(temp__5457__auto__){
var seq__34885__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34885__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__34885__$1);
var G__34908 = cljs.core.chunk_rest(seq__34885__$1);
var G__34909 = c__4338__auto__;
var G__34910 = cljs.core.count(c__4338__auto__);
var G__34911 = (0);
seq__34885 = G__34908;
chunk__34886 = G__34909;
count__34887 = G__34910;
i__34888 = G__34911;
continue;
} else {
var vec__34895 = cljs.core.first(seq__34885__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34895,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34895,(1),null);
var G__34898_34912 = dom;
var G__34899_34913 = cljs.core.name(k);
var G__34900_34914 = (((v == null))?"":v);
goog.style.setStyle(G__34898_34912,G__34899_34913,G__34900_34914);


var G__34915 = cljs.core.next(seq__34885__$1);
var G__34916 = null;
var G__34917 = (0);
var G__34918 = (0);
seq__34885 = G__34915;
chunk__34886 = G__34916;
count__34887 = G__34917;
i__34888 = G__34918;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34919_34920 = key;
var G__34919_34921__$1 = (((G__34919_34920 instanceof cljs.core.Keyword))?G__34919_34920.fqn:null);
switch (G__34919_34921__$1) {
case "id":
el.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "class":
el.className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34923 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__3936__auto__ = goog.string.startsWith(ks_34923,"data-");
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return goog.string.startsWith(ks_34923,"aria-");
}
})())){
el.setAttribute(ks_34923,value);
} else {
(el[ks_34923] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__34924 = shadow.dom.dom_node(el);
var G__34925 = cls;
return goog.dom.classlist.contains(G__34924,G__34925);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34926){
var map__34927 = p__34926;
var map__34927__$1 = ((((!((map__34927 == null)))?(((((map__34927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34927):map__34927);
var props = map__34927__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34927__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34929 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34929,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34929,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34929,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34932 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34932,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34932;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34934 = arguments.length;
switch (G__34934) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34936){
var vec__34937 = p__34936;
var seq__34938 = cljs.core.seq(vec__34937);
var first__34939 = cljs.core.first(seq__34938);
var seq__34938__$1 = cljs.core.next(seq__34938);
var nn = first__34939;
var first__34939__$1 = cljs.core.first(seq__34938__$1);
var seq__34938__$2 = cljs.core.next(seq__34938__$1);
var np = first__34939__$1;
var nc = seq__34938__$2;
var node = vec__34937;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34940 = nn;
var G__34941 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34940,G__34941) : create_fn.call(null,G__34940,G__34941));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34942 = nn;
var G__34943 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34942,G__34943) : create_fn.call(null,G__34942,G__34943));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34944 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34944,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34944,(1),null);
var seq__34947_34963 = cljs.core.seq(node_children);
var chunk__34948_34964 = null;
var count__34949_34965 = (0);
var i__34950_34966 = (0);
while(true){
if((i__34950_34966 < count__34949_34965)){
var child_struct_34967 = chunk__34948_34964.cljs$core$IIndexed$_nth$arity$2(null,i__34950_34966);
var children_34968 = shadow.dom.dom_node(child_struct_34967);
if(cljs.core.seq_QMARK_(children_34968)){
var seq__34951_34969 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34968));
var chunk__34953_34970 = null;
var count__34954_34971 = (0);
var i__34955_34972 = (0);
while(true){
if((i__34955_34972 < count__34954_34971)){
var child_34973 = chunk__34953_34970.cljs$core$IIndexed$_nth$arity$2(null,i__34955_34972);
if(cljs.core.truth_(child_34973)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34973);


var G__34974 = seq__34951_34969;
var G__34975 = chunk__34953_34970;
var G__34976 = count__34954_34971;
var G__34977 = (i__34955_34972 + (1));
seq__34951_34969 = G__34974;
chunk__34953_34970 = G__34975;
count__34954_34971 = G__34976;
i__34955_34972 = G__34977;
continue;
} else {
var G__34978 = seq__34951_34969;
var G__34979 = chunk__34953_34970;
var G__34980 = count__34954_34971;
var G__34981 = (i__34955_34972 + (1));
seq__34951_34969 = G__34978;
chunk__34953_34970 = G__34979;
count__34954_34971 = G__34980;
i__34955_34972 = G__34981;
continue;
}
} else {
var temp__5457__auto___34982 = cljs.core.seq(seq__34951_34969);
if(temp__5457__auto___34982){
var seq__34951_34983__$1 = temp__5457__auto___34982;
if(cljs.core.chunked_seq_QMARK_(seq__34951_34983__$1)){
var c__4338__auto___34984 = cljs.core.chunk_first(seq__34951_34983__$1);
var G__34985 = cljs.core.chunk_rest(seq__34951_34983__$1);
var G__34986 = c__4338__auto___34984;
var G__34987 = cljs.core.count(c__4338__auto___34984);
var G__34988 = (0);
seq__34951_34969 = G__34985;
chunk__34953_34970 = G__34986;
count__34954_34971 = G__34987;
i__34955_34972 = G__34988;
continue;
} else {
var child_34989 = cljs.core.first(seq__34951_34983__$1);
if(cljs.core.truth_(child_34989)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34989);


var G__34990 = cljs.core.next(seq__34951_34983__$1);
var G__34991 = null;
var G__34992 = (0);
var G__34993 = (0);
seq__34951_34969 = G__34990;
chunk__34953_34970 = G__34991;
count__34954_34971 = G__34992;
i__34955_34972 = G__34993;
continue;
} else {
var G__34994 = cljs.core.next(seq__34951_34983__$1);
var G__34995 = null;
var G__34996 = (0);
var G__34997 = (0);
seq__34951_34969 = G__34994;
chunk__34953_34970 = G__34995;
count__34954_34971 = G__34996;
i__34955_34972 = G__34997;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34968);
}


var G__34998 = seq__34947_34963;
var G__34999 = chunk__34948_34964;
var G__35000 = count__34949_34965;
var G__35001 = (i__34950_34966 + (1));
seq__34947_34963 = G__34998;
chunk__34948_34964 = G__34999;
count__34949_34965 = G__35000;
i__34950_34966 = G__35001;
continue;
} else {
var temp__5457__auto___35002 = cljs.core.seq(seq__34947_34963);
if(temp__5457__auto___35002){
var seq__34947_35003__$1 = temp__5457__auto___35002;
if(cljs.core.chunked_seq_QMARK_(seq__34947_35003__$1)){
var c__4338__auto___35004 = cljs.core.chunk_first(seq__34947_35003__$1);
var G__35005 = cljs.core.chunk_rest(seq__34947_35003__$1);
var G__35006 = c__4338__auto___35004;
var G__35007 = cljs.core.count(c__4338__auto___35004);
var G__35008 = (0);
seq__34947_34963 = G__35005;
chunk__34948_34964 = G__35006;
count__34949_34965 = G__35007;
i__34950_34966 = G__35008;
continue;
} else {
var child_struct_35009 = cljs.core.first(seq__34947_35003__$1);
var children_35010 = shadow.dom.dom_node(child_struct_35009);
if(cljs.core.seq_QMARK_(children_35010)){
var seq__34957_35011 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35010));
var chunk__34959_35012 = null;
var count__34960_35013 = (0);
var i__34961_35014 = (0);
while(true){
if((i__34961_35014 < count__34960_35013)){
var child_35015 = chunk__34959_35012.cljs$core$IIndexed$_nth$arity$2(null,i__34961_35014);
if(cljs.core.truth_(child_35015)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35015);


var G__35016 = seq__34957_35011;
var G__35017 = chunk__34959_35012;
var G__35018 = count__34960_35013;
var G__35019 = (i__34961_35014 + (1));
seq__34957_35011 = G__35016;
chunk__34959_35012 = G__35017;
count__34960_35013 = G__35018;
i__34961_35014 = G__35019;
continue;
} else {
var G__35020 = seq__34957_35011;
var G__35021 = chunk__34959_35012;
var G__35022 = count__34960_35013;
var G__35023 = (i__34961_35014 + (1));
seq__34957_35011 = G__35020;
chunk__34959_35012 = G__35021;
count__34960_35013 = G__35022;
i__34961_35014 = G__35023;
continue;
}
} else {
var temp__5457__auto___35024__$1 = cljs.core.seq(seq__34957_35011);
if(temp__5457__auto___35024__$1){
var seq__34957_35025__$1 = temp__5457__auto___35024__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34957_35025__$1)){
var c__4338__auto___35026 = cljs.core.chunk_first(seq__34957_35025__$1);
var G__35027 = cljs.core.chunk_rest(seq__34957_35025__$1);
var G__35028 = c__4338__auto___35026;
var G__35029 = cljs.core.count(c__4338__auto___35026);
var G__35030 = (0);
seq__34957_35011 = G__35027;
chunk__34959_35012 = G__35028;
count__34960_35013 = G__35029;
i__34961_35014 = G__35030;
continue;
} else {
var child_35031 = cljs.core.first(seq__34957_35025__$1);
if(cljs.core.truth_(child_35031)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35031);


var G__35032 = cljs.core.next(seq__34957_35025__$1);
var G__35033 = null;
var G__35034 = (0);
var G__35035 = (0);
seq__34957_35011 = G__35032;
chunk__34959_35012 = G__35033;
count__34960_35013 = G__35034;
i__34961_35014 = G__35035;
continue;
} else {
var G__35036 = cljs.core.next(seq__34957_35025__$1);
var G__35037 = null;
var G__35038 = (0);
var G__35039 = (0);
seq__34957_35011 = G__35036;
chunk__34959_35012 = G__35037;
count__34960_35013 = G__35038;
i__34961_35014 = G__35039;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35010);
}


var G__35040 = cljs.core.next(seq__34947_35003__$1);
var G__35041 = null;
var G__35042 = (0);
var G__35043 = (0);
seq__34947_34963 = G__35040;
chunk__34948_34964 = G__35041;
count__34949_34965 = G__35042;
i__34950_34966 = G__35043;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__35044 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__35044);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if(((!((node == null)))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35047 = cljs.core.seq(node);
var chunk__35048 = null;
var count__35049 = (0);
var i__35050 = (0);
while(true){
if((i__35050 < count__35049)){
var n = chunk__35048.cljs$core$IIndexed$_nth$arity$2(null,i__35050);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35051 = seq__35047;
var G__35052 = chunk__35048;
var G__35053 = count__35049;
var G__35054 = (i__35050 + (1));
seq__35047 = G__35051;
chunk__35048 = G__35052;
count__35049 = G__35053;
i__35050 = G__35054;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__35047);
if(temp__5457__auto__){
var seq__35047__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35047__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__35047__$1);
var G__35055 = cljs.core.chunk_rest(seq__35047__$1);
var G__35056 = c__4338__auto__;
var G__35057 = cljs.core.count(c__4338__auto__);
var G__35058 = (0);
seq__35047 = G__35055;
chunk__35048 = G__35056;
count__35049 = G__35057;
i__35050 = G__35058;
continue;
} else {
var n = cljs.core.first(seq__35047__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35059 = cljs.core.next(seq__35047__$1);
var G__35060 = null;
var G__35061 = (0);
var G__35062 = (0);
seq__35047 = G__35059;
chunk__35048 = G__35060;
count__35049 = G__35061;
i__35050 = G__35062;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__35063 = shadow.dom.dom_node(new$);
var G__35064 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__35063,G__35064);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35066 = arguments.length;
switch (G__35066) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35071 = arguments.length;
switch (G__35071) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35079 = arguments.length;
switch (G__35079) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__3936__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4521__auto__ = [];
var len__4518__auto___35087 = arguments.length;
var i__4519__auto___35088 = (0);
while(true){
if((i__4519__auto___35088 < len__4518__auto___35087)){
args__4521__auto__.push((arguments[i__4519__auto___35088]));

var G__35089 = (i__4519__auto___35088 + (1));
i__4519__auto___35088 = G__35089;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((0) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4522__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35083_35090 = cljs.core.seq(nodes);
var chunk__35084_35091 = null;
var count__35085_35092 = (0);
var i__35086_35093 = (0);
while(true){
if((i__35086_35093 < count__35085_35092)){
var node_35094 = chunk__35084_35091.cljs$core$IIndexed$_nth$arity$2(null,i__35086_35093);
fragment.appendChild(shadow.dom._to_dom(node_35094));


var G__35095 = seq__35083_35090;
var G__35096 = chunk__35084_35091;
var G__35097 = count__35085_35092;
var G__35098 = (i__35086_35093 + (1));
seq__35083_35090 = G__35095;
chunk__35084_35091 = G__35096;
count__35085_35092 = G__35097;
i__35086_35093 = G__35098;
continue;
} else {
var temp__5457__auto___35099 = cljs.core.seq(seq__35083_35090);
if(temp__5457__auto___35099){
var seq__35083_35100__$1 = temp__5457__auto___35099;
if(cljs.core.chunked_seq_QMARK_(seq__35083_35100__$1)){
var c__4338__auto___35101 = cljs.core.chunk_first(seq__35083_35100__$1);
var G__35102 = cljs.core.chunk_rest(seq__35083_35100__$1);
var G__35103 = c__4338__auto___35101;
var G__35104 = cljs.core.count(c__4338__auto___35101);
var G__35105 = (0);
seq__35083_35090 = G__35102;
chunk__35084_35091 = G__35103;
count__35085_35092 = G__35104;
i__35086_35093 = G__35105;
continue;
} else {
var node_35108 = cljs.core.first(seq__35083_35100__$1);
fragment.appendChild(shadow.dom._to_dom(node_35108));


var G__35109 = cljs.core.next(seq__35083_35100__$1);
var G__35110 = null;
var G__35111 = (0);
var G__35112 = (0);
seq__35083_35090 = G__35109;
chunk__35084_35091 = G__35110;
count__35085_35092 = G__35111;
i__35086_35093 = G__35112;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq35082){
var self__4506__auto__ = this;
return self__4506__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35082));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35117_35135 = cljs.core.seq(scripts);
var chunk__35118_35136 = null;
var count__35119_35137 = (0);
var i__35120_35138 = (0);
while(true){
if((i__35120_35138 < count__35119_35137)){
var vec__35121_35139 = chunk__35118_35136.cljs$core$IIndexed$_nth$arity$2(null,i__35120_35138);
var script_tag_35140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35121_35139,(0),null);
var script_body_35141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35121_35139,(1),null);
eval(script_body_35141);


var G__35143 = seq__35117_35135;
var G__35144 = chunk__35118_35136;
var G__35145 = count__35119_35137;
var G__35146 = (i__35120_35138 + (1));
seq__35117_35135 = G__35143;
chunk__35118_35136 = G__35144;
count__35119_35137 = G__35145;
i__35120_35138 = G__35146;
continue;
} else {
var temp__5457__auto___35147 = cljs.core.seq(seq__35117_35135);
if(temp__5457__auto___35147){
var seq__35117_35148__$1 = temp__5457__auto___35147;
if(cljs.core.chunked_seq_QMARK_(seq__35117_35148__$1)){
var c__4338__auto___35149 = cljs.core.chunk_first(seq__35117_35148__$1);
var G__35152 = cljs.core.chunk_rest(seq__35117_35148__$1);
var G__35153 = c__4338__auto___35149;
var G__35154 = cljs.core.count(c__4338__auto___35149);
var G__35155 = (0);
seq__35117_35135 = G__35152;
chunk__35118_35136 = G__35153;
count__35119_35137 = G__35154;
i__35120_35138 = G__35155;
continue;
} else {
var vec__35124_35157 = cljs.core.first(seq__35117_35148__$1);
var script_tag_35159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35124_35157,(0),null);
var script_body_35160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35124_35157,(1),null);
eval(script_body_35160);


var G__35162 = cljs.core.next(seq__35117_35148__$1);
var G__35163 = null;
var G__35164 = (0);
var G__35165 = (0);
seq__35117_35135 = G__35162;
chunk__35118_35136 = G__35163;
count__35119_35137 = G__35164;
i__35120_35138 = G__35165;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__35130){
var vec__35131 = p__35130;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35131,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35131,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__35179 = shadow.dom.dom_node(el);
var G__35180 = cls;
return goog.dom.getAncestorByClass(G__35179,G__35180);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35184 = arguments.length;
switch (G__35184) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__35185 = shadow.dom.dom_node(el);
var G__35186 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__35185,G__35186);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__35187 = shadow.dom.dom_node(el);
var G__35188 = cljs.core.name(tag);
var G__35189 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__35187,G__35188,G__35189);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__35195 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__35195);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__35196 = shadow.dom.dom_node(dom);
var G__35197 = value;
return goog.dom.forms.setValue(G__35196,G__35197);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35199 = cljs.core.seq(style_keys);
var chunk__35200 = null;
var count__35201 = (0);
var i__35202 = (0);
while(true){
if((i__35202 < count__35201)){
var it = chunk__35200.cljs$core$IIndexed$_nth$arity$2(null,i__35202);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35204 = seq__35199;
var G__35205 = chunk__35200;
var G__35206 = count__35201;
var G__35207 = (i__35202 + (1));
seq__35199 = G__35204;
chunk__35200 = G__35205;
count__35201 = G__35206;
i__35202 = G__35207;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__35199);
if(temp__5457__auto__){
var seq__35199__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35199__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__35199__$1);
var G__35208 = cljs.core.chunk_rest(seq__35199__$1);
var G__35209 = c__4338__auto__;
var G__35210 = cljs.core.count(c__4338__auto__);
var G__35211 = (0);
seq__35199 = G__35208;
chunk__35200 = G__35209;
count__35201 = G__35210;
i__35202 = G__35211;
continue;
} else {
var it = cljs.core.first(seq__35199__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35212 = cljs.core.next(seq__35199__$1);
var G__35213 = null;
var G__35214 = (0);
var G__35215 = (0);
seq__35199 = G__35212;
chunk__35200 = G__35213;
count__35201 = G__35214;
i__35202 = G__35215;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11998__auto__,k__11999__auto__){
var self__ = this;
var this__11998__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__11998__auto____$1,k__11999__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12000__auto__,k35217,else__12001__auto__){
var self__ = this;
var this__12000__auto____$1 = this;
var G__35221 = k35217;
var G__35221__$1 = (((G__35221 instanceof cljs.core.Keyword))?G__35221.fqn:null);
switch (G__35221__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35217,else__12001__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12012__auto__,writer__12013__auto__,opts__12014__auto__){
var self__ = this;
var this__12012__auto____$1 = this;
var pr_pair__12015__auto__ = ((function (this__12012__auto____$1){
return (function (keyval__12016__auto__){
return cljs.core.pr_sequential_writer(writer__12013__auto__,cljs.core.pr_writer,""," ","",opts__12014__auto__,keyval__12016__auto__);
});})(this__12012__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12013__auto__,pr_pair__12015__auto__,"#shadow.dom.Coordinate{",", ","}",opts__12014__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35216){
var self__ = this;
var G__35216__$1 = this;
return (new cljs.core.RecordIter((0),G__35216__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11996__auto__){
var self__ = this;
var this__11996__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11993__auto__){
var self__ = this;
var this__11993__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12002__auto__){
var self__ = this;
var this__12002__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11994__auto__){
var self__ = this;
var this__11994__auto____$1 = this;
var h__4048__auto__ = self__.__hash;
if(!((h__4048__auto__ == null))){
return h__4048__auto__;
} else {
var h__4048__auto____$1 = (function (){var fexpr__35222 = ((function (h__4048__auto__,this__11994__auto____$1){
return (function (coll__11995__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__11995__auto__));
});})(h__4048__auto__,this__11994__auto____$1))
;
return fexpr__35222(this__11994__auto____$1);
})();
self__.__hash = h__4048__auto____$1;

return h__4048__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35218,other35219){
var self__ = this;
var this35218__$1 = this;
return ((!((other35219 == null))) && ((this35218__$1.constructor === other35219.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35218__$1.x,other35219.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35218__$1.y,other35219.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35218__$1.__extmap,other35219.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12007__auto__,k__12008__auto__){
var self__ = this;
var this__12007__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__12008__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12007__auto____$1),self__.__meta),k__12008__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12008__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12005__auto__,k__12006__auto__,G__35216){
var self__ = this;
var this__12005__auto____$1 = this;
var pred__35223 = cljs.core.keyword_identical_QMARK_;
var expr__35224 = k__12006__auto__;
if(cljs.core.truth_((function (){var G__35226 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__35227 = expr__35224;
return (pred__35223.cljs$core$IFn$_invoke$arity$2 ? pred__35223.cljs$core$IFn$_invoke$arity$2(G__35226,G__35227) : pred__35223.call(null,G__35226,G__35227));
})())){
return (new shadow.dom.Coordinate(G__35216,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35228 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__35229 = expr__35224;
return (pred__35223.cljs$core$IFn$_invoke$arity$2 ? pred__35223.cljs$core$IFn$_invoke$arity$2(G__35228,G__35229) : pred__35223.call(null,G__35228,G__35229));
})())){
return (new shadow.dom.Coordinate(self__.x,G__35216,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12006__auto__,G__35216),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12010__auto__){
var self__ = this;
var this__12010__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11997__auto__,G__35216){
var self__ = this;
var this__11997__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35216,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12003__auto__,entry__12004__auto__){
var self__ = this;
var this__12003__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12004__auto__)){
return cljs.core._assoc(this__12003__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12004__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12004__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12003__auto____$1,entry__12004__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4227__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4227__auto__,writer__4228__auto__){
return cljs.core._write(writer__4228__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35220){
var extmap__4223__auto__ = (function (){var G__35234 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35220,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35220)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35234);
} else {
return G__35234;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35220),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35220),null,cljs.core.not_empty(extmap__4223__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__35243 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__35243);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__35244 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__35244);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__35245 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__35245);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11998__auto__,k__11999__auto__){
var self__ = this;
var this__11998__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__11998__auto____$1,k__11999__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12000__auto__,k35247,else__12001__auto__){
var self__ = this;
var this__12000__auto____$1 = this;
var G__35251 = k35247;
var G__35251__$1 = (((G__35251 instanceof cljs.core.Keyword))?G__35251.fqn:null);
switch (G__35251__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35247,else__12001__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12012__auto__,writer__12013__auto__,opts__12014__auto__){
var self__ = this;
var this__12012__auto____$1 = this;
var pr_pair__12015__auto__ = ((function (this__12012__auto____$1){
return (function (keyval__12016__auto__){
return cljs.core.pr_sequential_writer(writer__12013__auto__,cljs.core.pr_writer,""," ","",opts__12014__auto__,keyval__12016__auto__);
});})(this__12012__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12013__auto__,pr_pair__12015__auto__,"#shadow.dom.Size{",", ","}",opts__12014__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35246){
var self__ = this;
var G__35246__$1 = this;
return (new cljs.core.RecordIter((0),G__35246__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11996__auto__){
var self__ = this;
var this__11996__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11993__auto__){
var self__ = this;
var this__11993__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12002__auto__){
var self__ = this;
var this__12002__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11994__auto__){
var self__ = this;
var this__11994__auto____$1 = this;
var h__4048__auto__ = self__.__hash;
if(!((h__4048__auto__ == null))){
return h__4048__auto__;
} else {
var h__4048__auto____$1 = (function (){var fexpr__35252 = ((function (h__4048__auto__,this__11994__auto____$1){
return (function (coll__11995__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__11995__auto__));
});})(h__4048__auto__,this__11994__auto____$1))
;
return fexpr__35252(this__11994__auto____$1);
})();
self__.__hash = h__4048__auto____$1;

return h__4048__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35248,other35249){
var self__ = this;
var this35248__$1 = this;
return ((!((other35249 == null))) && ((this35248__$1.constructor === other35249.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35248__$1.w,other35249.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35248__$1.h,other35249.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35248__$1.__extmap,other35249.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12007__auto__,k__12008__auto__){
var self__ = this;
var this__12007__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__12008__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12007__auto____$1),self__.__meta),k__12008__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12008__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12005__auto__,k__12006__auto__,G__35246){
var self__ = this;
var this__12005__auto____$1 = this;
var pred__35257 = cljs.core.keyword_identical_QMARK_;
var expr__35258 = k__12006__auto__;
if(cljs.core.truth_((function (){var G__35260 = new cljs.core.Keyword(null,"w","w",354169001);
var G__35261 = expr__35258;
return (pred__35257.cljs$core$IFn$_invoke$arity$2 ? pred__35257.cljs$core$IFn$_invoke$arity$2(G__35260,G__35261) : pred__35257.call(null,G__35260,G__35261));
})())){
return (new shadow.dom.Size(G__35246,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35262 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__35263 = expr__35258;
return (pred__35257.cljs$core$IFn$_invoke$arity$2 ? pred__35257.cljs$core$IFn$_invoke$arity$2(G__35262,G__35263) : pred__35257.call(null,G__35262,G__35263));
})())){
return (new shadow.dom.Size(self__.w,G__35246,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12006__auto__,G__35246),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12010__auto__){
var self__ = this;
var this__12010__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11997__auto__,G__35246){
var self__ = this;
var this__11997__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35246,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12003__auto__,entry__12004__auto__){
var self__ = this;
var this__12003__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12004__auto__)){
return cljs.core._assoc(this__12003__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12004__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12004__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12003__auto____$1,entry__12004__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4227__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4227__auto__,writer__4228__auto__){
return cljs.core._write(writer__4228__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35250){
var extmap__4223__auto__ = (function (){var G__35271 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35250,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35250)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35271);
} else {
return G__35271;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35250),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35250),null,cljs.core.not_empty(extmap__4223__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__35278 = shadow.dom.dom_node(el);
return goog.style.getSize(G__35278);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4392__auto__ = opts;
var l__4393__auto__ = a__4392__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4393__auto__)){
var G__35282 = (i + (1));
var G__35283 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35282;
ret = G__35283;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35286){
var vec__35287 = p__35286;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35287,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35287,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35294 = arguments.length;
switch (G__35294) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35301_35303 = new_node;
var G__35302_35304 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__35301_35303,G__35302_35304);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35305_35308 = new_node;
var G__35306_35309 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__35305_35308,G__35306_35309);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35314 = ps;
var G__35315 = (i + (1));
el__$1 = G__35314;
i = G__35315;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__35319 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__35319);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__35321 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__35321);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__35322 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__35322);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35323 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35323,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35323,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35323,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35326_35336 = cljs.core.seq(props);
var chunk__35327_35337 = null;
var count__35328_35338 = (0);
var i__35329_35339 = (0);
while(true){
if((i__35329_35339 < count__35328_35338)){
var vec__35330_35340 = chunk__35327_35337.cljs$core$IIndexed$_nth$arity$2(null,i__35329_35339);
var k_35341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35330_35340,(0),null);
var v_35342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35330_35340,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_35341);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35341),v_35342);


var G__35343 = seq__35326_35336;
var G__35344 = chunk__35327_35337;
var G__35345 = count__35328_35338;
var G__35346 = (i__35329_35339 + (1));
seq__35326_35336 = G__35343;
chunk__35327_35337 = G__35344;
count__35328_35338 = G__35345;
i__35329_35339 = G__35346;
continue;
} else {
var temp__5457__auto___35347 = cljs.core.seq(seq__35326_35336);
if(temp__5457__auto___35347){
var seq__35326_35348__$1 = temp__5457__auto___35347;
if(cljs.core.chunked_seq_QMARK_(seq__35326_35348__$1)){
var c__4338__auto___35349 = cljs.core.chunk_first(seq__35326_35348__$1);
var G__35350 = cljs.core.chunk_rest(seq__35326_35348__$1);
var G__35351 = c__4338__auto___35349;
var G__35352 = cljs.core.count(c__4338__auto___35349);
var G__35353 = (0);
seq__35326_35336 = G__35350;
chunk__35327_35337 = G__35351;
count__35328_35338 = G__35352;
i__35329_35339 = G__35353;
continue;
} else {
var vec__35333_35354 = cljs.core.first(seq__35326_35348__$1);
var k_35355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35333_35354,(0),null);
var v_35356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35333_35354,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_35355);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35355),v_35356);


var G__35357 = cljs.core.next(seq__35326_35348__$1);
var G__35358 = null;
var G__35359 = (0);
var G__35360 = (0);
seq__35326_35336 = G__35357;
chunk__35327_35337 = G__35358;
count__35328_35338 = G__35359;
i__35329_35339 = G__35360;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35364 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35364,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35364,(1),null);
var seq__35367_35385 = cljs.core.seq(node_children);
var chunk__35369_35386 = null;
var count__35370_35387 = (0);
var i__35371_35388 = (0);
while(true){
if((i__35371_35388 < count__35370_35387)){
var child_struct_35389 = chunk__35369_35386.cljs$core$IIndexed$_nth$arity$2(null,i__35371_35388);
if(!((child_struct_35389 == null))){
if(typeof child_struct_35389 === 'string'){
var text_35390 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35390),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_35389)].join(''));
} else {
var children_35391 = shadow.dom.svg_node(child_struct_35389);
if(cljs.core.seq_QMARK_(children_35391)){
var seq__35373_35392 = cljs.core.seq(children_35391);
var chunk__35375_35393 = null;
var count__35376_35394 = (0);
var i__35377_35395 = (0);
while(true){
if((i__35377_35395 < count__35376_35394)){
var child_35396 = chunk__35375_35393.cljs$core$IIndexed$_nth$arity$2(null,i__35377_35395);
if(cljs.core.truth_(child_35396)){
node.appendChild(child_35396);


var G__35397 = seq__35373_35392;
var G__35398 = chunk__35375_35393;
var G__35399 = count__35376_35394;
var G__35400 = (i__35377_35395 + (1));
seq__35373_35392 = G__35397;
chunk__35375_35393 = G__35398;
count__35376_35394 = G__35399;
i__35377_35395 = G__35400;
continue;
} else {
var G__35401 = seq__35373_35392;
var G__35402 = chunk__35375_35393;
var G__35403 = count__35376_35394;
var G__35404 = (i__35377_35395 + (1));
seq__35373_35392 = G__35401;
chunk__35375_35393 = G__35402;
count__35376_35394 = G__35403;
i__35377_35395 = G__35404;
continue;
}
} else {
var temp__5457__auto___35405 = cljs.core.seq(seq__35373_35392);
if(temp__5457__auto___35405){
var seq__35373_35406__$1 = temp__5457__auto___35405;
if(cljs.core.chunked_seq_QMARK_(seq__35373_35406__$1)){
var c__4338__auto___35407 = cljs.core.chunk_first(seq__35373_35406__$1);
var G__35408 = cljs.core.chunk_rest(seq__35373_35406__$1);
var G__35409 = c__4338__auto___35407;
var G__35410 = cljs.core.count(c__4338__auto___35407);
var G__35411 = (0);
seq__35373_35392 = G__35408;
chunk__35375_35393 = G__35409;
count__35376_35394 = G__35410;
i__35377_35395 = G__35411;
continue;
} else {
var child_35412 = cljs.core.first(seq__35373_35406__$1);
if(cljs.core.truth_(child_35412)){
node.appendChild(child_35412);


var G__35413 = cljs.core.next(seq__35373_35406__$1);
var G__35414 = null;
var G__35415 = (0);
var G__35416 = (0);
seq__35373_35392 = G__35413;
chunk__35375_35393 = G__35414;
count__35376_35394 = G__35415;
i__35377_35395 = G__35416;
continue;
} else {
var G__35417 = cljs.core.next(seq__35373_35406__$1);
var G__35418 = null;
var G__35419 = (0);
var G__35420 = (0);
seq__35373_35392 = G__35417;
chunk__35375_35393 = G__35418;
count__35376_35394 = G__35419;
i__35377_35395 = G__35420;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35391);
}
}


var G__35421 = seq__35367_35385;
var G__35422 = chunk__35369_35386;
var G__35423 = count__35370_35387;
var G__35424 = (i__35371_35388 + (1));
seq__35367_35385 = G__35421;
chunk__35369_35386 = G__35422;
count__35370_35387 = G__35423;
i__35371_35388 = G__35424;
continue;
} else {
var G__35425 = seq__35367_35385;
var G__35426 = chunk__35369_35386;
var G__35427 = count__35370_35387;
var G__35428 = (i__35371_35388 + (1));
seq__35367_35385 = G__35425;
chunk__35369_35386 = G__35426;
count__35370_35387 = G__35427;
i__35371_35388 = G__35428;
continue;
}
} else {
var temp__5457__auto___35429 = cljs.core.seq(seq__35367_35385);
if(temp__5457__auto___35429){
var seq__35367_35430__$1 = temp__5457__auto___35429;
if(cljs.core.chunked_seq_QMARK_(seq__35367_35430__$1)){
var c__4338__auto___35431 = cljs.core.chunk_first(seq__35367_35430__$1);
var G__35432 = cljs.core.chunk_rest(seq__35367_35430__$1);
var G__35433 = c__4338__auto___35431;
var G__35434 = cljs.core.count(c__4338__auto___35431);
var G__35435 = (0);
seq__35367_35385 = G__35432;
chunk__35369_35386 = G__35433;
count__35370_35387 = G__35434;
i__35371_35388 = G__35435;
continue;
} else {
var child_struct_35436 = cljs.core.first(seq__35367_35430__$1);
if(!((child_struct_35436 == null))){
if(typeof child_struct_35436 === 'string'){
var text_35437 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35437),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_35436)].join(''));
} else {
var children_35438 = shadow.dom.svg_node(child_struct_35436);
if(cljs.core.seq_QMARK_(children_35438)){
var seq__35379_35439 = cljs.core.seq(children_35438);
var chunk__35381_35440 = null;
var count__35382_35441 = (0);
var i__35383_35442 = (0);
while(true){
if((i__35383_35442 < count__35382_35441)){
var child_35443 = chunk__35381_35440.cljs$core$IIndexed$_nth$arity$2(null,i__35383_35442);
if(cljs.core.truth_(child_35443)){
node.appendChild(child_35443);


var G__35444 = seq__35379_35439;
var G__35445 = chunk__35381_35440;
var G__35446 = count__35382_35441;
var G__35447 = (i__35383_35442 + (1));
seq__35379_35439 = G__35444;
chunk__35381_35440 = G__35445;
count__35382_35441 = G__35446;
i__35383_35442 = G__35447;
continue;
} else {
var G__35448 = seq__35379_35439;
var G__35449 = chunk__35381_35440;
var G__35450 = count__35382_35441;
var G__35451 = (i__35383_35442 + (1));
seq__35379_35439 = G__35448;
chunk__35381_35440 = G__35449;
count__35382_35441 = G__35450;
i__35383_35442 = G__35451;
continue;
}
} else {
var temp__5457__auto___35452__$1 = cljs.core.seq(seq__35379_35439);
if(temp__5457__auto___35452__$1){
var seq__35379_35453__$1 = temp__5457__auto___35452__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35379_35453__$1)){
var c__4338__auto___35454 = cljs.core.chunk_first(seq__35379_35453__$1);
var G__35455 = cljs.core.chunk_rest(seq__35379_35453__$1);
var G__35456 = c__4338__auto___35454;
var G__35457 = cljs.core.count(c__4338__auto___35454);
var G__35458 = (0);
seq__35379_35439 = G__35455;
chunk__35381_35440 = G__35456;
count__35382_35441 = G__35457;
i__35383_35442 = G__35458;
continue;
} else {
var child_35459 = cljs.core.first(seq__35379_35453__$1);
if(cljs.core.truth_(child_35459)){
node.appendChild(child_35459);


var G__35460 = cljs.core.next(seq__35379_35453__$1);
var G__35461 = null;
var G__35462 = (0);
var G__35463 = (0);
seq__35379_35439 = G__35460;
chunk__35381_35440 = G__35461;
count__35382_35441 = G__35462;
i__35383_35442 = G__35463;
continue;
} else {
var G__35464 = cljs.core.next(seq__35379_35453__$1);
var G__35465 = null;
var G__35466 = (0);
var G__35467 = (0);
seq__35379_35439 = G__35464;
chunk__35381_35440 = G__35465;
count__35382_35441 = G__35466;
i__35383_35442 = G__35467;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35438);
}
}


var G__35468 = cljs.core.next(seq__35367_35430__$1);
var G__35469 = null;
var G__35470 = (0);
var G__35471 = (0);
seq__35367_35385 = G__35468;
chunk__35369_35386 = G__35469;
count__35370_35387 = G__35470;
i__35371_35388 = G__35471;
continue;
} else {
var G__35472 = cljs.core.next(seq__35367_35430__$1);
var G__35473 = null;
var G__35474 = (0);
var G__35475 = (0);
seq__35367_35385 = G__35472;
chunk__35369_35386 = G__35473;
count__35370_35387 = G__35474;
i__35371_35388 = G__35475;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__35476_35483 = shadow.dom._to_svg;
var G__35477_35484 = "string";
var G__35478_35485 = ((function (G__35476_35483,G__35477_35484){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__35476_35483,G__35477_35484))
;
goog.object.set(G__35476_35483,G__35477_35484,G__35478_35485);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__35480_35490 = shadow.dom._to_svg;
var G__35481_35491 = "null";
var G__35482_35492 = ((function (G__35480_35490,G__35481_35491){
return (function (_){
return null;
});})(G__35480_35490,G__35481_35491))
;
goog.object.set(G__35480_35490,G__35481_35491,G__35482_35492);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4521__auto__ = [];
var len__4518__auto___35500 = arguments.length;
var i__4519__auto___35501 = (0);
while(true){
if((i__4519__auto___35501 < len__4518__auto___35500)){
args__4521__auto__.push((arguments[i__4519__auto___35501]));

var G__35502 = (i__4519__auto___35501 + (1));
i__4519__auto___35501 = G__35502;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq35497){
var G__35498 = cljs.core.first(seq35497);
var seq35497__$1 = cljs.core.next(seq35497);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35498,seq35497__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35507 = arguments.length;
switch (G__35507) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__35512_35534 = shadow.dom.dom_node(el);
var G__35513_35535 = cljs.core.name(event);
var G__35514_35536 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35512_35534,G__35513_35535,G__35514_35536) : shadow.dom.dom_listen.call(null,G__35512_35534,G__35513_35535,G__35514_35536));

if(cljs.core.truth_((function (){var and__3925__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__3925__auto__)){
return !(once_or_cleanup === true);
} else {
return and__3925__auto__;
}
})())){
var c__32322__auto___35537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32322__auto___35537,buf,chan,event_fn){
return (function (){
var f__32323__auto__ = (function (){var switch__32247__auto__ = ((function (c__32322__auto___35537,buf,chan,event_fn){
return (function (state_35520){
var state_val_35521 = (state_35520[(1)]);
if((state_val_35521 === (1))){
var state_35520__$1 = state_35520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35520__$1,(2),once_or_cleanup);
} else {
if((state_val_35521 === (2))){
var inst_35517 = (state_35520[(2)]);
var inst_35518 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35520__$1 = (function (){var statearr_35522 = state_35520;
(statearr_35522[(7)] = inst_35517);

return statearr_35522;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35520__$1,inst_35518);
} else {
return null;
}
}
});})(c__32322__auto___35537,buf,chan,event_fn))
;
return ((function (switch__32247__auto__,c__32322__auto___35537,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__32248__auto__ = null;
var shadow$dom$state_machine__32248__auto____0 = (function (){
var statearr_35524 = [null,null,null,null,null,null,null,null];
(statearr_35524[(0)] = shadow$dom$state_machine__32248__auto__);

(statearr_35524[(1)] = (1));

return statearr_35524;
});
var shadow$dom$state_machine__32248__auto____1 = (function (state_35520){
while(true){
var ret_value__32249__auto__ = (function (){try{while(true){
var result__32250__auto__ = switch__32247__auto__(state_35520);
if(cljs.core.keyword_identical_QMARK_(result__32250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32250__auto__;
}
break;
}
}catch (e35527){if((e35527 instanceof Object)){
var ex__32251__auto__ = e35527;
var statearr_35528_35538 = state_35520;
(statearr_35528_35538[(5)] = ex__32251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35527;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35543 = state_35520;
state_35520 = G__35543;
continue;
} else {
return ret_value__32249__auto__;
}
break;
}
});
shadow$dom$state_machine__32248__auto__ = function(state_35520){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32248__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32248__auto____1.call(this,state_35520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32248__auto____0;
shadow$dom$state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32248__auto____1;
return shadow$dom$state_machine__32248__auto__;
})()
;})(switch__32247__auto__,c__32322__auto___35537,buf,chan,event_fn))
})();
var state__32324__auto__ = (function (){var statearr_35532 = (f__32323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32323__auto__.cljs$core$IFn$_invoke$arity$0() : f__32323__auto__.call(null));
(statearr_35532[(6)] = c__32322__auto___35537);

return statearr_35532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32324__auto__);
});})(c__32322__auto___35537,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
