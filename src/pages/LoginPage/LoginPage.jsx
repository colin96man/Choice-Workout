import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './LoginPage.css';

class LoginPage extends Component {
    state = {
        email: '',
        pw:''
    };

    handleChange = (e) => {
        this.setState({
          // Using ES2015 Computed Property Names
          [e.target.name]: e.target.value
        });
      }
    
    handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await userService.login(this.state);
          // Let <App> know a user has signed up!
          this.props.handleSignupOrLogin();
          // Successfully signed up - show HomePage
          this.props.history.push('/home');
        } catch (err) {
          // Use a modal or toast in your apps instead of alert
          alert('Invalid Credentials!');
        }
    }

    render() {
        return(
            <div className='LoginPage'>
                <h2 className='h2-log'>Log In</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} /><br/>
                    <input type="password" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} /><br/>
                    <button>Log In</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='/'>Cancel</Link>
                </form>
            </div>
        )
    }
}

export default LoginPage;