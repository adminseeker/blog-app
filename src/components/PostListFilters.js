import React, { useState } from "react";


const PostListFilters = ()=>{
    const [val,setVal] = useState("");
    return(
        <div>
            <input type="text" placeholder="Search Posts"  onChange={(e)=>{setVal(e.target.value)}}/>
            <select>
                <option>By Title</option>
                <option>By Date</option>
            </select>
            <h1>{val}</h1>
        </div>
    )
};

export default PostListFilters;