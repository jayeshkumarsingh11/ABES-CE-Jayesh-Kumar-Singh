import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './components/weather';

function App() {
  const [weather, setWeather] = useState([]);
  const apiKey = "YOUR_API_KEY";
  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London`)
  .then(res => res.json())
  .then(data => {
    setWeather([data]);
  })
  .catch(err => console.error(err));
  return (
    <div>
      {
        weather.map((prop, item) => (
          <Weather
            key={item}
            props = {prop} 
          />
        ))
      }
    </div>
  )
}

export default App
