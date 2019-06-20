import React, { Component, Fragment } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffName: "",
      staffId: "",
      department: "",
      passwordOne: "",
      passwordTwo: "",
      mailId: "",
      mobileNumber: ""
    };
    this.validatingStaffDatails = this.validatingStaffDatails.bind(this);
  }

  // Validating and Adding the Registration_Form_Data
  validatingStaffDatails() {
    let pass1 = this.state.passwordOne;
    let pass2 = this.state.passwordTwo;
    if (
      this.state.staffId === "" &&
      this.state.staffName === "" &&
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
    } 
    else if(this.state.staffId === ""){
      toast.error('Fill the "staffId" field', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    }else if (this.state.staffId.substring(0, 3) !== "811") {
      toast.error("Id starts with '811' ", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.staffId.length !== 7) {
      toast.error("Id length should be 7", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } else if (this.state.staffName === "") {
      toast.error('Fill the "Name" field', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    } 
    else if (this.state.department === "") {
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
    }else if (this.state.passwordTwo === "") {
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
    } else if (this.state.mobileNumber.length !== 10) {
      toast.error("Mobile Number length should be 10", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false
      });
    }
  }

  getStaffLoginBody() {
    return (
      <form className="container" style={{ width: "450px" }}>
        <p
          className="h3-responsive mb-4 mt-5 text-center"
          style={{ color: "#FF3547" }}
        >
          Students Corner - Staff Registration
        </p>
        <div>
          {/* <span className="text-danger font-small">length should be ' 7 ' and it should starts with ' 811 ' *</span> */}
          <input
            type="number"
            className="form-control mb-4"
            placeholder="Staff Id"
            id="staffid"
            pattern="^[811]\d{4}$]"
            onChange={e => {
              this.setState({ staffId: e.target.value });
            }}
          />
        </div>
        <div>
          <input
            type="text"
            id="staffName"
            className="form-control mb-4"
            placeholder="Name"
            required
            onChange={e => {
              this.setState({ staffName: e.target.value });
            }}
          />
        </div>
        <div>
          <select
            name="department"
            class="form-control mb-4"
            required
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
          <input
            type="password"
            id="pass"
            className="form-control mb-4"
            placeholder="Password"
            required
            onChange={e => {
              this.setState({ passwordOne: e.target.value });
            }}
          />
        </div>
        <div>
          <input
            type="password"
            id="repass"
            className="form-control mb-4"
            placeholder="Re-enter Password"
            required
            onChange={e => {
              this.setState({ passwordTwo: e.target.value });
            }}
          />
        </div>
        <div>
          <input
            type="email"
            id="mailid"
            className="form-control mb-4"
            placeholder="E-mail"
            required
            onChange={e => {
              this.setState({ mailId: e.target.value });
            }}
          />
        </div>
        <div>
          <input
            type="number"
            id="mobile"
            className="form-control mb-4"
            placeholder="Mobile Number"
            pattern="[^[789]\d{9}$]"
            required
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
              this.validatingStaffDatails();
            }}
          >
            Submit
          </button>
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
          {this.getStaffLoginBody()}
        </div>
      </Fragment>
    );
  }
}
