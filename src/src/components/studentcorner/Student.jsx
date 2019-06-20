import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../../css/studentcorner.css";
import { toast } from "react-toastify";

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentRegisterDetails: [],
      studentName: "",
      studentId: "",
      department: "",
      passwordOne: "",
      passwordTwo: "",
      mailId: "",
      mobileNumber: "",
      studentLoginDetails: [],
      studentLoginId: "",
      studentLoginPassword: ""
    };
    this.validatingStudentDatails = this.validatingStudentDatails.bind(this);
    this.validatingStudentLoginDatails = this.validatingStudentLoginDatails.bind(this);
  }

  // Validating and Adding the Registration_Form_Data
  validatingStudentDatails() {
    let pass1 = this.state.passwordOne;
    let pass2 = this.state.passwordTwo;
    if (
      this.state.studentId === "" &&
      this.state.studentName === "" &&
      this.state.department === "" &&
      this.state.passwordOne === "" &&
      this.state.passwordTwo === "" &&
      this.state.mailId === "" &&
      this.state.mobileNumber === ""
    ) {
      toast.error("Fill all the Fields ", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.studentId === "") {
      toast.error('Fill the "studentId" field', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.studentId.substring(0, 3) !== "217") {
      toast.error("Id starts with '217' ", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.studentId.length !== 6) {
      toast.error("Id length should be 6", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.studentName === "") {
      toast.error('Fill the "Name" field', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.department === "") {
      toast.error('Choose the "Depertment" ', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.passwordOne === "") {
      toast.error('Fill the "Password" field ', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.passwordTwo === "") {
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
    } else if (this.state.mailId === "") {
      toast.error("Enter Your Email Address", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.mobileNumber === "") {
        toast.error("Enter Your Mobile Number", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false
        });
      } else if (this.state.mobileNumber.length !== 10) {
      toast.error("Mobile Number length should be 10", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else {
      const name = this.state.studentName;
      const sid = this.state.studentId;
      const dept = this.state.department;
      const password = this.state.passwordOne;
      const email = this.state.mailId;
      const mobile = this.state.mobileNumber;
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
      console.log("current Registration Detail", this.state.studentRegisterDetails);
      
    }
  }

  validatingStudentLoginDatails() {
    if (
      this.state.studentLoginId === "" &&
      this.state.studentLoginPassword === ""
    ) {
      toast.error("Fill all the Fields ", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.studentLoginId === "") {
      toast.error("Enter Student Id ", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.studentLoginPassword === "") {
      toast.error("Enter Password ", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else {
      const loginId = this.state.studentLoginId;
      const loginPassword = this.state.studentLoginPassword;
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
      <form
        className="container shadow p-4 mt-5"
        style={{ width: "450px" }}
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
            value={this.state.studentId}
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
            value={this.state.studentName}
            onChange={e => {
              this.setState({ studentName: e.target.value });
            }}
          />
        </div>
        <div>
          <p className="h6-responsive text-danger mb-1 mt-4">Department</p>
          <select
            name="department"
            class="form-control mb-4"
            required
            value={this.state.department}
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
            value={this.state.passwordOne}
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
            value={this.state.passwordTwo}
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
            value={this.state.mailId}
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
            value={this.state.mobileNumber}
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
            <a href="">Forgot password?</a>
          </p>
          <p className="col text-right text-danger">
            {" "}
            Not a member?&nbsp;&nbsp;
            <a href="#">Register</a>
          </p>
          {/* <p>
              
            </p> */}
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
            <i class="fas fa-users" /> Students Corner
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
          {this.getStudentRegisterBody()}
          {/* {this.getStudentLoginBody()} */}
        </div>
      </Fragment>
    );
  }
}
