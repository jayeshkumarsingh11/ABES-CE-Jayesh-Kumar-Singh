import React from 'react'
import './nav.css'
import { Link, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login';
import Register from '../pages/Register';

function Nav() {
    return (
        <div className="nav-root">
            <h2 className="nav-title">Book App</h2>
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </div>
    )
}

export default Nav;