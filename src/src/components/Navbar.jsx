import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Navbar extends Component {
  render() {
    return (
      <nav className="mb-1 navbar navbar-expand-lg navbar-dark nav-size base-orange lighten-1 fixed-top " >
        <Link className="navbar-brand text-light animated pulse infinite slow" to="/"> <img src="./favicon.png" className="rounded-circle z-depth-0 mt-0 mr-0 shadow-lg "
          alt="" height="50" /><span className="base-text h4"> Counselling code : </span><span className="font-weight-bold base-text h4"> 3809 </span></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
          aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse base-orange" id="navbarSupportedContent-555">
          <ul className="navbar-nav ml-auto d-flex justify-content-around align-items-center" style={{ width: "100%" }}>
            <li className="nav-item ">
              <Link className="nav-link  text-light" to="/">Home
                </Link>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle bg-transparent text-light" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About Us
                </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item  text-dark" to="/historyofcollege">History of College</Link>
                <Link className="dropdown-item  text-dark" to="/chairmanmessage">Chairman Message</Link>
                <Link className="dropdown-item  text-dark" to="/principalmessage">Principal Message</Link>
              </div>
            </li>

            {/* departments start */}

            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle bg-transparent text-light" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Departments
                </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item  text-dark" to="/mech">MECH</Link>
                <Link className="dropdown-item  text-dark" to="/eee">EEE</Link>
                <Link className="dropdown-item  text-dark" to="/ece">ECE</Link>
                <Link className="dropdown-item  text-dark" to="/cse">CSE</Link>
                <Link className="dropdown-item  text-dark" to="/hands">H &amp; S</Link>
                <Link className="dropdown-item  text-dark" to="/mecse">M.E. - CSE</Link>
                <Link className="dropdown-item  text-dark" to="/engdesign">M.E. - ENG DESIGN</Link>
                <Link className="dropdown-item  text-dark" to="/mba">MBA</Link>
              </div>
              {/* </div> */}
            </li>
            {/* departments end */}
            <li className="nav-item">
              <Link className="nav-link  text-light" to="/infrastructure">Infrastructure</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-light" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle bg-transparent text-light" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Alumni
                </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item  text-dark" to="/alumni">Alumni Registration</Link>
                <Link className="dropdown-item  text-dark" to="/alumni">Link-2</Link>
                <Link className="dropdown-item  text-dark" to="/alumni">Link-3</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-light" to="/contact">Contact Us</Link>
            </li>
          </ul>

        </div>
      </nav>
    )
  }
}
