import React from 'react';

const PlacesRow = ({ place }) =>
  <tr>
    <td>{place.name}</td>
    <td>{place.rating}</td>
    <td>{place.price_level}</td>
  </tr>

export default PlacesRow;
