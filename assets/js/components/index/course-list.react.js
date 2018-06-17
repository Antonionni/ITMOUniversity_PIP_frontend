import React from 'react';


export default class CourseList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { courseList } = this.props;
        return (
            <div className="course-list">
                {
                    courseList.map(item => {
                        return (
                            <div className="course"></div>
                        )
                    })
                }
            </div>
        );
    }
}