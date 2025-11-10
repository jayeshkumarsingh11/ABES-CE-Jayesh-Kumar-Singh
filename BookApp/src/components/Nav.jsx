import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Nav() {
    const { itemCount } = useCart();

    return (
        <div className="nav-root">
            <h2 className="nav-title">Book App</h2>
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li>
                    <Link to="/cart" className="cart-link">
                        Cart
                        {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;