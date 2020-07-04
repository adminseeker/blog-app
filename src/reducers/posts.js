const defaultPostState = []

const postsReducer = (state=defaultPostState,action)=>{
    switch(action.type){
        case "ADD_POST":
            return [
                ...state,
                action.post
            ]
    }
}

export default postsReducer;