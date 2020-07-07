import React from "react";
import {connect} from "react-redux";
import PostForm from "./PostForm";
import {Link} from "react-router-dom";
import {startEditPost,startRemovePost} from "../actions/posts";


const EditPostPage = (props)=>{
    return(
        <div>
            <Link to={"/read/"+props.match.params.id}>Share Your Post</Link>
            <PostForm post={props.post} onSubmit={(updates)=>{props.dispatch(startEditPost(props.post.id,updates)); props.history.push("/")}}/>
            <button onClick={(e)=>{props.dispatch(startRemovePost(props.post.id)); props.history.push("/")}}>Remove</button>
        </div>
    )
}

const mapStateToProps = (state,props)=>{
    return{
        post : state.posts.find((post)=>(post.id===props.match.params.id))
    }

};


export default connect(mapStateToProps)(EditPostPage);

