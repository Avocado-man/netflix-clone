import React from 'react'
// Styled
import { Row } from '../styles/footer'

const FooterRow: React.FC = ({ children, ...restProps }): JSX.Element => {
  return <Row {...restProps}>{children}</Row>
}

export default FooterRow
