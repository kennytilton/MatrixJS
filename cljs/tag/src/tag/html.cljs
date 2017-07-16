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
  ;;(println :tohtml-sees me (type me))
  (if (string? me) me
  (let [h (pp/cl-format nil "<~a ~a>~{~a~}</~0@*~a>"
                (:tag @me) (to-attrs (:attrs @me))
                (map toHtml (md-get me :kids)))]
      ;;(println :genned h)
      h)))

(defn to-attrs [attrs]
  ;;(println :toattrs (partition 2 attrs))
  (let [j (str/join " "
            (map (fn [[k v]]
                  (println :k k :v v)
                  (if (some #{k} [:hidden])
                   (do (println :hidden!!!!!!!!!! v (nil? v))
                      (if v (name k) ""))
                   (pp/cl-format nil "~a='~a'" (name k) v)))
                 (partition 2 attrs)))]
      (println :jttrs j)
      (or j "")))
