import uniqid from "uniqid";
const addPost = ({title="",body="",createdAt=0}={})=>({
    type:"ADD_POST",
     post:{
         id:uniqid(),
         title,
         body,
         createdAt
     }
});

const editPost = (id,updates)=>({
    type:"EDIT_POST",
    id,
    updates
});

const removePost = (id)=>({
    type:"REMOVE_POST",
    id
});

const setPosts = (posts)=>({
    type:"REMOVE_POST",
    posts
});

export {addPost,editPost,removePost,setPosts};