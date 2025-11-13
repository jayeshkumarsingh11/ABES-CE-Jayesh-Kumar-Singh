import React from 'react'

function Weather({props}) {
  return (
    <div>
      <h1>Weather App</h1>
      <h2>City: {props.name}</h2>
        <h3>Temperature: {props.current.temp_c} °C</h3>
    </div>
  )
}

export default Weather
