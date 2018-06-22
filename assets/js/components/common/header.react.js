import React, { Component } from 'react';
import { Button } from 'primereact/components/button/Button';
import {Menu} from 'primereact/components/menu/Menu';

import { Link } from 'react-router-dom';

const items = [
    { label: "Найстройки" },
    { label: "Мои курсы" },
    { label: "Выход" },
];

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
    renderUser() {
        const { user } = this.props;
        return (
            <React.Fragment>
                <Menu model={items} popup={true} ref={el=>this.menu=el} />
                <Button label={`Пользователь: ${user.email}`} onClick={(event)=>this.menu.toggle(event)}/>
            </React.Fragment>
        )
    }
    render() {
        const { register, signIn, user }  = this.props;
        let renderFunc = null;
        if (register) {
            renderFunc = this.renderRegister;
        } else if (signIn) {
            renderFunc = this.renderSignIn;
        } else if (user){
            renderFunc = this.renderUser.bind(this);
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
