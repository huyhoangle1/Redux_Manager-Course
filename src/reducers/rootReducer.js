import { combineReducers } from 'redux';
import coursesReducer from './courseReducer';
import { chooseFriendsReducer } from './courseReducer';

const rootReducer = combineReducers({
  courses: coursesReducer,
  chooseFriends: chooseFriendsReducer,
});

export default rootReducer;