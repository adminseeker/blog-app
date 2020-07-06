import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {startLogout} from "../actions/auth";

const Header = (props)=>(
  <div>
    <h1>My Blog</h1>
    <Link to="/create">Create Post</Link>
    <button onClick={()=>{
      props.dispatch(startLogout())
    }}>Logout</button>
  </div>  
);

export default connect()(Header);