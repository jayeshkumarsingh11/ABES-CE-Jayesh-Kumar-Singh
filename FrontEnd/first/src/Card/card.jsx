import image from '../assets/images/logo.png';    


export default function Card() {
  return (
    <div class="card" style={{ width: '400px' }}    >
        <img class="card-img-top" src={image}alt="Card image" />
        <div class="card-body">
            <h4 class="card-title">Max verstappen</h4>
            <p class="card-text">Max Emilian Verstappen is a Dutch and Belgian racing driver who competes under the Dutch flag in Formula One for Red Bull Racing. Verstappen has won four Formula One World Drivers' Championship titles, which he won consecutively from 2021 to 2024 with Red Bull, and has won 67 Grands Prix across 11 seasons.</p>
            <a href="#" class="btn btn-primary">See Profile</a>
        </div>
    </div>
  )
}
