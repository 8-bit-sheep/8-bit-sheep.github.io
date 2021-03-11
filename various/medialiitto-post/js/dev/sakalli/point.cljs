(ns sakalli.point
  (:require [sakalli.math :as math]))

(defn position
  "Mouse position in element to calculate triad point entry"
  [e]
  (let [rect (.getBoundingClientRect (.-target e))]
    [(- (.-clientX e) (.-left rect)) (- (.-clientY e) (.-top rect))]))

(defn move-inside
  "Moves the point inside triad when user clicks outside"
  [[x y] [tx ty lx ly rx ry]]
  (let [[m1 b1]    (math/get-slope-intercept [tx ty lx ly])
        [m2 b2]    (math/get-slope-intercept [tx ty rx ry])
        boundry-x1 (/ (- y b1) m1)
        boundry-x2 (/ (- y b2) m2)
        new-x      (cond (< x boundry-x1) boundry-x1
                         (> x boundry-x2) boundry-x2
                         :else            x)
        new-y      (cond (< y ty) ty
                         (> y ry) ry
                         :else    y)]
    [(int new-x) (int new-y)]))

(defn update-point
  "Helper function to update triad values"
  [data e size pos triad-values triad]
  (assoc data
         pos
         (move-inside (position e) (math/tri-path-values size))
         triad-values
         (math/get-distances (move-inside (position e)
                                          (math/tri-path-values size))
                             (math/tri-path-values size))
         triad
         true))

