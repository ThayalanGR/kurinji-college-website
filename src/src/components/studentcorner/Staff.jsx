import React, { Component, Fragment } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default class Staff extends Component {
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
      staffRegisterDetails: [],
      staffLoginDetails: []
    };
    this.validatingStaffDatails = this.validatingStaffDatails.bind(this);
    this.validatingStaffLoginDatails = this.validatingStaffLoginDatails.bind(
      this
    );
  }

  // Validating and Adding the Registration_Form_Data
  validatingStaffDatails() {
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
      toast.error("Id starts with '811' ", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.staffRegister.staffId.length !== 7) {
      toast.error("Id length should be 7", {
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
      const name = this.state.staffRegister.staffName;
      const sid = this.state.staffRegister.staffId;
      const dept = this.state.staffRegister.department;
      const password = this.state.staffRegister.passwordOne;
      const email = this.state.staffRegister.mailId;
      const mobile = this.state.staffRegister.mobileNumber;
      this.setState({
        staffId: "",
        staffName: "",
        department: "",
        passwordOne: "",
        passwordTwo: "",
        mailId: "",
        mobileNumber: ""
      });
      const temp = this.state.staffRegisterDetails;
      temp.push({
        staffId: sid,
        staffName: name,
        department: dept,
        passwordOne: password,
        mailId: email,
        mobileNumber: mobile
      });
      this.setState({ staffRegisterDetails: temp });
      console.log(
        "Staff's Registration Details",
        this.state.staffRegisterDetails
      );
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
      const loginId = this.state.staffLogin.staffLoginId;
      const loginPassword = this.state.staffLogin.staffLoginPassword;
      const tempArr = this.state.staffLogin.staffLoginDetails;
      tempArr.push({
        staffLoginId: loginId,
        staffLoginPassword: loginPassword
      });
      this.setState({ staffLoginDetails: tempArr });
      console.log(
        "Staff's Current Login Details",
        this.state.staffLoginDetails
      );
    }
  }

  getStaffRegisterBody() {
    return (
      <form className="container shadow  p-4 mt-5" style={{ width: "450px" }}>
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
            class="form-control mb-4"
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
            className="btn btn-sm btn-danger"
            onClick={e => {
              e.preventDefault();
              this.validatingStaffDatails();
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    );
  }

  getStaffLoginBody() {
    return (
      <form className="container shadow p-4 mt-5" style={{ width: "450px" }}>
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
              id="stafftid"
              onChange={e => {
                this.setState({ staffLoginId: e.target.value });
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
              onChange={e => {
                this.setState({ staffLoginPassword: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col text-left text-danger">
            <button onClick={e => {}} className="bg-transparent text-primary">
              Forgot password?
            </button>
          </div>
          <div className="col text-right text-danger">
            <span>Not a member?</span>
            <button
              onClick={e => {}}
              className="bg-transparent text-primary ml-2"
            >
              {" "}
              Register
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <button
              className="btn btn-sm btn-danger"
              onClick={e => {
                e.preventDefault();
                this.validatingStaffLoginDatails();
              }}
            >
              Login
            </button>
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
          {this.getStaffRegisterBody()}
          {/* {this.getStaffLoginBody()} */}
        </div>
      </Fragment>
    );
  }
}
