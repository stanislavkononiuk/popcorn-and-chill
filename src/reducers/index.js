import { combineReducers } from 'redux';
import topRatedReducer from './topRated';
import upComingReducer from './upComing';
import popularReducer from './popular';

export default combineReducers({ topRatedReducer, upComingReducer, popularReducer });
