import React from 'react';
import Header from '../common/header.react';
import Footer from '../common/footer.react';

import FastRegister from './fast-register.react';
import CourseList from './course-list.react';

import { connect } from 'react-redux';

import { isSessionEnable } from "../../api";

class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        $.ajax({
            url: "/profile/new",
            method: "GET"
        }).done((data) => {
            window.location.hash = "/dashboard";
        })
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

function mapStateToProps({ user }) {
    return {
        user
    };
}

export default connect(mapStateToProps)(Index);

