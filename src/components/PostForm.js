import React, { useState } from "react";

const formOnSubmit = (e)=>{
    e.preventDefault();
}

const PostForm =()=>{
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    return(
        <diV>
            <form onSubmit={formOnSubmit}>
                <input type="text" placeholder="Post Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                <input type="text" placeholder="Post Body" value={body} onChange={(e)=>{setBody(e.target.value)}}/>
            </form>
            <h1>{title}</h1>
            <h3>{body}</h3>
        </diV>
    );
}

export default PostForm;