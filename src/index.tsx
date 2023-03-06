import './declarations.d'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import { App } from './App'

import './global.scss'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  }
])

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
