import React, { Component } from 'react';
import searchPlaces from '../../actions/services';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class Search extends Component {
  // TODO: error handling for empty values
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

  render() {
    // TODO: get prettier and lint working
    return (
      <div>
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
        <button onClick={() => this.props.searchPlaces(this.state, this.props)}>
          Search
        </button>
        <nav>
          <Link to="/priceRating">Dashboard</Link>
        </nav>
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
