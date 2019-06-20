import React, { Fragment } from 'react';

import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { toast } from 'react-toastify';


import './css/main.css';
import 'react-toastify/dist/ReactToastify.css';
import "react-image-gallery/styles/css/image-gallery.css";
import "./css/dept.css";


import { Home, Contact, Admin, Infrastructure, Gallery, Alumni, Navbar, Historyofcollege, Principal, Chairman, Mech, Eee, Ece, Cse, Mecse, Engdesign, Mba, Hands, StudentLogin, StudentRegister, Student, StaffLogin, Staff } from './components';


toast.configure();


ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Fragment>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/infrastructure" component={Infrastructure} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/alumni" component={Alumni} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/mech" component={Mech} />
                <Route exact path="/eee" component={Eee} />
                <Route exact path="/ece" component={Ece} />
                <Route exact path="/cse" component={Cse} />
                <Route exact path="/hands" component={Hands} />
                <Route exact path="/mecse" component={Mecse} />
                <Route exact path="/engdesign" component={Engdesign} />
                <Route exact path="/mba" component={Mba} />
                <Route exact path="/historyofcollege" component={Historyofcollege} />
                <Route exact path="/principalmessage" component={Principal} />
                <Route exact path="/chairmanmessage" component={Chairman} />
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/student/login" component={StudentLogin} />
                <Route exact path="/student/register" component={StudentRegister} />
                <Route exact path="/student" component={Student} />
                <Route exact path="/staff/login" component={StaffLogin} />
                <Route exact path="/staff" component={Staff} />
            </Switch>
        </Fragment>
    </BrowserRouter>, document.getElementById('root'));