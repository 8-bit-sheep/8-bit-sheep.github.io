goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__26906__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__26906__auto__["add"]).call(o__26906__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__26906__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__26906__auto__["delete"]).call(o__26906__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__26906__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__26906__auto__["has"]).call(o__26906__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_(json_ml))){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__29723 = data;
var target__26919__auto__ = G__29723;
if(cljs.core.truth_(target__26919__auto__)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["unable to locate object path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(null)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29723)].join('')),"\n","target__26919__auto__"].join('')));
}

(target__26919__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__29723;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_29739 = (depth_budget - (1));
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_(json_ml))){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_29739);
} else {
var seq__29732_29741 = cljs.core.seq(json_ml);
var chunk__29733_29742 = null;
var count__29734_29743 = (0);
var i__29735_29744 = (0);
while(true){
if((i__29735_29744 < count__29734_29743)){
var item_29745 = chunk__29733_29742.cljs$core$IIndexed$_nth$arity$2(null,i__29735_29744);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_29745,new_depth_budget_29739) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_29745,new_depth_budget_29739));


var G__29746 = seq__29732_29741;
var G__29747 = chunk__29733_29742;
var G__29748 = count__29734_29743;
var G__29749 = (i__29735_29744 + (1));
seq__29732_29741 = G__29746;
chunk__29733_29742 = G__29747;
count__29734_29743 = G__29748;
i__29735_29744 = G__29749;
continue;
} else {
var temp__5457__auto___29751 = cljs.core.seq(seq__29732_29741);
if(temp__5457__auto___29751){
var seq__29732_29752__$1 = temp__5457__auto___29751;
if(cljs.core.chunked_seq_QMARK_(seq__29732_29752__$1)){
var c__4338__auto___29753 = cljs.core.chunk_first(seq__29732_29752__$1);
var G__29754 = cljs.core.chunk_rest(seq__29732_29752__$1);
var G__29755 = c__4338__auto___29753;
var G__29756 = cljs.core.count(c__4338__auto___29753);
var G__29757 = (0);
seq__29732_29741 = G__29754;
chunk__29733_29742 = G__29755;
count__29734_29743 = G__29756;
i__29735_29744 = G__29757;
continue;
} else {
var item_29759 = cljs.core.first(seq__29732_29752__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_29759,new_depth_budget_29739) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_29759,new_depth_budget_29739));


var G__29762 = cljs.core.next(seq__29732_29752__$1);
var G__29763 = null;
var G__29764 = (0);
var G__29765 = (0);
seq__29732_29741 = G__29762;
chunk__29733_29742 = G__29763;
count__29734_29743 = G__29764;
i__29735_29744 = G__29765;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5455__auto__ = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5455__auto__)){
var initial_hierarchy_depth_budget = temp__5455__auto__;
var remaining_depth_budget = (function (){var or__3936__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=devtools.formatters.budgeting.js.map
