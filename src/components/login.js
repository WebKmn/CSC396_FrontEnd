import React from 'react';
import '../styles/login.css'
import logo from '../images/logo192.png';
import Button from '@mui/material/Button';
import {logIn} from '../actions/authActions';
import {useStateValue} from '../store/StateProvider';

const Login = () => {
    // eslint-disable-next-line no-empty-pattern
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        logIn(dispatch);
    }
    return (
        <div className="login">
            <div className="login_container">
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src={logo}  alt="Login Image"/>
                <div className="login_text">
                    <h1>Sign in to Dating App</h1>
                </div>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login;