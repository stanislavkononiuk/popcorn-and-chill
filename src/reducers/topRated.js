import { TOP_RATED } from '../actions/index';

const initialState = {
  movies: [],
};

export default function topRated(state = initialState, action) {
  if (action.type === TOP_RATED) {
    return {
      movies: [...action.topRated],
    };
  }

  return state;
}
