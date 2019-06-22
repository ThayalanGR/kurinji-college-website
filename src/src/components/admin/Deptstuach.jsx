import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { constants } from "..";
const baseUrl = constants.baseUrl;

export default class Deptstuact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventTitle: "",
      eventBody: "",
      eventFile: null,
      eventFileName: "choose an Event Image",
      existingEvents: [],
      eventDepartment: "",
      filterChoice: "all",
      hasImage: false
    };
    this.addNewEvent = this.addNewEvent.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
    this.fetchEvents = this.fetchEvents.bind(this);
  }
  componentDidMount() {
    this.fetchEvents(this.state.filterChoice);
  }

  fetchEvents(filterChoice) {
    this.setState({ filterChoice: filterChoice });
    if (filterChoice === "all") {
      axios
        .get(`${baseUrl}/api/deptstuact.php`)
        .then(data => {
          this.setState({ existingEvents: data.data });
        })
        .catch(err => console.log(err));
    } else {
      axios
        .get(`${baseUrl}/api/deptstuact.php?department=${filterChoice}`)
        .then(data => {
          this.setState({ existingEvents: data.data });
        })
        .catch(err => console.log(err));
    }
  }

  addNewEvent() {
    if (
      this.state.eventDepartment !== "" &&
      this.state.eventTitle !== "" &&
      this.state.eventBody !== ""
    ) {
      var data = new FormData();
      data.append("method", "post");
      data.append("title", this.state.eventTitle);
      data.append("body", this.state.eventBody);
      data.append("department", this.state.eventDepartment);
      data.append("hasImage", this.state.hasImage ? "true" : "false");
      if (this.state.hasImage) {
        data.append("file", this.state.eventFile);
      }
      document.getElementById("hasImagestu").checked = false;
      this.setState({
        eventTitle: "",
        eventBody: "",
        eventDepartment: "",
        hasImage: false,
        eventFile: null,
        eventFileName: "choose an Event Image",
        filterChoice: this.state.eventDepartment
      });
      // post request
      axios
        .request({
          method: "post",
          url: `${baseUrl}/api/deptstuact.php?`,
          data: data
        })
        .then(data => {
          toast.success("Upload in Progress", {
            position: "bottom-left",
            autoClose: 1000,
            hideProgressBar: true
          });
          this.fetchEvents(this.state.filterChoice);
        })
        .catch(err => console.log(err));
    } else {
      toast.error(
        "please check your fields, make sure to satisfy the criteria.",
        {
          position: "bottom-right",
          hideProgressBar: true,
          autoClose: 3000
        }
      );
    }
  }

  removeEvent(id) {
    var data = new FormData();
    data.append("method", "delete");
    data.append("id", id);

    axios
      .request({
        method: "post",
        url: `${baseUrl}/api/deptstuact.php`,
        data: data
      })
      .then(data => {
        if (data.data.response) {
          this.fetchEvents(this.state.filterChoice);
          toast.success("event deleted successfully!", {
            position: "bottom-left"
          });
        } else {
          toast.error("something went wrong !", {
            position: "bottom-left"
          });
        }
      })
      .catch(err => {
        console.log(err);

        toast.error("something went wrong !", {
          position: "bottom-left"
        });
      });
  }

  render() {
    return (
      <div className="container-fluid p-2">
        <div className="row mtspace ">
          <div className="col text-center text-danger h5">
            Department Wise Student Achievements Upload Section
            <hr />
          </div>
        </div>
        <div className="row" style={{ maxWidth: "100vw" }}>
          <div className="col-md-6 " style={{ width: "100%" }}>
            <div className="text-center text-danger">Add new Event</div>
            <div className="row mt-1 pt-1">
              <div className="col">
                <hr />
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <form className="" style={{ width: "350px" }}>
                <div className="mb-3">
                  <label htmlFor="validationTextarea ">Student Activity Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationTextarea"
                    placeholder="Required  textarea"
                    value={this.state.eventTitle}
                    onChange={e => {
                      this.setState({ eventTitle: e.target.value });
                    }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="validationTextarea ">Activity Body</label>
                  <textarea
                    className="form-control"
                    id="validationTextarea"
                    placeholder="Required  textarea"
                    value={this.state.eventBody}
                    onChange={e => {
                      this.setState({ eventBody: e.target.value });
                    }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="validationTextarea ">Activity Department</label>
                  <select
                    name=""
                    className="form-control"
                    value={this.state.eventDepartment}
                    onChange={e => {
                      this.setState({ eventDepartment: e.target.value });
                    }}
                  >
                    <option value="">Choose Department</option>
                    <option value="mech">Mech</option>
                    <option value="eee">EEE</option>
                    <option value="ece">ECE</option>
                    <option value="cse">CSE</option>
                    <option value="hands">H &amp; S</option>
                    <option value="mecse">ME-CSE</option>
                    <option value="engdesign">Eng-Design</option>
                    <option value="mba">MBA</option>
                  </select>
                </div>
                <div className="mb-3 d-flex justify-content-around align-items-center">
                  <div>Is Activity has Image ?</div>
                  <input
                    type="checkbox"
                    className="form-control-sm"
                    name="hasImage"
                    id="hasImagestu"
                    onChange={e => {
                      if (e.target.checked) {
                        this.setState({ hasImage: true });
                      } else {
                        this.setState({ hasImage: false });
                      }
                    }}
                  />
                </div>
                <div className={`mb-3 ${this.state.hasImage ? "" : "d-none"}`}>
                  <label htmlFor="validatedCustomFile">Activity Image</label>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input form-control"
                      id="validatedCustomFile"
                      accept="image/*"
                      onChange={e => {
                        this.setState({
                          eventFile: e.target.files[0],
                          eventFileName: e.target.files[0].name
                        });
                      }}
                      required
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="validatedCustomFile"
                    >
                      {this.state.eventFileName}
                    </label>
                    <div className="invalid-feedback">
                      Please choose a good quality image
                    </div>
                  </div>
                </div>
                <div className="mt-2 mb-3">
                  <button
                    className="text-white btn btn-sm btn-danger"
                    name="submit"
                    onClick={e => {
                      e.preventDefault();
                      this.addNewEvent();
                    }}
                  >
                    Upload
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center d-flex justify-content-around">
              <div className="text-danger">S.No</div>
              <div className="text-danger">Existing Activities</div>
              <div className="d-flex align-items-center justify-content-center">
                <div className="mr-3 text-danger">Filter:- </div>
                <select
                  name=""
                  className="form-control form-control-sm"
                  value={this.state.filterChoice}
                  onChange={event => {
                    this.fetchEvents(event.target.value);
                  }}
                >
                  <option value="all">All</option>
                  <option value="mech">Mech</option>
                  <option value="eee">EEE</option>
                  <option value="ece">ECE</option>
                  <option value="cse">CSE</option>
                  <option value="hands">H &amp; S</option>
                  <option value="mecse">ME-CSE</option>
                  <option value="engdesign">Eng-Design</option>
                  <option value="mba">MBA</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <hr />
              </div>
            </div>
            <div className="p-1 container">
              {this.state.existingEvents.map((item, index) => {
                return (
                  <div className="row" key={index}>
                    <div className="col-md-1 d-flex justify-content-center">
                      {index + 1}
                    </div>
                    {item[3] !== "null" && (
                      <div className="col-md-3">
                        <img
                          className="img img-thumbnail"
                          src={`${constants.baseUrl}${item[3]}`}
                          alt=""
                          srcSet=""
                        />
                      </div>
                    )}
                    <div className="col-md-5 p-3">
                      Title:- {item[1]}
                      <hr />
                      Body:- {item[2]}
                      <hr />
                      Department:- {item[5]}
                      <hr />
                      Date:- {item[4]}
                      <hr />
                    </div>
                    <div className="col-3 text-center d-flex justify-content-center align-items-center">
                      <button
                        value={item[0]}
                        onClick={e => {
                          this.removeEvent(e.target.value);
                        }}
                        className="btn btn-sm btn-danger text-white"
                      >
                        delete
                      </button>
                    </div>
                    <div className="col-12">
                      <hr />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
