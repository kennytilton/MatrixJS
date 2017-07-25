(ns tiltontec.tag.gen
  (:require [tiltontec.model.core :refer [make] :as md]
            [#?(:cljs cljs.pprint :clj clojure.pprint) :refer [pprint]]))

(def on-event-attr-template
  "(function () { ~a(event~{,~s~})})()")

(defmacro on-evt [fname & cb-args]
  `(let [fn-name# (str/replace
                    (str/replace (subs (str (resolve ~fname)) 2)
                      \- \_) \/ \.)]
      ;;;(println :on-evt-calling fn-name# (string? fn-name#))
      (pp/cl-format nil on-event-attr-template fn-name# (list ~@cb-args))))

(def tag-dom-sid (atom -1))

(def id-js (atom {}))

(defn dom-tag [dom]
  (let [tag (get @id-js (.-id dom))]
    ;;(println :tags (keys @id-js))
    (assert tag (str "dom-tag did not find js for id " (.-id dom)
                  " of dom " dom))
    tag))

(defn make-tag [tag attrs c?kids]
  ;; (println :mtag (count attrs))

  (let [dom-sid (swap! tag-dom-sid inc)
        js-obj (apply make 
                :type :tiltontec.tag.html/tag
                :tag tag
                (conj attrs
                  :id dom-sid
                  :kids c?kids))]
      ;; (println :storing-id-js dom-sid tag)
      (swap! id-js assoc (str dom-sid) js-obj)
      js-obj))
  

(defmacro deftag [tag]
  (let [kids-sym (gensym "kids")
        tag-name (str tag)
        attrs-sym (gensym "attrs")]
  `(defmacro ~tag [[& ~attrs-sym] & ~kids-sym]
    `(tiltontec.tag.gen/make-tag ~~tag-name [~@~attrs-sym]
      (tiltontec.model.core/c?kids ~@~kids-sym)))))

(declare section  label header footer h1 input p span a img ul li div button)

(deftag section)
(deftag header)
(deftag span)
(deftag footer)
(deftag h1)
(deftag button)
(deftag div)
(deftag label)
(deftag img)
(deftag input)
(deftag p)
(deftag a)
(deftag ul)
(deftag li)

