const key = process.env.REACT_APP_TMDB_API;
export const movieExtent = 'https://image.tmdb.org/t/p/w342/';
export async function popularMovies(page) {
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${page || 1}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  return data.results;
}

export async function movieDetails(id) {
  const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}
