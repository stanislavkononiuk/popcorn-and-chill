import { UPCOMING } from '../actions/index';

const initialState = {
  movies: [],
};

export default function upComingReducer(state = initialState, action) {
  if (action.type === UPCOMING) {
    return {
      movies: [...action.upComing],
    };
  }

  return state;
}
