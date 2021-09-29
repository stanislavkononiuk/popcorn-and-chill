import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Popular from '../containers/Popular';
import Detail from '../containers/Detail';

import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Popular} exact />
        <Route path="/detail/:id" component={Detail} exact />
      </Switch>
    </>
  );
}

export default App;
