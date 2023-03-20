import { combineReducers } from 'redux';
import coursesReducer from './courseReducer';
import { chooseFriendsReducer, chooseEmojiReducer, chooseAddressReducer } from './courseReducer';

const rootReducer = combineReducers({
  courses: coursesReducer,
  chooseFriends: chooseFriendsReducer,
  chooseEmoji: chooseEmojiReducer,
  chooseAddress : chooseAddressReducer
});

export default rootReducer;