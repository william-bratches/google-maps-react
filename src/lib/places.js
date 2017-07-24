// TODO: generate request from props
const request = {
  location: '18 Hyde Park Ave',
  radius: '500',
  types: ['restaurant']
};

const init = (mapProps, map) => {
  const { google } = mapProps;
  return Promise.resolve(new google.maps.places.PlacesService(map));
}

// places api doesn't take a radius with text search.
// geocode an address into a lat/lng for a "nearby" search instead.
const fetchPlaces = (request, props) => {
  // request will come from an action
  props.placesService.textSearch(request, function(results, status) {
    console.log(results);
  });
}

export {
  init,
  fetchPlaces,
}
