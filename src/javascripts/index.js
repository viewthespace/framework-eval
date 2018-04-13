import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

import Home from './routes/Home';
import UserEdit from './routes/UserEdit';

const App = props => (
  <BrowserRouter>
    <div>
      <Route path="/" component={Home} />
      <Route path="/user/:id/edit" component={UserEdit} />
    </div>
  </BrowserRouter>
);

render(<App />, document.querySelector('#app'));
