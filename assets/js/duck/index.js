import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import user from './user';
import courses from './courses';

export default combineReducers({
    router: routerReducer,
    user,
    courses
});