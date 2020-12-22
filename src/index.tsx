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

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
)

// 3:54:00
