import React, { Component } from 'react';
import './sign-up.styles.scss'
import FormInput from "../../../components/reusable-components/form-input/form-input.component";
import CustomButton from '../../../components/reusable-components/custom-button/custom-button.component'
// Google auth Sign-In
import { auth, createUserProfileDoc } from '../../../firebase/firebase.utils.js';

class signUpComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // what user types in the sign-up form:
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    fctHandleSubmit = async (e) => {
        // preventing default form submit-action
        e.preventDefault();
        // destructuring vals from state (avoiding to have to write 'this.state.email')
        const { displayName, email, password, confirmPassword } = this.state;
        // checking password conf
        if (password !== confirmPassword) {
            alert("Passwords don't match !, please correct them");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email, password
            );
            //then
            
            await createUserProfileDoc(user, { displayName });
            //then put empty fields again /clearing the form
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {// Handle Errors 
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/weak-password') {
                alert('The password is too weak.(at least 6 caracteres needed)');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        }

        // this.setState({ email: 'valid-email@foo.bar', password: '123', confirmPassword: '123' })
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
        // destructuring vals from state (avoiding to have to write 'this.state.email')
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <form onSubmit={this.fctHandleSubmit} className="sign-up-form">
                    <h1>
                        Signing Up : I <span> create my account </span>
                    </h1>
                    <h1> with my name, email and a password :</h1>
                    <FormInput type="text" id="i0"
                        // placeholder="My Name and Surname"
                        name="displayName"
                        label="Name"
                        value={displayName}
                        handleChange={this.fctHandleChange}
                        required
                    />
                    <FormInput type="email" id="i1"
                        // placeholder="email@web.ext"
                        name="email"
                        label="Email"
                        value={email}
                        handleChange={this.fctHandleChange}
                        required
                    />
                    <FormInput type="password" id="i2"
                        // placeholder="password"
                        name="password"
                        label="Password"
                        value={password}
                        handleChange={this.fctHandleChange}
                        required
                    />
                    <FormInput type="password" id="i3"
                        // placeholder="confirmPassword"
                        name="confirmPassword"
                        label="Password confirmation"
                        value={confirmPassword}
                        handleChange={this.fctHandleChange}
                        required
                    />
                    {/*
                     <label htmlFor="Submit" className="sign-in-form-label">
                         Validation &gt;
                     </label>
                    */}
                    {/*<input type="submit" value="Validation" name="Submit" />
                    <CustomButton type="submit" value="Validation" name="Submit">
                        Validation
                    </CustomButton>*/}
                    {/*<br />*/}
                    {/* Google Sign-Up Pop-up : */}
                    {/*<h1>Sign-Up for <span> creating my account </span>:</h1>*/}
                    <CustomButton type="submit" value="Validation" name="Submit">
                        Validation
                    </CustomButton>
                    {/*
                     <CustomButton onClick={createUserProfileDoc}
                         value="Validation" name="Submit" 
                         googleSignIn
                     >
                         Validation
                     </CustomButton>
  */}
                    {/*<br />*/}
                </form>
            </div>
        );
    }
}

export default signUpComponent;
