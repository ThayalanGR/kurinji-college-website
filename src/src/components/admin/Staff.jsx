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
            staffFile: null,
            staffFileName: 'choose an Image..',
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

    fetchStaffs() {
        axios
            .get(`${baseUrl}/api/staffhandler.php`)
            .then(data => {
                this.setState({ existingStaffs: data.data })
            })
            .catch(err => console.log(err))
    }

    addNewStaff() {
        var data = new FormData()
        data.append("method", "post")
        data.append('file', this.state.staffFile)
        data.append('name', this.state.staffName)
        data.append('designation', this.state.staffDesignation)
        data.append('department', this.state.staffDepartment)
        data.append('about', this.state.staffDetails)
        this.setState({
            staffName: '',
            staffFile: '',
            staffDesignation: '',
            staffDepartment: 'none',
            staffDetails: '',
            staffFileName: 'Choose an Image..'
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
                                <hr />
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
                                    <label htmlFor="validationTextarea ">Staff Details</label>
                                    <textarea className="form-control is-invalid" id="validationTextarea" placeholder="Required  textarea"
                                        value={this.state.staffDetails}
                                        onChange={(e) => {
                                            this.setState({ staffDetails: e.target.value })
                                        }}
                                        required></textarea>
                                </div>

                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="validatedCustomFile"
                                        accept="image/*"
                                        onChange={(e) => {
                                            this.setState({
                                                staffFile: e.target.files[0],
                                                staffFileName: e.target.files[0].name
                                            })
                                        }}
                                        required />
                                    <label className="custom-file-label" htmlFor="validatedCustomFile">{this.state.staffFileName}</label>
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

                        <div className="text-center text-danger">
                            Existing Staffs
                                <hr />
                        </div>
                        <div className="p-1 container">
                            {this.state.existingStaffs.map((item, index) => {

                                return (
                                    <div className="row" key={index}>
                                        <div className="col-md-3">
                                            <img src={`${baseUrl}/${item[4]}`} className="img-thumbnail" alt="" />
                                        </div>
                                        <div className="col-md-5 p-3">
                                            Name:- {item[1]}
                                            <hr />
                                            Designation:- {item[2]}
                                            <hr />
                                            Department:- {item[3]}
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
