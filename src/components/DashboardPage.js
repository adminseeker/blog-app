import React from "react";
import PostList from "./PostList";
import PostListFilters from "./PostListFilters";



const DashboardPage = ()=>(
    <div>
        <PostListFilters />
        <PostList />
    </div>
);

export default DashboardPage;