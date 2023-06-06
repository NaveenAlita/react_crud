import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    
      <>
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#545e6f",
              background: isActive ? "#7600dc" : "#f0f0f0",
            })}
            to="/"
          >
            <b>User Listing</b>
          </NavLink>

          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#545e6f",
              background: isActive ? "#7600dc" : "#f0f0f0",
            })}
            to="/add-user"
          >
            <b>Add User</b>
          </NavLink>

          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#545e6f",
              background: isActive ? "#7600dc" : "#f0f0f0",
            })}
            to="/edit-user"
          >
            <b>Edit User</b>
          </NavLink>

        </div>
      </nav>
      </>
   
  );
};

export default NavBar;
