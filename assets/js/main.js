import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux'
import { HashRouter, Route, Switch } from "react-router-dom";

import Index from './components/index/index.react';
import Register from './components/register/register.react';
import SignIn from './components/sign-in/sign-in.react';


class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Index} />
                <Route path='/register' component={Register} />
                <Route path='/sign-in' component={SignIn} />
            </Switch>
        );
    }
}
ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('wrapper')
);
