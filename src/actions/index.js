export const POPULAR = 'POPULAR';
export const SCORE = 'SCORE';
export const SEARCH = 'SEARCH';

export function popular(popular) {
  return {
    type: POPULAR,
    popular,
  };
}

export function valueScore(valueScore) {
  return {
    type: SCORE,
    valueScore,
  };
}
