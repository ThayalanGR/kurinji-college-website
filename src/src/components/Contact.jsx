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
          <div className="row">
            <div className="col text-center">
              <img className="rounded img-responsive" src={kurinji} alt="Dot" />
            </div>
          </div>
          <div className="row">
            <div className="col text-primary font-weight-bold mt-3 h3-responsive text-center">
              Contact Us
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <div class="hoverable box-contact-us">
                <i class="fa fa-phone fa-4x text-primary" aria-hidden="true" />
                <div class="">
                  <h5 class="text-danger font-weight-bold">Telephone</h5>
                  <p class="text-danger">
                    04332 - 292338 / <br /> 76038 44448
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div class="hoverable box-contact-us">
                <i
                  class="fa fa-envelope fa-4x text-primary"
                  aria-hidden="true"
                />
                <div class="">
                  <h5 class="text-danger font-weight-bold">Email</h5>
                  <p class="text-danger">
                    kcet@kurinjiengg.org / principal@kurinjiengg.org
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div class="hoverable box-contact-us">
                <i class="fa fa-link fa-4x text-primary" aria-hidden="true" />
                <div class="">
                  <h5 class="text-danger font-weight-bold">Website</h5>
                  <p class="text-danger">www.kurinjiengg.org</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div class="hoverable box-contact-us">
                <i
                  class="fa fa-address-card fa-4x text-primary"
                  aria-hidden="true"
                />
                <div class="">
                  <h5 class="text-danger font-weight-bold">Address</h5>
                  <p class="text-danger">
                    Trichy-Dindigul NH-Road,
                    <br />
                    Manapparai - 621 307,
                    <br />
                    Trichirappalli Dt.
                    <br />
                    Tamilnadu, India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
