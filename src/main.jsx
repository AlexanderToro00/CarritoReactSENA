import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './ComponentesProductos/App.jsx'
import { Header } from './Componentesgenerales/header.jsx'
import { Footer } from './Componentesgenerales/footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header/>
    <Footer/>
  </StrictMode>,
)
