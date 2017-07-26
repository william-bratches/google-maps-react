import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './map/search';
import Map from './map/index';

const Router = () =>
  <BrowserRouter>
    <div>
      <Search />
      <Route exact path="/" component={Map} />
    </div>
  </BrowserRouter>;

export default Router;
