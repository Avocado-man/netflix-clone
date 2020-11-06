import React from 'react'
// Styled
import { Column } from '../styles/footer'

const FooterColumn: React.FC = ({ children, ...restProps }): JSX.Element => {
  return <Column {...restProps}>{children}</Column>
}

export default FooterColumn
