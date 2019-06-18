import React, { Component } from 'react'
import axios from 'axios';
import { constants } from "../../components"

const baseUrl = constants.baseUrl;
const deptName = 'M.E. - CSE';
const department = 'mecse';

export default class mecse extends Component {


  constructor(props) {
    super(props);
    this.state = {
      tab: 'about',
      showMenu: '',
      staffs: []
    }
  }


  fetchStaffs(dept) {
    axios.get(`${baseUrl}/api/staffhandler.php?department=${dept}`)
      .then(response => {

        const data = response.data;
        this.setState({ staffs: data })
        console.log(data);
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
              <div>{key+1}.</div>
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
          <div className="side-header text-orange h2-responsive text-center">
            {deptName.toUpperCase()}
            <i onClick={(e) => this.state.showMenu === '' ? this.setState({showMenu: 'd-none-custom'}): this.setState({showMenu: ''})}  className="fa fa-caret-down text-white float-right mr-4 dropdown-custom"></i>
          </div>
          <ul className={`side-nav-content text-white ${this.state.showMenu}`}>
            <li className="h5-responsive" onClick={(e) => { this.setState({ tab: "about" }) }}>About</li>
            <li className="h5-responsive" onClick={(e) => { this.setState({ tab: "faculty" }) }}>Faculty Details</li>
            <li className="h5-responsive" onClick={(e) => { this.setState({ tab: "events" }) }}>Events</li>
            <li className="h5-responsive" onClick={(e) => { this.setState({ tab: "studentactivity" }) }}>Student Activities</li>
            <li className="h5-responsive" onClick={(e) => { this.setState({ tab: "laboratories" }) }}>Laboratories</li>
            <li className="h5-responsive" onClick={(e) => { this.setState({ tab: "achivements" }) }}>Achievements </li>
          </ul>
        </div>
        <div className="main-section">
          {this.state.tab ? this.tabChange(this.state.tab) : ''}
        </div>
      </div>
    )
  }
}


