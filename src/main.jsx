import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReviewSystem from './review-system.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReviewSystem />
  </StrictMode>,
)
