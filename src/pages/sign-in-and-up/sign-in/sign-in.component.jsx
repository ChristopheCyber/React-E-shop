import React, { Component } from 'react';
import './sign-in.styles.scss'

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
        this.setState({email:'myemail@foo.bar',password:'123'})
    }

    fctHandleChange = (e) => {
        const {value,name} = e.target;
        this.setState({[name]:value})
    }

    render() {
        return (
            <div className="sign-in">
                <span>Sign In:</span>
                <h1>I already have an account</h1>
                <span>Sign In with your Email &amp; Password</span>
                <br />
                <form onSubmit={this.fctHandleSubmit} className="sign-in-form">
                    <label htmlFor="email" className="sign-in-form-label">
                        Email &gt;
                    </label>
                    <input type="email" id="" 
                        placeholder="email@web.ext"
                        name="email" 
                        value={this.state.email}
                        onChange={this.fctHandleChange}
                        required
                    />
                    <br />
                    <label htmlFor="password" className="sign-in-form-label">
                        Password &gt;
                    </label>
                    <input type="password" id="" 
                        placeholder="password" 
                        name="password" 
                        value={this.state.password}
                        onChange={this.fctHandleChange}
                        required
                    />
                    <br />
                    <label htmlFor="Submit" className="sign-in-form-label">
                        Validation &gt;
                    </label>
                    <input type="submit" value="OK" name="Submit" />
                </form>
            </div>
        );
    }
}

export default signInComponent;
