import React from 'react';
import Header from '../common/header.react';
import Footer from '../common/footer.react';

import FastRegister from './fast-register.react';
import CourseList from './course-list.react';

import {checkUser, getCurrentUser, getError, getIsAuth} from "../../duck/user";
import { connect } from "react-redux";

import { withRouter } from 'react-router-dom'

class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(checkUser());
    }
    render() {
        console.log("props = ", this.props)
        return (
            <React.Fragment>
                <Header />
                <div className="index-wrapper">
                    <FastRegister />
                    <CourseList />
                </div>
                <Footer />
            </React.Fragment>
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

export default connect(mapStateToProps)(Index);