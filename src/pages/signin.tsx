import React, { useContext, useState } from 'react'
// Router
import { useHistory } from 'react-router-dom'
// Context
import { FirebaseContext } from '../context/firebase'
// Components
import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import { Form } from '../components'
// constants
import * as ROUTES from '../constants/routes'

const SignIn: React.FC = (): JSX.Element => {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)
  const [emailAddress, setEmailAddress] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState('')

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        // push to browse page
        history.push(ROUTES.BROWSE)
      })
      .catch((e: any) => {
        setEmailAddress('')
        setPassword('')
        setError(e.message)
      })
  }

  const isInvalid = password === '' || emailAddress === ''

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
            <Form.Submit type="submit" disabled={isInvalid}>
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you&apos;re not
            a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}

export default SignIn
