const scatterPlot = places => {
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

export { scatterPlot };
