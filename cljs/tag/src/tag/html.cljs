(ns tag.html
  (:require
    [clojure.string :as str]
    [cljs.pprint :as pp]
    [tiltontec.util.core :refer [pln]]
    [tiltontec.cell.base :refer [unbound]]
    [tiltontec.cell.observer :refer [observe observe-by-type]]
    [tiltontec.model.core
             :refer-macros [the-kids mdv!]
             :refer [md-get  fm! make md-reset! backdoor-reset!]
             :as md]
    ))

(declare to-attrs)

(defn to-html [me]
  (if (string? me) me
  (let [h (pp/cl-format nil "<~a ~a>~{~a~}</~0@*~a>"
                (:tag @me) (to-attrs me)
                (map to-html (md-get me :kids)))]
      ;;(println :genned h)
      h)))

(defn to-attrs [me]
  (let [attr-keys [:class :hidden :placeholder
                  :autofocus :href :display :type :for
                  :onclick :onkeypress :id]]
    ;;(println :toattrs (keys @me))
    (let [j (str/join " "
              (for [[k v] (select-keys @me attr-keys)]
                (do ;; (println :k k :v v)
                  (if (some #{k} [:hidden])
                    (do
                      ;;(println :hidden!!!!!!!!!! v (nil? v))
                      (if v (name k) ""))
                    (pp/cl-format nil "~a='~a'" (name k) v)))))]
      ;;(println :jttrs j)
      (or j ""))))

(defn dom [me]
  (let [id (md-get me :id)]
    (assert id)

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
    (println :tag-kids-obs!!! (md-get me :tag) (count newv)(count oldv))
    (doseq [oldk oldv]
      ;;(println :stillinnewv (some #{oldk} newv))
      (when-not (some #{oldk} newv)
        ;;(println :obskids-del!!!! (md-get oldk :tag))
        (let [kdom (dom oldk)]
            (assert kdom "no kdom oldk")
            (.removeChild (.-parentNode kdom) kdom))))

    (println :installing-any-new-kids!!!!)
    
    (loop [[newk & newkr] newv
          priork nil]
      (when newk
        (when-not (some #{newk} oldv)
          (let [incubator (.createElement js/document "div")]
            (set! (.-innerHTML incubator) (to-html newk))
            (backdoor-reset! newk :dom-cache (.-firstChild incubator))
            (.insertBefore (dom me) (dom newk)
              (when priork (.-nextSibling (dom priork))))))
        (recur newkr newk)))))

(defmethod observe-by-type [::tag.html/tag] [slot me newv oldv _]
  (when (not= oldv unbound)
    (println :tag-obs!!!!!!!!!! slot (tag me) newv)))
