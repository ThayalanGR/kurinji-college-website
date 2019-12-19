import React, { Component } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { constants } from '../../components'
const baseUrl = constants.baseUrl;

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsText: '',
            existingNews: []
        }

        this.addNewNews = this.addNewNews.bind(this);
        this.removeNews = this.removeNews.bind(this);
        this.fetchNews = this.fetchNews.bind(this);

    }

    componentWillMount() {
        this.fetchNews();
    }

    fetchNews() {
        axios
            .get(`${baseUrl}/api/homenews.php`)
            .then(data => {
                this.setState({ existingNews: data.data })
            })
            .catch(err => console.log(err))
    }


    addNewNews() {
        var data = new FormData()
        data.append("method", "post")
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


    removeNews(id) {

        var data = new FormData();
        data.append("method", "delete")
        data.append("id", id)

        axios.request({
            method: "post",
            url: `${baseUrl}/api/homenews.php`,
            data: data
        }).then(data => {
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
        )
    }
}
