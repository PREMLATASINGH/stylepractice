import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Heading from './heading.jsx'
import List from './List.jsx'
import Table from './Table.jsx'
import Form from './Form.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Heading />
    <List />
    <Table />
    <Form />
    
  </StrictMode>,
)
