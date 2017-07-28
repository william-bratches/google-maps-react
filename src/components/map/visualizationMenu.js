import React from 'react';
import { Link } from 'react-router-dom';

const VisualizationMenu = () =>
  <div className="container">
    <Link className="viz-button" to="/distancePrice">
      <div className="undecorated">Distance/Price</div>
    </Link>
    <Link className="viz-button" to="/priceRating">
      <div className="undecorated">Price/Rating</div>
    </Link>
    <Link className="viz-button" to="/wordsHoursPrice">
      <div className="undecorated">Words/Hours/Price</div>
    </Link>
  </div>;

export default VisualizationMenu;
