import React from "react";
import {connect} from "react-redux";
import PostForm from "./PostForm";
import {editPost} from "../actions/posts";


const EditPostPage = (props)=>{
    
    return(
        <div>
            <PostForm post={props.post} onSubmit={(updates)=>{props.dispatch(editPost(props.post.id,updates)); console.log(props.post)}}/>
            <button>Remove</button>
        </div>
    )
}

const mapStateToProps = (state,props)=>{
    console.log(state)
    return{
        post : state.posts.find((post)=>(post.id===props.match.params.id))
    }

};


export default connect(mapStateToProps)(EditPostPage);

