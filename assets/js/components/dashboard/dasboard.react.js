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
            currentUser: this.props.currentUser || null
        };

        this.handleSaveClick = () => {
            const { dispatch } = this.props;
            const{ currentUser } = this.state;

            currentUser.baseUser.firstName = this.firstNameNode.inputEl.value;
            currentUser.baseUser.lastName = this.lastNameNode.inputEl.value;
            currentUser.baseUser.email = this.emailNode.inputEl.value;
            currentUser.baseUser.birthDate = new Date(this.birthDateNode.inputfield.value).getTime();
            currentUser.baseUser.placeOfStudy = this.placeOfStudyNode.inputEl.value;

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
                <Header user={currentUser ? currentUser.baseUser : null} {...this.props}/>
                <div className="dashboard-wrapper base-wrapper">
                    <div>
                        <h1>Личный кабинет</h1>
                    </div>
                    <div className="settings-form ui-g">
                        <div className="ui-g-12">
                            <label htmlFor="email" className="ui-g-6">Email: </label>
                            <InputText name="email" className="ui-g-6" defaultValue={currentUser ? currentUser.baseUser.email : ""} ref={node => this.emailNode = node} />
                        </div>
                        <div className="ui-g-12">
                            <label htmlFor="firstName" className="ui-g-6">Имя: </label>
                            <InputText name="firstName" className="ui-g-6" defaultValue={currentUser ? currentUser.baseUser.firstName : ""} ref={node => this.firstNameNode = node} />
                        </div>
                        <div className="ui-g-12">
                            <label htmlFor="lastName" className="ui-g-6">Фамилия: </label>
                            <InputText name="lastName" className="ui-g-6" defaultValue={currentUser ? currentUser.baseUser.lastName : ""} ref={node => this.lastNameNode = node} />
                        </div>
                        <div className="ui-g-12">
                            <label htmlFor="placeOfStudy" className="ui-g-6">Образование: </label>
                            <InputText name="placeOfStudy" className="ui-g-6" defaultValue={currentUser ? currentUser.baseUser.placeOfStudy : ""} ref={node => this.placeOfStudyNode = node} />
                        </div>
                        <div className="ui-g-12">
                            <label htmlFor="birthDate" className="ui-g-6">Дата рождения: </label>
                            <div className="ui-g-6">
                                <Calendar
                                    ref={node => this.birthDateNode = node }
                                    value={currentUser ? new Date(currentUser.baseUser.birthDate) : 0}
                                    name="birthDate"
                                    id="birthDate"
                                    showIcon="true"
                                />
                            </div>
                        </div>
                        <div className="buttons ui-g-12">
                            <Button label="Сохранить" onClick={this.handleSaveClick.bind(this)}/>
                        </div>
                    </div>
                    <ChangePasswodForm {...this.props}/>
                </div>
            </React.Fragment>

        )
    }
}