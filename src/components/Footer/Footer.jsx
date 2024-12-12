import React from "react";
import "./Footer.css"; // Import the CSS file for styling
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className='footer'>
      <p>&copy; 2024 Job Portal. All rights reserved.</p>
      <div className='footer-links'>
        <Link className='footer-link' to='/privacy-policy'>Privacy Policy</Link>
        <Link className="footer-link" to='/terms-and-conditions'>Terms and Conditions</Link>
      </div>
    </div>
  );
};

export default Footer;
