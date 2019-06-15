import React, { Component, Fragment } from "react";
import { Loader } from "../components";
import constants from "../components/constants";
import axios from "axios";

const baseUrl = constants.baseUrl;
export default class Infrastructure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      infrastructureItems: []
    };
  }

  componentDidMount() {
    this.fetchInfrastructure();
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 500);
  }

  fetchInfrastructure() {
    axios
      .get(`${baseUrl}/api/infrastructure.php`)
      .then(data => {
        this.setState({ infrastructureItems: data.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return this.state.isLoading ? (
      <Loader type={"bars"} />
    ) : (
      <Fragment>
        <div className="mtspace container">
          <div className="text-primary mt-4 pt-4 h4-responsive text-center">
            Infrastructure
          </div>
          <hr />
          <div className="row">
            {this.state.infrastructureItems.map((item, key) => (
              <div class="col-md-6" key={key}>
                <div className="card mb-3">
                  <img
                    class="card-img-top"
                    src={`${baseUrl}/${item[3]}`}
                    alt=""
                  />
                  <div class="card-body">
                    <h5 class="card-title">{item[1]}</h5>
                    <p class="card-text">
                      {item[2]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}
