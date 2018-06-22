import React from 'react';
import ReactDOM from 'react-dom';

import {  Provider } from 'react-redux'
import { HashRouter } from "react-router-dom";

import store from './store';

import App from './components/app.react';

import jQuery from 'jquery';
window.$ = jQuery;
window.jQuery = jQuery;

import _ from "underscore";
window._ = _;

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('wrapper')
);

