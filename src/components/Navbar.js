import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { popular, valueScore } from '../actions/index';
import { popularMovies, searchMovie } from '../API/API';
import Search from './Search';
import popcorn from '../images/popcorn.png';
import NavbarCSS from './Navbar.module.css';

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const rating = useSelector((state) => state.scoreReducer.score);

  const handleRating = (event) => {
    const { value } = event.target;
    if (value === 'choose a rating') return;
    dispatch(valueScore(value));
    popularMovies(1, value).then((movies) => {
      dispatch(popular(movies));
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchValue) return;
    searchMovie(searchValue).then((movies) => {
      dispatch(popular(movies));
    });
    setSearchValue('');
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  return (
    <nav className={NavbarCSS.nav}>
      <div>
        <Link to="/"><img className={NavbarCSS.logo} src={popcorn} alt="logo" /></Link>
      </div>
      <Search
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
        searchValue={searchValue}
      />
      <select value={rating} className={NavbarCSS.select} onChange={handleRating}>
        <option value="choose a rating">choose a rating</option>
        <option value={9}>between 9 and 9.9</option>
        <option value={8}>between 8 and 8.9</option>
        <option value={7}>between 7 and 7.9</option>
        <option value={6}>between 6 and 6.9</option>
        <option value={5}>between 5 and 5.9</option>
        <option value={4}>between 4 and 4.9</option>
        <option value={3}>between 3 and 3.9</option>
        <option value={2}>between 2 and 2.9</option>
        <option value={1}>between 1 and 1.9</option>
      </select>
    </nav>
  );
};

export default Navbar;
