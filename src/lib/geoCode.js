const initGeoCode = props => {
  const { google } = props;
  const service = new google.maps.Geocoder();
  return Promise.resolve(service);
};

const geoCode = (address, props) => {
  const { geoCodeService } = props.services;
  return new Promise((resolve, reject) => {
    geoCodeService.geocode({ address }, (results, status) => {
      if (status !== 'OK') reject(status);
      return resolve(results[0].geometry.location);
    });
  });
};

export { initGeoCode, geoCode };
