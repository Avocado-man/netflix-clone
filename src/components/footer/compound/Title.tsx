import React from 'react'
// Styled
import { Title } from '../styles/footer'

const FooterTitle: React.FC = ({ children, ...restProps }): JSX.Element => {
  return <Title {...restProps}>{children}</Title>
}

export default FooterTitle
