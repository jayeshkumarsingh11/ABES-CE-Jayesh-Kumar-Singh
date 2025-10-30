import './App.css'
import Card from './Components/Card/Card'
import Details from './Components/Details/Details'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/navbar'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <div className='card'>
        <Card
          name="Pizza"
          image="https://images.ctfassets.net/j8tkpy1gjhi5/5OvVmigx6VIUsyoKz1EHUs/b8173b7dcfbd6da341ce11bcebfa86ea/Salami-pizza-hero.jpg"
          Rate="250"
        />
        <Card 
          name="Burger"
          image="https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg"
          Rate="150"
        />
        <Card 
          name="Cake"
          image="https://www.fnp.com/images/pr/l/v20221205202818/cream-drop-chocolate-cake-1-kg_1.jpg"
          Rate="300"
        />
      </div>
      <Details />
    </>
  )
}

export default App
