import React from 'react';
import MapView from './map';
import PlacesList from './placesList';

const Map = () =>
  <div class='container'>
    <div class='child-25'>
      <PlacesList />
    </div>
    <div class='child-75'>
      <MapView />
    </div>
  </div>

export default Map;
