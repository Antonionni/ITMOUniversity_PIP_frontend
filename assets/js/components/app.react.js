import Register from "./register/register.react";
import React from "react";
import Index from "./index/index.react";
import SignIn from './sign-in/sign-in.react';
import Dashboard from './dashboard/dasboard.react';
import AdminPanel from './admin/admin-panel.react';
import MyCourses from './courses/my-courses.react';

import {Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getCurrentUser, getError, getIsAuth} from "../duck/user";


export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("render")
        return (
            <Switch>
                <Route exact path='/' component={Index} />
                <Route path='/register' render={props => <Register {...props} />} />
                <Route path='/sign-in' render={SignIn} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path='/admin' render={AdminPanel} />
                <Route path='/mycourses' render={MyCourses} />
            </Switch>
        );
    }
}