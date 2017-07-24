import React, { Component } from 'react';
import Router from './router';
import store from '../store';
import { Provider } from 'react-redux';

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default Root;
