import React from 'react'
// Styled
import { Break } from '../styles/footer'

const FooterBreak: React.FC = ({ children, ...restProps }): JSX.Element => {
  return <Break {...restProps}>{children}</Break>
}

export default FooterBreak
