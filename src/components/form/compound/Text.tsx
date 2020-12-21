import React from 'react'
// styled
import { Text } from '../styles/form'

const FormText: React.FC = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>
}

export default FormText
