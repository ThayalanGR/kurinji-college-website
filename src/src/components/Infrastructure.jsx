import React, { Component, Fragment } from "react";
import { Loader } from "../components";
// import ImageGallery from "react-image-gallery";

export default class Infrastructure extends Component {
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
      <Fragment>
        <div className="mtspace container">
          <div className="text-primary mt-4 pt-4 h4-responsive text-center">Infrastructure</div><hr/>
          <div className="row">
            <div class="col-md-6">
              <div className="card mb-3">
                <img
                  class="card-img-top"
                  src="https://www.techfunnel.com/wp-content/uploads/2018/01/HR-Tech-Conferences-and-Events-to-Follow-2018.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Card Title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
