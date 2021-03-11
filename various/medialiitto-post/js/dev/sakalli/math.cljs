(ns sakalli.math)

(defn abs "Cause i can..." [n] (max n (- n)))

(defn tri-height
  "Calculate the triangle height based on the side length"
  [size]
  (Math/sqrt (- (* size size) (* (/ size 2) (/ size 2)))))


(defn tri-path-values
  "Generate SVG path coordinates based on triangle size (side lenght)"
  [size]
  (let [tx (* (/ size 2))
        ty 0
        lx (* size 0)
        ly (tri-height size)
        rx (* size 1)
        ry (tri-height size)]
    [tx ty lx ly rx ry nil]))


(defn tri-element-size
  "Calculate size for element containing triangle"
  [size]
  {:width (* (Math/round size) 1) :height (Math/ceil (* size .95))})


(defn get-slope-intercept
  "Calculate line slope and incercept from two points
  line: y = mx + b. Needed for distance calculations."
  [[x1 y1 x2 y2]]
  (let [m (/ (- y2 y1) (- x2 x1)) b (- y1 (* m x1))] [m b]))

(defn distance
  "Calculate point distance from the triad side
  pos  X Y
  line y = mx + b

  mx + -1y + b = 0
  Ax +  By + C = 0
  
       |AX + BY + C|
  d = ---------------
      sqrt(A^2 + B^2)"
  [[x y] m b size]
  (int
   (*
    100
    (/ (abs (+ (* m x) (* -1 y) b)) (Math/sqrt (+ (* m m) 1)) size))))


(defn get-distances
  "To quantify the three dimensions / corner
  values within the triad."
  [pos [tx ty lx ly rx ry]]
  (let [[x y]   pos
        [m1 b1] (get-slope-intercept [tx ty lx ly])
        [m2 b2] (get-slope-intercept [tx ty rx ry])
        m3      0
        b3      ly]
    [(/ (distance pos m1 b1 ly) 1) (/ (distance pos m2 b2 ly) 1)
     (/ (distance pos m3 b3 ly) 1)]))

