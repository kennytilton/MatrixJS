(ns todo.core
  (:require [tiltontec.cell.base :refer [unbound ia-type]]
  			[tiltontec.cell.observer :refer [+observe-default-handler+]]
  			[tiltontec.cell.core :refer-macros [c?]]
  			[tiltontec.model.core :refer [make md-reset! md-get]]
            [tag.html :refer [toHtml]]
            [tag.gen :refer-macros [section header h1 input footer p
            						label ul li div button]]
            [todo.util :refer [pln json-to-map map-to-json uuidv4 now]]
            [todo.io :refer [io-all-keys io-truncate io-find io-upsert
            				io-read io-clear-storage]]
            [todo.todo :refer [TODO_LS_PREFIX make-todo todo-to-map
            					todo-to-json todo-load todo-upsert
            					load-all-todos]]))

(def gTodo (atom nil))

(defn todo-handler [slot me new-val old-val c]
	(when-not (= old-val unbound)
		(when (= :todo.todo/todo (ia-type me))
			(todo-upsert me)
	  		(println :todo-upserted!!!!! slot (= :todo.todo/todo (ia-type me)) (ia-type me) new-val old-val))
	  	))

(defn landing []
	;;"<h2>See console</h2>"
	(reset! +observe-default-handler+ todo-handler)
	;; (io-clear-storage)

  
	;; (io-truncate TODO_LS_PREFIX)

	(make-todo {:title "move North"})
	(make-todo {:title "find job"})
	(pln :todos (io-find TODO_LS_PREFIX))

	(reset! gTodo (load-all-todos))

	(pln :loadedtodos (count (md-get @gTodo :items-raw)))
	(pln :loadedtodos (count (md-get @gTodo :items)))


	(let [bits [(section (:class "todoapp")
                	#_(header (:class "header")
                   		(h1 () "todos")
	                   	(input (:class "new-todo"
                   				:placeholder "What needs to be done?"
                   				:autofocus true)))
                   	(section (:class "main"
                   				:hidden false ;; (c? (zero? (count (md-get @gTodo :items))))
                   				)
                   		(input (:id "toggle-all" :class "toggle-all" :type "checkbox"))
                   		(label (:for "toggle-all")
                   			"Mark all as complete")
                   		(ul (:class "todo-list")
							(li (:class "completed")
								(div (:class "view")
									(input (:class "toggle" :type "checkbox" :checked true))
									(label () "Taste JavaScript")
									(button (:class "destroy")))
								(input (:class "edit" :value "Create a TodoMVC template")))
							(li ()
								(div (:class "view")
									(input (:class "toggle" :type "checkbox"))
									(label () "Wash dishes")
									(button (:class "destroy")))
								(input (:class "edit" :value "Create a TodoMVC template"))))))

              	#_(footer (:class"info")
					(p () "Double-click to edit a todo")
					(p () "Created by <a href=\"http://tiltontec.com\">Kenneth Tilton</a>")
					(p () "Inspired by <a href=\"http://todomvc.com\">TodoMVC</a>"))]]
    ;;"<h2>bam234</h2>"
    (apply str (map toHtml bits))
    ))