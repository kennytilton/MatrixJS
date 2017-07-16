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

(defmacro input [[& attrs] & kids]
  `(tiltontec.model.core/make
     :tag "input"
     :attrs [~@attrs]
     :kids (tiltontec.model.core/c?kids ~@kids)))

(defmacro label [[& attrs] & kids]
  `(tiltontec.model.core/make
     :tag "label"
     :attrs [~@attrs]
     :kids (tiltontec.model.core/c?kids ~@kids)))

(defmacro footer [[& attrs] & kids]
  `(tiltontec.model.core/make
     :tag "footer"
     :attrs [~@attrs]
     :kids (tiltontec.model.core/c?kids ~@kids)))

(defmacro p [[& attrs] & kids]
  `(tiltontec.model.core/make
     :tag "p"
     :attrs [~@attrs]
     :kids (tiltontec.model.core/c?kids ~@kids)))


(defmacro ul [[& attrs] & kids]
  `(tiltontec.model.core/make
     :tag "ul"
     :attrs [~@attrs]
     :kids (tiltontec.model.core/c?kids ~@kids)))


(defmacro li [[& attrs] & kids]
  `(tiltontec.model.core/make
     :tag "li"
     :attrs [~@attrs]
     :kids (tiltontec.model.core/c?kids ~@kids)))

(defmacro div [[& attrs] & kids]
  `(tiltontec.model.core/make
     :tag "div"
     :attrs [~@attrs]
     :kids (tiltontec.model.core/c?kids ~@kids)))
     
(defmacro button [[& attrs] & kids]
  `(tiltontec.model.core/make
     :tag "button"
     :attrs [~@attrs]
     :kids (tiltontec.model.core/c?kids ~@kids)))

(defmacro h1 [[& attrs] & kids]
  `(tiltontec.model.core/make
     :tag "h1"
     :attrs [~@attrs]
     :kids (tiltontec.model.core/c?kids ~@kids)))

