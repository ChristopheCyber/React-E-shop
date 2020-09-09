import React, { Component } from 'react';
import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component";

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
                <h1>I already have an account</h1>
                <span>Sign In with your Email &amp; Password :</span>
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
                    <br />
                    <input type="submit" value="Validation" name="Submit" />
                    <br />
                </form>
            </div>
        );
    }
}

export default signInComponent;
