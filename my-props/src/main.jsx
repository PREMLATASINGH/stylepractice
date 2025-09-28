import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './style.css'
import uday from './uday.jpg'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name="Beyonce" img ="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" alt='Beyonce' 
    Phone="123-456-7890"
       Email="beyonce@gmail.com"
       Address="123 Main St, Los Angeles, CA"/>
       <App name="jack"img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      Phone="+7387384587"Email="jack@.com"Address="123,New York"/>
      
       
    
  </StrictMode>,
)
