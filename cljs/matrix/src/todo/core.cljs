(ns todo.core
  (:require [cljs.pprint :as pp]
            [clojure.string :as str]
            [bide.core :as r]
            [tiltontec.util.core :refer [xor now]]
            [tiltontec.cell.base :refer [*within-integrity*]]
            [tiltontec.cell.core :refer-macros [c? c?n] :refer [c-in]]
            [tiltontec.model.core :refer [md-get md-reset! mxi-find mxu-find-class kid-values-kids]]
            [tiltontec.tag.html :refer [ to-html  fm-asc-tag dom-tag tag-dom dom-has-class dom-ancestor-by-tag]]
            [tiltontec.tag.gen
             :refer-macros [ on-evt!  section header h1 input footer p a span label ul li div button]
             :refer [dom-tag]]
            [todo.todo :refer [gTodo gItems-raw gTodo-lookup TODO_LS_PREFIX make-todo td-title
                               td-completed td-upsert td-delete td-load-all gTodo-items
                               td-id td-clear-completed td-delete-by-key td-toggle-completed]]))

(def app (atom nil))

;;; --- routing -------------------------------

(def router (r/router [["/" :All]
             ["/active" :Active]
             ["/completed" :Completed]]))

(def iroute (atom nil))

(defn on-navigate [route params query]
  (cond
    @app (md-reset! (mxi-find (first @app) :class "filters")
            :selection (name route))
    :default (reset! iroute (name route))))

;;; --- the app -------------------------------

(declare todo-list-item toggle-all dashboard-footer  todo-entry)

(defn landing-page []
  (r/start! router {:default :todo/all
                    :on-navigate on-navigate})
  ;; todo maybe avoid gTodo global and load with dom into common "app" object
  (reset! gTodo (td-load-all))

      ;; Next we mix native (matrix) HTML generators with simple function calls that
      ;; return the same, in the spirit of web components but avoiding that mess.
      ;;
      ;; Note that if we wanted reusable "web components" these functions could
      ;; accept conventional parameters for the generated (matrix) elements.

  (reset! app
    [(section {:class "todoapp"}
        (header {:class "header"}
          (h1 {} "todos")
          (todo-entry))

        (section {:class "main"
                    :hidden (c? (zero? (count (gTodo-items))))}
           (toggle-all)
                 ;; Next we address the problem ReactJS handles by allowing
                 ;; keys on items of a list of elements, namely how not to
                 ;; regen all just because one comes or goes.
           (ul {:class "todo-list"
                :kid-values (c? (gTodo-items))
                :kid-key #(md-get % :todo)
                :kid-factory todo-list-item}
            (kid-values-kids me cache)))

        (dashboard-footer))

     ;; no need to hide everything behind a function....
     (footer {:class "info"}
       (p {} "Double-click a todo to edit it.")
       (p {} "Created by <a href=\"http://tiltontec.com\">Kenneth Tilton</a>.")
       (p {} "Inspired by <a href=\"http://todomvc.com\">TodoMVC</a>."))])

  (to-html @app))

;; --- to-do INPUT -------------------------

(defn todo-entry []
  (input {:class       "new-todo" :autofocus true
          :placeholder "What needs to be done?"
          :onkeypress  (on-evt! todo.core/todo-process-on-enter)}))

(defn todo-process-on-enter [e]
  (when (= (.-key e) "Enter")
        (let [raw (.-value (.-target e))
              title (str/trim raw)]
             (if (= title "")
               (when (pos? (count raw))
                     (.alert js/window "A reminder to do nothing? We like it! But no."))
               (md-reset! @gTodo :items-raw
                          (conj (gItems-raw)
                                (make-todo {:title title}))))
             (set! (.-value (.-target e)) ""))))

;; -- toggle-all -------------------------------------

