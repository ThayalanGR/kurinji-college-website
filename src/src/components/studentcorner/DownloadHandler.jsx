import React, { Component } from 'react'

export default class StaffDownloadHandler extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col text-center text-danger h5-responsive">
                        Students Corner - Download Materials
                    </div>
                </div>
                <div className="row shadow text-white rounded mt-2 pt-3 pb-3" style={{ backgroundColor: "#FF3C00" }}>
                    <div className="col d-md-flex text-sm-center justify-content-between align-items-center h6-responsive ">
                        <div className=""><i class="fas fa-filter mr-2"></i> Filter</div>
                        <div className="d-flex">
                            <span className="mr-3 pt-1">
                                Department:
                            </span>
                            <select className="form-control form-control-sm" name="" id="">
                                <option value="">saldfkj</option>
                                <option value="">saldfkj</option>
                                <option value="">saldfkj</option>
                            </select>
                        </div>
                        <div className="d-flex">
                            <span className="mr-3 pt-1">
                                Semester:
                            </span>
                            <select className="form-control form-control-sm" name="" id="">
                                <option value="">saldfkj</option>
                                <option value="">saldfkj</option>
                                <option value="">saldfkj</option>
                            </select>
                        </div>
                        <div className="d-flex">
                            <span className="mr-3 pt-1">
                                Staff:
                            </span>
                            <select className="form-control form-control-sm" name="" id="">
                                <option value="">saldfkj</option>
                                <option value="">saldfkj</option>
                                <option value="">saldfkj</option>
                            </select>
                        </div>
                        <div className="d-flex">
                            <span className="mr-3 pt-1">
                                Tag:
                            </span>
                            <input className="form-control form-control-sm" type="text" name="" id="" />
                        </div>
                        <div className="d-flex">
                            <button className="btn btn-sm btn-outline-white rounded ">Search</button>
                        </div>

                    </div>
                </div>
                <div className="row pl-3 pr-3 pt-0 pb-4 mb-3">
                    <div className="col shadow pt-4 mb-3 rounded">
                        <div className="row text-danger text-center">
                            <div className="col-md-1 col-sm-12">
                                S.no
                            </div>
                            <div className="col-md-1 col-sm-12">
                                Type
                            </div>
                            <div className="col-md-3 col-sm-12">
                                File Name
                            </div>
                            <div className="col-md-1 col-sm-12">
                                Department
                            </div>
                            <div className="col-md-1 col-sm-12">
                                Semester
                            </div>
                            <div className="col-md-2 col-sm-12">
                                Uploaded by
                            </div>
                            <div className="col-md-2 col-sm-12">
                                uploaded on
                            </div>
                            <div className="col-md-1 col-sm-12">
                                Download
                            </div>
                        </div>
                        <hr />
                        <div className="row text-center" style={{ color: "rgb(46, 141, 236)" }}>
                            <div className="col-md-1 col-sm-12">
                                1
                                 </div>
                            <div className="col-md-1 col-sm-12">
                                <i class="fas fa-file-pdf"></i>
                            </div>
                            <div className="col-md-3 col-sm-12">
                                Maths Question Paper
                                 </div>
                            <div className="col-md-1 col-sm-12">
                                cse
                                 </div>
                            <div className="col-md-1 col-sm-12">
                                3
                                 </div>
                            <div className="col-md-2 col-sm-12">
                                Krishna Moorthy
                                 </div>
                            <div className="col-md-2 col-sm-12">
                                Jun 13 2019
                                 </div>
                            <div className="col-md-1 col-sm-12">
                                <i class="fas fa-download"></i>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>

            </div>
        )
    }
}
