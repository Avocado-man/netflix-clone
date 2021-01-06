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

const SignUp: React.FC = (): JSX.Element => {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)

  const [firstName, setFirstName] = useState<string>('')
  const [emailAddress, setEmailAddress] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState('')

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result: any) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE)
          })
      )
      .catch((e: any) => {
        setFirstName('')
        setEmailAddress('')
        setPassword('')
        setError(e.message)
      })
  }

  const isInvalid = firstName === '' || password === '' || emailAddress === ''

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sing Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignUp} method={'POST'}>
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }: any): void => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }: any): void =>
                setEmailAddress(target.value)
              }
            />
            <Form.Input
              placeholder="Password"
              value={password}
              onChange={({ target }: any): void => setPassword(target.value)}
              type="password"
              autoComplete="off"
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already a user{' '}
              <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you&apos;re
              not a bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}

export default SignUp
