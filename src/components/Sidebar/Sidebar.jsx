import React from "react";
import { NavLink } from "react-router";
import "./Sidebar.css";
import {
  FaUserEdit,
  FaBuilding,
  FaBriefcase,
  FaList,
  FaKey,
  FaSignOutAlt,
  FaPlusSquare,
  FaInfoCircle,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h2 className='sidebar-title'>Dashboard</h2>
      <ul className='sidebar-menu'>
        <li>
          <NavLink
            to='/profile-update'
            className='side-link'
            activeClassName='active-link'
          >
            <FaUserEdit className='sidebar-icon' /> Profile Update
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/applied-companies'
            className='side-link'
            activeClassName='active-link'
          >
            <FaBriefcase className='sidebar-icon' /> Applied Companies
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/company-register'
            className='side-link'
            activeClassName='active-link'
          >
            <FaBuilding className='sidebar-icon' /> Company Register
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/add-vacancy'
            className='side-link'
            activeClassName='active-link'
          >
            <FaPlusSquare className='sidebar-icon' /> Add Vacancy
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/show-vacancies'
            className='side-link'
            activeClassName='active-link'
          >
            <FaList className='sidebar-icon' /> Show All Vacancies
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/change-password'
            className='side-link'
            activeClassName='active-link'
          >
            <FaKey className='sidebar-icon' /> Change Password
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/logout'
            className='side-link'
            activeClassName='active-link'
          >
            <FaSignOutAlt className='sidebar-icon' /> Log Out
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            className='side-link'
            activeClassName='active-link'
          >
            <FaInfoCircle className='sidebar-icon' /> About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
