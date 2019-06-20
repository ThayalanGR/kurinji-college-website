import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../../css/studentcorner.css";
import { toast } from "react-toastify";

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentLogin:{
        studentLoginId: "",
        studentLoginPassword: ""
      },
      studentRegister:{
        studentName: "",
        studentId: "",
        department: "",
        passwordOne: "",
        passwordTwo: "",
        mailId: "",
        mobileNumber: ""
      },
      studentRegisterDetails: [],
      studentLoginDetails: [],
    };
    this.validatingStudentDatails = this.validatingStudentDatails.bind(this);
    this.validatingStudentLoginDatails = this.validatingStudentLoginDatails.bind(
      this
    );
  }

  // Validating and Adding the Registration_Form_Data
  validatingStudentDatails() {
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
      toast.error("Id starts with '217' ", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.studentRegister.studentId.length !== 6) {
      toast.error("Id length should be 6", {
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
      const name = this.state.studentRegister.studentName;
      const sid = this.state.studentRegister.studentId;
      const dept = this.state.studentRegister.department;
      const password = this.state.studentRegister.passwordOne;
      const email = this.state.studentRegister.mailId;
      const mobile = this.state.studentRegister.mobileNumber;
      this.setState({
        studentId: "",
        studentName: "",
        department: "",
        passwordOne: "",
        passwordTwo: "",
        mailId: "",
        mobileNumber: ""
      });
      const temp = this.state.studentRegisterDetails;
      temp.push({
        studentId: sid,
        studentName: name,
        department: dept,
        passwordOne: password,
        mailId: email,
        mobileNumber: mobile
      });
      this.setState({ studentRegisterDetails: temp });
      console.log(
        "current Registration Detail",
        this.state.studentRegisterDetails
      );
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
      const loginId = this.state.studentLogin.studentLoginId;
      const loginPassword = this.state.studentLogin.studentLoginPassword;
      const tempArr = this.state.studentLoginDetails;
      tempArr.push({
        studentLoginId: loginId,
        studentLoginPassword: loginPassword
      });
      this.setState({ studentLoginDetails: tempArr });
      console.log("current Login Detail", this.state.studentLoginDetails);
    }
  }

  getStudentRegisterBody() {
    return (
      <form className="container shadow p-4 mt-5" style={{ width: "450px" }}>
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
              this.setState({ studentId: e.target.value });
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
              this.setState({ studentName: e.target.value });
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
              this.setState({ department: e.target.value });
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
              this.setState({ passwordOne: e.target.value });
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
              this.setState({ passwordTwo: e.target.value });
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
              this.setState({ mailId: e.target.value });
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
              this.setState({ mobileNumber: e.target.value });
            }}
          />
        </div>
        <div className="text-center">
          <button
            className="btn btn-sm btn-danger"
            onClick={e => {
              e.preventDefault();
              this.validatingStudentDatails();
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    );
  }

  getStudentLoginBody() {
    return (
      <form className="container shadow p-4 mt-5" style={{ width: "450px" }}>
        <p
          className="h4-responsive mb-4 mt-2 text-center"
          style={{ color: "#FF3547" }}
        >
          Students Corner - Student Login
        </p>
        <div>
          <p className="h6-responsive text-danger mb-1 mt-4">Student Id</p>
          <input
            type="number"
            className="form-control mb-4"
            placeholder="Student Id"
            id="studentid"
            onChange={e => {
              this.setState({ studentLoginId: e.target.value });
            }}
          />
        </div>
        <div>
          <p className="h6-responsive text-danger mb-1">Password</p>
          <input
            type="password"
            className="form-control mb-4"
            placeholder="Password"
            id="pass"
            required
            onChange={e => {
              this.setState({ studentLoginPassword: e.target.value });
            }}
          />
        </div>
        <div className="row mb-4">
          <p className="col text-left text-danger">
            <button onClick={e => {} } className="btn btn-link">Forgot password?</button>
          </p>
          <p className="col text-right text-danger">
            {" "}
            Not a member?&nbsp;&nbsp;
            <button onClick={e => {} } className="btn btn-link">Register</button>
          </p>
        </div>
        <div className="text-center">
          <button
            className="btn btn-sm btn-danger"
            onClick={e => {
              e.preventDefault();
              this.validatingStudentLoginDatails();
            }}
          >
            Login
          </button>
          <div>
            <p className="text-center" />
          </div>
        </div>
      </form>
    );
  }
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg shadow-sm student-corner-header">
          <Link className="navbar-brand text-white ml-2" to="/home">
            {" "}
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
              Navbar text with an inline element
            </span>
          </div>
        </nav>
        <div className="student-corner-container">
          {/* {this.getStudentRegisterBody()} */}
          {this.getStudentLoginBody()}
        </div>
      </Fragment>
    );
  }
}
