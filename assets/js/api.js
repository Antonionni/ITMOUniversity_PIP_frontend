import { URLS } from "./constants";

// user
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
        data: data
    });
};

export const logout = () => {
    return $.ajax({
        url: URLS.logout,
        method: "GET"
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
};


export const changePassword = (data) => {
    return $.ajax({
        url: URLS.changePassword,
        method: "POST",
        data: data
    });
};

// courses

export const loadCourses = () => {
    return $.ajax({
        url: URLS.loadCourses,
        method: "GET"
    });
};

export const getCourse = (id) => {
    return $.ajax({
        url: `${URLS.getCourse}${id}`,
        method: "GET"
    })
};

export const createCourse = (data) => {
    return $.ajax({
        url: URLS.createCourse,
        method: "POST",
        data: JSON.stringify(data),
        contentType: "application/json"
    });
};

export const updateCourse = (data) => {
    return $.ajax({
        url: URLS.createCourse,
        method: "POST",
        data: JSON.stringify(data),
        contentType: "application/json"
    });
};

export const deleteCourse = (id) => {
    return $.ajax({
        url: `${URLS.deleteCourse}${id}`,
        method: "POST"
    });
};

export const createPeriod = (data, courseID) => {
    return $.ajax({
        url: `${URLS.createPeriod}${courseID}`,
        method: "POST",
        data: JSON.stringify(data),
        contentType: "application/json"
    })
};

export const updatePeriod = (data, courseID) => {
    return $.ajax({
        url: `${URLS.updatePeriod}${courseID}`,
        method: "POST",
        data: JSON.stringify(data),
        contentType: "application/json"
    })
};