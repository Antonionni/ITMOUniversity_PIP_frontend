import React from 'react';

const TEMPLATE_COURSES = [
    {
        title: "Химия",
        url: "http://vchemraznica.ru/wp-content/uploads/2017/02/hiim605.jpg"
    },
    {
        title: "Физика",
        url: "http://ls.msk.ru/pic/%D0%9F%D1%80%D0%B5%D0%B4%D0%BC%D0%B5%D1%82%D1%8B/physics.jpg"
    },
    {
        title: "Математика",
        url: "http://baltnews.ee/images/101641/23/1016412325.jpg"
    }
]
export default class CourseList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { courseList } = this.props;
        return (
            <div className="course-wrapper">
                <h2>Наши курсы</h2>
                <div className="course-list">
                    {
                        TEMPLATE_COURSES.map((item, index) => {
                            return (
                                <div className="course" key={`index-${index}`}>
                                    <img src={item.url} alt=""/>
                                    <div className="title">{item.title}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        );
    }
}