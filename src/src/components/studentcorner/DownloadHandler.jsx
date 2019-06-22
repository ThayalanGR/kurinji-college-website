import React, { Component, Fragment } from 'react';
import axios from "axios";
import constants from '../constants';

export default class StaffDownloadHandler extends Component {

    constructor(props) {
        super(props);
        this.state = {
            staffs: [["all", "all"]],
            semesters: ["all", "1", "2", "3", "4", "5", "6", "7", "8"],
            departments: ["all", "mech", "cse", "it", "eee", "ece", "hands", "mecse", "mba", "engdesign"],
            tag: "",
            files: [],
            selectedStaff: ["all", "all"],
            selectedSemester: "all",
            selectedDepartment: "all"
        }
    }

    filterTypeFinder() {
        const department = this.state.selectedDepartment;
        const staff = this.state.selectedStaff;
        const semester = this.state.selectedSemester;
        let type = "1";
        let formData = new FormData();
        formData.append("method", "filter");

        if (department === "all" && staff[0] === "all" && semester === "all") {
            type = "1";
        }
        else if (department !== "all" && staff[0] === "all" && semester === "all") {
            type = "2";
            formData.append("department", this.state.selectedDepartment);
        }
        else if (department === "all" && staff[0] !== "all" && semester === "all") {
            type = "3";
            formData.append("staffid", this.state.selectedStaff[0]);

        }
        else if (department === "all" && staff[0] === "all" && semester !== "all") {
            type = "4";
            formData.append("semester", this.state.selectedSemester);

        }
        else if (department !== "all" && staff[0] !== "all" && semester === "all") {
            type = "5";
            formData.append("department", this.state.selectedDepartment);
            formData.append("staffid", this.state.selectedStaff[0]);

        }
        else if (department !== "all" && staff[0] === "all" && semester !== "all") {
            type = "6";
            formData.append("department", this.state.selectedDepartment);
            formData.append("semester", this.state.selectedSemester);

        }
        else if (department === "all" && staff[0] !== "all" && semester !== "all") {
            type = "7";
            formData.append("staffid", this.state.selectedStaff[0]);
            formData.append("semester", this.state.selectedSemester);

        }
        else if (department !== "all" && staff[0] !== "all" && semester !== "all") {
            type = "8";
            formData.append("department", this.state.selectedDepartment);
            formData.append("staffid", this.state.selectedStaff[0]);
            formData.append("semester", this.state.selectedSemester);
        }

        formData.append("filtertype", type);

        axios
            .request({
                url: `${constants.baseUrl}/api/studentcornerfilehandler.php`,
                method: "POST",
                data: formData
            })
            .then(data => {
                this.setState({ files: data.data.data });
            })
            .catch(err => console.error(err))

    }

    tagTypeFilter() {
        let formData = new FormData();
        formData.append("method", "filter");
        formData.append("filtertype", "9");
        formData.append("tag", this.state.tag);
        axios
            .request({
                url: `${constants.baseUrl}/api/studentcornerfilehandler.php`,
                method: "POST",
                data: formData
            })
            .then(data => {
                this.setState({ files: data.data.data });
            })
            .catch(err => console.error(err))
    }

    componentDidMount() {
        this.fetchStaffs();
        this.filterTypeFinder();
    }

    fetchStaffs() {
        axios
            .get(`${constants.baseUrl}/api/studentcornerfilehandler.php`)
            .then(data => {
                this.setState({ staffs: [this.state.staffs, ...data.data.data] })
            })
            .catch(err => console.error(err));
    }

