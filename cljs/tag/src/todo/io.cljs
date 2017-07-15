(ns todo.io
	(:require
		[clojure.string :as str]
		[tiltontec.cell.core
             :refer-macros [c? c?+ c-reset-next! c?once c?n]
             :refer [c-in c-reset! make-cell make-c-formula]]
		[tiltontec.model.core :as md :refer [make md-get md-reset!]]
		[todo.util :as util :refer [pln uuidv4 now]]
		))

;;; --- localStorage io implementation --------------------------------

(defn io-upsert [key val]
  (pln :io-upsert key val)
  (.setItem (.-localStorage js/window) key val))

(defn io-read [key]
  (let [raw (.getItem (.-localStorage js/window) key)]
  	(pln :raw-read key raw)
  	raw))

(defn io-delete [key val]
	;;  (pln :deleting key)
  (.removeItem (.-localStorage js/window) key))

(defn io-clear-storage []
	(.clear (.-localStorage js/window)))

(defn io-all-keys []
  (.keys js/Object (.-localStorage js/window)))

(defn io-find [key-prefix]
  (loop [keys (io-all-keys)
         found []]
    (if (seq keys)
      (recur (rest keys) 
      	(if (str/starts-with? (first keys) key-prefix)
      		(conj found (first keys))
      		found))
      found)))

(defn io-truncate [key-prefix]
  ;;(pln :trunc key-prefix)
  (doall (map io-delete (io-find key-prefix))))

