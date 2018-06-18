import React from 'react';
import { Password } from 'primereact/components/password/Password';
import { InputText } from 'primereact/components/inputtext/InputText';
import { Button } from 'primereact/components/button/Button';


export default class FastRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password1: "",
            password2: ""
        };
        this.handleChangeInput = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            });
        };
        this.handleRegisterClick = () => {
            const { email, password1, password2 } = this.state;
            console.log("email = ", email, " password1 ", password1, " password2 ", password2);
        };
    }

    render() {
        return (
            <div className="fast-register">
                <div className="fast-register-wrapper">
                    <div className="fast-register-form form">
                        <h2>Быстрая регистрация</h2>
                        <div>
                            <InputText name="email" placeholder="Email" onChange={this.handleChangeInput} />
                        </div>
                        <div>
                            <Password
                                name="password1"
                                placeholder="Пароль"
                                onChange={this.handleChangeInput}
                                feedback={false}
                            />
                        </div>
                        <div>
                            <Password
                                name="password2"
                                placeholder="Повторите пароль"
                                onChange={this.handleChangeInput}
                                feedback={false}
                            />
                        </div>
                        <div>
                            <Button label="Зарегистрироваться" onClick={this.handleRegisterClick} />
                            <a href="/authenticate/google" className="google-auth"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}