import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { VictoryChart, VictoryBar, VictoryLabel, VictoryGroup } from 'victory';
import { distancePrice } from '../../lib/dataFormatter';
import '../../styles/style.css';

class DistancePrice extends Component {
  render() {
    return (
      <div>
        <VictoryGroup
          offset={20}
          colorScale={'qualitative'}
          labels={datum => datum.x}
          labelComponent={<VictoryLabel dy={0} />}
        >
          <VictoryBar
            color="green"
            data={[
              { x: 'hello', y: 1 },
              { x: 'world', y: 2 },
              { x: 'foo', y: 5 }
            ]}
          />
          <VictoryBar
            color="grey"
            data={[
              { x: 'hello', y: 2 },
              { x: 'world', y: 1 },
              { x: 'foo', y: 7 }
            ]}
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
