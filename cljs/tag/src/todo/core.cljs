(ns todo.core
  (:require [cljs.pprint :as pp]
  			[clojure.string :as str]
  			[bide.core :as r]
  			[tiltontec.util.core :refer [pln any-ref? xor json-to-map map-to-json  now]]

  			[tiltontec.cell.base :refer [unbound ia-type]]
  			[tiltontec.cell.core :refer-macros [c? c?n ] :refer [c-in]]
  			[tiltontec.model.core :refer [*par* fget fasc make md-reset! md-get fmi-w-class fmu-w-class kid-values-kids]]
				[tiltontec.tag.html :refer [tag  to-html tag-dom fm-asc-tag tagfo dom-ancestor-by-class dom-ancestor-by-tag
																		dom-has-class io-all-keys io-truncate io-find io-upsert io-read io-clear-storage]]
				[tiltontec.tag.gen :refer-macros [on-evt section header h1 input footer p a make-tag span label ul li div button]
            		:refer [dom-tag]]
				[todo.todo :refer [gTodo gItems-raw gTodo-lookup TODO_LS_PREFIX make-todo td-to-map td-title td-completed
													 td-to-json td-load td-upsert td-delete  td-load-all gTodo-items
            							td-id	td-clear-completed td-delete-by-key td-toggle-completed]]))

(declare mk-todo-item mk-dashboard td-completed-toggle-all)

(def router (r/router [["/" :All]
             ["/active" :Active]
             ["/completed" :Completed]]))

(def app (atom nil))
(def iroute (atom nil))

(defn on-navigate [route params query]
  (cond 
  	@app (md-reset! (fmi-w-class (first @app) "filters")
  					:selection (name route))
  	:default (reset! iroute (name route))))

(defn landing []
	(r/start! router {:default :todo/all
                  :on-navigate on-navigate})

	(reset! gTodo (td-load-all))

	(reset! app
    [(section (:class "todoapp" :par :top)
				(header (:class "header")
					(h1 () "todos")
					(input (:class "new-todo" :autofocus true
              :placeholder "What needs to be done?"
              :onkeypress (on-evt 'todo-process-on-enter))))

				(section (:class "main"
										:hidden (c? (zero? (count (gTodo-items)))))

					(input (:id "toggle-all" :class "toggle-all" :input-type "checkbox"
									:action (c? (if (some (complement td-completed) (gTodo-items))
									            :complete :uncomplete))
									:checked (c? (= (md-get me :action) :uncomplete))))

					(label (:for "toggle-all"
							    :onclick (on-evt 'td-completed-toggle-all))
						"Mark all as complete")

					(ul (:class "todo-list"
								:kid-values (c? (gTodo-items))
								:kid-key #(md-get % :todo)
								:kid-factory mk-todo-item)
						(kid-values-kids me cache)))

				(mk-dashboard))

		 (footer (:class"info")
			 (p () "Double-click a todo to edit it.")
			 (p () "Created by <a href=\"http://tiltontec.com\">Kenneth Tilton</a>.")
			 (p () "Inspired by <a href=\"http://todomvc.com\">TodoMVC</a>."))])
	(to-html @app))

;;; --- page sub-structure breakouts for readabilityy ------------------------------

(declare todo-item-display-rule todo-start-editing todo-edit)

(defn mk-todo-item [me td]
  (assert me "no me into mk-tofo-it")
  (li (:todo td
        :name :todo-li
        :class (c? (if (td-completed td) "completed" ""))
        :display (c? (let [sel (md-get (fmu-w-class me "filters") :selection)]
                       (if (or (= sel "All")
                               (xor (= sel "Active")
                                    (md-get td :completed)))
                         "block" "none"))))

    (div (:class "view")
         (input (:class "toggle" :input-type "checkbox"
                  :checked (c? (md-get td :completed))
                  :onclick (on-evt 'td-toggle-completed (td-id td))))

         (label (:ondblclick (on-evt 'todo-start-editing))
                (td-title td))

         (button (:class "destroy"
                   :onclick (on-evt 'td-delete-by-key (td-id td)))))

    (input (:class "edit"
             :value (c?n (td-title td))
             :onblur (on-evt 'todo-edit (td-id td))
             :onkeydown (on-evt 'todo-edit (td-id td))
             :onkeypress (on-evt 'todo-edit (td-id td))))))

(defn mk-dashboard []
  (footer (:class "footer"
            :hidden  (c? (zero? (count (gTodo-items)))))
    (span (:class "todo-count"
            :content (c? (pp/cl-format nil "<strong>~a</strong>  item~:P remaining"
                                       (count (remove td-completed (gTodo-items)))))))

    (ul (:class "filters"
          :selection (c-in (or @iroute "All")))
       (doall (for [[label route] [["All", "#/"], ["Active","#/active"], ["Completed","#/completed"]]]
          (li () (a (:href route :selector label
                      :selected (c? (= (:selector @me) (md-get (fm-asc-tag me "ul") :selection)))
                      :class (c? (if (md-get me :selected) "selected" "")))
                   label)))))

    (button (:class "clear-completed"
              :hidden  (c? (zero? (count (filter td-completed (gTodo-items)))))
              :onclick (on-evt 'td-clear-completed))
            "Clear completed")))

;;; --- event handlers to support the above ------------------------------------
;;;   (see also todo.cljs for more such)

(defn todo-process-on-enter [e]
	(when (= (.-key e) "Enter")
		(let [raw (.-value (.-target e))
			    title (str/trim raw)]
			(if (= title "")
				(when (pos? (count raw))
					(.alert js/window "A reminder to do nothing? Are we relaxing yet? So, no."))
				(md-reset! @gTodo :items-raw
					(conj (gItems-raw)
						(make-todo {:title title}))))
			(set! (.-value (.-target e)) ""))))

(defn todo-start-editing [e]
	(let [lbl (dom-tag (.-target e))
		    li (fm-asc-tag lbl "li")
        edt-dom (.item (.getElementsByClassName (tag-dom li) "edit") 0)]
		(.add (.-classList (tag-dom li)) "editing")
		(.focus edt-dom)
		(.setSelectionRange edt-dom 0 (.-length (.-value edt-dom)))))

(defn todo-edit [e td-key]
	(let [edom (.-target e)
		  title (str/trim (.-value edom))
		  td (gTodo-lookup td-key)
		  li-dom (dom-ancestor-by-tag edom "li")]
		(cond
			(or (and (= (.-type e) "blur")
					(dom-has-class li-dom "editing"))
				(= (.-key e) "Enter"))
			(do	(if (= title "")
					(td-delete td)
					(md-reset! td :title title))
				(.remove (.-classList li-dom) "editing"))
			
			(= (.-key e) "Escape")
			(do (set! (.-value edom) (td-title td))
				(.remove (.-classList li-dom) "editing")))))

(defn td-completed-toggle-all [event]
  (let [input (fmu-w-class (dom-tag (.-target event)) "toggle-all")
        action (md-get input :action)]
    (doseq [td (gTodo-items)]
      (md-reset! td :completed (= action :complete)))))
