import React, { Component } from 'react'
import chairman from '../images/chairman.jpg'


export default class Chairman extends Component {
    render() {
        return (
            <div className="mtspace">
                <div className="container">
                    <div className="d-md-flex justify-content-around align-items-center flex-md-row text-center">
                        <img src={chairman} className="rounded img-responsive imgstyle shadow-lg" alt="dot" />
                        <div className="d-flex flex-column justify-content-between align-items-center chairman">
                            <p className="text-primary h4 mt-4"><b>Mr.A.K.K.Ravichandhran</b></p>
                            <p className="text-danger h5"><b>Chairman</b></p>
                        </div>
                    </div>
                    <hr className="display-5" />
                    <h5 className="text-primary mt-4 chairman text-left">Chairman's Message:</h5>
                    <div className="d-flex justify-content-around align-items-center flex-column">
                        <p className="text-primary chairman text-left">&nbsp;&nbsp;With great pleasure, I share our success with you all who are part of us
                            during our endeavors.
                            With greater humility I would like to state that we have crossed a milestone of twelve years in Technical
                            Education and Training which was laced with a perspective of reaching milestones at every stage.
                            It was achieved with immaculate discipline, quality training, rigorous practices, continuous improvement and
                            total staff involvement and with an eye on future scenario in Technical Education.
                            The institution provides world className infrastructural facilities comparable with the best of its kind in the
                    field of education.</p>
                        <div className="text-danger  rounded p-2 ml-md-4">

                            <p className="chairman">
                                I would also like to state gladly that the current technical education is in a good healthy state and
                                 the employment potential is very high.</p>
                            <p className="chairman">
                                Best Wished to you all, I once again heartily welcome you to our Kurinji College of Engineering and
                                Technology to be one of us and to be a part of building a strong nation!!s</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
