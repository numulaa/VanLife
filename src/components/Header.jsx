import React from "react";

import { Link, NavLink } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const navStyle = {
    color: "#161616",
    fontWeight: "bold",
    textDecoration: "underline",
  };
  return (
    <header>
      <Link to="/" className="site-logo">
        #VANLIFE
      </Link>

      <nav>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? navStyle : null)}>
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? navStyle : null)}>
          About
        </NavLink>

        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? navStyle : null)}>
          Vans
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
