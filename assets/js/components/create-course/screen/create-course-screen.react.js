import React from 'react';
import { Button } from "primereact/components/button/Button";
import { InputTextarea } from "primereact/components/inputtextarea/InputTextarea";
import { InputText } from 'primereact/components/inputtext/InputText';
import Image from '../image.react';

import { createCourse } from '../../../duck/courses';

export default class CreateCourseScreen extends React.Component {
    constructor(props) {
        super(props);
        this.handleSaveCourse = () => {
            const { dispatch } = this.props;
            const data = {
                imageurl: this.imageNode.image,
                title: this.titleNode.inputEl.value,
                subject: this.subjectNode.textareaElement.value
            };
            debugger;
            dispatch(createCourse(data));
        };
    }

    render() {
        return (
            <div className="create-course-screen">
                <div className="create-course-form ui-g">
                    <div className="">
                        <Image ref={node => this.imageNode = node }/>
                    </div>
                    <div className="ui-g-12">
                        <label htmlFor="title" className="ui-g-6">Название курса</label>
                        <InputText name="title" className="ui-g-6" ref={node => this.titleNode = node } />
                    </div>
                    <div className="ui-g-12">
                        <label htmlFor="subject" className="ui-g-6">Описание</label>
                        <InputTextarea rows={5} cols={30} name="subject" className="ui-g-6" ref={node => this.subjectNode = node } />
                    </div>
                </div>
                <Button label="Создать курс" onClick={this.handleSaveCourse} />
            </div>
        )
    }
}
