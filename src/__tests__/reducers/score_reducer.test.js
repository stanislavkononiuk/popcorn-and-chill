import scoreReducer from '../../reducers/score';
import { SCORE } from '../../actions';

describe('InitialState', () => {
  test('is correct', () => {
    const action = { type: 'dummy_action' };
    const initialState = {
      score: '',
    };
    expect(scoreReducer(undefined, action)).toEqual(initialState);
  });
});

describe('popularReducer', () => {
  test('return the correct state', () => {
    const action = { type: SCORE, valueScore: 6 };
    const expectedState = {
      score: action.valueScore,
    };
    expect(scoreReducer(undefined, action)).toEqual(expectedState);
  });
});

describe('popularReducer', () => {
  test('expect returned state to not equal expected state', () => {
    const action = { type: SCORE, valueScore: 5 };
    const expectedState = 4;
    expect(scoreReducer(undefined, action)).not.toEqual(expectedState);
  });
});
