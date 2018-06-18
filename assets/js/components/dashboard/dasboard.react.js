import React from 'react';

export default class DashBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { firstName, lastName } = this.props.user;
        return (
            <div>
                <h1>{firstName}</h1>
                <h1>{lastName}</h1>
            </div>
        )
    }
}