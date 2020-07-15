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
            // Successfully signed up - show GamePage
            this.props.history.push('/');
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
                <h3>Sign Up</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" value={this.state.name} />
                </form>
            </div>
        )
    }
}