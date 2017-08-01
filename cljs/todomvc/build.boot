(set-env!
 :source-map false
 :source-paths #{"src/cljs"}
 :resource-paths #{"html"}

 :dependencies '[[org.clojure/clojure "1.8.0"]         ;; add CLJ
                 [org.clojure/clojurescript "1.9.473"] ;; add CLJS
                 [adzerk/boot-cljs "1.7.228-2"]
                 [pandeiro/boot-http "0.7.6"]
                 [org.clojure/tools.nrepl "0.2.12"]
                 [adzerk/boot-reload "0.5.1"]
                 [adzerk/boot-cljs-repl "0.3.3"]
                 [com.cognitect/transit-cljs "0.8.239"]
                 [funcool/bide "1.5.0"]
                 [com.cemerick/piggieback "0.2.1"]     ;; needed by bREPL
                 [weasel "0.7.0"]])                    ;; needed by bREPL

(require '[adzerk.boot-cljs :refer [cljs]]
         '[pandeiro.boot-http :refer [serve]]
         '[adzerk.boot-reload :refer [reload]]
         '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]])

(deftask dev
  "Launch Immediate Feedback Development Environment"
  []
  (comp
   (serve :dir "target")
   (watch)
   (reload)
   (cljs-repl) ;; before cljs taskq
   (cljs)
   (target :dir #{"target"})))

(deftask offline
  "Just build target for browser file open"
  []
  (comp
   (watch)
   (cljs :optimizations :advanced)
   (target :dir #{"target"})))