import { geoCode } from './geoCode';
import { get, extend } from 'lodash';

// TODO: refactor so services do not live in state
const requestDefaults = {
  radius: '500',
  type: ['restaurant']
};

const initPlaces = (props, map) => {
  const { google } = props;
  const service = new google.maps.places.PlacesService(map);
  return Promise.resolve(service);
};

const nearbySearch = (userRequest, service) => {
  const request = extend(userRequest, requestDefaults);
  return new Promise((resolve, reject) => {
    service.nearbySearch(request, (results, status) => {
      if (status !== 'OK') reject(status);
      return resolve({ results, request });
    });
  });
};

const query = (search, props) => {
  const { placesService } = props.services;
  const { radius } = search;
  // address -> latLng
  return geoCode(search.address, props).then(latLng => {
    const request = { location: latLng, radius, requestDefaults };
    return nearbySearch(request, placesService);
  });
};

/*
  The free tier of the google api prevents a large query ops like this -
  will return error OVER_QUERY_LIMIT. Thus, I was unable to actually test
  this feature. Instead, I'm going to return random opening hours.
*/

// const getSinglePlaceDetails = (request, service) => {
//   return new Promise((resolve, reject) => {
//     return service.getDetails(request, (results, status) => {
//       if (status !== 'OK') reject(status);
//       return resolve(results);
//     });
//   });
// };

// Google API does not return opening hours details on place search
// Need to perform a "Detail" lookup for every entry in places array
const getMultiplePlaceDetails = props => {
  // const { placesService } = props.services;
  const places = get(props, 'services.placesData');
  // const promises = places.map(place => {
  //   const request = { placeId: place.id };
  //   return getSinglePlaceDetails(request, placesService);
  // });
  //return Promise.all(promises);
  const withRandomHours = places.map(place => {
    return extend(place, { hoursOpen: Math.floor(Math.random() * 100) });
  });

  return Promise.resolve(withRandomHours);
};

export { initPlaces, query, getMultiplePlaceDetails };
