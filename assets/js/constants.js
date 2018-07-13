export const URLS = {
    signUp: "/signup",
    signIn: "/login",
    logout: "/logout",
    checkUser: "/profile/new",
    update: "/users/update",
    changePassword: "/accounts/password/change",
    loadCourses: "/courselist/listAll",
    getCourse: "/courses/get?id={0}",
    createCourse: "/courses/create",
    updateCourse: "/courses/update",
    deleteCourse: "/courses/delete?id=",
    createPeriod: "/courses/period/create?courseId=",
    updatePeriod: "/courses/period/update?courseId=",
};

export const PASSWORD_MESSAGES = {
    PROMT_LABEL: "Пожалуйста, введите пароль",
    WEAK_LABEL: "Простой",
    MEDIUM_LABEL: "Средний",
    STRONG_LABEL: "Сложный"
};

export const SESSION_NAME = "SESSION=";