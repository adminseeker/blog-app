import React from "react";
import PostForm from "./PostForm";
import {addPost} from "../actions/posts";
import {connect} from "react-redux";


const AddPostPage = (props)=>{
    return(
        <div>
            <PostForm onSubmit={(post)=>{props.dispatch(addPost(post))
                props.history.push("/")
            }}/>
        </div>
    )
}


export default connect()(AddPostPage);

