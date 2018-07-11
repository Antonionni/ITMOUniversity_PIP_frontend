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
        body: JSON.stringify(data)
    });
};

export const logout = () => {
    return $.ajax({
        url: URLS.logout,
        method: "POST",
    });
};

export const checkUser = () => {
    return $.ajax({
        url: URLS.checkUser
    });
};

export const updateUser = (data) => {
    return $.ajax({
        url: URLS.update,
        method: "POST",
        data: JSON.stringify(data),
        contentType: "application/json"
    });
}