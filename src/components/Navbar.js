import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { popular, valueScore } from '../actions/index';
import { popularMovies } from '../API/API';

function Navbar() {
  const dispatch = useDispatch();
  const rating = useSelector((state) => state.scoreReducer.score);

  function setMoviesRating(event) {
    const { value } = event.target;
    dispatch(valueScore(value));
    popularMovies(1, value).then((movies) => {
      dispatch(popular(movies));
    });
  }

  console.log(rating);
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px 5px' }}>
      <div>
        <Link to="/popular">logo</Link>
      </div>
      <form>
        <input type="text" placeholder="search movie" />
        <button type="submit">search</button>
      </form>

      <Link to="/top-rated">top rated</Link>
      <Link to="/upcoming">upcoming</Link>
      <select value={rating} onChange={setMoviesRating}>
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
