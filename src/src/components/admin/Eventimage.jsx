import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { constants } from '../../components';
import imageCompression from 'browser-image-compression';
const baseUrl = constants.baseUrl;

export default class Eventimage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventCaption: '',
            eventFile: null,
            eventFileName: 'choose an Image..',
            existingEvents: [],
        }
        this.addNewEvent = this.addNewEvent.bind(this);
        this.removeEvent = this.removeEvent.bind(this);
        this.fetchEvents = this.fetchEvents.bind(this);
    }
    componentWillMount() {
        this.fetchEvents();
    }

    fetchEvents() {
        axios
            .get(`${baseUrl}/api/homesectionone.php`)
            .then(data => {
                this.setState({ existingEvents: data.data })
            })
            .catch(err => console.log(err))
    }

    async addNewEvent() {
        var toastId = null;
        toastId = toast('Upload in Progress', {
            progress: 0,
            position: "bottom-left"
        });
        var data = new FormData()
        data.append("method", "post")

        // compressing image
        let options = {
            maxSizeMB: 1,
            useWebWorker: true
        }

        try {
            const compressedFile = await imageCompression(this.state.eventFile, options);
            data.append('file', compressedFile);
        } catch (error) {
            console.error(error);
            data.append('file', this.state.eventFile);
        }

        data.append('fileName', this.state.eventFile.name);
        data.append('caption', this.state.eventCaption)
        this.setState({
            eventCaption: '',
            eventFile: null,
            eventFileName: 'Choose an Image..'
        })

        axios.request({
            method: "post",
            url: `${baseUrl}/api/homesectionone.php`,
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
            console.log(data);
            this.fetchEvents();
            toast.done(toast.id)
            toast.dismiss(toastId);
        }).catch(err => console.log(err))
    }

    removeEvent(id) {
        var data = new FormData();
        data.append("method", "delete")
        data.append("id", id)

        axios.request({
            method: "post",
            url: `${baseUrl}/api/homesectionone.php`,
            data: data
        }).then(data => {
            console.log(data);

            if (data.data.response) {
                this.fetchEvents();
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
                        Event Upload First Section
                        <hr />
                    </div>
                </div>
                <div className="row" style={{ maxWidth: "100vw" }} >

                    <div className="col-md-6 " style={{ width: "100%" }}>

                        <div className="text-center text-danger">
                            Add new Event
                            <hr />
                        </div>

                        <div className="d-flex justify-content-center">
                            <form className="was-validated" style={{ width: "350px" }} onSubmit={
                                (e) => {
                                    e.preventDefault();
                                    this.addNewEvent();
                                }
                            }>
                                <div className="mb-3">
                                    <label htmlFor="validationTextarea ">Event Caption</label>
                                    <textarea className="form-control is-invalid" id="validationTextarea" placeholder="Required  textarea"
                                        value={this.state.eventCaption}
                                        onChange={(e) => {
                                            this.setState({ eventCaption: e.target.value })
                                        }}
                                        required></textarea>
                                    <div className="invalid-feedback">
                                        Please enter a Event Description
                                        </div>
                                </div>

                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="validatedCustomFile"
                                        accept="image/*"
                                        onChange={(e) => {
                                            if (e.target.files.length > 0) {
                                                this.setState({
                                                    eventFile: e.target.files[0],
                                                    eventFileName: e.target.files[0].name
                                                })
                                            } else {
                                                toast.error("cannot upload empty file!, please choose file again", {
                                                    position: "bottom-left"
                                                })
                                            }
                                        }}
                                        required />
                                    <label className="custom-file-label" htmlFor="validatedCustomFile">{this.state.eventFileName}</label>
                                    <div className="invalid-feedback">Please choose a good quality image</div>
                                </div>

                                <div className="mt-2 mb-3">
                                    <button className="text-white btn btn-sm btn-danger" name="submit" type="submit"> Upload </button>
                                </div>

                            </form>

                        </div>
                    </div>
                    <div className="col-md-6">

                        <div className="text-center text-danger">
                            Images in First Section
                            <hr />
                        </div>

                        <div className="p-1 container">
                            {this.state.existingEvents.map((item, index) => {

                                return (
                                    <div className="row" key={index}>
                                        <div className="col-md-3">
                                            <img src={`${baseUrl}/${item[2]}`} className="img-thumbnail" alt="" />
                                        </div>
                                        <div className="col-md-5 p-3">
                                            {item[1]}
                                            <hr />
                                            On:- {item[3]}
                                        </div>
                                        <div className="col-3 text-center d-flex justify-content-center align-items-center">
                                            <button
                                                value={item[0]}
                                                onClick={(e) => {
                                                    this.removeEvent(e.target.value)
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
