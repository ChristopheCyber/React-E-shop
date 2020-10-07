import React from 'react';
import './custom-button..styles.scss';

const CustomButton = ({ children, googleSignIn, classAdd, ...restProps }) => {
    // console.log("CustomButton => googleSignIn =",googleSignIn,"; classAdd =", classAdd);
    return (
        <button className={`
        ${classAdd ? "custom-button-add class-add-hover" : ""} 
        ${googleSignIn ? "button-google-sign-in" : ""} 
        custom-button
        `}
            {...restProps}
        >
            {children}
        </button>
    );
}

export default CustomButton;