(defn toggle-all []
  ;; these will get flattened out by "the-kids". That let's us keep these
  ;; together in the source although they do not share the same parent exclusively
  [(input {:id "toggle-all" :class "toggle-all" :input-type "checkbox"
                     :action (c? (if (some (complement td-completed) (gTodo-items))
                                   :complete :uncomplete))
                     :checked (c? (= (md-get me :action) :uncomplete))})
   (label {:for "toggle-all"
           :onclick (on-evt! todo.core/td-completed-toggle-all)}
          "Mark all as complete")])

(defn td-completed-toggle-all [event]
      (let [input (mxu-find-class (dom-tag (.-target event)) "toggle-all")
            action (md-get input :action)]
           (doseq [td (gTodo-items)]
                  (md-reset! td :completed (when (= action :complete) (now))))))

;; --- to-do list LI ---------------------------------

(defn todo-list-item [me td]
  (li {:todo td
        :name :todo-li
        :class (c? (if (td-completed td) "completed" ""))
        :display (c? (let [sel (md-get (mxu-find-class me "filters") :selection)]
                       (if (or (= sel "All")
                               (xor (= sel "Active")
                                    (md-get td :completed)))
                         "block" "none")))}

    (div {:class "view"}
         (input {:class "toggle" :input-type "checkbox"
                  :checked (c? (md-get td :completed))
                  :onclick (on-evt! todo.todo/td-toggle-completed (td-id td))})

         (label {:ondblclick (on-evt! todo.core/todo-start-editing)}
                (td-title td))

         (button {:class "destroy"
                   :onclick (on-evt! todo.todo/td-delete-by-key (td-id td))}))

    (input {:class "edit"
             :value (c?n (td-title td))
             :onblur (on-evt! todo.core/todo-edit (td-id td))
             :onkeydown (on-evt! todo.core/todo-edit (td-id td))})))

(defn todo-start-editing [e]
  ;; I am tempted to make this more declarative, but leave as is
  ;; as an example of how jLive allows straight JS coding
  (let [lbl (dom-tag (.-target e))
        li (fm-asc-tag lbl "li")
        edt-dom (.item (.getElementsByClassName (tag-dom li) "edit") 0)]
     (.add (.-classList (tag-dom li)) "editing")
     (.focus edt-dom)
       ;; no one gets this right any more...
     (.setSelectionRange edt-dom 0 (.-length (.-value edt-dom)))))

(defn todo-edit [e td-key]
      ;; this all might be done more declaratively
  (when-not *within-integrity* ;; todo is this still a problem? If so, handle better
    (let [edom (.-target e)
          title (str/trim (.-value edom))
          td (gTodo-lookup td-key)
          li-dom (dom-ancestor-by-tag edom "li")]
       (cond
         (or (and (= (.-type e) "blur")
                  (dom-has-class li-dom "editing"))
             (= (.-key e) "Enter"))
         (do
           (if (= title "")
             (td-delete td)
             (md-reset! td :title title))
           (.remove (.-classList li-dom) "editing"))

         (= (.-key e) "Escape")
         (do (set! (.-value edom) (td-title td))
             (.remove (.-classList li-dom) "editing"))))))

;; --- dashboard FOOTER -------------------------------------

(defn dashboard-footer []
  (footer {:class "footer"
            :hidden  (c? (zero? (count (gTodo-items))))}
    (span {:class "todo-count"
            :content (c? (pp/cl-format nil "<strong>~a</strong>  item~:P remaining"
                                       (count (remove td-completed (gTodo-items)))))})

    (ul {:class "filters"
          :selection (c-in (or @iroute "All"))}
       (doall (for [[label route] [["All", "#/"], ["Active","#/active"], ["Completed","#/completed"]]]
          (li {} (a {:href route :selector label
                      :selected (c? (= (:selector @me) (md-get (fm-asc-tag me "ul") :selection)))
                      :class (c? (if (md-get me :selected) "selected" ""))}
                   label)))))

    (button {:class "clear-completed"
              :hidden (c? (zero? (count (filter td-completed (gTodo-items)))))
              :onclick (on-evt! todo.todo/td-clear-completed)}
      "Clear completed")))

