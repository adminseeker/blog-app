import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import AppRouter from "./routers/AppRouter"
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import {firebase} from "./firebase/firebase";
import {startSetPosts} from "./actions/posts";
import LoadingPage from "./components/LoadingPage";
import * as serviceWorker from "./serviceWorker";

const store = configureStore();

let hasRendered = false;

const jsx = (
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(<LoadingPage />,document.getElementById("root"));

const renderApp = ()=>{
  if(!hasRendered){
    ReactDOM.render(jsx,document.getElementById("root"));
    hasRendered = true
  }
}

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    store.dispatch(startSetPosts()).then(()=>{
      renderApp();
    })
  }else{
    renderApp();
    
  }
})



serviceWorker.unregister();
