import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="row">
      <div className="col container base-orange text-center" style={{ width: "100vw", height: "auto" }}>
        <div className="row">
          <div className="col-md-6 col-sm-12 p-5 mt-2 text-center font-weight-bold">
            <h4 className="font-weight-bold text-white mr-5">Quick Links

            <hr className="font-weight-bold text-white white" />

              <ul className="navbar-nav ml-auto d-flex justify-content-around align-items-center" style={{ width: "100%" }}>
                <li className="nav-item ">
                  <Link className="nav-link  text-white footer-quick-links" to="/">Home
                </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-white footer-quick-links" to="/historyofcollege">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-white footer-quick-links" to="/chairmanmessage">Chairman'S Message</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-white footer-quick-links" to="/principalmessage">Principal'S Message</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-white footer-quick-links" to="/mech">Courses</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-white footer-quick-links" to="/infrastructure">Infrastructure</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-white footer-quick-links" to="/gallery">Gallery</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-white footer-quick-links" to="/alumni">Alumini</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-white footer-quick-links" to="/contact">Contact Us</Link>
                </li>
              </ul>

            </h4>

          </div>
          <div className="col-md-6 p-5 col-sm-12 col-xs-12">
            <h4 className="font-weight-bold text-white mr-5">Location</h4>
            <div className="">
              <div className="gmap_canvas">
                <hr className="font-weight-bold text-white white" />
                {/* eslint-disable-next-line */}
                <iframe className="mapshow" id="gmap_canvas" src="https://maps.google.com/maps?q=kurinji%20college%20of%20engineering%20and%20technology&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                </iframe>
              </div>
            </div>


          </div>
        </div>
        <div className="row p-2">
          <div className="col-md-6 col-sm-12  text-center text-white font-weight-normal">
            All rights reserved @ kurinjiengg.org © 2019
        </div>
          <div className="col-md-6 col-sm-12 text-center text-white font-weight-normal">
            Designed and Developed by <a className="text-warning font-weight-bolder" style={{ fontSize: "18px" }} href="https://thayalangr.in" target="_blank" without="true" rel="noopener noreferrer"><strong>Thayalan GR</strong></a>
          </div>
        </div>
      </div>
    </div>
  )
}
