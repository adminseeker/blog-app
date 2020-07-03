import React from "react";
import {Link, Route, BrowserRouter,Switch} from "react-router-dom";
import DashboardPage from "../components/DashboardPage";
import NotFoundPage from "../components/NotFoundPage"; 

const AppRouter =()=>(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={DashboardPage} exact={true}/>
                <Route path="/dashboard" component={DashboardPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>    
    </BrowserRouter>
)

export default AppRouter;