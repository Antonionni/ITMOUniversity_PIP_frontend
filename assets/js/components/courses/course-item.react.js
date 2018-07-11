import React from 'react';
import { Button } from 'primereact/components/button/Button';

export default class CourseItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleExitCourseClick  = (id) => {
            console.log("exit course; id = ", id);
        };
        this.handlePassCourseClick = (id) => {

        };
    }

    render() {
        const { image, name, id } = this.props;
        return (
            <div className="course-item">
                <div className="image">
                    <img src={image} alt=""/>
                </div>
                <div className="name">{name}</div>
                <div className="buttons">
                    <Button label="Продолжить" onClick={this.handlePassCourseClick.bind(this, id)} />
                    <Button label="Отказаться" onClick={this.handleExitCourseClick.bind(this, id)} />
                </div>
            </div>
        )
    }
}