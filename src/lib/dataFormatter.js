import haversineDistance from 'geodetic-haversine-distance';

import { get } from 'lodash';

const priceRating = places => {
  return places
    .filter(place => {
      return place.price_level;
    })
    .map(fplace => {
      return {
        x: fplace.price_level,
        y: fplace.rating
      };
    });
};

const wordsHoursPrice = places => {
  return places
    .filter(place => {
      return place.price_level;
    })
    .map(fplace => {
      return {
        x: fplace.hoursOpen,
        y: fplace.price_level,
        amount: fplace.name.split(' ').length
      };
    });
};

const latLng = googleLatLng => {
  return {
    latitude: googleLatLng.lat(),
    longitude: googleLatLng.lng()
  };
};

const distancePrice = (places, props) => {
  const originalLatLng = get(props, 'services.originalRequest.location');
  const filteredPlaces = places.filter(place => {
    return place.price_level;
  });

  const distances = filteredPlaces.map(place => {
    return {
      x: place.name,
      y: haversineDistance(
        latLng(place.geometry.location),
        latLng(originalLatLng)
      )
    };
  });

  const prices = filteredPlaces.map(place => {
    return {
      x: place.name,
      y: place.price_level * 15 // for scale
    };
  });

  return { distances, prices };
};

export { priceRating, wordsHoursPrice, distancePrice };
