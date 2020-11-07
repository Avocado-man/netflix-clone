import React from 'react'
import { render } from 'react-dom'
import 'normalize.css'
// Components
import App from './App'
// Styles
import { GlobalStyles } from './global-styles'

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
)

// 2:21:16
