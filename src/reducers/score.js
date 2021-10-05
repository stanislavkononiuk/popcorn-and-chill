import { SCORE } from '../actions/index';

const initialState = {
  score: '',
};

export default function scoreReducer(state = initialState, action) {
  if (action.type === SCORE) {
    return {
      score: action.valueScore,
    };
  }
  return state;
}
