import { combineReducers } from 'redux';
import coursesReducer from './courseReducer';

const rootReducer = combineReducers({
  courses: coursesReducer
});

export default rootReducer;