import React, { useState } from 'react'
import { Heart } from 'lucide-react'

export default function SignupPage({ onSignup, onSwitchToLogin }) {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'patient', specialty: '' })
  const [error, setError] = useState('')

  const handleSignup = () => {
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all fields')
      return
    }
    if (formData.role === 'therapist' && !formData.specialty) {
      setError('Please enter your specialty')
      return
    }
    onSignup({ ...formData, status: formData.role === 'therapist' ? 'pending' : 'approved' }, 'token123')
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

          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-emerald-900">create account</h2>
          <p className="text-gray-600 mb-6">Join EMAGE for your emotional wellness journey</p>

          {error && (<div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">{error}</div>)}

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Full Name</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Email</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Password</label>
              <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">I am a:</label>
              <select value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                <option value="patient">Patient</option>
                <option value="therapist">Therapist</option>
              </select>
            </div>

            {formData.role === 'therapist' && (
              <div>
                <label className="block text-sm text-gray-600 mb-2">Specialty</label>
                <input type="text" value={formData.specialty} onChange={(e) => setFormData({...formData, specialty: e.target.value})} placeholder="e.g., Clinical Psychologist" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
              </div>
            )}

            <button onClick={handleSignup} className="w-full py-3 bg-emerald-800 text-white rounded-lg font-semibold hover:bg-emerald-900">SIGN UP</button>

            <p className="text-center text-sm text-gray-600">Already have an account?{' '}<button onClick={onSwitchToLogin} className="text-emerald-700 font-semibold">Login</button></p>
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:w-1/2 relative bg-gradient-to-br from-emerald-900 to-emerald-700"></div>
    </div>
  )
}
