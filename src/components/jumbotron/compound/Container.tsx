import React from 'react'
// Styled
import { Container } from '../styles/jumbotron'

export const JumbotronContainer: React.FC = ({
  children,
  ...restProps
}): JSX.Element => {
  return <Container {...restProps}>{children}</Container>
}
