import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Router = () =>
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Map} />
    </div>
  </BrowserRouter>;

export default Router;
