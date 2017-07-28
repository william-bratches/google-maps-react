import {
  MAP_INITIALIZED,
  PLACES_INITIALIZED,
  PLACES_DATA_RECEIVED,
  GEOCODE_INITIALIZED,
  CHART_INITIALIZED,
  PLACES_SORTED
} from '../actions/services';
import createReducer from '../lib/createReducer';
import { latLng } from '../lib/dataFormatter';
const NEW_YORK = { latitude: 40.736381, longitude: -74.030559 };

const initialState = {
  placesData: [],
  placesDetails: [],
  center: NEW_YORK,
  sortDirection: 0
};

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
      placesData: action.data.results,
      originalRequest: action.data.request,
      center: latLng(action.data.request.location)
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
  },
  [PLACES_SORTED](state, action) {
    return {
      ...state,
      placesData: action.sortedPlaces,
      sortDirection: state.sortDirection ? 0 : 1
    };
  }
});
