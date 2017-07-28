import React from 'react';
import PlacesRow from './placesRow';

const PlacesTable = ({ places }) =>
  <div>
    <table>
      <tbody>
        {places.map(place => <PlacesRow key={place.id} place={place} />)}
      </tbody>
    </table>
  </div>;

export default PlacesTable;
