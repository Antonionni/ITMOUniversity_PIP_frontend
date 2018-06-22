import React from 'react';
import { Password } from 'primereact/components/password/Password';
import { InputText } from 'primereact/components/inputtext/InputText';
import { Button } from 'primereact/components/button/Button';
import { Calendar } from 'primereact/components/calendar/Calendar';
import { SelectButton } from 'primereact/components/selectbutton/SelectButton';

import { signUp } from '../../duck/user';

import Header from '../common/header.react';

const OPTIONS = [
    { label: "Студент", value: "Student"},
    { label: "Преподаватель", value: "Teacher"}
];

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            secondname: "",
            birthDate : "",
            role: "",
            email: "",
            password1: "",
            password1: ""
        };

        this.handleChangeInput = (e) => {
            this.setState({
               [e.target.name]: e.target.value
            });
        };

        this.handleChangeDate = (e) => {
            this.setState({
                birthDate: e.value
            });
        };

        this.handleChangeUserType = (e) => {
            this.setState({
                role: e.value
            });
        };

        this.handleRegisterClick = (data) => {
            debugger;
            dispatch(signUp(data));
        };
    }

    render() {
        // const { email, password1, password2 } = this.props;
        const { role } = this.state;
        return (
            <React.Fragment>
                <Header register />
                <div className="main-content">
                    <form className="register form" onSubmit={this.handleRegisterClick}>
                        <h2>Регистрация</h2>
                        <div>
                            <InputText name="email" placeholder="Email" onChange={this.handleChangeInput} />
                        </div>
                        <div>
                            <InputText name="firstname" placeholder="Имя" onChange={this.handleChangeInput} />
                        </div>
                        <div>
                            <InputText name="secondname" placeholder="Фамилия" onChange={this.handleChangeInput} />
                        </div>
                        <div>
                            <InputText name="placeOfStudy" placeholder="Образование" onChange={this.handleChangeInput} />
                        </div>
                        <div>
                            <Calendar name="birthDate" placeholder="День рождения" onChange={this.handleChangeDate} />
                        </div>
                        <div>
                            <SelectButton name="roles" value={role} options={OPTIONS} onChange={this.handleChangeUserType}></SelectButton>
                        </div>
                        <div>
                            <Password name="password1" placeholder="Пароль" feedback={false} onChange={this.handleChangeInput} />
                        </div>
                        <div>
                            <Password name="password2" placeholder="Повторите пароль" feedback={false} onChange={this.handleChangeInput} />
                        </div>
                        <div>
                            <Button label="Зарегистрироваться" />
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}