import { init } from '../lib/places';

export const PLACES_INITIALIZED = 'PLACES_INITIALIZED';
export const MAP_INITIALIZED = 'MAP_INITIALIZED';

export default {
  initServices(props, map) {
    return dispatch => {
      init(props, map).then(placesService => {
        dispatch(placesInitialized(placesService));
      })
    };
  },
  searchPlaces(props) {
    console.log(props);
  }
};

const placesInitialized = (placesService) => ({ type: PLACES_INITIALIZED, placesService  });
