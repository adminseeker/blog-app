import React from "react";
import {Link} from "react-router-dom";

const Header = ()=>(
  <div>
    <h1>My Blog</h1>
    <Link to="/create">Create Post</Link>
    <button>Logout</button>
  </div>  
);

export default Header;