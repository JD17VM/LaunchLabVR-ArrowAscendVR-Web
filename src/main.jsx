import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/styles/normalize.css'
import './assets/styles/estilos_generales.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
