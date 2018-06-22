import React from 'react';
import { TabView,TabPanel } from 'primereact/components/tabview/TabView';

import AcceptTeacher from './accept-teacher.react';
import CourseManager from './course-manager.react';
import RolesManager from './roles-manager.react';

import Header from '../common/header.react';

export default class AdminPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="admin-panel-wrapper">
                <Header user={"admin"}/>
                <TabView>
                    <TabPanel header="Запросы регистрации">
                        <AcceptTeacher />
                    </TabPanel>
                    <TabPanel header="Менеджер ролей">
                        <RolesManager />
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}