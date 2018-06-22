import React from 'react';
import Header from '../common/header.react';

import { InputText } from 'primereact/components/inputtext/InputText';
import { Button } from 'primereact/components/button/Button';
import { Calendar } from 'primereact/components/calendar/Calendar';
import CourseList from '../index/course-list.react';

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
            const{ firstname, lastname, placeOfStudy, birthDate, email, user } = this.state;
            user.data.baseUser.firstName = firstname;
            user.data.baseUser.lastName = lastname;
            user.data.baseUser.email = email;
            user.data.baseUser.birthDate = Date.parse(birthDate);
            debugger;
            $.ajax({
                url: "/users/update",
                method: "POST",
                data: JSON.stringify(user.data),
                contentType: "application/json"
            });
            debugger;
        }
    }
    componentDidMount() {
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
                <div className="dashboard-wrapper">
                    <div>
                        <h1>Личный кабинет</h1>
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <InputText name="email" defaultValue={email} onChange={this.handleChangeInput} />
                    </div>
                    <div>
                        <label htmlFor="lastname">Фамилия: </label>
                        <InputText name="lastname" defaultValue={lastname} onChange={this.handleChangeInput}/>
                    </div>
                    <div>
                        <label htmlFor="firstname">Имя: </label>
                        <InputText name="firstname" defaultValue={firstname} onChange={this.handleChangeInput}/>
                    </div>
                    <div>
                        <label htmlFor="birthdate">Дата рождения: </label>
                        <Calendar dateFormat="@" name="birthdate" defaultValue={Date.parse(birthDate)} onChange={this.handleChangeDate}/>
                    </div>
                    <div className="buttons">
                        <Button label="Сохранить" onClick={this.handleSaveClick}/>
                    </div>
                </div>
                <CourseList />
            </React.Fragment>

        )
    }
}