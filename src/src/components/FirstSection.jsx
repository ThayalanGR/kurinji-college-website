import React, { Component } from 'react'
import kurinji from "../images/favicon.png"
import '../css/toastmod.css'
import "../css/mainhead.css";
import { Link } from "react-router-dom";

export default class FirstSection extends Component {
  render() {
    return (
      <div className="home-main-container-wrapper" >
        <Link to="/" className="home-main-header-college-name-logo-holder">
          <img src={kurinji} className="home-college-logo-image" alt="Kurinji" />
          <div className="home-college-name">
            <div className="home-college-name-title">
              Kurinji
              </div>
            <div className="home-college-name-subtitle">
              college of engineering and technology
              </div>
          </div>
        </Link>
        <div className="home-college-description-holder" >
          <div className="home-college-description">
            <i className="fas fa-map-marker-alt college-info-icon"></i>
            <div className="college-info-container">
              <div>Trichy-Dindigul NH-Road,</div>
              <div>Manapparai - 621 307</div>
              <div>Trichirappalli Dt. Tamilnadu, India.</div>
            </div>
          </div>
          <div className="home-college-description" >
            <i className="fas fa-phone college-info-icon"></i>
            <div className="college-info-container">
              <div>04332&nbsp;292338</div>
              <div>76038&nbsp;44448</div>
            </div>
          </div>
          <div className="home-college-description" >
            <i className="fas fa-envelope college-info-icon"></i>
            <div className="college-info-container">
              <div>kcet@kurinjiengg.org</div>
              <div>principal@kurinjiengg.org</div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}