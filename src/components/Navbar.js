import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
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
      <select>
        <option value={8.7}>8.7</option>
        <option value={9}>9</option>
        <option value={7.7}>7.7</option>
      </select>
    </nav>
  );
}

export default Navbar;
