import React from 'react';
import Map from 'google-maps-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { withRouter } from 'react-router';
import { get } from 'lodash';
import services from '../../actions/services';
import markers from '../../actions/markers';
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const DEFAULT_ZOOM = 14;

class MapView extends React.Component {
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
          lat: this.props.services.center.latitude, // object destructuring does not work here..
          lng: this.props.services.center.longitude
        }}
        onClick={this.props.mapClick}
      >
        {/* Marker Description */}
        <InfoWindow
          marker={this.props.markers.activeMarker}
          visible={this.props.markers.showingInfoWindow}
        >
          <div>
            <h1>
              {this.props.markers.selectedPlace.title}
            </h1>
            <p>
              {markerData.vicinity}
            </p>
            <p>
              Rating: {markerData.rating}
            </p>
            <p>
              Price Level: {priceLevel}
            </p>
          </div>
        </InfoWindow>

        {/* Markers */}
        {places.map(place =>
          <Marker
            key={place.id}
            onClick={this.props.markerClick}
            title={place.name}
            data={place}
            position={place.geometry.location}
          />
        )}
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
  apiKey: GOOGLE_API_KEY
})(MapView);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(withGoogleState)
);
