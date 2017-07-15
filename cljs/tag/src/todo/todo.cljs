(ns todo.todo
	(:require
		[clojure.string :as str]
		[tiltontec.cell.core
             :refer-macros [c? c?+ c-reset-next! c?once c?n]
             :refer [c-in c-reset! make-cell make-c-formula]]
		[tiltontec.model.core :as md :refer [make md-get md-reset!]]
		[todo.util :as util :refer [pln uuidv4 now map-to-json json-to-map]]
		[todo.io :refer [io-upsert io-read io-find]]))

;;; +++ saves and reloads
;;; +++ save two and reload
;;; mark completed and see saved
;;; load all into parent
;;; add new and see added to parent
;;; mark deleted:
;;; -- confirm saved
;;; -- confirm items reduced
;;; create watcher instance with c? for count
;;; -- confirm reflects add new and delete

;;; --- todo persistence -----------------------------------

(def TODO_LS_PREFIX "TagCLJS.TodoMVC.")

;; (pln :keys!!! (js->clj (js-keys (.-localStorage js/window))))
;;; (pln :keys2 (.keys js/Object (.-localStorage js/window)))

(defn todo-to-map [todo]		
	(into {}
	 (for [k [:db-key :created :title :completed :deleted]]
		[k (md-get todo k)])))

(defn todo-to-json [todo]
	(map-to-json
		(todo-to-map todo)))

(defn todo-upsert [todo]
	(io-upsert (:db-key @todo) 
		(.stringify js/JSON
			(todo-to-json todo))))

(defn make-todo [islots]
	(let [net-slots (merge
						{:type ::todo
						:db-key (str TODO_LS_PREFIX (uuidv4))
						:created (now)}
						islots
						{:title (c-in (:title islots))
						 :completed (c-in (:completed islots))
						 :deleted (or (:deleted islots) (c-in nil))})
		todo (apply md/make (flatten (into [] net-slots)))]
		(pln :islots islots)
		(pln :netslots!!!!! net-slots)
		;(pln :title (:title @todo))
		;(pln :todo-new (todo-to-map todo))
		(when-not (:db-key islots)
			;; this is not being instantiated from localStorage
			;(pln :upsert-new!! (:db-key @todo))
			(todo-upsert todo))
		todo))

(defn todo-from-json [json]
	(pln :td-from-json json)
	(make-todo (json-to-map json)))

(defn todo-load [db-key]
	(todo-from-json
		(.parse js/JSON
			(io-read db-key))))

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
