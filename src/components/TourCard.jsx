//TourCard.jsx Created

import React, { useState } from 'react';

function TourCard({ id, name, info, price, image, onRemove }) {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => setReadMore(!readMore);

  return (
    <div className="tour-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>
        {readMore ? info : `${info.substring(0, 150)}...`}
        <button onClick={toggleReadMore}>
          {readMore ? 'Show Less' : 'Read More'}
        </button>
      </p>
      <p><strong>Price:</strong> {price}</p>
      <button className="remove-btn" onClick={() => onRemove(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default TourCard;
