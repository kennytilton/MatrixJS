(ns tag.html
  (:require
    [clojure.string :as str]
    [cljs.pprint :as pp]
    [tiltontec.cell.base :refer [unbound]]
    [tiltontec.cell.observer :refer [observe observe-by-type]]
    [tiltontec.model.core
             :refer-macros [the-kids mdv!]
             :refer [md-get  fm! make md-reset! backdoor-reset!]
             :as md]
    [tag.gen :refer [tagfo]]))

(defn dom-has-class [dom class]
  (when dom
    (let [cs (.-classList dom)]
      (println :d-has-c (.-tagName dom) cs)
      (when cs
        (.contains (.-classList dom) class)))))

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

(declare to-attrs)

;; todo -- make this multifn and test tag type in default
(defn to-html [me]
  (cond
    (string? me) me
    (coll? me) (let [b$ (map to-html me)]
                  ;; (println :to-html-coll!!!!! (count me) :b$ b$)
                  (apply str b$))
    :default 
      (let [h (pp/cl-format nil "<~a ~a>~@[~a~]~{~a~}</~0@*~a>"
                (:tag @me) (to-attrs me)
                (md-get me :content)
                (map to-html (md-get me :kids)))]
        ;;(println :genned h)
        h))) 

(def +true-html+ {:input-type "type"})

(defn true-html [keyword]
  (or (keyword +true-html+)
    (name keyword)))

(defn to-attrs [me]
  (let [unblank (fn [s] (when (pos? (count s)) s))
        attr-keys [:class :hidden :placeholder :checked :disabled
                  :autofocus :href :input-type :for
                  :onclick :ondblclick :onkeypress :onblur
                  :onkeydown :id :value]
        style-keys [:display]]
    ;;(println :toattrs (keys @me))
    (let [ga (str/join " "
              (for [[k v] (select-keys @me attr-keys)]
                  (if (some #{k} [:hidden :checked :disabled :autofocus])
                    (do
                      ;;(println :attr-boolean!! k v (nil? v))
                      (if v (name k) ""))
                    (pp/cl-format nil "~a='~a'" (true-html k) v))))
          css (str/join ";"
                (for [[k v] (select-keys @me style-keys)]
                  (pp/cl-format nil "~a:~a" (name k) v)))]
      ;; (println :gas ga css (string? css))
      
      (let [fa (pp/cl-format nil "~@[~a~]~@[ style='~a'~]"
                      (unblank ga)(unblank css))]
        (when (= (:name @me) :todo-li) #_ (pos? (count fa))
          (println :attrs!!!! fa (string? fa) (count fa)))
        fa)
        #_
      (or ga ""))))

(defn tag-dom [me]
  ;;(println :domgo me)
  (let [id (md-get me :id)]
    (assert id)
    ;;(println :dom-uding-id id)
    (or (md-get me :dom-cache)
      (let [dom (.getElementById js/document (str id))]
        (assert dom (str "tag-dom failed on id " id))
        (println :tag-dom-succeeds!!!!!!!!!!! id)
        (backdoor-reset! me :dom-cache dom)))))

(def on-event-attr-template
  "(function () { ~a(event~{,~s~})})()")

(defn on-evt [fn-name & cb-args]
  (pp/cl-format nil on-event-attr-template fn-name cb-args))

(defn tag [me]
  (md-get me :tag))

(defmethod observe [:kids ::tag.html/tag] [_ me newv oldv _]
  (when-not (= oldv unbound)
    (cond
      (some #{(.-tagName (tag-dom me))} ["LABEL"])
      (do (println :bam-html!!! (tag-dom me))
          (set! (.-innerHTML (tag-dom me))
            (to-html newv)))

      :default
      (do
        (println :tag-kids-obs!!! (md-get me :tag) (count newv)(count oldv))
        (doseq [oldk oldv]
          (when-not (string? oldk)
            (println :stillinnewv oldk (some #{oldk} newv))
            (when-not (some #{oldk} newv)
              (println :obskids-del!!!! oldk (tagfo oldk))
              (let [kdom (tag-dom oldk)]
                  (assert kdom "no kdom oldk")
                  (.removeChild (.-parentNode kdom) kdom)))))

        (println :installing-any-new-kids!!!!)
        
        (loop [[newk & newkr] newv
              priork nil]
          (when newk
            (when-not (some #{newk} oldv)
              (let [incubator (.createElement js/document "div")]
                (set! (.-innerHTML incubator) (to-html newk))
                (backdoor-reset! newk :dom-cache (.-firstChild incubator))
                (.insertBefore (tag-dom me) (tag-dom newk)
                  (when priork (.-nextSibling (tag-dom priork))))))
            (recur newkr newk)))))))

(def +global-attr+ (set [:class :checked :hidden]))
(def +inline-css+ (set [:display]))

(defmethod observe-by-type [::tag.html/tag] [slot me newv oldv _]
  (when (not= oldv unbound)
    (println :tag-obs-entry slot newv)
    (cond
      (= slot :content) (set! (.-innerHTML (tag-dom me)) newv)
      (+global-attr+ slot) (do #_ (set-global-attr slot me newv oldv)
                              ;;(println :attr-newv newv)
                              (case slot
                                :hidden (set! (.-hidden (tag-dom me)) newv)
                                :class (set! (.-className (tag-dom me)) newv)
                                :checked (set! (.-checked (tag-dom me)) newv)))
      (+inline-css+ slot) (do (println :obs-inline-css!!! slot)
                            (case slot
                                :display (set! (.-display (.-style (tag-dom me))) newv)))
      :default (println :oby-type-punt slot (tag me) newv))))


