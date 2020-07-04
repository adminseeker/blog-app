import React from "react";
import PostForm from "./PostForm";
import {addPost} from "../actions/posts";
import {connect} from "react-redux";


const AddPostPage = (props)=>(
    <div>
        <PostForm onSubmit={(post)=>{props.dispatch(addPost(post))}}/>
    </div>
)



export default connect()(AddPostPage);

