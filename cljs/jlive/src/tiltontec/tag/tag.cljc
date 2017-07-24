(ns tiltontec.tag.tag
  (:require
    [#?(:cljs cljs.pprint :clj clojure.pprint) :refer [pprint]]
    [tiltontec.tag.gen :refer [deftag deftags]]))


(deftag section)
(deftag span)
(deftag footer)
(deftag div)
(deftag label)
(deftag img)
(deftag input)
(deftag p)
(deftag a)
(deftag ul)
(deftag li)
