import * as types from '../constants/CourseTypes';

export const addCourse = (course, imagePath) => {
    return {
        type: types.ADD_COURSE,
        course: {
            ...course,
            imagePath
        }
    };
};

export const deleteCourse = id => {
    return {
        type: types.DELETE_COURSE,
        id
    };
};

export const editCourse = (id, updates) => {
    return {
        type: types.EDIT_COURSE,
        id,
        updates
    };
};

export const toggleFavorite = id => {
    return {
        type: types.TOGGLE_FAVORITE,
        id
    };
};

export const exerciseStatus = (courseId, taskId) => {
    return {
        type: types.EXERCISE_STATUS,
        courseId,
        taskId
    };
};

export const editExercise = (courseId, taskId, updates) => ({
    type: types.EDIT_EXERCISE,
    courseId,
    taskId,
    updates
});

export const searchCourses = searchText => {
    return {
        type: types.SEARCH_COURSES,
        searchText
    };
};

export const setChooseFriends = chooseFriends => {
    return {
        type: types.SET_CHOOSE_FRIENDS,
        payload: chooseFriends,
    };
};

