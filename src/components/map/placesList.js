// TODO: rename this, make better folder hierarchy for sub components

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { get } from 'lodash';
import PlacesTable from './placesTable';
import services from '../../actions/services';

class PlacesList extends Component {
  dispatchSort(type) {
    this.props.sortPlaces(this.props, type);
  }
  render() {
    const places = get(this.props, 'services.placesData', []);
    //onClick={this.props.sortPlaces(this.props, 'price_level')}
    return (
      <div>
        <div className="container">
          <div
            onClick={() => this.dispatchSort('price_level')}
            className="action-button"
          >
            Sort $
          </div>
          <div
            onClick={() => this.dispatchSort('rating')}
            className="action-button"
          >
            Sort ★
          </div>
          <div className="action-button">Random</div>
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
  return bindActionCreators(services, dispatch);
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PlacesList)
);
