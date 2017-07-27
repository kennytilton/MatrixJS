(ns matrix.core
  (:require [clojure.browser.repl :as repl]
            [todo.core :as todo]))

(enable-console-print!)

(declare landing-page)

(let [doc js/document
      ;body (.-body doc)
      root (.getElementById doc "tagroot")
      landing (todo/landing-page)]
  ;(println :landing landing)
  (set! (.-innerHTML root) landing))
