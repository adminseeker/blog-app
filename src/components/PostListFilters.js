import React from "react";
import {connect} from "react-redux";
import {setTextFilter,sortByDate,sortByTitle} from "../actions/filters";

const PostListFilters = (props)=>{
    return(
        <div>
            <input type="text" placeholder="Search Posts" value={props.filters.text}
                onChange={(e)=>{
                    const text= e.target.value;
                    props.dispatch(setTextFilter(text))
                }}
            />
            <select value={props.filters.sortBy}
                onChange={(e)=>{
                    const sortBy = e.target.value;
                    if(sortBy==="date"){
                        props.dispatch(sortByDate());
                    }else if(sortBy==="title"){
                        props.dispatch(sortByTitle());
                    }
                }}
            >
                <option value="title">By Title</option>
                <option value="date">By Date</option>
            </select>

        </div>
    )
};

const mapStateToProps = (state)=>{
    return {
    filters:state.filters
    }
}

export default connect(mapStateToProps)(PostListFilters);