import React from 'react';
import Header from '../common/header.react';
import Footer from '../common/footer.react';

import FastRegister from './fast-register.react';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="index-wrapper">
                    <FastRegister />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}
