(ns todo.todo
	(:require
		[clojure.string :as str]
		[tiltontec.cell.core
             :refer-macros [c? c?+ c-reset-next! c?once c?n]
             :refer [c-in c-reset! make-cell make-c-formula]]
		[tiltontec.model.core :as md :refer [make md-get md-reset!]]
		[todo.util :as util :refer [pln uuidv4 now map-to-json json-to-map]]
		[todo.io :refer [io-upsert io-read io-find]]))

(def TODO_LS_PREFIX "TagCLJS.TodoMVC.")

(defn todo-to-map [todo]		
	(into {} (for [k [:db-key :created :title :completed :deleted]]
				[k (md-get todo k)])))

(defn todo-to-json [todo]
	(map-to-json (todo-to-map todo)))

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
		;(pln :islots islots)
		;(pln :netslots!!!!! net-slots)
		;(pln :title (:title @todo))
		;(pln :todo-new (todo-to-map todo))
		(when-not (:db-key islots)
			;; this is not being instantiated from localStorage
			;(pln :upsert-new!! (:db-key @todo))
			(todo-upsert todo))
		todo))

(defn todo-from-json [json]
	;;(pln :td-from-json json)
	(make-todo (json-to-map json)))

(defn todo-load [db-key]
	(todo-from-json
		(.parse js/JSON
			(io-read db-key))))

(defn load-all-todos []
	(md/make ::todo-list
		;; todo: sort by created
		:items-raw (c-in (map todo-load (io-find TODO_LS_PREFIX)))
		:items (c? (pln :computing-items!!!!!!)
					(doall
						(remove #(md-get % :deleted) (md-get me :items-raw))))))

(defn todo-delete [todo]
	(md-reset! todo :deleted (now)))

