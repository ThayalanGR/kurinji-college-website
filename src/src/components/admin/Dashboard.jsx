import React, { Component, Fragment } from "react";
import { Loader, Admin } from "../../components";
import logo from "../../images/favicon.png";
import {
  Staff,
  Eventimage,
  News,
  Infrastructure,
  Gallery,
  Disclosure,
  Deptevent,
  Deptstuach,
  Deptlab,
  Alumni,
  Stucorstaffs,
  Stucorstudents,
  Uploadedfiles
} from "../admin";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isAuthenticated: false,
      eventimagekey: null,
      newskey: null,
      infrastructurekey: null,
      gallerykey: null,
      alumnikey: null,
      disclosurekey: null,
      staffskey: null,
      depteventkey: null,
      deptstuactkey: null,
      deptlabkey: null,
      stucorstudentskey: null,
      stucorstaffskey: null,
      uploadedfileskey: null
    };
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    this.setState({ isAuthenticated: this.props.isAuthenticated });
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  logout() {
    localStorage.clear();
    this.setState({ isAuthenticated: false });
  }

  render() {
    return this.state.isLoading ? (
      <Loader type={"bars"} />
    ) : !this.state.isAuthenticated ? (
      <Admin />
    ) : (
      <Fragment>
        <nav
          className="navbar navbar-expand-lg fixed-top red"
          style={{ height: "60px" }}
        >
          <a className="navbar-brand text-white" href="/admin">
            <img className="mr-2" src={logo} width={40} alt="" />
            KCET ADMIN DASHBOARD
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                {/* <a className="nav-link text-white text-light" href="/">HomeScreen</a> */}
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <button
                className="btn btn-sm btn-white  my-2 my-sm-0 text-danger font-weight-bold"
                onClick={() => this.logout()}
              >
                Logout
              </button>
            </form>
          </div>
        </nav>

        <ul
          className="nav nav-tabs fixed-top nav-tabs-expanded nav-justified ul-scroll mt-5 pt-3"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link text-white active"
              id="eventimage-tab"
              title="Events in the homepage images with caption"
              data-toggle="tab"
              href="#eventimage"
              role="tab"
              aria-controls="home"
              aria-selected="true"
              onClick={() => {
                this.setState({ eventimagekey: Math.random() });
              }}
            >
              MasterEvents
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              id="news-tab"
              title="News in the homepage - bottom carousel section"
              data-toggle="tab"
              href="#news"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
              onClick={() => {
                this.setState({ newskey: Math.random() });
              }}
            >
              News
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link text-white"
              id="infrastructure-tab"
              title="infrasturcture content upload section"
              data-toggle="tab"
              href="#infrastructure"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
              onClick={() => {
                this.setState({ infrastructurekey: Math.random() });
              }}
            >
              Infrastructure
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              id="gallery-tab"
              data-toggle="tab"
              title="Upload images for show case - photo gallery"
              href="#gallery"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
              onClick={() => {
                this.setState({ gallerykey: Math.random() });
              }}
            >
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              id="alumni-tab"
              data-toggle="tab"
              title="view and download Alumni registration Details"
              href="#alumni"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
              onClick={() => {
                this.setState({ alumnikey: Math.random() });
              }}
            >
              Alumni
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              id="disclosure-tab"
              title="Mandatory Disclosure"
              data-toggle="tab"
              href="#disclosure"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
              onClick={() => {
                this.setState({ disclosurekey: Math.random() });
              }}
            >
              Disclosure
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              id="staffs-tab"
              title="Department wise staff info upload section"
              data-toggle="tab"
              href="#staffs"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
              onClick={() => {
                this.setState({ staffskey: Math.random() });
              }}
            >
              DeptStaffs
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              id="deptevent-tab"
              title="Department events"
              data-toggle="tab"
              href="#deptevent"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
              onClick={() => {
                this.setState({ depteventkey: Math.random() });
              }}
            >
              DeptEvents
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              id="deptstuact-tab"
              title="Department Student Achievements"
              data-toggle="tab"
              href="#deptstuact"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
              onClick={() => {
                this.setState({ deptstuactkey: Math.random() });
              }}
            >
              DeptStuAch
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              id="deptlab-tab"
              title="Department Laboratories"
              data-toggle="tab"
              href="#deptlab"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
              onClick={() => {
                this.setState({ deptlabkey: Math.random() });
              }}
            >
              DeptLab
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              id="stucorstudents-tab"
              title="Department Laboratories"
              data-toggle="tab"
              href="#stucorstudents"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
              onClick={() => {
                this.setState({ stucorstudentskey: Math.random() });
              }}
            >
              StucorStudents
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              id="stucorstaffs-tab"
              title="Department Laboratories"
              data-toggle="tab"
              href="#stucorstaffs"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
              onClick={() => {
                this.setState({ stucorstaffskey: Math.random() });
              }}
            >
              StucorStaffs
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              id="uploadedfiles-tab"
              title="Department Laboratories"
              data-toggle="tab"
              href="#uploadedfiles"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
              onClick={() => {
                this.setState({ uploadedfileskey: Math.random() });
              }}
            >
              UploadedFiles
            </a>
          </li>
        </ul>

        <div className="tab-content mt-5 pt-2" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="eventimage"
            role="tabpanel"
            aria-labelledby="eventimage-tab"
          >
            <Eventimage key={this.state.eventimagekey} />
          </div>
          <div
            className="tab-pane fade"
            id="news"
            role="tabpanel"
            aria-labelledby="news-tab"
          >
            <News key={this.state.newskey} />
          </div>
          <div
            className="tab-pane fade"
            id="staffs"
            role="tabpanel"
            aria-labelledby="staffs-tab"
          >
            <Staff key={this.state.staffskey} />
          </div>
          <div
            className="tab-pane fade"
            id="infrastructure"
            role="tabpanel"
            aria-labelledby="infrastructure-tab"
          >
            <Infrastructure key={this.state.infrastructurekey} />
          </div>
          <div
            className="tab-pane fade"
            id="gallery"
            role="tabpanel"
            aria-labelledby="gallery-tab"
          >
            <Gallery key={this.state.gallerykey} />
          </div>
          <div
            className="tab-pane fade"
            id="disclosure"
            role="tabpanel"
            aria-labelledby="disclosure-tab"
          >
            <Disclosure key={this.state.disclosurekey} />
          </div>
          <div
            className="tab-pane fade"
            id="deptevent"
            role="tabpanel"
            aria-labelledby="deptevent-tab"
          >
            <Deptevent key={this.state.depteventkey} />
          </div>
          <div
            className="tab-pane fade"
            id="deptstuact"
            role="tabpanel"
            aria-labelledby="deptstuact-tab"
          >
            <Deptstuach key={this.state.deptstuactkey} />
          </div>
          <div
            className="tab-pane fade"
            id="deptlab"
            role="tabpanel"
            aria-labelledby="deptlab-tab"
          >
            <Deptlab key={this.state.deptlabkey} />
          </div>
          <div
            className="tab-pane fade mt-4 pt-4"
            id="alumni"
            role="tabpanel"
            aria-labelledby="alumni-tab"
          >
            <Alumni key={this.state.alumnikey} />
          </div>
          <div
            className="tab-pane fade mt-4 pt-4"
            id="stucorstudents"
            role="tabpanel"
            aria-labelledby="stucorstudents-tab"
          >
            <Stucorstudents key={this.state.stucorstudentskey} />
          </div>
          <div
            className="tab-pane fade mt-4 pt-4"
            id="stucorstaffs"
            role="tabpanel"
            aria-labelledby="stucorstaffs-tab"
          >
            <Stucorstaffs key={this.state.stucorstaffskey} />
          </div>
          <div
            className="tab-pane fade mt-4 pt-4"
            id="uploadedfiles"
            role="tabpanel"
            aria-labelledby="uploadedfiles-tab"
          >
            <Uploadedfiles key={this.state.uploadedfileskey} />
          </div>
        </div>
      </Fragment>
    );
  }
}
