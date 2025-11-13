import './Fashion.css'

function Fashion({props}) {
  return (
    <div className='card'>
      <img src = {props.image} alt="" height={170} width={170}/>
      <h4>Title:{props.title}</h4>
      <h4>Price:₹{props.price}</h4>
    </div>
  )
}

export default Fashion
