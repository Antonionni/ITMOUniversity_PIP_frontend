import React, { Component } from 'react';
import { Button } from 'primereact/components/button/Button';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    renderDefault() {
        return (
            <React.Fragment>
                <Link to="/sign-in">
                    <Button label="Вход" />
                </Link>
                <Link to="/register">
                    <Button label="Регистрация" />
                </Link>
            </React.Fragment>
        )
    }
    renderRegister() {
        return (
            <React.Fragment>
                <Link to="/sign-in">
                    <Button label="Вход" />
                </Link>
                <Link to="/">
                    <Button label="Вернуться на главную" />
                </Link>
            </React.Fragment>

        );
    }
    renderSignIn() {
        return (
            <React.Fragment>
                <Link to="/register">
                    <Button label="Регистрация" />
                </Link>
                <Link to="/">
                    <Button label="Вернуться на главную" />
                </Link>
            </React.Fragment>
        );
    }
    render() {
        const { register, signIn }  = this.props;
        let renderFunc = null;
        if (register) {
            renderFunc = this.renderRegister;
        } else if (signIn) {
            renderFunc = this.renderSignIn;
        } else {
            renderFunc = this.renderDefault;
        }
        return (
            <header className="main-header">
                <div className="logo-header"></div>
                <div className="buttons-header">
                    {
                        renderFunc && renderFunc()
                    }
                </div>
            </header>
        );
    }
}
