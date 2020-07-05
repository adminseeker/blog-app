import React, { useState } from "react";
import moment from "moment";

const PostForm = (props)=>{
    const [title,setTitle] = useState(props.post ? props.post.title: "");
    const [body,setBody] = useState(props.post ? props.post.body: "");
    const [createdAt] = useState(props.expense ? moment(props.createdAt) : moment());
    const [error,setError] = useState("");
    return(
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                if(!title || !body){
                    setError("Post Title and Body are required");
                }else{
                    props.onSubmit({
                        title,
                        body,
                        createdAt:createdAt.valueOf()
                    })
            }
            }}>
                {error && <p>{error}</p>}
                <input type="text" autoFocus placeholder="Post Title" value={title} onChange={(e)=>{const titleVal=e.target.value; setTitle(titleVal)}}/>
                <textarea type="text" placeholder="Post Body" value={body} onChange={(e)=>{const bodyVal=e.target.value; setBody(bodyVal)}}>Enter Post Body Here</textarea>
                <button >Save Post</button>
            </form>
            
        </div>
    );
        
}

export default PostForm;