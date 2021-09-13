import React from 'react';
import PropTypes from 'prop-types';

function Movie({ imageScr, score, title }) {
  return (
    <div>
      <img src={imageScr} alt={title} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>{title}</h2>
        <p>
          score:
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
