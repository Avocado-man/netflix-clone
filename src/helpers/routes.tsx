import React from 'react'
// Router
import { Route, Redirect } from 'react-router-dom'

type IsUserRedirectProps = {
  user: any
  loggedInPath: string
  path: string
  exact: boolean
}

type ProtectedRouteProps = {
  user: any
  path: string
  exact: boolean
}

export const IsUserRedirect: React.FC<IsUserRedirectProps> = ({
  user,
  loggedInPath,
  children,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(): React.ReactNode | null => {
        if (!user) {
          return children
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          )
        }
        return null
      }}
    />
  )
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  user,
  children,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location }): React.ReactNode | null => {
        if (user) {
          return children
        }
        if (!user) {
          return (
            <Redirect
              to={{
                pathname: 'signin',
                state: { from: location },
              }}
            />
          )
        }
        return null
      }}
    />
  )
}
