import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { popular } from '../actions/index';
import Movie from '../components/Movie';
import popularMovies from '../API/API';
import movies from './movies';

function MoviesList() {
  const movieExtent = 'https://image.tmdb.org/t/p/w342/';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(popular(popularMovies()));
  }, []);

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
