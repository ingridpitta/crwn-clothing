import React, {Component} from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]:value});
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'', password: ''});
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    value={this.state.email} 
                    required 
                    handleChange={this.handleChange}
                    label='email'/>
                    <FormInput 
                    name='password' 
                    value={this.state.password} 
                    type='password' 
                    required 
                    handleChange={this.handleChange}
                    label='password'/>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>
                    {' '}
                    Sign In with Google{' '}</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;