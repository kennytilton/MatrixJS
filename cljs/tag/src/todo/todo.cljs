(ns todo.todo
	(:require
		[clojure.string :as str]
		[tiltontec.cell.base :refer [unbound ia-type]]
		[tiltontec.cell.core
             :refer-macros [c? c?+ c-reset-next! c?once c?n]
             :refer [c-in c-reset! make-cell make-c-formula]]
        [tiltontec.cell.observer :refer [observe-by-type]]
		[tiltontec.model.core :as md :refer [make md-get md-reset!]]
		[tiltontec.util.core :as util :refer [pln now map-to-json json-to-map]]
		[tiltontec.tag.html :refer [io-upsert io-read io-find]]))

(def TODO_LS_PREFIX "todos-HotJS.")

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

(def gTodo (atom nil))

(defn gItems-raw []
	(md-get @gTodo :items-raw))

(defn gTodo-items []
 (md-get @gTodo :items))

(defn gTodo-lookup [id]
	(let [td (some (fn [td] (when (= id (md-get td :id)) td))
					(md-get @gTodo :items))]
		(assert td (str "gTodo-lookup cannot find " id))
		td))

(defn todo-to-map [todo]		
	(into {} (for [k [:id :created :title :completed :deleted]]
				[k (md-get todo k)])))

(defn todo-to-json [todo]
	(map-to-json (todo-to-map todo)))

(defn todo-upsert [todo]
	(io-upsert (:id @todo) 
		(.stringify js/JSON
			(todo-to-json todo))))

(defn make-todo [islots]
	(let [net-slots (merge
						{:type ::todo
						 :id (str TODO_LS_PREFIX (uuidv4))
						 :created (now)}
						islots
						{:title (c-in (:title islots))
						 :completed (c-in (:completed islots false))
						 :deleted (or (:deleted islots)
						 			 (c-in nil))})
		todo (apply md/make (flatten (into [] net-slots)))]

		(when-not (:id islots)
			;; this is not being instantiated from localStorage
			(pln :make-todo-upsert-new!! (:id @todo))
			(todo-upsert todo))
		todo))

(defmethod observe-by-type [::todo.todo/todo] [slot me new-val old-val c]
	(when-not (= old-val unbound)
		(todo-upsert me)))

(defn title [me]
	(md-get me :title))
	
(defn completed [me]
	(md-get me :completed))

(defn todo-from-json [json]
	;;(pln :td-from-json json)
	(make-todo (assoc (json-to-map json)
					:par :todo-42)))

(defn todo-load [id]
	(todo-from-json
		(.parse js/JSON
			(io-read id))))

(defn todo-dump [banner]
	(pln :todos banner)
	(doseq [dbk (io-find TODO_LS_PREFIX)]
		(pln :todo (json-to-map
					(.parse js/JSON
						(io-read dbk))))))

(defn load-all-todos []
	(md/make ::todo-list
		:par :todo-42-top
		;; todo: sort by created
		:items-raw (c?n (doall (map todo-load (io-find TODO_LS_PREFIX))))
		:items (c? (println :computing-items!!!!!!!!!!)
					(doall (remove #(md-get % :deleted) (md-get me :items-raw))))))

(defn todo-delete [td]
	(println :deleting (:id @td))
	(md-reset! td :deleted (now)))

(defn todo-toggle-completed [event id]
	(let [td (some (fn [td] (when (= id (md-get td :id)) td))
					(md-get @gTodo :items))]
		(assert td (str "todo-toggle-completed cannot find " id))
		(md-reset! td :completed (not (completed td)))))

(defn clear-completed [e]
	(doall
		(map todo-delete  (filter completed (gTodo-items)))))
		
(defn todo-delete-by-key [event id]
	(println :del-by-key id event)
	(todo-delete (gTodo-lookup id)))
