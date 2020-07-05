const defaultStateFilters = {
    text:"",
    sortBy:"date"
}

const filtersReducer = (state=defaultStateFilters,action)=>{
    switch(action.type){

        case "SET_TEXT_FILTER":
            return {
                ...state,
                text:action.text
            }
        case "SORT_BY_DATE":
            return{
                ...state,
                sortBy:"date"
            }
        case "SORT_BY_TITLE":
            return{
                ...state,
                sortBy:"title"
            }
        default:
            return state;
    }
}

export default filtersReducer;