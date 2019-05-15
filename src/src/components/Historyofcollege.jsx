import React, { Component } from 'react'

export default class Historyofcollege extends Component {
    render() {
        return (
            <div className="mtspace">
                <div className="container mt-4">
                    <h4 className="text-primary mt-4 pt-4">History Message</h4>
                    <div>
                        <hr className="display-2" />
                        <h5 className="text-primary text-left">About the College</h5>
                        <div className="con d-flex text-left justify-content-around align-items-center flex-column">
                            <p>&nbsp;&nbsp;Kurinji College of Engineering and Technology is approved by the AICTE New Delhi and
                                affiliated to Anna University, Tiruchirapalli.
                                The college offers comprehensive education giving equal thrust to professional and personal development.
                                The college is located in Manapparai Town limit and 40 Km form Tiruchirapalli city. The college campus
                                spreads over a spacious area of nearly 31 Acres.
                                The college was established during the academic year 2001-2002.</p>
                        </div>
                        <hr className="display-2" />
                        <h5 className="text-primary abt text-left">About the Trust</h5>
                        <div id="msg" className="con d-flex text-left justify-content-around align-items-center flex-column">
                            <p>&nbsp;&nbsp;Spurred by the vision of service to the society through education both at school and college
                                level, the Trust named Neo Foundation for Societal Transformation Trust is registered under the Society
                                Act on 14.07.1993 with its registered office at Aanatha buildings, 18 & 21, Madurai Road,
                                Tiruchirappalli.
                                The Trust is a non-profit organization, which has so for successfully delivered two institutions namely,
                                Kurinji College of Arts and Science and Kurinji College of Engineering and Technology to serve the
                                economically and socially backward rural people who form the major component of our mother Land.
                                The mission of the Trust is to impart education in diversified fields by developing leadership qualities
                                and competency among students.</p>
                        </div>
                        <hr className="display-2" />
                        <h5 className="text-primary abt text-left">Group Institution</h5>
                        <div id="msg">
                            <p className="text-danger text-left">1.Kuriniji College of Arts and Science, Tiruchirapalli.</p>
                            <p className="text-danger text-left">2.A.K.K.V. Aarunadu Matriculation Higher Secondary School, Tiruchirapalli.</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
