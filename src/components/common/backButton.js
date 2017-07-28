import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () =>
  <div className="container">
    <div className="viz-button">
      <Link className="undecorated" to="/">
        Back
      </Link>
    </div>
  </div>;

export default BackButton;
