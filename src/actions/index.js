export const POPULAR = 'POPULAR';
export const SCORE = 'SCORE';

export const popular = (popular) => ({
  type: POPULAR,
  popular,
});

export const valueScore = (valueScore) => (
  {
    type: SCORE,
    valueScore,
  }
);
