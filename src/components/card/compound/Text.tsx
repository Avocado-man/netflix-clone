import React from 'react'
import { Text } from '../styles/card'

const CardText: React.FC = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>
}

export default CardText
