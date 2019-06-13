import React, { Component } from 'react'
import axios from 'axios';
import { constants } from "../../components"

const baseUrl = constants.baseUrl;
const deptName = 'Ece';
const department = 'ece';

export default class Ece extends Component {


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
           <div  className="text-left">
              To provide a quality education in the field of engineering, management, communication, information technology and other engineering fields.
              To set High standards of Comprehensive Engineering education, and to develop the students intellectual strengths
              To improve the faculty performance, class rooms, modernization of labs and Libraries.To develop the students creativity by involving them in research works.
           </div>
           <hr/>
           <div className="h5-responsive text-success">
           OBJECTIVE:
           </div>
           <hr/>
           <div className="text-left">
           Our department motivates the students to excel in their academic performance and personality development.
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
          <div className="side-header text-orange h2-responsive">
            {deptName.toUpperCase()}
            <i onClick={(e) => this.state.showMenu === '' ? this.setState({showMenu: 'd-none-custom'}): this.setState({showMenu: ''})}  className="fa fa-caret-down text-white float-right mr-4 dropdown-custom"></i>
          </div>
          <ul className={`side-nav-content text-white ${this.state.showMenu}`}>
            <li className="h5-responsive" onClick={(e) => { this.setState({ tab: "about" }) }}>About</li>
            <li className="h5-responsive" onClick={(e) => { this.setState({ tab: "faculty" }) }}>Faculty Details</li>
            <li className="h5-responsive" onClick={(e) => { this.setState({ tab: "events" }) }}>Events</li>
            <li className="h5-responsive" onClick={(e) => { this.setState({ tab: "studentactivity" }) }}>Student Activities</li>
            <li className="h5-responsive" onClick={(e) => { this.setState({ tab: "laboratories" }) }}>Laboratories</li>
            <li className="h5-responsive" onClick={(e) => { this.setState({ tab: "achivements" }) }}>Achivements</li>
          </ul>
        </div>
        <div className="main-section">
          {this.state.tab ? this.tabChange(this.state.tab) : ''}
        </div>
      </div>
    )
  }
}


