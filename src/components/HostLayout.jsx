import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
  const navStyle = {
    color: "#161616",
    fontWeight: "bold",
    textDecoration: "underline",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="/host"
          end
          style={({ isActive }) => (isActive ? navStyle : null)}>
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          style={({ isActive }) => (isActive ? navStyle : null)}>
          Income
        </NavLink>
        <NavLink
          to="/host/reviews"
          style={({ isActive }) => (isActive ? navStyle : null)}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
