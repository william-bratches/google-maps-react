import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './map/search';
import Map from './map/index';
import PriceRating from './visualizations/priceRating';
import WordsHoursPrice from './visualizations/wordsHoursPrice';
import DistancePrice from './visualizations/distancePrice';

const Router = () =>
  <BrowserRouter>
    <div>
      <Search />
      <Route exact path="/" component={Map} />
      <Route exact path="/priceRating" component={PriceRating} />
      <Route exact path="/wordsHoursPrice" component={WordsHoursPrice} />
      <Route exact path="/distancePrice" component={DistancePrice} />
    </div>
  </BrowserRouter>;

export default Router;
