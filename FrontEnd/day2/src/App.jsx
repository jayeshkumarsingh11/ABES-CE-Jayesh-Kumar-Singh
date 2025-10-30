import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Card from './components/card/Card'
import Navbar from './components/navbar/navbar';

function App() {
  

  return (
    <>
      <Navbar />
      <Card name = "Jayesh" education = "12th"/>
      <Card name = "Adi" education = "12th"/>
      <Card name = "Lavish" education = "12th"/>
    </>
  )
}

export default App
