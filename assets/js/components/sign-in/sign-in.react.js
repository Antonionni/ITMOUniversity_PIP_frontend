import React from 'react';
import Header from '../common/header.react';

import { Password } from 'primereact/components/password/Password';
import { InputText } from 'primereact/components/inputtext/InputText';
import { Button } from 'primereact/components/button/Button';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.handleChangeInput = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            });
        };

        this.handleSignInClick = () => {
            const { email, password }  = this.props;
            console.log("email = ", email, " password = ", password);
        };
    }

    render() {
        return (
            <React.Fragment>
                <Header signIn />
                <div className="main-content">
                    <div className="sig-in form">
                        <h2>Авторизация</h2>
                        <div>
                            <InputText name="email" placeholder="Email" onChange={this.handleChangeInput} />
                        </div>
                        <div>
                            <Password name="password1" placeholder="Пароль" feedback={false} onChange={this.handleChangeInput} />
                        </div>
                        <div>
                            <Button label="Войти" onClick={this.handleSignInClick} />
                            <a href="/authenticate/google" className="google-auth"/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}