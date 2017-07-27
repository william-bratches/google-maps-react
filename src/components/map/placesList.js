// TODO: rename this, make better folder hierarchy for sub components

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { get } from 'lodash';
import PlacesTable from './placesTable';

class PlacesList extends Component {
  render() {
    const places = get(this.props, 'services.placesData', []);
    return (
      <PlacesTable places={places} />
    )
  }
}

const mapStateToProps = state => {
  return Object.assign({}, state);
}

export default withRouter(connect(mapStateToProps)(PlacesList));
