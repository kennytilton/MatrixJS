(ns tag.core
  (:require
    [clojure.browser.repl :as repl]
    [todo.core :refer [landing]]))

;; (defonce conn
;;   (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(println "Hello tag world!")

(let [doc js/document
      body (.-body doc)
      root (.getElementById doc "tagroot")
      landing (landing)]
  (println :cool doc body)
  (println :landing landing)
  (set! (.-innerHTML root) landing))


