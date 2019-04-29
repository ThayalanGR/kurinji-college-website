import React, { Component, Fragment } from 'react'
import { Loader, Admin } from '../../components'
import logo from '../../images/favicon.png'
import "../../css/main.css"
import axios from 'axios';
import { toast } from 'react-toastify';
import qs from 'querystring';

const baseUrl = "http://erp.epizy.com"

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            isAuthenticated: false,
            eventCaption: '',
            eventFile: null,
            eventFileName: 'choose an Image..',
            existingEvents: [],
            newsText: '',
            existingNews: []
        }

        this.logout = this.logout.bind(this);
        this.addNewEvent = this.addNewEvent.bind(this);
        this.removeEvent = this.removeEvent.bind(this);
        this.fetchEvents = this.fetchEvents.bind(this);
        this.addNewNews = this.addNewNews.bind(this);
        this.removeNews = this.removeNews.bind(this);
        this.fetchNews = this.fetchNews.bind(this);

    }


    componentWillMount() {
        this.setState({ isAuthenticated: this.props.isAuthenticated })
        this.fetchEvents();
        this.fetchNews();
    }

    fetchEvents() {
        axios
            .get(`${baseUrl}/api/homesectionone.php`)
            .then(data => {
                this.setState({ existingEvents: data.data })
            })
            .catch(err => console.log(err))
    }

    fetchNews() {
        axios
            .get(`${baseUrl}/api/homenews.php`)
            .then(data => {
                this.setState({ existingNews: data.data })
            })
            .catch(err => console.log(err))
    }



    componentDidMount() {



        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 500)

    }

    addNewEvent() {
        var data = new FormData()
        data.append('file', this.state.eventFile)
        data.append('caption', this.state.eventCaption)
        this.setState({
            eventCaption: '',
            eventFile: null,
            eventFileName: 'Choose an Image..'
        })
        var toastId = null;
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
            this.fetchEvents();
            toast.done(toast.id)
            toast.dismiss(toastId);
        }).catch(err => console.log(err))


    }
    addNewNews() {
        var data = new FormData()
        data.append('news', this.state.newsText)
        this.setState({
            newsText: ''
        })
        axios.request({
            method: "post",
            url: `${baseUrl}/api/homenews.php`,
            data: data
        }).then(data => {
            if (data.data.response) {
                toast.success("news added successfully!", {
                    position: "bottom-left"
                })
                this.fetchNews();
            } else {
                toast.error("something went wrong!", {
                    position: "bottom-left"
                })

            }
        }).catch(err => {
            toast.error("something went wrong!", {
                position: "bottom-left"
            })
        })


    }


    logout() {
        localStorage.clear();
        this.setState({ isAuthenticated: false })
    }


    removeEvent(id) {

        var headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }

        var data = qs.stringify({
            id: id
        })
        axios
            .delete(`${baseUrl}/api/homesectionone.php`, { headers, data })
            .then(data => {
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
    removeNews(id) {

        var headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }

        var data = qs.stringify({
            id: id
        })

        axios
            .delete(`${baseUrl}/api/homenews.php`, { headers, data })
            .then(data => {
                if (data.data.response) {
                    this.fetchNews();
                    toast.success("news deleted successfully!", {
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
            this.state.isLoading ? <Loader type={"bars"} /> : !this.state.isAuthenticated ?
                <Admin /> :
                <Fragment>
                    <nav className="navbar navbar-expand-lg fixed-top red" style={{ height: "60px" }} >
                        <a className="navbar-brand text-white" href="/admin"><img className="mr-2" src={logo} width={40} alt="" />KCET ADMIN DASHBOARD</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    {/* <a className="nav-link text-light" href="/">HomeScreen</a> */}
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <button className="btn btn-sm btn-white  my-2 my-sm-0 text-danger" onClick={() => this.logout()}>Logout</button>
                            </form>
                        </div>
                    </nav>

                    <ul className="nav nav-tabs fixed-top nav-tabs-expanded nav-justified ul-scroll mt-5 pt-3" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Event Image</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">more..</a>
                        </li>
                    </ul>

                    <div className="tab-content mt-5 pt-2" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
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
                                            <form className="was-validated" style={{ width: "350px" }}>
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
                                                            this.setState({
                                                                eventFile: e.target.files[0],
                                                                eventFileName: e.target.files[0].name
                                                            })
                                                        }}
                                                        required />
                                                    <label className="custom-file-label" htmlFor="validatedCustomFile">{this.state.eventFileName}</label>
                                                    <div className="invalid-feedback">Please choose a good quality image</div>
                                                </div>

                                                <div className="mt-2 mb-3">
                                                    <button className="text-white btn btn-sm btn-danger" name="submit" onClick={(e) => {
                                                        e.preventDefault();
                                                        this.addNewEvent();
                                                    }}> Upload </button>
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

                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="container-fluid p-2">
                                <div className="row mtspace ">
                                    <div className="col text-center text-danger h5">
                                        News Upload
                                <hr />
                                    </div>
                                </div>
                                <div className="row" style={{ maxWidth: "100vw" }} >

                                    <div className="col-md-6 " style={{ width: "100%" }}>

                                        <div className="text-center text-danger">
                                            Add new News
                                            <hr />
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <form className="was-validated" style={{ width: "350px" }}>
                                                <div className="mb-3">
                                                    <label htmlFor="validationTextarea ">Event Caption</label>
                                                    <textarea className="form-control is-invalid" id="validationTextarea" placeholder="Required textarea"
                                                        value={this.state.newsText}
                                                        onChange={(e) => {
                                                            this.setState({ newsText: e.target.value })
                                                        }}
                                                        required></textarea>
                                                    <div className="invalid-feedback">
                                                        Please enter some News
                                        </div>
                                                </div>

                                               

                                                <div className="mt-2 mb-3">
                                                    <button className="text-white btn btn-sm btn-danger" name="submit" onClick={(e) => {
                                                        e.preventDefault();
                                                        this.addNewNews();
                                                    }}> Add News </button>
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                    <div className="col-md-6">

                                        <div className="text-center text-danger">
                                            Existing News
                                    <hr />
                                        </div>

                                        <div className="p-1 container">
                                            {this.state.existingNews.map((item, index) => {

                                                return (
                                                    <div className="row" key={index}>
                                                        <div className="col-md-8 p-3">
                                                            {item[1]}
                                                            <hr />
                                                            On:- {item[2]}
                                                        </div>
                                                        <div className="col-4 text-center d-flex justify-content-center align-items-center">
                                                            <button
                                                                value={item[0]}
                                                                onClick={(e) => {
                                                                    this.removeNews(e.target.value)
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


                        </div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        </div>
                    </div>

                </Fragment>
        )
    }
}
