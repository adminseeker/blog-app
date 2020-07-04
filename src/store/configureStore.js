import {createStore} from "redux";
import postsReducer from "../reducers/posts";


const configureStore=()=>{
    const store = createStore(postsReducer,[]);
    return store;
}

export default configureStore;