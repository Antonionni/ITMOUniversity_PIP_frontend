import { handleActions, createAction } from 'redux-actions';
import * as api from '../api';
import _ from "underscore";

const USER_SIGN_IN = "USER_SIGN_IN";
const USER_SIGN_UP = "USER_SIGN_UP";
const USER_LOGOUT = "USER_LOGOUT";
const CHECK_SESSION = "CHECK_SESSION";

// actions

export const userSignUp = createAction(USER_SIGN_UP);
export const userSignIn = createAction(USER_SIGN_IN);
export const userLogout = createAction(USER_LOGOUT);
export const checkSession = createAction(CHECK_SESSION);

const initialState = {
    currentUser: null,
    isAuth: false
};

export const signIn = (data) => {
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