import { init, query } from '../lib/places';

export const PLACES_INITIALIZED = 'PLACES_INITIALIZED';
export const MAP_INITIALIZED = 'MAP_INITIALIZED';
export const PLACES_DATA_RECEIVED = 'PLACES_DATA_RECEIVED';

export default {
  initServices(props, map) {
    return dispatch => {
      init(props, map).then(placesService => {
        dispatch(placesInitialized(placesService));
      })
    };
  },
  searchPlaces(search, props) {
    return dispatch => {
      query(search, props).then(data => {
        dispatch(placesDataReceived(data));
      })
    }
  }
};

const placesInitialized = (placesService) => ({ type: PLACES_INITIALIZED, placesService  });
const placesDataReceived = (data) => ({ type: PLACES_DATA_RECEIVED, data});
