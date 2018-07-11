import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from "redux";
import { HashRouter } from 'react-router-dom';
import createHistory from "history/createHashHistory";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";

import RootReducer from './duck/index';
import App from './components/app.react';

import jQuery from 'jquery';
window.$ = jQuery;
window.jQuery = jQuery;

import _ from "underscore";

window._ = _;


const history = createHistory();
const logger = createLogger();


const defaultMiddlewares = [
    thunkMiddleware,
    logger,
    routerMiddleware(history)
];

const storeFactory = (rootReducer, middlewares = defaultMiddlewares) => {
    return (function configureStore(initialState) {
        const store = createStore(rootReducer, initialState, compose(
            applyMiddleware(...middlewares),
            window.devToolsExtension ? window.devToolsExtension() : (f) => f
        ));
        return store;
    })();
};


const store = storeFactory(RootReducer);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('wrapper')
);

