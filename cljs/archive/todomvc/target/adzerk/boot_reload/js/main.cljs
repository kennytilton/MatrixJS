(ns adzerk.boot-reload.js.main (:require [adzerk.boot-reload.client :as client]))
(client/connect "ws://localhost:62408" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (+))})