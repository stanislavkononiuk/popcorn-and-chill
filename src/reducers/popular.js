import { POPULAR } from '../actions/index';

const initialState = {
  movies: [],
};

export default function popularReducer(state = initialState, action) {
  if (action.type === POPULAR) {
    return {
      movies: [...action.popular],
    };
  }

  return state;
}
