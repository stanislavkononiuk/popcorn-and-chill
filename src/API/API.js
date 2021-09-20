const key = process.env.REACT_APP_TMDB_API;

export default async function popularMovies(page) {
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${page || 1}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  return data.results;
}
