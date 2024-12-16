import React from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className='signin-container'>
      <form className='signin-form'>
        <h3>Welcome Back,</h3>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email'
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Enter your password'
            required
          />
        </div>

        <button type='submit' className='login-button'>
          Login
        </button>

        <div className='signin-links'>
          <a href='/sign-up'>Don't have an account?</a>
          <a href='/forgot-password'>Forgot password?</a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
