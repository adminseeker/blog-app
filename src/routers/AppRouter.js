import React from "react";
import {Route, BrowserRouter,Switch} from "react-router-dom";
import DashboardPage from "../components/DashboardPage";
import NotFoundPage from "../components/NotFoundPage"; 
import AddPostPage from "../components/AddPostPage";
import EditPostPage from "../components/EditPostPage";


const AppRouter =()=>(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={DashboardPage} exact={true}/>
                <Route path="/dashboard" component={DashboardPage} />
                <Route path="/create" component={AddPostPage} />
                <Route path="/edit/:id" component={EditPostPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>    
    </BrowserRouter>
)

export default AppRouter;