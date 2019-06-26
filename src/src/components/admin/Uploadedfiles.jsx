import React, { Component } from "react";
import axios from "axios";
import { constants } from "../index";
import XLSX from "xlsx";
import { saveAs } from "file-saver";
import { toast } from "react-toastify";

export default class Uploadedfiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedfiles: []
    };
  }

  componentDidMount() {
    this.fetchUploadedfilesDetails();
  }

  generateExcel() {
    var wb = XLSX.utils.table_to_book(document.getElementById("table"), {
      sheet: "UploadedFilesDetails"
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
      "UploadedFilesDetails.xlsx"
    );
  }

  fetchUploadedfilesDetails() {
    axios
      .get(`${constants.baseUrl}/api/studentcornerfilehandler.php`)
      .then(data => {
        this.setState({ uploadedfiles: data.data.data });
      })
      .catch(err => console.error(err));
  }

  deleteUploadedfiles(id) {
    let formData = new FormData();
    formData.append("method", "delete");
    formData.append("id", id);
    axios
      .request({
        url: `${constants.baseUrl}/api/studentcornerfilehandler.php`,
        method: "POST",
        data: formData
      })
      .then(data => {
        if (data.data.status) {
          toast.success("Uploadedfiles deleted successfully!", {
            position: "bottom-left"
          });
          this.fetchUploadedfilesDetails();
        } else {
          toast.error("Something went wrong!", {
            position: "bottom-left"
          });
        }
      })
      .catch(err => console.error(err));
  }


  fileTypeIconFiner(type) {
    switch (type.toLowerCase()) {
      case "pdf":
        return <i title={type} className="fas fa-2x text-danger fa-file-pdf" />;
      case "docx":
        return (
          <i title={type} className="far fa-2x text-primary fa-file-word" />
        );
      case "xlsx":
        return (
          <i title={type} className="far fa-2x text-success fa-file-excel" />
        );
      case "zip":
      case "rar":
        return (
          <i title={type} className="fas fa-2x text-danger fa-file-archive" />
        );
      case "png":
      case "jpg":
      case "svg":
      case "jpeg":
        return (
          <i title={type} className="fas fa-2x text-warning fa-file-image" />
        );
      case "txt":
        return (
          <i title={type} className="far fa-2x text-warning fa-file-alt" />
        );
      case "ppt":
        return (
          <i
            title={type}
            className="far fa-2x text-warning fa-file-powerpoint"
          />
        );
      case "mp3":
      case "wav":
      case "wma":
      case "aif":
      case "ogg":
      case "mpeg":
        return (
          <i title={type} className="far fa-2x text-warning fa-file-audio" />
        );
      case "mp4":
      case "3gp":
      case "avi":
      case "mov":
      case "flv":
      case "wmv":
        return (
          <i title={type} className="far fa-2x text-warning fa-file-video" />
        );
      default:
        return <i title={type} className="fas text-dark fa-2x fa-file" />;
    }
  }

  render() {
    return (
      <div className="container-fluid mt-4 pt-1">
        <div className="row">
          <div className="col d-flex justify-content-between align-items-center">
            <div className="text-danger h5-responsive ml-3">
              Uploadedfiles Details
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
            <table className="table table-hover text-center" id="table">
              <thead className=" text-danger">
                <tr>
                  <th scope="col">S.no</th>
                  <th scope="col">FileType</th>
                  <th scope="col">FileName</th>
                  <th scope="col">TagName</th>
                  <th scope="col">StaffName</th>
                  <th scope="col">StaffId</th>
                  <th scope="col">Department</th>
                  <th scope="col">Semester</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.uploadedfiles.map((item, key) => (
                  <tr key={key}>
                    <th scope="row">{key + 1}</th>
                    <th>
                      <a
                        href={`${constants.baseUrl}${item[2]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {this.fileTypeIconFiner(
                          item[2].split(".")[item[2].split(".").length - 1]
                        )}
                      </a>
                    </th>
                    <td>{item[1]}</td>
                    <td>{item[3]}</td>
                    <td>{item[6]}</td>
                    <td>{item[5]}</td>
                    <td>{item[4]}</td>
                    <td>{item[7]}</td>
                    <td>
                      <button
                        className="bg-transparent"
                        onClick={() => this.deleteUploadedfiles(item[0])}
                      >
                        <i className="fas fa-trash-alt text-danger" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {this.state.uploadedfiles === 0 && <div className="row">
          <div className="col alert alert-danger text-center">
            No Data Found!
          </div>
        </div>}
      </div>
    );
  }
}
