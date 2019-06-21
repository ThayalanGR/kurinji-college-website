import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../css/studentcorner.css";
import { toast } from "react-toastify";
import axios from "axios";
import constants from "../constants";


class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentLogin: {
        studentLoginId: "",
        studentLoginPassword: ""
      },
      studentRegister: {
        studentName: "",
        studentId: "",
        department: "",
        passwordOne: "",
        passwordTwo: "",
        mailId: "",
        mobileNumber: ""
      },
      forgotPasswordStudentId: '',
      isAuthenticated: false,
      swapLoginRegister: "login",
      memory: "login",
      studentName: '',
      studentDepartment: '',
      studentId: ''
    };
    this.validatingStudentRegistrationDetails = this.validatingStudentRegistrationDetails.bind(this);
    this.validatingStudentLoginDatails = this.validatingStudentLoginDatails.bind(this);
  }

  async componentWillMount() {
    if (await localStorage.getItem("studentId")) {
      await this.setState({ memory: "dashboard", isAuthenticated: true, studentId: await localStorage.getItem("studentId"), studentName: await localStorage.getItem("studentName"), studentDepartment: await localStorage.getItem("studentDepartment") })

    }
  }

  registrationHandler() {
    let formData = new FormData();
    formData.append("method", "register");
    formData.append("studentid", this.state.studentRegister.studentId);
    formData.append("studentname", this.state.studentRegister.studentName);
    formData.append("email", this.state.studentRegister.mailId);
    formData.append("password", this.state.studentRegister.passwordOne);
    formData.append("mobile", this.state.studentRegister.mobileNumber);
    formData.append("department", this.state.studentRegister.department);

    axios
      .request({
        url: `${constants.baseUrl}/api/studentauthhandler.php`,
        method: "POST",
        data: formData
      })
      .then(data => {
        if (data.data.status) {
          let temp = {
            studentName: "",
            studentId: "",
            department: "",
            passwordOne: "",
            passwordTwo: "",
            mailId: "",
            mobileNumber: ""
          }
          this.setState({ studentRegister: temp, memory: "login" });
          toast.success("Registration Success ! use your student id and password to login", {
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
    formData.append("studentid", this.state.studentLogin.studentLoginId);
    formData.append("password", this.state.studentLogin.studentLoginPassword);

    axios
      .request({
        url: `${constants.baseUrl}/api/studentauthhandler.php`,
        method: "POST",
        data: formData
      })
      .then(data => {
        if (data.data.status) {
          let temp = {
            studentLoginId: "",
            studentLoginPassword: ""
          }
          const {
            id,
            studentName,
            department
          } = data.data.studentDetails;
          localStorage.setItem("studentId", id);
          localStorage.setItem("studentName", studentName);
          localStorage.setItem("studentDepartment", department);
          this.setState({ studentLogin: temp, memory: "dashboard", isAuthenticated: true, studentId: id, studentName: studentName, studentDepartment: department });
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
    formData.append("studentid", this.state.forgotPasswordStudentId);
    formData.append("siteurl", constants.siteurl);

    axios
      .request({
        url: `${constants.baseUrl}/api/studentauthhandler.php`,
        method: "POST",
        data: formData
      })
      .then(data => {
        if (data.data.status) {
          this.setState({ forgotPasswordStudentId: '', memory: "login", swapLoginRegister: "login", isAuthenticated: false });
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


  validatingStudentRegistrationDetails() {
    let pass1 = this.state.studentRegister.passwordOne;
    let pass2 = this.state.studentRegister.passwordTwo;
    if (
      this.state.studentRegister.studentId === "" &&
      this.state.studentRegister.studentName === "" &&
      this.state.studentRegister.department === "" &&
      this.state.studentRegister.passwordOne === "" &&
      this.state.studentRegister.passwordTwo === "" &&
      this.state.studentRegister.mailId === "" &&
      this.state.studentRegister.mobileNumber === ""
    ) {
      toast.error("Fill all the Fields ", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.studentRegister.studentId === "") {
      toast.error('Fill the "studentId" field', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.studentRegister.studentId.substring(0, 3) !== "217") {
      toast.error("Invalid Student Id ", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.studentRegister.studentId.length !== 6) {
      toast.error("Invalid Student Id", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.studentRegister.studentName === "") {
      toast.error('Fill the "Name" field', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.studentRegister.department === "") {
      toast.error('Choose the "Depertment" ', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.studentRegister.passwordOne === "") {
      toast.error('Fill the "Password" field ', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.studentRegister.passwordTwo === "") {
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
    } else if (this.state.studentRegister.mailId === "") {
      toast.error("Enter Your Email Address", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.studentRegister.mobileNumber === "") {
      toast.error("Enter Your Mobile Number", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.studentRegister.mobileNumber.length !== 10) {
      toast.error("Mobile Number length should be 10", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else {
      this.registrationHandler();
    }
  }

  validatingStudentLoginDatails() {
    if (
      this.state.studentLogin.studentLoginId === "" &&
      this.state.studentLogin.studentLoginPassword === ""
    ) {
      toast.error("Fill all the Fields ", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.studentLogin.studentLoginId === "") {
      toast.error("Enter Student Id ", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.studentLogin.studentLoginPassword === "") {
      toast.error("Enter Password ", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else {
      this.loginHandler();
    }
  }

  getStudentRegisterBody() {
    return (
      <form
        className="container shadow p-4 mt-4 mb-4"
        style={{ width: "450px" }}
        onSubmit={(e) => { e.preventDefault(); this.validatingStudentRegistrationDetails() }}
      >
        <p
          className="h4-responsive mb-4 mt-2 text-center"
          style={{ color: "#FF3547" }}
        >
          Students Corner - Student Registration
        </p>
        <div>
          <p className="h6-responsive text-danger mb-1 mt-4">Student Id</p>
          <input
            type="number"
            className="form-control mb-4"
            placeholder="Student Id"
            id="studentid"
            value={this.state.studentRegister.studentId}
            onChange={e => {
              let temp = this.state.studentRegister;
              temp.studentId = e.target.value;
              this.setState({ studentId: temp });
            }}
          />
        </div>
        <div>
          <p className="h6-responsive text-danger mb-1 mt-4">Name</p>
          <input
            type="text"
            id="studentName"
            className="form-control mb-4"
            placeholder="Name"
            required
            value={this.state.studentRegister.studentName}
            onChange={e => {
              let temp = this.state.studentRegister;
              temp.studentName = e.target.value;
              this.setState({ studentName: temp });
            }}
          />
        </div>
        <div>
          <p className="h6-responsive text-danger mb-1 mt-4">Department</p>
          <select
            name="department"
            className="form-control mb-4"
            required
            value={this.state.studentRegister.department}
            onChange={e => {
              let temp = this.state.studentRegister;
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
            value={this.state.studentRegister.passwordOne}
            onChange={e => {
              let temp = this.state.studentRegister;
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
            value={this.state.studentRegister.passwordTwo}
            onChange={e => {
              let temp = this.state.studentRegister;
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
            value={this.state.studentRegister.mailId}
            onChange={e => {
              let temp = this.state.studentRegister;
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
            value={this.state.studentRegister.mobileNumber}
            onChange={e => {
              let temp = this.state.studentRegister;
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

  getStudentLoginBody() {
    return (
      <form className="container shadow p-4 mt-5" style={{ width: "450px" }}
        onSubmit={e => {
          e.preventDefault();
          this.validatingStudentLoginDatails();
        }}
      >
        <div className="row">
          <div
            className="col h4-responsive mb-4 mt-2 text-center"
            style={{ color: "#FF3547" }}
          >
            Students Corner - Student Login
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="h6-responsive text-danger mb-1 mt-4">Student Id</p>
            <input
              type="number"
              className="form-control mb-4"
              placeholder="Student Id"
              id="studentid"
              value={this.state.studentLogin.studentLoginId}
              onChange={e => {
                let temp = this.state.studentLogin;
                temp.studentLoginId = e.target.value;
                this.setState({ studentLogin: temp });
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
              value={this.state.studentLogin.studentLoginPassword}
              onChange={e => {
                let temp = this.state.studentLogin;
                temp.studentLoginPassword = e.target.value;
                this.setState({ studentLoginPassword: temp });
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

  getStudentDashboardBody() {
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
          <p className="h6-responsive text-danger mb-1 mt-4">Enter your Student Id</p>
          <input
            type="number"
            className="form-control mb-4"
            placeholder="Student Id"
            id="studentid"
            value={this.state.forgotPasswordStudentId}
            onChange={e => {
              this.setState({ forgotPasswordStudentId: e.target.value });
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
        return this.getStudentLoginBody();
      case "register":
        return this.getStudentRegisterBody();
      case "forgot":
        return this.getForgotPasswordBody();
      case "dashboard":
        return this.getStudentDashboardBody();
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


export default withRouter(Student);