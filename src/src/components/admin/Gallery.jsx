import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { constants } from "../../components";
const baseUrl = constants.baseUrl;

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      GalleryFile: null,
      GalleryFileName: "choose an Image..",
      existingGallery: []
    };
    this.addNewGalleryImage = this.addNewGalleryImage.bind(this);
    this.removeGalleryImage = this.removeGalleryImage.bind(this);
    this.fetchGallery = this.fetchGallery.bind(this);
  }
  componentWillMount() {
    this.fetchGallery();
  }

  fetchGallery() {
    axios
      .get(`${baseUrl}/api/gallery.php`)
      .then(data => {
        this.setState({ existingGallery: data.data });
      })
      .catch(err => console.log(err));
  }

  addNewGalleryImage() {
    var data = new FormData();
    data.append("method", "post");
    data.append("file", this.state.GalleryFile);
    this.setState({
      GalleryFile: null,
      GalleryFileName: "Choose an Image.."
    });
    var toastId = null;
    axios
      .request({
        method: "post",
        url: `${baseUrl}/api/gallery.php`,
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
        this.fetchGallery();
        toast.done(toast.id);
        toast.dismiss(toastId);
      })
      .catch(err => console.log(err));
  }

  removeGalleryImage(id) {
    var data = new FormData();
    data.append("method", "delete");
    data.append("id", id);

    axios
      .request({
        method: "post",
        url: `${baseUrl}/api/gallery.php`,
        data: data
      })
      .then(data => {
        if (data.data.response) {
          this.fetchGallery();
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
            Gallery
            <hr />
          </div>
        </div>
        <div className="row" style={{ maxWidth: "100vw" }}>
          <div className="col-md-6 " style={{ width: "100%" }}>
            <div className="text-center text-danger">
              Add new Image
              <hr />
            </div>

            <div className="d-flex justify-content-center">
              <form className="was-validated" style={{ width: "350px" }}>
                <label htmlFor="validatedCustomFile">
                  Gallery Image
                </label>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input form-control"
                    id="validatedCustomFile"
                    accept="image/*"
                    onChange={e => {
                      this.setState({
                        GalleryFile: e.target.files[0],
                        GalleryFileName: e.target.files[0].name
                      });
                    }}
                    required
                  />
                  <label
                    className="custom-file-label"
                    htmlFor="validatedCustomFile"
                  >
                    {this.state.GalleryFileName}
                  </label>
                  <div className="invalid-feedback">
                    Please choose a good quality image
                  </div>
                </div>

                <div className="mt-2 mb-3">
                  <button
                    className="text-white btn btn-sm btn-danger"
                    name="submit"
                    onClick={e => {
                      e.preventDefault();
                      this.addNewGalleryImage();
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
            <div className="text-center text-danger">
              Images in Gallery
              <hr />
            </div>

            <div className="p-1 container">
              {this.state.existingGallery.map((item, index) => {
                return (
                  <div className="row" key={index}>
                    <div className="col-md-4">
                      <img
                        src={`${baseUrl}/${item[1]}`}
                        className="img-thumbnail"
                        alt=""
                      />
                    </div>
                    <div className="col-3 text-center d-flex justify-content-center align-items-center">
                      <button
                        value={item[0]}
                        onClick={e => {
                          this.removeGalleryImage(e.target.value);
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
