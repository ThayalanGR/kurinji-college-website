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
      infrastructureItems1: [],
      infrastructureItems2: []
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
        console.log();
        let arr1 = [],
          arr2 = [];
        data.data.map((item, index) => {
          if (index % 2 === 0) {
            arr1.push(item);
          } else {
            arr2.push(item);
          }
          this.setState({ infrastructureItems1: arr1 });
          this.setState({ infrastructureItems2: arr2 });
          return true;
        });
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
            <div className="col-md-6">
              {this.state.infrastructureItems1.map((item, key) => (
                <div className="" key={key}>
                  <div className="card mb-3">
                    <img
                      className="card-img-top"
                      src={`${baseUrl}/${item[3]}`}
                      alt="Card cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item[1]}</h5>
                      <p className="card-text">{item[2]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-6">
              {this.state.infrastructureItems2.map((item, key) => (
                <div className="" key={key}>
                  <div className="card mb-3">
                    <img
                      className="card-img-top"
                      src={`${baseUrl}/${item[3]}`}
                      alt="Card cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item[1]}</h5>
                      <p className="card-text">{item[2]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* </div> */}
      </Fragment>
    );
  }
}
