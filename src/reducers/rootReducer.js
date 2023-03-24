import { combineReducers } from 'redux';
import coursesReducer from './courseReducer';
import { chooseFriendsReducer, chooseEmojiReducer, chooseAddressReducer, accessTokenLoginReducer } from './courseReducer';

const rootReducer = combineReducers({
  courses: coursesReducer,
  chooseFriends: chooseFriendsReducer,
  chooseEmoji: chooseEmojiReducer,
  chooseAddress : chooseAddressReducer,
  accessToken: accessTokenLoginReducer
});

export default rootReducer;