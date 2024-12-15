import React from 'react';
import './SignUp.css';
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="signup-submit-button">
          Sign Up
        </button>
      </form>

      <button className="google-login-button"><span><FaGoogle /></span><span>Sign in with Google </span></button>

      <div className="signup-links">
        <a href="/sign-in"> Already have an account?</a>
      </div>
    </div>
  );
};

export default SignUp;
