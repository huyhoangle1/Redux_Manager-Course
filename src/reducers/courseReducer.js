import { ADD_COURSE, EDIT_COURSE, DELETE_COURSE, TOGGLE_FAVORITE, SEARCH_COURSES, SET_COURSES, EXERCISE_STATUS  } from '../constants/CourseTypes';
  import { v4 as uuidv4 } from 'uuid';
  
  const coursesReducer = (state = [], action) => {
    switch (action.type) {
      case ADD_COURSE:
        const newCourse = {
          id: uuidv4(),
          ...action.course
        };
        const newState = [...state, newCourse];
        localStorage.setItem('coursesState', JSON.stringify(newState));
        return newState;
      case DELETE_COURSE:
        const filteredState = state.filter(course => course.id !== action.id);
        localStorage.setItem('coursesState', JSON.stringify(filteredState));
        return filteredState;
      case EDIT_COURSE:
        const updatedState = state.map(course =>
          course.id === action.id ? { ...course, ...action.updates } : course
        );
        localStorage.setItem('coursesState', JSON.stringify(updatedState));
        return updatedState;
      case TOGGLE_FAVORITE:
        const toggledState = state.map(course =>
          course.id === action.id ? { ...course, favorite: !course.favorite } : course
        );
        localStorage.setItem('coursesState', JSON.stringify(toggledState));
        return toggledState;
      
      case EXERCISE_STATUS:
        const dataState = JSON.parse(localStorage.getItem('coursesState'));
        console.log(dataState);
        const data = dataState ? dataState : [];
        console.log(state.tasks);
        console.log(action);
        const exerciseStatus = data.tasks.map(course =>
          course.id === action.id ? { ...course, completed: !course.completed } : course
        );
        localStorage.setItem('coursesState', JSON.stringify(exerciseStatus));
        return exerciseStatus; 

      case SEARCH_COURSES:
        const storedState = JSON.parse(localStorage.getItem('coursesState'));
        const courses = storedState ? storedState : [];
        if (action.searchText === '') {
          return courses;
        }
        const searchTextLower = action.searchText.toLowerCase();
        return courses.filter(course =>
          course.title.toLowerCase().includes(searchTextLower) ||
          course.category.toLowerCase().includes(searchTextLower) ||
          course.description.toLowerCase().includes(searchTextLower)
      );
      case SET_COURSES:
        return action.courses || state; // trả về courses được lưu trữ trong action nếu nó khác null hoặc undefined, ngược lại trả về state hiện tại
      default:
        return state;
    }
  };
  
  export default coursesReducer;