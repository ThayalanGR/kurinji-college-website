import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../css/studentcorner.css";
import { toast } from "react-toastify";
import axios from "axios";
import constants from "../constants";


class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffLogin: {
        staffLoginId: "",
        staffLoginPassword: ""
      },
      staffRegister: {
        staffName: "",
        staffId: "",
        department: "",
        passwordOne: "",
        passwordTwo: "",
        mailId: "",
        mobileNumber: ""
      },
      forgotPasswordStaffId: '',
      isAuthenticated: false,
      swapLoginRegister: "login",
      memory: "login",
      staffName: '',
      staffDepartment: '',
      staffId: ''
    };
    this.validatingStaffRegistrationDetails = this.validatingStaffRegistrationDetails.bind(this);
    this.validatingStaffLoginDatails = this.validatingStaffLoginDatails.bind(this);
  }

  async componentWillMount() {
    if (await localStorage.getItem("staffId")) {
      await this.setState({ memory: "dashboard", isAuthenticated: true, staffId: await localStorage.getItem("staffId"), staffName: await localStorage.getItem("staffName"), staffDepartment: await localStorage.getItem("staffDepartment") })

    }
  }

  registrationHandler() {
    let formData = new FormData();
    formData.append("method", "register");
    formData.append("staffid", this.state.staffRegister.staffId);
    formData.append("staffname", this.state.staffRegister.staffName);
    formData.append("email", this.state.staffRegister.mailId);
    formData.append("password", this.state.staffRegister.passwordOne);
    formData.append("mobile", this.state.staffRegister.mobileNumber);
    formData.append("department", this.state.staffRegister.department);

    axios
      .request({
        url: `${constants.baseUrl}/api/staffauthhandler.php`,
        method: "POST",
        data: formData
      })
      .then(data => {
        if (data.data.status) {
          let temp = {
            staffName: "",
            staffId: "",
            department: "",
            passwordOne: "",
            passwordTwo: "",
            mailId: "",
            mobileNumber: ""
          }
          this.setState({ staffRegister: temp, memory: "login" });
          toast.success("Registration Success ! use your staff id and password to login", {
            position: "bottom-right"
          })
        } else {
          toast.error(data.data.message, {
            position: "bottom-right"
          });
        }
      })
      .catch(err => {
        toast.error("something went wrong! try again later!", {
          position: "bottom-right"
        });
        console.error(err)
      });
  }

  loginHandler() {
    let formData = new FormData();
    formData.append("method", "login");
    formData.append("staffid", this.state.staffLogin.staffLoginId);
    formData.append("password", this.state.staffLogin.staffLoginPassword);

    axios
      .request({
        url: `${constants.baseUrl}/api/staffauthhandler.php`,
        method: "POST",
        data: formData
      })
      .then(data => {
        if (data.data.status) {
          let temp = {
            staffLoginId: "",
            staffLoginPassword: ""
          }
          const {
            id,
            staffName,
            department
          } = data.data.staffDetails;
          localStorage.setItem("staffId", id);
          localStorage.setItem("staffName", staffName);
          localStorage.setItem("staffDepartment", department);
          this.setState({ staffLogin: temp, memory: "dashboard", isAuthenticated: true, staffId: id, staffName: staffName, staffDepartment: department });
          toast.success("login Success!", {
            position: "bottom-right"
          })
        } else {
          toast.error(data.data.message, {
            position: "bottom-right"
          });
        }
      })
      .catch(err => {
        toast.error("something went wrong! try again later!", {
          position: "bottom-right"
        });
        console.error(err)
      });

  }

  forgotPasswordHandler() {
    let formData = new FormData();
    formData.append("method", "forgot");
    formData.append("staffid", this.state.forgotPasswordStaffId);
    formData.append("siteurl", constants.siteurl);

    axios
      .request({
        url: `${constants.baseUrl}/api/staffauthhandler.php`,
        method: "POST",
        data: formData
      })
      .then(data => {
        if (data.data.status) {
          this.setState({ forgotPasswordStaffId: '', memory: "login", swapLoginRegister: "login", isAuthenticated: false });
          toast.success("password resetting email has been sent to your email account, check your email to change the password", {
            position: "bottom-right"
          })
        } else {
          toast.error(data.data.message, {
            position: "bottom-right"
          });
          const temp = document.getElementById("forgotSubmitButton"); temp.classList.remove("disabled"); temp.innerHTML = "Submit";
        }
      })
      .catch(err => {
        toast.error("something went wrong! try again later!", {
          position: "bottom-right"
        });
        const temp = document.getElementById("forgotSubmitButton"); temp.classList.remove("disabled"); temp.innerHTML = "Submit";
        console.error(err)
      });

  }


  validatingStaffRegistrationDetails() {
    let pass1 = this.state.staffRegister.passwordOne;
    let pass2 = this.state.staffRegister.passwordTwo;
    if (
      this.state.staffRegister.staffId === "" &&
      this.state.staffRegister.staffName === "" &&
      this.state.staffRegister.department === "" &&
      this.state.staffRegister.passwordOne === "" &&
      this.state.staffRegister.passwordTwo === "" &&
      this.state.staffRegister.mailId === "" &&
      this.state.staffRegister.mobileNumber === ""
    ) {
      toast.error("Fill all the Fields ", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.staffRegister.staffId === "") {
      toast.error('Fill the "staffId" field', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.staffRegister.staffId.substring(0, 3) !== "811") {
      toast.error("Invalid Staff Id ", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.staffRegister.staffId.length !== 7) {
      toast.error("Invalid Staff Id", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.staffRegister.staffName === "") {
      toast.error('Fill the "Name" field', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.staffRegister.department === "") {
      toast.error('Choose the "Depertment" ', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.staffRegister.passwordOne === "") {
      toast.error('Fill the "Password" field ', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.staffRegister.passwordTwo === "") {
      toast.error('Fill the "Re-enter Password" field ', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (pass2 !== pass1) {
      toast.error("Password is Mismatched..! Enter Correctly", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.staffRegister.mailId === "") {
      toast.error("Enter Your Email Address", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.staffRegister.mobileNumber === "") {
      toast.error("Enter Your Mobile Number", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.staffRegister.mobileNumber.length !== 10) {
      toast.error("Mobile Number length should be 10", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else {
      this.registrationHandler();
    }
  }

  validatingStaffLoginDatails() {
    if (
      this.state.staffLogin.staffLoginId === "" &&
      this.state.staffLogin.staffLoginPassword === ""
    ) {
      toast.error("Fill all the Fields ", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.staffLogin.staffLoginId === "") {
      toast.error("Enter Staff Id ", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.staffLogin.staffLoginPassword === "") {
      toast.error("Enter Password ", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else {
      this.loginHandler();
    }
  }

  getStaffRegisterBody() {
    return (
      <form
        className="container shadow p-4 mt-4 mb-4"
        style={{ width: "450px" }}
        onSubmit={(e) => { e.preventDefault(); this.validatingStaffRegistrationDetails() }}
      >
        <p
          className="h4-responsive mb-4 mt-2 text-center"
          style={{ color: "#FF3547" }}
        >
          Students Corner - Staff Registration
        </p>
        <div>
          <p className="h6-responsive text-danger mb-1 mt-4">Staff Id</p>
          <input
            type="number"
            className="form-control mb-4"
            placeholder="Staff Id"
            id="staffid"
            value={this.state.staffRegister.staffId}
            onChange={e => {
              let temp = this.state.staffRegister;
              temp.staffId = e.target.value;
              this.setState({ staffId: temp });
            }}
          />
        </div>
        <div>
          <p className="h6-responsive text-danger mb-1 mt-4">Name</p>
          <input
            type="text"
            id="staffName"
            className="form-control mb-4"
            placeholder="Name"
            required
            value={this.state.staffRegister.staffName}
            onChange={e => {
              let temp = this.state.staffRegister;
              temp.staffName = e.target.value;
              this.setState({ staffName: temp });
            }}
          />
        </div>
        <div>
          <p className="h6-responsive text-danger mb-1 mt-4">Department</p>
          <select
            name="department"
            className="form-control mb-4"
            required
            value={this.state.staffRegister.department}
            onChange={e => {
              let temp = this.state.staffRegister;
              temp.department = e.target.value;
              this.setState({ department: temp });
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
        <div>
          <p className="h6-responsive text-danger mb-1 mt-4">Password</p>
          <input
            type="password"
            id="pass"
            className="form-control mb-4"
            placeholder="Password"
            required
            value={this.state.staffRegister.passwordOne}
            onChange={e => {
              let temp = this.state.staffRegister;
              temp.passwordOne = e.target.value;
              this.setState({ passwordOne: temp });
            }}
          />
        </div>
        <div>
          <p className="h6-responsive text-danger mb-1 mt-4">
            Re-Enter Password
          </p>
          <input
            type="password"
            id="repass"
            className="form-control mb-4"
            placeholder="Re-enter Password"
            required
            value={this.state.staffRegister.passwordTwo}
            onChange={e => {
              let temp = this.state.staffRegister;
              temp.passwordTwo = e.target.value;
              this.setState({ passwordTwo: temp });
            }}
          />
        </div>
        <div>
          <p className="h6-responsive text-danger mb-1 mt-4">Email</p>
          <input
            type="email"
            id="mailid"
            className="form-control mb-4"
            placeholder="E-mail"
            required
            value={this.state.staffRegister.mailId}
            onChange={e => {
              let temp = this.state.staffRegister;
              temp.mailId = e.target.value;
              this.setState({ mailId: temp });
            }}
          />
        </div>
        <div>
          <p className="h6-responsive text-danger mb-1 mt-4">Mobile Number</p>
          <input
            type="number"
            id="mobile"
            className="form-control mb-4"
            placeholder="Mobile Number"
            required
            value={this.state.staffRegister.mobileNumber}
            onChange={e => {
              let temp = this.state.staffRegister;
              temp.mobileNumber = e.target.value;
              this.setState({ mobileNumber: temp });
            }}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-sm btn-danger"
          >
            Sign Up
          </button>
        </div>
      </form>
    );
  }

  getStaffLoginBody() {
    return (
      <form className="container shadow p-4 mt-5" style={{ width: "450px" }}
        onSubmit={e => {
          e.preventDefault();
          this.validatingStaffLoginDatails();
        }}
      >
        <div className="row">
          <div
            className="col h4-responsive mb-4 mt-2 text-center"
            style={{ color: "#FF3547" }}
          >
            Students Corner - Staff Login
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="h6-responsive text-danger mb-1 mt-4">Staff Id</p>
            <input
              type="number"
              className="form-control mb-4"
              placeholder="Staff Id"
              id="staffid"
              value={this.state.staffLogin.staffLoginId}
              onChange={e => {
                let temp = this.state.staffLogin;
                temp.staffLoginId = e.target.value;
                this.setState({ staffLogin: temp });
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="h6-responsive text-danger mb-1">Password</p>
            <input
              type="password"
              className="form-control mb-4"
              placeholder="Password"
              id="pass"
              required
              value={this.state.staffLogin.staffLoginPassword}
              onChange={e => {
                let temp = this.state.staffLogin;
                temp.staffLoginPassword = e.target.value;
                this.setState({ staffLoginPassword: temp });
              }}
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col text-left text-danger">
            <button type="button" onClick={async () => await this.setState({ swapLoginRegister: '', memory: "forgot" })} className="bg-transparent text-primary">Forgot password?</button>
          </div>
          <div className="col text-right text-danger">
            <span>Not a member?</span>
            <button type="button" onClick={async () => { await this.setState({ swapLoginRegister: "register" }); this.swapHandler(); }} className="bg-transparent text-primary ml-2"> Register</button>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <button
              type="submit"
              className="btn btn-sm btn-danger"
            >
              Login
            </button>
          </div>
        </div>
      </form >
    );
  }

  getStaffDashboardBody() {
    return (
      <div>
        dashboard
      </div>
    )
  }


  getForgotPasswordBody() {
    return <form className="container shadow p-4 mt-5" style={{ width: "450px" }}
      onSubmit={e => {
        e.preventDefault();
        this.forgotPasswordHandler();
      }}>
      <div className="row">
        <div
          className="col h4-responsive mb-4 mt-2 text-center"
          style={{ color: "#FF3547" }}
        >
          Students Corner - Forgot Password Helper
      </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="h6-responsive text-danger mb-1 mt-4">Enter your Staff Id</p>
          <input
            type="number"
            className="form-control mb-4"
            placeholder="Staff Id"
            id="staffid"
            value={this.state.forgotPasswordStaffId}
            onChange={e => {
              this.setState({ forgotPasswordStaffId: e.target.value });
            }}
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <button
            className="btn btn-sm btn-danger"
            type="submit"
            id="forgotSubmitButton"
            onClick={(e) => { const temp = document.getElementById("forgotSubmitButton"); temp.classList.add("disabled"); temp.innerHTML = "please wait requesting!"; }}
          >
            Submit
        </button>
        </div>
      </div>
    </form >
  }

  swapHandler() {
    this.setState({ memory: this.state.swapLoginRegister });
  }

  logOutHandler() {
    localStorage.clear();
    this.setState({ memory: "login", isAuthenticated: false })
  }

  mainBodyRenderer() {
    switch (this.state.memory) {
      case "login":
        return this.getStaffLoginBody();
      case "register":
        return this.getStaffRegisterBody();
      case "forgot":
        return this.getForgotPasswordBody();
      case "dashboard":
        return this.getStaffDashboardBody();
      default:
        break;
    }

  }

  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg shadow-sm student-corner-header">
          <Link className="navbar-brand text-white ml-2" to="/home">
            <i className="fas fa-users" /> Students Corner
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Pricing
                </Link>
              </li>
            </ul>
            <span className="navbar-text">
              {!this.state.isAuthenticated ? <Fragment>
                {!(this.state.swapLoginRegister === "register") && <button onClick={async () => { await this.setState({ swapLoginRegister: "register" }); this.swapHandler(); }} className="btn btn-sm btn-outline-light rounded text-white">Register</button>}
                {!(this.state.swapLoginRegister === "login") && <button onClick={async () => { await this.setState({ swapLoginRegister: "login" }); this.swapHandler(); }} className="btn btn-sm btn-outline-light rounded text-white">Login</button>}
              </Fragment> : <button onClick={() => { this.logOutHandler(); }} className="btn btn-sm btn-outline-light rounded text-white">Logout</button>}
            </span>
          </div>
        </nav>
        <div className="student-corner-container">
          {this.state && this.mainBodyRenderer()}
        </div>
      </Fragment>
    );
  }
}


export default withRouter(Staff);