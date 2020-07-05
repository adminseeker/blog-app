import database from "../firebase/firebase";


const addPost = (post)=>({
    type:"ADD_POST",
    post
});

const startAddPost = (postData = {})=>{
    return (dispatch,getState)=>{
        const {title="",body="",createdAt=0}=postData;
        const post = {title,body,createdAt}
        return database.ref("posts").push(post).then((ref)=>{
            dispatch(addPost({
                id:ref.key,
                ...post
            }))
        })
    }
}

const editPost = (id,updates)=>({
    type:"EDIT_POST",
    id,
    updates
});

const startEditPost = (id,updates)=>{
    return (dispatch,getState)=>{
        return database.ref("posts/"+id).update(updates).then((ref)=>{
            dispatch(editPost(id,updates))
        })
    }
}

const removePost = (id)=>({
    type:"REMOVE_POST",
    id
});

const startRemovePost = (id)=>{
    return (dispatch,getState)=>{
        return database.ref("posts/"+id).remove().then((ref)=>{
            dispatch(removePost(id));
        })
    }
}

const setPosts = (posts)=>({
    type:"REMOVE_POST",
    posts
});

const startSetPosts = ()=>{
    return (dispatch,getState)=>{
        return database.ref("posts").once("value").then((snapshot)=>{
            const posts = [];
            snapshot.forEach((post)=>{
                posts.push({
                    id:post.key,
                    ...post.val()
                })
            })
            dispatch(setPosts(posts));
        })
    }
}

export {startAddPost,startEditPost,startRemovePost,startSetPosts};