import React, { Component } from "react";
import axios from "axios";
import { constants } from "../index";

export default class Alumni extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alumniDetails: []
    };
  }

  componentDidMount() {
    this.fetchAlumniRegistrationDetails();
  }

  fetchAlumniRegistrationDetails() {
    axios
      .get(`${constants.baseUrl}/api/alumni.php`)
      .then(data => {
        this.setState({ alumniDetails: data.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container-fluid mt-4 pt-1">
        <div className="row">
          <div className="col d-flex justify-content-between align-items-center">
            <div className="text-danger h5-responsive ml-3">
              Alumni Registration Details
            </div>
            <div>
              <button className="btn btn-sm btn-danger text-white">
                Generate Excel
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <table className="table table-hover text-center">
              <thead className=" text-danger">
                <tr>
                  <th scope="col">S.no</th>
                  <th scope="col">Name</th>
                  <th scope="col">Batch</th>
                  <th scope="col">Department</th>
                  <th scope="col">Address</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Email</th>
                  <th scope="col">Employment</th>
                  <th scope="col">Registerd At</th>
                </tr>
              </thead>
              <tbody>
                {this.state.alumniDetails.map((item, key) => (
                  <tr key={key}>
                    <th scope="row">{key + 1}</th>
                    <td>{item[1]}</td>
                    <td>{item[2]}</td>
                    <td>{item[3]}</td>
                    <td>{item[4]}</td>
                    <td>{item[5]}</td>
                    <td>{item[6]}</td>
                    <td>{item[7]}</td>
                    <td>{new Date(item[8]).toDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
