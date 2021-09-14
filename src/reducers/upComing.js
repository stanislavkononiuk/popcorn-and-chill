import { UPCOMING } from '../actions/index';

const initialState = {
  movies: [],
};

export default function upComing(state = initialState, action) {
  if (action.type === UPCOMING) {
    return {
      movies: [...action.upComing],
    };
  }

  return state;
}
