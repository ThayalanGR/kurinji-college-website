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
      tagName: ""
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
        console.log("IAMHERE");

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
            tagName: ""
          })
          toast.success("File uploaded successfully", {
            position: "bottom-right"
          });
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
                      accept=".txt,.doc,.docx,.pdf,.zip,.ppt,application/msword,aplication/vnd.openxmlformats-officedocument.wordprocessingml.document/image/*"
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
            <div className="text-center d-flex justify-content-around">
              <div className="text-danger">Uploaded Files</div>
            </div>
            <div className="row">
              <div className="col">
                <hr />
              </div>
            </div>
            <div className="p-1 container">
              {/* {this.state.map((item, index) => { */}
              {/* return ( */}
              <div className="row">
                <div className="col-md-4 text-center d-flex justify-content-center align-items-center">
                  {/* eslint-disable-next-line */}
                  <a

                    // href={`${constants.baseUrl}${item[1]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="far fa-file-pdf fa-5x text-danger" />
                  </a>
                </div>
                <div className="col-md-4">
                  Filename :- Javscript<br />
                  Department :- CSE <br />
                  Semester :- 6 <br />
                  Tag :- CS6601 <br />
                  Uploaded By :- Chardru
                      <br />
                  <hr />
                  <br />
                  uploaded At: 21-06-2019
                    </div>
                <div className="col-3 text-center d-flex justify-content-center align-items-center">
                  <button
                    // value={item[0]}
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
              {/* ); */}
              {/* })} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
