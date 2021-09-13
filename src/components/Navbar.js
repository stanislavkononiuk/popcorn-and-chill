import React from 'react';

function Navbar() {
  return (
    <nav>
      <div>logo</div>
      <form>
        <input type="text" placeholder="search movie" />
        <button type="submit">search</button>
      </form>
    </nav>
  );
}

export default Navbar;
