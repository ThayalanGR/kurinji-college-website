import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {

  render() {
    return (
      <nav className="mb-1 navbar navbar-expand-lg navbar-dark nav-size base-orange lighten-1 fixed-top ">
        <Link
          className="navbar-brand text-light animated pulse infinite slow d-flex justify-content-center align-items-center"
          to="/"
        >
          <img
            src="./favicon.png"
            className="rounded-circle bg-transparent mr-2 "
            alt=""
            height="50"
          />
          <div className="base-text h4-responsive"> Counselling code  </div>
          <div className="ml-1 mr-1 text-primary"> : </div>
          <div className="font-weight-bold base-text ml-1 h3-responsive"> 3809 </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-555"
          aria-controls="navbarSupportedContent-555"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse base-orange"
          id="navbarSupportedContent-555"
        >
          <ul
            className="navbar-nav ml-auto d-flex justify-content-around align-items-center"
            style={{ width: "100%" }}
          >
            <li className="nav-item ">
              <Link className="nav-link  text-light" to="/">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle bg-transparent text-light"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="far fa-address-card"></i> About Us
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link
                  className="dropdown-item  text-dark"
                  to="/historyofcollege"
                >
                  History of College
                </Link>
                <Link
                  className="dropdown-item  text-dark"
                  to="/chairmanmessage"
                >
                  Chairman Message
                </Link>
                <Link
                  className="dropdown-item  text-dark"
                  to="/principalmessage"
                >
                  Principal Message
                </Link>
              </div>
            </li>

            {/* departments start */}

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle bg-transparent text-light"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="far fa-building"></i> Departments
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link className="dropdown-item  text-dark" to="/mech">
                  MECH
                </Link>
                <Link className="dropdown-item  text-dark" to="/eee">
                  EEE
                </Link>
                <Link className="dropdown-item  text-dark" to="/ece">
                  ECE
                </Link>
                <Link className="dropdown-item  text-dark" to="/cse">
                  CSE
                </Link>
                <Link className="dropdown-item  text-dark" to="/hands">
                  H &amp; S
                </Link>
                <Link className="dropdown-item  text-dark" to="/mecse">
                  M.E. - CSE
                </Link>
                <Link className="dropdown-item  text-dark" to="/engdesign">
                  M.E. - ENG DESIGN
                </Link>
                <Link className="dropdown-item  text-dark" to="/mba">
                  MBA
                </Link>
              </div>
              {/* </div> */}
            </li>
            {/* departments end */}
            <li className="nav-item">
              <Link className="nav-link  text-light" to="/infrastructure">
                <i className="fas fa-university"></i> Infrastructure
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-light" to="/gallery">
                <i className="far fa-image"></i> Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/alumni">
                <i className="fas fa-user-graduate"></i> Alumni
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-light" to="/contact">
                <i className="far fa-address-book"></i> Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-light" title="Students Corner" to="/student">
                <i className="fas fa-users"></i> Students Corner
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