    fileTypeIconFiner(type) {
        switch (type.toLowerCase()) {
            case "pdf":
                return <i title={type} className="fas fa-2x text-danger fa-file-pdf"></i>
            case "docx":
                return <i title={type} className="far fa-2x text-primary fa-file-word"></i>
            case "xlsx":
                return <i title={type} className="far fa-2x text-success fa-file-excel"></i>
            case "zip" || "rar":
                return <i title={type} className="fas fa-2x text-danger fa-file-archive"></i>
            case "png" || "jpg" || "svg" || "jpeg":
                return <i title={type} className="far fa-2x text-warning fa-file-image"></i>
            case "txt":
                return <i title={type} className="far fa-4x text-warning fa-file-alt"></i>
            case "ppt":
                return <i title={type} className="far fa-4x text-warning fa-file-powerpoint"></i>
            case "mp3" || "wav" || "wma" || "aif" || "ogg" || "mpeg":
                return <i title={type} className="far fa-4x text-warning fa-file-audio"></i>
            case "mp4" || "3gp" || "avi" || "mov" || "flv" || "wmv":
                return <i title={type} className="far fa-4x text-warning fa-file-video"></i>
            default:
                return <i title={type} className="fas text-dark fa-2x fa-file"></i>
        }
    }
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
                        <div className=""><i className="fas fa-filter mr-2"></i> Filter</div>
                        <div className="d-flex">
                            <span className="mr-3 pt-1">
                                Department:
                            </span>
                            <select className="form-control form-control-sm" name="" id=""
                                onChange={(e) => this.setState({ selectedDepartment: e.target.value })}
                            >
                                {this.state.departments.map((item, key) => (
                                    <option value={item} key={key}>{item}</option>
                                ))}
                            </select>
                        </div>
                        <div className="d-flex">
                            <span className="mr-3 pt-1">
                                Semester:
                            </span>
                            <select className="form-control form-control-sm"
                                onChange={(e) => this.setState({ selectedSemester: e.target.value })}
                                name="" id="">
                                {this.state.semesters.map((item, key) => (
                                    <option value={item} key={key}>{item}</option>
                                ))}
                            </select>
                        </div>
                        <div className="d-flex">
                            <span className="mr-3 pt-1">
                                Staff:
                            </span>
                            <select className="form-control form-control-sm"
                                onChange={(e) => this.setState({ selectedStaff: e.target.value.split(",") })}
                                name="" id="">
                                {this.state.staffs.map((item, key) => (
                                    <option value={item} key={key}>{item[1]}</option>
                                ))}
                            </select>
                        </div>
                        <div className="d-flex">
                            <button className="btn btn-sm btn-outline-white rounded" onClick={() => this.filterTypeFinder()}>Search</button>
                        </div>

                        <div className="d-flex justify-content-center align-items-center">
                            <span className="mr-3">
                                <span className="mr-2" style={{ fontSize: "12px" }}>(Advanced)</span>
                                Tag:
                            </span>
                            <input className="form-control form-control-sm"
                                value={this.state.value}
                                onChange={(e) => this.setState({ tag: e.target.value })}
                                type="text" name="" id="" />
                            <button className="btn btn-sm btn-outline-white rounded " onClick={() => this.tagTypeFilter()}>Search</button>
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
                        {this.state.files.map((item, key) => (
                            <Fragment key={key}>
                                <div className="row text-center" style={{ color: "rgb(46, 141, 236)" }}>
                                    <div className="col-md-1 col-sm-12">
                                        {++key}
                                    </div>
                                    <div className="col-md-1 col-sm-12">
                                        {this.fileTypeIconFiner(item[2].split(".")[item[2].split(".").length - 1])}
                                    </div>
                                    <div className="col-md-3 col-sm-12">
                                        {item[1]}
                                    </div>
                                    <div className="col-md-1 col-sm-12">
                                        {item[4]}
                                    </div>
                                    <div className="col-md-1 col-sm-12">
                                        {item[7]}
                                    </div>
                                    <div className="col-md-2 col-sm-12">
                                        {item[6]}
                                    </div>
                                    <div className="col-md-2 col-sm-12">
                                        {new Date(item[8]).toDateString()}
                                    </div>
                                    <div className="col-md-1 col-sm-12">
                                        <a href={`${constants.baseUrl}${item[2]}`} download target="_blank" rel="noopener noreferrer"><i className="fas fa-download"></i></a>
                                    </div>
                                </div>
                                <hr />
                            </Fragment>
                        ))}
                        {this.state.files.length === 0 && <div className="row">
                            <div className="col text-center pb-3 text-danger alert alert-danger">
                                No files Found! try alternate filter!
                            </div>
                        </div>}

                    </div>
                </div>

            </div>
        )
    }
}
