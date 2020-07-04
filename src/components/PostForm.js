import React, { useState } from "react";

const PostForm =()=>{
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    return(
        <diV>
            <form onSubmit={(e)=>{
                e.preventDefault();
                console.log(title + "\n" +body);
            }}>
                <input type="text" placeholder="Post Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                <input type="text" placeholder="Post Body" value={body} onChange={(e)=>{setBody(e.target.value)}}/>
                <button type="submit">Save Post</button>
            </form>
            
        </diV>
    );
}

export default PostForm;