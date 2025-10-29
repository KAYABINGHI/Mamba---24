import React, { useState } from 'react'
import { Heart } from 'lucide-react'

export default function LoginPage({ onLogin, onSwitchToSignup }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    let role = 'patient'
    let status = 'approved'
    if (email.includes('therapist')) {
      role = 'therapist'
      status = email.includes('pending') ? 'pending' : 'approved'
    } else if (email.includes('admin')) {
      role = 'admin'
    }

    onLogin({ name: 'User', email, role, status }, 'token123')
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row" style={{backgroundColor: '#A8C686'}}>
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">EMAGE</h1>
                <p className="text-xs text-gray-500">EMOTIONAL WELLNESS</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-emerald-900">welcome back</h2>
          <p className="text-gray-600 mb-6">Please login to your account by filling the form below.</p>

          {error && (<div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">{error}</div>)}

          <div className="space-y-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Email Address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="coolname@name.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600" />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="**************" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600" />
            </div>

            <div className="flex items-center justify-between flex-col sm:flex-row gap-3">
              <label className="flex items-center">
                <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="mr-2" />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <button className="text-sm text-gray-600 hover:text-emerald-600">Forgot password</button>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={handleLogin} className="w-full sm:flex-1 py-3 bg-emerald-800 text-white rounded-lg font-semibold hover:bg-emerald-900">LOGIN</button>
              <button onClick={onSwitchToSignup} className="w-full sm:flex-1 py-3 border-2 border-emerald-800 text-emerald-800 rounded-lg font-semibold hover:bg-emerald-50">SIGN UP</button>
            </div>
          </div>

          {/* <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-xs text-blue-800 font-semibold mb-2">Demo Accounts:</p>
            <p className="text-xs text-blue-700">• patient@test.com - Patient Dashboard</p>
            <p className="text-xs text-blue-700">• therapist@test.com - Therapist Dashboard</p>
            <p className="text-xs text-blue-700">• therapist-pending@test.com - Needs Approval</p>
            <p className="text-xs text-blue-700">• admin@test.com - Admin Dashboard</p>
            <p className="text-xs text-blue-700 mt-2">Password: any</p>
          </div> */}
        </div>
      </div>

      <div className="hidden md:flex md:w-1/2 relative bg-gradient-to-br from-emerald-900 to-emerald-700 flex items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'}}></div>
        </div>
        <div className="relative z-10 text-white text-center">
          <div className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-16 h-16 text-white" fill="currentColor" />
          </div>
          <h2 className="text-4xl font-bold mb-2">EMAGE</h2>
          <p className="text-emerald-100">Emotional Awareness & Guided Expression</p>
        </div>
      </div>
    </div>
  )
}
