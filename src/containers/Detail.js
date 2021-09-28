import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieDetails } from '../API/API';

function Detail() {
  const [detail, setDetail] = useState({});
  const { id: movieId } = useParams();
  useEffect(() => {
    movieDetails(movieId).then((movie) => setDetail(movie));
  }, []);
  console.log(detail);
  console.log(process.env.REACT_APP_TMDB_API);
  return (
    <div>
      detail/
      {movieId}
    </div>
  );
}

export default Detail;
