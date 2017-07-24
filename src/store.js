import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers/root';
import thunk from 'redux-thunk';

const middleware = [thunk];

const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

export default store;
