import React, { Component } from "react";
import axios from "axios";
import { constants } from "../index";
import XLSX from "xlsx";
import { saveAs } from "file-saver";
import { toast } from "react-toastify";

export default class Stucorstaffs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stucorstaffsDetails: []
    };
  }

  componentDidMount() {
    this.fetchStucorstaffsRegistrationDetails();
  }

  generateExcel() {
    var wb = XLSX.utils.table_to_book(document.getElementById("stucorstaffstable"), {
      sheet: "StucorstaffsRegistrationDetails"
    });
    var wbout = XLSX.write(wb, {
      bookType: "xlsx",
      bookSST: true,
      type: "binary"
    });

    var buf = new ArrayBuffer(wbout.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i < wbout.length; i++) view[i] = wbout.charCodeAt(i) & 0xff;

    saveAs(
      new Blob([buf], { type: "application/octet-stream" }),
      "StucorstaffsRegistrationDetails.xlsx"
    );
  }

  fetchStucorstaffsRegistrationDetails() {
    axios
      .get(`${constants.baseUrl}/api/staffauthhandler.php`)
      .then(data => {
        this.setState({ stucorstaffsDetails: data.data });
      })
      .catch(err => console.error(err));
  }

  deleteStucorstaffs(id) {
    let formData = new FormData();
    formData.append("method", "delete");
    formData.append("id", id);
    axios
      .request({
        url: `${constants.baseUrl}/api/staffauthhandler.php`,
        method: "POST",
        data: formData
      })
      .then(data => {
        if (data.data.status) {
          toast.success("Stucorstaffs deleted successfully!", {
            position: "bottom-left"
          });
          this.fetchStucorstaffsRegistrationDetails();
        } else {
          toast.error("Something went wrong!", {
            position: "bottom-left"
          });
        }
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container-fluid mt-4 pt-1">
        <div className="row">
          <div className="col d-flex justify-content-between align-items-center">
            <div className="text-danger h5-responsive ml-3">
              Stucorstaffs Registration Details
            </div>
            <div>
              <button
                onClick={() => {
                  this.generateExcel();
                }}
                className="btn btn-sm btn-danger text-white"
              >
                Generate Excel
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <table className="table table-hover text-center" id="stucorstaffstable">
              <thead className=" text-danger">
                <tr>
                  <th scope="col">S.no</th>
                  <th scope="col">Name</th>
                  <th scope="col">Batch</th>
                  <th scope="col">Department</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Email</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.stucorstaffsDetails.map((item, key) => (
                  <tr key={key}>
                    <th scope="row">{key + 1}</th>
                    <td>{item[2]}</td>
                    <td>{item[1]}</td>
                    <td>{item[3]}</td>
                    <td>{item[6]}</td>
                    <td>{item[7]}</td>
                    <td><button className="bg-transparent" onClick={() => this.deleteStucorstaffs(item[0])}><i className="fas fa-trash-alt text-danger"></i></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {this.state.stucorstaffsDetails === 0 && <div className="row">
          <div className="col alert alert-danger text-center">
            No Data Found!
          </div>
        </div>}
      </div>
    );
  }
}
