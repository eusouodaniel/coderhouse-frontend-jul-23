import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, Home } from './App.tsx'
import Coder from './Coder.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Home />
    <Coder />
  </React.StrictMode>,
)
