import React from 'react';
import Header from '../common/header.react';

import { InputText } from 'primereact/components/inputtext/InputText';
import { Button } from 'primereact/components/button/Button';
import { Calendar } from 'primereact/components/calendar/Calendar';


import { updateUser } from '../../duck/user';

import ChangePasswodForm from './chnage-password.react';

export default class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: this.props.currentUser || null,
            birthDate : ""
        };

        this.handleChangeDate = (e) => {
            this.setState({
                birthDate: e.value
            });
        };

        this.handleSaveClick = () => {
            const { dispatch } = this.props;
            const{ birthDate, email, currentUser } = this.state;

            currentUser.baseUser.firstName = firstName;
            currentUser.baseUser.lastName = lastName;
            currentUser.baseUser.email = email;
            currentUser.baseUser.birthDate = Date.parse(birthDate);

            dispatch(updateUser(currentUser));
        }
    }
    componentWillReceiveProps(newProps) {
        const { currentUser } = newProps;
        if (this.props.currentUser !== newProps.currentUser) {
            this.setState({
                currentUser
            })
        }
    }
    render() {
        const{ currentUser } = this.state;
        return (
            <React.Fragment>
                <Header user={currentUser ? currentUser.baseUser : null} />
                <div className="dashboard-wrapper base-wrapper">
                    <div>
                        <h1>Личный кабинет</h1>
                    </div>
                    <div className="settings-form ui-g">
                        <div className="ui-g-12">
                            <label htmlFor="email" className="ui-g-6">Email: </label>
                            <InputText name="email" className="ui-g-6" defaultValue={currentUser ? currentUser.baseUser.email : ""} onChange={this.handleChangeInput} />
                        </div>
                        <div className="ui-g-12">
                            <label htmlFor="firstName" className="ui-g-6">Имя: </label>
                            <InputText name="firstName" className="ui-g-6" defaultValue={currentUser ? currentUser.baseUser.firstName : ""} onChange={this.handleChangeInput}/>
                        </div>
                        <div className="ui-g-12">
                            <label htmlFor="lastName" className="ui-g-6">Фамилия: </label>
                            <InputText name="lastName" className="ui-g-6" defaultValue={currentUser ? currentUser.baseUser.lastName : ""} onChange={this.handleChangeInput}/>
                        </div>
                        <div className="ui-g-12">
                            <label htmlFor="placeOfStudy" className="ui-g-6">Образование: </label>
                            <InputText name="placeOfStudy" className="ui-g-6" onChange={this.handleChangeInput}/>
                        </div>
                        <div className="ui-g-12">
                            <label htmlFor="birthdate" className="ui-g-6">Дата рождения: </label>
                            <div className="ui-g-6">
                                <Calendar dateFormat="@" name="birthdate" onChange={this.handleChangeDate}/>
                            </div>
                        </div>
                        <div className="buttons ui-g-12">
                            <Button label="Сохранить" onClick={this.handleSaveClick}/>
                        </div>
                    </div>
                    <ChangePasswodForm {...this.props}/>
                </div>
            </React.Fragment>

        )
    }
}