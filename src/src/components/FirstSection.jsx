import React, { Component, Fragment } from 'react'
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
      newsText: <div>No New News :-( Stay tuned!</div>,
      isCarouselInitiated: false,
      isNewsInitiated: false,
      carouselInterval: null,
      isUnmounted: false,
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
        if (!this.state.isInitiated) {
          this.initiateCarousel()
          this.setState({ isCarouselInitiated: true })
        }

      })
      .catch(err => console.log(err))
  }

  fetchNews() {
    axios
      .get(`${baseUrl}/api/homenews.php`)
      .then(data => {
        this.setState({ news: data.data })
        if (!this.state.isNewsInitiated) {
          this.initiateNews()
          this.setState({ isNewsInitiated: true })
        }
      })
      .catch(err => console.log(err))
  }

  toastHandler() {
    toast.dismiss();
    toast(<div className="container-fluid">
      <div className="row">
        <div className="col text-center font-weight-bold h5 mt-1 pb-2">
          courses offered
        </div>
      </div>

      <div className="row">
        <div className="col text-center font-weight-bold h6">
          UG - Courses
          <hr className="bg-white" />
        </div>
      </div>
      <div className="row">
        <div className="col text-center" style={{ fontSize: "14px" }}>
          <span className="base-orange shadow-lg p-2 text-white rounded">MECH</span>
        </div>
        <div className="col text-center" style={{ fontSize: "14px" }}>
          <span className="base-orange shadow-lg p-2 text-white rounded">EEE</span>
        </div>
      </div>
      <div className="row mt-2 pt-4">
        <div className="col text-center" style={{ fontSize: "14px" }}>
          <span className="base-orange shadow-lg p-2 text-white rounded ">ECE</span>
        </div>
        <div className="col text-center" style={{ fontSize: "14px" }}>
          <span className="base-orange shadow-lg p-2 text-white rounded ">CSE</span>
        </div>
      </div>

      <div className="row mt-2 pt-3">
        <div className="col text-center font-weight-bold h6">
          PG - Courses
          <hr className="bg-white" />
        </div>
      </div>

      <div className="row">
        <div className="col text-center" style={{ fontSize: "14px" }}>
          <span className="base-orange shadow-lg p-2 text-white rounded">ME - CSE</span>
        </div>
        <div className="col text-center" style={{ fontSize: "14px" }}>
          <span className="base-orange shadow-lg p-2 text-white rounded">MBA</span>
        </div>
      </div>
      <div className="row mt-3 pt-3 pb-3">
        <div className="col text-center" style={{ fontSize: "14px" }}>
          <span className="base-orange shadow-lg p-2 text-white rounded">ME - Eng Design</span>
        </div>
      </div>
    </div>, {
        position: "bottom-right",
        className: "bg-danger text-white Toastify__toast1",
        autoClose: false
      });
  }

  showNotification() {
    const isMobile = !!navigator.userAgent.match(/iphone|android|blackberry/ig)
    if (window.pageYOffset === 0 && this.state.isUnmounted === false && !isMobile) {
      this.toastHandler()
    } else {
      toast.dismiss();
    }
  }

  async componentDidMount() {
    window.addEventListener('scroll', this.showNotification, false);

    setTimeout(() => {
      if (this.state.carouselData.length === 0)
        this.fetchEvents()
      if (this.state.news.length === 0)
        this.fetchNews()
    }, 3000)

    this.showNotification();
  }

  initiateCarousel() {
    let i = 0;
    this.setState({
      carouselData: {
        imageUrl: `${baseUrl}${this.state.carouselDataStore[i][2]}`,
        information: this.state.carouselDataStore[i][1]
      }
    })
    const carouselInterval = setInterval(() => {
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

    this.setState({ carouselInterval })
  }

  initiateNews() {
    let newsString = <div className="d-flex">
      {this.state.news.length > 0 ? this.state.news.map((item, key) => (
        <div key={key} className="d-flex flex-column pr-4 mr-4" style={{ borderRight: `${key !== this.state.news.length - 1 ? "2px solid #FCBA35" : ''}` }}>
          <div style={{ fontSize: "18px" }} className="text-white font-weight-bold ">{item[1]}</div>
          <div style={{ fontSize: "15px" }} className="text-white font-weight-normal text-warning">Posted on:- <span className=" ml-1 text-light f">{new Date(item[2]).toDateString()}</span></div>
        </div>
      )) : <div className="text-white">{this.state.newsText}</div>}
    </div>;
    this.setState({ newsText: <Fragment>{newsString}</Fragment> })
  }

  componentWillUnmount() {
    toast.dismiss();
    if (this.state.carouselInterval !== null) {
      clearInterval(this.state.carouselInterval);
    }

    window.removeEventListener('scroll', this.showNotification, false);

    this.setState({ isUnmounted: true });
  }

  render() {
    return (
      <div className="row background-image" style={{ backgroundImage: `url(${this.state.carouselData.imageUrl})` }}>
        <div className="col" style={{ position: "relative", marginTop: "60px" }}>
          {/* college details  */}
          <div className="row header-row">
            <div className="bg-mask p-0 m-0"></div>
            <div className="col-md-6 col-sm-12 ">
              <div className="d-flex justify-content-center align-items-center flex-md-row main-header-one">
                <img src={kurinji} className="img img-fluid img-responsive pb-2 pl-4" height="90" alt="" />
                <div className="text-center">
                  <h1 className="main-text-logo">
                    Kurinji
                  </h1>
                  <h4 className="main-text-sub-logo">
                    college of engineering and technology
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-row justify-content-between headershow">
              <div className="d-flex flex-column justify-content-center align-items-center header-info " >
                <div>
                  <i className="fas fa-map-marker-alt text-orange pr-2 fa-2x pb-3"></i>
                </div>
                <p className="text-center text-white font-weight-bold h6" style={{}}>
                  Trichy-Dindigul NH-Road,
                Manapparai - 621 307 <br />
                  Trichirappalli Dt.
                  Tamilnadu, India.
              </p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center header-info " >
                <div>
                  <i className="fas fa-phone text-orange fa-2x pr-2 mb-4"></i>
                </div>
                <p className="text-center text-white font-weight-bold">
                  04332&nbsp;292338
                  76038&nbsp;44448
              </p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center header-info " >
                <div>
                  <i className="fas fa-envelope text-orange fa-2x pr-2 mb-3"></i>
                </div>
                <p className="font-weight-bold text-white text-center">
                  kcet@kurinjiengg.org
                  &nbsp;
                  principal@kurinjiengg.org
              </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col text-left">
              <div className="text-white caption-section-one" style={{ fontSize: "28px" }}>
                <div className="animated shake">
                  {this.state.carouselData.information}
                </div>
              </div>
            </div>
          </div>
          {/* latest news */}
          <div className="text-danger w-100" style={{ position: "absolute", bottom: "0px", left: "0px" }}>
            <div className="pattern-5" style={{ height: "70px", position: "relative" }}>
              <div style={{ position: "absolute", height: "70px", zIndex: 1020 }} className="bg-dark latest-news d-flex justify-content-center align-items-center p-2 pl-md-3 pr-md-4">
                <span className="font-weight-bold animated flash text-warning  infinite slower delay-3s h6-responsive">
                  <i className="fas fa-star mr-2 animated heartBeat infinite"></i>
                  Latest News
                  </span>
              </div>
              {/* eslint-disable-next-line  */}
              <marquee className="mt-3">
                {this.state.newsText}
              </marquee>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
