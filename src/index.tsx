import React from 'react'
import { render } from 'react-dom'
import 'normalize.css'
// Components
import App from './App'
// Styles
import { GlobalStyles } from './global-styles'
// Firebase
import { firebase } from './lib/firebase.prod'
// Context
import { FirebaseContext } from './context/firebase'

const root = document.getElementById('root')
render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  root
)

// ~5:25:00
