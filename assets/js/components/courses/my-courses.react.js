import React from 'react';
import CourseItem from './course-item.react';
import Header from '../common/header.react';



export default class MyCourses extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { courseList } = this.props;
        return (
            <div className="my-courses-wrapper base-wrapper">
                <Header />
                {
                    courseList.map(course => <CourseItem {...course} />)
                }
            </div>
        )
    }
}