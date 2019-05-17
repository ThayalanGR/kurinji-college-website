import React, { Component } from 'react'
import axios from 'axios';
import { constants } from "../../components"

const baseUrl = constants.baseUrl;
const deptName = 'Cse';
const department = 'cse';

export default class Cse extends Component {


  constructor(props) {
    super(props);
    this.state = {
      tab: 'about',
      staffs: []
    }
  }


  fetchStaffs(dept) {
    axios.get(`${baseUrl}/api/staffhandler.php?department=${dept}`)
      .then(response => {

        const data = response.data;
        console.log(data);
        this.setState({ staffs: data })
      })
      .catch(err => {
        console.log(err);

      })

  }


  FacultyDetails = () => {
    if (this.state.staffs.length === 0)
      this.fetchStaffs(department);
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
              <div className="col-4">
                <img className="img-responsive img-rounded rounded-circle shadow-lg staff-image" src={`${baseUrl}${item[4]}`} alt="" srcset="" />
              </div>
              <div className="col text-left d-flex align-items-center">
                <div className="staff-details">
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
    )
  }

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
          <div className="h5-responsive text-success">
              MISSION
           </div>
           <hr/>
           <div  className="text-left">
           To dedicate the work to advance and communicate the specific knowledge and understanding to the Medicore and Excellent students with a systematic scientific approach and coordication of activities.
           </div>
           <hr/>
           <div className="h5-responsive text-success">
             Vision
           </div>
           <hr/>
           <div className="text-left">
             Training the Students to become well disciplined and knowledgeable in the field of Computer Science and Engineering.
           </div>
           <hr/>
           <div className="h5-responsive text-success">
             Quality Policy
           </div>
           <div className="text-left">
             Department of Computer Science and Engineering strives to ensure quality education as a leader in the Computer Science and Engineering Education by continuously improving academic inputs and educational excellence.
           </div>
           <hr/>
           <div className="h5-responsive text-success">
             Objectives
           </div>
           <div>
              <ul className="text-left text-responsive">
                <li>To achive 90% result in the Anna University examinations by Motivating & Counselling the students.</li>
                <li>To improve the students placement to 75%.</li>
                <li>Conducting one Symposium per year.</li>
                <li>Making 50% of the students to present papers in symposiums.</li>
                <li>Making the students to publish articles in the department new bulletin</li>
                <li>Conducting guest lectures.</li>
                <li>Conducting workshop to the students.</li>
                <li>To improve the Research & Development activities.</li>
              </ul>
           </div>
          </div>
        </div>
      </div>
    )
  }


  Events() {
    return (
      <div>events</div>
    )
  }
  studentActivities() {
    return (
      <div>student activities</div>
    )
  }
  laboratories() {
    return (
      <div>laboratories</div>
    )
  }
  achivements() {
    return (
      <div>achivements</div>
    )
  }


  tabChange(tab) {
    switch (tab) {
      case 'about':
        return this.About();
      case 'faculty':
        return this.FacultyDetails();
      case 'events':
        return this.Events();
      case 'studentactivity':
        return this.studentActivities();
      case 'laboratories':
        return this.laboratories();
      case 'achivements':
        return this.achivements();
      default:
        return <div>null</div>;
    }
  }

  render() {
    return (
      <div className="mtspace">
        <div className="side-section p-3">
          <div className="side-header text-orange h2">
            {deptName.toUpperCase()}
          </div>
          <ul className="side-nav-content text-white h5">
            <li onClick={(e) => { this.setState({ tab: "about" }) }}>About</li>
            <li onClick={(e) => { this.setState({ tab: "faculty" }) }}>Faculty Details</li>
            <li onClick={(e) => { this.setState({ tab: "events" }) }}>Events</li>
            <li onClick={(e) => { this.setState({ tab: "studentactivity" }) }}>Student Activities</li>
            <li onClick={(e) => { this.setState({ tab: "laboratories" }) }}>Laboratories</li>
            <li onClick={(e) => { this.setState({ tab: "achivements" }) }}>Achivements</li>
          </ul>
        </div>
        <div className="main-section">
          {this.state.tab ? this.tabChange(this.state.tab) : ''}
        </div>
      </div>
    )
  }
}


