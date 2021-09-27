import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MoviesList from '../containers/MoviesList';
import Upcoming from '..containers/Upcoming';
import TopRated from '..containers/TopRated';

import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={MoviesList} exact />
        <Route path="/" component={Upcoming} exact />
        <Route path="/" component={TopRated} exact />
      </Switch>
    </>
  );
}

export default App;
