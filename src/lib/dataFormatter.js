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
  console.log(places);
  return places
    .filter(place => {
      return place.price_level;
    })
    .map(fplace => {
      return {
        x: fplace.rating,
        y: fplace.price_level,
        amount: fplace.name.split(' ').length
      };
    });
};

export { priceRating, wordsHoursPrice };
