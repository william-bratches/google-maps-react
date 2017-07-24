import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './map/search';
import MainMap from './map/map';

const Router = () =>
  <BrowserRouter>
    <div>
      <Search />
      <Route exact path="/" component={MainMap} />
    </div>
  </BrowserRouter>;

export default Router;
