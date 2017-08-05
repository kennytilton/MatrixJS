(ns tiltontec.tag.gen
  (:require [tiltontec.model.core :refer [make] :as md]
            [#?(:cljs cljs.pprint :clj clojure.pprint) :refer [pprint]]))

(def on-event-attr-template
  "(function () { ~a(event~{,~s~})})()")

(defmacro on-evt! [fname & cb-args]
  `(let [fn-name# (str/replace
                    (str/replace (str '~fname)
                                 \- \_) \/ \.)]

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

(defn make-tagx [tag attrs c?kids]
      (println :mtagx attrs )

      (let [dom-sid (swap! tag-dom-sid inc)
            args (conj (vec (apply concat (seq attrs)))
                       :id dom-sid
                       :kids c?kids)
            js-obj (apply make
                          :type :tiltontec.tag.html/tag
                          :tag tag
                          (conj (vec (apply concat (seq attrs)))
                                :id dom-sid
                                :kids c?kids))]

           (println :mtagx-attrs tag attrs)
           (println :mtagx-vec (vec (apply concat (seq attrs))))
           (println :mtagx-args tag args)
           (swap! id-js assoc (str dom-sid) js-obj)
           js-obj))

(defmacro deftagx [tag]
          (let [kids-sym (gensym "kids")
                tag-name (str tag)
                attrs-sym (gensym "attrs")]
     `(defmacro ~tag [~attrs-sym & ~kids-sym]

          `(tiltontec.tag.gen/make-tagx ~~tag-name ~~attrs-sym
                                       (tiltontec.model.core/c?kids ~@~kids-sym)))))

(defmacro deftags [& tags]
  `(do ~@(for [tag tags]
           `(deftag ~tag))))

(defmacro deftagxs [& tags]
          `(do ~@(for [tag tags]
                      `(deftagx ~tag))))

;;; This:
(declare sectionx section label header footer h1 input p span a img ul li div button)
(deftagx section )
(deftagxs header footer p h1 input)
;;; ... avoids mistaken/benign warnings from this:
(deftagxs  label  span a img ul li div button)
