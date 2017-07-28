import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { get } from 'lodash';
import { VictoryBar, VictoryLabel, VictoryGroup } from 'victory';
import { distancePrice } from '../../lib/dataFormatter';
import '../../styles/style.css';

class DistancePrice extends Component {
  render() {
    const placesData = get(this.props, 'services.placesData', []);
    return (
      <div>
        <VictoryGroup
          offset={20}
          colorScale={'qualitative'}
          labels={datum => datum.x}
          style={{
            labels: {
              fontSize: 4
            }
          }}
          labelComponent={<VictoryLabel dy={0} />}
        >
          <VictoryBar
            color="green"
            data={distancePrice(placesData, this.props).prices}
          />
          <VictoryBar
            color="grey"
            data={distancePrice(placesData, this.props).distances}
          />

          <VictoryLabel
            x="250"
            y="20"
            textAnchor="middle"
            text={['Distance and Price', 'Green is price', 'Grey is distance']}
          />
        </VictoryGroup>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return Object.assign({}, state);
};

export default withRouter(connect(mapStateToProps)(DistancePrice));
