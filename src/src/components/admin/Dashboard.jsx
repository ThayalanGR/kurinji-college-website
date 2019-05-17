import React, { Component, Fragment } from 'react'
import { Loader, Admin } from '../../components'
import logo from '../../images/favicon.png'
import { Staff, Eventimage, News } from '../admin'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            isAuthenticated: false,
        }
        this.logout = this.logout.bind(this);
    }


    componentWillMount() {
        this.setState({ isAuthenticated: this.props.isAuthenticated })
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 500)
    }

    logout() {
        localStorage.clear();
        this.setState({ isAuthenticated: false })
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
                            <a className="nav-link active" id="eventimage-tab" data-toggle="tab" href="#eventimage" role="tab" aria-controls="home" aria-selected="true">Event Image</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="news-tab" data-toggle="tab" href="#news" role="tab" aria-controls="profile" aria-selected="false">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="staffs-tab" data-toggle="tab" href="#staffs" role="tab" aria-controls="contact" aria-selected="false">Staffs</a>
                        </li>
                    </ul>

                    <div className="tab-content mt-5 pt-2" id="myTabContent">
                        <div className="tab-pane fade show active" id="eventimage" role="tabpanel" aria-labelledby="eventimage-tab">
                            <Eventimage />
                        </div>
                        <div className="tab-pane fade" id="news" role="tabpanel" aria-labelledby="news-tab">
                            <News />
                        </div>
                        <div className="tab-pane fade" id="staffs" role="tabpanel" aria-labelledby="staffs-tab">
                            <Staff />
                        </div>
                    </div>
                </Fragment>
        )
    }
}
