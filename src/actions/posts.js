import database from "../firebase/firebase";


const addPost = (post)=>({
    type:"ADD_POST",
    post
});

const startAddPost = (postData = {})=>{
    return (dispatch,getState)=>{
        const uid = getState().auth.uid;
        const {title="",body="",createdAt=0}=postData;
        const post = {title,body,createdAt}
        return database.ref("users/"+uid+"/posts").push(post).then((ref)=>{
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
        const uid = getState().auth.uid;
        return database.ref("users/"+uid+"/posts/"+id).update(updates).then((ref)=>{
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
        const uid = getState().auth.uid;
        return database.ref("users/"+uid+"posts/"+id).remove().then((ref)=>{
            dispatch(removePost(id));
        })
    }
}

const setPosts = (posts)=>({
    type:"SET_POSTS",
    posts
});

const startSetPosts = ()=>{
    return (dispatch,getState)=>{
        const uid = getState().auth.uid;
        return database.ref("users/"+uid+"/posts").once("value").then((snapshot)=>{
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

const startGetPost =(id)=>{
    return database.ref("users").once("value").then((userSnapshot)=>{
      const posts=[];
      userSnapshot.forEach((postSnapshot)=>{
          if(postSnapshot.val().posts[id]){
           posts.push({
            id,   
            title:postSnapshot.val().posts[id].title,
            body:  postSnapshot.val().posts[id].body
             
           })
        }
        
      })
      return posts;
  })
  
}


export {startAddPost,startEditPost,startRemovePost,startSetPosts,startGetPost};