import React, { Component, Fragment } from "react";
import { Loader } from ".";
import { toast } from "react-toastify";
import axios from "axios";
import constants from "./constants";

export default class Alumni extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      name: "",
      batch: "",
      department: "",
      address: "",
      mobile: "",
      email: "",
      employment: "",
      isEmployed: false
    };
  }
  componentDidMount() {
    this.setState({ isLoading: false });
  }

  validateRegistraion() {
    if (
      this.state.name !== "" &&
      this.state.batch !== "" &&
      this.state.department !== "" &&
      this.state.address !== "" &&
      this.state.mobile !== "" &&
      this.state.email !== ""
    ) {
      if (this.state.isEmployed && this.state.employment !== "") {
        this.alumniRegistrationHandler();
      } else if (!this.state.isEmployed) {
        this.alumniRegistrationHandler();
      } else {
        toast.error("something missing check the fields", {
          position: "bottom-left"
        });
      }
    } else {
      toast.error("something missing check the fields", {
        position: "bottom-left"
      });
    }
  }

  alumniRegistrationHandler() {
    let formData = new FormData();
    formData.append("method", "post");
    formData.append("name", this.state.name);
    formData.append("batch", this.state.batch);
    formData.append("department", this.state.department);
    formData.append("address", this.state.address);
    formData.append("mobile", this.state.mobile);
    formData.append("email", this.state.email);
    formData.append(
      "employment",
      this.state.employment !== "" ? this.state.employment : "unemployed"
    );

    axios
      .request({
        method: "post",
        url: `${constants.baseUrl}/api/alumni.php`,
        data: formData
      })
      .then(data => {
        if (data) {

          toast.success("registration success!", {
            position: "bottom-left"
          });

          this.setState({
            name: '',
            batch: '',
            department: '',
            address: '',
            mobile: '',
            email: '',
            employment: '',
            isEmployed: false
          })
          document.getElementById('isEmployed').checked = false;
        }
      })
      .catch(err => {
        toast.error("something went wrong try again later !", {
          position: "bottom-left"
        });
      });
  }

  render() {
    return this.state.isLoading ? (
      <Loader type={"bars"} />
    ) : (
        <Fragment>
          <div className="mtspace container">
            <div className="row mt-4 pt-4">
              <div className="col text-danger text-center h4-responsive font-weight-bold d-flex justify-content-center align-items-center">
                <i className="fas fa-graduation-cap mr-2 fa-2x" />
                Alumini Registration
            </div>
            </div>
            <div className="row">
              <div className="col">
                <hr />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6 h6-responsive text-danger font-weight-normal ">
                <div className="mt-4">
                  <label htmlFor="name">Name</label>
                  <input
                    className="form-control "
                    type="text"
                    value={this.state.name}
                    onChange={e => {
                      this.setState({ name: e.target.value });
                    }}
                    id="name"
                    name="name"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="batch">Batch</label>
                  <input
                    className="form-control "
                    type="text"
                    value={this.state.batch}
                    onChange={e => {
                      this.setState({ batch: e.target.value });
                    }}
                    name="batch"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="Department">Department</label>
                  <input
                    className="form-control "
                    type="text"
                    value={this.state.department}
                    onChange={e => {
                      this.setState({ department: e.target.value });
                    }}
                    id="department"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="address">Address</label>
                  <textarea
                    className="form-control"
                    style={{ height: "100px" }}
                    type="text"
                    value={this.state.address}
                    onChange={e => {
                      this.setState({ address: e.target.value });
                    }}
                    id="address"
                  />
                </div>
              </div>
              <div className="col-md-6 h6-responsive text-danger font-weight-normal ">
                <div className="mt-4">
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    className="form-control"
                    type="number"
                    value={this.state.mobile}
                    onChange={e => {
                      this.setState({ mobile: e.target.value });
                    }}
                    id="mobile"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    value={this.state.email}
                    onChange={e => {
                      this.setState({ email: e.target.value });
                    }}
                    id="email"
                  />
                </div>
                <div className="d-flex justify-content-start mt-4 align-items-center text-left">
                  <div>Are you employed ?</div>
                  <input
                    className="form-control-sm ml-2"
                    type="checkbox"
                    name="isEmployed"
                    id="isEmployed"
                    onChange={e => {
                      this.setState({ isEmployed: e.target.checked });
                    }}
                  />
                </div>
                <div className={`mt-4 ${this.state.isEmployed ? "" : "d-none"}`}>
                  <label htmlFor="employment">Employment Details</label>
                  <textarea
                    className="form-control"
                    style={{ height: "100px" }}
                    type="text"
                    value={this.state.employment}
                    onChange={e => {
                      this.setState({ employment: e.target.value });
                    }}
                    id="employment"
                  />
                </div>
                <div className="mt-4 text-center">
                  <button
                    onClick={() => this.validateRegistraion()}
                    className="btn btn-danger btn-sm text-white font-weight-bold"
                  >
                    Register
                </button>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      );
  }
}
