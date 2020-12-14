import React from 'react'
// Components
import { Header } from '../components'
// Routes
import * as ROUTES from '../constants/routes'
// svg
import logo from '../logo.svg'

const HeaderContainer: React.FC = ({ children }): JSX.Element => {
  return (
    <Header bg>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        <Header.Button to={ROUTES.SIGN_IN}>Sign In</Header.Button>
      </Header.Frame>
      {children}
    </Header>
  )
}

export default HeaderContainer
