(ns matrix.core
  (:require [clojure.browser.repl :as repl]
            [todo.core :as todo]))

(enable-console-print!)

(let [doc js/document
      ;body (.-body doc)
      root (.getElementById doc "tagroot")
      landing (todo/landing-page)]

  ;; (println :landing landing)
  (println :root root)
  (set! (.-innerHTML root) landing))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
