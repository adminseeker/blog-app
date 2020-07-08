import {firebase,googleAuthProvider,githubAuthProvider} from "../firebase/firebase";

const login = (uid)=>{
    return {
        type:"LOGIN",
        uid
    }
}

const logout = ()=>{
    return {
        type:"LOGOUT"
    }
}

const startGoogleLogin = ()=>{
    return ()=>{
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

const startGithubLogin = ()=>{
    return ()=>{
        return firebase.auth().signInWithPopup(githubAuthProvider);
    }
}

const startLogout = ()=>{
    return ()=>{
        return firebase.auth().signOut();
    }
}

export {startGoogleLogin,startGithubLogin,startLogout,login,logout};