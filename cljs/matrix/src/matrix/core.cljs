(ns matrix.core
  (:require [clojure.browser.repl :as repl]
            [todo.core :as todo]))

(enable-console-print!)

(declare landing-page)

(let [doc js/document
      ;body (.-body doc)
      root (.getElementById doc "tagroot")
      landing (todo/landing-page)]
  ; (println :landing? landing)
  ;   (println #js {:coolio #(console.log("bam "+event))})
  (set! (.-innerHTML root) landing))
