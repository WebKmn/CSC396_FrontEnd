import {signInWithPopup, signOut} from "firebase/auth";
import {auth, provider} from "../firebase";
import actionTypes from "../constants/actionTypes";

const logIn = (dispatch) => {

    signInWithPopup(auth, provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch(error => alert(error.message));
}

const logOut = (dispatch) => {
    signOut(auth).then(() => {
        dispatch({
            type: actionTypes.USER_LOGOUT,
            user: null
        })
    }).catch(error => alert(error.message));
}

export {logIn, logOut};