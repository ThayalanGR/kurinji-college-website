import React from 'react';
import ReactDOM from 'react-dom';


import { BrowserRouter, Route } from "react-router-dom";
import { toast } from 'react-toastify';


import './css/main.css'
import 'react-toastify/dist/ReactToastify.css';


import { Home, Aboutus, Contact, Admin, Courses, Infrastructure, Placement, RankHolders, Alumini } from './components';


toast.configure();


ReactDOM.render(
    <BrowserRouter>

        <Route exact path="/" component={Home} />
        <Route exact path="/aboutus" component={Aboutus} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/infrastructure" component={Infrastructure} />
        <Route exact path="/placement" component={Placement} />
        <Route exact path="/rankholders" component={RankHolders} />
        <Route exact path="/alumini" component={Alumini} />
        <Route exact path="/contact" component={Contact} />

        <Route exact path="/admin" component={Admin} />

    </BrowserRouter>, document.getElementById('root'));