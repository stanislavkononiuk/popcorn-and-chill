import { combineReducers } from 'redux';
import topRatedReducer from './topRated';
import upComingReducer from './upComing';
import popularReducer from './popular';
import scoreReducer from './score';

export default combineReducers({
  topRatedReducer, upComingReducer, popularReducer, scoreReducer,
});
