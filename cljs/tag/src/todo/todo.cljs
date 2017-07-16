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
			(pln :make-todo-upsert-new!! (:db-key @todo))
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
		:items-raw (c?n (doall (map todo-load (io-find TODO_LS_PREFIX))))
		:items (c? (pln :computing-items!!!!!!)
					(doall
						(remove #(md-get % :deleted) (md-get me :items-raw))))))

(defn todo-delete [todo]
	(md-reset! todo :deleted (now)))

#_ (let [td (make-todo {:title "lose weight"})
		  td2 (make-todo {:title "find job"})]
		(pln :todos (io-find TODO_LS_PREFIX))
		(reset! gTodo (load-all-todos))
		(pln :raw (map #(md-get % :title)
					 (md-get @gTodo :items-raw)))
		(pln :items (map #(md-get % :title)
					 (md-get @gTodo :items)))
		(md-reset! (first (md-get @gTodo :items)) :deleted (now))
		(pln :del-stored? (todo-to-map
				(todo-load (:db-key @td))))
		(pln :items-post-delet (map #(map (fn [slot] (md-get % slot)) [:title :deleted])
					 				(md-get @gTodo :items)))
		(md-reset! @gTodo :items-raw (conj (md-get @gTodo :items-raw)
											(make-todo {:title "have snack"})))
		(pln :items-post-new (map #(map (fn [slot] (md-get % slot)) [:title :deleted])
					 				(md-get @gTodo :items)))
					)

#_ (let [td (make-todo {:title "lose weight"})]
		(pln :td (:db-key @td))
		(pln :td-json (todo-to-map td))
		(pln :td-raw @td)
		(pln :setting-completed!!!!!!!!!!!!!!!!!!!!!)
		(md-reset! td :completed (now))
		(assert (md-get td :completed))
		(pln :compl-mem (md-get td :completed))
		(pln :e-td (todo-to-map
				(todo-load (:db-key @td)))))

#_ (let [m1 {:a "Aa" :b 42 :c (uuidv4)}
		j (map-to-json m1)]
		(pln :m1 m1)
		(pln :j j)
		(pln :j$ (.stringify js/JSON j))
		(pln :jmap (json-to-map j)))

#_ (let [td (make-todo {:title "lose weight"})
		 td2 (make-todo {:title "find job"})]
		(pln :td (:db-key @td))
		(pln :td-json (todo-to-json td))
		(pln :all (io-all-keys))
		(pln :todos (io-find TODO_LS_PREFIX))
		(let [tdj (io-read (:db-key @td))
			  tdm (json-to-map
						(.parse js/JSON tdj))]
			(pln :td-json tdm)
			(let [rtd (make-todo tdm)]
				(pln :rtd (json-to-map (todo-to-json rtd)))
				(pln :ird @rtd)))
		(pln (todo-to-map
				(todo-load (:db-key @td2)))))
