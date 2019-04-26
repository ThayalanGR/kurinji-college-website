import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './css/main.css'
import kurinji from './images/kurinji.png'



export default class App extends Component {
  render() {
    return (
      <div className="container-fluid ">
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
                <Link className="nav-link  text-light" to="/">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="/">Academics</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="/">Admission</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="/">Facilities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="/">Campus Life</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="/">Alumini</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="/">Contact</Link>
              </li>
            </ul>
  
          </div>
        </nav>
  
        <div className="row background-image">
          <div className="col">
  
  
            <div className="row header-row d-flex justify-content-center align-items-center">
              <div className="bg-mask"></div>
              <div className="col-md-6 col-sm-12">
                <img className="header-image mt-1 img-fluid" src={kurinji} alt="" srcSet="" />
              </div>
              <div className="col-md-6 col-sm-0 d-flex justify-content-between align-items-center p-4 headershow">
                <div className="d-flex justify-content-center align-items-center header-info " >
                  <div>
                    <i className="fas fa-map-marker-alt text-danger fa-2x pr-3 mb-4"></i>
                  </div>
                  <p className="text-center" style={{ fontSize: "13px" }}>
                    Trichy-Dindigul NH-Road,
                    Manapparai - 621 307 <br />
                    Trichirappalli Dt.
                    Tamilnadu, India.
              </p>
                </div>
                <div className="d-flex justify-content-center align-items-center header-info " >
                  <div>
                    <i className="fas fa-phone text-danger fa-2x pr-3 mb-4"></i>
                  </div>
                  <p className="text-center" style={{ fontSize: "13px" }}>
                    04332&nbsp;292338
                    76038&nbsp;44448
              </p>
                </div>
                <div className="d-flex justify-content-center align-items-center header-info " >
                  <div>
                    <i className="far fa-envelope text-danger fa-2x pr-3 mb-4"></i>
                  </div>
                  <p className="" style={{ fontSize: "13px" }}>
                    kcet@kurinjiengg.org
                    &nbsp;
                    principal@kurinjiengg.org
              </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="row bg-dark" style={{ minWidth: "100vw", minHeight: "100vh" }}>
          <div className="col">
  
  
          </div>
        </div>
        <div className="row bg-success" style={{ minWidth: "100vw", minHeight: "100vh" }}>
          <div className="col">
  
  
          </div>
        </div>
        <div className="row bg-primary" style={{ minWidth: "100vw", minHeight: "100vh" }}>
          <div className="col">
  
  
          </div>
        </div>
      </div>
    );
  }
}


