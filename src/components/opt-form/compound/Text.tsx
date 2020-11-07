import React from 'react'
// Styled
import { Text } from '../styles/opt-form'

const OptFormText: React.FC = ({ children, ...restProps }): JSX.Element => {
  return <Text {...restProps}>{children}</Text>
}

export default OptFormText
