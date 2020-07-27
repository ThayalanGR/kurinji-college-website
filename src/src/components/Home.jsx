import React, { Component, Fragment } from 'react';

import { Link } from "react-router-dom";


import { Loader, Footer, constants } from '../components';
import axios from 'axios';
import { Carousel, Card } from 'antd';
import Slider from "react-slick";
import downloadForm from "../pdf/admission.docx";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  cssEase: "linear",
  variableWidth: true
};

const gridStyle = {
  // width: '25%',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  fontSize: "16px"
}
const gridStyle1 = {
  width: '25%',
  textAlign: 'center',
  fontSize: "16px"
}

const baseUrl = constants.baseUrl;;


export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      disclosure: "",
      disclosureTitle: "",
      isLoading: true,
      carouselDataStore: [],
      news: [],
    };
  }

  componentDidMount() {

      this.setState({ isLoading: false });
      this.fetchDisclosureLink();
      this.fetchEvents();
      this.fetchNews();
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

  fetchEvents() {
    axios
      .get(`${baseUrl}/api/homesectionone.php`)
      .then(data => {
        console.log(data);
        this.setState({ carouselDataStore: data.data })
      })
      .catch(err => console.log(err))
  }

  fetchNews() {
    axios
      .get(`${baseUrl}/api/homenews.php`)
      .then(data => {
        this.setState({ news: data.data })
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      this.state.isLoading ? <Loader type={"bars"} /> :
        <Fragment>
          <div className="container-fluid" style={{padding: 0}}>
            <div className="row home-first-container">
              <div className="col-md-6 home-main-carousel-container">
                <Carousel autoplay
                dotPosition={"top"}
                >
                  {
                    this.state.carouselDataStore.map((item, key) => {
                      return (
                        <div className="home-carousel-bg" key={key} >
                          <img src={`${baseUrl+item[2]}`} alt="" className="home-carousel-bg-image" />
                          <div className="home-carousel-title">
                            {item[1]}
                          </div>
                        </div>
                      )
                    })
                  }
                </Carousel>
              </div>
              <div className="col-md-6 home-news-bg-container">
              <div className="news-carousel-holder">
                <Slider {...settings}>
                      {
                        this.state.news.map((item, key) => {
                          return (
                            <div className="home-news-container">
                              <div className="home-news-title">
                                {item[1]}
                              </div>
                              <div className="home-news-date">
                                {item[2]}
                              </div>
                            </div>
                          )
                        })
                      }
                    </Slider>
                </div>
                <div className="admission-form-holder">
                <a
                  className="btn download-form-button"
                  href={downloadForm}
                  rel="noopener noreferrer"
                  target="_blank"
                  title={"Admission Form"}
                >
                  Download Admission Form
                </a>
              </div>
              <div className="home-courses-offered">
                <Card style={{borderRadius: "20px"}} title={<p style={{color: "white", fontSize: "20px"}}>UG - Courses Offered</p>} className="course-card-style">
                  <Card.Grid className="course-card-style-item" style={gridStyle1}>MECH</Card.Grid>
                  <Card.Grid className="course-card-style-item" style={gridStyle1}>EEE</Card.Grid>
                  <Card.Grid className="course-card-style-item" style={gridStyle1}>ECE</Card.Grid>
                  <Card.Grid className="course-card-style-item" style={gridStyle1}>CSE</Card.Grid>
                </Card>
                <Card title={<p style={{color: "white", fontSize: "20px"}}>PG - Courses Offered</p>} className="course-card-style">
                  <Card.Grid className="course-card-style-item" style={gridStyle}>ME - CSE</Card.Grid>
                  <Card.Grid className="course-card-style-item" style={gridStyle}>MBA</Card.Grid>
                  <Card.Grid className="course-card-style-item" style={gridStyle}>ME - Eng Design</Card.Grid>
                </Card>
              </div>
              </div>
            </div>
            <div className="row bg-white" >
              <div className="col">
                <div className="row">
                  <div className="col text-center p-3 mt-3 text-warning">
                    <h2 className="text-warning">Courses Offered</h2>
                    <hr className="base-orange font-weight-bold" />
                  </div>
                </div>
                <div className="row">
                  <div className="col text-center">
                    <h3 className="text-warning font-weight-bold">
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
                  <Link to="/mech" type="button" className="btn  base-orange btn-md text-white font-weight-bold">Read more</Link>

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
                  <Link to="/eee" type="button" className="btn  base-orange btn-md text-white font-weight-bold">Read more</Link>

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
                  <Link to="/ece" type="button" className="btn  base-orange btn-md text-white font-weight-bold">Read more</Link>

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
                  <Link to="/cse" type="button" className="btn base-orange btn-md text-white font-weight-bold">Read more</Link>

                </div>

              </div>

            </div>

            <div className="row mt-4 ">
              <div className="col text-center">
                <h3 className="text-warning font-weight-bold">
                  PG Courses
                <hr />
                </h3>
              </div>
            </div>

            <div className="container-fluid mb-4">

              <div className="row">
                <div className="col-md-4 p-3">
                  <div className="card card-image" style={{ backgroundImage: `url(${baseUrl}/api/uploads/departments/mecse.jpg)` }}>
                    <div className="text-white font-weight-bold text-center d-flex align-items-center rgba-black-strong py-5 px-4">
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
                    <div className="text-white font-weight-bold text-center d-flex align-items-center rgba-black-strong py-5 px-4">
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
                    <div className="text-white font-weight-bold text-center d-flex align-items-center rgba-black-strong py-5 px-4">
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
                <h2 className="text-warning font-weight-bold">
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
                <hr className="font-weight-bold text-warning" />
              </div>

            </div>
           
            <div className="row">
              <div className="col text-center p-3">
              <a
                className="h4-responsive btn btn-outline-warning"
                href={`${constants.baseUrl}${this.state.disclosure}`}
                rel="noopener noreferrer"
                target="_blank"
                title={this.state.disclosureTitle}
              >
                Mandatory-Disclosure
              </a>
              </div>
            </div>


          </div>
            <Footer />

        </Fragment>

    )
  }
}