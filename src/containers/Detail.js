import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { useParams } from 'react-router-dom';
import { movieDetails, movieExtent } from '../API/API';

function Detail() {
  const [detail, setDetail] = useState({});
  const { id: movieId } = useParams();
  useEffect(() => {
    movieDetails(movieId).then((movie) => setDetail(movie));
  }, []);

  const {
    poster_path: movieImg,
    budget,
    homepage: homePage,
    overview,
    production_companies: productionCompanies, production_countries: productionCoutries,
    release_date: releaseDate,
    revenue,
    runtime,
    spoken_languages: spokenLanguages,
    title,
    vote_average: score,
    genres,
  } = detail;

  if (!genres) return 'loading...';
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div>
          <img src={movieExtent + movieImg} alt={title} />
        </div>

        <div>
          <h2>{title}</h2>
          <p>
            {runtime}
            {' '}
            :minutes
          </p>
          <p>
            average score:
            {' '}
            {score}
          </p>
          <p>
            Revenue:
            {' '}
            { revenue > 0 ? millify(revenue) : 'not avaiable'}
          </p>
          <ul>
            {genres.map((genre) => <li key={genre.name}>{genre.name}</li>)}
          </ul>
          <ul>
            <p>spoken languages: </p>
            {spokenLanguages.map((lang) => <li key={lang.name}>{lang.english_name}</li>)}
          </ul>
          <ul>
            <p>production companies: </p>
            {productionCompanies.map((company) => <li key={company.name}>{company.name}</li>)}
          </ul>
          <ul>
            <p>production countries: </p>
            {productionCoutries.map((country) => <li key={country.name}>{country.name}</li>)}
          </ul>
          <p>{releaseDate}</p>
          <p>
            {' '}
            Budget:
            {millify(budget)}
          </p>
          <p><a href={homePage} target="_blank" rel="noreferrer">homepage</a></p>

        </div>
      </div>
      <div>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Detail;
