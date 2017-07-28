import React from 'react';
import MapView from './map';
import PlacesList from './placesList';
import Search from './search';
import VisualizationMenu from './visualizationMenu';

import '../../styles/style.css';

const Map = () =>
  <div>
    <div className="container">
      <Search />
      <VisualizationMenu />
    </div>
    <div className="container">
      <div className="child-25">
        <PlacesList />
      </div>
      <div>
        <MapView />
      </div>
    </div>
  </div>;

export default Map;
