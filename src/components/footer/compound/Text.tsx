import React from 'react'
// Styled
import { Text } from '../styles/footer'

const FooterText: React.FC = ({ children, ...restProps }): JSX.Element => {
  return <Text {...restProps}>{children}</Text>
}

export default FooterText
