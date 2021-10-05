import popularReducer from '../../reducers/popular';
import { POPULAR } from '../../actions';

describe('InitialState', () => {
  test('is correct', () => {
    const action = { type: 'dummy_action' };
    const initialState = {
      movies: [],
    };
    expect(popularReducer(undefined, action)).toEqual(initialState);
  });
});

describe('popularReducer', () => {
  test('return the correct state', () => {
    const action = { type: POPULAR, popular: [1, 2, 4] };
    const expectedState = {
      movies: [...action.popular],
    };
    expect(popularReducer(undefined, action)).toEqual(expectedState);
  });
});

describe('popularReducer', () => {
  test('expect returned state to not equal expected state', () => {
    const action = { type: POPULAR, popular: [1, 2, 4] };
    const expectedState = [...action.popular];
    expect(popularReducer(undefined, action)).not.toEqual(expectedState);
  });
});
