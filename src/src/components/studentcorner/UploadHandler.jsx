import React, { Component } from "react";
import { constants } from "../../components";
import axios from 'axios';
import { toast } from "react-toastify";

export default class UploadHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadFile: null,
      uploadFileTitle: "",
      uploadFileName: "Choose a file",
      uploadDepartment: "",
      uploadSemester: "",
      tagName: "",
      files: []
    };
  }

  validatingUploadFiles() {
    if (this.state.uploadDepartment === "") {
      toast.error("Choose Department", {
        position: "bottom-right",
        autoClose: true,
        hideProgressBar: false
      });
    } else if (this.state.uploadSemester === "") {
      toast.error("Choose Semester", {
        position: "bottom-right",
        autoClose: true,
        hideProgressBar: false
      });
    } else if (this.state.uploadFileTitle === "") {
      toast.error("Enter Filename !", {
        position: "bottom-right",
        autoClose: true,
        hideProgressBar: false
      });
    } else if (this.state.tagName === "") {
      toast.error("Enter Tagname !", {
        position: "bottom-right",
        autoClose: true,
        hideProgressBar: false
      });
    } else if (this.state.uploadFileName) {
      let extension = this.state.uploadFileName.split(".").pop();
      if (
        extension === "mp3" ||
        extension === "exe" ||
        extension === "mp4" ||
        extension === "3gp" ||
        extension === "apk"
      ) {
        toast.error("Please check the file format ", {
          position: "bottom-right",
          autoClose: true,
          hideProgressBar: false
        });
      } else {
        this.fileUploadHandler();
      }
    }
  }

  fileUploadHandler() {
    let formData = new FormData();
    formData.append("method", "upload");
    formData.append("filename", this.state.uploadFileTitle);
    formData.append("tag", this.state.tagName);
    formData.append("department", this.state.uploadDepartment);
    formData.append("staffid", this.props.staffId);
    formData.append("staffname", this.props.staffName);
    formData.append("semester", this.state.uploadSemester);
    formData.append("file", this.state.uploadFile);
    axios
      .request({
        url: `${constants.baseUrl}/api/studentcornerfilehandler.php`,
        method: "POST",
        data: formData
      })
      .then(data => {

        if (data.data.status) {
          this.setState({
            uploadFile: null,
            uploadFileTitle: "",
            uploadFileName: "Choose a file",
            uploadDepartment: "",
            uploadSemester: "",
            tagName: "",
          })
          toast.success("File uploaded successfully", {
            position: "bottom-right"
          });
          this.fetchUploadedFiles()
        } else {
          toast.error(String(data.data.message), {
            position: "bottom-right"
          });
        }
      })
      .catch(err => {
        console.log(err);
        toast.error("something went wrong!", {
          position: "bottom-right"
        });
      })
  }

  fetchUploadedFiles() {
    let formData = new FormData();
    formData.append("method", "filter");
    formData.append("filtertype", "3");
    formData.append("staffid", this.props.staffId);
    axios
      .request({
        url: `${constants.baseUrl}/api/studentcornerfilehandler.php`,
        method: "POST",
        data: formData
      })
      .then(data => {
        this.setState({ files: data.data.data });
      })
      .catch(err => console.error(err))
  }

  componentDidMount() {
    this.fetchUploadedFiles();
  }

  deleteUploadedFile(id) {
    var data = new FormData();
    data.append("method", "delete");
    data.append("id", id);
    axios
      .request({
        method: "POST",
        url: `${constants.baseUrl}/api/studentcornerfilehandler.php`,
        data: data
      })
      .then(data => {
        if (data.data.status) {
          this.fetchUploadedFiles();
          toast.success("File deleted successfully!", {
            position: "bottom-left"
          });
        } else {
          toast.error("something went wrong !", {
            position: "bottom-left"
          });
        }
      })
      .catch(err => {
        toast.error("something went wrong !", {
          position: "bottom-left"
        });
      });
  }

  fileTypeIconFiner(type) {
    switch (type.toLowerCase()) {
      case "pdf":
        return <i title={type} className="fas fa-4x text-danger fa-file-pdf"></i>
      case "docx":
        return <i title={type} className="far fa-4x text-primary fa-file-word"></i>
      case "xlsx":
        return <i title={type} className="far fa-4x text-success fa-file-excel"></i>
      case "zip" || "rar":
        return <i title={type} className="fas fa-4x text-danger fa-file-archive"></i>
      case "png" || "jpg" || "svg" || "jpeg":
        return <i title={type} className="far fa-4x text-warning fa-file-image"></i>
      case "txt":
        return <i title={type} className="far fa-4x text-warning fa-file-alt"></i>
      case "ppt":
        return <i title={type} className="far fa-4x text-warning fa-file-powerpoint"></i>
      case "mp3" || "wav" || "wma" || "aif" || "ogg" || "mpeg":
        return <i title={type} className="far fa-4x text-warning fa-file-audio"></i>
      case "mp4" || "3gp" || "avi" || "mov" || "flv" || "wmv":
        return <i title={type} className="far fa-4x text-warning fa-file-video"></i>
      default:
        return <i title={type} className="fas text-dark fa-4x fa-file"></i>
    }
  }

  render() {
    return (
      <div className="container-fluid p-2">
        <div className="row">
          <div className="col text-center text-danger h5">
            File Uploader
            <hr />
          </div>
        </div>
        <div className="row" style={{ maxWidth: "100vw" }}>
          <div className="col-md-6 " style={{ width: "100%" }}>
            <div className="text-center text-danger mt-0">Upload New File</div>
            <div className="row mt-1 pt-1">
              <div className="col">
                <hr />
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <form
                className=""
                style={{ width: "350px" }}
                onSubmit={e => {
                  e.preventDefault();
                  this.validatingUploadFiles();
                }}
              >
                <div className="mb-3">
                  <label htmlFor="validationTextarea ">Department</label>
                  <select
                    name=""
                    className="form-control"
                    value={this.state.uploadDepartment}
                    onChange={e => {
                      this.setState({ uploadDepartment: e.target.value });
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
                  <label htmlFor="validationTextarea ">Semester</label>
                  <select
                    name=""
                    className="form-control"
                    value={this.state.uploadSemester}
                    onChange={e => {
                      this.setState({ uploadSemester: e.target.value });
                    }}
                  >
                    <option value="">Choose Semester</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="validationTextarea ">Filename</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationTextarea"
                    placeholder="Required  textarea"
                    value={this.state.uploadFileTitle}
                    onChange={e => {
                      this.setState({ uploadFileTitle: e.target.value });
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="validationTextarea ">Tag</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationTextarea"
                    placeholder="Unique tag"
                    value={this.state.tagName}
                    onChange={e => {
                      this.setState({ tagName: e.target.value });
                    }}
                  />
                  <div className="font-small text-danger">
                    Enter Tagname for easy sharing ( eg :- CS6301 , ... )
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="validatedCustomFile">Choose File</label>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input form-control"
                      id="validatedCustomFile"
                      onChange={e => {
                        this.setState({
                          uploadFile: e.target.files[0],
                          uploadFileName: e.target.files[0].name
                        });
                      }}
                      required
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="validatedCustomFile"
                    >
                      {this.state.uploadFileName}
                    </label>
                  </div>
                </div>
                <div className="mt-2 mb-3">
                  <button
                    type="submit"
                    className="text-white btn btn-sm btn-danger"
                    name="submit"
                  >
                    Upload
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col text-danger d-flex justify-content-around align-items-center">
                <div>Uploaded Files</div>
                <div>Total Files: {this.state.files.length}</div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <hr />
              </div>
            </div>
            <div className="p-1 container">
              {this.state.files.map((item, key) => (
                <div className="row" key={key}>
                  <div className="col-md-1 d-flex justify-content-center align-items-center">{key + 1} .</div>
                  <div className="col-md-3 text-center d-flex justify-content-center align-items-center">
                    <a
                      href={`${constants.baseUrl}${item[2]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {this.fileTypeIconFiner(item[2].split(".")[item[2].split(".").length - 1])}
                    </a>
                  </div>
                  <div className="col-md-4">
                    Filename :- {item[1]}<br />
                    Department :- {item[4]} <br />
                    Semester :- {item[7]} <br />
                    Tag :- {item[3]} <br />
                    Uploaded By :- {item[6]}
                    uploaded At: {new Date(item[8]).toDateString()}
                  </div>
                  <div className="col-3 text-center d-flex justify-content-center align-items-center">
                    <button
                      value={item[0]}
                      onClick={e => {
                        this.deleteUploadedFile(e.target.value);
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
              )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
