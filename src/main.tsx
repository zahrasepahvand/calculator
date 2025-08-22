import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'semantic-ui-css/semantic.min.css';


createRoot(document.getElementById('Root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
