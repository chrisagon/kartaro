import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppWithProviders from './App'
import { AuthProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <AppWithProviders />
    </AuthProvider>
  </React.StrictMode>,
)
