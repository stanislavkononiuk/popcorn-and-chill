import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Detail from '../containers/Detail';

import Navbar from './Navbar';
import MoviesList from '../containers/MovieList';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route path="/" component={MoviesList} exact />
      <Route path="/detail/:id" component={Detail} exact />
    </Switch>
  </>
);

export default App;
