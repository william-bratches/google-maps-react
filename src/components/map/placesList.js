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
    return (
      <div>
        <div className="list-btn-container">
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
          <div
            onClick={() => this.props.selectRandom(this.props)}
            className="viz-button"
          >
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
  return bindActionCreators(services, dispatch);
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PlacesList)
);
