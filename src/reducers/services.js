import { PLACES_INITIALIZED } from '../actions/services';
import createReducer from '../lib/createReducer';

const initialState = { placesService: {} };

export default createReducer(initialState, {
  [PLACES_INITIALIZED](state, action) {
    return {
      ...state,
      placesService: action.placesService,
    };
  },
});
