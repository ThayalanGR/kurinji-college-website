import React, { Component } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { constants } from '../../components'
const baseUrl = constants.baseUrl;

export default class Staff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffName: '',
            staffDesignation: '',
            staffDetails: '',
            existingStaffs: [],
            staffDepartment: 'choose department'
        }
        this.addNewStaff = this.addNewStaff.bind(this);
        this.removeStaff = this.removeStaff.bind(this);
        this.fetchStaffs = this.fetchStaffs.bind(this);
    }
    componentWillMount() {
        this.fetchStaffs();
    }

    fetchStaffs(filterChoice) {
        console.log(filterChoice)
        if (!filterChoice) {
            axios
                .get(`${baseUrl}/api/staffhandler.php`)
                .then(data => {
                    this.setState({ existingStaffs: data.data })
                })
                .catch(err => console.log(err))
        }
        else {
            axios
                .get(`${baseUrl}/api/staffhandler.php?department=${filterChoice}`)
                .then(data => {
                    this.setState({ existingStaffs: data.data })
                })
                .catch(err => console.log(err))
        }
    }

    addNewStaff() {
        var data = new FormData()
        data.append("method", "post")
        data.append('name', this.state.staffName)
        data.append('designation', this.state.staffDesignation)
        data.append('priority', this.state.staffPriority)
        data.append('department', this.state.staffDepartment)
        data.append('about', this.state.staffDetails)
        this.setState({
            staffName: '',
            staffDesignation: '',
            staffPriority: '',
            staffDepartment: 'none',
            staffDetails: '',
        })
        var toastId = null;
        axios.request({
            method: "post",
            url: `${baseUrl}/api/staffhandler.php`,
            data: data,
            onUploadProgress: p => {
                const progress = p.loaded / p.total;
                if (toastId === null) {
                    toastId = toast('Upload in Progress', {
                        progress: progress,
                        position: "bottom-left"
                    });
                } else {
                    toast.update(toastId, {
                        progress: progress
                    })
                }
            }
        }).then(data => {
            this.fetchStaffs();
            toast.done(toast.id)
            toast.dismiss(toastId);
        }).catch(err => console.log(err))


    }

    removeStaff(id) {
        var data = new FormData();
        data.append("method", "delete")
        data.append("id", id)

        axios.request({
            method: "post",
            url: `${baseUrl}/api/staffhandler.php`,
            data: data
        }).then(data => {
            if (data.data.response) {
                this.fetchStaffs();
                toast.success("event deleted successfully!", {
                    position: "bottom-left"
                })
            } else {
                toast.error("something went wrong !", {
                    position: "bottom-left"
                })
            }
        })
            .catch(err => {
                console.log(err);

                toast.error("something went wrong !", {
                    position: "bottom-left"
                })
            })

    }




    render() {
        return (
            <div className="container-fluid p-2">
                <div className="row mtspace ">
                    <div className="col text-center text-danger h5">
                        Staff Details Upload
                            <hr />
                    </div>
                </div>
                <div className="row" style={{ maxWidth: "100vw" }} >

                    <div className="col-md-6 " style={{ width: "100%" }}>

                        <div className="text-center text-danger">
                            Add new Staff
                        </div>
                        <div className="row mt-1 pt-1">
                            <div className="col">
                                <hr />

                            </div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <form className="was-validated" style={{ width: "350px" }}>
                                <div className="mb-3">
                                    <label htmlFor="validationTextarea ">Staff Name</label>
                                    <input type="text" className="form-control is-invalid" id="validationTextarea" placeholder="Required  textarea"
                                        value={this.state.staffName}
                                        onChange={(e) => {
                                            this.setState({ staffName: e.target.value })
                                        }}
                                        required></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="validationTextarea ">Staff Designation</label>
                                    <input type="text" className="form-control is-invalid" id="validationTextarea" placeholder="Required  textarea"
                                        value={this.state.staffDesignation}
                                        onChange={(e) => {
                                            this.setState({ staffDesignation: e.target.value })
                                        }}
                                        required></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="validationTextarea ">Staff Department</label>
                                    <select name="" className="form-control is-invalid"
                                        value={this.state.staffDepartment}
                                        onChange={(e) => {
                                            this.setState({ staffDepartment: e.target.value })
                                        }}

                                    >
                                        <option value="none">Choose department</option>
                                        <option value="mech">Mech</option>
                                        <option value="eee">EEE</option>
                                        <option value="ece">ECE</option>
                                        <option value="cse">CSE</option>
                                        <option value="mecse">ME-CSE</option>
                                        <option value="engdesign">Eng-Design</option>
                                        <option value="mba">MBA</option>

                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="validationTextarea ">Priority</label>
                                    <select name="" className="form-control is-invalid"
                                        value={this.state.staffPriority}
                                        onChange={(e) => {
                                            this.setState({ staffPriority: e.target.value })
                                        }}

                                    >
                                        <option value="none">Choose Priority</option>
                                        <option value="0">HOD</option>
                                        <option value="1">ASSOCIATE PROFESSOR</option>
                                        <option value="2">ASSISTANT PROFESSOR</option>
                                        <option value="3">OTHERS</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="validationTextarea ">Staff Details</label>
                                    <textarea className="form-control is-invalid" id="validationTextarea" placeholder="Required  textarea"
                                        value={this.state.staffDetails}
                                        onChange={(e) => {
                                            this.setState({ staffDetails: e.target.value })
                                        }}
                                        required></textarea>
                                </div>

                                <div className="mt-2 mb-3">
                                    <button className="text-white btn btn-sm btn-danger" name="submit" onClick={(e) => {
                                        e.preventDefault();
                                        this.addNewStaff();
                                    }}> Upload </button>
                                </div>

                            </form>

                        </div>
                    </div>
                    <div className="col-md-6">

                        <div className="text-center d-flex justify-content-around">
                            <div className="text-danger">Existing Staffs</div>
                            <div>
                                <select name="" className="form-control form-control-sm"
                                    value={this.state.staffFilter}
                                    onChange={(event) => {
                                        // this.setState({ staffFilter: e.target.value })
                                        this.fetchStaffs(event.target.value)
                                    }}

                                >
                                    <option value="">All</option>
                                    <option value="mech">Mech</option>
                                    <option value="eee">EEE</option>
                                    <option value="ece">ECE</option>
                                    <option value="cse">CSE</option>
                                    <option value="mecse">ME-CSE</option>
                                    <option value="engdesign">Eng-Design</option>
                                    <option value="mba">MBA</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <hr />

                            </div>
                        </div>
                        <div className="p-1 container">
                            {this.state.existingStaffs.map((item, index) => {

                                return (
                                    <div className="row" key={index}>

                                        <div className="col-md-8 p-3">
                                            Name:- {item[1]}
                                            <hr />
                                            Designation:- {item[2]}
                                            <hr />
                                            Department:- {item[4]}
                                            <hr />
                                            Description:- {item[5]}

                                        </div>
                                        <div className="col-3 text-center d-flex justify-content-center align-items-center">
                                            <button
                                                value={item[0]}
                                                onClick={(e) => {
                                                    this.removeStaff(e.target.value)
                                                }} className="btn btn-sm btn-danger text-white">delete</button>
                                        </div>
                                        <div className="col-12">
                                            <hr />
                                        </div>
                                    </div>
                                );

                            })}
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}
