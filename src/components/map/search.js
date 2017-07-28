import React, { Component } from 'react';
import searchPlaces from '../../actions/services';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      radius: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  fetchPlaces() {
    if (!this.state.address || !this.state.radius) {
      return alert('Please fill in both fields before searching.');
    }
    this.props.searchPlaces(this.state, this.props);
  }

  render() {
    return (
      <div className="container">
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="radius"
          placeholder="Radius"
          onChange={this.handleChange}
        />
        <div className="action-button" onClick={() => this.fetchPlaces()}>
          Search
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return Object.assign({}, state);
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(searchPlaces, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
