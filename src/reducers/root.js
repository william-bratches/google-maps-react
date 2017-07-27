import { combineReducers } from 'redux';
import services from './services';
import markers from './markers';

const rootReducer = combineReducers({
  markers,
  services,
});

export default rootReducer;
