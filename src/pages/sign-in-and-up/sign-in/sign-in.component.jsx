import React, { Component } from 'react';
import './sign-in.styles.scss'
import FormInput from "../../../components/reusable-components/form-input/form-input.component";
import CustomButton from '../../../components/reusable-components/custom-button/custom-button.component'
// Google auth Sign-In
import { auth, signInWithGoogle } from '../../../firebase/firebase.utils.js';

class SignInComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    fctHandleSubmit = async (e) => {
        // preventing default form submit-action
        e.preventDefault();
        // destructuring vals from state (avoiding to have to write 'this.state.email')
        const { email, password} = this.state;
        //check User With Email And Password
        try {
            // signIn With Email And Password
            await auth.signInWithEmailAndPassword (
                email, password
            );
            //then put empty fields again / clearing the form
            this.setState({
                email: '',
                password: '',
            });
        } catch (error) {// Handle Errors 
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong Password.');
              } else {
                alert(errorMessage);
              }
              console.log(error);
        }
    }

    fctHandleChange = (e) => {
        // destructuring some event's props
        const { value, name } = e.target;
        // console.log("handleChange => name =",name,"; value=",value);
        // console.log("this.state before = ",this.state);
        this.setState({ [name]: value }
            //  ,()=>{console.log("this.state after = ", this.state);}            
        );
    }
    render() {
        return (
            <div className="sign-in">
                <form onSubmit={this.fctHandleSubmit} className="sign-in-form">
                    <h1><span>Sign In:</span></h1>
                    <h1>I already have an <span> account </span>:</h1>
                    <FormInput type="email" id="i1"
                        // placeholder="email@web.ext"
                        name="email"
                        label="email"
                        value={this.state.email}
                        handleChange={this.fctHandleChange}
                        required
                    />
                    <FormInput type="password" id="i2"
                        // placeholder="password"
                        name="password"
                        label="password"
                        value={this.state.password}
                        handleChange={this.fctHandleChange}
                        required
                    />
                    {/*
                     <label htmlFor="Submit" className="sign-in-form-label">
                         Validation &gt;
                     </label>
                    */}
                    {/*<input type="submit" value="Validation" name="Submit" />*/}
                    <CustomButton type="submit" value="Validation" name="Submit">
                        Validation
                    </CustomButton>
                    <br />
                    {/* Google Sign-In with Pop-up : */}
                    <h1>Or Sign-In with my <span> Google account </span>:</h1>
                    <CustomButton onClick={signInWithGoogle}
                        /* put type="button"
                        because any buttons inside of a form element 
                        will cause the form to treat 
                        the button as type="submit" by default 
                        and then trigger asking the user to fill other fields 
                        present in the form (email and password)
                        */
                        type="button" 
                        value="Validation" name="Submit" 
                        googleSignIn
                    >
                        Google Sign-In
                    </CustomButton>
                    <br />
                </form>
            </div>
        );
    }
}

export default SignInComponent;
