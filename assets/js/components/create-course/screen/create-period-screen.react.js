import React from 'react';
import { Button } from "primereact/components/button/Button";
import { Calendar } from "primereact/components/calendar/Calendar";

import { createPeriod } from '../../../duck/courses';

export default class CreatePeriodScreen extends React.Component {
    constructor(props) {
        super(props);
        this.handleSavePeriod = () => {
            const { dispatch, currentEditorCourse } = this.props;
            debugger;
            const resultData = {
                startDate: new Date(this.startDateNode.inputfield.value).getTime(),
                endDate: new Date(this.endDateNode.inputfield.value).getTime()
            };
            dispatch(createPeriod(resultData));
            debugger;
        }
    }

    render() {
        const { currentEditorCourse } = this.props;
        debugger;
        return (
            <div className="create-period-screen">
                <h2>Период курса</h2>
                <div className="ui-g">
                    <div className="ui-g-12">
                        <label htmlFor="startDate" className="ui-g-6">Дата начала: </label>
                        <div className="ui-g-6">
                            <Calendar
                                ref={node => this.startDateNode = node }
                                value={currentEditorCourse && currentEditorCourse.startDate ? new Date(currentEditorCourse.startDate) : new Date(Date.now())}
                                name="startDate"
                                id="startDate"
                                showIcon="true"
                            />
                        </div>
                    </div>
                    <div className="ui-g-12">
                        <label htmlFor="endDate" className="ui-g-6">Дата окончания: </label>
                        <div className="ui-g-6">
                            <Calendar
                                ref={node => this.endDateNode = node }
                                value={currentEditorCourse && currentEditorCourse.endDate ? new Date(currentEditorCourse.endDate) : new Date(Date.now())}
                                name="endDate"
                                id="endDate"
                                showIcon="true"
                            />
                        </div>
                    </div>
                    <div className="ui-g-12">
                        <Button label="Задать период" onClick={this.handleSavePeriod} />
                    </div>
                </div>
            </div>
        )
    }
}
