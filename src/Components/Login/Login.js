import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';
import { firebaseConfig } from './firebase.config';
import logo from '../../logos/logo.png';
import Gl from '../../logos/google.png';
import './Login.css';

const Login = () => {

    const [error, setError] = useState({});
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }

    var googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then( result => {
            const user = result.user;
            localStorage.setItem("name", JSON.stringify(user.displayName));
            localStorage.setItem("email", JSON.stringify(user.email));
            history.replace(from);
            history.go(0);
        }).catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError({errorCode, errorMessage});
        });
    }

    return (
        <div className="login">
            <a href="/home"><img src={logo} alt="" className="form-logo" /></a>
            <div className="login-box">
            <h3>Login with</h3>

            <button onClick={handleGoogleSignIn} className="btn btn-outline-info"> <img src={Gl} alt="" width="20px"/>Continue With Google</button>
            <br/>
            <p>Don't have an account?<span style={{color:"red", textDecoration: "underline"}}>create an account.</span></p>
            <p style={{color: 'red'}}>{error.errorCode} {error.errorMessage}</p>
            </div>
            
            
        </div>
    );
};

export default Login;