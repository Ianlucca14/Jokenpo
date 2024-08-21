import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Joke from './Jokenpo/Jokenpo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Joke/>
  </StrictMode>,
)
