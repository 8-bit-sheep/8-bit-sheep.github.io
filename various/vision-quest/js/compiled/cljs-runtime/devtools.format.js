goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4230__auto__ = (((value == null))?null:value);
var m__4231__auto__ = (devtools.format._header[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4231__auto__.call(null,value));
} else {
var m__4231__auto____$1 = (devtools.format._header["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1(value) : m__4231__auto____$1.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4230__auto__ = (((value == null))?null:value);
var m__4231__auto__ = (devtools.format._has_body[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4231__auto__.call(null,value));
} else {
var m__4231__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1(value) : m__4231__auto____$1.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4230__auto__ = (((value == null))?null:value);
var m__4231__auto__ = (devtools.format._body[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4231__auto__.call(null,value));
} else {
var m__4231__auto____$1 = (devtools.format._body["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1(value) : m__4231__auto____$1.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o27001 = temp__5455__auto__;
var temp__5455__auto____$1 = (o27001["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o27002 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o27002["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o27003 = temp__5455__auto____$2;
return (o27003["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o27012 = temp__5455__auto__;
var temp__5455__auto____$1 = (o27012["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o27013 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o27013["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o27014 = temp__5455__auto____$2;
return (o27014["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o27015 = temp__5455__auto__;
var temp__5455__auto____$1 = (o27015["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o27016 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o27016["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o27017 = temp__5455__auto____$2;
return (o27017["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o27025 = temp__5455__auto__;
var temp__5455__auto____$1 = (o27025["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o27026 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o27026["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o27027 = temp__5455__auto____$2;
return (o27027["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o27030 = temp__5455__auto__;
var temp__5455__auto____$1 = (o27030["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o27031 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o27031["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o27032 = temp__5455__auto____$2;
return (o27032["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o27036 = temp__5455__auto__;
var temp__5455__auto____$1 = (o27036["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o27037 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o27037["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o27038 = temp__5455__auto____$2;
return (o27038["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o27043 = temp__5455__auto__;
var temp__5455__auto____$1 = (o27043["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o27044 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o27044["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o27045 = temp__5455__auto____$2;
return (o27045["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4521__auto__ = [];
var len__4518__auto___27075 = arguments.length;
var i__4519__auto___27077 = (0);
while(true){
if((i__4519__auto___27077 < len__4518__auto___27075)){
args__4521__auto__.push((arguments[i__4519__auto___27077]));

var G__27078 = (i__4519__auto___27077 + (1));
i__4519__auto___27077 = G__27078;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((0) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4522__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq27067){
var self__4506__auto__ = this;
return self__4506__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27067));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4521__auto__ = [];
var len__4518__auto___27096 = arguments.length;
var i__4519__auto___27097 = (0);
while(true){
if((i__4519__auto___27097 < len__4518__auto___27096)){
args__4521__auto__.push((arguments[i__4519__auto___27097]));

var G__27098 = (i__4519__auto___27097 + (1));
i__4519__auto___27097 = G__27098;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((0) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4522__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq27087){
var self__4506__auto__ = this;
return self__4506__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27087));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4521__auto__ = [];
var len__4518__auto___27108 = arguments.length;
var i__4519__auto___27109 = (0);
while(true){
if((i__4519__auto___27109 < len__4518__auto___27108)){
args__4521__auto__.push((arguments[i__4519__auto___27109]));

var G__27110 = (i__4519__auto___27109 + (1));
i__4519__auto___27109 = G__27110;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((0) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4522__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq27102){
var self__4506__auto__ = this;
return self__4506__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27102));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4521__auto__ = [];
var len__4518__auto___27120 = arguments.length;
var i__4519__auto___27121 = (0);
while(true){
if((i__4519__auto___27121 < len__4518__auto___27120)){
args__4521__auto__.push((arguments[i__4519__auto___27121]));

var G__27123 = (i__4519__auto___27121 + (1));
i__4519__auto___27121 = G__27123;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((0) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4522__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq27115){
var self__4506__auto__ = this;
return self__4506__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27115));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4521__auto__ = [];
var len__4518__auto___27138 = arguments.length;
var i__4519__auto___27139 = (0);
while(true){
if((i__4519__auto___27139 < len__4518__auto___27138)){
args__4521__auto__.push((arguments[i__4519__auto___27139]));

var G__27141 = (i__4519__auto___27139 + (1));
i__4519__auto___27139 = G__27141;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((0) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4522__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq27132){
var self__4506__auto__ = this;
return self__4506__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27132));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4521__auto__ = [];
var len__4518__auto___27168 = arguments.length;
var i__4519__auto___27172 = (0);
while(true){
if((i__4519__auto___27172 < len__4518__auto___27168)){
args__4521__auto__.push((arguments[i__4519__auto___27172]));

var G__27175 = (i__4519__auto___27172 + (1));
i__4519__auto___27172 = G__27175;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((0) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4522__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq27157){
var self__4506__auto__ = this;
return self__4506__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27157));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4521__auto__ = [];
var len__4518__auto___27188 = arguments.length;
var i__4519__auto___27189 = (0);
while(true){
if((i__4519__auto___27189 < len__4518__auto___27188)){
args__4521__auto__.push((arguments[i__4519__auto___27189]));

var G__27190 = (i__4519__auto___27189 + (1));
i__4519__auto___27189 = G__27190;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((0) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4522__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq27179){
var self__4506__auto__ = this;
return self__4506__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27179));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4521__auto__ = [];
var len__4518__auto___27214 = arguments.length;
var i__4519__auto___27215 = (0);
while(true){
if((i__4519__auto___27215 < len__4518__auto___27214)){
args__4521__auto__.push((arguments[i__4519__auto___27215]));

var G__27218 = (i__4519__auto___27215 + (1));
i__4519__auto___27215 = G__27218;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__27205){
var vec__27207 = p__27205;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27207,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__27207,state_override){
return (function (p1__27194_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__27194_SHARP_,state_override], 0));
});})(vec__27207,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq27197){
var G__27198 = cljs.core.first(seq27197);
var seq27197__$1 = cljs.core.next(seq27197);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27198,seq27197__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__27224 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__27226 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__27227 = (function (){var G__27229 = new cljs.core.Keyword(null,"li","li",723558921);
var G__27230 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__27231 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__27229,G__27230,G__27231) : devtools.format.make_template_fn.call(null,G__27229,G__27230,G__27231));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__27224,G__27226,G__27227) : devtools.format.make_template_fn.call(null,G__27224,G__27226,G__27227));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4521__auto__ = [];
var len__4518__auto___27245 = arguments.length;
var i__4519__auto___27246 = (0);
while(true){
if((i__4519__auto___27246 < len__4518__auto___27245)){
args__4521__auto__.push((arguments[i__4519__auto___27246]));

var G__27248 = (i__4519__auto___27246 + (1));
i__4519__auto___27246 = G__27248;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((0) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4522__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq27237){
var self__4506__auto__ = this;
return self__4506__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27237));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4521__auto__ = [];
var len__4518__auto___27277 = arguments.length;
var i__4519__auto___27280 = (0);
while(true){
if((i__4519__auto___27280 < len__4518__auto___27277)){
args__4521__auto__.push((arguments[i__4519__auto___27280]));

var G__27289 = (i__4519__auto___27280 + (1));
i__4519__auto___27280 = G__27289;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq27254){
var G__27255 = cljs.core.first(seq27254);
var seq27254__$1 = cljs.core.next(seq27254);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27255,seq27254__$1);
});


//# sourceMappingURL=devtools.format.js.map
