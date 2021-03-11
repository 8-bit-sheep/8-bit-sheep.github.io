(ns sakalli.triad
  (:require [sakalli.math :as math]))

(defn tri-path-string
  "Generate path string for svg"
  [coll]
  (let [svg-path ["M" " " " L" " " " L" " " " Z"]]
    (apply str (interleave svg-path coll))))

(defn build-triad
  [[x y] visible size attrs labels]
  (let [[tx _ ly _ _ _] (math/tri-path-values size)]
    [:div.triangle [:p.tri-labels-top (:triad-top labels)]
     [:svg.svg-style
      (merge-with merge
                  attrs
                  {:width  (:width (math/tri-element-size size))
                   :height (:height (math/tri-element-size size))})
      [:path {:d (tri-path-string (math/tri-path-values size))}]
      [:g {:opacity (if (true? visible) 100 0)}
       [:circle {:id "point1" :cx x :cy y :r 3}]]]
     [:div.tri-labels-bottom [:div (:triad-left labels)] [:div]
      [:div (:triad-right labels)]] [:hr]]))

