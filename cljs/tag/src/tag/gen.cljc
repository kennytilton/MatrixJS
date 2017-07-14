(ns tag.gen)

;; todo write a macro to generate these

(defmacro section [[& attrs] & kids]
  `(tiltontec.model.core/make
     :tag "section"
     :attrs [~@attrs]
     :kids (tiltontec.model.core/c?kids ~@kids)))

(defmacro header [[& attrs] & kids]
  `(tiltontec.model.core/make
     :tag "header"
     :attrs [~@attrs]
     :kids (tiltontec.model.core/c?kids ~@kids)))

(defmacro h1 [[& attrs] & kids]
  `(tiltontec.model.core/make
     :tag "h1"
     :attrs [~@attrs]
     :kids (tiltontec.model.core/c?kids ~@kids)))

