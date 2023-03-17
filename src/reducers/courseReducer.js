import { SET_CHOOSE_FRIENDS_DATA ,SET_CHOOSE_FRIENDS, ADD_COURSE, EDIT_COURSE, DELETE_COURSE, TOGGLE_FAVORITE, SEARCH_COURSES, SET_COURSES, EDIT_EXERCISE, EXERCISE_STATUS, SET_CHOOSE_EMOJI } from '../constants/CourseTypes';
import { v4 as uuidv4 } from 'uuid';


export const chooseFriendsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CHOOSE_FRIENDS:
      localStorage.setItem('chooseFriends', JSON.stringify(action.chooseFriends));
      return action.chooseFriends;
      case SET_CHOOSE_FRIENDS_DATA:
      return action.chooseFriends || state; 
    default:
      return state;
  }
};
export const chooseEmojiReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CHOOSE_EMOJI:
      console.log(action);
      return action.chooseEmoji;
    default:
      return state;
  }
};


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

    case EDIT_EXERCISE:
      const updatedExercises = state.map(course =>
        course.id === action.courseId ?
          {
            ...course, tasks: course.tasks.map(task => task.id === action.taskId ?
              { ...task, ...action.updates } : task)
          } : course
      );
      localStorage.setItem('coursesState', JSON.stringify(updatedExercises));
      return updatedExercises;

    case TOGGLE_FAVORITE:
      const toggledState = state.map(course =>
        course.id === action.id ? { ...course, favorite: !course.favorite } : course
      );
      localStorage.setItem('coursesState', JSON.stringify(toggledState));
      return toggledState;

    case EXERCISE_STATUS:
      const updatedTasks = state.map(course =>
        course.id === action.courseId ? {
          ...course,
          tasks: course.tasks.map(task => task.id === action.taskId ? { ...task, completed: !task.completed } : task)
        } : course
      );
      localStorage.setItem('coursesState', JSON.stringify(updatedTasks));
      return updatedTasks;

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