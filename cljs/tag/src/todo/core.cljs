(ns todo.core
  (:require [cljs.pprint :as pp]
  			[clojure.string :as str]
  			[tiltontec.util.core :refer [pln]]
  			[tiltontec.cell.base :refer [unbound ia-type]]
  			[tiltontec.cell.core :refer-macros [c? c?n]]
  			[tiltontec.model.core
  			 :refer [fget fasc make md-reset! md-get kid-values-kids]]
            [tag.html :refer [tag to-html on-evt tag-dom
            				dom-has-class]]
            [tag.gen :refer-macros [section header h1 input footer p a
            						span label ul li div button]
            		:refer [dom-tag]]
            [todo.util :refer [pln json-to-map map-to-json uuidv4 now]]
            [todo.io :refer [io-all-keys io-truncate io-find io-upsert
            				io-read io-clear-storage]]

            [todo.todo :refer
             	[gTodo gTodo-lookup TODO_LS_PREFIX make-todo
             	todo-to-map title completed todo-to-json todo-load todo-upsert
            	todo-dump todo-delete  load-all-todos gTodo-items]]))


(declare todoDelete mk-todo-item mk-main mk-info
	mk-dashboard mk-todo-entry)
  	
(defn landing []
	;; (io-clear-storage)
	;; (todo-dump "landing entry")

	(do ;; comment
		(pln :truncating!!!!! TODO_LS_PREFIX)
		(io-truncate TODO_LS_PREFIX)

		(make-todo {:title "move North"})
		(make-todo {:title "find job"})
		;(make-todo {:title "buy jetski"})

		(pln :todos-at-start (count (io-find TODO_LS_PREFIX)))

		;;(todo-dump "post build")
		)

	(reset! gTodo (load-all-todos))

	(pln :loadedtodos-raw (count (md-get @gTodo :items-raw)))
	(pln :loadedtodos (count (md-get @gTodo :items)))

	;; todo functionalize
	(let [bits [(section (:class "todoapp")
            		(mk-todo-entry)
            		(mk-main)
					(mk-dashboard))
          		(mk-info)]
		b$ (to-html bits)]
		(pln (count bits) :b$ b$)
    	b$))

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
				(.alert js/window "A reminder to do nothing? No sure we are relaxing yet. So, no.")
				(md-reset! @gTodo :items-raw
					(conj (md-get @gTodo :items-raw)
						(make-todo {:title title}))))
			(set! (.-value (.-target e)) ""))))

(defn mk-main []
	(section (:class "main"
               	:hidden (c? (zero? (count (md-get @gTodo :items)))))
		(input (:id "toggle-all" :class "toggle-all" :input-type "checkbox"
				:action (c? (if (some (complement completed) (gTodo-items))
								:complete :uncomplete))
				:checked (c? (= (md-get me :action) :uncomplete))))

		(label (:for "toggle-all"
				:onclick (on-evt "todo.core.todo_toggle_all"))
			"Mark all as complete")

		(ul (:class "todo-list"
				:kid-values (c? (md-get @gTodo :items))
				:kid-key #(md-get % :todo)
				:kid-factory mk-todo-item)
			(kid-values-kids me cache))))

(defn mk-todo-item [me td]
	(li (:todo td
		 :class (c? (if (completed td) "completed" ""))
		 :display "block") ;; getto filtersnmatch

		(div (:class "view")
			(input (:class "toggle" :input-type "checkbox"
					:checked (c? (md-get td :completed))
					:onclick (on-evt "todo.todo.todo_toggle_completed" 
								(md-get td :db-key))))

			(label (:ondblclick (on-evt "todo.core.todo_start_editing"))
				(md-get td :title))

			(button (:class "destroy" 
						:onclick (on-evt "todo.todo.todo_delete_by_key" 
										(md-get td :db-key)))))

		(input (:class "edit" :value (c?n (md-get td :title))
				:onblur (on-evt "todo.core.todo_edit" (md-get td :db-key))
				:onkeydown (on-evt "todo.core.todo_edit" (md-get td :db-key))
				:onkeypress (on-evt "todo.core.todo_edit" (md-get td :db-key))))))

(defn dom-ancestor-by-class [dom class]
	(when dom
		(let [pn (.-parentNode dom)]
			(println :dabc (.-tagName dom) class pn)
			(when pn
				(println :checking (.-tagName pn)
				(if (dom-has-class pn class)
					pn
					(dom-ancestor-by-class pn class)))))))

(defn dom-ancestor-by-tag [dom tag]
	(when dom
		(println :dabtag (.-tagName dom) tag)
		(let [pn (.-parentNode dom)]
			(when pn
				(println :checking (.-tagName pn))
				(if (= (.-tagName pn) (str/upper-case tag))
					pn
					(dom-ancestor-by-tag pn tag))))))

(defn todo-edit [e td-key]
	(println :edit!!!!!!! (.-tagName (.-target e)))
	(let [edom (.-target e)
		  title (.-value edom)
		  td (gTodo-lookup td-key)
		  li-dom (dom-ancestor-by-tag edom "li")]
		(println (.-tagName edom) (.-type e) :key (.-key e) :lidom li-dom)
		(cond
			(or (= (.-type e) "blur")
				(= (.-key e) "Enter"))
			(do	(if (= title "")
					(todo-delete td)
					(md-reset! td :title title))
				(.remove (.-classList li-dom) "editing"))
			
			(= (.-key e) "Escape")
			(.remove (.-classList li-dom) "editing"))))

(defn todo-start-editing [e]
	(let [dom (.-target e)
		  lbl (dom-tag dom)
		  li (fasc (fn [me]
		  			;;(println :fli-visits (:id @me)(:tag @me))
		  			(= "li" (:tag @me)))
		  		 lbl)
		  edt-doms (.getElementsByClassName (tag-dom li) "edit")
		  edom (.item edt-doms 0)]
		(.add (.-classList (tag-dom li)) "editing")
		(.focus edom)
		(.setSelectionRange edom 0 (.-length (.-value edom)))))

(defn todo-toggle-all [event]
	(let [action (if (some (complement completed) (gTodo-items))
					:complete :uncomplete)]
		(doseq [td (gTodo-items)]
			(md-reset! td :completed (= action :complete)))))

(defn mk-dashboard []
	(footer (:class "footer"
			 :hidden  (c? (zero? (count (gTodo-items))))) 
		(span (:class "todo-count"
				:content (c? (pp/cl-format nil "<strong>~a</strong>  item~:P remaining" 
									(count (remove completed (gTodo-items)))))))
		(ul (:class "filters")
		 	(li () (a (:class "selected" :href "#/") "All"))
		 	(li () (a (:href "#/active") "Active"))
		 	(li () (a (:href "#/completed") "Completed")))
		(button (:class "clear-completed"
				 :hidden  (c? (zero? (count (filter completed (gTodo-items)))))
				 :onclick (on-evt "todo.core.todo_clear_completed"))
			"Clear completed")))

(defn todo-clear-completed [e]
	(println :boom e)
	(let [comp (filter completed (gTodo-items))]
		(println :complteed!!! comp)
		(doseq [td comp]
			(md-reset! td :deleted (now)))))	

(defn mk-info []
	(footer (:class"info")
		(p () "Double-click to edit a todo")
		(p () "Created by <a href=\"http://tiltontec.com\">Kenneth Tilton</a>")
		(p () "Inspired by <a href=\"http://todomvc.com\">TodoMVC</a>")))

