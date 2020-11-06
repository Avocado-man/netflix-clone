import React from 'react'
// Styled
import { Title } from '../styles/jumbotron'

export const JumbotronTitle: React.FC = ({
  children,
  ...restProps
}): JSX.Element => {
  return <Title {...restProps}>{children}</Title>
}
