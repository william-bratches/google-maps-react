import {
  MAP_INITIALIZED,
  PLACES_INITIALIZED,
  PLACES_DATA_RECEIVED,
  GEOCODE_INITIALIZED,
  CHART_INITIALIZED
} from '../actions/services';
import createReducer from '../lib/createReducer';

const initialState = { placesData: [], placesDetails: [] };

export default createReducer(initialState, {
  [MAP_INITIALIZED](state, action) {
    return {
      ...state,
      googleService: action.google
    };
  },
  [PLACES_INITIALIZED](state, action) {
    return {
      ...state,
      placesService: action.placesService
    };
  },
  [PLACES_DATA_RECEIVED](state, action) {
    return {
      ...state,
      placesData: action.data
    };
  },
  [GEOCODE_INITIALIZED](state, action) {
    return {
      ...state,
      geoCodeService: action.geoCodeService
    };
  },
  [CHART_INITIALIZED](state, action) {
    return {
      ...state,
      placesDetails: action.detailData
    };
  }
});
