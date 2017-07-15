(ns todo.core
  (:require [tiltontec.model.core :refer [make]]
            [tag.html :refer [toHtml]]
            [tag.gen :refer-macros [section header h1 input footer p]]
            [todo.util :refer [pln json-to-map map-to-json uuidv4]]
            [todo.io :refer [io-all-keys io-truncate io-find io-upsert
            				io-read io-clear-storage]]
            [todo.todo :refer [TODO_LS_PREFIX make-todo]]))

(defn landing []
	;;"<h2>See console</h2>"

	(io-clear-storage)
  
	(io-truncate TODO_LS_PREFIX)

	(let [m1 {:a "Aa" :b 42 :c (uuidv4)}
		j (map-to-json m1)]
		(pln :m1 m1)
		(pln :j j)
		(pln :j$ (.stringify js/JSON j))
		(pln :jmap (json-to-map j)))

	#_
	(let [td (make-todo {:title "lose weight"})]
		(pln :td (:dbKey @td))
		(pln :td-json (todo-to-json td))
		(pln :all (io-all-keys))
		(pln :todos (io-find TODO_LS_PREFIX))
		(let [tdj (io-read (:dbKey @td))]
			(pln :td-json (js->clj tdj))))

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