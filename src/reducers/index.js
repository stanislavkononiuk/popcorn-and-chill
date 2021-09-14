import { combineReducers } from 'redux';
import topRated from './topRated';
import upComing from './upComing';
import popular from './popular';

export default combineReducers({ topRated, upComing, popular });
