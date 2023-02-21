import { ADD_COURSE, EDIT_COURSE, DELETE_COURSE, TOGGLE_FAVORITE, SEARCH_COURSES  } from '../constants/CourseTypes';
  import { v4 as uuidv4 } from 'uuid';
  import coursesData from '../data/course.json';
  
  const coursesReducer = (state = coursesData.courses, action) => {
    switch (action.type) {
      case ADD_COURSE:
        const newCourse = {
          id: uuidv4(),
          ...action.course
        };
        return [...state, newCourse];
      case DELETE_COURSE:
        return state.filter(course => course.id !== action.id);
      case EDIT_COURSE:
        return state.map(course =>
          course.id === action.id ? { ...course, ...action.updates } : course
        );
      case TOGGLE_FAVORITE:
        return state.map(course =>
          course.id === action.id ? { ...course, favorite: !course.favorite } : course
        );
      case SEARCH_COURSES:
        if (action.searchText === '') {
          return coursesData.courses;
        }
        const searchTextLower = action.searchText.toLowerCase();
        return coursesData.courses.filter(course =>
          course.title.toLowerCase().includes(searchTextLower) ||
          course.category.toLowerCase().includes(searchTextLower) ||
          course.description.toLowerCase().includes(searchTextLower)
        );
      default:
        return state;
    }
  };
  
  export default coursesReducer;