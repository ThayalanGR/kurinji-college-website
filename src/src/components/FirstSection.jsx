import React, { Component } from 'react'
import { toast } from 'react-toastify';
import constants from "../components/constants"
import kurinji from "../images/favicon.png"
import axios from 'axios';
import '../css/toastmod.css'

const baseUrl = constants.baseUrl;

export default class FirstSection extends Component {

  constructor(props) {
    super(props)
    this.state = {
      carouselDataStore: [],
      carouselData: {
        imageUrl: '',
        information: ''
      },
      news: [],
      newsText: ''
    }
    this.fetchEvents = this.fetchEvents.bind(this);
    this.initiateCarousel = this.initiateCarousel.bind(this);
    this.initiateNews = this.initiateNews.bind(this);
    this.showNotification = this.showNotification.bind(this);
  }

  componentWillMount() {

    this.fetchEvents();
    this.fetchNews();

  }

  fetchEvents() {
    axios
      .get(`${baseUrl}/api/homesectionone.php`)
      .then(data => {
        this.setState({ carouselDataStore: data.data })
        this.initiateCarousel()

      })
      .catch(err => console.log(err))
  }

  fetchNews() {
    axios
      .get(`${baseUrl}/api/homenews.php`)
      .then(data => {
        this.setState({ news: data.data })
        this.initiateNews()
      })
      .catch(err => console.log(err))
  }

  showNotification() {
    if (window.pageYOffset === 0) {
      toast.dismiss();
      toast(<div className="container-fluid">
        <div className="row">
          <div className="col text-center font-weight-bold h5 mt-1">
            courses offered
                <hr className="white text-white" />
          </div>
        </div>

        <div className="row">
          <div className="col text-center font-weight-bold h5">
            UG - Courses
                  <hr className="text-white white" />
          </div>
        </div>
        <div className="row">
          <div className="col text-center font-weight-bolder">
            <span className="base-orange shadow-lg p-2 text-white rounded m-2">MECH</span>
          </div>
          <div className="col text-center font-weight-bolder">
            <span className="base-orange shadow-lg p-2 text-white rounded m-2">EEE</span>
          </div>
        </div>
        <div className="row mt-2 pt-4">
          <div className="col text-center font-weight-bolder">
            <span className="base-orange shadow-lg p-2 text-white rounded m-2">ECE</span>
          </div>
          <div className="col text-center font-weight-bolder">
            <span className="base-orange shadow-lg p-2 text-white rounded m-2">CSE</span>
          </div>
        </div>

        <div className="row mt-2 pt-3">
          <div className="col text-center font-weight-bold h5">
            PG - Courses
                  <hr className="text-white white" />
          </div>
        </div>

        <div className="row">
          <div className="col text-center font-weight-bolder">
            <span className="base-orange shadow-lg p-2 text-white rounded m-2">ME - CSE</span>
          </div>
          <div className="col text-center font-weight-bolder">
            <span className="base-orange shadow-lg p-2 text-white rounded ">Eng - Design</span>
          </div>
        </div>
        <div className="row mt-3 pt-3 mb-3">
          <div className="col text-center font-weight-bolder">
            <span className="base-orange shadow-lg p-2 text-white rounded m-2">MBA</span>
          </div>
        </div>
      </div>, {
          position: "bottom-right",
          className: "bg-danger text-white Toastify__toast1",
          autoClose: false
        });
    } else {

      toast.dismiss();

    }
  }

  componentWillUnmount() {
    toast.dismiss();
  }

  componentDidMount() {
    window.onscroll = function () {
      this.showNotification();
    }.bind(this)


    setTimeout(() => {
      if (this.state.carouselData.length === 0)
        this.fetchEvents()
      if (this.state.news.length === 0)
        this.fetchNews()
    }, 3000)


    setTimeout(() => {
      toast.dismiss();
      toast(<div className="container-fluid">
        <div className="row">
          <div className="col text-center font-weight-bold h5 mt-1">
            courses offered
                  <hr className="white text-white" />
          </div>
        </div>

        <div className="row">
          <div className="col text-center font-weight-bold h5">
            UG - Courses
                    <hr className="text-white white" />
          </div>
        </div>
        <div className="row">
          <div className="col text-center font-weight-bolder">
            <span className="base-orange shadow-lg p-2 text-white rounded m-2">MECH</span>
          </div>
          <div className="col text-center font-weight-bolder">
            <span className="base-orange shadow-lg p-2 text-white rounded m-2">EEE</span>
          </div>
        </div>
        <div className="row mt-2 pt-4">
          <div className="col text-center font-weight-bolder">
            <span className="base-orange shadow-lg p-2 text-white rounded m-2">ECE</span>
          </div>
          <div className="col text-center font-weight-bolder">
            <span className="base-orange shadow-lg p-2 text-white rounded m-2">CSE</span>
          </div>
        </div>

        <div className="row mt-2 pt-3">
          <div className="col text-center font-weight-bold h5">
            PG - Courses
                    <hr className="text-white white" />
          </div>
        </div>

        <div className="row">
          <div className="col text-center font-weight-bolder">
            <span className="base-orange shadow-lg p-2 text-white rounded m-2">ME - CSE</span>
          </div>
          <div className="col text-center font-weight-bolder">
            <span className="base-orange shadow-lg p-2 text-white rounded ">Eng - Design</span>
          </div>
        </div>
        <div className="row mt-3 pt-3 mb-3">
          <div className="col text-center font-weight-bolder">
            <span className="base-orange shadow-lg p-2 text-white rounded m-2">MBA</span>
          </div>
        </div>
      </div>, {
          position: "bottom-right",
          className: "bg-danger text-white Toastify__toast1",
          autoClose: false
        });
    }, 3000)

  }

