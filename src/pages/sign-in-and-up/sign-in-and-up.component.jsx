import React from 'react';
import './sign-in-and-up.styles.scss';
import { Link } from "react-router-dom";

const signInAndUpComponent = () => {
    return (
        <div className="sign-in-and-up">
            <h4>SIGN IN:</h4>
            <span>I already have an account</span>       
            <span>Or I want to sign in with my Google account :</span>       
            <Link to="./signin" className="link">
                Sign-In
            </Link>
            <br />
            <span>I need to create an account :</span>       
            <Link to="./signup" className="link">
                Sign-Up
            </Link>
        </div>
    );
}

export default signInAndUpComponent;
