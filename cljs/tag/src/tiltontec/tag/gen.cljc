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

#_
(defmacro make-gens [& tags]
  (println (type (first tags)))
  `(do ~@(for [tagsym tags]
          `(defmacro ~tagsym [[& ~'attrs] & ~'kids]
            `(defmacro section [[& attrs] & kids]
  `(tiltontec.tag.gen/make-tag "section" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))))))

;; (println :sectcro (macroexpand-1 '(make-gens section)))

(def tag-dom-sid (atom -1))

;; dodo stop making kids formula when there are no kids

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
        attrs-sym (gensym "attrs")]
  `(defmacro ~tag [[& ~attrs-sym] & ~kids-sym]
    `(tiltontec.tag.gen/make-tag ~(str '~tag) [~@~attrs-sym]
      (tiltontec.model.core/c?kids ~@~kids-sym)))))

;(deftag section)
;(deftag label)
;(deftag header)

(defmacro deftags [& tags]
  `(do ~@(for [tag tags]
           `(deftag ,tag))))

(deftags section label header h1 footer input p
         a ul li div)
