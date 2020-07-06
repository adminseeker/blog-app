import React from "react";
import {Route, Router,Switch} from "react-router-dom";
import DashboardPage from "../components/DashboardPage";
import NotFoundPage from "../components/NotFoundPage"; 
import AddPostPage from "../components/AddPostPage";
import EditPostPage from "../components/EditPostPage";
import LoginPage from "../components/LoginPage";
import createHistory from "history/createBrowserHistory"
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const history = createHistory();


const AppRouter =()=>(
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/create" component={AddPostPage} />
                <PrivateRoute path="/edit/:id" component={EditPostPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>    
    </Router>
)

export default AppRouter;
export {history};