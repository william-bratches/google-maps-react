import React from 'react';
import PlacesRow from './placesRow';

const PlacesTable= ({ places }) =>
  <div>
    <table>
      <tbody>
        <th>Name</th>
        <th>Price</th>
        {places.map(place => <PlacesRow place={place} /> )}
    </tbody>
  </table>
</div>

export default PlacesTable;
