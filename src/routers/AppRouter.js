import React from "react";
import {Link, Route, BrowserRouter,Switch} from "react-router-dom";
import DashboardPage from "../components/DashboardPage";
import NotFoundPage from "../components/NotFoundPage"; 
import PostForm from "../components/PostForm";

const AppRouter =()=>(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={DashboardPage} exact={true}/>
                <Route path="/dashboard" component={DashboardPage} />
                <Route path="/create" component={PostForm} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>    
    </BrowserRouter>
)

export default AppRouter;