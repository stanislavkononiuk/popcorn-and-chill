import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { useParams } from 'react-router-dom';
import { movieDetails, movieExtent } from '../API/API';
import generic from '../images/generic.jpg';
import DetailsCSS from './Details.module.css';

const Detail = () => {
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
    production_companies: productionCompanies,
    production_countries: productionCoutries,
    release_date: releaseDate,
    revenue,
    runtime,
    spoken_languages: spokenLanguages,
    title,
    vote_average: score,
    genres,
  } = detail;

  if (!genres) return 'loading info...';
  return (
    <div className={DetailsCSS.wraper}>
      <div>
        <div>
          <img
            className={DetailsCSS.poster}
            src={movieImg ? movieExtent + movieImg : generic}
            alt={title}
          />
        </div>
        <div>
          <h2 style={{ textAlign: 'center', padding: '1px 3px' }}>{title}</h2>
          <p className={DetailsCSS.overview}>{overview}</p>
        </div>
        <div className={DetailsCSS.detailsWrapper}>
          <div className={DetailsCSS.infoWraper}>
            <p>
              duration:
              {' '}
              {}
              {runtime}
              {' '}
              minutes
            </p>
            <p>
              average score:
              {score}
            </p>
            <p>
              Revenue:
              {revenue > 0 ? millify(revenue) : 'not available'}
            </p>
          </div>
          <div className={DetailsCSS.infoWraper}>
            <p>Genres: </p>
            <ul>
              {genres.map((genre) => (
                <li key={genre.name}>{genre.name}</li>
              ))}
            </ul>
          </div>
          <div className={DetailsCSS.infoWraper}>
            <p>spoken languages: </p>
            <ul>
              {spokenLanguages.map((lang) => (
                <li key={lang.name}>{lang.english_name}</li>
              ))}
            </ul>
          </div>
          <div className={DetailsCSS.infoWraper}>
            <p>production companies: </p>
            <ul>
              {productionCompanies.map((company) => (
                <li key={company.name}>{company.name}</li>
              ))}
            </ul>
          </div>
          <div className={DetailsCSS.infoWraper}>
            <p>production countries: </p>
            <ul>
              {productionCoutries.map((country) => (
                <li key={country.name}>{country.name}</li>
              ))}
            </ul>
          </div>
          <div className={DetailsCSS.infoWraper}>
            <p>Release Date:</p>
            <p>{releaseDate}</p>
            <p>
              {' '}
              Budget:
              {millify(budget)}
            </p>
            <p>homepage:</p>
            <p>
              <a href={homePage} target="_blank" rel="noreferrer">
                {title}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
