(ns sakalli.elements
  (:require [sakalli.submit :as submit]
            [sakalli.configuration :as conf]))


(defn micronarrative-element
  [k]
  [:free-form/field
   {:type        :textarea
    :key         k
    :label       (k conf/texts)
    :placeholder (:micro-placeholder conf/texts)}])


(defn favorite-app-element
  []
  [[:h3 (:favorite-service-question conf/texts)]
   [:free-form/field
    {:type        :text
     :key         :fave-app
     :label       (:application-label conf/texts)
     :placeholder (:application-placeholder conf/texts)}]])


(defn other-feedback-element
  []
  [:free-form/field
   {:type        :textarea
    :key         :other-feedback
    :label       (:free conf/texts)
    :placeholder (:free-placeholder conf/texts)}])


(defn render-years-list
  []
  (concat (list :choose (second (:gender-options conf/texts)))
          (interleave (map #(keyword (str %)) (range 2015 1900 -1))
                      (map str (range 2015 1900 -1)))))


(defn birth-year-element
  []
  [:free-form/field
   {:type    :select
    :label   (:birthyear-label conf/texts)
    :key     :birthyear
    :options (render-years-list)}])


(defn company-element
  []
  [:free-form/field
   {:type    :select
    :label   (:company-label conf/texts)
    :key     :company
    :options (:company-options conf/texts)}])

(defn gender-element
  []
  [:free-form/field
   {:type    :select
    :label   (:gender-label conf/texts)
    :key     :gender
    :options (:gender-options conf/texts)}])

(defn name-element
  []
  [:free-form/field
   {:type :text :label (:name-label conf/texts) :key :name}])

(defn validation-error-element
  [app-state]
  [:p {:style {:color "red"}}
   (cond (:validation-error app-state) (:validation-error conf/texts)
         :else                         "")])





(defn thank-you-element
  [app-state]
  [:div
   {:style {:display (cond (:submitted app-state) "block"
                           :else                  "none")}}
   [:h3 (:thank-you conf/texts)]])


(defn quest?
  "Helper function to hide survey"
  [app-state]
  (cond (:submitted app-state) "none"
        :else                  "block"))

(defn show-questionnaire?
  "Hide survey when submitted"
  [app-state]
  {:style {:display (quest? app-state)}})

(defn show-service
  "Show template service name if no service defined asd
  get element"
  [app-state]
  (let [s (:service app-state)]
    (cond (not (nil? s)) s
          :else          "Test Service")))
