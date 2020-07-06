import React from "react";
import PostList from "./PostList";
import PostListFilters from "./PostListFilters";
import Header from "./Header";


const DashboardPage = ()=>(
    <div>
        <PostListFilters />
        <PostList />
    </div>
);

export default DashboardPage;