(ns todo.core
  (:require [tiltontec.cell.base :refer [unbound ia-type]]
  			[tiltontec.cell.observer :refer [+observe-default-handler+]]
  			[tiltontec.model.core :refer [make md-reset! md-get]]
            [tag.html :refer [toHtml]]
            [tag.gen :refer-macros [section header h1 input footer p]]
            [todo.util :refer [pln json-to-map map-to-json uuidv4 now]]
            [todo.io :refer [io-all-keys io-truncate io-find io-upsert
            				io-read io-clear-storage]]
            [todo.todo :refer [TODO_LS_PREFIX make-todo todo-to-map
            					todo-to-json todo-load todo-upsert]]))

(defn todo-handler [slot me new-val old-val c]
	(when-not (= old-val unbound)
		(when (= :todo.todo/todo (ia-type me))
			(todo-upsert me)
	  		(println :todo-upserted!!!!! slot (= :todo.todo/todo (ia-type me)) (ia-type me) new-val old-val))
	  	))

(defn landing []
	;;"<h2>See console</h2>"
	(reset! +observe-default-handler+ todo-handler)
	(io-clear-storage)
  
	(io-truncate TODO_LS_PREFIX)

	(let [td (make-todo {:title "lose weight"})]
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

	#_
	(let [td (make-todo {:title "lose weight"})
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

  #_
  (let [bits [(section (:class "todoapp")
                (header (:class "header")
                   (h1 () "todos")
                   (input (:class "new-todo"
                   			:placeholder "What needs to be done?"
                   			:autofocus true))))
              (footer (:class"info")
				(p () "Double-click to edit a todo")
				(p () "Created by <a href=\"http://tiltontec.com\">Kenneth Tilton</a>")
				(p () "Inspired by <a href=\"http://todomvc.com\">TodoMVC</a>"))]]
    ;;"<h2>bam234</h2>"
    (apply str (map toHtml bits))
    ))