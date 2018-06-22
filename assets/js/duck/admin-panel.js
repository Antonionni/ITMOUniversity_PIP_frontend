import { handleActions, createAction } from 'redux-actions';
import * as api from '../api';

const LOADED_ALL_USERS = "LOADED_ALL_USERS";
const LOADED_TEACHERS = "LOADED_TEACHERS";
const APPROVED_TEACHER = "APPROVED_TEACHER";
const SAVED_USER_ROLES = "SAVED_USER_ROLES";
// actions

export const loadedAllUsers = createAction(LOADED_ALL_USERS);
export const loadedTeachers = createAction(LOADED_TEACHERS);
export const approvedTeacher = createAction(APPROVED_TEACHER);
export const savedUserRoles = createAction(SAVED_USER_ROLES);

const initialState = {
    users: [],
    teachers: []
};

export const loasUsers = (data) => {
    return (dispatch) => {
        api.signIn(data).done((data, textStatus, response) => {
            dispatch(userSignIn(true));
        }).fail((error) => {
            dispatch(userSignIn(false));
        });
    };
};

export const signUp = (data) => {
    return (dispatch) => {
        api.signUp(data).done((state) => {
            dispatch(userSignUp(state));
        });
    };
};


export const logout = () => {
    return (dispatch) => {
        api.logout().then((state) => {
            dispatch(userLogout(state));
        });
    };
};

export const isSessionExist = () => {
    return (dispatch) => {
        const result = api.isSessionEnable();
        dispatch(checkSession(result));
    }
};

export default handleActions({
    [USER_SIGN_IN]: (state, { payload }) => {
        return _.assign(state, {
            isAuth: payload
        });
    },
    [USER_SIGN_UP]: (state, { payload }) => {
        return _.assign(state, {
            error: payload
        });
    },
    [USER_LOGOUT]: (state, { payload }) => {
        return _.assign(state, {
            error: payload
        });
    },
    [CHECK_SESSION]: (state, { payload }) => {
        return _.assign(state, {
            isAuth: payload
        });
    }
}, initialState);

// selectors

export const getError = ({ error }) => {
    return error;
};

export const getCurrentUser = ({ currentUser }) => {
    return currentUser;
};