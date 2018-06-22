import Register from "./register/register.react";
import React from "react";
import Index from "./index/index.react";
import SignIn from './sign-in/sign-in.react';
import Dashboard from './dashboard/dasboard.react';
import AdminPanel from './admin/admin-panel.react';

import { Route, Switch } from "react-router-dom";


export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Switch>
                <Route exact path='/' component={() => <Index />} />
                <Route path='/register' component={() => <Register />} />
                <Route path='/sign-in' render={() => <SignIn />} />
                <Route  path="/dashboard" render={() => <Dashboard />} />
                <Route path='/admin' render={() => <AdminPanel />} />
            </Switch>
        );
    }
}