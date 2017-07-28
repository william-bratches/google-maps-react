import React from 'react';
import { Link } from 'react-router-dom';

const VisualizationMenu = () =>
  <div className="container">
    <div className="viz-button">
      <Link className="undecorated" to="/distancePrice">
        Distance/Price
      </Link>
    </div>
    <div className="viz-button">
      <Link className="undecorated" to="/priceRating">
        Price/Rating
      </Link>
    </div>
    <div className="viz-button">
      <Link className="undecorated" to="/wordsHoursPrice">
        Words/Hours/Price
      </Link>
    </div>
  </div>;

export default VisualizationMenu;
