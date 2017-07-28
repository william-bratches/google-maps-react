import { initPlaces, query, getMultiplePlaceDetails } from '../lib/places';
import { initGeoCode } from '../lib/geoCode';

export const PLACES_INITIALIZED = 'PLACES_INITIALIZED';
export const MAP_INITIALIZED = 'MAP_INITIALIZED';
export const PLACES_DATA_RECEIVED = 'PLACES_DATA_RECEIVED';
export const GEOCODE_INITIALIZED = 'GEOCODE_INITIALIZED';
export const CHART_INITIALIZED = 'GEOCODE_INITIALIZED';

export default {
  initServices(props, map) {
    return dispatch => {
      // set google in state
      dispatch(mapInitialized(props.google));
      // places api
      initPlaces(props, map)
        .then(placesService => {
          dispatch(placesInitialized(placesService));
          return initGeoCode(props);
          // geocode api
        })
        .then(geoCodeService => {
          dispatch(geoCodeInitialized(geoCodeService));
        });
    };
  },
  searchPlaces(search, props) {
    return dispatch => {
      query(search, props).then(data => {
        dispatch(placesDataReceived(data));
      });
    };
  },
  fetchDetails(props) {
    return dispatch => {
      getMultiplePlaceDetails(props).then(detailData => {
        dispatch(chartInitialized(detailData));
      });
    };
  }
};

const mapInitialized = google => ({ type: MAP_INITIALIZED, google });
const placesInitialized = placesService => ({
  type: PLACES_INITIALIZED,
  placesService
});
const placesDataReceived = data => ({ type: PLACES_DATA_RECEIVED, data });
const geoCodeInitialized = geoCodeService => ({
  type: GEOCODE_INITIALIZED,
  geoCodeService
});
const chartInitialized = detailData => ({
  type: CHART_INITIALIZED,
  detailData
});
