import React from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className='signin-container'>
      <form className='signin-form'>
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

        <div className='form-group'>
          <p>Sign in as:</p>
          <label>
            <input type='radio' name='userType' value='user' />
            User
          </label>
          <label>
            <input type='radio' name='userType' value='company' />
            Company
          </label>
        </div>

        <button type='submit' className='login-button'>
          Login
        </button>

        <div className='signin-links'>
          <a href='/signup'>Don't have an account?</a>
          <a href='/forgot-password'>Forgot password?</a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
