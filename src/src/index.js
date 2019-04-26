import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './css/main.css'

import { Home, Aboutus, Contact } from './components';

import App from './App';
ReactDOM.render(
    <BrowserRouter>
        <App />
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutus" component={Aboutus} />
        <Route exact path="/contact" component={Contact} />
    </BrowserRouter>, document.getElementById('root'));