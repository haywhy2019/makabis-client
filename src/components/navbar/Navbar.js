import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'; 

function Navbar({ currentUser }) {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
        <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto left">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                About Us <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Our Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
              >
              e-Events
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/impression"
              >
              Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/impression"
              >
              Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/impression"
              >
              Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
