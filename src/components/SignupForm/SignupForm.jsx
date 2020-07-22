import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

class SignupForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        passwordConf: '',
    }

    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
          // Using ES2015 Computed Property Names
          [e.target.name]: e.target.value
        });
    }
    
    handleSubmit = async (e) => {
    e.preventDefault();
        try {
            await userService.signup(this.state);
            // Let <App> know a user has signed up!
            this.props.handleSignupOrLogin();
            // Successfully signed up - show HomePage
            this.props.history.push('/home');
        } catch (err) {
            // Invalid user data (probably duplicate email)
            this.props.updateMessage(err.message);
        }
    }
    
    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
    }

    render() {
        return(
            <div>
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} /><br/>
                    <input type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} /><br/>
                    <input type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} /><br/>
                    <input type="password" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} /><br/>
                    <button disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='/'>Cancel</Link>
                </form>
            </div>
        )
    }
}

export default SignupForm;