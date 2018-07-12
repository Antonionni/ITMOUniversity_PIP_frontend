import { URLS  } from "./constants";

export const signIn = (data) => {
    debugger;
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
        data: data
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
    debugger;
    return $.ajax({
        url: URLS.update,
        method: "POST",
        data: JSON.stringify(data),
        contentType: "application/json"
    });
};


export const changePassword = (data) => {
    return $.ajax({
        url: URLS.changePassword,
        method: "POST",
        data: data
    });
};