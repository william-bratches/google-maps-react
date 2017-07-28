import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () =>
  <div className="container">
    <Link className="viz-button" to="/">
      <div className="undecorated">Back</div>
    </Link>
  </div>;

export default BackButton;
