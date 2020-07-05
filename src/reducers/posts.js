const defaultPostState = []

const postsReducer = (state=defaultPostState,action)=>{
    switch(action.type){
        case "ADD_POST":
            return [
                ...state,
                action.post
            ]
        case "EDIT_POST":
            return state.map((post)=>{
                if(post.id === action.id){
                    console.log(post);
                    return {
                        ...post,
                        ...action.updates
                    }
                }else{
                    return post;
                }
            })
        case "REMOVE_POST":
            return state.filter((post)=>(post.id!==action.id));
        case "SET_POSTS":
            return action.posts;
        default:
            return state;
    }
}

export default postsReducer;