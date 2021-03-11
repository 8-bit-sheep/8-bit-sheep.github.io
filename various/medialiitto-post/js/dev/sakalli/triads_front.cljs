(ns ^:figwheel-hooks sakalli.triads-front
  (:require [reagent.dom :as r.dom]
            [sakalli.page :as page]))

(enable-console-print!)



(defn mount
  []
  (r.dom/render [page/page] (js/document.getElementById "root")))






(defn ^:after-load re-render [] (mount))

(defonce start-up (do (mount) true))


