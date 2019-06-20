import React, { Component, Fragment } from 'react';

import { Link } from "react-router-dom";


import { Loader, Footer, FirstSection, constants } from '../components';
import axios from 'axios';

const baseUrl = constants.baseUrl;;


export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      disclosure: "",
      disclosureTitle: "",
      isLoading: true
    };
  }

  componentDidMount() {

      this.setState({ isLoading: false });
      this.fetchDisclosureLink();
  }

  fetchDisclosureLink() {
    axios
    .get(`${constants.baseUrl}/api/disclosure.php`)
    .then(data => {
      if(data.data.length > 0)
        this.setState({
          disclosure: data.data[0][1],
          disclosureTitle: data.data[0][2]
        });
    })
    .catch(err => console.error(err));
  }


  render() {
    return (
      this.state.isLoading ? <Loader type={"bars"} /> :
        <Fragment>


          <div className="container-fluid">

            <FirstSection />

            <div className="row bg-white" >
              <div className="col">
                <div className="row">
                  <div className="col text-center p-3 mt-3 text-danger">
                    <h2>Courses Offered</h2>
                    <hr className="base-orange font-weight-bold" />
                  </div>
                </div>
                <div className="row">
                  <div className="col text-center">
                    <h3 className="text-danger font-weight-bold">
                      UG Courses
                  <hr />
                    </h3>
                  </div>
                </div>

              </div>
            </div>

            <div className="card-deck container-fluid">

              <div className="card mb-4">

                <div className="view overlay">
                  <img className="card-img-top" src={`${baseUrl}/api/uploads/departments/mech.jpeg`} alt="" />
                  <a href="#!">
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>

                <div className="card-body">

                  <h4 className="card-title">MECH</h4>
                  <p className="card-text">
                    Mechanical engineering is one of the oldest and greatest courses of study in Engineering. The department of Mechanical Engineering in our Kurinji College of Engineering and Technology was estab....
                  </p>
                  <Link to="/mech" type="button" className="btn  base-orange btn-md text-white">Read more</Link>

                </div>

              </div>

              <div className="card mb-4">

                <div className="view overlay">
                  <img className="card-img-top" height="180" src={`${baseUrl}/api/uploads/departments/eee.jpg`} alt="" />
                  <a href="#!">
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>

                <div className="card-body">

                  <h4 className="card-title">EEE</h4>
                  <p className="card-text">
                  To impart training with the best of teaching expertise supported by excellent laboratory infrastructure and exposure to recent trends in the industry, to ensure that the students are moul...
                  </p>
                  <Link to="/eee" type="button" className="btn  base-orange btn-md text-white">Read more</Link>

                </div>

              </div>

              <div className="card mb-4">

                <div className="view overlay">
                  <img className="card-img-top" src={`${baseUrl}/api/uploads/departments/ece.jpg`} alt="" />

                  <a href="#!">
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>

                <div className="card-body">

                  <h4 className="card-title">ECE</h4>
                  <p className="card-text">
                  To provide a quality education in the field of engineering, management, communication, information technology and other engineering fields.To set High standards of Compreh...
                  
                  </p>
                  <Link to="/ece" type="button" className="btn  base-orange btn-md text-white">Read more</Link>

                </div>

              </div>
              <div className="card mb-4">

                <div className="view overlay">
                  <img className="card-img-top" src={`${baseUrl}/api/uploads/departments/cse.jpg`} alt="" />

                  <a href="#!">
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>

                <div className="card-body">

                  <h4 className="card-title">CSE</h4>
                  <p className="card-text">
                  To dedicate the work to advance and communicate the specific knowledge and understanding to the Medicore and Excellent students with a systematic scientific approach and coordi...
                  </p>
                  <Link to="/cse" type="button" className="btn base-orange btn-md text-white">Read more</Link>

                </div>

              </div>

            </div>

            <div className="row mt-4 ">
              <div className="col text-center">
                <h3 className="text-danger font-weight-bold">
                  PG Courses
                <hr />
                </h3>
              </div>
            </div>

            <div className="container-fluid mb-4">

              <div className="row">
                <div className="col-md-4 p-3">
                  <div className="card card-image" style={{ backgroundImage: `url(${baseUrl}/api/uploads/departments/mecse.jpg)` }}>
                    <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                      <div>
                        <h3 className="card-title pt-2"><strong> M.E. CSE</strong></h3>
                        <p> To dedicate the work to advance and communicate the specific knowledge and understanding to the Medicore and Excellent students with a systematic scientific approach and coordication of acti...</p>
                        <Link className="btn base-orange" to="/mecse"><i className="fas fa-clone left"></i> Read more</Link>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-md-4 p-3">
                <div className="card card-image" style={{ backgroundImage: `url(${baseUrl}/api/uploads/departments/design.jpg)` }}>
                    <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                      <div>
                        <h3 className="card-title pt-2"><strong> M.E. Engineering Design</strong></h3>
                        <p>
                        To dedicate the work to advance and communicate the specific knowledge and understanding to the Medicore and Excellent students with a systematic scientific approach and coordi...
                        </p>
                        <Link className="btn base-orange" to="/engdesign"><i className="fas fa-clone left"></i> Read more</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 p-3">
                   <div className="card card-image" style={{ backgroundImage: `url(${baseUrl}/api/uploads/departments/mba.jpg)` }}>
                    <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                      <div>
                        <h3 className="card-title pt-2"><strong>MBA</strong></h3>
                        <p>
                        To impart training with the best of teaching expertise supported by excellent laboratory infrastructure and exposure to recent trends in the industry, to ensure that the students are moul...
                        </p>
                        <Link className="btn base-orange" to="/mba"><i className="fas fa-clone left"></i>Read more</Link>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <div className="row mt-4 pt-4 ">
              <div className="col text-center">
                <h2 className="text-danger font-weight-bold">
                  Our Students Placed in
                <hr />
                </h2>
              </div>
            </div>

            <div className="row container-fluid  ml-md-3 pl-md-3">
              <div className="col-md-3 col-sm-12 d-flex justify-content-center">
                <div className="view overlay zoom">
                  <img src={`${baseUrl}/api/uploads/companies/1.jpg`} className="img-fluid " alt="zoom" />
                  <div className="mask flex-center waves-effect waves-light">
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center">
                <div className="view overlay zoom">
                  <img src={`${baseUrl}/api/uploads/companies/2.jpg`} className="img-fluid " alt="zoom" />
                  <div className="mask flex-center waves-effect waves-light">
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center">
                <div className="view overlay zoom">
                  <img src={`${baseUrl}/api/uploads/companies/3.jpg`} className="img-fluid " alt="zoom" />
                  <div className="mask flex-center waves-effect waves-light">
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center">
                <div className="view overlay zoom">
                  <img src={`${baseUrl}/api/uploads/companies/4.jpg`} className="img-fluid " alt="zoom" />
                  <div className="mask flex-center waves-effect waves-light">
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center">
                <div className="view overlay zoom">
                  <img src={`${baseUrl}/api/uploads/companies/5.jpg`} className="img-fluid " alt="zoom" />
                  <div className="mask flex-center waves-effect waves-light">
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center">
                <div className="view overlay zoom">
                  <img src={`${baseUrl}/api/uploads/companies/6.jpg`} className="img-fluid " alt="zoom" />
                  <div className="mask flex-center waves-effect waves-light">
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center">
                <div className="view overlay zoom">
                  <img src={`${baseUrl}/api/uploads/companies/7.jpg`} className="img-fluid " alt="zoom" />
                  <div className="mask flex-center waves-effect waves-light">
                  </div>
                </div>
              </div>
              <div className="col-12">
                <hr className="font-weight-bold text-danger" />
              </div>

            </div>
            <div className="row">
              <div className="col text-center p-3">
              <a
                className="h4-responsive btn btn-outline-danger"
                href={`${constants.baseUrl}${this.state.disclosure}`}
                rel="noopener noreferrer"
                target="_blank"
                title={this.state.disclosureTitle}
              >
                Mandatory-Disclosure
              </a>
              </div>
            </div>

            <Footer />

          </div>

        </Fragment>

    )
  }
}