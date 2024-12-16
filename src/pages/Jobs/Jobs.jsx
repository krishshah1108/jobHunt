import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import './Jobs.css';
import { Link } from 'react-router';

const Jobs = () => {
  return (
    <>
      <div className="job-container">
        <div className="left-side">
          <div className="content">
            <div className="job-header">
              <h2>Find your dream job at one platform</h2>
              <p>Discover opportunities, apply easily, and land your dream job!</p>
            </div>
            <Link to="/sign-in" className="login-btn">
              Login Now
            </Link>
          </div>
        </div>
        <div className="right-side">
          <img src="/home-cover.jpg" alt="Job platform" className="side-image" />
        </div>
      </div>

      <div className="job-card-container">
        <div className="job-card">
          <div className="job-left">
            <img
              className="company-img"
              src="https://via.placeholder.com/100" // Add company logo URL here
              alt="Company Logo"
            />
            <h2 className="job-title">Frontend Developer</h2>
            <p className="job-description">
              We are looking for a Frontend Developer to join our growing team. You'll be
              responsible for building responsive web applications using modern front-end
              technologies.
            </p>
          </div>

          <div className="job-right">
            <div className="job-details">
              <p>
                <strong>Location:</strong> New York, USA
              </p>
              <p>
                <strong>Salary:</strong> $50,000 - $70,000/year
              </p>
              <p>
                <strong>Type:</strong> Full-time
              </p>
              <p>
                <strong>Job Category:</strong> Software Development
              </p>
            </div>

            <button className="apply-button">Apply Now</button>

            <div className="social-links">
              <a href="https://www.gmail.com" target="_blank">
                <SiGmail className="social-icon" />
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <FaTwitterSquare className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="job-card">
          <div className="job-left">
            <img
              className="company-img"
              src="https://via.placeholder.com/100" // Add company logo URL here
              alt="Company Logo"
            />
            <h2 className="job-title">Frontend Developer</h2>
            <p className="job-description">
              We are looking for a Frontend Developer to join our growing team. You'll be
              responsible for building responsive web applications using modern front-end
              technologies.
            </p>
          </div>

          <div className="job-right">
            <div className="job-details">
              <p>
                <strong>Location:</strong> New York, USA
              </p>
              <p>
                <strong>Salary:</strong> $50,000 - $70,000/year
              </p>
              <p>
                <strong>Type:</strong> Full-time
              </p>
              <p>
                <strong>Job Category:</strong> Software Development
              </p>
            </div>

            <button className="apply-button">Apply Now</button>

            <div className="social-links">
              <a href="https://www.gmail.com" target="_blank">
                <SiGmail className="social-icon" />
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <FaTwitterSquare className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="job-card">
          <div className="job-left">
            <img
              className="company-img"
              src="https://via.placeholder.com/100" // Add company logo URL here
              alt="Company Logo"
            />
            <h2 className="job-title">Frontend Developer</h2>
            <p className="job-description">
              We are looking for a Frontend Developer to join our growing team. You'll be
              responsible for building responsive web applications using modern front-end
              technologies.
            </p>
          </div>

          <div className="job-right">
            <div className="job-details">
              <p>
                <strong>Location:</strong> New York, USA
              </p>
              <p>
                <strong>Salary:</strong> $50,000 - $70,000/year
              </p>
              <p>
                <strong>Type:</strong> Full-time
              </p>
              <p>
                <strong>Job Category:</strong> Software Development
              </p>
            </div>

            <button className="apply-button">Apply Now</button>

            <div className="social-links">
              <a href="https://www.gmail.com" target="_blank">
                <SiGmail className="social-icon" />
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <FaTwitterSquare className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="job-card">
          <div className="job-left">
            <img
              className="company-img"
              src="https://via.placeholder.com/100" // Add company logo URL here
              alt="Company Logo"
            />
            <h2 className="job-title">Frontend Developer</h2>
            <p className="job-description">
              We are looking for a passionate Frontend Developer to join our growing team. You'll be
              responsible for building responsive web applications using modern front-end
              technologies.
            </p>
          </div>

          <div className="job-right">
            <div className="job-details">
              <p>
                <strong>Location:</strong> New York, USA
              </p>
              <p>
                <strong>Salary:</strong> $50,000 - $70,000/year
              </p>
              <p>
                <strong>Type:</strong> Full-time
              </p>
              <p>
                <strong>Job Category:</strong> Software Development
              </p>
            </div>

            <button className="apply-button">Apply Now</button>

            <div className="social-links">
              <a href="https://www.gmail.com" target="_blank">
                <SiGmail className="social-icon" />
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <FaTwitterSquare className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="job-card">
          <div className="job-left">
            <img
              className="company-img"
              src="https://via.placeholder.com/100" // Add company logo URL here
              alt="Company Logo"
            />
            <h2 className="job-title">Frontend Developer</h2>
            <p className="job-description">
              We are looking for a passionate Frontend Developer to join our growing team. You'll be
              responsible for building responsive web applications using modern front-end
              technologies.
            </p>
          </div>

          <div className="job-right">
            <div className="job-details">
              <p>
                <strong>Location:</strong> New York, USA
              </p>
              <p>
                <strong>Salary:</strong> $50,000 - $70,000/year
              </p>
              <p>
                <strong>Type:</strong> Full-time
              </p>
              <p>
                <strong>Job Category:</strong> Software Development
              </p>
            </div>

            <button className="apply-button">Apply Now</button>

            <div className="social-links">
              <a href="https://www.gmail.com" target="_blank">
                <SiGmail className="social-icon" />
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <FaTwitterSquare className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
