import React from 'react'
import { Title } from '../styles/card'

const CardTitle: React.FC = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}

export default CardTitle
