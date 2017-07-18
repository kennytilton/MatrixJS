(ns todo.core
  (:require [cljs.pprint :as pp]
  			[clojure.string :as str]
  			[tiltontec.cell.base :refer [unbound ia-type]]
  			[tiltontec.cell.core :refer-macros [c? c?n]]
  			[tiltontec.model.core :refer [make md-reset! md-get kid-values-kids]]
            [tag.html :refer [tag to-html on-evt]]
            [tag.gen :refer-macros [section header h1 input footer p a
            						span label ul li div button]]
            [todo.util :refer [pln json-to-map map-to-json uuidv4 now]]
            [todo.io :refer [io-all-keys io-truncate io-find io-upsert
            				io-read io-clear-storage]]

            [todo.todo :refer [gTodo TODO_LS_PREFIX make-todo todo-to-map
            					title todo-to-json todo-load todo-upsert
            					todo-dump load-all-todos gTodo-items]]))

(declare todoDelete mk-todo-item mk-main mk-info
	mk-dashboard mk-todo-entry)
  	
(defn landing []
	;; (io-clear-storage)

    ;; (todo-dump "landing entry")

	(comment
		(io-truncate TODO_LS_PREFIX)

		(make-todo {:title "move North"})
		;;(make-todo {:title "find job"})
		(pln :todos (io-find TODO_LS_PREFIX))

		(todo-dump "post build"))

	(reset! gTodo (load-all-todos))

	(pln :loadedtodos (count (md-get @gTodo :items-raw)))
	(pln :loadedtodos (count (md-get @gTodo :items)))

	(pln :make-gen (macroexpand-1 '(section (:class "kkk") "himom")))

	(let [bits ;;[(h1 (:onclick (on-evt "todo.core.booya2"))"Hi,   Mom")]
			[(section (:class "todoapp")
            	(mk-todo-entry)
            	(mk-main)
				(mk-dashboard))
          	(mk-info)]]

	(let [b$ (map to-html bits)]
		;;(pln (count bits) :b$ b$)
    	(apply str b$))))

;;; --- new todo entry, validation, and storage ------------------------------------

(defn mk-todo-entry []
	(header (:class "header")
       	(h1 () "todos")
       	(input (:class "new-todo"
        	:placeholder "What needs to be done?"
            :autofocus true
            :onkeypress (on-evt "todo.core.todo_process_on_enter")))))

(defn todo-process-on-enter [e]
	(when (= (.-key e) "Enter")
		(pln :enter!!! e (.-target e) (.-value (.-target e)))
		(let [title (str/trim (.-value (.-target e)))]
			(if (= title "")
				(.alert js/window "A reminder to do nothing? We may not be relaxing yet. So, no.")
				(md-reset! @gTodo :items-raw
					(conj (md-get @gTodo :items-raw)
						(make-todo {:title title}))))
			(set! (.-value (.-target e)) ""))))

(defn mk-main []
	(section (:class "main"
               	:hidden (c? (zero? (count (md-get @gTodo :items)))))
		(input (:id "toggle-all" :class "toggle-all" :type "checkbox"))
		(label (:for "toggle-all")() "Mark all as complete")
		(ul (:class "todo-list"
				:kid-values (c? (md-get @gTodo :items))
					:kid-key #(md-get % :todo)
					:kid-factory mk-todo-item)
				(kid-values-kids me cache))))

(defn mk-dashboard []
	(footer (:class "footer" :hidden (c? (zero? (count (gTodo-items)))))
		(span (:class "todo-count")
		   "<strong>0</strong> items left")
		(ul (:class "filters")
		 	(li () (a (:class "selected" :href "#/") "All"))
		 	(li () (a (:href "#/active") "Active"))
		 	(li () (a (:href "#/completed") "Completed")))
		(button (:class "clear-completed") "Clear completed")))

(defn mk-info []
	(footer (:class"info")
		(p () "Double-click to edit a todo")
		(p () "Created by <a href=\"http://tiltontec.com\">Kenneth Tilton</a>")
		(p () "Inspired by <a href=\"http://todomvc.com\">TodoMVC</a>")))


(defn mk-todo-item [me td]
	(li (:todo td
		 :class (c? (if (md-get td :completed) "completed" ""))
		 :display "block") ;; getto filtersnmatch
		(div (:class "view")
			(input (:class "toggle" :type "checkbox"
						;;; :checked (c? (md-get td :completed))
						))
			(label () (md-get td :title))
			(button (:class "destroy" 
						:onclick (on-evt "todo.todo.todo_delete_by_key" 
										(md-get td :db-key)))))
		(input (:class "edit" :value (c?n (md-get td :title))))))

