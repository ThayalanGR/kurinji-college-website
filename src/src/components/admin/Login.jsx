import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import logo from '../../images/favicon.png';
import {toast} from 'react-toastify';
import { Loader, Dashboard } from '../../components'    

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            isAuthenticated: false,
            userName: '',
            password: ''
        }

        this.processSubmition = this.processSubmition.bind(this);
    }

    componentWillMount() {

    }


    componentDidMount() {

        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 500)

    }

    processSubmition() {

        const isValid = this.state.userName === 'admin' && this.state.password === 'admin' ? true : false;
        if (isValid) {
            localStorage.setItem("token", "alsdkfer234c1m0349");
            this.setState({userName: '', password: ''})
            toast.success("login success", {
                position: "bottom-right"
            })
            this.setState({isAuthenticated: true})
        } else {
            toast.error("login credentials wrong !", {
                position: "bottom-right"
            })
        }
    }


    render() {
        return (
            this.state.isLoading ? <Loader type={"spin"} /> :
                !this.state.isAuthenticated ? 
                <MDBContainer className="d-flex justify-content-center align-items-center" style={{width: "100vw", height: "100vh"}}>
                    <MDBRow>
                        <MDBCol >
                            <form>
                                <p className="h4 text-center mb-4">
                                    <img className="img-fluid" src={logo} alt=""/> <br/>
                                <span className="text-danger font-weight-bold">KECT</span><span className=""> Administrator Login</span></p>
                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                    User Name
                                </label>
                                <input
                                    type="text"
                                    id="defaultFormLoginEmailEx"
                                    className="form-control"
                                    value={this.state.userName}
                                    onChange={(e) => {
                                        this.setState({userName: e.target.value})
                                    }}
                                />
                                <br />
                                <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="defaultFormLoginPasswordEx"
                                    className="form-control"
                                    value={this.state.password}
                                    onChange={(e) => {
                                        this.setState({password: e.target.value})
                                    }}
                                />
                                <div className="text-center mt-4">
                                    <button className="btn btn-danger text-white" type="submit" onClick={(e)=> {
                                        e.preventDefault();
                                        this.processSubmition()
                                    }}>Login</button>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                : <Dashboard />
        )
    }
}
