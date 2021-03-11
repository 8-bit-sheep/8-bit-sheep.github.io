(ns sakalli.submit
  (:require [cemerick.url :as url]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [sakalli.configuration :as conf])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn make-remote-call
  [endpoint]
  (println endpoint)
  (go (let [response (<! (http/get endpoint
                                   {:with-credentials? false}))]
        (js/console.log (:body response))))
  (js/console.log endpoint))


(defn submitted?
  "Helper function for validation function.
  False if a field is empty"
  [k x]
  ((complement nil?) (k x)))



(defn validate-submission
  "Simple validation to allow posting an entry,
  goes through all required fields"
  [submission]
  (and (reduce #(and %1 %2)
               (map #(submitted? %1 submission)
                    [:micronarrative1 :micronarrative2 :triad-values1
                     :triad-values2 :birthyear :fave-app :gender
                     :micronarrative1]))
       (not (= (:birthyear submission)
               (second (:gender-options conf/texts))))
       (not (= (:gender submission)
               (second (:gender-options conf/texts))))))


(defn format-entry
  [entry]
  (let [[t1v1 t1v2 t1v3] (:triad-values1 entry)
        [t2v1 t2v2 t2v3] (:triad-values2 entry)]
    (assoc entry
           :triad1value1 t1v1
           :triad1value2 t1v2
           :triad1value3 t1v3
           :triad2value1 t2v1
           :triad2value2 t2v2
           :triad2value3 t2v3)))







