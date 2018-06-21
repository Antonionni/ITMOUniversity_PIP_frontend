import React from 'react';
import Header from '../common/header.react';

import { Password } from 'primereact/components/password/Password';
import { InputText } from 'primereact/components/inputtext/InputText';
import { Button } from 'primereact/components/button/Button';

import { signIn } from '../../duck/user';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = (e) => {
            e.preventDefault();
            const { dispatch } = this.props;
            const data = $(this.loginForm).serializeArray();
            dispatch(signIn(data))
        };
    }

    render() {
        return (
            <React.Fragment>
                <Header signIn />
                <div className="main-content">
                    <form ref={node => this.loginForm = node } className="sig-in form" action="/login" method="post" onSubmit={this.handleSubmit.bind(this)}>
                        <h2>Авторизация</h2>
                        <div>
                            <InputText id="email" name="email" placeholder="Email" />
                        </div>
                        <div>
                            <Password id="password" name="password" placeholder="Пароль" feedback={false} />
                        </div>
                        <div>
                            <Button label="Войти" />
                            <a href="/authenticate/google" className="google-auth"/>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}