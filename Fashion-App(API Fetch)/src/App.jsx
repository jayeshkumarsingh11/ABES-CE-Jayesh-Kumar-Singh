import { useEffect, useState } from 'react'
import './App.css'
import Fashion from './components/Fashion'

function App() {
  const[fashion, setFashion] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      setFashion(data);
    })
  }, [])
  return (
    <div>
      {
        fashion.map((prop, item) => (
          <Fashion
            key={item}
            props = {prop} 
          />
        ))
      }
    </div>
  )
}

export default App
