import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Importa el archivo que define el web component
import './features/rent-button/reservation-button.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
      <reservation-button></reservation-button>
  </StrictMode>,
)
