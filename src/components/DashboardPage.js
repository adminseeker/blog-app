import React from "react";
import PostList from "./PostList";
import PostListFilters from "./PostListFilters";
import Header from "./Header";


const DashboardPage = ()=>(
    <div>
        <Header />
        <PostListFilters />
        <PostList />
    </div>
);

export default DashboardPage;