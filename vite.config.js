import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        includeAssets: ["favicon.ico", "apple-touch-icon.png", "assets/*"],
        name: 'Simplifying Progressive Web App (PWA) Development with Vite: A Beginners Guide',
        short_name: 'PWA Guide',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: '/images/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/images/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest}"],
      }
    })
  ],

  // ✅ Allow external hosts (ngrok)
  server: {
    port: 5173,              // your frontend port
    host: true,              // expose to all network interfaces
    allowedHosts: ['.ngrok-free.app'], // allow any ngrok subdomain
    proxy: {
      // 👇 automatically forward API calls to backend
      '/api': {
        target: 'http://localhost:5501',
        changeOrigin: true,
        secure: false,
      },
    },
  }
})
