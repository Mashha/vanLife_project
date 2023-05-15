import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <header>
        <Link className="site-logo" to="/">
          #VANLIFE
        </Link>

        <nav>
          <NavLink
            to="/host"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Vans
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Nav;
