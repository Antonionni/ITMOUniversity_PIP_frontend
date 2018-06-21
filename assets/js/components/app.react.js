import Register from "./register/register.react";
import React from "react";
import Index from "./index/index.react";
import SignIn from './sign-in/sign-in.react';

import { Route, Switch } from "react-router-dom";

import { connect } from 'react-redux'

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Switch>
                <Route exact path='/' component={() => <Index {...this.props} />} />
                <Route path='/register' component={() => <Register {...this.props} />} />
                <Route path='/sign-in' render={() => <SignIn {...this.props} />} />
            </Switch>
        );
    }
}

function mapStateToProps (state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(App)