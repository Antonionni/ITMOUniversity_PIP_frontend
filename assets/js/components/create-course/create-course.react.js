import React from 'react';
import { Tree } from 'primereact/components/tree/Tree';
import Header from '../common/header.react';
import CreteCourseScreen from './screen/create-course-screen.react';
import CoursePeriodScreen from './screen/create-period-screen.react';

const SCREEN_TYPE = {
    DESCRIPTION: 1,
    PERIOD: 2,
    LESSON: 3
};

export default class CreateCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentItem: null,
            treeData: this._getTreeStruct()
        };
        this.handleSelectItem = (e) => {
            this.setState({
                currentItem: e.selection
            })
        };

        this.renderComponent = {
            [SCREEN_TYPE.DESCRIPTION]: <CreteCourseScreen {...this.props} />,
            [SCREEN_TYPE.PERIOD]: <CoursePeriodScreen {...this.props} />
        };
    }
    _getTreeStruct() {
        return [
            {
                label: "Описание",
                data: SCREEN_TYPE.DESCRIPTION
            },
            {
                label: "Период",
                data: SCREEN_TYPE.PERIOD
            },
            {
                label: "Уроки",
                data: SCREEN_TYPE.LESSON,
                expandedIcon: "fa fa-fw fa-folder-open",
                collapsedIcon: "fa fa-fw fa-folder",
                children: []
            }
        ];
    }
    renderScreen() {
        const { currentItem } = this.state;
        return (
            <div className="screen">
                {
                    this.renderComponent[currentItem.data]
                }
            </div>
        )
    }
    renderEmpty() {
        return (
            <div className="empty">Выберете элемент для редактирования</div>
        )
    }
    render() {
        const { currentItem, treeData } = this.state;
        const { currentUser } = this.props;
        return (
            <React.Fragment>
                <Header user={currentUser ? currentUser.baseUser : null} {...this.props}/>
                <div className="create-course-wrapper base-wrapper">
                    <div className="create-course-content">
                        <h2>Создание курса</h2>
                        <div className="left-side">
                            <Tree selectionMode="single" value={treeData} selection={currentItem} selectionChange={this.handleSelectItem}></Tree>
                        </div>
                        <div className="right-side">
                            {
                                currentItem ? this.renderScreen() : this.renderEmpty()
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}