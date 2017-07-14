(ns todo.core
  (:require [tiltontec.model.core :refer [make]]
            [tag.html :refer [toHtml]]
            [tag.gen :refer-macros [section header h1]]))

(defn landing []
  ;;"<h2>bam21</h2>"

  (let [bits [(section (:class "todoapp")
                       (header (:class "header")
                               (h1 () "todos")))]]
    ;;"<h2>bam234</h2>"
    (apply str (map toHtml bits))
    ))