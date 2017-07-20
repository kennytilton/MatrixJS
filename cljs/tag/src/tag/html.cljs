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
    ))

(defn dom-has-class [dom class]
  (when dom
    (let [cs (.-classList dom)]
      (println :d-has-c (.-tagName dom) cs)
      (when cs
        (.contains (.-classList dom) class)))))

(declare to-attrs)

;; todo -- make this multifn and test tag type in default
(defn to-html [me]
  (cond
    (string? me) me
    (coll? me) (let [b$ (map to-html me)]
                  (println :to-html-coll!!!!! (count me) :b$ b$)
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
  (let [attr-keys [:class :hidden :placeholder :checked :disabled
                  :autofocus :href :display :input-type :for
                  :onclick :ondblclick :onkeypress :onblur
                  :onkeydown :id :value]]
    ;;(println :toattrs (keys @me))
    (let [j (str/join " "
              (for [[k v] (select-keys @me attr-keys)]
                (do ;; (println :k k :v v)
                  (if (some #{k} [:hidden :checked :disabled :autofocus])
                    (do
                      ;;(println :attr-boolean!! k v (nil? v))
                      (if v (name k) ""))
                    (pp/cl-format nil "~a='~a'" (true-html k) v)))))]
      ;;(println :jttrs j)
      (or j ""))))

(defn tag-dom [me]
  ;;(println :domgo me)
  (let [id (md-get me :id)]
    (assert id)
    ;;(println :dom-uding-id id)
    (or (md-get me :dom-cache)
      (let [dom (.getElementById js/document id)]
        (assert dom)
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
              (println :obskids-del!!!! oldk (md-get oldk :tag))
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


(defmethod observe-by-type [::tag.html/tag] [slot me newv oldv _]
  (when (not= oldv unbound)
    (println :tag-obs-entry slot newv)
    (cond
      (= slot :content) (set! (.-innerHTML (tag-dom me)) newv)
      (+global-attr+ slot) (do #_ (set-global-attr slot me newv oldv)
                              (println :attr-newv newv)
                              (case slot
                              :hidden (set! (.-hidden (tag-dom me)) newv)
                              :class (set! (.-className (tag-dom me)) newv)
                              :checked (set! (.-checked (tag-dom me)) newv)))
      :default (println :oby-type-punt slot (tag me) newv))))


