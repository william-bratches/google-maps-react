import React from 'react';
import PlacesRow from './placesRow';

const PlacesTable= ({ places }) =>
  <div>
    <table>
      <tbody>
       <tr>
        <th>Name</th>
        <th>Rating</th>
        <th>Price Level</th>
      </tr>
      {places.map(place => <PlacesRow key={place.id} place={place} /> )}
    </tbody>
  </table>
</div>

export default PlacesTable;
