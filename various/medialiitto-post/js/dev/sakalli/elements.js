// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('sakalli.elements');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sakalli.submit');
goog.require('sakalli.configuration');
sakalli.elements.micronarrative_element = (function sakalli$elements$micronarrative_element(k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$free_DASH_form_SLASH_field,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$textarea,cljs.core.cst$kw$key,k,cljs.core.cst$kw$label,(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(sakalli.configuration.texts) : k.call(null,sakalli.configuration.texts)),cljs.core.cst$kw$placeholder,cljs.core.cst$kw$micro_DASH_placeholder.cljs$core$IFn$_invoke$arity$1(sakalli.configuration.texts)], null)], null);
});
sakalli.elements.favorite_app_element = (function sakalli$elements$favorite_app_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,cljs.core.cst$kw$favorite_DASH_service_DASH_question.cljs$core$IFn$_invoke$arity$1(sakalli.configuration.texts)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$free_DASH_form_SLASH_field,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$key,cljs.core.cst$kw$fave_DASH_app,cljs.core.cst$kw$label,cljs.core.cst$kw$application_DASH_label.cljs$core$IFn$_invoke$arity$1(sakalli.configuration.texts),cljs.core.cst$kw$placeholder,cljs.core.cst$kw$application_DASH_placeholder.cljs$core$IFn$_invoke$arity$1(sakalli.configuration.texts)], null)], null)], null);
});
sakalli.elements.other_feedback_element = (function sakalli$elements$other_feedback_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$free_DASH_form_SLASH_field,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$textarea,cljs.core.cst$kw$key,cljs.core.cst$kw$other_DASH_feedback,cljs.core.cst$kw$label,cljs.core.cst$kw$free.cljs$core$IFn$_invoke$arity$1(sakalli.configuration.texts),cljs.core.cst$kw$placeholder,cljs.core.cst$kw$free_DASH_placeholder.cljs$core$IFn$_invoke$arity$1(sakalli.configuration.texts)], null)], null);
});
sakalli.elements.render_years_list = (function sakalli$elements$render_years_list(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$kw$choose,(new cljs.core.List(null,cljs.core.second(cljs.core.cst$kw$gender_DASH_options.cljs$core$IFn$_invoke$arity$1(sakalli.configuration.texts)),null,(1),null)),(2),null)),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18188_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18188_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3((2015),(1900),(-1))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.range.cljs$core$IFn$_invoke$arity$3((2015),(1900),(-1)))));
});
sakalli.elements.birth_year_element = (function sakalli$elements$birth_year_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$free_DASH_form_SLASH_field,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$select,cljs.core.cst$kw$label,cljs.core.cst$kw$birthyear_DASH_label.cljs$core$IFn$_invoke$arity$1(sakalli.configuration.texts),cljs.core.cst$kw$key,cljs.core.cst$kw$birthyear,cljs.core.cst$kw$options,sakalli.elements.render_years_list()], null)], null);
});
sakalli.elements.company_element = (function sakalli$elements$company_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$free_DASH_form_SLASH_field,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$select,cljs.core.cst$kw$label,cljs.core.cst$kw$company_DASH_label.cljs$core$IFn$_invoke$arity$1(sakalli.configuration.texts),cljs.core.cst$kw$key,cljs.core.cst$kw$company,cljs.core.cst$kw$options,cljs.core.cst$kw$company_DASH_options.cljs$core$IFn$_invoke$arity$1(sakalli.configuration.texts)], null)], null);
});
sakalli.elements.gender_element = (function sakalli$elements$gender_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$free_DASH_form_SLASH_field,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$select,cljs.core.cst$kw$label,cljs.core.cst$kw$gender_DASH_label.cljs$core$IFn$_invoke$arity$1(sakalli.configuration.texts),cljs.core.cst$kw$key,cljs.core.cst$kw$gender,cljs.core.cst$kw$options,cljs.core.cst$kw$gender_DASH_options.cljs$core$IFn$_invoke$arity$1(sakalli.configuration.texts)], null)], null);
});
sakalli.elements.name_element = (function sakalli$elements$name_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$free_DASH_form_SLASH_field,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$label,cljs.core.cst$kw$name_DASH_label.cljs$core$IFn$_invoke$arity$1(sakalli.configuration.texts),cljs.core.cst$kw$key,cljs.core.cst$kw$name], null)], null);
});
sakalli.elements.validation_error_element = (function sakalli$elements$validation_error_element(app_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"red"], null)], null),(cljs.core.truth_(cljs.core.cst$kw$validation_DASH_error.cljs$core$IFn$_invoke$arity$1(app_state))?cljs.core.cst$kw$validation_DASH_error.cljs$core$IFn$_invoke$arity$1(sakalli.configuration.texts):""
)], null);
});
sakalli.elements.thank_you_element = (function sakalli$elements$thank_you_element(app_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,(cljs.core.truth_(cljs.core.cst$kw$submitted.cljs$core$IFn$_invoke$arity$1(app_state))?"block":"none"
)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,cljs.core.cst$kw$thank_DASH_you.cljs$core$IFn$_invoke$arity$1(sakalli.configuration.texts)], null)], null);
});
/**
 * Helper function to hide survey
 */
sakalli.elements.quest_QMARK_ = (function sakalli$elements$quest_QMARK_(app_state){
if(cljs.core.truth_(cljs.core.cst$kw$submitted.cljs$core$IFn$_invoke$arity$1(app_state))){
return "none";
} else {
return "block";

}
});
/**
 * Hide survey when submitted
 */
sakalli.elements.show_questionnaire_QMARK_ = (function sakalli$elements$show_questionnaire_QMARK_(app_state){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,sakalli.elements.quest_QMARK_(app_state)], null)], null);
});
/**
 * Show template service name if no service defined asd
 *   get element
 */
sakalli.elements.show_service = (function sakalli$elements$show_service(app_state){
var s = cljs.core.cst$kw$service.cljs$core$IFn$_invoke$arity$1(app_state);
if((!((s == null)))){
return s;
} else {
return "Test Service";

}
});
