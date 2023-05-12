import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">#VANLIFE</Link>
        </div>
        <div className="ul links">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Vans</li>
        </div>
      </nav>
    </>
  );
}

export default Nav;
