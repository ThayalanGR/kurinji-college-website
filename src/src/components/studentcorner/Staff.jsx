import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class Staff extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg shadow-sm student-corner-header">
                    <Link className="navbar-brand text-white ml-2" to="/home" >  <i className="fas fa-users"></i>  Students Corner</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Pricing</Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            Navbar text with an inline element
                         </span>
                    </div>
                </nav>
                <div className="student-corner-container">
                    content goes here
                </div>
            </Fragment>
        )
    }
}
