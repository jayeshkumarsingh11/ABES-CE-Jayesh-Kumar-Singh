import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../index.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!email || !password) {
      setError('Please enter email and password')
      return
    }
    // Dummy auth: accept any non-empty credentials
    // In a real app you'd call an API and handle tokens
    console.log('login', { email, password })
    navigate('/')
  }

  return (
    <div className="auth-card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </label>
        {error && <div className="auth-error">{error}</div>}
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  )
}
