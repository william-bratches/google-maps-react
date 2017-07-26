import React from 'react';
import MapView from './map';
import PlacesList from './placesList';
import '../../styles/style.css';

const Map = () =>
  <div className='container'>
    <div className='child-25'>
      <PlacesList />
    </div>
    <div>
      <MapView />
    </div>
  </div>

export default Map;
