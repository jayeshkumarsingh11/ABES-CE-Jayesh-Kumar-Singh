import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Book from './components/Book'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css'

function Home() {
  return (
    <div id="adi">
      <h2>Book List</h2>
      <Book title="Math" price={200} />
      <Book title="Physise" price={500} />
      <Book title="Chemistry" price={900} />
    </div>
  )
}

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App