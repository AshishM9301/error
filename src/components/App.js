import React from 'react';
import Header from './Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import history from '../history';
import Login from './Header/Login';
import Register from './Header/Register';
import Page from './Page';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />

          <Switch>
            <Route path='/' exact component={Page} />
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
