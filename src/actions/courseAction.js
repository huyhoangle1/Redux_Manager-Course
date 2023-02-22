import * as types from '../constants/CourseTypes';

export const addCourse = course => {
return {
    type: types.ADD_COURSE,
    course
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

export const exerciseStatus = id => {
    return {
        type: types.EXERCISE_STATUS,
        id
    };
    };

export const searchCourses = searchText => {
return {
    type: types.SEARCH_COURSES,
    searchText
};
};