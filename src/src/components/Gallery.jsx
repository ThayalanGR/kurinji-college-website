import React, { Component, Fragment } from "react";
import { Loader } from "../components";
import "../css/gallery.css";
import axios from "axios";
import { toast } from "react-toastify";
import constants from "./constants";

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      galleryItems: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 500);

    this.fetchGalleryItems();
  }

  fetchGalleryItems() {
    const url = `${constants.baseUrl}/api/gallery.php`;
    axios
      .get(url)
      .then(data => {
        this.setState({ galleryItems: data.data });
      })
      .catch(err => console.error(err));
  }

  firePreviewContainer(src) {
    toast.dismiss()
    toast(
      <img
        className="gallery-preview-container-image img img-responsive"
        src={src}
        alt=""
        srcSet=""
      />,
      {
        position: "top-left",
        hideProgressBar: true,
        autoClose: false,
        draggable: true,
        className: "Toastify__toast-custom"
      }
    );
  }

  render() {
    return this.state.isLoading ? (
      <Loader type={"bars"} />
    ) : (
      <Fragment>
        <div className="mtspace container-fluid gallery-container">
          <div className="row">
            <div className="col text-center font-weight-bold text-primary h4-responsive">
              Gallery
              <hr />
            </div>
          </div>
          <div className="row">
            {this.state.galleryItems.map((item, key) => (
              <div className="col-sm-12 col-md-2 text-center mb-2" key={key}>
                <img
                  onClick={e => {
                    this.firePreviewContainer(e.target.src);
                  }}
                  className="gallery-image-thumbnail hoverable"
                  src={`${constants.baseUrl}/${item[1]}`}
                  alt=""
                  srcSet=""
                />
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}
