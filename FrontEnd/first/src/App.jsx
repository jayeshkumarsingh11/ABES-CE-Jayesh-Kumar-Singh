import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Navbar from '../src/component/Navbar/navbar';
import Button from '../src/component/Button/button';
import Card from '../src/component/Card/card';
import Card2 from '../src/component/Card/Card2';

function App() {

  return (
    <>
      <Navbar />
      <Button />
      <Card />
      <Card2 />
      <Card />
    </>
  )
}

export default App;
