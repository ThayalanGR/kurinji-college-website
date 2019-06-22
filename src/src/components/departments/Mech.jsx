import React, { Component, Fragment } from "react";
import axios from "axios";
import { constants } from "../../components";

const baseUrl = constants.baseUrl;
const deptName = "Mech";
const department = "mech";

export default class Mech extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "about",
      staffs: [],
      deptevent: [],
      deptstuact: [],
      deptlab: [],
      showMenu: ""
    };
  }

  componentDidMount() {
    this.fetchStaffs(department);
    this.fetchEvents(department);
    this.fetchStuAct(department);
    this.fetchLab(department);
  }

  fetchStaffs(dept) {
    axios
      .get(`${baseUrl}/api/staffhandler.php?department=${dept}`)
      .then(response => {
        const data = response.data;
        this.setState({ staffs: data });
        
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchEvents(dept) {
    axios
      .get(`${baseUrl}/api/deptevent.php?department=${dept}`)
      .then(response => {
        const data = response.data;
        
        this.setState({ deptevent: data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchStuAct(dept) {
    axios
      .get(`${baseUrl}/api/deptstuact.php?department=${dept}`)
      .then(response => {
        const data = response.data;
        this.setState({ deptstuact: data });
        
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchLab(dept) {
    axios
      .get(`${baseUrl}/api/deptlab.php?department=${dept}`)
      .then(response => {
        const data = response.data;
        this.setState({ deptlab: data });
        
      })
      .catch(err => {
        console.log(err);
      });
  }

  FacultyDetails = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center orange-text h3">
            Faculty Details
            <hr />
          </div>
        </div>
        {this.state.staffs.map((item, key) => (
          <div key={key}>
            <div className="row mt-2 mb-4 pb-2">
              <div className="">{key + 1}.</div>
              <div className="col text-left d-flex justify-content-center align-items-center">
                <div className="staff-details text-center">
                  <div className=" h4-responsive  text-primary">{item[1]}</div>
                  <div className=" h7-responsive text-success">{item[2]}</div>
                  <div className="h8-responsive">{item[5]}</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <hr />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  About() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center orange-text h3-responsive">
            About
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="text-left">
              Mechanical engineering is one of the oldest and greatest courses
              of study in Engineering. The department of Mechanical Engineering
              in our Kurinji College of Engineering and Technology was
              established in the year 2000. The department provides excellent
              learning opportunities for undergraduates in Mechanical
              Engineering. This Course in Kurinji College is approved by the
              AICTE - All India Council for Technical Education, which was
              established for proper planning and co-ordinated development of
              technical education system throughout the country
            </div>
            <hr />
            <div className="h5-responsive text-success">
              MECHANICAL ENGINEERING-COURSE OVER VIEW
            </div>
            <hr />
            <div className="text-left">
              The student of Mechanical Engineering at KCET will research ,
              develop, design, manufacture and test tools, engines, machines and
              other mechanical devices. CAD/CAM courses assist the students in
              designing components with greatest possible efficiencies. Students
              are guided for Industrial Visit and for carrying out final year
              their project at BHEL, a Public sector heavy industry at other
              major industries in and around Tiruchirappalli. Mechanical
              Engineering is the broadest and most diverse engineering
              discipline. Not many people can perform their jobs without
              Mechanical Engineers.
            </div>
            <hr />
            <div className="h5-responsive text-success">
              MECHANICAL ENGINEERING ASSOCIATION
            </div>
            <div className="text-left">
              Mechanical Engineering Association is very active at KCET with
              involvement of students. Special lecture classes from eminent
              persons in industries are arranged once in every month. Seminars
              and Symposiums are regularly conducted to acquire latest
              development in the fields of Manufacturing, Design, Welding,
              Machining etc. Also the students are encouraged to participate in
              Seminars and Symposiums conducted at various other Engineering
              College.
            </div>
            <hr />
            <div className="h5-responsive text-success">JOB OPPORTUNITIES</div>
            <div className="text-left">
              Mechanical Engineers probably have the maximum number of
              employment opportunist. The most traditional careers in Mechanical
              Engineering are those working as design and manufacturing
              engineers for companies that produce a mechanical product, such as
              cars. Planes, refrigerators etc. Some of the largest employers in
              the field of Mechanical Engineering include the BHEL. TVS Group of
              Companies, L&T, Ashok Leyland, Indian Railway and the Armed
              Forces. In the public and private sector almost all industries
              require Mechanical Engineers. Large number of openings exist in
              the sectors of power generation, automobile and machine tools.
              Mechanical Engineers can either get into the Research and
              Development(R&D) division or into the Design and Production
              Division.
              <br />
            </div>
            <div className="text-left">
              &nbsp;Today, Mechanical Engineering has merged and interfaced with
              the worlds of Electrical, Electronics and Computer Engineering.
              The highly emerging IT industry also provided great number of
              employment opportunities for Mechanical Engineers. India's top IT
              sectors such as TCS, Infosys, CTS, Wipro and Satyam Computers are
              recruiting regularly a large number of Mechanical Engineers for
              their IT jobs. A Mechanical Engineer will find work in many
              industries and his/her work will vary by industry and function.
              Some specialties include applied mechanics, computer-aided design
              and manufacturing , energy systems. Mechanical Engineers can also
              work in production operations, maintenance, or technical sales as
              administrators or managers.
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  }

  Events() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center font-weight-bold text-primary h3-responsive">
            Events
            <hr />
          </div>
        </div>
        {this.state.deptevent.map((item, key) => (
          <Fragment key={key}>
            <div className="row d-flex align-items-center">
              {item[3] !== "null" && (
                <div className="col-md-6 col-sm-12 text-center">
                  <img
                    className="img img-responsive dept-image shadow rounded"
                    src={`${constants.baseUrl}${item[3]}`}
                    alt=""
                  />
                </div>
              )}
              {item[3] === "null" && (
                <div className="offset-md-1 offset-sm-0" />
              )}
              <div className="col-md-6 col-sm-12 mt-4">
                <div className="text-danger font-weight-bold h5-responsive">
                  {item[1]}
                </div>
                <div className="text-dark font-weight-normal h6-responsive">
                  {item[2]}
                </div>
                <div
                  className="text-dark font-weight-normal"
                  style={{ fontSize: "12px" }}
                >
                  Posted At :- {new Date(item[4]).toDateString()}
                </div>
              </div>
            </div>
            <div className="row mt-3 mb-3">
              <div className="col">
                <hr />
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    );
  }
  studentActivities() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center font-weight-bold text-primary h3-responsive">
            Student Achievements
            <hr />
          </div>
        </div>
        {this.state.deptstuact.map((item, key) => (
          <Fragment key={key}>
            <div className="row d-flex align-items-center">
              {item[3] !== "null" && (
                <div className="col-md-6 col-sm-12 text-center">
                  <img
                    className="img img-responsive dept-image shadow rounded"
                    src={`${constants.baseUrl}${item[3]}`}
                    alt=""
                  />
                </div>
              )}
              {item[3] === "null" && (
                <div className="offset-md-1 offset-sm-0" />
              )}
              <div className="col-md-6 col-sm-12 mt-4">
                <div className="text-danger font-weight-bold h5-responsive">
                  {item[1]}
                </div>
                <div className="text-dark font-weight-normal h6-responsive">
                  {item[2]}
                </div>
                <div
                  className="text-dark font-weight-normal"
                  style={{ fontSize: "12px" }}
                >
                  Posted At :- {new Date(item[4]).toDateString()}
                </div>
              </div>
            </div>
            <div className="row mt-3 mb-3">
              <div className="col">
                <hr />
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    );
  }
  laboratories() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center font-weight-bold text-primary h3-responsive">
            Laboratories
            <hr />
          </div>
        </div>
        {this.state.deptlab.map((item, key) => (
          <Fragment key={key}>
            <div className="row d-flex align-items-center">
              {item[3] !== "null" && (
                <div className="col-md-6 col-sm-12 text-center">
                  <img
                    className="img img-responsive dept-image shadow rounded"
                    src={`${constants.baseUrl}${item[3]}`}
                    alt=""
                  />
                </div>
              )}
              {item[3] === "null" && (
                <div className="offset-md-1 offset-sm-0" />
              )}
              <div className="col-md-6 col-sm-12 mt-4">
                <div className="text-danger font-weight-bold h5-responsive">
                  {item[1]}
                </div>
                <div className="text-dark font-weight-normal h6-responsive">
                  {item[2]}
                </div>
                <div
                  className="text-dark font-weight-normal"
                  style={{ fontSize: "12px" }}
                >
                  Posted At :- {new Date(item[4]).toDateString()}
                </div>
              </div>
            </div>
            <div className="row mt-3 mb-3">
              <div className="col">
                <hr />
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    );
  }
  // achivements() {
  //   return <div>achivements</div>;
  // }

  tabChange(tab) {
    switch (tab) {
      case "about":
        return this.About();
      case "faculty":
        return this.FacultyDetails();
      case "events":
        return this.Events();
      case "studentactivity":
        return this.studentActivities();
      case "laboratories":
        return this.laboratories();
      // case "achivements":
      //   return this.achivements();
      default:
        return <div>null</div>;
    }
  }

  render() {
    return (
      <div className="mtspace">
        <div className="side-section p-3">
          <div className="side-header text-orange h2-responsive text-center">
            {deptName.toUpperCase()}
            <i
              onClick={e =>
                this.state.showMenu === ""
                  ? this.setState({ showMenu: "d-none-custom" })
                  : this.setState({ showMenu: "" })
              }
              className="fa fa-caret-down text-white float-right mr-4 dropdown-custom"
            />
          </div>
          <ul className={`side-nav-content text-white ${this.state.showMenu}`}>
            <li
              className="h5-responsive"
              onClick={e => {
                this.setState({ tab: "about" });
              }}
            >
              About
            </li>
            <li
              className="h5-responsive"
              onClick={e => {
                this.setState({ tab: "faculty" });
              }}
            >
              Faculty Details
            </li>
            <li
              className="h5-responsive"
              onClick={e => {
                this.setState({ tab: "events" });
              }}
            >
              Events
            </li>
            <li
              className="h5-responsive"
              onClick={e => {
                this.setState({ tab: "studentactivity" });
              }}
            >
              Student Achievements
            </li>
            <li
              className="h5-responsive"
              onClick={e => {
                this.setState({ tab: "laboratories" });
              }}
            >
              Laboratories
            </li>
            {/* <li
              className="h5-responsive"
              onClick={e => {
                this.setState({ tab: "achivements" });
              }}
            >
              Achievements
            </li> */}
          </ul>
        </div>
        <div className="main-section">
          {this.state.tab ? this.tabChange(this.state.tab) : ""}
        </div>
      </div>
    );
  }
}
