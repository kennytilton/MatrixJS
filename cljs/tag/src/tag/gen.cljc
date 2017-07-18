(ns tag.gen
  (:require [tiltontec.model.core :refer [make] :as md]))

#_
(defmacro make-gens [& tags]
  (println (type (first tags)))
  `(do ~@(for [tagsym tags]
          `(defmacro ~tagsym [[& ~'attrs] & ~'kids]
            `(defmacro section [[& attrs] & kids]
  `(tag.gen/make-tag "section" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))))))

;; (println :sectcro (macroexpand-1 '(make-gens section)))

(def tag-dom-sid (atom -1))

;; dodo stop making kids formula when there are no kids

(defn make-tag [tag attrs c?kids]
  ;; (println :mtag (count attrs))

  (let [dom-sid (swap! tag-dom-sid inc)]
    (apply make 
      :type :tag.html/tag
      :tag tag
      (conj attrs
       :id dom-sid
       :kids c?kids))))

(defmacro section [[& attrs] & kids]
  `(tag.gen/make-tag "section" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

(defmacro label [[& attrs] & kids]
  `(tag.gen/make-tag "label" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

(defmacro header [[& attrs] & kids]
  `(tag.gen/make-tag "header" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

(defmacro h1 [[& attrs] & kids]
  `(tag.gen/make-tag "h1" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

(defmacro input [[& attrs] & kids]
  `(tag.gen/make-tag "input" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

(defmacro footer [[& attrs] & kids]
  `(tag.gen/make-tag "footer" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

(defmacro p [[& attrs] & kids]
  `(tag.gen/make-tag "p" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

(defmacro a [[& attrs] & kids]
  `(tag.gen/make-tag "a" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

(defmacro ul [[& attrs] & kids]
  `(tag.gen/make-tag "ul" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

(defmacro li [[& attrs] & kids]
  `(tag.gen/make-tag "li" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

(defmacro div [[& attrs] & kids]
  `(tag.gen/make-tag "div" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

(defmacro span [[& attrs] & kids]
  `(tag.gen/make-tag "span" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

(defmacro button [[& attrs] & kids]
  `(tag.gen/make-tag "button" [~@attrs]
     (tiltontec.model.core/c?kids ~@kids)))

