(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'jlive.core
   :output-to "out/jlive.js"
   :output-dir "out"})
