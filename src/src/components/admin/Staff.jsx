import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { constants } from "../../components";
const baseUrl = constants.baseUrl;

export default class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffName: "",
      staffDesignation: "",
      staffDetails: "",
      existingStaffs: [],
      staffDepartment: "",
      filterChoice: "all",
      staffPriority: ""
    };
    this.addNewStaff = this.addNewStaff.bind(this);
    this.removeStaff = this.removeStaff.bind(this);
    this.fetchStaffs = this.fetchStaffs.bind(this);
  }
  componentWillMount() {
    this.fetchStaffs(this.state.filterChoice);
  }

  fetchStaffs(filterChoice) {
    this.setState({ filterChoice: filterChoice });
    if (filterChoice === "all") {
      axios
        .get(`${baseUrl}/api/staffhandler.php`)
        .then(data => {
          this.setState({ existingStaffs: data.data });
        })
        .catch(err => console.log(err));
    } else {
      axios
        .get(`${baseUrl}/api/staffhandler.php?department=${filterChoice}`)
        .then(data => {
          this.setState({ existingStaffs: data.data });
        })
        .catch(err => console.log(err));
    }
  }

  addNewStaff() {
    if (
      this.state.staffDepartment !== "" &&
      this.state.staffName !== "" &&
      this.state.staffDesignation !== "" &&
      Number(this.state.staffPriority) > 0 &&
      Number(this.state.staffPriority) <= 50 &&
      this.state.staffPriority !== ""
    ) {
      var data = new FormData();
      data.append("method", "post");
      data.append("name", this.state.staffName);
      data.append("designation", this.state.staffDesignation);
      data.append("priority", this.state.staffPriority);
      data.append("department", this.state.staffDepartment);
      data.append("about", this.state.staffDetails);
      this.setState({
        staffName: "",
        staffDesignation: "",
        staffPriority: "",
        staffDepartment: "",
        staffDetails: "",
        filterChoice: this.state.staffDepartment,
        priority: null
      });
      axios
        .request({
          method: "post",
          url: `${baseUrl}/api/staffhandler.php?`,
          data: data
        })
        .then(data => {
          toast.success("Upload in Progress", {
            position: "bottom-left",
            autoClose: 1000,
            hideProgressBar: true
          });
          this.fetchStaffs(this.state.filterChoice);
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

  removeStaff(id) {
    var data = new FormData();
    data.append("method", "delete");
    data.append("id", id);

    axios
      .request({
        method: "POST",
        url: `${baseUrl}/api/staffhandler.php`,
        data: data
      })
      .then(data => {
        if (data.data.response) {
          this.fetchStaffs(this.state.filterChoice);
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

  updateStaff(id, value, index) {
    let tempArr = this.state.existingStaffs;
    tempArr[index][3] = value;
    this.setState({ existingStaffs: tempArr });
  }

  updateStaffHandler(index) {
    const arr = this.state.existingStaffs;
    const value = arr[index][3];
    const id = this.state.existingStaffs[index][0];
    if (value <= 0 || value === null) {
      // do nothing
    } else {
      axios
        .get(`${baseUrl}/api/staffhandler.php?priority=${value}&staffId=${id}`)
        .then(data => {
          this.fetchStaffs(this.state.filterChoice);
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <div className="container-fluid p-2">
        <div className="row mtspace ">
          <div className="col text-center text-danger h5">
            Staff Details Upload
            <hr />
          </div>
        </div>
        <div className="row" style={{ maxWidth: "100vw" }}>
          <div className="col-md-6 " style={{ width: "100%" }}>
            <div className="text-center text-danger">Add new Staff</div>
            <div className="row mt-1 pt-1">
              <div className="col">
                <hr />
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <form className="" style={{ width: "350px" }}>
                <div className="mb-3">
                  <label htmlFor="validationTextarea ">Staff Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationTextarea"
                    placeholder="Required  textarea"
                    value={this.state.staffName}
                    onChange={e => {
                      this.setState({ staffName: e.target.value });
                    }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="validationTextarea ">Staff Designation</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationTextarea"
                    placeholder="Required  textarea"
                    value={this.state.staffDesignation}
                    onChange={e => {
                      this.setState({ staffDesignation: e.target.value });
                    }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="validationTextarea ">Staff Department</label>
                  <select
                    name=""
                    className="form-control"
                    value={this.state.staffDepartment}
                    onChange={e => {
                      this.setState({ staffDepartment: e.target.value });
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
                <div className="mb-3">
                  <label htmlFor="priority">Priority</label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    className="form-control"
                    id="priority"
                    placeholder="choose priority between 1-50"
                    value={this.state.staffPriority}
                    onChange={e => {
                      this.setState({ staffPriority: e.target.value });
                    }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="validationTextarea ">Staff Details</label>
                  <textarea
                    className="form-control"
                    id="validationTextarea"
                    placeholder="Required  textarea"
                    value={this.state.staffDetails}
                    onChange={e => {
                      this.setState({ staffDetails: e.target.value });
                    }}
                    required
                  />
                </div>

                <div className="mt-2 mb-3">
                  <button
                    className="text-white btn btn-sm btn-danger"
                    name="submit"
                    onClick={e => {
                      e.preventDefault();
                      this.addNewStaff();
                    }}
                  >
                    {" "}
                    Upload{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center d-flex justify-content-around">
              <div className="text-danger">S.No</div>
              <div className="text-danger">Existing Staffs</div>
              <div className="d-flex align-items-center justify-content-center">
                <div className="mr-3 text-danger">Filter:- </div>
                <select
                  name=""
                  className="form-control form-control-sm"
                  value={this.state.filterChoice}
                  onChange={event => {
                    this.fetchStaffs(event.target.value);
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
              {this.state.existingStaffs.map((item, index) => {
                return (
                  <div className="row" key={index}>
                    <div className="col-md-3 d-flex justify-content-center">
                      {index + 1}
                    </div>
                    <div className="col-md-6 p-3">
                      Name:- {item[1]}
                      <hr />
                      Designation:- {item[2]}
                      <hr />
                      Department:- {item[4]}
                      <hr />
                      Description:- {item[5]}
                      <hr />
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="">Priority:-</div>
                        <input
                          className="form-control form-control-sm ml-3"
                          type="number"
                          onLoadedData={() => {}}
                          value={this.state.existingStaffs[index][3]}
                          min="1"
                          max="50"
                          onChange={e =>
                            this.updateStaff(item[0], e.target.value, index)
                          }
                        />
                        <button
                          className="btn btn-sm btn-warning ml-3"
                          onClick={e => {
                            this.updateStaffHandler(index);
                          }}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                    <div className="col-3 text-center d-flex justify-content-center align-items-center">
                      <button
                        value={item[0]}
                        onClick={e => {
                          this.removeStaff(e.target.value);
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
