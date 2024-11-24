import React from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles'
import { RouterProvider } from 'react-router-dom'
import router from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
