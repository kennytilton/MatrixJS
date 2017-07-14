(ns tag.html
  (:require
    [clojure.string :as str]
    [cljs.pprint :as pp]
    [tiltontec.model.core
             :refer-macros [the-kids mdv!]
             :refer [md-get  fm! make md-reset!]
             :as md]
    ))

(declare to-attrs)

(defn toHtml [me]
  (println :tohtml-sees me (type me))
  (if (string? me) me
  (let [h (pp/cl-format nil "<~a ~a>~{~a~}</~0@*~a>"
                (:tag @me) (toAttrs (:attrs @me))
                (map toHtml (md-get me :kids)))]
      (println :genned h)
      h)))

(defn toAttrs [attrs]
  (println :toattrs (partition 2 attrs))
  (let [j (str/join " "
            (map (fn [[k v]]
                   (pp/cl-format nil "~a='~a'" (name k) v))
                 (partition 2 attrs)))]
      (println :jttrs j)
      (or j "")))
