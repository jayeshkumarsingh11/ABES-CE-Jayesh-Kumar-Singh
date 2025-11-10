import React from 'react'
import Book from './components/Book'
import './App.css'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'

function Home() {
  return (
    <div className="container">
      <h1 className="page-title">Featured Books</h1>
      <div id="adi">
        <Book title="Math" price="400" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvLl1PDJCVU4a8YgxQo5FRpbj5cREf8sjx6w&s" />
        <Book title="Physice" price="700" img="https://cdn.iconscout.com/icon/premium/png-256-thumb/physics-book-icon-svg-download-png-1730255.png" />
        <Book title="Chemistry" price="800" img="https://png.pngtree.com/png-clipart/20231015/original/pngtree-chemistry-text-book-picture-image_13167835.png" />
        <Book title="Computer" price="1000" img="https://www.helmandbooks.com/images/IMG_COVERPAGE_20230120_010311.jpg" />
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App