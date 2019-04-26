import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

import { Home } from './components';

import App from './App';
ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route exact path="/" component={Home} />
        </App>
    </BrowserRouter>, document.getElementById('root'));