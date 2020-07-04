import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import DashboardPage from "./components/DashboardPage";
import Header from "./components/Header";
import AppRouter from "./routers/AppRouter"
import configureStore from "./store/configureStore";


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);

const store = configureStore();

serviceWorker.unregister();
