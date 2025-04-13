//Gallery.jsx Created

import React from 'react';
import TourCard from './TourCard';

function Gallery({ tours, onRemove }) {
  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default Gallery;
