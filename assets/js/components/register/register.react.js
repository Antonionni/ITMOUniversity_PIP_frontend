import React from 'react';
import { Password } from 'primereact/components/password/Password';
import { InputText } from 'primereact/components/inputtext/InputText';
import { Button } from 'primereact/components/button/Button';

export default class React extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            secondname: "",
            patronymic: "",
            email: "",
            password1: "",
            password1: ""
        };

        this.handleChangeInput = (e) => {
            this.setState({
               [e.target.name]: e.target.value
            });
        };

        this.handleRegisterClick = () => {
            const { firstname, secondname, patronymic, email, password1, password2 } = this.state;
            console.log("firstname = ", firstname, " secondname", secondname, " patronymic = ", patronymic, " email = ", email, " password1 = ", password1, " password2 = ", password2);
        };
    }

    render() {
        const { email, password1, password2 } = this.props;
        return (
            <div className="main-register">
                <div className="register-form">
                    <div>
                        <InputText name="firstname" placeholder="Имя" onChange={this.handleChangeInput} />
                    </div>
                    <div>
                        <InputText name="secondname" placeholder="Фамилия" onChange={this.handleChangeInput} />
                    </div>
                    <div>
                        <InputText name="patronymic" placeholder="Отчество" onChange={this.handleChangeInput} />
                    </div>
                    <div>
                        <InputText name="email" placeholder="Email" onChange={this.handleChangeInput} dafaulValue={ email || "" } />
                    </div>
                    <div>
                        <Password name="password1" placeholder="Пароль" feedback={false} onChange={this.handleChangeInput} dafaulValue={ password1 || "" } />
                    </div>
                    <div>
                        <Password name="password2" placeholder="Повторите пароль" feedback={false} onChange={this.handleChangeInput} dafaulValue={ password2 || "" } />
                    </div>
                    <div>
                        <Button label="Зарегистрироваться" onClick={this.handleRegisterClick} />
                    </div>
                </div>
            </div>
        );
    }
}