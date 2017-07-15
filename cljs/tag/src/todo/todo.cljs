(ns todo.todo
	(:require
		[clojure.string :as str]
		[tiltontec.cell.core
             :refer-macros [c? c?+ c-reset-next! c?once c?n]
             :refer [c-in c-reset! make-cell make-c-formula]]
		[tiltontec.model.core :as md :refer [make md-get md-reset!]]
		[todo.util :as util :refer [pln uuidv4 now map-to-json]]
		[todo.io :refer [io-upsert io-read]]))

;;; --- todo persistence -----------------------------------

(def TODO_LS_PREFIX "TagCLJS.TodoMVC.")

;; (pln :keys!!! (js->clj (js-keys (.-localStorage js/window))))
;;; (pln :keys2 (.keys js/Object (.-localStorage js/window)))

(defn todo-to-map [todo]		
	(into {}
	 (for [k [:dbKey :created :title :completed :deleted]]
		[k (md-get todo k)])))

(defn todo-to-json [todo]
	(map-to-json
		(todo-to-map todo)))

(defn todo-upsert [todo]
	(io-upsert (:dbKey @todo) 
		(.stringify js/JSON
			(todo-to-json todo))))

(defn make-todo [islots]
	(let [net-slots (merge
						{:type ::todo
						:dbKey (str TODO_LS_PREFIX (uuidv4))
						:created (now)}
						islots
						{:title (c-in (:title islots))
						 :completed (c-in (:competed islots))
						 :deleted (or (:deleted islots) (c-in nil))})
		todo (apply md/make (flatten (into [] net-slots)))]
		(pln :todo-new (todo-to-map todo))
		(when-not (:dbKey islots)
			;; this is not being instantiated from localStorage
			(pln :upsert-new!! (:dbKey @todo))
			(todo-upsert todo))
		todo))

(defn todo-from-json [json]
	(make-todo (json-to-map json)))

(defn todo-load [dbKey]
	(todo-from-json
		(.parse js/JSON
			(io-read dbKey))))

;obsTodoChange ( slot, todo, newv, priorv, c) {
;		// Here is object persistence post-creation
;		// flow:OUT no matter what changed, re-write the whole thing...
;		todo.store(); // OUT
;	}
;
;	// flow:GLUE Tell Cells about our observer
;	slotObserverResolve(slot) {
;		// in identifying to the Cells engine which slot observer to use, we
;		// ignore which slot changed since localStorage does not support that granularity.
;		return Todo.obsTodoChange }

(defn load-all-todos []
	(md/make ::todo-list
		;; todo: sort by created
		:items-raw (map todo-load (io-find TODO_LS_PREFIX))
		:items (c? (remove #(md-get % :deleted) (md-get me :items-raw)))))


(defn todo-delete [todo]
	(md-reset! todo :deleted (now)))


 ;   (io-clear-storage)
;	(io-upsert "test.x" "xxxxxx")
;	(io-upsert "text.x" "yyyyyy")
;
;	(pln :all (io-all-keys))
;	(pln :test (io-find "test."))
;	(io-truncate "text.")
;	(pln :all (io-all-keys))
