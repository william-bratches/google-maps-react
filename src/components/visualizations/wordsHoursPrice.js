import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import {
  VictoryChart,
  VictoryScatter,
  VictoryLabel,
  VictoryTheme
} from 'victory';
import { wordsHoursPrice } from '../../lib/dataFormatter';
import services from '../../actions/services';
import '../../styles/style.css';

class WordsHoursPrice extends Component {
  componentWillMount() {
    this.props.fetchDetails(this.props);
  }

  render() {
    return (
      <div className="chart-container">
        <VictoryChart
          theme={VictoryTheme.material}
          domain={{ x: [0, 170], y: [0, 5] }}
        >
          <VictoryScatter
            style={{
              data: { fill: '#c43a31' },
              parent: { border: '1px solid #ccc' }
            }}
            bubbleProperty="amount"
            maxBubbleSize={25}
            minBubbleSize={5}
            data={wordsHoursPrice(this.props.services.placesDetails)}
          />
          <VictoryLabel
            angle="90"
            x="10"
            y="150"
            textAnchor="middle"
            text="Price Level"
          />
          <VictoryLabel
            x="180"
            y="340"
            textAnchor="middle"
            text={['Hours Open']}
          />

          <VictoryLabel
            x="180"
            y="20"
            textAnchor="middle"
            text={[
              'Hours Open vs Words In Name vs Price',
              '(Bubble Size Indicates Words in Name)'
            ]}
          />
        </VictoryChart>
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
  connect(mapStateToProps, mapDispatchToProps)(WordsHoursPrice)
);
