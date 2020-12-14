import React from 'react'
// Styled
import { Container } from '../styles/header'

const HeaderFrame: React.FC = ({ children, ...restProps }): JSX.Element => {
  return <Container {...restProps}>{children}</Container>
}

export default HeaderFrame
