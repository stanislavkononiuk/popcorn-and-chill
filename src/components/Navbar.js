import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { popular, valueScore } from '../actions/index';
import { popularMovies, searchMovie } from '../API/API';
import popcorn from '../images/popcorn.png';
import Navbarcss from './Navbar.module.css';

function Navbar() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const rating = useSelector((state) => state.scoreReducer.score);

  function handleRating(event) {
    const { value } = event.target;
    if (value === 'choose a rating') return;
    dispatch(valueScore(value));
    popularMovies(1, value).then((movies) => {
      dispatch(popular(movies));
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!searchValue) return;
    searchMovie(searchValue).then((movies) => {
      dispatch(popular(movies));
    });
    setSearchValue('');
  }

  function handleSearch(event) {
    const { value } = event.target;
    setSearchValue(value);
  }
  return (
    <nav className={Navbarcss.nav}>
      <div>
        <Link to="/"><img className={Navbarcss.logo} src={popcorn} alt="logo" /></Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input value={searchValue} className={Navbarcss.search} onChange={handleSearch} type="text" placeholder="search movie" />
        <button className={Navbarcss.btn} type="submit">search</button>
      </form>
      <select value={rating} className={Navbarcss.select} onChange={handleRating}>
        <option value="choose a rating">choose a rating</option>
        <option value={9}>9+</option>
        <option value={8}>8+</option>
        <option value={7}>7+</option>
        <option value={6}>6+</option>
        <option value={5}>5+</option>
        <option value={4}>4+</option>
        <option value={3}>3+</option>
        <option value={2}>2+</option>
        <option value={1}>1+</option>
      </select>
    </nav>
  );
}

export default Navbar;
