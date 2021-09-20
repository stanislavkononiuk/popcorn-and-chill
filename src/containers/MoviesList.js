import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { popular } from '../actions';
import Movie from '../components/Movie';
// import movies from './movies';
import popularMovies from '../API/API';

function MoviesList() {
  const [nextPage, setNextPage] = useState(2);
  const [previousPage, setPreviousPage] = useState(0);

  const movieExtent = 'https://image.tmdb.org/t/p/w342/';
  const dispatch = useDispatch();
  const popMovies = useSelector((state) => state.popularReducer.movies);

  useEffect(() => {
    popularMovies().then((movies) => {
      dispatch(popular(movies));
    });
  }, [dispatch]);

  function moviesNextPage() {
    popularMovies(nextPage).then((movies) => {
      dispatch(popular(movies));
    });
    setNextPage(nextPage + 1);
    setPreviousPage(previousPage + 1);
  }

  function moviesPreviousPage() {
    popularMovies(previousPage).then((movies) => {
      dispatch(popular(movies));
    });
    setNextPage(nextPage - 1);
    setPreviousPage(previousPage - 1);
  }
  console.log(nextPage);
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {popMovies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            score={movie.vote_average}
            imageScr={movieExtent + movie.poster_path}
          />
        ))}
      </div>
      <div>
        {previousPage >= 1 && (
        <button type="button" onClick={moviesPreviousPage}>
          page:
          {' '}
          {previousPage}
        </button>
        )}
        <h2>
          current page:
          {nextPage - 1}
        </h2>
        <button type="button" onClick={moviesNextPage}>
          page:
          {' '}
          {nextPage}
        </button>
      </div>
    </>
  );
}

export default MoviesList;
