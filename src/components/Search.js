import React from 'react';
import PropTypes from 'prop-types';
import SearchCSS from './Search.module.css';

const Search = ({ handleSubmit, searchValue, handleSearch }) => (

  <form onSubmit={handleSubmit}>
    <input
      value={searchValue}
      className={SearchCSS.search}
      onChange={handleSearch}
      type="text"
      placeholder="search movie"
    />
    <button className={SearchCSS.btn} type="submit">search</button>
  </form>
);

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default Search;
