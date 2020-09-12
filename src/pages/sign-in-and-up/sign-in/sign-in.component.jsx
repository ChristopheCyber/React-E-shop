import React, { Component } from 'react';
import './sign-in.styles.scss'
import FormInput from "../../../components/reusable-components/form-input/form-input.component";
import CustomButton from '../../../components/reusable-components/custom-button/custom-button.component'
// Google auth Sign-In
import { signInWithGoogle } from '../../../firebase/firebase.utils.js';

class signInComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    fctHandleSubmit = (e) => {
        e.preventDefault();
        this.setState({ email: 'valid-email@foo.bar', password: '123' })
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
                <span>Sign In:</span>
                <h1>I already have an account :</h1>
                <span>Sign-In with my Email &amp; Password :</span>
                <form onSubmit={this.fctHandleSubmit} className="sign-in-form">
                    <FormInput type="email" id=""
                        // placeholder="email@web.ext"
                        name="email"
                        label="email"
                        value={this.state.email}
                        handleChange={this.fctHandleChange}
                        required
                    />
                    <FormInput type="password" id=""
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
{/*
                     <span> Or :</span>
  */}
                    {/* Google Sign-In with Pop-up : */}
                    <h1>Or Sign-In with my Google account :</h1>
                    <br />
                        <CustomButton onClick={signInWithGoogle} value="Validation" name="Submit">
                        Google Sign-In
                    </CustomButton>
                    <br />
                </form>
            </div>
        );
    }
}

export default signInComponent;
