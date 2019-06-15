import React, { Component } from "react";
import { Loader } from "../components";
import "../css/contactus.css";
import kurinji from "../images/kurinji.png";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 500);
  }

  render() {
    return this.state.isLoading ? (
      <Loader type={"bars"} />
    ) : (
      <div className="mtspace contactus">
        <div className="container">
          <div className="card mb-3 box-img-contact-us shadow-none">
            <img className="rounded img-responsive" src={kurinji} alt="Dot" />
            <div className="text-primary mt-3 h4-responsive text-center">
              Contact Us
            </div>
            <hr />
            <div className="d-flex justify-content-around align-items-center col-md-12 text-center mt-5">
              <div class="card-deck">
                <div class="card p-3 hoverable contactbox">
                  <i class="fa fa-phone fa-8x text-primary" aria-hidden="true" />
                  <div class="card-body">
                    <h5 class="card-title text-danger font-weight-bold">Telephone</h5>
                    <p class="card-text text-danger">
                      04332 - 292338 / <br /> 76038 44448
                    </p>
                  </div>
                </div>
                <div class="card p-3 hoverable contactbox">
                  <i class="fa fa-envelope fa-8x text-primary" aria-hidden="true" />
                  <div class="card-body">
                    <h5 class="card-title text-danger font-weight-bold">Email</h5>
                    <p class="card-text text-danger">
                      kcet@kurinjiengg.org / principal@kurinjiengg.org
                    </p>
                  </div>
                </div>
                <div class="card p-3 hoverable contactbox">
                  <i class="fa fa-link fa-8x text-primary" aria-hidden="true" />
                  <div class="card-body">
                    <h5 class="card-title text-danger font-weight-bold">Website</h5>
                    <p class="card-text text-danger">www.kurinjiengg.org</p>
                  </div>
                </div>
                <div class="card p-3 hoverable contactbox">
                  <i class="fa fa-address-card fa-8x text-primary" aria-hidden="true" />
                  <div class="card-body">
                    <h5 class="card-title text-danger font-weight-bold">Address</h5>
                    <p class="card-text text-danger">
                      Trichy-Dindigul NH-Road,
                      <br />
                      Manapparai - 621 307, Trichirappalli Dt.
                      <br />
                      Tamilnadu, India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="d-flex justify-content-around align-items-center mt-1 col-md-12 col-sm-12 text-center">
              <div className="card-deck">
                <div class="card p-3">
                  <i class="fa fa-link fa-5x" aria-hidden="true" />
                  <div class="card-body">
                    <h5 class="card-title">Website</h5>
                    <p class="card-text">www.kurinjiegg.org</p>
                  </div>
                </div>
                <div class="card p-3">
                  <i class="fa fa-map-marker fa-5x" aria-hidden="true" />
                  <div class="card-body">
                    <h5 class="card-title">Address</h5>
                    <p class="card-text">
                      Trichy-Dindigul NH-Road,<br/>
                      Manapparai - 621 307,
                      Trichirappalli Dt.<br/>
                      Tamilnadu, India.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
