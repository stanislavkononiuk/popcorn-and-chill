import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Popular from '../containers/Popular';
import Upcoming from '../containers/UpComing';
import TopRated from '../containers/TopRated';
import Detail from '../containers/Detail';

import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/popular" component={Popular} exact />
        <Route path="/upcoming" component={Upcoming} exact />
        <Route path="/top-rated" component={TopRated} exact />
        <Route path="/detail/:id" component={Detail} exact />
      </Switch>
    </>
  );
}

export default App;
