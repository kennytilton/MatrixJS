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

(def TODO_LS_PREFIX "todos-LiveJS.")

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

(declare td-upsert)

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
			(pln :make-td-upsert-new!! (:id @todo))
			(td-upsert todo))
		todo))

;;; --- straight accessors (but establishing dependency if hit within formulae)
;;;  (use (:some-prop @td) to avoid dependency (at own dataflow risk) -

(defn td-title [td]
	(md-get td :title))

(defn td-id [td]
	(md-get td :id))

(defn td-completed [td]
	(md-get td :completed))

;;; --- utilities converting between td, json, and map ----------------

(defn td-to-map [todo]
  (into {} (for [k [:id :created :title :completed :deleted]]
             [k (md-get todo k)])))

(defn td-to-json [todo]
  (map-to-json (td-to-map todo)))

(defn td-from-json [json]
  (make-todo (assoc (json-to-map json)
               :par :todo-42)))

;;; --- persistence ------------------------------------------------------

;; -- new --
(defn td-upsert [td]
	(io-upsert (td-id td)
						 (.stringify js/JSON
												 (td-to-json td))))

;; -- read --
(defn td-load [id]
  (td-from-json
    (.parse js/JSON
            (io-read id))))

(defn td-load-all []
  (md/make ::todo-list
           :par :todo-42-top
           :items-raw (c?n (doall (map td-load (io-find TODO_LS_PREFIX))))
           :items (c? (doall (remove #(md-get % :deleted) (md-get me :items-raw))))))

;; -- update --
;; regardless of slot that changed, update td instance
(defmethod observe-by-type [::todo.todo/todo] [slot me new-val old-val c]
  (when-not (= old-val unbound)
    (td-upsert me)))

;;; ---- semantically more interesting ----------------------

;;; --- the in-memory store --

(def gTodo (atom nil))

(defn gItems-raw []
  (md-get @gTodo :items-raw))

(defn gTodo-items []
  (md-get @gTodo :items))

(defn gTodo-lookup [id]
  (let [td (some (fn [td] (when (= id (td-id td)) td))
                 (gTodo-items))]
    (assert td (str "gTodo-lookup cannot find " id))
    td))

(defn td-delete [td]
	(md-reset! td :deleted (now)))

(defn td-toggle-completed [event id]
	(let [td (some (fn [td] (when (= id (td-id td)) td))
					(gTodo-items))]
		(assert td (str "td-toggle-completed cannot find " id))
		(md-reset! td :completed (not (td-completed td)))))

(defn td-clear-completed [e]
	(doall
		(map td-delete  (filter td-completed (gTodo-items)))))
		
(defn td-delete-by-key [event id]
	(td-delete (gTodo-lookup id)))

