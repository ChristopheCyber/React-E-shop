import React from 'react';
import './sign-in-and-up.styles.scss';
import { Link } from "react-router-dom";

const signInAndUpComponent = () => {
    return (
        <div className="sign-in-and-up">
            <h4>SIGN IN:</h4>
            <span>If I already have an account</span>       
            <span>Or I want to sign with my Google account :</span>       
            <Link to="./signin" className="link">
            Sign-In
            </Link>
            <br />or <br /><br />
            <span>If I need to create an account :</span>       
            <h1>Sign Up</h1>
        </div>
    );
}

export default signInAndUpComponent;
