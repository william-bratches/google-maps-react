import { MARKER_CLICKED, MAP_CLICKED } from '../actions/markers';
import createReducer from '../lib/createReducer';

const initialState = {
  selectedPlace: { title: '' },
  activeMarker: {},
  showingInfoWindow: false,
};

export default createReducer(initialState, {
  [MARKER_CLICKED](state, action) {
    return {
      ...state,
      selectedPlace: action.marker.props,
      activeMarker: action.marker.marker,
      showingInfoWindow: true,
    }
  },
  [MAP_CLICKED](state, action) {
    return {
      ...state,
      selectedPlace: { title: '' },
      activeMarker: null,
      showingInfoWindow: false,
    }
  }
});
