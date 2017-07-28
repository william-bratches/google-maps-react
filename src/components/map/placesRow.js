import React from 'react';

const PlacesRow = ({ place }) =>
  <tr>
    <td>
      <div className="list-card">
        <div>
          {place.name}
        </div>
        <p className="yellow">
          ★{place.rating}
        </p>
        <p className="green">
          Price Level: {place.price_level || 'Unknown'}
        </p>
      </div>
    </td>
  </tr>;

export default PlacesRow;
