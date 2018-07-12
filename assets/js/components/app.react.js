import Register from "./register/register.react";
import React from "react";
import Index from "./index/index.react";
import SignIn from './sign-in/sign-in.react';
import Dashboard from './dashboard/dasboard.react';
import AdminPanel from './admin/admin-panel.react';
import MyCourses from './courses/my-courses.react';

import {Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { getCurrentUser, getError, getIsAuth } from "../duck/user";


class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps() {
        console.log("newProps");
    }
    render() {
        return (
            <Switch>
                <Route exact path='/' render={props => <Index {...props} {...this.props} /> }/>
                <Route path='/register' render={props => <Register {...props} {...this.props} />} />
                <Route path='/sign-in' render={props => <SignIn {...props} {...this.props} />} />
                <Route path="/dashboard" render={props => <Dashboard {...props} {...this.props} />}/>
                <Route path='/admin' render={props => <AdminPanel {...props} {...this.props} />} />
                <Route path='/mycourses' render={props => <MyCourses {...props} {...this.props} />} />
            </Switch>
        );
    }
}


function mapStateToProps({ user }) {
    const currentUser = getCurrentUser(user);
    const error = getError(user);
    const isAuth = getIsAuth(user);
    return {
        currentUser,
        error,
        isAuth
    };
}

export default withRouter(connect(mapStateToProps)(App));