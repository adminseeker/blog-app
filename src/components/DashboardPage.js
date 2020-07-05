import React from "react";
import PostList from "./PostList";
import PostListFilters from "./PostListFilters";
import {Link} from "react-router-dom";

const DashboardPage = ()=>(
    <div>
        <PostListFilters />
        <Link to="/create">Add Post</Link>
        <PostList />
    </div>
);

export default DashboardPage;