import {firebase,googleAuthProvider,githubAuthProvider,facebookAuthProvider} from "../firebase/firebase";

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
    return (dispatch)=>{
        return firebase.auth().signInWithPopup(githubAuthProvider).catch((error)=>{
            if(error.code==="auth/account-exists-with-different-credential"){
                var credential = firebase.auth.GithubAuthProvider.credential(error.email);
                 dispatch(startGoogleLogin()).then((user)=>{
                    firebase.auth().currentUser.linkWithPopup(googleAuthProvider).then((data)=>{
                        console.log("Linking Success")
                    }).catch((error)=>{
                        console.log(error);
                    })
                })
            }
        });
    }
}

const startFacebookLogin = ()=>{
    return (dispatch)=>{
        return firebase.auth().signInWithPopup(facebookAuthProvider).catch((error)=>{
            if(error.code==="auth/account-exists-with-different-credential"){
                var credential = firebase.auth.GithubAuthProvider.credential(error.email);
                 dispatch(startGoogleLogin()).then((user)=>{
                    firebase.auth().currentUser.linkWithPopup(googleAuthProvider).then((data)=>{
                        console.log("Linking Success")
                    }).catch((error)=>{
                        console.log(error);
                    })
                })
            }
        });
    }
}

const startLogout = ()=>{
    return ()=>{
        return firebase.auth().signOut();
    }
}

export {startGoogleLogin,startGithubLogin,startFacebookLogin,startLogout,login,logout};