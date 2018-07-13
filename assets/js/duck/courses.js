import { handleActions, createAction } from 'redux-actions';
import * as api from '../api';
import { push } from "react-router-redux";


//sign in
const LOAD_COURSES = "LOAD_COURSES";
const CREATE_COURSE = "CREATE_COURSE";
const UPDATE_COURSE = "UPDATE_COURSE";
const DELETE_COURSE = "DELETE_COURSE";
const START_EDIT_COURSE = "START_EDIT_COURSE";

const CREATE_PERIOD = "CREATE_PERIOD";
const UPDATE_PERIOD = "UPDATE_PERIOD";

const coursesLoaded = createAction(LOAD_COURSES);
const courseCreated = createAction(CREATE_COURSE);
const courseUpdated = createAction(UPDATE_COURSE);
const courseDeleted = createAction(DELETE_COURSE);
const courseEditorStarted = createAction(START_EDIT_COURSE);

const periodCreated = createAction(CREATE_PERIOD);
const periodUpdate = createAction(UPDATE_COURSE);

const initialState = {
    courses: [],
    isLoading: null,
    currentEditorCourse: null
};


export const loadCourses = () => {
    return (dispatch) => {
        api.loadCourses().done((responseData) => {
            dispatch(coursesLoaded(responseData));
        });
    }
};

export const createCourse = (requestData) => {
    return (dispatch) => {
        api.createCourse(requestData).done((responseData) => {
            dispatch(courseCreated(responseData.data));
        });
    }
};

export const updateCourse = (requestData) => {
    return (dispatch) => {
        api.updateCourse(requestData).done((responseData) => {
            dispatch(courseUpdated(responseData.data));
        });
    }
};

export const deleteCourse = (id) => {
    return (dispatch) => {
        api.deleteCourse(id).done((responseData) => {
            dispatch(courseDeleted(responseData));
        });
    }
};


export const createPeriod = (requestData, courseID) => {
    return (dispatch) => {
        api.createPeriod(requestData, courseID).done((responseData) => {
            dispatch(periodCreated({
                data: responseData,
                courseID
            }))
        })
    };
};


export const editCourse = (courseID) => {
    return (dispatch) => {
        dispatch(courseEditorStarted(courseID));
    };
};

export default handleActions({
    [LOAD_COURSES]: (state, { payload }) => {
        return _.assign(state, {
            courses: payload,
        });
    },
    [CREATE_COURSE]: (state, { payload }) => {
        return _.assign(state, {
            courses: [...state.courses, payload],
            currentEditorCourse: payload
        });
    },
    [UPDATE_COURSE]: (state, { payload }) => {
        return _.assign(state, {
            courses: state.courses.map(course => {
                if (course.id === payload.id) {
                    return payload;
                }
                return course;
            }),
            currentEditorCourse: payload
        });
    },
    [DELETE_COURSE]: (state, { payload }) => {
        return _.assign(state, {
            courses: state.courses.filter(course => course.id === payload),
            currentEditorCourse: payload
        });
    },
    [START_EDIT_COURSE]: (state, { payload }) => {
        return _.assign(state, {
            currentEditorCourse: _.assign({}, state.courses.find(course => course.id === payload)) || null
        });
    },
    [CREATE_PERIOD]: (state, { payload }) => {
        return _.assign(state, {
            courses: state.courses.map(course => {
                if (course.id === payload.courseID) {
                    return _.assign(course, payload.data);
                }
                return course;
            }),
            currentEditorCourse: _.assign(state.currentEditorCourse, payload.data)
        });
    }
}, initialState);

// selectors

export const getCourses = ({ courses }) => {
    return courses;
};

export const getCurrentEditorCourse = ({ currentEditorCourse }) => {
    return currentEditorCourse;
};