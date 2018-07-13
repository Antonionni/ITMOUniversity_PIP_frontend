import Register from "./register/register.react";
import React from "react";
import Index from "./index/index.react";
import SignIn from './sign-in/sign-in.react';
import Dashboard from './dashboard/dasboard.react';
import AdminPanel from './admin/admin-panel.react';
import MyCourses from './courses/my-courses.react';
import CreateCourse from './create-course/create-course.react';

import { Route, Switch, withRouter } from "react-router-dom";
import {connect} from "react-redux";
import { getCurrentUser, getError, getIsAuth } from "../duck/user";
import { loadCourses, getCourses, getCurrentEditorCourse } from "../duck/courses";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(loadCourses());
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
                <Route path='/create-course' render={props => <CreateCourse {...props} {...this.props} />} />
            </Switch>
        );
    }
}


function mapStateToProps({ user, courses }) {
    const currentUser = getCurrentUser(user);
    const error = getError(user);
    const isAuth = getIsAuth(user);
    const coursesList = getCourses(courses);
    const currentEditorCourse = getCurrentEditorCourse(courses);
    return {
        currentUser,
        error,
        isAuth,
        coursesList,
        currentEditorCourse
    };
}

export default withRouter(connect(mapStateToProps)(App));