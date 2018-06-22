import React from 'react';
import { Button } from "primereact/components/button/Button";
import { SelectButton } from 'primereact/components/selectbutton/SelectButton';

const OPTIONS = [
    { label: "Студент", value: "Student" },
    { label: "Учитель", value: "ApprovedTeacher" },
    { label: "Администратор", value: "Admin" },
];

export default class RoleListItem extends React.Component {
    constructor(props) {
        super(props);
        const { roles } = this.props.item;
        this.state = {
            currentRoles: roles || []
        };

        this.handleButtonClick = () => {
            const { id } = this.props.item;
            const { currentRoles } = this.state;
            console.log("id = ", id, " roles = ", currentRoles);
        };

        this.handleChangeRole = (e) => {
            this.setState({
                currentRoles: e.value
            });
        }
    }

    componentWillReceiveProps(newProps) {
        if (this.props.item !== newProps.item) {
            this.setState({
                currentRoles: newProps.item.roles
            });
        }
    }

    render() {
        const { item } = this.props;
        const { currentRoles } = this.state;
        return (
            <div className="ui-g" style={{padding: '2em', borderBottom: '1px solid #d9d9d9'}}>
                <div className="ui-g-12 ui-md-6">
                    <img src={item.image} className="image" />
                </div>
                <div className="ui-g-12 ui-md-6 car-details">
                    <div className="ui-g">
                        <div className="ui-g-6 ui-sm-6">Имя:</div>
                        <div className="ui-g-6 ui-sm-6">{item.firstname}</div>

                        <div className="ui-g-6 ui-sm-6">Фамилия:</div>
                        <div className="ui-g-6 ui-sm-6">{item.secondname}</div>

                        <div className="ui-g-6 ui-sm-6">Email:</div>
                        <div className="ui-g-6 ui-sm-6">{item.email}</div>

                        <div className="ui-g-6 ui-sm-6">Образование:</div>
                        <div className="ui-g-6 ui-sm-6">{item.placeOfStudy}</div>
                    </div>
                </div>

                <div className="roles ui-g-12 ui-md-12">
                    <SelectButton multiple={true} options={OPTIONS} value={currentRoles} onChange={this.handleChangeRole}/>
                </div>
                <div className="ui-g-12 ui-md-12">
                    <Button label="Сохранить" onClick={this.handleButtonClick}/>
                </div>
            </div>
        )
    }
}