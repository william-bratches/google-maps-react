import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { get } from 'lodash';
import { Marker } from 'google-maps-react';
import PlacesTable from './placesTable';
import services from '../../actions/services';
import markers from '../../actions/markers';

class PlacesList extends Component {
  dispatchSort(type) {
    this.props.sortPlaces(this.props, type);
  }
  triggerRandomMarker() {
    const places = get(this.props, 'services.placesData', []);
    const randomPlace = places[Math.floor(Math.random() * places.length)];
    this.props.markerClick(
      {},
      <Marker
        key={randomPlace.id}
        title={randomPlace.name}
        data={randomPlace}
        position={randomPlace.geometry.location}
      />
    );
  }
  render() {
    const places = get(this.props, 'services.placesData', []);
    return (
      <div>
        <div className="container">
          <div
            onClick={() => this.dispatchSort('rating')}
            className="viz-button"
          >
            Sort ★
          </div>
          <div
            onClick={() => this.dispatchSort('price_level')}
            className="viz-button"
          >
            Sort $
          </div>
          <div onClick={this.triggerRandomMarker} className="viz-button">
            Random
          </div>
        </div>
        <PlacesTable places={places} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return Object.assign({}, state);
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...services, ...markers }, dispatch);
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PlacesList)
);
