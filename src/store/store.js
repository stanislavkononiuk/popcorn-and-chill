import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';

const initialState = {};

const middleware = [thunk];

export default createStore(reducer, initialState,
  composeWithDevTools(applyMiddleware(...middleware)));
