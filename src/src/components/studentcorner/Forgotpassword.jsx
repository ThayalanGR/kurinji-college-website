import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';
import constants from '../constants';

class Forgotpassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            forgotPasswordHash: '',
            newPassword: '',
            repeatPassword: '',
            isStaff: false
        }
    }

    componentWillMount() {
        this.setState({
            id: this.props.match.params.id,
            forgotPasswordHash: this.props.match.params.hash,
            isStaff: Number(this.props.match.params.id.slice(0, 3)) === 811 ? true : false
        })

    }

    componentDidMount() {

    }

    forgotPasswordHandler() {
        let formData = new FormData();
        formData.append("method", "reset")
        let url = `${constants.baseUrl}`;
        if (this.state.isStaff) {
            formData.append("staffid", this.state.id);
            url += "/api/staffauthhandler.php"
        } else {
            formData.append("studentid", this.state.id);
            url += "/api/studentauthhandler.php"
        }
        formData.append("hash", this.state.forgotPasswordHash);
        formData.append("password", this.state.newPassword);

        axios
            .request({
                url: url,
                method: "POST",
                data: formData
            })
            .then(data => {
                console.log(data);
                if (data.data.status) {
                    toast.success("password changed successfully!", {
                        position: 'bottom-right'
                    })
                    if (this.state.isStaff)
                        this.props.history.push("/staff");
                    else
                        this.props.history.push("/student");
                }
            })
            .catch(err => {
                toast.error("something went wrong! contact administrator!")
                console.error(err);
            })
    }

    forgotPasswordValidater() {
        if (this.state.newPassword === this.state.repeatPassword) {
            this.forgotPasswordHandler();
        } else {
            toast.error("password doesn't meet the requirements! retype password", {
                position: "bottom-right"
            });
        }
    }

    render() {
        return (
            <div className="mtspace d-flex justify-contet-center align-items-center">
                <div className="container">
                    <div className="row mt-4 pt-4">
                        <div className="col d-flex justify-content-center align-items-center">
                            <form onSubmit={(e) => { e.preventDefault(); this.forgotPasswordValidater(); }} className="w-50 rounded jumbotron d-flex flex-column">
                                <div className="col text-center text-danger h4-responsive">
                                    Students Corner - Change Your Password
                                </div>
                                <div className="mt-4 pt-1">
                                    <label className="text-danger" htmlFor="password">New Password</label>
                                    <input className="form-control" onChange={(e) => this.setState({ newPassword: e.target.value })}
                                        value={this.state.newPassword}
                                        required
                                        type="password" id="password" />
                                </div>
                                <div className="mt-4">
                                    <label className="text-danger" htmlFor="repassword">Re-Enter Password</label>
                                    <input className="form-control" onChange={(e) => this.setState({ repeatPassword: e.target.value })}
                                        value={this.state.repeatPassword}
                                        required
                                        type="password" id="repassword" />
                                </div>
                                <div className="mt-4">
                                    <button className="btn btn-sm btn-danger text-white" type="submit">Change</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(Forgotpassword);