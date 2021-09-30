import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { popular } from '../actions';
import Movie from '../components/Movie';
import { popularMovies, movieExtent } from '../API/API';

function MoviesList() {
  const [nextPage, setNextPage] = useState(2);
  const [previousPage, setPreviousPage] = useState(0);
  const rating = useSelector((state) => state.scoreReducer.score);
  const dispatch = useDispatch();
  const popMovies = useSelector((state) => state.popularReducer.movies);

  useEffect(() => {
    popularMovies().then((movies) => {
      dispatch(popular(movies));
    });
  }, [dispatch]);

  function moviesNextPage() {
    popularMovies(nextPage, rating).then((movies) => {
      dispatch(popular(movies));
    });
    setNextPage(nextPage + 1);
    setPreviousPage(previousPage + 1);
  }

  function moviesPreviousPage() {
    popularMovies(previousPage, rating).then((movies) => {
      dispatch(popular(movies));
    });
    setNextPage(nextPage - 1);
    setPreviousPage(previousPage - 1);
  }
  if (!popMovies) return 'loading...';
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {popMovies.map((movie) => (
          <Link to={`detail/${movie.id}`} key={movie.id}>
            <Movie
              title={movie.title}
              score={movie.vote_average}
              imageScr={movieExtent + movie.poster_path}
            />
          </Link>
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
