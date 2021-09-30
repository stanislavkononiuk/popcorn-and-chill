import React from 'react';
import PropTypes from 'prop-types';
import Moviecss from './Movie.module.css';

function Movie({ imageScr, score, title }) {
  return (
    <div className={Moviecss.movieWraper} style={{ border: '1px solid red' }}>
      <img src={imageScr} alt={title} />
      <div className={Moviecss.infoWraper}>
        <h2 className={Moviecss.header}>{title}</h2>
        <p className={Moviecss.score}>
          score:
          {' '}
          {score}
        </p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  imageScr: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Movie;
