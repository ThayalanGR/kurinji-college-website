import React, { Component } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { constants } from '../../components'
const baseUrl = constants.baseUrl;

export default class Infrastructure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infrastructureTitle: '',
            infrastructureDescription: '',
            InfrastructureFile: null,
            InfrastructureFileName: 'choose an Image..',
            existingInfrastructure: [],
        }
        this.addNewInfrastructure = this.addNewInfrastructure.bind(this);
        this.removeInfrastructure = this.removeInfrastructure.bind(this);
        this.fetchInfra = this.fetchInfra.bind(this);
    }
    componentWillMount() {
        this.fetchInfra();
    }

    fetchInfra() {
        axios
            .get(`${baseUrl}/api/infrastructure.php`)
            .then(data => {
                this.setState({ existingInfrastructure: data.data })
            })
            .catch(err => console.log(err))
    }

    addNewInfrastructure() {
        var data = new FormData()
        data.append("method", "post")
        data.append('file', this.state.InfrastructureFile)
        data.append('title', this.state.infrastructureTitle)
        data.append('description', this.state.infrastructureDescription)
        this.setState({
            infrastructureTitle: '',
            infrastructureDescription: '',
            InfrastructureFile: null,
            InfrastructureFileName: 'Choose an Image..'
        })
        var toastId = null;
        axios.request({
            method: "post",
            url: `${baseUrl}/api/infrastructure.php`,
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
            this.fetchInfra();
            toast.done(toast.id)
            toast.dismiss(toastId);
        }).catch(err => console.log(err))


    }

    removeInfrastructure(id) {
        var data = new FormData();
        data.append("method", "delete")
        data.append("id", id)

        axios.request({
            method: "post",
            url: `${baseUrl}/api/infrastructure.php`,
            data: data
        }).then(data => {
            if (data.data.response) {
                this.fetchInfra();
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
                        Infrastructure
                        <hr />
                    </div>
                </div>
                <div className="row" style={{ maxWidth: "100vw" }} >

                    <div className="col-md-6 " style={{ width: "100%" }}>

                        <div className="text-center text-danger">
                            Add new Infrastructure
                            <hr />
                        </div>

                        <div className="d-flex justify-content-center">
                            <form className="was-validated" style={{ width: "350px" }}>
                                <div className="mb-3">
                                    <label htmlFor="validationTextarea ">Infrastructure Title</label>
                                    <textarea className="form-control is-invalid" id="validationTextarea" placeholder="Required  textarea"
                                        value={this.state.infrastructureTitle}
                                        onChange={(e) => {
                                            this.setState({ infrastructureTitle: e.target.value })
                                        }}
                                        required></textarea>
                                    <div className="invalid-feedback">
                                        Please enter a Infrastructure Title
                                        </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="validationTextarea1">Infrastructure Description</label>
                                    <textarea className="form-control is-invalid" id="validationTextarea1" placeholder="Required  textarea"
                                        value={this.state.infrastructureDescription}
                                        onChange={(e) => {
                                            this.setState({ infrastructureDescription: e.target.value })
                                        }}
                                        required></textarea>
                                    <div className="invalid-feedback">
                                        Please enter a Infrastructure Description
                                        </div>
                                </div>

                                <label htmlFor="validatedCustomFile">Infrastructure Image</label>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input form-control" id="validatedCustomFile"
                                        accept="image/*"
                                        onChange={(e) => {
                                            this.setState({
                                                InfrastructureFile: e.target.files[0],
                                                InfrastructureFileName: e.target.files[0].name
                                            })
                                        }}
                                        required />
                                    <label className="custom-file-label" htmlFor="validatedCustomFile">{this.state.InfrastructureFileName}</label>
                                    <div className="invalid-feedback">Please choose a good quality image</div>
                                </div>

                                <div className="mt-2 mb-3">
                                    <button className="text-white btn btn-sm btn-danger" name="submit" onClick={(e) => {
                                        e.preventDefault();
                                        this.addNewInfrastructure();
                                    }}> Upload </button>
                                </div>

                            </form>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center text-danger">
                            Images in Infrastructure
                            <hr />
                        </div>

                        <div className="p-1 container">
                            {this.state.existingInfrastructure.map((item, index) => {

                                return (
                                    <div className="row" key={index}>
                                        <div className="col-md-3">
                                            <img src={`${baseUrl}/${item[3]}`} className="img-thumbnail" alt="" />
                                        </div>
                                        <div className="col-md-5 p-3">
                                            Title:- {item[1]}
                                            <hr />
                                            Desc:- {item[2]}
                                        </div>
                                        <div className="col-3 text-center d-flex justify-content-center align-items-center">
                                            <button
                                                value={item[0]}
                                                onClick={(e) => {
                                                    this.removeInfrastructure(e.target.value)
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
