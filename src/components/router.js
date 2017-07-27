import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './map/search';
import Map from './map/index';
import PriceRating from './visualizations/priceRating';

const Router = () =>
  <BrowserRouter>
    <div>
      <Search />
      <Route exact path="/" component={Map} />
      <Route exact path="/priceRating" component={PriceRating} />
    </div>
  </BrowserRouter>;

export default Router;
