import React from 'react'
// Types
import { Pane } from '../styles/jumbotron'

export const JumbotronPane: React.FC = ({
  children,
  ...restProps
}): JSX.Element => {
  return <Pane {...restProps}>{children}</Pane>
}
