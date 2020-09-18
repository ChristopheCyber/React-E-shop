import React from 'react';
import './custom-button..styles.scss'

const CustomButton = ({children,googleSignIn,...restProps}) => {
    // console.log("SignIn comp=>  googleSignIn ? :=", googleSignIn?"button-for-sign-out":"");
    return (
        <button className={`
            ${googleSignIn?"button-google-sign-in":""} custom-button`} 
            {...restProps}
        >
            {children}
        </button>
    );
}

export default CustomButton;
