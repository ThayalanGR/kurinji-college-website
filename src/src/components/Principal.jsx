import React, { Component } from 'react';
import principal from '../images/principal.jpg'

export default class Principal extends Component {
    render() {
        return (
            <div className="mtspace">
                <div className="container">
                    <div className="d-md-flex justify-content-around align-items-center flex-md-row text-center">
                        <img src={principal} className="rounded img-responsive imgstyle shadow-lg" alt="dot" />
                        <div className="d-flex flex-column justify-content-between align-items-center principal">
                            <p className="text-primary h4 mt-4"><b>Dr.V.Balasubramaniam M.E., Ph.D</b></p>
                            <p className="text-danger h5"><b>Principal</b></p>
                        </div>
                    </div>
                    <hr className="display-5" />
                    <h5 className="text-primary mt-4 text-left">Principal's Message:</h5>
                    <div className="text-left">
                        <p>&nbsp;&nbsp;Dr. V.Balasubramaniam graduated B.E from J.J College of Engineering and Technology,
                            Tiruchirappalli in Mechanical Engineering. He completed M.E. in Industrial Engineering from the
                            Thiyagarajar College of Engineering, Madurai.
                            He obtained Ph.D. in Mechanical Engineering in Anna University, Chennai. He has 13 years of experience in
                            Teaching.</p>
                    </div>
                    <hr className="display-2" />
                    <h5 className="text-primary text-left">Principal's Profile:</h5>
                    <div className="text-left">
                        <p>&nbsp;&nbsp;I am very happy to welcome you to the Kurinji College of Engineering and Technology (KCET)
                            website. I
                            hope to convey the passion and interest that both staff and students bring to all that they do here,
                            making KCET such a wonderful place to learn.
                            As a college we have a strong focus on student academic progress, co curricular and extracurricular
                            activities.
                            I am very proud of the teaching staff we have working across the college, engaging the students in a
                            wide range of exciting learning opportunities towards their placement.
                            As a result of our size we are able to focus on the needs of each individual student and aim to nurture
                            each student in order to ensure their journey at KCET is a victorious.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
