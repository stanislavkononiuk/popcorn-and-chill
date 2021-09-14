export const POPULAR = 'POPULAR';
export const UPCOMING = 'UPCOMING';
export const TOP_RATED = 'TOP_RATED';

export function topRated(topRated) {
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
    type: UPCOMING,
    popular,
  };
}
