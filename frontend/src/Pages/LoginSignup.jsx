import React from 'react'
import './CSS/Loginsignup.css';

const LoginSignup = () => {
  return (
   <div className="loginsignup">
    <div className="login-container">
      <h1>Sign Up</h1>
      <div className="login-fields">
        <input type="text" placeholder='Your Name' />
        <input type="email"placeholder='Email Address' />
        <input type="password" placeholder='Password'/>  
      </div>
      <button>Continue</button>
      <p className='login-login'>Already have an account?</p><span>Login</span>
      <div className="login-agree">
        <input type='checkbox'name=''id=''/>
        <p>By continuing, I agree to the terms of use & privacy policy </p>
      </div>
    </div>
   </div>
  )
}

export default LoginSignup