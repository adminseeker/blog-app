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

export {addPost,editPost};