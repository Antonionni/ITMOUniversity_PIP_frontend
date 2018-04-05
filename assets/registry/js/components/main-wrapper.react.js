import React, { Component } from 'react';
import Registry from './registry.react';

export default class MainWrapper extends Component {
    constructor(props) {
        super(props);
        this.handleSaveButtonClick = () => {
            console.log("save");
        };
    }
    render() {
        return (
            <div className="main-wrapper">
                <Registry handleSaveButton={this.handleSaveButtonClick} />
            </div>
        );
    }
}
