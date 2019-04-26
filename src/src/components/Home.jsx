import React, { Component } from 'react'
import kurinji from '../images/kurinji.png'
import { Loader } from '../components'

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
    }, 2000)
  }



  render() {
    return (

      this.state.isLoading ? <Loader type={"bars"}/> :
        <div className="container-fluid ">
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
    )
  }
}
