import {createStore,combineReducers, applyMiddleware, compose} from "redux";
import postsReducer from "../reducers/posts";
import filtersReducer from "../reducers/filters";
import authReducer from "../reducers/auth";
import publicPostReducer from "../reducers/publicPost";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ()=>{
    const store = createStore(combineReducers({
        posts:postsReducer,
        filters:filtersReducer,
        auth:authReducer,
        publicPost:publicPostReducer
    }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}
