import React, { useState } from 'react'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import PendingApproval from './components/PendingApproval'
import Dashboard from './components/Dashboard'

export default function App() {
  const [view, setView] = useState('login')
  const [user, setUser] = useState(null)

  const handleLogin = (userData, token) => {
    setUser(userData)
    if (userData.role === 'therapist' && userData.status === 'pending') setView('pending')
    else setView('dashboard')
  }

  const handleSignup = (userData, token) => {
    setUser(userData)
    if (userData.role === 'therapist') setView('pending')
    else setView('dashboard')
  }

  const handleLogout = () => {
    setUser(null)
    setView('login')
  }

  if (view === 'login') return <LoginPage onLogin={handleLogin} onSwitchToSignup={() => setView('signup')} />
  if (view === 'signup') return <SignupPage onSignup={handleSignup} onSwitchToLogin={() => setView('login')} />
  if (view === 'pending') return <PendingApproval onBackToLogin={() => setView('login')} />
  if (view === 'dashboard' && user) return <Dashboard userRole={user.role} onLogout={handleLogout} />

  return null
}
