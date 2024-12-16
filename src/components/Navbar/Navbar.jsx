import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { NavLink } from 'react-router';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <h2>
          <span className="hea_1">Job</span>
          <span className="hea_2">Hunt</span>
        </h2>
      </div>
      <div className="search-bar">
        <form action="">
          <input type="text" placeholder="Find your job..." />
          <button type="submit">
            <GoSearch />
          </button>
        </form>
      </div>
      <div className="nav-links">
        {/* <NavLink to="/" className="nav-link">
          Home
        </NavLink> */}
        <NavLink to="/jobs" className="nav-link">
          Jobs
        </NavLink>
        <NavLink to="/company" className="nav-link">
          Company
        </NavLink>
        <NavLink to="/profile" className="nav-link">
          <img className="profile-icon" src="https://via.placeholder.com/50" alt="Profile" />
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
