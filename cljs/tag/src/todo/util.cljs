(ns todo.util
	(:require
   [clojure.string :as str]
   [cognitect.transit :as trx]))

;;; --- some utilities --------------------------------------------

(defn pln [& x]
  (apply println x))

(defn now []
  (.getTime (js/Date.)))

(defn uuidv4 []
  (letfn [(hex [] (.toString (rand-int 16) 16))]
    (let [rhex (.toString (bit-or 0x8 (bit-and 0x3 (rand-int 16))) 16)]
      (uuid
        (str (hex) (hex) (hex) (hex)
             (hex) (hex) (hex) (hex) "-"
             (hex) (hex) (hex) (hex) "-"
             "4"   (hex) (hex) (hex) "-"
             rhex  (hex) (hex) (hex) "-"
             (hex) (hex) (hex) (hex)
             (hex) (hex) (hex) (hex)
             (hex) (hex) (hex) (hex))))))

(defn map-to-json [map]
  (trx/write (trx/writer :json) map))

(defn json-to-map [json]
  (trx/read (trx/reader :json) json))

