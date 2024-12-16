import React from "react";
import { Link } from "react-router";
import "./Sidebar.css";
import {
  FaUserEdit,
  FaBuilding,
  FaBriefcase,
  FaList,
  FaKey,
  FaSignOutAlt,
  FaPlusSquare,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>
      <ul className="sidebar-menu">
        <li>
          <Link className="side-link" to="/profile-update">
            <FaUserEdit className="sidebar-icon" /> Profile Update
          </Link>
        </li>
        <li>
          <Link className="side-link" to="/applied-companies">
            <FaBriefcase className="sidebar-icon" /> Applied Companies
          </Link>
        </li>
        <li>
          <Link className="side-link" to="/company-register">
            <FaBuilding className="sidebar-icon" /> Company Register
          </Link>
        </li>
        <li>
          <Link className="side-link" to="/add-vacancy">
            <FaPlusSquare className="sidebar-icon" /> Add Vacancy
          </Link>
        </li>
        <li>
          <Link className="side-link" to="/show-vacancies">
            <FaList className="sidebar-icon" /> Show All Vacancies
          </Link>
        </li>
        <li>
          <Link className="side-link" to="/change-password">
            <FaKey className="sidebar-icon" /> Change Password
          </Link>
        </li>
        <li>
          <Link className="side-link" to="/logout">
            <FaSignOutAlt className="sidebar-icon" /> Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
