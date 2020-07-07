import database from "../firebase/firebase";

const getPost = (posts)=>({
    type:"GET_POST",
    posts
});

const startGetPost = (id,posts=[])=>{
    return (dispatch)=>{
        return database.ref("users").once("value").then((userSnapshot)=>{
            userSnapshot.forEach((postSnapshot)=>{
                if(postSnapshot.val().posts[id]){
                    posts.push({
                        id,
                        ...postSnapshot.val().posts[id]
                    })
                    
                }
            })
            
            dispatch(getPost(posts));
            console.log(posts);
        })
        
    }
}
var posts =[];
const startGetPost1 =(id)=>{
      database.ref("users").once("value").then((userSnapshot)=>{
        
        userSnapshot.forEach((postSnapshot)=>{
            if(postSnapshot.val().posts[id]){
                posts.push({
                    id,
                    title:postSnapshot.val().posts[id].title,
                    body:postSnapshot.val().posts[id].body
                })
               
            }
        })
        
    })
    
}


export default startGetPost;
export {startGetPost1,posts};