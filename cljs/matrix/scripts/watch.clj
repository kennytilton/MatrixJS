(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'matrix.core
   :output-to "out/matrix.js"
   :output-dir "out"})
