import React from 'react';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px 5px' }}>
      <div>logo</div>
      <form>
        <input type="text" placeholder="search movie" />
        <button type="submit">search</button>
      </form>
      <select>
        <option>Upcoming</option>
        <option>Top rated</option>
      </select>
    </nav>
  );
}

export default Navbar;
