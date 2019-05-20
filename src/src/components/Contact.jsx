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
          <div class="container">
            <div class="card mb-3 box-img-contact-us shadow-none">
              <img class="rounded img-responsive" src={kurinji} alt="Dot" />
              <div class="box-contact-us">
                <div class="card-title text-center title orange-text mt-1 h4-responsive">CONTACT DETAILS</div>
                <ul class="list-group list-group-flush ul-contact-us">
                  <li class="list-group-item text-danger p-4"><b class="text-primary h4-responsive">Telephone Number : </b> <br /> 04332 - 292338 / 76038 44448</li>
                  <li class="list-group-item text-danger p-4"><b class="text-primary h4-responsive"> E-mail : </b> <br /> kcet@kurinjiengg.org / principal@kurinjiengg.org</li>
                  <li class="list-group-item text-danger p-4"><b class="text-primary h4-responsive"> Web : </b> <br /> www.kurinjiengg.org</li>
                  <li class="list-group-item text-danger p-4"><b class="text-primary h4-responsive"> Address : </b> <br /> Trichy-Dindigul NH-Road,<br />Manapparai - 621 307<br />Trichirappalli Dt.<br />Tamilnadu, India.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
    )
  }
}
