import React from 'react'
import './styles.css'

function Card(props) {
  return (
    <div id='card1'>
        <img src="https://cdn.vectorstock.com/i/1000v/92/08/panda-cartoon-cute-animals-vector-39469208.jpg" alt="" height={100} width={100}/>
      <h1>{props.name}</h1>
      <h3>{props.education}</h3>
    </div>
  )
}

export default Card;
