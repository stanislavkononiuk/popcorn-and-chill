const key = process.env.REACT_APP_TMDB_API;
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`;

export default async function popularMovies() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.results;
}
