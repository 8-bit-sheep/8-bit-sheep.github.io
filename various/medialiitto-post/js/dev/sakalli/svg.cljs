(ns sakalli.svg)

(defn tri-path-string
  "Generate path string for svg"
  [coll]
  (let [svg-path ["M" " " " L" " " " L" " " " Z"]]
    (apply str (interleave svg-path coll))))
