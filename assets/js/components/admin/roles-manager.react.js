import React from 'react';
import { InputText } from 'primereact/components/inputtext/InputText';

import { DataView } from 'primereact/components/dataview/DataView';
import RoleListItem from './role-list-item.react';

const teachers = [
    {
        id: 1,
        firstname: "Anton",
        secondname: "Bellavin",
        email: "test@test.ru",
        placeOfStudy: "ITMO University",
        image: "http://lamcdn.net/lookatme.ru/post_image-image/ANsoJegbW6iGK0A_sqOuUQ-wide.jpg",
        roles: ["Student", "Teacher", , "AuthenticatedUser"]
    },
    {
        id: 2,
        firstname: "Anton2",
        secondname: "Bellavin2",
        email: "test@test.ru",
        placeOfStudy: "ITMO University",
        image: "http://lamcdn.net/lookatme.ru/post_image-image/ANsoJegbW6iGK0A_sqOuUQ-wide.jpg",
        roles: ["ApprovedTeacher", "AuthenticatedUser"]
    }
];

const ROLES = {
    "Student": "Студент",
    "Teacher": "Учитель(неподтв.)",
    "ApprovedTeacher": "Учитель(подтв.)",
    "Admin": "Администратор",
};



export default class RolesManager extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = (e) => {
            this.dv.filter(e.target.value);
        };
    }

    componentDidMount() {
        // loadTeachers
    }

    renderItem(item) {
        return (
            <RoleListItem item={item} />
        );
    }
    renderHeader() {
        return (
            <div className="ui-g">
                <div className="ui-g-12 ui-md-12 filter-container">
                    <div>
                        <InputText placeholder="Поиск по фамилии" onKeyUp={this.handleSearch.bind(this)} className="input-search"/>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        // const { techers } = this.props;
        return (
            <div className="role-manager tab-wrapper">
                <DataView
                    ref={node => this.dv = node}
                    value={teachers}
                    filterBy="secondname"
                    itemTemplate={this.renderItem.bind(this)}
                    paginatorPosition={'both'}
                    paginator={true}
                    rows={20}
                    header={this.renderHeader()} />
            </div>
        );
    }
}
