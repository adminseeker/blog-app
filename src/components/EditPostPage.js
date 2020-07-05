import React from "react";
import {connect} from "react-redux";
import PostForm from "./PostForm";
import {editPost,removePost} from "../actions/posts";


const EditPostPage = (props)=>{
    return(
        <div>
            <PostForm post={props.post} onSubmit={(updates)=>{props.dispatch(editPost(props.post.id,updates)); props.history.push("/")}}/>
            <button onClick={(e)=>{props.dispatch(removePost(props.post.id)); props.history.push("/")}}>Remove</button>
        </div>
    )
}

const mapStateToProps = (state,props)=>{
    return{
        post : state.posts.find((post)=>(post.id===props.match.params.id))
    }

};


export default connect(mapStateToProps)(EditPostPage);

