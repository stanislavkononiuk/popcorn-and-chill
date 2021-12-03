import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { popular } from '../actions';
import Movie from '../components/Movie';
import { popularMovies } from '../API/API';
import MovieListCSS from './MovieList.module.css';

const MoviesList = () => {
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
  return (
    <>
      <div className={MovieListCSS.wrapper}>
        {popMovies.map((movie) => (
          <Link
            className={MovieListCSS.link}
            to={`detail/${movie.id}`}
            key={movie.id}
          >
            <Movie
              title={movie.title}
              score={movie.vote_average}
              imageScr={movie.poster_path}
            />
          </Link>
        ))}
      </div>
      <div className={MovieListCSS.btnWraper}>
        {previousPage >= 1 && (
          <button
            className={MovieListCSS.btnLeft}
            type="button"
            onClick={moviesPreviousPage}
          >
            page:
            {' '}
            {previousPage}
          </button>
        )}
        <h3 className={MovieListCSS.currentBtn}>
          current page:
          {nextPage - 1}
        </h3>
        <button
          className={MovieListCSS.btnRight}
          type="button"
          onClick={moviesNextPage}
        >
          page:
          {' '}
          {nextPage}
        </button>
      </div>
    </>
  );
};

export default MoviesList;
