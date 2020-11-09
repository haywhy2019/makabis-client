import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'; 
import Logo from '../../asset/images/Makabis Logo2.png'


function Navbar({ currentUser }) {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
        <img src={Logo} width="50"  alt="" />
        
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

          <li className="nav-item active ml-2">
              <Link className="nav-link" to="/">
               Home 
              </Link>
            </li>
            <li className="nav-item ml-2">
              <Link className="nav-link" to="/about">
                About Us 
              </Link>
            </li>
            <li className="nav-item ml-2">
              <Link className="nav-link" to="/services">
                Our Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
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
