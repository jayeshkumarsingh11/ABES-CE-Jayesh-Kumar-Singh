import React from 'react'
import './weather.css'

function Weather({ data }) {
  const { location, current } = data;

  return (
    <div className="weather-info">
      <div className="location-info">
        <h2 className="city-name">{location.name}</h2>
        <p className="country">{location.region}, {location.country}</p>
        <p className="local-time">
          {new Date(location.localtime).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
      </div>

      <div className="current-weather">
        <div className="temp-section">
          <img 
            src={current.condition.icon} 
            alt={current.condition.text}
            className="weather-icon"
          />
          <div className="temperature">
            <span className="temp-value">{current.temp_c}°</span>
            <span className="temp-unit">C</span>
          </div>
        </div>
        <p className="condition">{current.condition.text}</p>
      </div>
    </div>
  )
}

export default Weather
