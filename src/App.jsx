import React, { useState, useEffect } from 'react'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import PendingApproval from './components/PendingApproval'
import Dashboard from './components/Dashboard'
import { getStoredAuth, clearAuth } from './services/api'

export default function App() {
  const [view, setView] = useState('login')
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  const handleLogin = (userData, token) => {
    setUser(userData)
    setToken(token)
    if (userData.role === 'therapist' && userData.status === 'pending') setView('pending')
    else setView('dashboard')
  }

  const handleSignup = (userData, token) => {
    setUser(userData)
    setToken(token)
    if (userData.role === 'therapist') setView('pending')
    else setView('dashboard')
  }

  const handleLogout = () => {
    clearAuth()
    setUser(null)
    setToken(null)
    setView('login')
  }

  // Rehydrate auth from storage on mount
  useEffect(() => {
    const { token: storedToken, user: storedUser } = getStoredAuth()
    if (storedUser) {
      setUser(storedUser)
      setToken(storedToken)
      if (storedUser.role === 'therapist' && storedUser.status === 'pending') setView('pending')
      else setView('dashboard')
    }
  }, [])

  if (view === 'login') return <LoginPage onLogin={handleLogin} onSwitchToSignup={() => setView('signup')} />
  if (view === 'signup') return <SignupPage onSignup={handleSignup} onSwitchToLogin={() => setView('login')} />
  if (view === 'pending') return <PendingApproval onBackToLogin={() => setView('login')} />
  if (view === 'dashboard' && user) return <Dashboard user={user} token={token} onLogout={handleLogout} />

  return null
}
