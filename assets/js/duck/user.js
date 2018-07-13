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

const USER_CHANGE_PASSWORD = "USER_CHANGE_PASSWORD";
const USER_CHANGE_PASSWORD_FAILED = "USER_CHANGE_PASSWORD_FAILED";

// actions
export const userSignInSucceeded = createAction(USER_SIGN_IN_SUCCEEDED);
export const userSignInFailed = createAction(USER_SIGN_IN_FAILED);

export const userChecked = createAction(CHECK_USER);

export const userSignUp = createAction(USER_SIGN_UP);
export const userLogout = createAction(USER_LOGOUT);

export const userUpdate = createAction(USER_UPDATE);
export const userUpdateFailed = createAction(USER_UPDATE_FAILED);

export const userChangePassword = createAction(USER_CHANGE_PASSWORD);
export const userChangePasswordFailed = createAction(USER_CHANGE_PASSWORD_FAILED);

const initialState = {
    currentUser: null,
    error: null,
    isAuth: null
};



export const signIn = (requestData) => {
    return (dispatch) => {
        api.signIn(requestData).done(() => {
            dispatch(userSignInSucceeded());
            dispatch(push("/"));
        }).fail(() => {
            dispatch(userSignInFailed());
        });
    };
};

export const checkUser = () => {
    return (dispatch) => {
        api.checkUser().done((responseData) => {
            dispatch(userChecked(responseData.data));
            dispatch(push("/dashboard"));
        }).fail(() => {
            dispatch(userSignInFailed());
        });
    }
};

export const signUp = (requestData) => {
    return (dispatch) => {
        api.signUp(requestData).done((responseData) => {
            dispatch(userSignUp());
            dispatch(push("/sign-in"));
        });
    };
};

export const logout = () => {
    return (dispatch) => {
        api.logout().done((state) => {
            dispatch(userLogout(state));
            dispatch(push("/"));
        });
    };
};

export const updateUser = (requestData) => {
    return (dispatch) => {
        api.updateUser(requestData).done((responseData) => {
            if (responseData.data) {
                dispatch(userUpdate(requestData));
            }
        }).fail(() => {
            dispatch(userUpdateFailed());
        })
    };
};

export const changePasswordUser = (requestData) => {
    return (dispatch) => {
        api.changePassword(requestData).done(() => {
            dispatch(userChangePassword());
        }).fail(() => {
            dispatch(userChangePasswordFailed());
        })
    };
};



export default handleActions({
    [USER_SIGN_IN_SUCCEEDED]: (state, { payload }) => {
        return _.assign(state, {
            currentUser: payload,
            isAuth: true
        });
    },
    [USER_SIGN_IN_FAILED]: (state, { payload }) => {
        return _.assign(state, {
            isAuth: false,
            error: null
        });
    },
    [CHECK_USER]: (state, { payload }) => {
        return _.assign(state, {
            currentUser: payload,
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
            currentUser: null,
            isAuth: false
        });
    },
    [USER_UPDATE]: (state, { payload }) => {
        return _.assign(state, {
            currentUser: payload
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