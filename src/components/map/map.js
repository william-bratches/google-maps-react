import React from 'react';
import Map from 'google-maps-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { withRouter } from 'react-router';
import { get } from 'lodash';
import services from '../../actions/services';
import markers from '../../actions/markers';
const NEW_YORK = { lat: 40.736381, lng: -74.030559 }
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const DEFAULT_ZOOM = 14;

class MapView extends React.Component {
  constructor(props) {
    super(props);

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick(props, marker) {
    this.props.markerClick(props, marker)
  }

  onMapClick(props) {
    if (this.props.markers.showingInfoWindow) {
      this.props.mapClick(props)
    }
  }

  render() {
    const places = get(this.props, 'services.placesData', []);
    const markerData = get(this.props, 'markers.selectedPlace.data', {});
    const priceLevel = get(markerData, 'price_level', 'Unknown');
    return (
      <Map
        google={this.props.google}
        zoom={DEFAULT_ZOOM}
        onReady={this.props.initServices}
        center={{
          lat: NEW_YORK.lat, // TODO: object destructuring is not working here.
          lng: NEW_YORK.lng,
        }}
        onClick={this.onMapClick}>

        {/* Markers */}
        <InfoWindow
          marker={this.props.markers.activeMarker}
          visible={this.props.markers.showingInfoWindow}>
            <div>
              <h1>{this.props.markers.selectedPlace.title}</h1>
              <p>{markerData.vicinity}</p>
              <p>Rating: {markerData.rating}</p>
              <p>Price Level: {priceLevel}</p>
            </div>
        </InfoWindow>

       {places.map(place =>
          <Marker
            key={place.id}
            onClick={this.onMarkerClick}
            title={place.name}
            data={place}
            position={place.geometry.location}
          />)}
      </Map>
    );
  }
}

const mapStateToProps = state => {
  return Object.assign({}, state);
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...services, ...markers }, dispatch);
};

const withGoogleState = GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY,
})(MapView);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withGoogleState));
