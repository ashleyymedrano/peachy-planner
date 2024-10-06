import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Page from './page.jsx'
import './globals.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
