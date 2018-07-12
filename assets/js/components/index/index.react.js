import React from 'react';
import Header from '../common/header.react';
import Footer from '../common/footer.react';

import FastRegister from './fast-register.react';
import CourseList from './course-list.react';

import {checkUser, getCurrentUser, getError, getIsAuth} from "../../duck/user";
import { connect } from "react-redux";

import { withRouter } from 'react-router-dom'

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(checkUser());
    }
    render() {
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
