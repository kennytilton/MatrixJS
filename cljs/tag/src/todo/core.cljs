(ns todo.core
  (:require [cljs.pprint :as pp]
  			[tiltontec.cell.base :refer [unbound ia-type]]
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

(declare todoDelete)

  	
#_ ;; OK
(defn landing []
	"<h2 onclick=\"alert('booya')\">See console</h2>")

#_ ;; OK
(defn landing []
	"<h2 onclick=\"return todo.core.booya2(event)\">see console</h2>")

#_ ;; OK
(defn landing []
	"<h2 onclick=\"(function () { todo.core.booya2(event)})()\">See console</h2>")

(def on-event-attr-template
	"(function () { ~a(event)})()")

#_ ;; OK
(defn landing []
	(pp/cl-format nil
		"<h1 onclick=~s>Click me</h1>"
		(pp/cl-format nil on-event-attr-template "todo.core.booya2")))

(defn on-evt [fn-name]
	(pp/cl-format nil on-event-attr-template fn-name))

#_
(defn landing []
	(println :reso (str (resolve 'booya2)))
	(pp/cl-format nil
		"<h1 onclick=~s>Click me</h1>"
		(on-evt "todo.core.booya2")))

(defn landing []
	;;"<h2>See console</h2>"
	(reset! +observe-default-handler+ todo-handler)
	;; (io-clear-storage)

  
	(io-truncate TODO_LS_PREFIX)

	(make-todo {:title "move North"})
	(make-todo {:title "find job"})
	(pln :todos (io-find TODO_LS_PREFIX))

	(reset! gTodo (load-all-todos))

	(pln :loadedtodos (count (md-get @gTodo :items-raw)))
	(pln :loadedtodos (count (md-get @gTodo :items)))

	
	(let [bits ;;[(h1 (:onclick (on-evt "todo.core.booya2"))"Hi,   Mom")]
				[(section (:class "todoapp")
                	(header (:class "header")
                   		(h1 () "todos")
	                   	(input (:class "new-todo"
                   				:placeholder "What needs to be done?"
                   				:autofocus true)))
                   	(section (:class "main"
                   				:hidden nil ;; (c? (zero? (count (md-get @gTodo :items))))
                   				)
                   		(input (:id "toggle-all" :class "toggle-all" :type "checkbox"))
                   		(label (:for "toggle-all") "Mark all as complete")
                   		(ul (:class "todo-list")
                   			(for [td (md-get @gTodo :items)]
								(li () ;; :class "completed"
									(div (:class "view")
										(input (:class "toggle" :type "checkbox" ;; :checked true
												))
										(label () (md-get td :title))
										(button (:class "destroy" 
												:onclick (on-evt "todo.core.booya2"))))
									(input (:class "edit" :value "Create a TodoMVC template")))))))

              	(footer (:class"info")
					(p () "Double-click to edit a todo")
					(p () "Created by <a href=\"http://tiltontec.com\">Kenneth Tilton</a>")
					(p () "Inspired by <a href=\"http://todomvc.com\">TodoMVC</a>"))]]
    (apply str (map toHtml bits))))

 (defn ^:export booya2 [e]
 	(pln :booya2 e))

