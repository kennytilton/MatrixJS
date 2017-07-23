(ns tiltontec.tag.gen
  (:require [tiltontec.model.core :refer [make] :as md]))

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
  

(defmacro section [[& attrs] & kids]
  `(tiltontec.tag.gen/make-tag "section" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

(defmacro label [[& attrs] & kids]
  `(tiltontec.tag.gen/make-tag "label" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

(defmacro header [[& attrs] & kids]
  `(tiltontec.tag.gen/make-tag "header" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

(defmacro h1 [[& attrs] & kids]
  `(tiltontec.tag.gen/make-tag "h1" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

(defmacro input [[& attrs] & kids]
  `(tiltontec.tag.gen/make-tag "input" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

(defmacro footer [[& attrs] & kids]
  `(tiltontec.tag.gen/make-tag "footer" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

(defmacro p [[& attrs] & kids]
  `(tiltontec.tag.gen/make-tag "p" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

(defmacro a [[& attrs] & kids]
  `(tiltontec.tag.gen/make-tag "a" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

(defmacro ul [[& attrs] & kids]
  `(tiltontec.tag.gen/make-tag "ul" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

(defmacro li [[& attrs] & kids]
  `(tiltontec.tag.gen/make-tag "li" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

(defmacro div [[& attrs] & kids]
  `(tiltontec.tag.gen/make-tag "div" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

(defmacro span [[& attrs] & kids]
  `(tiltontec.tag.gen/make-tag "span" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

(defmacro button [[& attrs] & kids]
  `(tiltontec.tag.gen/make-tag "button" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

