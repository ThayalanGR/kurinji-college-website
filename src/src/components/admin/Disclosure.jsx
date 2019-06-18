import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { constants } from "../../components";
const baseUrl = constants.baseUrl;

export default class Disclosure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disclosureFile: null,
      disclosureFileName: "choose an Image..",
      existingDisclosure: []
    };
    this.addNewDisclosureFile = this.addNewDisclosureFile.bind(this);
    this.removeDisclosureFile = this.removeDisclosureFile.bind(this);
    this.fetchDisclosure = this.fetchDisclosure.bind(this);
  }

  componentWillMount() {
    this.fetchDisclosure();
  }

  fetchDisclosure() {
    axios
      .get(`${baseUrl}/api/disclosure.php`)
      .then(data => {
        this.setState({ existingDisclosure: data.data });
      })
      .catch(err => console.log(err));
  }

  addNewDisclosureFile(e) {
    var data = new FormData();
    data.append("method", "post");
    data.append("file", this.state.disclosureFile);
    this.setState({
      disclosureFile: null,
      disclosureFileName: "Choose a pdf file.."
    });
    var toastId = null;
    axios
      .request({
        method: "post",
        url: `${baseUrl}/api/disclosure.php`,
        data: data,
        onUploadProgress: p => {
          const progress = p.loaded / p.total;
          if (toastId === null) {
            toastId = toast("Upload in Progress", {
              progress: progress,
              position: "bottom-left"
            });
          } else {
            toast.update(toastId, {
              progress: progress
            });
          }
        }
      })
      .then(data => {
        this.fetchDisclosure();
        toast.done(toast.id);
        toast.dismiss(toastId);
        e.target.value = "";
      })
      .catch(err => console.log(err));
  }

  removeDisclosureFile(id) {
    var data = new FormData();
    data.append("method", "delete");
    data.append("id", id);

    axios
      .request({
        method: "post",
        url: `${baseUrl}/api/disclosure.php`,
        data: data
      })
      .then(data => {
        if (data.data.response) {
          this.fetchDisclosure();
          toast.success("disclosure deleted successfully!", {
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

  render() {
    return (
      <div className="container-fluid p-2">
        <div className="row mtspace ">
          <div className="col text-center text-danger h5">
            Disclosure
            <hr />
          </div>
        </div>
        <div className="row" style={{ maxWidth: "100vw" }}>
          <div className="col-md-6 " style={{ width: "100%" }}>
            <div className="text-center text-danger">
              Add new Disclosure
              <hr />
            </div>

            <div className="d-flex justify-content-center">
              <form className="was-validated" style={{ width: "350px" }}>
                <label htmlFor="validatedCustomFile">Disclosure File</label>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input form-control"
                    id="validatedCustomFile"
                    accept="application/pdf"
                    onChange={e => {
                      this.setState({
                        disclosureFile: e.target.files[0],
                        disclosureFileName: e.target.files[0].name
                      });
                    }}
                    required
                  />
                  <label
                    className="custom-file-label"
                    htmlFor="validatedCustomFile"
                  >
                    {this.state.disclosureFileName}
                  </label>
                  <div className="invalid-feedback">
                    Please choose Disclosure pdf file <br />
                    note:- you can upload only one file in disclosure
                  </div>
                </div>

                <div className="mt-2 mb-3">
                  <button
                    className="text-white btn btn-sm btn-danger"
                    name="submit"
                    onClick={e => {
                      e.preventDefault();
                      this.addNewDisclosureFile(e);
                    }}
                  >
                    Upload
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center text-danger">
              Existing Disclosure File
              <hr />
            </div>

            <div className="p-1 container">
              {this.state.existingDisclosure.map((item, index) => {
                return (
                  <div className="row" key={index}>
                    <div className="col-md-4 text-center d-flex justify-content-center align-items-center">
                      <a
                        href={`${constants.baseUrl}${item[1]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="far fa-file-pdf fa-5x text-danger" />
                      </a>
                    </div>
                    <div className="col-md-4">
                      File Name : {item[2]}
                      <br />
                      <hr />
                      <br />
                      uploaded At: {item[3]}
                    </div>
                    <div className="col-3 text-center d-flex justify-content-center align-items-center">
                      <button
                        value={item[0]}
                        onClick={e => {
                          this.removeDisclosureFile(e.target.value);
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
