import React from 'react'
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils'

//WE are using a class based component because
//we have to store what the user is typing in

class SignIn extends React.Component{
    constructor(props){
        super(props);    

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = event =>{
        //destructuring from the HTML Element
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email' 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        required
                        label='email'
                    />
                
                    <FormInput
                        name='password' 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        required
                        label='password'
                     />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton 
                            onClick={signInWithGoogle}
                            // isGoogleSign in is equal too isGoogleSign = true
                            isGoogleSignIn
                            >Sign in with Google
                        </CustomButton>
                    </div>

                    
                </form>
            
            </div>
        );
    }
}
export default SignIn;