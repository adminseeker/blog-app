import React from "react";
import {connect} from "react-redux";
import {startGoogleLogin,startGithubLogin} from "../actions/auth";
import { GithubLoginButton,GoogleLoginButton } from "react-social-login-buttons";

const LoginPage =(props)=>(
    <div className="box-layout">
        <div className="box-layout__box">
        <h1 className="box-layout__title">Seeker Blog</h1>
        <p className="box-layout__subtitle">Its time to get blogging</p>
        <GoogleLoginButton 
            onClick={()=>{
                props.dispatch(startGoogleLogin())
            }}
        >
        </GoogleLoginButton>
        <GithubLoginButton 
        className="github-button"
        onClick={()=>{
            props.dispatch(startGithubLogin())
        }}
        >
        </GithubLoginButton>
        </div>
    </div>
)   

export default connect()(LoginPage);



// <button 
//             className="btn btn-block btn-social btn-twitter"
//             onClick={()=>{
//                 props.dispatch(startFacebookLogin())
//             }}
//         >Login with Facebook</button>