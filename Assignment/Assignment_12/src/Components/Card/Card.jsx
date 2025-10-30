import React from 'react'
import './styles.css'

function Card(props) {
  return (
    <div id='card1'>
        <img src={props.image} alt="" height={150} width={150}/>
      <h1>{props.name}</h1>
      <h3>₹{props.Rate}</h3>
    </div>
  )
}

export default Card;
