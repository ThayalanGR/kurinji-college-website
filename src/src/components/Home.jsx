import React, { Component, Fragment } from 'react';

import { Link } from "react-router-dom";


import { Loader, Footer, FirstSection, Navbar } from '../components';


export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }
  
  componentDidMount() {

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 500)

  }


  render() {
    return (
      this.state.isLoading ? <Loader type={"bars"} /> : 
      <Fragment>
        
        <Navbar />

        <div className="container-fluid">

          <FirstSection />

          <div className="row bg-white" >
            <div className="col">
              <div className="row">
                <div className="col text-center p-3 mt-3 text-danger">
                  <h2>Courses Offered</h2>
                  <hr className="red font-weight-bold" />
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
                <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              <div className="card-body">

                <h4 className="card-title">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" className="btn btn-light-blue btn-md">Read more</button>

              </div>

            </div>

            <div className="card mb-4">

              <div className="view overlay">
                <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg" alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              <div className="card-body">

                <h4 className="card-title">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" className="btn btn-light-blue btn-md">Read more</button>

              </div>

            </div>

            <div className="card mb-4">

              <div className="view overlay">
                <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg" alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              <div className="card-body">

                <h4 className="card-title">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" className="btn btn-light-blue btn-md">Read more</button>

              </div>

            </div>
            <div className="card mb-4">

              <div className="view overlay">
                <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg" alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              <div className="card-body">

                <h4 className="card-title">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" className="btn btn-light-blue btn-md">Read more</button>

              </div>

            </div>
            <div className="card mb-4">

              <div className="view overlay">
                <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg" alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              <div className="card-body">

                <h4 className="card-title">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" className="btn btn-light-blue btn-md">Read more</button>

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

                <div className="card card-image" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)` }}>
                  <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                    <div>
                      <h5 className="pink-text"><i className="fas fa-chart-pie"></i> Marketing</h5>
                      <h3 className="card-title pt-2"><strong>This is the card title</strong></h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                        optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                      Odit sed qui, dolorum!.</p>
                      <Link className="btn btn-pink" to="/courses"><i className="fas fa-clone left"></i> View project</Link>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-md-4 p-3">
                <div className="card card-image" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)` }}>
                  <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                    <div>
                      <h5 className="pink-text"><i className="fas fa-chart-pie"></i> Marketing</h5>
                      <h3 className="card-title pt-2"><strong>This is the card title</strong></h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                        optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                      Odit sed qui, dolorum!.</p>
                      <Link className="btn btn-pink" to="/courses"><i className="fas fa-clone left"></i> View project</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-3">
                <div className="card card-image" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)` }}>
                  <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                    <div>
                      <h5 className="pink-text"><i className="fas fa-chart-pie"></i> Marketing</h5>
                      <h3 className="card-title pt-2"><strong>This is the card title</strong></h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                        optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                      Odit sed qui, dolorum!.</p>
                      <Link className="btn btn-pink" to="/courses"><i className="fas fa-clone left"></i> View project</Link>
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

          <div className="row container-fluid  ml-5 pl-5">
            <div className="col-md-3">
              <div className="view overlay zoom">
                <img src="http://localhost/kurinji/api/uploads/companies/1.jpg" className="img-fluid " alt="zoom" />
                <div className="mask flex-center waves-effect waves-light">
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="view overlay zoom">
                <img src="http://localhost/kurinji/api/uploads/companies/2.jpg" className="img-fluid " alt="zoom" />
                <div className="mask flex-center waves-effect waves-light">
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="view overlay zoom">
                <img src="http://localhost/kurinji/api/uploads/companies/3.jpg" className="img-fluid " alt="zoom" />
                <div className="mask flex-center waves-effect waves-light">
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="view overlay zoom">
                <img src="http://localhost/kurinji/api/uploads/companies/4.jpg" className="img-fluid " alt="zoom" />
                <div className="mask flex-center waves-effect waves-light">
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="view overlay zoom">
                <img src="http://localhost/kurinji/api/uploads/companies/5.jpg" className="img-fluid " alt="zoom" />
                <div className="mask flex-center waves-effect waves-light">
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="view overlay zoom">
                <img src="http://localhost/kurinji/api/uploads/companies/6.jpg" className="img-fluid " alt="zoom" />
                <div className="mask flex-center waves-effect waves-light">
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="view overlay zoom">
                <img src="http://localhost/kurinji/api/uploads/companies/7.jpg" className="img-fluid " alt="zoom" />
                <div className="mask flex-center waves-effect waves-light">
                </div>
              </div>
            </div>
            <div className="col-12 mb-5">
              <hr className="font-weight-bold text-danger" />

            </div>

          </div>

          <Footer />

        </div>

      </Fragment>

    )
  }
}