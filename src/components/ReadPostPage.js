import React from "react";


const ReadPostPage=(props)=>{
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
        </div>
    );
}


export default ReadPostPage;