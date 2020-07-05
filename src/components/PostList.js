import React from "react";
import {connect} from "react-redux";
import PostListItem from "./PostListItem";
import selectPosts from "../selectors/posts";

const PostList = (props)=>(
    <div>
        {
            props.posts.map((post)=>{
                return <PostListItem key={post.id} post={post}/>
            })
        }
    </div>
);

const mapStateToProps = (state,props)=>(
    {
        posts : selectPosts(state.posts,state.filters)
    }
)

export default connect(mapStateToProps)(PostList);