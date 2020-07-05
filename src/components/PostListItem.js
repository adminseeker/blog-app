import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";

const PostListItem = (props)=>(
    <Link to={"/edit/"+props.post.id}>
        <div>
            <h3>{props.post.title} - {moment(props.post.createdAt).format("Do MMMM YYYY")}</h3>
        </div>
    </Link>
    
);



export default PostListItem;