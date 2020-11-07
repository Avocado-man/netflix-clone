import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Routes
import * as ROUTES from './constants/routes'
// Pages
import { Home, Browse, Signin, Signup } from './pages'

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route path={ROUTES.BROWSE}>
        <Browse />
      </Route>
      <Route path={ROUTES.SIGN_IN}>
        <Signin />
      </Route>
      <Route path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>
    </Router>
  )
}

export default App
