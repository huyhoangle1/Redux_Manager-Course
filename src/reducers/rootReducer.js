import { combineReducers } from 'redux';
import coursesReducer from './courseReducer';
import { chooseFriendsReducer, chooseEmojiReducer } from './courseReducer';

const rootReducer = combineReducers({
  courses: coursesReducer,
  chooseFriends: chooseFriendsReducer,
  chooseEmoji: chooseEmojiReducer
});

export default rootReducer;