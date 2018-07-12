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
            birthDate : 0,
            roles: ""
        };

        this.handleChangeDate = (e) => {
            const timestamp = new Date(e.value).getTime();
            this.setState({
                birthDate: timestamp
            });
        };

        this.handleChangeUserType = (e) => {
            this.setState({
                roles: e.value
            });
        };

        this.handleRegisterClick = (e) => {
            const {  birthDate, roles  } = this.state;
            const { dispatch } = this.props;

            e.preventDefault();
            const data = $(this.registerForm).serializeArray();

            data.push({
                name: "name",
                value: "testName"
            });
            data.push({
                name: "roles",
                value: roles
            });

            data.push({
                name: "birthDate",
                value: `${birthDate / 1000}`
            });
            dispatch(signUp(data))
        };
    }

    render() {
        const { roles, birthDate } = this.state;
        return (
            <React.Fragment>
                <Header register />
                <div className="main-content">
                    <form className="register form" ref={node => this.registerForm = node } onSubmit={this.handleRegisterClick}>
                        <h2>Регистрация</h2>
                        <div>
                            <InputText id="email" name="email" placeholder="Email" />
                        </div>
                        <div>
                            <InputText id="firstName" name="firstName" placeholder="Имя" />
                        </div>
                        <div>
                            <InputText id="lastName" name="lastName" placeholder="Фамилия" />
                        </div>
                        <div>
                            <InputText id="placeOfStudy" name="placeOfStudy" placeholder="Образование" onChange={this.handleChangeInput} />
                        </div>
                        <div>
                            <Calendar
                                id="birthDate"
                                showIcon="true"
                                name="birthDate"
                                value={new Date(birthDate)}
                                placeholder="День рождения"
                                onChange={this.handleChangeDate} />
                        </div>
                        <div>
                            <SelectButton id="roles" name="roles" value={roles} options={OPTIONS} onChange={this.handleChangeUserType}></SelectButton>
                        </div>
                        <div>
                            <Password id="password" name="password" placeholder="Пароль" feedback={false} />
                        </div>
                        <div>
                            <Password id="repeatPassword" name="repeatPassword" placeholder="Повторите пароль" feedback={false} />
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