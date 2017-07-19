(ns todo.todo
	(:require
		[clojure.string :as str]
		[tiltontec.cell.base :refer [unbound ia-type]]
		[tiltontec.cell.core
             :refer-macros [c? c?+ c-reset-next! c?once c?n]
             :refer [c-in c-reset! make-cell make-c-formula]]
        [tiltontec.cell.observer :refer [observe-by-type]]
		[tiltontec.model.core :as md :refer [make md-get md-reset!]]
		[todo.util :as util :refer [pln uuidv4 now map-to-json json-to-map]]
		[todo.io :refer [io-upsert io-read io-find]]))

(def TODO_LS_PREFIX "TagCLJS.TodoMVC.")

(def gTodo (atom nil))

(defn gTodo-items []
 (md-get @gTodo :items))

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
						 :completed (c-in (:completed islots false))
						 :deleted (or (:deleted islots)
						 			 (c-in nil))})
		todo (apply md/make (flatten (into [] net-slots)))]
		(pln :islots islots)
		(pln :netslots!!!!! net-slots)
		;(pln :title (:title @todo))
		;(pln :todo-new (todo-to-map todo))
		(when-not (:db-key islots)
			;; this is not being instantiated from localStorage
			(pln :make-todo-upsert-new!! (:db-key @todo))
			(todo-upsert todo))
		todo))

(defmethod observe-by-type [::todo.todo/todo] [slot me new-val old-val c]
	(when-not (= old-val unbound)
		(pln :todo-obs-upsert!!! (or (ia-type me) me) (:tag @me) slot new-val)
		(todo-upsert me)))

(defn title [me]
	(md-get me :title))
	
(defn completed [me]
	(md-get me :completed))

(defn todo-from-json [json]
	;;(pln :td-from-json json)
	(make-todo (json-to-map json)))

(defn todo-load [db-key]
	(todo-from-json
		(.parse js/JSON
			(io-read db-key))))

(defn todo-dump [banner]
	(pln :todos banner)
	(doseq [dbk (io-find TODO_LS_PREFIX)]
		(pln :todo (json-to-map
					(.parse js/JSON
						(io-read dbk))))))

(defn load-all-todos []
	(md/make ::todo-list
		;; todo: sort by created
		:items-raw (c?n (doall (map todo-load (io-find TODO_LS_PREFIX))))
		:items (c? ;;(pln :computing-items!!!!!!)
					(let [new (doall
							(remove #(md-get % :deleted) (md-get me :items-raw)))]
						(pln :undeleted-now= (count new))
						new))))

(defn todo-delete [td]
	(md-reset! td :deleted (now)))

(defn todo-toggle-completed [event db-key]
	(let [td (some (fn [td] (when (= db-key (md-get td :db-key)) td))
					(md-get @gTodo :items))]
		(assert td (str "todo-toggle-completed cannot find " db-key))
		(md-reset! td :completed (not (completed td)))))

(defn todo-delete-by-key [event db-key]
	(let [td (some (fn [td] (when (= db-key (md-get td :db-key)) td))
					(md-get @gTodo :items))]
		(assert td (str "td-del-key cannot find " db-key))
		(todo-delete td)))
