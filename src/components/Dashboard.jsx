import React, { useState } from 'react'
import { Heart, Book, MessageSquare, TrendingUp, Users, Calendar, Clock } from 'lucide-react'
import Sidebar from './Sidebar'
import Header from './Header'
import MoodModal from './MoodModal'
import JournalModal from './JournalModal'
import CommunityPage from './CommunityPage'
import TherapistsPage from './TherapistsPage'

export default function Dashboard({ userRole, onLogout }) {
  const [activeTab, setActiveTab] = useState('overview')
  const [moodEntries, setMoodEntries] = useState([])
  const [journalEntries, setJournalEntries] = useState([])
  const [showMoodModal, setShowMoodModal] = useState(false)
  const [showJournalModal, setShowJournalModal] = useState(false)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const renderContent = () => {
    if (activeTab === 'logout') {
      return (
        <div className="p-8 max-w-md mx-auto mt-20">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Logout</h2>
            <p className="text-gray-600 mb-8">Are you sure you want to logout?</p>
            <button onClick={onLogout} className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold">Confirm Logout</button>
          </div>
        </div>
      )
    }

    if (userRole === 'admin') {
      return (
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center"><Users className="w-6 h-6 text-emerald-600" /></div>
              </div>
              <p className="text-2xl font-bold text-gray-900">1,248</p>
              <p className="text-sm text-gray-600">Total Users</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center"><Users className="w-6 h-6 text-emerald-600" /></div>
                <span className="text-sm font-semibold" style={{color: '#FF7A59'}}>5 pending</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">32</p>
              <p className="text-sm text-gray-600">Therapists</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center"><TrendingUp className="w-6 h-6 text-emerald-600" /></div>
              </div>
              <p className="text-2xl font-bold text-gray-900">92%</p>
              <p className="text-sm text-gray-600">System Health</p>
            </div>
          </div>
        </div>
      )
    }

    if (userRole === 'therapist') {
      return (
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Therapist Dashboard</h1>
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"><div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4"><Users className="w-6 h-6 text-emerald-600" /></div><p className="text-2xl font-bold text-gray-900">24</p><p className="text-sm text-gray-600">Active Patients</p></div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"><div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4"><Calendar className="w-6 h-6 text-emerald-600" /></div><p className="text-2xl font-bold text-gray-900">8</p><p className="text-sm text-gray-600">Today's Sessions</p></div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"><div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4"><MessageSquare className="w-6 h-6 text-emerald-600" /></div><p className="text-2xl font-bold text-gray-900">15</p><p className="text-sm text-gray-600">Messages</p></div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"><div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4"><Clock className="w-6 h-6 text-emerald-600" /></div><p className="text-2xl font-bold text-gray-900">3</p><p className="text-sm text-gray-600">Pending Requests</p></div>
          </div>
        </div>
      )
    }

    return (
      <div className="p-4 sm:p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back! 👋</h1>
        <p className="text-gray-600 mb-8">Your emotional wellness overview</p>

        {activeTab === 'overview' && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center"><Heart className="w-6 h-6 text-emerald-600" /></div>
                  <span className="text-sm font-semibold text-emerald-600">+12%</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">{moodEntries.length}</p>
                <p className="text-sm text-gray-600">Mood Check-ins</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center"><Book className="w-6 h-6 text-emerald-600" /></div>
                  <span className="text-sm font-semibold text-emerald-600">+{journalEntries.length}</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">{journalEntries.length}</p>
                <p className="text-sm text-gray-600">Journal Entries</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4"><MessageSquare className="w-6 h-6 text-emerald-600" /></div>
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-sm text-gray-600">Groups Joined</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center"><TrendingUp className="w-6 h-6 text-emerald-600" /></div>
                  <span className="text-sm font-semibold text-emerald-600">+5%</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">78%</p>
                <p className="text-sm text-gray-600">Wellness Score</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white mb-8"><h3 className="font-bold text-lg mb-2">Quick Actions</h3><div className="flex space-x-4"><button onClick={() => setShowMoodModal(true)} className="px-6 py-3 rounded-lg font-semibold" style={{backgroundColor: '#FF7A59'}}>Log Mood</button><button onClick={() => setShowJournalModal(true)} className="px-6 py-3 bg-white text-emerald-600 rounded-lg font-semibold">Write Journal</button></div></div>
          </>
        )}

        {activeTab === 'mood' && (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Mood Tracking</h3>
              <button onClick={() => setShowMoodModal(true)} className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700">+ Add Mood</button>
            </div>
            <div className="space-y-4">
              {moodEntries.length === 0 ? (
                <p className="text-center text-gray-500 py-8">No mood entries yet. Start tracking your mood!</p>
              ) : (
                moodEntries.map((entry, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{entry.emoji}</div>
                      <div>
                        <p className="font-semibold text-gray-900">{entry.mood}</p>
                        <p className="text-sm text-gray-600">{entry.date}</p>
                      </div>
                    </div>
                    {entry.note && (
                      <p className="text-sm text-gray-600 max-w-md">{entry.note}</p>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {activeTab === 'journal' && (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">My Journal</h3>
              <button onClick={() => setShowJournalModal(true)} className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700">+ New Entry</button>
            </div>
            <div className="space-y-4">
              {journalEntries.length === 0 ? (
                <p className="text-center text-gray-500 py-8">No journal entries yet. Start writing!</p>
              ) : (
                journalEntries.map((entry, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{entry.title}</h4>
                      <p className="text-sm text-gray-500">{entry.date}</p>
                    </div>
                    <p className="text-gray-700">{entry.content}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {activeTab === 'community' && (
          <CommunityPage />
        )}

        {activeTab === 'therapists' && (
          <TherapistsPage />
        )}

        {showMoodModal && (<MoodModal onClose={() => setShowMoodModal(false)} onSave={(mood) => { setMoodEntries([...moodEntries, mood]); setShowMoodModal(false); }} />)}
        {showJournalModal && (<JournalModal onClose={() => setShowJournalModal(false)} onSave={(entry) => { setJournalEntries([...journalEntries, entry]); setShowJournalModal(false); }} />)}
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} userRole={userRole} mobileOpen={mobileSidebarOpen} onClose={() => setMobileSidebarOpen(false)} />
      <div className="flex-1 flex flex-col">
        <Header userName="User Name" userRole={userRole} onMenuToggle={() => setMobileSidebarOpen(v => !v)} />
        <div className="flex-1 overflow-auto">{renderContent()}</div>
      </div>
    </div>
  )
}
