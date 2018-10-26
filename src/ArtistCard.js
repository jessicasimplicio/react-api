import React from 'react';
import './ArtistCard.css';

function ArtistCard(props) {
  return (
    <div className="my-card">
      <h1>{props.name}</h1>
      <h2>{props.genre}</h2>
    </div>
  );
}

export default ArtistCard;
