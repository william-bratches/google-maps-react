import { initPlaces, query, getMultiplePlaceDetails } from '../lib/places';
import { initGeoCode } from '../lib/geoCode';
import { sortPlaces, random } from '../lib/dataFormatter';

export const PLACES_INITIALIZED = 'PLACES_INITIALIZED';
export const MAP_INITIALIZED = 'MAP_INITIALIZED';
export const PLACES_DATA_RECEIVED = 'PLACES_DATA_RECEIVED';
export const GEOCODE_INITIALIZED = 'GEOCODE_INITIALIZED';
export const CHART_INITIALIZED = 'CHART_INITIALIZED';
export const PLACES_SORTED = 'PLACES_SORTED';
export const RANDOM_SELECTED = 'RANDOM_SELECTED';

export default {
  initServices(props, map) {
    return dispatch => {
      // set google in state
      dispatch(mapInitialized({ google: props.google, map }));
      // places api
      initPlaces(props, map)
        .then(placesService => {
          dispatch(placesInitialized(placesService));
          return initGeoCode(props);
        })
        // geocode api
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
  },
  sortPlaces(props, property) {
    return dispatch => {
      sortPlaces(props, property).then(sortedPlaces => {
        dispatch(placesSorted(sortedPlaces));
      });
    };
  },
  selectRandom(props) {
    return dispatch => {
      random(props).then(randomPlace => {
        if (randomPlace) {
          dispatch(randomSelected(randomPlace));
        }
      });
    };
  }
};

const mapInitialized = data => ({ type: MAP_INITIALIZED, data });
const randomSelected = randomPlace => ({ type: RANDOM_SELECTED, randomPlace });
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

const placesSorted = sortedPlaces => ({
  type: PLACES_SORTED,
  sortedPlaces
});
