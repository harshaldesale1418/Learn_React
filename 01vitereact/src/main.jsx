import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = React.createElement(
  'h1',
  {},
  'hello this is custom react element'
)

createRoot(document.getElementById('root')).render(
//  reactElement

<App/>

)
