(ns todo.core
  (:require [cljs.pprint :as pp]
  			[clojure.string :as str]
  			[bide.core :as r]
  			[tiltontec.util.core :refer [pln any-ref?]]
  			[tiltontec.cell.base :refer [unbound ia-type]]
  			[tiltontec.cell.core :refer-macros [c? c?n]
  								:refer [c-in]]
  			[tiltontec.model.core
  			 :refer [*par* fget fasc make md-reset! md-get kid-values-kids]]
            [tag.html :refer [tag  to-html on-evt tag-dom
            				dom-ancestor-by-class dom-ancestor-by-tag dom-has-class]]
            [tag.gen :refer-macros [section header h1 input footer p a
            						span label ul li div button]
            		:refer [tagfo dom-tag]]
            [todo.util :refer [pln json-to-map map-to-json uuidv4 now]]
            [todo.io :refer [io-all-keys io-truncate io-find io-upsert
            				io-read io-clear-storage]]

            [todo.todo :refer
             	[gTodo gTodo-lookup TODO_LS_PREFIX make-todo
             	todo-to-map title completed todo-to-json todo-load todo-upsert
            	todo-dump todo-delete  load-all-todos gTodo-items]]))

(declare todoDelete mk-todo-item mk-main mk-info
	mk-dashboard mk-todo-entry)

(def router
  (r/router [["/" :All]
             ["/active" :Active]
             ["/completed" :Completed]]))

(def app (atom nil))                  
(def iroute (atom nil))

(defn on-navigate
  "A function which will be called on each route change."
  [route params query]
  (println "Route change to!!!!!!!!!!!!!!!!!: " route (tag (first @app)))
  (cond 
  	@app (let [f (fget (fn [v]
  						(when (any-ref? v)
  							(when (= "filters" (:class @v))
  								(println :bam-filters)
  								true)))
  						(first @app)
  						:inside? true
  						 :up? false
  						 :must? true)]
  			(println :f f)
  			(when f (md-reset! f :selection (name route))))
  	:default (reset! iroute (name route))))

(r/start! router {:default :todo/all
                  :on-navigate on-navigate})

(defn landing []
	;; (io-clear-storage)
	;; (todo-dump "landing entry")

	(comment
		(pln :truncating!!! TODO_LS_PREFIX)
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

	(reset! app [(section (:class "todoapp" :par :top)
            		(mk-todo-entry)
            		(mk-main)
					(mk-dashboard))
          		(mk-info)])
	(to-html @app))

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

(declare todo-item-display-rule)

(defn mk-todo-item [me td]
	(assert me "no me into mk-tofo-it")
	;;(println :cool-mktoto (:id @me) (any-ref? *par*))
	(li (:todo td
		:name :todo-li
		 :class (c? (if (completed td) "completed" ""))
		 :display (todo-item-display-rule))

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


(defn xor [a b]
	(or (and a (not b))
		(and b (not a))))

(defn todo-item-display-rule []
	(c? (assert (:par @me))
		;;(println :starting-filters-search!!!!!!!!!!!!!)
		(let [f (fget (fn [x]
						;;(println :visiting (tag x)(md-get x :class)(md-get x :id))
						(when (= (md-get x :class) "filters")
							;;(println :found!!!!!!!!)
							true)) me
						:upp? true
						:must? true)]
			;;(println :in-rule me f)
			(assert f)
			(let [sel (md-get f :selection)]
				(assert (string? sel))
				;;(print :sel!!!!!!!!!! sel)
				(if (or (= sel "All")
						(let [td (md-get me :todo)]
							(assert td)
							(xor (= sel "Active") (md-get td :completed))))
				"block" "none")))))

(defn todo-edit [e td-key]
	(println :edit!!!!!!! (.-tagName (.-target e)))
	(let [edom (.-target e)
		  title (.-value edom)
		  td (gTodo-lookup td-key)
		  li-dom (dom-ancestor-by-tag edom "li")]
		(println :edit-two!!!!! (.-tagName edom) (.-type e) :key (.-key e) :lidom li-dom)
		(cond
			(or (and (= (.-type e) "blur")
					(dom-has-class li-dom "editing"))
				(= (.-key e) "Enter"))
			(do	(if (= title "")
					(todo-delete td)
					(md-reset! td :title title))
				(.remove (.-classList li-dom) "editing"))
			
			(= (.-key e) "Escape")
			(do (println :ESCAPING!!!!!)
				(set! (.-value edom) (md-get td :title))
				(.remove (.-classList li-dom) "editing")))))

(defn fm-asc-tag [me tag]
	(fasc (fn [visited]
		  		;; (println :fli-visits tag (:tag @visited) (= (:par @visited) nil))
		  		(= tag (:tag @visited)))
		  	 me))

(defn todo-start-editing [e]
	(let [dom (.-target e)
		  lbl (dom-tag dom)
		  li (fm-asc-tag lbl "li")
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

		(ul (:class "filters"
			 :selection (c-in (or @iroute "All")))
		  (doall	
			(for [[label route] [["All", "#/"], ["Active","#/active"], ["Completed","#/completed"]]]
				(li () (a (:href route
							:selected (c? (println :comping (:selector @me)
													(md-get (fm-asc-tag me "ul") :selection))
								(= (:selector @me)
											(md-get (fm-asc-tag me "ul") :selection)))
							:class (c? (let [new (if (md-get me :selected) "selected" "")]
											(println :liclass (:selector @me) new :old cache)
											new))
							:selector label) label)))))

		(button (:class "clear-completed"
				 :hidden  (c? (zero? (count (filter completed (gTodo-items)))))
				 :onclick (on-evt "todo.todo.clear_completed"))
			"Clear completed")))

(defn mk-info []
	(footer (:class"info")
		(p () "Double-click to edit a todo")
		(p () "Created by <a href=\"http://tiltontec.com\">Kenneth Tilton</a>")
		(p () "Inspired by <a href=\"http://todomvc.com\">TodoMVC</a>")))

