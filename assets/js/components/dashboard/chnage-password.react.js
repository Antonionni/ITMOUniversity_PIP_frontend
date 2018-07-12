import React from 'react';
import { Password } from 'primereact/components/password/Password';
import { Button } from 'primereact/components/button/Button';
import { changePasswordUser } from "../../duck/user";

export default class ChangePassword extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = (e) => {
            debugger;
            e.preventDefault();
            const { dispatch } = this.props;
            const data = $(this.passwordForm).serializeArray();
            dispatch(changePasswordUser(data))
        };
    }
    
    render() {
        return (
            <form ref={node => this.passwordForm = node } className="change-password-form" onSubmit={this.handleSubmit}>
                <h2>Изменить пароль</h2>
                <div className="ui-g">
                    <div className="ui-g-12">
                        <label htmlFor="password" className="ui-g-6">Новый пароль</label>
                        <Password name="password" className="ui-g-6"/>
                    </div>
                    <div className="ui-g-12">
                        <label htmlFor="repeatPassword" className="ui-g-6">Повторите пароль</label>
                        <Password name="repeatPassword" className="ui-g-6"/>
                    </div>
                    <div className="ui-g-12">
                        <Button label="Изменить" />
                    </div>
                </div>
            </form>
        )
    }
}