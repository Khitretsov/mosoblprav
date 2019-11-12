import React from 'react';

import { Switch, Route, Link } from "react-router-dom";

import LoginPage from './loginPage';
import ProfilePage from './profilePage';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={LoginPage} />
      <Route path='/profile' component={ProfilePage} />
      {/* <Route path='/loginPage' component={LoginPage} /> */}
    </Switch>

  );
}

export default App;