  initiateCarousel() {
    let i = 0;
    this.setState({
      carouselData: {
        imageUrl: `${baseUrl}${this.state.carouselDataStore[i][2]}`,
        information: this.state.carouselDataStore[i][1]
      }
    })
    setInterval(() => {
      if (i < this.state.carouselDataStore.length - 1) {
        i++;
      } else {
        i = 0;
      }
      this.setState({
        carouselData: {
          imageUrl: `${baseUrl}${this.state.carouselDataStore[i][2]}`,
          information: this.state.carouselDataStore[i][1]
        }
      })
    }, 5000)
  }

  initiateNews() {
    let newsString = '';
    // eslint-disable-next-line
    this.state.news.map((item, i) => {
      if (i === 0) {
        newsString += `${item[1]} `;
      }
      newsString += `|| ${item[1]} `;
    })
    this.setState({ newsText: newsString })
  }

  render() {
    return (
      <div className="row background-image" style={{ backgroundImage: `url(${this.state.carouselData.imageUrl})` }}>
        <div className="col d-flex justify-content-between flex-column align-items-center p-0"
          style={{ marginTop: "30vh" }}>
          <div className="align-self-start">
            <div className="mask pattern-3 rounded">
              <div className="text-white alert" style={{ fontSize: "20px" }}>
                <div className="text-center animated shake">
                  {this.state.carouselData.information}
                </div>
              </div>
            </div>
          </div>

          <div className="alert text-danger  mb-0 background-transparent p-0 m-0" role="alert">

            <div className="mask rgba-white-strong pattern-5">
              <p className="font-weight-bold animated flash infinite text-warning slower delay-3s mt-3 pt-3 pl-3 h5">
                <i className="fas fa-star mr-2 animated heartBeat infinite"></i>
                Latest News
                 </p>
              {/* eslint-disable-next-line  */}
              <marquee><p className="text-white" style={{ fontSize: "15pt" }}>
                {this.state.newsText}
              </p></marquee>
            </div>

          </div>
          <div className="bg-mask p-0 m-0"></div>

          <div className="row header-row" style={{ width: "100%" }}>
            <div className="col-md-6 col-sm-12 ">
              <div className="d-flex justify-content-center align-items-center flex-md-row main-header-one">
                <img src={kurinji} className="img-fluid img-responsive pb-2 pl-4" height="90" alt="" />
                <div className="text-center">
                  <h1 className="main-text-logo">
                    Kurinji
                  </h1>
                  <h4 className="main-text-sub-logo">
                    college of engineering and technology
                  </h4>
                </div>
              </div>


              {/* <img className="header-image mt-1 img-fluid" src={kurinji} alt=""  /> */}
            </div>
            <div className="col-md-6 d-flex flex-row justify-content-between headershow">
              <div className="d-flex justify-content-center align-items-center header-info " >
                <div>
                  <i className="fas fa-map-marker-alt text-orange fa-2x mb-4"></i>
                </div>
                <p className="text-center text-white font-weight-bold h6" style={{}}>
                  Trichy-Dindigul NH-Road,
                Manapparai - 621 307 <br />
                  Trichirappalli Dt.
                  Tamilnadu, India.
              </p>
              </div>
              <div className="d-flex justify-content-center align-items-center header-info " >
                <div>
                  <i className="fas fa-phone text-orange fa-2x pr-3 mb-4"></i>
                </div>
                <p className="text-center h6 font-weight-bold text-white" style={{}}>
                  04332&nbsp;292338
                  76038&nbsp;44448
              </p>
              </div>
              <div className="d-flex justify-content-center align-items-center header-info " >
                <div>
                  <i className="fas fa-envelope text-orange fa-2x pr-3 mb-4"></i>
                </div>
                <p className="font-weight-bold text-white" style={{}}>
                  kcet@kurinjiengg.org
                  &nbsp;
                  principal@kurinjiengg.org
              </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }

}
