import React from 'react';
import './sign-in-and-up.styles.scss';
import { Link } from "react-router-dom";

const SignInAndUpComponent = () => {
    return (
        <div className="sign-in-and-up">
            <div className="bloc">
                <h1>Sign-In :</h1>
                <div className="sub-bloc">
                    <span>I already have an account</span>
                    <span>Or I want to sign in with my Google account : </span>
                    <Link to="./signin" className="link">
                        Sign-In
                    </Link>
                </div>
                <br />
                <div className="sub-bloc">
                    <span>I need to create an account :</span>
                    <Link to="./signup" className="link">
                        Sign-Up
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignInAndUpComponent;
