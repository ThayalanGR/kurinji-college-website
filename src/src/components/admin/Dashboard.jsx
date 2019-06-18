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
  Deptstuact,
  Deptlab,
  Alumni
} from "../admin";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isAuthenticated: false
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
            >
              DeptEvents
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              id="deptstuact-tab"
              title="Department student Activities"
              data-toggle="tab"
              href="#deptstuact"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              DeptStuAct
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
            >
              DeptLab
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
            <Eventimage />
          </div>
          <div
            className="tab-pane fade"
            id="news"
            role="tabpanel"
            aria-labelledby="news-tab"
          >
            <News />
          </div>
          <div
            className="tab-pane fade"
            id="staffs"
            role="tabpanel"
            aria-labelledby="staffs-tab"
          >
            <Staff />
          </div>
          <div
            className="tab-pane fade"
            id="infrastructure"
            role="tabpanel"
            aria-labelledby="infrastructure-tab"
          >
            <Infrastructure />
          </div>
          <div
            className="tab-pane fade"
            id="gallery"
            role="tabpanel"
            aria-labelledby="gallery-tab"
          >
            <Gallery />
          </div>
          <div
            className="tab-pane fade"
            id="disclosure"
            role="tabpanel"
            aria-labelledby="disclosure-tab"
          >
            <Disclosure />
          </div>
          <div
            className="tab-pane fade"
            id="deptevent"
            role="tabpanel"
            aria-labelledby="deptevent-tab"
          >
            <Deptevent />
          </div>
          <div
            className="tab-pane fade"
            id="deptstuact"
            role="tabpanel"
            aria-labelledby="deptstuact-tab"
          >
            <Deptstuact />
          </div>
          <div
            className="tab-pane fade"
            id="deptlab"
            role="tabpanel"
            aria-labelledby="deptlab-tab"
          >
            <Deptlab />
          </div>
          <div
            className="tab-pane fade mt-4 pt-4"
            id="alumni"
            role="tabpanel"
            aria-labelledby="alumni-tab"
          >
            <Alumni />
          </div>
        </div>
      </Fragment>
    );
  }
}
