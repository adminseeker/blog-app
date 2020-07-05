import React, { useState } from "react";
import moment from "moment";

const PostForm = (props)=>{
    const [title,setTitle] = useState(props.post ? props.post.title: "");
    const [body,setBody] = useState(props.post ? props.post.body: "");
    const [createdAt,setCreatedAt] = useState(props.expense ? moment(props.createdAt) : moment());
    return(
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                props.onSubmit({
                    title,
                    body,
                    createdAt:createdAt.valueOf()
                })
            }}>
                <input type="text" placeholder="Post Title" value={title} onChange={(e)=>{const titleVal=e.target.value; setTitle(titleVal)}}/>
                <input type="text" placeholder="Post Body" value={body} onChange={(e)=>{const bodyVal=e.target.value; setBody(bodyVal)}}/>
                <button >Save Post</button>
            </form>
            
        </div>
    );
        
}

export default PostForm;