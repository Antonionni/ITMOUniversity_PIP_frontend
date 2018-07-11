import React from 'react';
import Header from '../common/header.react';

import { InputText } from 'primereact/components/inputtext/InputText';
import { Button } from 'primereact/components/button/Button';
import { Calendar } from 'primereact/components/calendar/Calendar';
import CourseList from '../index/course-list.react';


import {updateUser, userUpdate} from '../../duck/user';

export default class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            firstname: "",
            lastname: "",
            birthDate : "",
            email: ""
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

        this.handleSaveClick = () => {
            const { dispatch } = this.props;

            const{ firstname, lastname, placeOfStudy, birthDate, email, user } = this.state;
            user.data.baseUser.firstName = firstname;
            user.data.baseUser.lastName = lastname;
            user.data.baseUser.email = email;
            user.data.baseUser.birthDate = Date.parse(birthDate);
            
            dispatch(userUpdate(user.data));
        }
    }
    componentWillReceiveProps(newProps) {
        if (this.props.currentUser !== newProps.currentUser) {

        }
        $.ajax({
            url: "/profile/new",
            method: "GET"
        }).done((data) => {
            this.setState({
                user: data,
                firstname: data.data.baseUser.firstName,
                lastname: data.data.baseUser.lastName,
                email: data.data.baseUser.email,
                placeOfStudy: data.data.baseUser.placeOfStudy,
                email: data.data.baseUser.email,
                birthDate: data.data.baseUser.birthDate
            });
        })
    }
    render() {
        const{ firstname, lastname, placeOfStudy, birthDate, email, user } = this.state;
        console.log("birthDate = ", birthDate);
        return (
            <React.Fragment>
                <Header user={user ? user.data.baseUser : null} />
                <div className="dashboard-wrapper base-wrapper">
                    <div>
                        <h1>Личный кабинет</h1>
                    </div>
                    <div className="settings-form ui-g">
                        <div className="ui-g-12">
                            <label htmlFor="email" className="ui-g-6">Email: </label>
                            <InputText name="email" className="ui-g-6" defaultValue={email} onChange={this.handleChangeInput} />
                        </div>
                        <div className="ui-g-12">
                            <label htmlFor="lastname" className="ui-g-6">Фамилия: </label>
                            <InputText name="lastname" className="ui-g-6" defaultValue={lastname} onChange={this.handleChangeInput}/>
                        </div>
                        <div className="ui-g-12">
                            <label htmlFor="firstname" className="ui-g-6">Имя: </label>
                            <InputText name="firstname" className="ui-g-6" defaultValue={firstname} onChange={this.handleChangeInput}/>
                        </div>
                        <div className="ui-g-12">
                            <label htmlFor="birthdate" className="ui-g-6">Дата рождения: </label>
                            <div className="ui-g-6">
                                <Calendar dateFormat="@" name="birthdate" defaultValue={Date.parse(birthDate)} onChange={this.handleChangeDate}/>
                            </div>
                        </div>
                        <div className="buttons ui-g-12">
                            <Button label="Сохранить" onClick={this.handleSaveClick}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}