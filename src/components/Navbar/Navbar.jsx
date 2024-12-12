import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { NavLink } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <h2>
          <span className='hea_1'>Job</span>
          <span className='hea_2'>Hunt</span>
        </h2>
      </div>
      <div className='search-bar'>
        <form action=''>
          <input type='text' placeholder='Search...' />
          <button type='submit'>
            <GoSearch />
          </button>
        </form>
      </div>
      <div className='nav-links'>
        <NavLink to='/' className='nav-link'>
          Home
        </NavLink>
        <NavLink to='/jobs' className='nav-link'>
          Jobs
        </NavLink>
        <NavLink to='/signin' className='nav-link'>
          Login
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
