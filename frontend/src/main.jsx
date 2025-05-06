import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StoreContextProvider from './Context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
 </BrowserRouter>
   
  
)
