export const POPULAR = 'POPULAR';
export const UPCOMING = 'UPCOMING';
export const TOP_RATED = 'TOP_RATED';
export const SCORE = 'SCORE';

export function nextPage(topRated) {
  return {
    type: TOP_RATED,
    topRated,
  };
}

export function upComing(upComing) {
  return {
    type: UPCOMING,
    upComing,
  };
}

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
