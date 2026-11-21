import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import {Salam} from './components/salam'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <Salam /> */}
  </StrictMode>,
)
