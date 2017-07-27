import React from 'react';
import { InfoWindow } from 'google-maps-react';

const MarkerDescription = ({props}) => (
  <InfoWindow
    marker={props.markers.activeMarker}
    visible={props.markers.showingInfoWindow}>
      <div>
        <h1>{props.markers.selectedPlace.name}</h1>
      </div>
  </InfoWindow>
)

export default MarkerDescription;
