import image from '../assets/images/images.webp'; 

export default function Card2() {
  return (
    <div class="card" style={{ width: '400px' }}    >
        <img class="card-img-top" src={image}alt="Card image" />
        <div class="card-body">
            <h4 class="card-title">Lando Norris</h4>
            <p class="card-text">Lando Norris is a British racing driver who competes in Formula One for McLaren. Norris was runner-up in the Formula One World Drivers' Championship in 2024 with McLaren, and has won nine Grands Prix across seven seasons.</p>
            <a href="#" class="btn btn-primary">See Profile</a>
        </div>
    </div>
  )
}