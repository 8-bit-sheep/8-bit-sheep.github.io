(ns sakalli.page
  (:require [cemerick.url :as url]
            [free-form.core :as free-form]
            [free-form.bootstrap-3]
            [reagent.core :as reagent :refer [atom]]
            [sakalli.configuration :as conf]
            [sakalli.elements :as element]
            [sakalli.intro :as intro]
            [sakalli.point :as point]
            [sakalli.math :as math]
            [sakalli.submit :as submit]
            [sakalli.triad :refer [tri-path-string]]))


(def data
  (atom
   {:service           (vals (:query (url/url (-> js/window
                                                  .-location
                                                  .-href))))
    :submitted         false
    :tri-element-width (min 250
                            (int (/ (.-innerWidth js/window) 3)))}))


(defn window-resize-handler
  "Updating width in order to enable responsivity of the triangle"
  [event]
  (let [width (min 250 (int (/ (.-innerWidth js/window) 3)))]
    (swap! data assoc :tri-element-width width)))


(defn submit
  "Data collected 'serverless', submits to Google Docs"
  [entry]
  (cond true ;;(submit/validate-submission entry)
        (do (submit/make-remote-call
             (str (assoc (url/url (:url conf/conf))
                         :query
                         (submit/format-entry entry))))
            (swap! data assoc :submitted true)
            (println "submitted"))
        :else (swap! data assoc :validation-error true)))

(defn submit-button
  [app-state]
  [:button.btn.btn-primary
   {:style    {:fill "black"}
    :type     :button
    :on-click (fn [_] (submit app-state))} (:send-label conf/texts)])

;; * The recipe
;; 1. Write purpose statement
;; 2. Define the signature
;; 3. Write examples
;; 4. Write the template
;; 5. Write the code
;; 6. Debug the code

(defn make-key
  "Constructs a key for saving data to state"
  [keyname id]
  (keyword (str keyname id)))

(defn on-click-callback
  "Constructs a callback that updates the point in triad when clicked"
  [size id e]
  (apply swap!
         data
         point/update-point
         e
         size
         (map #(make-key % id) ["position" "triad-values" ""])))



(defn new-build-triad
  "Builds the hiccup for a triad"
  [app-state triad-conf]
  (let [id                 (:id triad-conf)
        triad-size         (:tri-element-width app-state)
        element-dimensions (math/tri-element-size triad-size)
        callback           {:on-click (partial on-click-callback
                                               triad-size
                                               id)}
        style              (merge-with merge
                                       callback
                                       {:width  (:width
                                                 element-dimensions)
                                        :height (:height
                                                 element-dimensions)})
        svg-path           (tri-path-string (math/tri-path-values
                                             triad-size))
        point-selected?    ((make-key "" id) app-state)
        [x y]              ((make-key "position" id) app-state)
        ;; labels
        question-label     (:question triad-conf)
        top-label          (:triad-top triad-conf)
        left-label         (:triad-left triad-conf)
        right-label        (:triad-right triad-conf)
        narrative          (:narrative triad-conf)]
    (concat
     [[:div narrative] ^{:key question-label} [:label question-label]
      ^{:key (str question-label "-trd")}
      [:div
       [:div.triangle [:p.tri-labels-top top-label]
        [:svg.svg-style style [:path {:d svg-path}]
         [:g {:opacity (if (true? point-selected?) 100 0)}
          [:circle {:id "point1" :cx x :cy y :r 3}]]]
        [:div.tri-labels-bottom [:div left-label] [:div]
         [:div right-label]] [:hr]]]])))





(defn build-triad
  "Outputs the triad hiccup based on input
  signature: map with following keys
             `:selected-position`"
  ;;[app-state labels triad-id onclick-callback]
  [{:keys [selected-position point-selected? triad-width
           on-click-callback triad-corner-labels]}]
  (let [[x y] selected-position]
    [:div.triangle
     [:p.tri-labels-top (:triad-top triad-corner-labels)]
     [:svg.svg-style
      (merge-with
       merge
       on-click-callback
       {:width  (:width (math/tri-element-size triad-width))
        :height (:height (math/tri-element-size triad-width))})
      [:path
       {:d (tri-path-string (math/tri-path-values triad-width))}]
      [:g {:opacity (if (true? point-selected?) 100 0)}
       [:circle {:id "point1" :cx x :cy y :r 3}]]]
     [:div.tri-labels-bottom [:div (:triad-left triad-corner-labels)]
      [:div] [:div (:triad-right triad-corner-labels)]] [:hr]]))


(defn triad-with-label
  "render the triad hiccup
   signature: "
  [app-state triad-size question-key seleced-pos-key
   point-selected?-key triad-key labels]
  [^{:key (question-key labels)} [:label (question-key labels)]
   ^{:key (str (question-key labels) "-trd")}
   [:div
    [build-triad
     {:selected-position   (seleced-pos-key app-state)
      :point-selected?     (triad-key app-state)
      :triad-width         triad-size
      :on-click-callback   {:on-click (fn [e]
                                        (swap! data point/update-point
                                          e
                                          triad-size
                                          seleced-pos-key
                                          point-selected?-key
                                          triad-key))}
      :triad-corner-labels labels}]]])



(defn triads-conf
  "get the triads from configureation file"
  [app-state]
  (get-in conf/texts
          [:triads
           (-> app-state
               :service
               first
               keyword)]))


(defn triad-map
  "render a map with triad elements"
  [app-state width]
  (map #(triad-with-label app-state
                          width
                          :question
                          (keyword (str "position" (:id %)))
                          (keyword (str "triad-values" (:id %)))
                          (keyword (str "triad" (:id %)))
                          %)
       (triads-conf app-state)))

(defn nth-triad
  "select the triad hiccup per index"
  [n app-state width]
  (-> app-state
      (triad-map width)
      (nth n)
      concat))

;; TODO need to refactor these to simplify them. `triad-by-idx` does
;; not work currently
(defn triad-by-idx
  "get the triad per index"
  [n app-state width]
  (-> app-state
      (triad-map width)
      (->> (some (fn [m] (when (= (:id m) n) m))))
      concat))

(defn page
  []
  (let [app-state @data
        width     (:tri-element-width app-state)]
    [:div.container [:h1.main-header (:main-header conf/texts)]
     [:div.plain-form (element/show-questionnaire? app-state) [:hr]
      [:h4 (:service conf/texts)] [:h2 (:service-header conf/texts)]
      [free-form/form app-state (:-errors app-state)
       (fn [keys value] (swap! data #(assoc-in % keys value)))
       :bootstrap-3
       [:form {:noValidate false}
        [:div.col-sm-offset-2.col-sm-10
         {:free-form/error-message {:key :-general}} [:p.text-danger]]
        [:p
         "Alla edellisessä työpajassa kehitetyt ideat. Lue idean kuvaus läpi ja arvioi ehdotukset triadien avulla."]
        [:p
         "
         Toimi jokaisen triadin kohdalla seuraavasti: Aseta
         piste lähelle sitä kulmaa, joka on sinusta tärkein. Mikäli
         kaksi kulmaa ovat yhtä tärkeitä, aseta piste näiden
         puoliväliin, jos taas koet kaikki yhtä relevanteiksi,
         aseta piste silloin kolmion keskelle."]
        [:hr]
        (map (partial new-build-triad app-state)
             (:medialiitto conf/triads))
        (element/validation-error-element app-state)
        (element/name-element) (element/company-element)
        (element/other-feedback-element) (submit-button app-state)]]]
     (element/thank-you-element app-state) [:hr]
     (comment [:code "@data:" app-state])
     (.addEventListener js/window "resize" window-resize-handler)]))



