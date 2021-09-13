import React from 'react';
import Movie from '../components/Movie';
import movies from './movies';

function MoviesList() {
  const movieExtent = 'https://image.tmdb.org/t/p/w342/';
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          score={movie.vote_average}
          imageScr={movieExtent + movie.poster_path}
        />
      ))}
    </div>
  );
}

export default MoviesList;
