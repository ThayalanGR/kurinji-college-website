import React, { Component } from 'react'
import { toast } from 'react-toastify';
import kurinji from '../images/kurinji.png';
import axios from 'axios';

const baseUrl = 'http://localhost/kurinji';

export default class FirstSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
          carouselDataStore: [],
          carouselData: {
            imageUrl: '',
            information: ''
          },
          news: []
       }
       this.fetchEvents = this.fetchEvents.bind(this);
       this.initiateCarousel = this.initiateCarousel.bind(this);
    }

    componentWillMount() {
      this.fetchEvents();

    }

    fetchEvents() {
      axios
          .get("http://localhost/kurinji/api/homesectionone.php")
          .then(data => {
                this.setState({ carouselDataStore: data.data })
                this.initiateCarousel()

          })
          .catch(err => console.log(err))
    }
    
    componentDidMount() {

        setTimeout(() => {
          toast.dismiss();
          toast(<div className="container-fluid">
              <div className="row">
                <div className="col text-center font-weight-bold">
                  courses offered
                  <hr className="white text-white" />
                </div>
              </div>
          
              <div className="row">
                <div className="col text-center font-weight-bolder">
                    UG - Courses
                    <hr className="text-white white"/>
                </div>
              </div>
              <div className="row">
                <div className="col text-center font-weight-bolder">
                    <span className="white shadow-lg p-2 text-danger rounded m-2">MECH</span>  
                </div>
                <div className="col text-center font-weight-bolder">
                <span className="white shadow-lg p-2 text-danger rounded m-2">EEE</span>  
                </div>
              </div>
              <div className="row mt-2 pt-4">
                <div className="col text-center font-weight-bolder">
                <span className="white shadow-lg p-2 text-danger rounded m-2">ECE</span>  
                </div>
                <div className="col text-center font-weight-bolder">
                <span className="white shadow-lg p-2 text-danger rounded m-2">CSE</span>  
                </div>
                <div className="col text-center font-weight-bolder">
                <span className="white shadow-lg p-2 text-danger rounded m-2">IT</span>  
                </div>
              </div>
    
              <div className="row mt-2 pt-3">
                <div className="col text-center font-weight-bolder">
                    UG - Courses
                    <hr className="text-white white"/>
                </div>
              </div>
    
              <div className="row">
                <div className="col text-center font-weight-bolder">
                    <span className="white shadow-lg p-2 text-danger rounded m-2">ME - CSE</span>  
                </div>
                <div className="col text-center font-weight-bolder">
                <span className="white shadow-lg p-2 text-danger rounded m-2">Eng Design</span>  
                </div>
              </div>
              <div className="row mt-3 pt-3">
                <div className="col text-center font-weight-bolder">
                    <span className="white shadow-lg p-2 text-danger rounded m-2">MBA</span>  
                </div>
              </div>
          </div>, {
            position: toast.POSITION.BOTTOM_LEFT,
            className: "bg-danger text-white",
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

  render() {
    return (
      <div className="row background-image" style={{ backgroundImage: `url(${this.state.carouselData.imageUrl})` }}>
        <div className="col d-flex justify-content-between flex-column align-items-center
        " style={{marginTop: "30vh"}}>

          <div className="align-self-start">
            <div className="text-white bg-danger alert bg-danger" style={{fontSize: "20px"}}>
              <div className="text-center animated shake">
                {this.state.carouselData.information}
              </div>
            </div>
          </div>
          <div className="alert text-danger align-self-end white mb-0" role="alert">
                <p className="font-weight-bold animated flash infinite slower delay-3s"><i className="fas fa-star "></i> Latest News </p> 
                {/* eslint-disable-next-line  */}
                <marquee><p style={{fontFamily: "Impact", fontSize: "16pt"}}>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor!</p></marquee>
          </div>

          <div className="bg-mask p-0 m-0"></div>
          <div className="row header-row d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-sm-12">
              <img className="header-image mt-1 img-fluid" src={kurinji} alt="" srcSet="" />
            </div>
            <div className="col-md-6 col-sm-0 d-flex justify-content-between align-items-center p-4 headershow">
              <div className="d-flex justify-content-center align-items-center header-info " >
                <div>
                  <i className="fas fa-map-marker-alt text-danger fa-2x pr-3 mb-4"></i>
                </div>
                <p className="text-center  font-weight-bold h6" style={{ }}>
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
                <p className="text-center h6 font-weight-bold" style={{  }}>
                  04332&nbsp;292338
                  76038&nbsp;44448
              </p>
              </div>
              <div className="d-flex justify-content-center align-items-center header-info " >
                <div>
                  <i className="far fa-envelope text-danger fa-2x pr-3 mb-4"></i>
                </div>
                <p className="font-weight-bold" style={{ }}>
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
