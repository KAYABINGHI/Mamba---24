import React, { useEffect, useState } from 'react'
import { Search, Bell, Menu, DownloadCloud } from 'lucide-react'

export default function Header({ userName, userRole, onMenuToggle }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [canInstall, setCanInstall] = useState(false)

  useEffect(() => {
    function onBeforeInstallPrompt(e) {
      e.preventDefault()
      setDeferredPrompt(e)
      setCanInstall(true)
    }

    function onAppInstalled() {
      setDeferredPrompt(null)
      setCanInstall(false)
    }

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt)
    window.addEventListener('appinstalled', onAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt)
      window.removeEventListener('appinstalled', onAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return
    try {
      deferredPrompt.prompt()
      const choiceResult = await deferredPrompt.userChoice
      // hide the install UI regardless of choice
      setDeferredPrompt(null)
      setCanInstall(false)
      // optional: log the user's choice
      console.log('PWA install choice:', choiceResult)
    } catch (err) {
      console.error('PWA install failed', err)
    }
  }

  return (
    <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-3">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* mobile menu button */}
          <button onClick={onMenuToggle} className="md:hidden p-2 rounded-lg hover:bg-gray-100"><Menu className="w-5 h-5 text-gray-600" /></button>

          <div className="w-full max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {/* PWA install button (shows when beforeinstallprompt fires) */}
          {canInstall && (
            <button onClick={handleInstallClick} className="hidden sm:inline-flex items-center gap-2 px-3 py-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100">
              <DownloadCloud className="w-4 h-4" />
              <span className="text-sm font-medium">Install</span>
            </button>
          )}

          <button className="p-2 hover:bg-gray-100 rounded-lg relative"><Bell className="w-5 h-5 text-gray-600" /><span className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{backgroundColor: '#FF7A59'}}></span></button>

          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-emerald-100 rounded-full flex items-center justify-center"><span className="text-emerald-700 font-semibold text-sm">{userName.split(' ').map(n => n[0]).join('')}</span></div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-gray-900">{userName}</p>
              <p className="text-xs text-gray-500 capitalize">{userRole}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
