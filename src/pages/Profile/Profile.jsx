// Profile.jsx
import React from 'react';
import './Profile.css';
import { MdDelete } from 'react-icons/md';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-grid">
        <div className="profile-card">
          <h2 className="profile-title">
            <span>Personal Details</span>
            <span>
              <button className="edit-button" title="Edit">
                ✏️
              </button>
            </span>
          </h2>
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Phone:</strong> 123-456-7890
          </p>
          <p>
            <strong>Location:</strong> New York, USA
          </p>
          <button className="update-button">Save Profile</button>
        </div>

        <div className="profile-card">
          <h2>Your Resume</h2>
          <p>Previous Resume:</p>
          <input type="file" accept=".pdf,.doc,.docx" />
          <button className="update-button">Update Resume</button>
        </div>

        <div className="profile-card">
          <h2>Certifications</h2>
          <ul className="certifications-list">
            <li>
              <span>Full-Stack Development - Codecademy</span>
              <button className="delete-button">
                <MdDelete />
              </button>
            </li>
            <li>
              <span>Full-Stack Development - Codecademy</span>
              <button className="delete-button">
                <MdDelete />
              </button>
            </li>
            <li>
              <span>Full-Stack Development - Codecademy</span>
              <button className="delete-button">
                <MdDelete />
              </button>
            </li>
          </ul>
          <button className="update-button">Add Certifications</button>
        </div>
      </div>
      <div className="profile-card full-width">
        <h2>Applied Companies</h2>
        <ul className="applied-companies-list">
          <li>
            <span>Company A</span>
            <span>Status : Rejected</span>
            <button className="cancel-button">Cancel</button>
          </li>
          <li>
            <span>Company A</span>
            <span>Status : Rejected</span>
            <button className="cancel-button">Cancel</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
