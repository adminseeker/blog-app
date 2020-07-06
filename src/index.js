import React from "react";
import ReactDOM from "react-dom";
import AppRouter,{history} from "./routers/AppRouter"
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import {firebase} from "./firebase/firebase";
import {startSetPosts} from "./actions/posts";
import LoadingPage from "./components/LoadingPage";
import {login,logout} from "./actions/auth";
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
    store.dispatch(login(user.uid));
    store.dispatch(startSetPosts()).then(()=>{
      renderApp();
      if(history.location.pathname==="/"){
        history.push("/dashboard")
      }
    })
  }else{
    store.dispatch(logout())
    renderApp();
    history.push("/")
  }
})



serviceWorker.unregister();
