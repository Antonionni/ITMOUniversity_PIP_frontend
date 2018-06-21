import _ from 'underscore';

import { URLS, SESSION_NAME } from "./constants";

export const signIn = (data) => {
    return $.ajax({
        url: URLS.signIn,
        method: "POST",
        data: data
    });
};

export const signUp = (data) => {
    return $.ajax({
        url: URLS.signUp,
        method: "POST",
        body: data
    });
};

export const logout = () => {
    return $.ajax({
        url: URLS.logout,
        method: "POST",
    });
};

export const isSessionEnable = () => {
    const cookie = document.cookie;
    return _.find(cookie.split(";"), item => item === SESSION_NAME);
};