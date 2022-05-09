import './App.css';
import React, {useEffect} from "react";
import {auth} from './firebase'
import Login from './components/login'
import Header from './components/Header'
import DatingCards from './components/DatingCards'
import {useStateValue} from './store/StateProvider'
import actionTypes from "./constants/actionTypes";
import SwipeButtons from "./components/SwipeButtons";

function App() {
    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        const loggedOut = auth.onAuthStateChanged(authUser => {
            if(authUser){
                dispatch({
                    type: actionTypes.USER_LOGGEDIN,
                    user: authUser
                })
            } else {
                dispatch({
                    type: actionTypes.USER_LOGOUT,
                    user: null
                })
            }
        })
        loggedOut();
    }, [dispatch])
  return (
    <div className="App">
        {!user ? <Login /> : (
            <div>
                <Header />
                <DatingCards />
                <SwipeButtons />
            </div>
        )}
    </div>
  );
}

export default App;
