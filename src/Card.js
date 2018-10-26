import React from 'react';
import './Card.css';

//children é um array tbm: children[0]

function Card(props) {
  return (
    <div className="my-card">
      {props.children}
    </div>
  );
}


export default Card;
