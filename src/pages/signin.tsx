import React, { useState } from 'react'
import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import { Form } from '../components'

const SignIn: React.FC = (): JSX.Element => {
  const [emailAddress, setEmailAddress] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState('')

  const handleSignIn = () => {
    console.log('s')
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }: any): void =>
                setEmailAddress(target.value)
              }
            />
            <Form.Input
              autoComplete="off"
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ target }: any): void => setPassword(target.value)}
            />
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}

export default SignIn
