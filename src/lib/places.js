const requestDefaults = {
  radius: '500',
  types: ['restaurant']
};

const init = (props, map) => {
  const { google } = props;
  const service = new google.maps.places.PlacesService(map);
  return Promise.resolve(service);
}

// places api doesn't take a radius with text search.
// geocode an address into a lat/lng for a "nearby" search instead.
const query = (search, props) => {
  const { placesService } = props.services;
  const request = { ...search, requestDefaults };
  return new Promise((resolve, reject) => {
    placesService.nearbySearch(request, (results, status) => {
      return resolve(results);
    });
  });
}

export {
  init,
  query,
}
