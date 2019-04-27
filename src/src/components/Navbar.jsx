import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Navbar extends Component {
  render() {
    return (
      <nav className="mb-1 navbar navbar-expand-lg navbar-dark red lighten-1 fixed-top " >
        <Link className="navbar-brand text-light animated pulse infinite slow" to="/"> <img src="./favicon.png" className="rounded-circle z-depth-0 mr-2 shadow-lg "
          alt="" height="35" /><span className="text-white"> Counselling code : </span><span className="font-weight-bold text-white"> 3809 </span></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
          aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
          <ul className="navbar-nav ml-auto d-flex justify-content-around align-items-center" style={{ width: "100%" }}>
            <li className="nav-item ">
              <Link className="nav-link  text-light" to="/">Home
                </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-light" to="/aboutus">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-light" to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-light" to="/infrastructure">Infrastructure</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-light" to="/placement">Placement Cell</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-light" to="/rankholders">Rank Holders</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-light" to="/alumini">Alumini</Link>
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
