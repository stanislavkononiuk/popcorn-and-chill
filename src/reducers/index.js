import { combineReducers } from 'redux';
import popularReducer from './popular';
import scoreReducer from './score';

export default combineReducers({
  popularReducer, scoreReducer,
});
