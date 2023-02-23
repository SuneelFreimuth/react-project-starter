import './declarations.d'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

import './global.scss'

createRoot(document.getElementById('app')).render(<App/>)
