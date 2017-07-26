import { geoCode } from './geoCode';

// TODO: refactor so services do not live in state
const requestDefaults = {
  radius: '500',
  type: ['restaurant']
};

const initPlaces = (props, map) => {
  const { google } = props;
  const service = new google.maps.places.PlacesService(map);
  return Promise.resolve(service);
}

const nearbySearch = (request, service) => {
  return new Promise((resolve, reject) => {
    service.nearbySearch(request, (results, status) => {
      if (status !== 'OK') reject(status);
      return resolve(results);
    });
  });
}

const query = (search, props) => {
  const { placesService } = props.services;
  const { radius } = search;
  // address -> latLng
  return geoCode(search.address, props).then(latLng => {
    const request = { location: latLng, radius, requestDefaults };
    return nearbySearch(request, placesService);
  });
}

export {
  initPlaces,
  query,
}
