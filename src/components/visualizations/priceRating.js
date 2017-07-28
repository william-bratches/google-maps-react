import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  VictoryLabel,
  VictoryScatter,
  VictoryTheme,
  VictoryChart
} from 'victory';
import { priceRating } from '../../lib/dataFormatter';
import '../../styles/style.css';

class PriceRating extends Component {
  render() {
    return (
      <div className="chart-container">
        <VictoryChart
          theme={VictoryTheme.material}
          domain={{ x: [0, 4], y: [0, 5] }}
        >
          <VictoryScatter
            style={{ data: { fill: '#8EFAAF' } }}
            size={5}
            data={priceRating(this.props.services.placesData)}
          />
          <VictoryLabel
            angle="90"
            x="10"
            y="150"
            textAnchor="middle"
            text="Rating"
          />
          <VictoryLabel
            x="180"
            y="340"
            textAnchor="middle"
            text="Price Level"
          />
          <VictoryLabel
            x="180"
            y="20"
            textAnchor="middle"
            text={['Price vs Rating']}
          />
        </VictoryChart>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return Object.assign({}, state);
};

export default withRouter(connect(mapStateToProps)(PriceRating));
