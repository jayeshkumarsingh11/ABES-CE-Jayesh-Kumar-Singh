import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="nav-brand">BookApp</Link>
      </div>
      <div className="nav-right">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Register</Link>
      </div>
    </nav>
  )
}
