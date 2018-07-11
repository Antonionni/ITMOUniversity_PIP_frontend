import { handleActions, createAction } from 'redux-actions';
import * as api from '../api';
import { push } from "react-router-redux";
//sign in
const USER_SIGN_IN_SUCCEEDED = "USER_SIGN_IN_SUCCEEDED";
const USER_SIGN_IN_FAILED = "USER_SIGN_IN_FAILED";

const CHECK_USER = "CHECK_USER";

const USER_SIGN_UP = "USER_SIGN_UP";
const USER_LOGOUT = "USER_LOGOUT";

const USER_UPDATE = "USER_UPDATE"
const USER_UPDATE_FAILED = "USER_UPDATE_FAILED";

// actions
export const userSignInSucceeded = createAction(USER_SIGN_IN_SUCCEEDED);
export const userSignInFailed = createAction(USER_SIGN_IN_FAILED);

export const userChecked = createAction(CHECK_USER);

export const userSignUp = createAction(USER_SIGN_UP);
export const userLogout = createAction(USER_LOGOUT);

export const userUpdate = createAction(USER_UPDATE);
export const userUpdateFailed = createAction(USER_UPDATE_FAILED);

const initialState = {
    currentUser: null,
    error: null,
    isAuth: null
};

export const signIn = (data) => {
    return (dispatch) => {
        api.signIn(data).done((data, textStatus, response) => {
            dispatch(userSignInSucceeded(data));
        }).fail((data) => {
            debugger;
            dispatch(userSignInFailed(data));
        });
    };
};

export const checkUser = () => {
    return (dispatch) => {
        api.checkUser().done((result) => {
            dispatch(userChecked(result));
            dispatch(push("/dashboard"));
        }).fail((data) => {
            debugger;
            dispatch(userSignInFailed(data));
        });
    }
};

export const signUp = (data) => {
    return (dispatch) => {
        api.signUp(data).done((state) => {
            dispatch(userSignUp(state));
            dispatch(push("/dashboard"));
        });
    };
};


export const logout = () => {
    return (dispatch) => {
        api.logout().done((state) => {
            dispatch(userLogout(state));
        });
    };
};

export const updateUser = (data) => {
    return (dispatch) => {
        api.updateUser(data).done((data) => {
            dispatch(userUpdate(data));
        }).fail(() => {
            dispatch(userUpdateFailed());
        })
    };
}


export default handleActions({
    [USER_SIGN_IN_SUCCEEDED]: (state, { payload }) => {
        return _.assign(state, {
            currentUser: payload.data,
            isAuth: true
        });
    },
    [USER_SIGN_IN_FAILED]: (state, { payload }) => {
        return _.assign(state, {
            isAuth: false,
            error: payload
        });
    },
    [CHECK_USER]: (state, { payload }) => {
        return _.assign(state, {
            currentUser: payload.data,
            isAuth: true
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
    [USER_UPDATE]: (state, { payload }) => {
        return _.assign(state, {
            user: payload.data
        });
    },
    [USER_UPDATE_FAILED]: (state, { payload }) => {
        return _.assign(state, {
            error: 2
        });
    },


}, initialState);

// selectors

export const getError = ({ error }) => {
    return error;
};

export const getCurrentUser = ({ currentUser }) => {
    return currentUser;
};

export const getIsAuth = ({ isAuth }) => {
    return isAuth;
};