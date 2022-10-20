import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { AppTheme } from './theme'
import { HomePage } from './pages/HomePage'
import { AppRouter } from './routes/AppRouter'

export const App = () => {
  return(
    <div>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </div>
  )
}
