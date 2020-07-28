import React from 'react';

import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { toast } from 'react-toastify';

import 'antd/dist/antd.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/main.css';
import 'react-toastify/dist/ReactToastify.css';
import "react-image-gallery/styles/css/image-gallery.css";
import "./css/dept.css";


import { Home, Contact, Admin, Infrastructure, Gallery, Alumni, Navbar, Historyofcollege, Principal, Chairman, Mech, Eee, Ece, Cse, Mecse, Engdesign, Mba, Hands, Student, Staff, Forgotpassword } from './components';


toast.configure();


ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="core-container">
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
                <Route exact path="/student" component={Student} />
                <Route exact path="/staff" component={Staff} />
                <Route exact path="/forgotpasswordhandler/:id/:hash" component={Forgotpassword} />
                {/* <Route path='/404' component={My404Component} /> */}
                <Redirect from='*' to='/' />
            </Switch>
        </div>
    </BrowserRouter>, document.getElementById('root'));