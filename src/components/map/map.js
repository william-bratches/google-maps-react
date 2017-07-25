import React from 'react';
import Map from 'google-maps-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GoogleApiWrapper } from 'google-maps-react';
import { withRouter } from 'react-router';
import initServices from '../../actions/services';
const NEW_YORK = { lat: 40.736381, lng: -74.030559 }
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const DEFAULT_ZOOM = 14;

class MapView extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={DEFAULT_ZOOM}
        onReady={this.props.initServices}
        center={{
          lat: NEW_YORK.lat, // object destructuring is not working here.
          lng: NEW_YORK.lng,
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return Object.assign({}, state);
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(initServices, dispatch);
};

const withGoogleState = GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY,
})(MapView);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withGoogleState));
