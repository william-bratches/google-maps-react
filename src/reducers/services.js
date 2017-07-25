import { PLACES_INITIALIZED, PLACES_DATA_RECEIVED } from '../actions/services';
import createReducer from '../lib/createReducer';

const initialState = { placesService: {} };

export default createReducer(initialState, {
  [PLACES_INITIALIZED](state, action) {
    return {
      ...state,
      placesService: action.placesService,
    };
  },
  [PLACES_DATA_RECEIVED](state, action) {
    return {
      ...state,
      placesData: action.data,
    }
  }
});
