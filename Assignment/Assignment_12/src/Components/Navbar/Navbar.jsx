import React from 'react'
import './styles.css'

function Navbar() {
  return (
    <>
        <nav className='nav'>
            <h1>Navbar</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li> 
            </ul>
            <input type="text" placeholder='Search...'/>
        </nav>
    </>
  )
}

export default Navbar;
