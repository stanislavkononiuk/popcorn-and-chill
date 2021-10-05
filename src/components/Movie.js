import React from 'react';
import PropTypes from 'prop-types';
import MovieCSS from './Movie.module.css';

const Movie = ({ imageScr, score, title }) => (
  <div className={MovieCSS.movieWraper}>
    <img className={MovieCSS.image} src={imageScr} alt={title} />
    <div className={MovieCSS.infoWraper}>
      <h2 className={MovieCSS.header}>{title}</h2>
      <p className={MovieCSS.score}>
        score:
        {' '}
        {score}
      </p>
    </div>
  </div>
);

Movie.propTypes = {
  imageScr: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Movie;
