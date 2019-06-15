import React, { Component } from 'react'
import { Loader, } from '../components'
import '../css/contactus.css'
import kurinji from '../images/kurinji.png'

export default class Contact extends Component {
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
        <div className="mtspace contactus">
          <div className="container">
            <div className="card mb-3 box-img-contact-us shadow-none">
              <img className="rounded img-responsive" src={kurinji} alt="Dot" />
              <div className="box-contact-us">
                <div className="card-title text-center title orange-text mt-1 h4-responsive">CONTACT DETAILS</div>
                <ul className="list-group list-group-flush ul-contact-us">
                  <li className="list-group-item text-danger p-4"><b className="text-primary h4-responsive">Telephone Number : </b> <br /> 04332 - 292338 / 76038 44448</li>
                  <li className="list-group-item text-danger p-4"><b className="text-primary h4-responsive"> E-mail : </b> <br /> kcet@kurinjiengg.org / principal@kurinjiengg.org</li>
                  <li className="list-group-item text-danger p-4"><b className="text-primary h4-responsive"> Web : </b> <br /> www.kurinjiengg.org</li>
                  <li className="list-group-item text-danger p-4"><b className="text-primary h4-responsive"> Address : </b> <br /> Trichy-Dindigul NH-Road,<br />Manapparai - 621 307<br />Trichirappalli Dt.<br />Tamilnadu, India.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
    )
  }
}
