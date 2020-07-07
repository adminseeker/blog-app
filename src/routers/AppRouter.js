import React, { useState } from "react";
import {Route, Router,Switch} from "react-router-dom";
import DashboardPage from "../components/DashboardPage";
import NotFoundPage from "../components/NotFoundPage"; 
import AddPostPage from "../components/AddPostPage";
import EditPostPage from "../components/EditPostPage";
import LoginPage from "../components/LoginPage";
import createHistory from "history/createBrowserHistory"
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import ReadPostPage from "../components/ReadPostPage";
import {startGetPost} from "../actions/posts";

const history = createHistory();

const AppRouter =(props)=>{
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");

   return(
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/create" component={AddPostPage} />
                <PrivateRoute path="/edit/:id" component={EditPostPage} />
                <Route path="/read/:id" component={(props)=>{
                    
                    startGetPost(props.match.params.id).then((posts)=>{
                        setTitle(posts[0].title);
                        setBody(posts[0].body);
                    })
                    
                    return (
                        <ReadPostPage title={title} body={body}/>
                    )
                }}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>    
    </Router>
   )
}
export default AppRouter;
export {history};