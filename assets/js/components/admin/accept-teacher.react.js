import React from 'react';

import { InputText } from 'primereact/components/inputtext/InputText';
import { Button } from "primereact/components/button/Button";
import { DataView } from 'primereact/components/dataview/DataView';

const teachers = [
    {
        id: 1,
        firstname: "Anton",
        secondname: "Bellavin",
        email: "test@test.ru",
        placeOfStudy: "ITMO University",
        image: "http://lamcdn.net/lookatme.ru/post_image-image/ANsoJegbW6iGK0A_sqOuUQ-wide.jpg"
    },
    {
        id: 2,
        firstname: "Anton2",
        secondname: "Bellavin2",
        email: "test@test.ru",
        placeOfStudy: "ITMO University",
        image: "http://lamcdn.net/lookatme.ru/post_image-image/ANsoJegbW6iGK0A_sqOuUQ-wide.jpg"
    }
];

export default class AcceptTeacher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchWord: ""
        };
        this.handleAcceptTeacher = (id, state) => {
            console.log("teacher state = ", state, "id = ", id);
            // dispatch
        };
        this.handleSearch = (e) => {
            this.dv.filter(e.target.value);
        };
    }

    componentDidMount() {
        // loadTeachers
    }

    renderItem(item) {
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

                <div className="buttons ui-g-12 ui-md-12">
                    <Button label="Подтвердить" onClick={this.handleAcceptTeacher.bind(this, item.id, true)} />
                    <Button label="Отклонить" onClick={this.handleAcceptTeacher.bind(this, item.id, false)} />
                </div>
            </div>
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
            <div className="accept-teacher tab-wrapper">
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