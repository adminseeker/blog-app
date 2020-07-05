import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import DashboardPage from "./components/DashboardPage";
import Header from "./components/Header";
import AppRouter from "./routers/AppRouter"
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <Header />
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// store.subscribe(()=>{
//   console.log(store.getState());
// })

serviceWorker.unregister();
